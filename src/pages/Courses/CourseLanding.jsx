import React, { useEffect, useState } from "react";
import {useParams} from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import CourseHeader from "../../components/Course/CourseHeader";
import CourseModules from "../../components/Course/CourseModules";

const CourseData = {
    title: "Course Title",
    headline: "One liner headline of the course",
    language: "Hindi",
    educator: "Geetesh Sahu",
    rating: 4,
    totalEnrollments: 108,
    contentLength: 12
}

const CourseLanding = () => {
    // useEffect(() => {
    //     fetch(BACKEND_API + '/youtube')
    //     .then((response) => response.json())
    //     .then(setVideoUrl);
    // }, [])
    const {courseId} = useParams();
    return (
        <div className="relative">          
            
            {/* <iframe width="560" height="315" src={videoUrl} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}
            <CourseHeader />
            <CourseModules />
        </div>
    )
}

export default CourseLanding;