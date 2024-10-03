import React, { useState } from "react";
import { FaCirclePlus } from "react-icons/fa6";

const CourseHelper = () => {

	const [language, setLanguage] = useState('Hindi');

	return (
		<div className="mt-20 container dark:text-white">
			<h1 className="text-3xl text-center text-secondary font-bold">Mentorship Update</h1>
			{/* Course basic details */}
			<div className="grid grid-cols-3 gap-5 mt-5">
				<input type="text" className="dark:bg-gray-700" placeholder="Add course title"/>
				<input type="text" className="dark:bg-gray-700" placeholder="Enter educator name"/>
				<input type="text" className="dark:bg-gray-700" placeholder="Enter Course Price" />
				<input type="text" className="dark:bg-gray-700" placeholder="Enter course image URL" />
				<select value={language} defaultValue="Hindi" className="w-[100px] dark:bg-gray-700" name="language" onChange={(e) => setLanguage(e.target.value)}>
					<option value="Hindi">Hindi</option>
					<option value="English">English</option>
				</select>
			</div>
			<div>
				<textarea nme="description" id="" cols="70" rows="10" className="dark:bg-gray-700 my-3" placeholder="Enter course description"></textarea>
			</div>
			{/* Course module lister */}
			<button className="font-semibold leading-6 text-primary text-lg flex gap-2 items-center">Add Module <span aria-hidden="true"><FaCirclePlus /></span></button>
			{/* <button className="font-semibold leading-6 text-gray-900 text-lg dark:text-gray-200"
			onClick={() => {}}>
			लॉग इन करें <span aria-hidden="true">&rarr;</span></button> */}
		</div>
	)
}

export default CourseHelper;