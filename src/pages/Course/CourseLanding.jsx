import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BACKEND_API } from '../../utility/Constants';
import { UserCircleIcon, ClockIcon, GlobeAltIcon, CheckCircleIcon} from '@heroicons/react/24/outline'
import { StarIcon } from '@heroicons/react/24/solid'
import Navbar from "../../components/Navbar/Navbar";
import { MdGroup } from "react-icons/md";
import CourseModules from "../../components/Course/CourseModules";

const CourseLanding = () => {
	const { courseName } = useParams();
	const [courseData, setCourseData] = useState(null);

	async function fetchCourse () {
		fetch(BACKEND_API + '/course/getCourseByName/' + courseName)
		.then((response) => response.json())
		.then((data) => setCourseData(data));
	}

	useEffect(() => {
		fetchCourse();
	}, []);

	return (
		<>
			<Navbar sticky={false}/>
			{/* <div id="header-component" className="relative items-center justify-evenly h-[500px] w-full dark:bg-gray-800 dark:text-white flex md:flex-row flex-col"> */}
			<div id="header-component" className="relative dark:bg-gray-800 dark:text-white">
				{/* Course card */}
				{
					courseData && (
						<div>
							<div className="flex w-full items-center justify-evenly">
								<CourseTextSection courseData={courseData}/>
								<CourseCard courseData={courseData}/>
							</div>
							<CourseModules modules={courseData.moduleList}/>
						</div>
					)
				}
			</div>
		</>
	)
}

const CourseCard = ( { courseData }) => {
	const data = {
		price : '5000'
	}
	const features = ["Feature 1", "Feature 2"];
	return (
		(
			<div className=" text-black dark:text-white flex flex-col gap-3 bg-opacity-10 p-3 shadow-2xl shadow-gray-500 rounded-3xl">
				<img src={courseData.imageUrl} alt="Course thumbnail" className="h-[170px]"/>
				{/* Course price */}
				<h1 className="text-primary text-3xl font-bold">₹ 999/-</h1>
				{/* Course properties section */}
				<h2 className="text-xl font-bold">This course contains:</h2>
				<ul className="pl-2">
					{
						features.map((feature, idx) => (
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
	)
}

export const FloatingCourseCard = () => {
	const courseFeature = ["XYZ feature 1", "XYZ Feature 2", "XYZ Feature 3"];
	return (
		<div className="fixed flex flex-col p-7 rounded-3xl right-20 top-5 bg-white bg-opacity-20">
			<ul className="pl-2">
			{
				courseFeature.map((feature, idx) => (
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

const CourseTextSection = ({courseData}) => {
    return (
        <div className="dark:text-white flex flex-col gap-2">
            <h1 className="font-bold text-5xl tracking-tight">{courseData.courseName}</h1>
            <h2 className="font-bold text-2xl tracking-wide">TODO:Course Headline</h2>
            <div className="flex gap-3 items-center">
                <UserCircleIcon className="h-8 text-blue-500"/>
                <p className="text-blue-500">{courseData.instructorName}</p>
                |
                <GlobeAltIcon className=" h-8 text-secondary"/>
                <p className=" text-secondary">{courseData.language}</p>
                |
                <ClockIcon className="h-8 text-green-600"/>
                <p className="text-green-600">TODO: 10+ hours</p>
            </div>
            <div className="flex items-center gap-10">
                <p>Rating: {courseData.rating === -1 && 'NA'}</p>
                {
                    Array.from({length: courseData.rating}, (idx) => (
                        <StarIcon key={idx} className="h-5 text-yellow-400" />
                    ))
                }
                <div className="flex items-center"><MdGroup /> <p> &nbsp;&nbsp;{courseData.totalEnrollment} Enrollment</p></div>
            </div>
        </div>
    )
}

export default CourseLanding;