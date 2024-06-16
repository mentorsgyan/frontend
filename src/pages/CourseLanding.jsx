import React , { useEffect, useState } from "react";
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
    const [courseData, setCourseData] = useState(null)
    
    useEffect(() => {
        fetch("http://localhost:5000/courseInfoData")
        .then(response => response.json())
        .then(data => setCourseData(data))
        .catch(error => console.log("Error occured in fetching data: ", error))
    }, [])
    const navigate = useNavigate();
    const { courseId } = useParams();
    const [Modules, setModules] = useState(Modules2);
    const [userPresent, setUser] = useState(true);
    if (courseData == null) {
        return (
            <div>
                Loading...
                {/* TODO: Update the loading symbol */}
            </div>
        )
    }
    return (
        <div>
            {/* About course */}
            {/* Title */}
            <Navbar bottom={false} />
            {/* Hero section */}
            <div >
                <div className = "relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 dark:bg-gray-950 dark:text-white duration-200">
                    {/* Background */}
                    <div className = "h-[650px] w-[1200px] bg-primary/50 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z-9" />
                    {/* Contents */}
                    <div className="mt-10 justify-start items-center grid grid-cols-1 md:grid-cols-2">
                        <div className="container relative pb-8 sm:pb-0 order-2 sm:order-1">
                            <h1 className="text-5xl sm:text-6xl lg:text-7xl text-primary font-bold">{courseData && courseData.title}</h1>
                            <h2 className="text-xl my-5 text-gray-500 font-bold">{courseData.summary}</h2>
                            <p className="font-semibold mb-2">Insturctor: {courseData.instructors}</p>
                            <div className="w-full flex gap-1">
                                {                                
                                    Array.from({length: courseData.rating}, (_, index) => (
                                        <FaStar key={index} className="text-yellow-500" />
                                    ))
                                }
                                <p>({courseData.totalRatings} reviews)</p>
                            </div>
                            <div className="w-full flex gap-1">
                                <LuLanguages />
                                <p>{courseData.language}</p>
                            </div>
                        </div>
                        <div className="relative container order-1 sm:order-1">
                            <div /*data-aos="zoom-in"*/ className="relative overflow-hidden rounded-lg drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] transition-transform transform hover:scale-105 duration-200 mx-auto md:mx-0 ">
                                {/* Intro video */}
                                <div className="relative max-w-[350px] h-[200px] overflow-hidden  mx-auto w-full">
                                    <img src={courseData.thumbnail} alt="" 
                                    className="rounded-t-lg max-w-[350px] h-[200px] w-full mx-auto  object-cover"
                                    />
                                    <a href={courseData.introductoryVideo} className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-xl font-bold opacity-0 hover:opacity-100 transition-opacity"><BiPlayCircle className="text-7xl"/></a>
                                </div>
                                {/* Info section */}
                                <div className="mx-auto mb-10 max-w-[350px] text-center rounded-b-lg bg-primary/50">
                                    {/* price  */}
                                    <h1 className="font-extrabold text-3xl text-white py-2 border-primary">₹{courseData.price} only</h1>
                                    {/* Heading */}
                                    <h3 className="font-bold text-2xl text-white pt-5 w-full grid grid-rows-2">
                                    {courseData.courseHeadline} 
                                    </h3>
                                    {/* Features */}
                                    <ul className="text-gray-100 font-semibold capitalize">
                                        {   
                                            courseData.courseProperties.map((property, index) => (
                                                <li key={index} className="mb-2">» {property}</li>
                                            ))
                                        }
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
                </div>
            </div>

            {/* Course Description */}
            <div className="p-6 bg-white rounded-lg shadow-md mt-6">
                <h2 className="text-2xl font-bold mb-4">React Web Development Course</h2>
                {/* TODO: add a DB variable for this */}
                <p className="text-gray-700 mb-6">
                    {courseData.courseDetailedDescription}
                </p>
                <hr></hr>
                <div className="">
                    <div className=" flex justify-around items-center flex-col md:flex-row">
                        <div className="  p-4">
                            <h3 className="text-xl font-semibold mb-4">Course Topics</h3>
                            <ul className="list-disc list-inside text-gray-700">
                                {
                                    courseData.courseScope.map((topic, index) => (
                                        <li className="mb-2" key={index}>{topic}</li>
                                    ))
                                }
                            </ul>
                        </div>

                        <div className=" p-4">                            
                            <h3 className="text-xl font-semibold mb-2">From the instructor</h3>
                            <div className="relative w-full max-w-xs overflow-hidden rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-200 mx-auto md:mx-0 my-5">
                                <img src={courseData.instructorImage} alt="Course Introduction Thumbnail" className=" w-full h-auto" />
                            </div>
                            <p className="max-w-xs text-justify text-gray-700 mb-4">
                                {courseData.messageFromInstructor}
                            </p>
                            
                        </div>
                    </div>
                </div>
                <hr></hr>
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