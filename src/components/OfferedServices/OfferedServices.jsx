import React from "react";
import Image from "../../assets/hero/Hero.png"
import { FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa6";
import Slider from "react-slick";
import { SLIDER_SETTINGS } from "../../utility/Constants";


const SocialMedia = [
    {
        name: "Instagram",
        icon: <FaInstagram className="text-3xl"/>,
        link: "www.google.com"
    },
    {
        name: "Youtube",
        icon: <FaYoutube className="text-3xl text-red-500"/>,
        link: "www.google.com"
    },
    {
        name: "LinkedIn",
        icon: <FaLinkedin className="text-3xl text-blue-500"/>,
        link: "www.google.com"
    },
]

const serviceList = [
    {
        id: 1,
        name: 'Mayank Shukla',
        description: 'Lorem'
    },
    {
        id: 2,
        name: 'Swadha Shukla',
        description: 'Lorem2'
    }
];


const OfferedServices = () => {
    return (
        <div className="mt-6">
            <h1 className="text-center text-3xl font-bold">How We Make a Difference</h1>
            <div className="flex justify-center items-center">
                <div className="container">
                    <Slider {...SLIDER_SETTINGS}>
                    {serviceList.map(service => (
                        <div key={service.id}>
                            <div  className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center p-5 my-3">
                                {/* Card of service */}
                                <img src={Image} alt="" className="max-h-[300px] drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover mx-auto" />
                                {/* Text section */}
                                <div className="container">
                                    <h1 /*data-aos="fade-up" add fade here*/ className="text-3xl sm:text-4xl py-5 font-bold">{service.name}</h1>
                                    <p className="text-justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus beatae, cupiditate excepturi dolorem harum quod dicta adipisci aut culpa vero explicabo porro similique iste velit in fuga ex sunt aliquam.</p>
                                    <div className="flex justify-center gap-3 mt-6">
                                    {
                                        SocialMedia.map(data => (
                                            <a href={data.link} key={data.name}>
                                                {data.icon}
                                            </a>
                                        ))
                                    }
                                    </div>
                                </div>
                            </div>
                            </div>
                        ))}       
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default OfferedServices