import React, { useState } from "react";
import { FaCaretDown, FaPlay, FaPlayCircle } from 'react-icons/fa';
import { FaCirclePlay } from 'react-icons/fa6';

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

const ModulesDropDown = ({Modules3, videoPlayer = false}) => {
    const [Modules, setModules] = useState(Modules2);
    return (
        <div className={`${videoPlayer ? "h-screen mb-10 border-4 w-2/5" : "h-fit w-full"} bg-secondary/5 border-primary/20 flex justify-center`}>
            <div className="w-full overflow-y-scroll bg-white p-4 shadow-lg">
                <h1 className='text-2xl font-extrabold text-center border p-2 border-secondary bg-primary text-gray-50'>Course Content</h1>
                <div className="z-[9999]  group-hover:block rounded-md bg-white p-2 text-black shadow-md">
                    <ul>
                        {
                            Modules.map(currentModule => (
                                <li className="my-2 group cursor-pointer shadow-md" id={currentModule.moduleNumber}>
                                    <div
                                    className="bg-primary/30 px-10 text-2xl shadow-lg flex justify-between items-center gap-[2px] py-4">
                                        <h2>{currentModule.moduleNumber}. {currentModule.title}</h2>
                                        <span>
                                            <FaCaretDown 
                                            className={`transition-all text-primary duration-200 ${currentModule.expanded ? "rotate-180" : "rotate-0"}`} onClick={() => {
                                                setModules(Modules.map(actualModule => {
                                                    if (actualModule.moduleNumber === currentModule.moduleNumber) {
                                                        actualModule.expanded = !actualModule.expanded
                                                    }
                                                    return actualModule
                                                }));
                                            }}/>
                                        </span>
                                    </div>
                                    <div className={`flex-col ${currentModule.expanded ? " block" : "hidden"} `}>
                                        <ul className="flex-col">
                                            {
                                                currentModule.lectures.map(lecture => (
                                                    <li className=' bg-white p-2 text-black shadow-md' key = {lecture.lectureNumber}>
                                                        <div className='flex'>
                                                            <p className='w-full'>{lecture.lectureNumber}. {lecture.title}</p>
                                                            <a href={lecture.link}
                                                            className="rounded-md"
                                                            ><FaCirclePlay className='transition duration-200 hover:scale-125'/></a>
                                                            </div>
                                                    </li>
                                                ))
                                            }
                                            
                                        
                                        </ul>
                                    </div>
                                </li>
                            ))
                        }
                        
                    </ul>
                </div>
                
                
            </div>
        </div>
    )
}

export default ModulesDropDown;