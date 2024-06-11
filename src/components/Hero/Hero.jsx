import React from "react";
import Image1 from "../../assets/hero/Hero.png";
import Image2 from "../../assets/hero/Hero2.png";
import Image3 from "../../assets/hero/Hero3.png";
import Slider from "react-slick";
import {useNavigate, useLoaderData } from "react-router-dom"; 

const Hero = ({ImageList}) => {
    const navigate = useNavigate();
    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 800,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        cssEase: "ease-in-out",
        pauseOnHover: false,
        pauseOnFocus: true
    };
    return (
        <div className = "relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200">
            {/* background pattern */}
            <div className = "h-[800px] w-[1200px] bg-primary/40 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z-9" >

            </div>
            {/* Hero section */}
            <div className="container pb-8 sm:pb-0">
                <Slider {...settings}>
                    {ImageList.map(data => (
                        <div key={data.id}>
                            <div className = "grid grid-cols-1 sm:grid-cols-2">
                                {/* Text content section */}
                                <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
                                    <h1
                                    data-aos="zoom-out"
                                    data-aos-once="true"
                                    data-aos-duration="500"
                                    className="text-5xl sm:text-6xl lg:text-7xl font-bold">{data.title}</h1>
                                    <p 
                                    data-aos="fade-up"
                                    data-aos-delay="100"
                                    data-aos-duration="500"
                                    className="text-sm">{data.description}</p>
                                    <div
                                    data-aos="fade-up"
                                    data-aos-delay="300"
                                    data-aos-duration="500"
                                    >
                                        <button className = "bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full" onClick={() => {
                                           navigate("course/" + data.courseName)
                                        }}>Book now</button>
                                    </div>
                                </div>
                                {/* Image section */}
                                <div className="order-1 sm:order-1">
                                    <div 
                                    data-aos="zoom-in"
                                    data-aos-once="true"
                                    className="relative z-10">
                                        <img src={data.img} alt=""
                                        className = "w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-125 lg:scale-120 object-contain mx-auto" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default Hero;
