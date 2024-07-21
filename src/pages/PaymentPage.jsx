import React, { useEffect, useState } from "react";
import BannerImg from "../assets/hero/Hero.png"
import LogoImg from "../assets/logo/white_bg.jpg"
import Navbar from "../components/Navbar/Navbar";
import axios from 'axios';
import {useLocation} from "react-router-dom"; 
import { useAuth } from "../AuthContext";

/**
 * This page is responsible for the entire payment checkout
 * for mentorsgyan
 * @author Mayank Shukla
 */
const PaymentPage = () => {

    // User Data
    const { user } = useAuth();

    // State data reading
    const location = useLocation();
    const name = location.state ? location.state.data.name : '';
    const price = location.state ? location.state.data.price : '';

    const [coupon, setCoupon] = useState('');
    const [message, setMessage] = useState('');
    const [css, setCss] = useState('');
    const [discount, setDiscount] = useState(0);
    const [total, setTotal] = useState(price);
    const [paymentDone, setPaymentDone] = useState(false);
    const [activeCoupons, setActiveCoupons] = useState([])

    const handleCouponChange = (e) => {
        setCoupon(e.target.value);
    };

    useEffect(() => {
        console.log("Name: " + name)
        fetch("http://localhost:5000/getCoupons")
        .then(response => response.json())
        .then(data => setActiveCoupons(data))
    }, [])

    const verifyCoupon = () => {
        console.log("Coupons ", activeCoupons)
        for (const element of activeCoupons) {
            if (coupon.toUpperCase() === element.name.toUpperCase()) {
                const couponDiscount = element.discount;
                setMessage(`You got ${couponDiscount}% Off!`);
                setCss("text-green-600 ")
                setDiscount((couponDiscount / 100) * price)
                setTotal((1 - couponDiscount/100) * price)
                console.log(`Discount: ${couponDiscount} & Total: ${total}`)
                return;
            } else {
                setMessage('Invalid coupon code.');
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
                amount: total
            }
            const orderResponse = await axios.post('http://localhost:5000/createOrder', data);
            console.log("Order Resp: ", orderResponse)
            const { amount, id: order_id, currency } = orderResponse.data;

            const options = {
                key: 'rzp_test_cmG33Jntv9ZrCE',
                amount: amount.toString(),
                currency: currency,
                name: 'MentorsGyan',
                description: 'Mentorship plans के लिए भुगतान अनुरोध',
                order_id: order_id,
                handler: async function (response) {
                    const data = {
                        orderCreationId: order_id,
                        razorpayPaymentId: response.razorpay_payment_id,
                        razorpayOrderId: response.razorpay_order_id,
                        razorpaySignature: response.razorpay_signature,
                        name: name
                    };
                    const result = await axios.post('http://localhost:5000/paymentSuccess/' + response.razorpay_payment_id, data);
                    if (result.status === 200) {
                        setPaymentDone(true)
                    }
                    alert(result.data.msg);
                },
                prefill: {
                    name: 'MentorsGyan',
                    email: 'mentorsgyan@gmail.com',
                    contact: '9999999999',
                },
                notes: {
                    address: 'Bilaspur, Chhattisgarh',
                },
                theme: {
                    color: '#61dafb',
                },
            };

            const paymentObject = new window.Razorpay(options);
            paymentObject.open();
        } catch (error) {
            console.log(error);
        }
    };
 
    if (paymentDone) {
        return (
            <div>
                <Navbar sticky={false} />
                {/* Background Image */}

                <div className="relative overflow-hidden mt-10 py-10 bg-black bg-opacity-20 shadow-2xl rounded-3xl  container flex items-center  flex-col gap-10 ">
                    <img src={LogoImg} alt="" className="absolute -z-10 blur-xl -translate-y-20"/>
                    <p className="text-3xl tracking-wide text-white underline underline-offset-4 font-bold">भुगतान सफल हो गया है।</p>
                    <p className="text-center text-2xl text-gray-100 ">हमने मेंटर्स ज्ञान के लिए आपके भुगतान का सत्यापन कर लिया है।</p>
                    <p className="text-center text-2xl text-gray-100">हम आपकी कॉल शेड्यूल कर रहे हैं और आपको इस संबंध में एक पुष्टिकरण प्राप्त होगा।</p>
                    <p className="text-center text-2xl text-gray-100">कृपया इसे अपनी प्रोफ़ाइल पर प्रदर्शित करने के लिए कुछ समय तक प्रतीक्षा करें।</p>
                    <hr />
                    <p className="font-bold text-xl text-white bg-secondary rounded-xl p-2">अपनी यात्रा के लिए हमें चुनने के लिए धन्यवाद ।</p>
                </div>
            </div>
        )
    }
    
    return (
        <div>
            <Navbar sticky={false} />
            <div className="flex h-screen items-center justify-center mt-10 md:mt-0">
                {
                    user ? (
                        <div className="container">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-center items-center">
                                {/* image section */}
                                <div data-aos="zoom-in">
                                    <img src={BannerImg} alt=""
                                        className=" md:max-w-[400px] md:h-[400px] mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover"
                                    />
                                </div>
                                <div className="flex flex-col gap-6 sm:pt-0">
                                    <h1 className="text-3xl sm:text-4xl font-bold">पेमेंट करे</h1>
                                    <p className=" text-gray-500 tracking-wide leading-8 text-xl text-justify">
                                    Mentors Gyan के साथ जुड़ें और अपनी CGPSC सफलता की ओर पहला कदम बढ़ाएँ!<br/>
                                    हम आशा करते हैं कि आप <b className="text-xl">{name.split('-')[1]} </b> योजना का पूरा लाभ उठा सकें।
                                    </p>
                                    <div className="flex flex-col gap-4 md:w-1/2">
                                        {/* Total section */}
                                        <div className=" flex flex-col gap-2">
                                            <h1 className="text-3xl font-bold py-2 text-secondary">भुगतान सारांश</h1>
                                            <div className="flex flex-col gap-2 mr-auto">
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
                                                <input type="text" placeholder="Got any Coupons?" className="border p-3 md:w-2/3" onChange={handleCouponChange} />
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
        <div className="flex items-center justify-center">
            <img src={LogoImg} alt="" className="absolute -z-10 blur-xl" />
            <div className="flex bg-white p-4 opacity-70 rounded-3xl shadow-2xl">
                <p className="text-2xl font-bold">कृपया भुगतान करने के लिए लॉग इन करें।</p>
            </div>
        </div>
    )
}

export default PaymentPage;