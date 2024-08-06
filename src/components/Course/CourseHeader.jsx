import React, { useEffect } from "react";
import {useParams} from "react-router-dom";
import Navbar from "../Navbar/Navbar"
import { UserCircleIcon, ClockIcon, GlobeAltIcon, CheckCircleIcon} from '@heroicons/react/24/outline'
import { StarIcon } from '@heroicons/react/24/solid'

const CourseData = {
    title: "Course Title",
    headline: "One liner headline of the course",
    language: "Hindi",
    educator: "Geetesh Sahu",
    rating: 4,
    totalEnrollments: 108,
    contentLength: 12,
    courseThumbnail: 'https://www.codehelp.in/_next/image?url=https%3A%2F%2Fdgyugonj9a9mu.cloudfront.net%2FWhats_App_Image_2024_03_13_at_4_25_55_PM_cc1da9dcda.jpeg&w=828&q=100',
    coursePrice: 3999,
    courseFeature: ["XYZ feature 1", "XYZ Feature 2", "XYZ Feature 3"]
}

const CourseHeader = () => {
    const data = {
        price: 999,
        id: 1234,
        name: 'MENTORSHIP-' + "123"
    }
    const {courseId} = useParams();

    return (
        <div id="header-component" className="relative items-center justify-evenly h-[500px] w-full bg-black flex md:flex-row flex-col">
            {/* Test section */}
            <CourseTextSection />
            {/* Course Preview section */}
            <HeaderTile data={data}/>

        </div>
    )
}

const HeaderTile = ({data}) => {

    return (
        <div className=" text-white flex flex-col gap-3 bg-white bg-opacity-10 p-3 shadow-2xl shadow-white rounded-3xl">
            <img src={CourseData.courseThumbnail} alt="Course thumbnail" className="h-[170px]"/>
            {/* Course price */}
            <h1 className="text-primary text-3xl font-bold">₹ {CourseData.coursePrice}/-</h1>
            {/* Course properties section */}
            <h2 className="text-white text-xl font-bold">This course contains:</h2>
            <ul className="pl-2">
                {
                    CourseData.courseFeature.map((feature, idx) => (
                        <li key={idx} className="flex gap-2 py-1">
                            <CheckCircleIcon className="h-6" />
                            <p>{feature}</p>
                        </li>
                    ))
                }
            </ul>
            {/* Buying button */}
            <button className=
            "p-2 my-2 text-white font-bold bg-secondary border border-secondary hover:text-secondary w-full rounded-md hover:bg-white/75  duration-150 tracking-wide"
            onClick={() => {
                navigate("/checkout", {state: {data: data}});
            }}
            >अभी खरीदें</button>
        </div>
    )
}

const CourseTextSection = () => {
    return (
        <div className="text-white flex flex-col gap-2">
            <h1 className="font-bold text-5xl tracking-tight">{CourseData.title}</h1>
            <h2 className="font-bold text-2xl tracking-wide">{CourseData.headline}</h2>
            <div className="flex gap-3 items-center">
                <UserCircleIcon className="h-8 text-blue-500"/>
                <p className="text-blue-500">{CourseData.educator}</p>
                |
                <GlobeAltIcon className=" h-8 text-secondary"/>
                <p className=" text-secondary">{CourseData.language}</p>
                |
                <ClockIcon className="h-8 text-green-600"/>
                <p className="text-green-600">{CourseData.contentLength}+ hours</p>
            </div>
            <div className="flex items-center">
                <p>Rating: </p>
                {
                    Array.from({length: CourseData.rating}, (idx) => (
                        <StarIcon key={idx} className="h-5 text-yellow-400" />
                    ))
                }
                <p>({CourseData.totalEnrollments})</p>
            </div>
        </div>
    )
}

export default CourseHeader;