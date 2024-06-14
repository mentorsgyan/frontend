import React from "react";
import BannerImg from "../../assets/hero/Hero.png"
import { GrSecure } from "react-icons/gr";

const Banner = () => {
    return (
        <div className="min-h-[550px] bg-primary/70 flex justify-center items-center mt-12 pb-5 sm:py-2">
            <div className="container">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
                    {/* image section */}
                    <div data-aos="zoom-in">
                        <img src={BannerImg} alt="" 
                        className="max-w-[400px] h-[350px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover"
                        />
                    </div>
                    {/* text section */}
                    <div className="flex flex-col justify-center gap-6 sm:pt-0">
                        <h1 data-aos="fade-up" className="text-3xl sm:text-4xl font-bold"
                        >About Us</h1>
                        <p data-aos="fade-up" className="text-sm text-gray-500 tracking-wide leading-5">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint quod quo amet! Omnis alias maxime nulla, ipsa quos, tempore recusandae aliquid maiores cum delectus voluptatibus beatae, nobis eius assumenda pariatur.
                        </p>
                        <div className="flex flex-col gap-4">
                            <div data-aos="fade-up"
                            className="flex items-center gap-4"
                            >
                                <GrSecure 
                                className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-violet-100 dark:bg-violet-400"
                                />
                                <p>Quality Metnorship</p>
                            </div>
                            <div data-aos="fade-up"
                            className="flex items-center gap-4"
                            >
                                <GrSecure 
                                className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-orange-100 dark:bg-orange-400"
                                />
                                <p>Best CTO</p>
                            </div>
                            <div data-aos="fade-up"
                            className="flex items-center gap-4"
                            >
                                <GrSecure 
                                className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-green-100 dark:bg-green-400"
                                />
                                <p>Top notch courses</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner;