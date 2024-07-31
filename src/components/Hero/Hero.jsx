import React, { useEffect, useState } from "react";
import { BACKEND_API } from "../../utility/Constants";

const Hero = () => {
    
    const [ImageList, setImageList] = useState(null);
    useEffect(() => {
        fetch(BACKEND_API + "/heroData")
        .then(response => response.json())
        .then(data => setImageList(data))
    }, [])

    return (
        <div className = "relative overflow-hidden min-h-[550px] sm:min-h-[650px]  flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200">
            {/* background pattern */}
            <div className = "h-[800px] w-[1200px] bg-primary/40 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z-9" />
            {/* Hero section */}
            <div className="container pb-8 sm:pb-0">
                    {ImageList?.map(data => (
                        <div key={data.id}>
                            <div className = "grid grid-cols-1 sm:grid-cols-2">
                                {/* Text content section */}
                                <div className="flex flex-col items-center justify-center bg-white bg-opacity-50 rounded-3xl shadow-2xl gap-4 pt-12 pb-5 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
                                    <div>
                                        {

                                            data.titles.map((title, idx) => (
                                                <div key={idx} className="flex flex-col">
                                                    <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold">{title}</h1>
                                                    {
                                                        <ul>
                                                            {
                                                                data.titleFeatures[idx].map((feature, idx) => (
                                                                    <li key={idx} className="mx-2 text-lg">{feature}</li>
                                                                ))
                                                            }
                                                        </ul>
                                                    }
                                                </div>
                                            ))
                                        }
                                    </div>
                                    <div
                                    >
                                        <a className = "bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full" href={data.ref}>और अधिक जानें</a>
                                    </div>
                                </div>
                                {/* Image section */}
                                <div className="order-1 sm:order-1">
                                    <div 
                                    data-aos="zoom-in"
                                    data-aos-once="true"
                                    className="relative z-10">
                                        <img src={data.img} alt=""
                                        className = "w-[300px] h-[300px] mt-20 sm:h-[400px] sm:w-[400px] sm:scale-125 lg:scale-120 object-contain mx-auto" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default Hero;
