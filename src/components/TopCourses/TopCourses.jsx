import React from "react";  
import Image1 from "../../assets/hero/Hero.png";
import { FaStar } from "react-icons/fa6";

const CourseData = [
    {
        id: 1,
        img: Image1,
        title: "Course #1",
        description: "Description"
    },
    {
        id: 2,
        img: Image1,
        title: "Course #2",
        description: "Description"
    },
    {
        id: 3,
        img: Image1,
        title: "Course #3",
        description: "Description"
    }
];


const TopCourses = () => {
    return (
        <div id="mayank">
            <div className="container">
                {/* Header section */}
                <div className="text-left mb-24">
                    <p data-aos="fade-up" className="text-sm text-primary">Top rated courses for you</p>
                    <h1 data-aos="fade-up" className="text-3xl font-bold">Best Courses</h1>
                    <p data-aos="fade-up" className="text-xs text-gray-400">Lorem ipsum dolor sit amet consecte eligendi rerum ipsum aut.</p>

                </div>
                {/* Body section */}
                <div
                className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center"
                >
                    {
                        CourseData.map(course => (
                            <div key={course.id}
                            data-aos="zoom-in"
                            className="my-5 rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary hover:text-white relative shadow-xl duration-300 group max-w-[300px]"
                            >
                                {/* image section */}
                                <div
                                className="h-[100px]"
                                >
                                    <img src={course.img} alt="" 
                                    className="max-w-[195px] block mx-auto transform -translate-y-20 groupd-hover:scale-105 duration-300 drop-shadow-md"
                                    />
                                </div>
                                {/* Details section */}
                                <div
                                className="p-4 text-center"
                                >
                                    {/* star rating */}
                                    <div className="w-full flex items-center justify-center gap-1">
                                        <FaStar className="text-yellow-500" />
                                        <FaStar className="text-yellow-500" />
                                        <FaStar className="text-yellow-500" />
                                        <FaStar className="text-yellow-500" />
                                        <FaStar className="text-yellow-500" />
                                    </div>
                                    <h1 className="text-xl font-bold">{course.title}</h1>
                                    <p className="text-gray-500 group-hover:text-white duration-300 text--sm line-clamp-2">{course.description}</p>
                                    <button className="bg-primary hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-primary" onClick={console.log("Hello")}>
                                        Book Now
                                    </button>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default TopCourses