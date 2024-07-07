import React, { useState } from "react";
import BannerImg from "../assets/hero/Hero.png"
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import { useAuth0 } from "@auth0/auth0-react";

const PaymentPage = ({price=999}) => {
    const [coupon, setCoupon] = useState('');
    const [message, setMessage] = useState('');
    const [css, setCss] = useState('');
    const [discount, setDiscount] = useState(0);
    const [total, setTotal] = useState(price);

    const { user, isAuthenticated } = useAuth0();
  
    const handleCouponChange = (e) => {
      setCoupon(e.target.value);
    };

    const verifyCoupon = () => {
        // Replace with your verification logic
        if (coupon.toUpperCase() === '1234') {
          setMessage('You got 20% Off!');
          setCss("text-green-600")
          setDiscount(0.2 * price)
          setTotal(0.8 * price)
        } else {
          setMessage('Invalid coupon code.');
          setCss("text-red-400")
          setDiscount(0)
          setTotal(price)
        }
      };

    return (
        <div>
            <Navbar bottom = {false}/>
            <div className="min-h-[550px] py-12 sm:py-0">
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-center items-center">
                        {/* image section */}
                        <div data-aos="zoom-in">
                            <img src={BannerImg} alt="" 
                            className="max-w-[400px] h-[350px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover"
                            />
                        </div>
                        <div className="flex flex-col gap-6 sm:pt-0">
                            <h1 data-aos="fade-up" className="text-3xl sm:text-4xl font-bold">Course Title</h1>
                            <p data-aos="fade-up" className="text-sm text-gray-500 tracking-wide leading-5 text-justify">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint quod quo amet! Omnis alias maxime nulla, ipsa quos, tempore recusandae aliquid maiores cum delectus voluptatibus beatae, nobis eius assumenda pariatur.
                            </p>
                            <div className="flex flex-col gap-4 md:w-1/2">
                                {/* Total section */}
                                <div className=" flex flex-col gap-2">
                                    <h1 className="text-3xl font-bold py-2 text-secondary">Summary</h1>
                                    <div className="flex flex-col gap-2 mr-auto">
                                        <div
                                        className="flex text-xl justify-between gap-4"
                                        >
                                            <h3 className="font-semibold">Course Price: </h3>
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
                                <div className="flex w-full">
                                    <input type="text" placeholder="Got any Coupons?" className="border p-3 md:w-2/3" onChange={handleCouponChange}/>
                                    <button onClick={verifyCoupon} className="bg-primary hover:scale-105 duration-300 text-white py-3 px-4 mx-3 group-hover:bg-white group-hover:text-primary" >
                                            Verify
                                    </button>
                                    {message && <p className={css}>{message}</p>}
                                </div>
                                {/* Razorpay direction button */}
                                <div>
                                    <button onClick={verifyCoupon} className="bg-secondary font-bold hover:scale-105 duration-300 text-white w-full p-2 group-hover:bg-white group-hover:text-primary" >
                                            Pay
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default PaymentPage;