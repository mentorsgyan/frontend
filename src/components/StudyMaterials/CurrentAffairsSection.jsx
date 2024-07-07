import React from "react";  
import Image1 from "../../assets/hero/Hero.png";

const BlogsData = [
    {
        id: 1,
        img: Image1,
        title: "June 30, 2024"
    },
    {
        id: 2,
        img: Image1,
        title: "June 29, 2024"
    },
    {
        id: 3,
        img: Image1,
        title: "June 28, 2024"
    }
];

const currectAffairSectionData = {
    title: "Current Affairs by MentorsGyan",
    description: "Get updated with daily current afairs by MentorsGyan",
    imageUrl: "https://st.depositphotos.com/39746134/55867/v/600/depositphotos_558674812-stock-video-hindi-newspaper-headlines-of-indian.jpg"
}

const CurrentAffairsSection = () => {
    return (
        <div  id="current-affairs">
            <div data-aos = "fade-in" className="px-10 relative py-10">
                {/* Header section */}
                <div className="text-left px-10 pb-10">
                    <h1 
                    // data-aos="fade-up" 
                    className="text-2xl md:text-3xl font-bold text-secondary tracking-wide md:text-justify">{currectAffairSectionData.title}</h1>
                </div>
                {/* Body section */}
                <div className="mx-2 grid grid-cols-1 md:grid-cols-3 place-items-center justify-evenly">
                    {
                        BlogsData.map((blogData, idx) => (
                            <CurrentAffairTile key={idx} blogData = {blogData}/>
                        ))
                    }
                </div>
                {/* Read more section */}
                <p className="tracking-wide text-white text-center"> <a className="text-secondary">Click here</a> to get older current  affairs</p>
            </div>
        </div>
    );
}

const CurrentAffairTile = ({blogData}) => {
    return (
        <div key={blogData.id}
            // data-aos="zoom-in"
            className="flex flex-col max-w-[300px] gap-2 pb-10"
            >
                {/* Blog image */}
                <img src={blogData.img} alt="" className="rounded-md max-w-[195px] mx-auto duration-300 drop-shadow-md shadow-md shadow-primary/75"/>

                {/* Details section */}
                <div className="text-center">
                    <h1 className="text-xl font-bold text-white">{blogData.title}</h1>
                    <p className="text-gray-200 group-hover:text-white duration-300 text--sm line-clamp-2">{blogData.description}</p>
                    <button className="border border-secondary hover:bg-secondary hover:text-gray-300 hover:scale-105 duration-300 text-secondary py-1 px-4 rounded-md mt-4 group-hover:bg-white group-hover:text-primary" onClick={() => {}} >
                        Read Now
                    </button>
                </div>
            </div>
    )
}

export default CurrentAffairsSection