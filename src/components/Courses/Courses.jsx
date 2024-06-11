import React from "react";
import Image1 from "../../assets/hero/Hero.png";
import Image2 from "../../assets/hero/Hero2.png";
import Image3 from "../../assets/hero/Hero3.png";
import { FaStar } from "react-icons/fa6";

const CourseData = [
    {
        id: 1,
        img: Image1,
        title: "Course #1",
        rating: "5.0",
        instructor: "InstructorX",
        aosDelay: "0"
    },
    {
        id: 2,
        img: Image2,
        title: "Course #2",
        rating: "3.0",
        instructor: "InstructorX",
        aosDelay: "200"
    },
    {
        id: 3,
        img: Image3,
        title: "Course #3",
        rating: "4.2",
        instructor: "InstructorX",
        aosDelay: "400"
    },
    {
        id: 4,
        img: Image2,
        title: "Course #4",
        rating: "5.0",
        instructor: "InstructorX",
        aosDelay: "600"
    },
    {
        id: 5,
        img: Image3,
        title: "Course #3",
        rating: "2.0",
        instructor: "InstructorX",
        aosDelay: "800"
    }
];

const Courses = () => {
    return (
        <div className="mt-14 mb-12">
            <div className="container">
                {/* Header section */}
                <div className="text-center mb-10 max-w-[600px] mx-auto">
                    <p data-aos="fade-up" className="text-sm text-primary">Top selling courses for you</p>
                    <h1 data-aos="fade-up" className="text-3xl font-bold">Courses</h1>
                    <p data-aos="fade-up" className="text-xs text-gray-400">Lorem ipsum dolor sit amet consecte eligendi rerum ipsum aut.</p>

                </div>
                {/* Body section */}
                <div>
                    <div
                    className="grid grid-cols-1 sm:grid-cols3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
                        {/* Card section */}
                        {
                            CourseData.map(course => (
                                <div key={course.id}
                                data-aos="fade-up"
                                data-aos-delay = {course.aosDelay}
                                className="space-y-3">
                                    <img src={course.img} alt="" 
                                    className="h-[220px] w-[150px] object-cover rounded-md"/>
                                    <div>
                                        <h3 className="font-semibold">{course.title}</h3>
                                        <p className = "text-sm text-gray-600">{course.instructor}</p>
                                        <div className="flex items-center gap-1">
                                            <FaStar className="text-yellow-400" />
                                            <span>{course.rating}</span>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Courses;