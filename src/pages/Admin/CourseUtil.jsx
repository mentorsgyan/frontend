import React, { useState } from "react";
import { FaCircleMinus } from "react-icons/fa6";
import axios from "axios";
import { BACKEND_API } from "../../utility/Constants";

const CourseUtil = () => {
	const [moduleList, setModulesList] = useState([]);

	function onAddModule() {
		const newModuleName = prompt("Enter new module name");
		if (newModuleName) {
			setModulesList([...moduleList, {name: newModuleName, lectures: [], isCollapsed: true}]);
		}
	}

	function handleAddLecture (moduleId) {
		const updatedModules = moduleList.map((module, idx) => {
			if (idx === moduleId) {
				return {
					...module,
					lectures: [
						...module.lectures,
						{ name: '', link: ''}
					],
				};
			}
			return module;
		})
		console.log("Herer");
		setModulesList(updatedModules);
	}

	function handleLectureINputChange(moduleId, lectureId, field, value) {
		console.log(moduleId, lectureId, field, value);
		const updatedModules = moduleList.map((module, idx) => {
			if (idx === moduleId) {
				const updatedLectures = module.lectures.map((lecture, lectureIdx) => {
					if (lectureIdx === lectureId) {
						return { ...lecture, [field]: value};
					}
					return lecture;
				});
				return { ...module, lectures: updatedLectures};
			}
			return module;
		});
		setModulesList(updatedModules);
	}

	function deleteModule (moduleId) {
		const updatedModules = moduleList.filter((module, idx) => idx !== moduleId);
		console.log(updatedModules);
		setModulesList(updatedModules);
	};

	function deleteLecture (moduleId, lectureId) {
		const updatedModules = moduleList.map((module, idx) => {
		  if (idx === moduleId) {
			const updatedLectures = module.lectures.filter((lecture, lectId) => lectId !== lectureId);
			return { ...module, lectures: updatedLectures };
		  }
		  return module;
		});
		setModulesList(updatedModules);
	  };
	
	async function handleSubmit() {
		const data = {
			courseName: courseName,
			instructorName: instructor,
			price: price,
			headline: headline,
			rating: -1,
			totalEnrollment: 0,
			moduleList: moduleList
		}
		const response = await axios.post(BACKEND_API + "/course/create", data);
		alert(`${response.status}: ${response.data}`);
	}

	const [courseName, setCourseName] = useState('');
	const [instructor, setInstructor] = useState('');
	const [price, setPrice] = useState('');
	const [headline, setHeadline] = useState('');

	return (
		<div className="dark:text-white container mt-10 p-3 py-5 border-gray-400 rounded-3xl shadow-2xl dark:shadow-gray-700 font-mukta">
		<h1 className="text-3xl font-bold text-center">Create new course</h1>
			{/* Basic Details */}
			<div className="grid grid-cols-3 gap-5 mt-5">
				<input type="text" name="courseName" id="courseName" placeholder="Course Name" className="dark:bg-gray-700" value={courseName} onChange={(e) => setCourseName(e.target.value)}/>
				<input type="text" name="courseName" id="courseName" placeholder="Instructor Name" className="dark:bg-gray-700" value={instructor} onChange={(e) => setInstructor(e.target.value)}/>
				<input type="text" name="courseName" id="courseName" placeholder="Price (₹)" className="dark:bg-gray-700" value={price} onChange={(e) => setPrice(e.target.value)}/>
				<input type="text" name="courseName" id="courseName" placeholder="Course Headline (1 Liner)" className="dark:bg-gray-700 col-span-3" value={headline} onChange={(e) => setHeadline(e.target.value)}/>
			</div>
			{/* Module details */}
			{
				moduleList.map((module, idx) => (
					<div className="flex flex-col my-2 gap-5 " key={idx}>
						<div className="flex gap-4 items-center">
							<h1 className="text-secondary font-light text-xl">{idx + 1}. {module.name}</h1>
							<FaCircleMinus className="text-red-600" onClick={(e) => deleteModule(idx)}/>
						</div>

						{
							module.lectures?.map((lecture, lectureIdx) => (
								<div key={lectureIdx} className="flex items-center gap-5">
									<h1 className="font-bold">{idx+1}.{lectureIdx+1}</h1>
									<input type="text" name="lecture_title" id=""  className="dark:bg-gray-700 rounded-md" placeholder="Lecture Title" value={lecture.name} onChange={(e) => handleLectureINputChange(idx, lectureIdx, 'name', e.target.value)} />
									<input type="text" name="lecture_link" id=""  className="dark:bg-gray-700 rounded-md" placeholder="Lecture Link" value={lecture.link} onChange={(e) => handleLectureINputChange(idx, lectureIdx, 'link', e.target.value)}/>
									<FaCircleMinus className="text-red-600" onClick={(e) => deleteLecture(idx, lectureIdx)}/>
								</div>
							))
						}
						<button className="bg-green-400 w-fit p-1 rounded-md" onClick={(e) => handleAddLecture(idx)}>Add lecture</button>

					</div>
				))
			}
			<button className="bg-blue-500 p-2 mt-10 rounded-md" onClick={onAddModule}>Add module</button>
			<br/>
			<button className="bg-secondary p-2 mt-10 rounded-md" onClick={handleSubmit}>Submit Course</button>
		</div>
	)
}

export default CourseUtil;