import React, { useEffect, useState } from "react";
import { MdGroups , MdSchool} from "react-icons/md";
import { ImBooks } from "react-icons/im";
import { BsListCheck } from "react-icons/bs";

const ServiceOffered = [
    {
        title: "Mentorship",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque nam adipisci voluptate ea laborum magni beatae animi nesciunt quidem ",
        redirection: "#mentorship",
        icon: <MdGroups className="text-5xl"/>
    },
    {
        title: "Daily Test Series",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque nam adipisci voluptate ea laborum magni beatae animi nesciunt quidem ",
        redirection: "#study-materials",
        icon: <BsListCheck className="text-5xl" />
    },
    {
        title: "CGPSC Classes",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque nam adipisci voluptate ea laborum magni beatae animi nesciunt quidem ",
        redirection: "#mentorship",
        icon: <MdSchool className="text-5xl"/>
    },
    {
        title: "Discussions",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque nam adipisci voluptate ea laborum magni beatae animi nesciunt quidem ",
        redirection: "#mentorship",
        icon: <MdGroups className="text-5xl"/>
    },
    {
        title: "E-Library",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque nam adipisci voluptate ea laborum magni beatae animi nesciunt quidem ",
        redirection: "#mentorship",
        icon: <ImBooks className="text-5xl"/>
    }
]

/**
 * This component renders the offereings provided by Mentorsgyan
 * @author Mayank Shukla
 * @returns 
 */
const Offerings = () => {
    
    return (
        <div className="flex flex-col justify-center items-center md:mb-20">
            <h1 className="text-3xl font-bold tracking-tight text-center pt-10" >Ace you career with MentorsGyan!</h1>
            <p className="my-10 md:text-center md:mx-40 px-5 text-justify">MentorsGyan brings you a lot of services which you can learn to excel in your life and acheive your craziest goals Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum nesciunt esse ab consectetur aspernatur qui hic, voluptatibus vel mollitia, rem iusto! Iusto placeat facere dignissimos quas? Quidem natus laboriosam recusandae.</p>
            <div className="px-20 pt-20 pb-5 md:flex">                
                {/* Services Cards */}
                {
                    ServiceOffered.map((service, idx) => (
                        <ServiceCards key={idx} Data={service}/>
                    ))
                }
            </div>
        </div>
    )
}

const ServiceCards = ({Data}) => {
    const [detailsVisibility, setDetailsVisibility] = useState(false);
    return (
        <div className="flex items-center flex-col md:w-[230px] hover:-translate-y-20 transition-transform duration-300 p-4"
            onMouseEnter={() => setDetailsVisibility(true)}
            onMouseLeave={() => setDetailsVisibility(false)}
        >
            <img 
                src="https://www-media.discoveryeducation.com/wp-content/uploads/2024/03/de-science-hp-blob.svg" 
                alt="" 
                className={`text-center absolute -z-10 ${detailsVisibility ? 'w-[200px] translate-y-16' : 'w-[75px]'} transition-transform duration-300`}
                />
            <div className="relative flex flex-col gap-4 items-center justify-center">
                {Data.icon}
                {/* title */}
                <h2 className="text-2xl font-bold">{Data.title}</h2>
            </div>
            <div className={`absolute ${detailsVisibility ? "translate-y-24 block pt-4" : "hidden"}`}>
                <p className={`transition-opacity duration-500`}>
                    {detailsVisibility && Data.description}
                </p>
                {/* Read more */}
                <a href={Data.redirection} 
                className={`p-4 text-secondary underline font-bold `}>
                    Learn more
                </a>
            </div>
            <a href={Data.redirection}
            className={`p-4 text-secondary underline font-bold md:hidden`}>
                Learn more
            </a>           
        </div>
    )
}

export default Offerings;