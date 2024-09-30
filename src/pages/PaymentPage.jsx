import React, { useEffect, useState } from "react";
import BannerImg from "../assets/payment.png"
import LogoImg from "../assets/logo/white_bg.jpg"
import DarkLogoImg from "../assets/logo/footer_logo.png"
import Navbar from "../components/Navbar/Navbar";
import axios from 'axios';
import {useLocation , useNavigate } from "react-router-dom"; 
import { BACKEND_API, RAZORPAY_KEY } from "../utility/Constants";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase.config";
import { FaSpinner } from "react-icons/fa";

/**
* This page is responsible for the entire payment checkout
* for mentorsgyan
* @author Mayank Shukla
*/
const PaymentPage = () => {
	
	// User Data
	const [user, setUser] = useState(null);
	const [userExists, setUserExists] = useState();
	const [userAddress, setUserAddress] = useState('');
	const [userContact, setUserContact] = useState('')
	
	// State data reading
	const location = useLocation();
	const name = location.state ? location.state.data.name : '';
	const price = location.state ? location.state.data.price : '';
	const userData = location.state ? location.state.data.userData : '';
	// For test series data saving.
	const phoneNumber = location.state ? location.state.data.phoneNumber : undefined;

	const validity = location.state ? location.state.data.validity : -1;
	
	// For E-Books
	const driveSharingLink = location.state ? location.state.data.driveSharingLink : -1;
	const folderId = location.state ? location.state.data.folderId : -1
	
	const [coupon, setCoupon] = useState('');
	const [message, setMessage] = useState('');
	const [css, setCss] = useState('');
	const [discount, setDiscount] = useState(0);
	const [total, setTotal] = useState(price);
	const [paymentStatus, setPaymentStatus] = useState('NOT_STARTED');  // NOT_STARTED, STARTED, SUCCESSFUL, FAILED, WAITING
	const [activeCoupons, setActiveCoupons] = useState([]);
	const [userDataFetchStatus, setUserDataFetchStatus] = useState('FOUND'); // WAITING, FOUND, NOT_FOUND
	
	const handleCouponChange = (e) => {
		setCoupon(e.target.value);
	};
	
	const handlePageUnloading = async (event) => {
		event.preventDefault();
		if (paymentStatus === "SUCCESSFUL")
			return;
		let query = phoneNumber;
		if (phoneNumber === undefined) {
			query = user.email;
		}
		fetch(BACKEND_API + "/user/unload?phoneNumber=" + query)
		.then((response) => response.json())
		event.returnValue = '';
	}
	
	useEffect(() => {
		fetch(BACKEND_API + "/getCoupons")
		.then(response => {
			return response.json()
		})
		.then(data => {
			setActiveCoupons(data);
		})
	}, []);
	
	const navigate = useNavigate();
	
	useEffect(() => {
		const handlePopState = (event) => {
			const confirmLeave = window.confirm('Are you sure you want to leave this page?');
			if (!confirmLeave) {
				// Prevent navigation by pushing the current location again
				navigate(window.location.pathname, { replace: true });
			} else {
				handlePageUnloading();
			}
		};
		
		window.addEventListener('popstate', handlePopState);
		
		return () => {
			window.removeEventListener('popstate', handlePopState);
		};
	}, [navigate]);
	
	async function handleUserExists() {
		fetch(BACKEND_API + "/user/fetchUserData/" + auth.currentUser.email)
		.then((response) => {
			setUserExists(response.status === 200);
			setUserDataFetchStatus((response.status === 200 ? 'FOUND' : 'NOT_FOUND'));
			return response.json();
		})
		.then((data) => {
			setUserContact(data.phoneNumber);
			setUserAddress(data.city + ', ' + data.state);
		})
		.catch((error) => {
			console.error("Some error occurred: ", error);
		})
	}
	
	useEffect(() => {
		const subscribe = onAuthStateChanged(auth, (user) => {
			if (user) {
				handleUserExists();
				setUser(user);
			} else {
				setUserDataFetchStatus("NOT_FOUND");
			}
		});
		return () => subscribe();
	}, [])
	
	const verifyCoupon = () => {
		for (const element of activeCoupons) {
			if (coupon.toUpperCase() === element.couponName.toUpperCase()) {
				const couponDiscount = element.value;
				setMessage(`आपको ${couponDiscount}% की छूट मिली!`);
				setCss("text-green-600 ")
				setDiscount(Math.floor((couponDiscount / 100) * price))
				setTotal(price - Math.floor((couponDiscount / 100) * price))
				return;
			} else {
				setMessage('अमान्य कूपन कोड');
				setCss("text-red-400")
				setDiscount(0)
				setTotal(price)
			}
		}
	};
	
	// Razorpay section
	const handlePayment = async () => {
		try {
			const data = {
				amount: total,
				userData: userData
			}
			setPaymentStatus('STARTED');
			const orderResponse = await axios.post(BACKEND_API + '/createOrder', data);
			const { amount, id: order_id, currency } = orderResponse.data;
			const options = {
				key: RAZORPAY_KEY,
				amount: amount.toString(),
				order_id: order_id,
				currency: currency,
				name: 'MentorsGyan',
				description: `${name} के लिए भुगतान अनुरोध`,
				handler: async function (response) {
					const data = {
						orderCreationId: order_id,
						razorpayPaymentId: response.razorpay_payment_id,
						razorpayOrderId: response.razorpay_order_id,
						razorpaySignature: response.razorpay_signature,
						program: name,
						userEmail: user ? user.email : '',
						phoneNumber: phoneNumber,
						coupon: coupon,
						validity: validity,
						driveSharingLink: driveSharingLink,
						folderId: folderId
					};
					setPaymentStatus("WAITING")
					const result = await axios.post(BACKEND_API + '/paymentSuccess/' + response.razorpay_payment_id, data);
					if (result.status === 200) {
						setPaymentStatus('SUCCESSFUL');
					} else {
						setPaymentStatus('FAILED');
					}
					alert(result.data.msg);
				},				
				prefill: {
					name: user ? user.displayName : '',
					email: user ? user.email : '',
					contact: userContact,
				},
				notes: {
					address: userAddress,
				},
				theme: {
					color: '#ed8900',
				},
			};
			
			const paymentObject = new window.Razorpay(options);
			paymentObject.open();
		} catch (error) {
			console.error(error);
		}
	};

	if (userDataFetchStatus === "NOT_FOUND" && phoneNumber === undefined) {
		return <LoginCard />
	}
	
	if (paymentStatus === 'SUCCESSFUL') {
		return (
			<div className="dark:bg-gray-800 h-screen">
			<Navbar sticky={false} />
			{/* Background Image */}
			
				<div className="relative overflow-hidden mt-10 py-10 bg-black bg-opacity-20 shadow-2xl rounded-3xl  container flex items-center  flex-col gap-10 ">
				<p className="text-3xl tracking-wide dark:text-white  underline underline-offset-4 font-bold">भुगतान सफल हो गया है।</p>
				<p className="text-center text-2xl dark:text-gray-100 ">हमने मेंटर्स ज्ञान के लिए आपके भुगतान का सत्यापन कर लिया है।</p>
				{name !== 'EBOOKS-Special 12' && <p className="text-center text-2xl dark:text-gray-100">हम आपकी कॉल शेड्यूल कर रहे हैं और आपको इस संबंध में एक पुष्टिकरण प्राप्त होगा।</p>}
				<p className="text-center text-2xl dark:text-gray-100">कृपया इसे अपनी प्रोफ़ाइल पर प्रदर्शित करने के लिए कुछ समय तक प्रतीक्षा करें।</p>
				<hr />
				<p className="font-bold text-xl text-white bg-secondary rounded-xl p-2">अपनी यात्रा में हमें चुनने के लिए धन्यवाद ।</p>
				</div>
				{
					(phoneNumber !== undefined) && (
						<div className="flex items-center justify-center mt-10">
							<div className="w-fit p-2 rounded-3xl shadow-2xl dark:shadow-gray-600">
								<p className="text-3xl text-red-500">नोट:</p>
								<div className="p-0.5 bg-gray-400 dark:bg-gray-600 mb-10"/>
								<p className="dark:text-white text-lg">टेस्ट के लिए <strong>User ID</strong> <strong>आपका मोबाइल नंबर</strong> है और <strong>पासवर्ड</strong> ddmmyyyy प्रारूप में <strong>आपकी जन्मतिथि है ।</strong></p>
							</div>
						</div>
					)
				}
				<div className="flex items-center justify-center mt-10 dark:text-white text-3xl rounded-3xl shadow-2xl dark:shadow-gray-600 p-4 container mb-10">नियमित अपडेट के लिए हमारे व्हाट्सएप चैनल से जुड़ें। &nbsp; <a className="text-secondary">यहाँ क्लिक करें</a></div>
			</div>
			)
		}
		
		if (paymentStatus === 'WAITING') {
			return (
				<div className="flex flex-col h-screen container items-center justify-center gap-5 text-3xl bg-white w-full">
				<p>Waiting...</p>
				<FaSpinner className="animate-spin"/>
				<p className="text-lg">यदि पेज बहुत लंबे समय तक WAITING स्थिति में फंसा हुआ है। कृपया हमें mentorsgyan@gmail.com पर मेल करें या आप हमसे +91 9039130180 पर जुड़ सकते हैं।</p>
				<p className="text-lg">निश्चिंत रहें, आपका पैसा सुरक्षित हाथों में है।</p>
				<p className="text-xl font-bold">आपकी सेवाएँ आपकी खरीदारी के 24 घंटों के भीतर शुरू कर दी जाएंगी।</p>
				</div>
				)
			}
			
			if (userDataFetchStatus === 'WAITING') {
				return (
					<div className="flex h-screen items-center justify-center gap-5 dark:bg-gray-800 dark:text-white text-5xl">
					<p className="animate-pulse">कृपया प्रतीक्षा करें</p>
					<FaSpinner className="animate-spin text-secondary" />
					</div>
					)
				}
				
				return (
					<div className="dark:bg-gray-800 dark:md-900:h-screen md-900:h-screen flex items-center justify-center dark:text-white">
					<Navbar sticky={true} />
					<div className="flex h-full items-center justify-center">
					{
						(phoneNumber !== undefined) || (user && userDataFetchStatus === 'FOUND') ? (
							<div className="container rounded-3xl shadow-2xl p-5">
							<div className="pt-10 grid grid-cols-1 md:grid-cols-2 gap-6 justify-center items-center">
							{/* image section */}
							<div data-aos="zoom-in">
							<img src={BannerImg} alt=""
							className="rounded-full h-[290px] md-900:max-[400px] md-900:h-[400px] mx-auto shadow-2xl object-cover"
							/>
							</div>
							<div className="flex flex-col gap-6 sm:pt-0">
							<h1 className="text-3xl sm:text-4xl font-bold">पेमेंट करे</h1>
							<p className=" text-gray-500 dark:text-gray-200 tracking-wide leading-8 text-xl text-justify">
							Mentors Gyan के साथ जुड़ें और अपनी सफलता की ओर पहला कदम बढ़ाएँ!<br/>
							हम आशा करते हैं कि आप <b className="text-xl">{name.split('-')[1]} </b> योजना का पूरा लाभ उठा सकें।
							</p>
							<div className="flex flex-col gap-4 md:w-1/2 ">
							{/* Total section */}
							<div className=" flex flex-col gap-2">
							<h1 className="text-3xl font-bold py-2 text-secondary">भुगतान सारांश</h1>
							<div className="flex flex-col gap-2 mr-auto  justify-center">
							<div
							className="flex text-xl gap-10"
							>
							<h3 className="font-semibold">Price: </h3>
							<p>₹{price}</p>
							</div>
							<div
							className="flex text-xl gap-4 justify-between"
							>
							<h3 className="font-semibold">Discount: </h3>
							<p>₹{discount}</p>
							</div>
							<div
							className="flex gap-4 text-xl justify-between"
							>
							<h3 className="font-extrabold text-secondary">Total: </h3>
							<p className="font-bold text-primary">₹{total}</p>
							</div>
							</div>
							</div>
							{/* Coupon section */}
							<div className="flex flex-col items-end gap-2">
							<div className="flex w-full">
							<input type="text" placeholder="क्या आपके पास कोई कूपन है?" className="border p-3 dark:bg-gray-700" onChange={handleCouponChange} />
							<button onClick={verifyCoupon} className="bg-primary hover:scale-105 duration-300 text-white py-3 px-4 mx-3 group-hover:bg-white group-hover:text-primary" >
							Verify
							</button>
							</div>
							{message && <p className={`relative ${css}`}>{message}</p>}
							</div>
							{/* Razorpay direction button */}
							<div>
							<button onClick={handlePayment} className="bg-secondary font-bold hover:scale-105 duration-300 text-white w-full p-2 group-hover:bg-white group-hover:text-primary" >
							Pay
							</button>
							</div>
							</div>
							</div>
							</div>
							</div>
							) : (
								<LoginCard />
								)}
								
								</div>
								{/* <Footer /> */}
								</div>
								)
							}
							
							const LoginCard = () => {
								return (
									<div className="flex dark:text-white items-center justify-center h-screen">
									<img src={LogoImg} alt="" className="dark:hidden block absolute -z-10 blur-xl" />
									<img src={DarkLogoImg} alt="" className="dark:block hidden absolute -z-10 blur-xl" />
									<div className=" flex flex-col items-center gap-5 bg-white dark:bg-gray-800 p-4 opacity-70 rounded-3xl shadow-2xl">
									<p className="text-2xl font-bold">कृपया लॉगिन करें और भुगतान करने के लिए अपनी प्रोफ़ाइल पूरी करें।</p>
									<p className="text-2xl font-bold"><a className="text-secondary hover:underline" href="/user-profile">कृपया यहां क्लिक करें।</a></p>
									</div>
									</div>
									)
								}
								
								export default PaymentPage;