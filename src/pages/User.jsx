import { Progress } from "@material-tailwind/react";
import Navbar from "../components/Navbar/Navbar";
import TopCourses from "../components/TopCourses/TopCourses";
import Image from "../assets/hero/Hero.png"
import Footer from "../components/Footer/Footer";
import { useEffect, useState } from "react";


/**
 * This page will show:
 * 1. Courses the user has access to
 * @author Mayank Shukla
 */
const User = () => {

    const [courseAccess, setUserData] = useState(null)
    useEffect(() => {
        fetch("http://localhost:5000/api")
        .then(response => response.json())
        .then(data => setUserData(data))
        .catch(error => console.log("Error occured in fetching data: ", error))
    }, [])

    return (
        <div>
            <Navbar bottom = {false} />
            <div className="mb-10">
                <h1 className="tracking-wider mt-10  font-bold text-center text-3xl uppercase">Enrolled Courses</h1>
                {/* Course cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">

                    {courseAccess &&
                        courseAccess.map(course => (
                            <CourseCard key={course.courseId} course={course} />  
                        ))
                    }
                </div>
            </div>
            <Footer />
        </div>
    )
}

/**
 * This will return a course card which will have 
 * a thumbnail, title, headline and launch course button.
 * @param {*} param0 
 * @returns 
 */
const CourseCard = ({course}) => {
    return (
        <div className="shadow-lg mt-4 container p-4 border max-w-[300px]">
            <ProgressDefault/>
            <div >
                {/* Image */}
                {/* TODO: change image here */}
                <img src={Image} alt="" />
                {/* Text */}
                <div className="flex flex-col gap-2">
                    <h1 className="text-2xl font-bold mt-2 text-center">{course.courseName} </h1>
                    <h2 className="text-xl text-center">{course.description}</h2>
                    <h3 className="text-center text-sm">{course.courseCompletion}% Completed</h3>
                    <button className="text-xl bg-secondary p-2 rounded-md text-white hover:scale-105 transition duration-200">
                        Launch Course
                    </button>
                    
                </div>
            </div>
        </div>
    )
}
 
const ProgressDefault = () => {
  return <Progress value={50} />;
}

export default User;