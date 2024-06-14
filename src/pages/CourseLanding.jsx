import React , { useState } from "react";
import Thumbnail1 from "../assets/hero/Hero.png";
import { BiPlayCircle } from "react-icons/bi";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import { LuLanguages } from "react-icons/lu";
import { FaStar } from "react-icons/fa6";
import Footer from "../components/Footer/Footer"
import ModulesDropDown from "../components/ModulesDropDown/ModulesDropDown"

const Modules2 = [
    {
        moduleNumber: "1",
        title: "Module Title",
        expanded: true,
        lectures: [
            {
                lectureNumber: "1",
                title: "Time",
                link: "link"
            },
            {
                lectureNumber: "2",
                title: "Money",
                link: "link"
            },
            {
                lectureNumber: "3",
                title: "Labor",
                link: "link"
            },
        ]
    },
    {
        moduleNumber: "2",
        title: "Module Title",
        expanded: false,
        lectures: [
            {
                lectureNumber: "1",
                title: "Time",
                link: "link"
            },
            {
                lectureNumber: "2",
                title: "Money",
                link: "link"
            },
            {
                lectureNumber: "3",
                title: "Labor",
                link: "link"
            },
        ]
    },
    {
        moduleNumber: "3",
        title: "Module Title",
        expanded: false,
        lectures: [
            {
                lectureNumber: "1",
                title: "Time",
                link: "link"
            },
            {
                lectureNumber: "2",
                title: "Money",
                link: "link"
            },
            {
                lectureNumber: "3",
                title: "Labor",
                link: "link"
            },
        ]
    },
    {
        moduleNumber: "4",
        title: "Module Title",
        expanded: false,
        lectures: [
            {
                lectureNumber: "1",
                title: "Time",
                link: "link"
            },
            {
                lectureNumber: "2",
                title: "Money",
                link: "link"
            },
            {
                lectureNumber: "3",
                title: "Labor",
                link: "link"
            },
        ]
    }
]

const CourseLanding = () => {
    const navigate = useNavigate();
    const { courseId } = useParams();
    const [Modules, setModules] = useState(Modules2);
    const [userPresent, setUser] = useState(true);
    console.log("Course ID, ", courseId);
    return (
        <div>
            {/* About course */}
            {/* Title */}
            <Navbar bottom={false} />
            {/* Hero section */}
            <div className = "relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-start items-center dark:bg-gray-950 dark:text-white duration-200">
                {/* Background */}
                <div className = "h-[650px] w-[1200px] bg-primary/50 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z-9" />
                {/* Contents */}
                <div className="container relative pb-8 sm:pb-0">
                    <h1 className="text-5xl sm:text-6xl lg:text-7xl text-primary font-bold">Title of the course</h1>
                    <h2 className="text-xl my-5 text-gray-500 font-bold">This course will walk you through different aspects of web development using react.</h2>
                    <p>Insturctor: Ashish Futtan</p>
                    <div className="w-full flex gap-1">
                        <LuLanguages />
                        <p>Hindi</p>
                    </div>
                    <div className="w-full flex gap-1">
                        <FaStar className="text-yellow-500" />
                        <FaStar className="text-yellow-500" />
                        <FaStar className="text-yellow-500" />
                        <FaStar className="text-yellow-500" />
                        <FaStar className="text-yellow-500" />
                    </div>
                </div>
                <div className="relative container">
                    <div /*data-aos="zoom-in"*/ className="relative overflow-hidden rounded-lg drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] transition-transform transform hover:scale-105 duration-200 mx-auto md:mx-0 ">
                        {/* Intro video */}
                        <div className="relative max-w-[350px] h-[200px] overflow-hidden  mx-auto w-full">
                            <img src={Thumbnail1} alt="" 
                            className="rounded-t-lg max-w-[350px] h-[200px] w-full mx-auto  object-cover"
                            />
                            <a href="hsjadfhjads" className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-xl font-bold opacity-0 hover:opacity-100 transition-opacity"><BiPlayCircle className="text-7xl"/></a>
                        </div>
                        {/* Info section */}
                        <div className="mx-auto mb-10 max-w-[350px] text-center rounded-b-lg bg-primary/50">
                            {/* price  */}
                            <h1 className="font-extrabold text-3xl text-white py-2 border-primary">₹999 only</h1>
                            {/* Heading */}
                            <h3 className="font-bold text-2xl text-white pt-5 w-full grid grid-rows-2">
                            Course Headline 
                            </h3>
                            {/* Features */}
                            <ul className="text-gray-100 font-semibold capitalize">
                                <li>» On demand video lectures</li>
                                <li>» 10 hours of content</li>
                                <li>» With animations</li>
                            </ul>
                            {/* Buy now */}
                            <button className = "bg-gradient-to-r my-3 w-1/3 from-primary to-secondary hover:scale-105 duration-200 text-white py-3 px-4 rounded-full" onClick={
                                () => {
                                    setUser(!userPresent)
                                    // navigate("/checkout/")
                                }
                            }>{userPresent ? "Play" : "Buy Now"}</button>
                        </div>
                       
                    </div>
                    
                    {/* Buy button, has to be conditional, if the payment is already done by the user*/}
                </div>
            </div>

            {/* Course Description */}
            <div className="p-6 bg-white rounded-lg shadow-md mt-6">
                <h2 className="text-2xl font-bold mb-4">React Web Development Course</h2>
                <p className="text-gray-700 mb-6">
                    {courseId}
                    Dive into the world of modern web development with our comprehensive React Web Development Course. Designed for both beginners and experienced developers, this course covers the essentials of building dynamic, responsive web pages using React. Learn to create interactive user interfaces, manage state, and integrate APIs seamlessly. By the end of the course, you'll be equipped with the skills to build and deploy professional-grade web applications.
                </p>
                <hr></hr>
                <div>
                    <div className="flex flex-wrap md:flex-nowrap">
                        <div className="w-full md:w-1/2 p-4">
                        <h3 className="text-xl font-semibold mb-4">Course Topics</h3>
                        <ul className="list-disc list-inside text-gray-700">
                            <li className="mb-2">Introduction to React and JSX</li>
                            <li className="mb-2">Components, Props, and State</li>
                            <li className="mb-2">Handling Events and Forms</li>
                            <li className="mb-2">React Router for Navigation</li>
                            <li className="mb-2">State Management with Redux</li>
                            <li className="mb-2">Hooks: useState, useEffect, and Custom Hooks</li>
                            <li className="mb-2">Context API for Global State</li>
                            <li className="mb-2">Styling with CSS and Tailwind CSS</li>
                            <li className="mb-2">Fetching Data from APIs</li>
                            <li className="mb-2">Testing and Debugging React Applications</li>
                            <li className="mb-2">Deploying React Applications</li>
                        </ul>
                        </div>

                        <div className="w-full md:w-1/2 p-4">
                        <h3 className="text-xl font-semibold mb-2">About the instructor</h3>
                        <p className="text-gray-700 mb-4">
                            Get a sneak peek into what you'll be learning throughout the course. This video provides an overview of the key concepts and projects you'll be working on.
                        </p>
                        <div className="relative w-full max-w-xs overflow-hidden rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-200 mx-auto md:mx-0">
                            <img src={Thumbnail1} alt="Course Introduction Thumbnail" className="w-full h-auto" />
                            <a href="video-url" className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-xl font-bold opacity-0 hover:opacity-100 transition-opacity"><BiPlayCircle className="text-7xl"/></a>
                        </div>
                        </div>
                    </div>
                </div>
                <hr></hr>
                <p className="text-gray-700 my-6">
                    Dive into the world of modern web development with our comprehensive React Web Development Course. Designed for both beginners and experienced developers, this course covers the essentials of building dynamic, responsive web pages using React. Learn to create interactive user interfaces, manage state, and integrate APIs seamlessly. By the end of the course, you'll be equipped with the skills to build and deploy professional-grade web applications.
                </p>
            </div>
            <div className = "">
                <ModulesDropDown />
                
            </div>
            
            <div className="mt-10"/>
            <Footer />
        </div>
    )
};

export default CourseLanding;