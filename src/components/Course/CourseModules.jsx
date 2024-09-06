import React, { useEffect, useState } from "react";
import {ChevronDownIcon } from '@heroicons/react/20/solid';
import { FloatingCourseCard } from "../../pages/Course/CourseLanding";

const CourseModules = ( { modules }) => {
    return (
        <div id = "modules">
            {/* Course Module drop downs */}
            <DropDowns modules={modules}/>
        </div>
    )
}

const DropDowns = ( { modules }) => {
    const [isFloating, setIsFloating] = useState(false);

	const [modulesList, setModulesList] = useState(modules);

    function handleDropDown (moduleIdx) {

		const listCopy = [...modulesList];
		listCopy[moduleIdx].isCollapsed = !listCopy[moduleIdx].isCollapsed;
		setModulesList(listCopy);
    }

    function handleScroll () {
        const headerComponent = document.getElementById("module-section");
        const headerComponentOffset = headerComponent ? headerComponent.offsetTop : 0;
        setIsFloating(window.scrollY > headerComponentOffset)
    };
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [])

    return (
        <div id="module-section" className="dark:text-gray-200 text-gray-700 container">
            { isFloating && <FloatingCourseCard /> }
            <h1 className="text-secondary text-3xl font-bold tracking-tight mb-3">Course structure for this program</h1>
            <div className="border rounded-3xl p-4 dark:border-gray-600 shadow-2xl dark:shadow-gray-400 ">
                {
					modulesList.map((list, listIdx) => (
						<div key={listIdx}>
							<div className="flex items-center cursor-pointer gap-4" key={listIdx} onClick={() => handleDropDown(listIdx)} role="button">
								<h2 className="text-xl font-semibold">{listIdx + 1}. {list.moduleName}</h2>
								<ChevronDownIcon 
									
									className={`h-8 ${list.isCollapsed ? '' : 'rotate-180'} `}/>
							</div>
							<div className={`${list.isCollapsed ? 'hidden' : 'block'} my-2 mx-4`}>
								{
									list.lectureNames.map((lecture, lectureIdx) => (
										<p key={lectureIdx}>{lecture}</p>
									))
								}
							</div>
						</div>
					))
					
				}
            </div>
        </div>
    )
}

// {
// 	ModuleList.map((modules, idx) => (
		// <>
		// 	<div className="flex items-center cursor-pointer gap-4" key={idx} onClick={() => handleDropDown(idx)} role="button">
		// 		<h2 className="text-xl font-semibold">{idx + 1}. {modules.title}</h2>
		// 		<ChevronDownIcon 
					
		// 			className={`h-8 ${modules.isCollapsed ? '' : 'rotate-180'} `}/>
		// 	</div>
		// 	<div className={`${modules.isCollapsed ? 'hidden' : 'block'} my-2 mx-4`}>
		// 		{
		// 			modules.internalLectures.map((lecture, idx) => (
		// 				<p>{lecture.title}</p>
		// 			))
		// 		}
		// 	</div>
		// </>
// 	))
// }

export default CourseModules;