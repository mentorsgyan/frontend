import React, { useState } from "react";
import { FaCaretDown, FaPlayCircle } from 'react-icons/fa';

const ModulesDropDown = ({Modules, videoPlayer = false}) => {
    const [ModulesData, setModulesData] = useState(Modules);
    return (
        // <div className={`${videoPlayer ? "h-1/2 border-4 " : "h-1/3"} bg-secondary/5 border-primary/20 `}>
            <div className={`overflow-y-scroll ${videoPlayer ? "max-h-[600px]": "shadow-lg"} bg-white p-4 `}>
                <h1 className='text-2xl font-extrabold text-center border p-2 border-secondary bg-primary text-gray-50'>Course Content</h1>
                <div className="z-[9999] group-hover:block rounded-md bg-white p-2 text-black shadow-md">
                    <ul>
                        {
                            ModulesData.map(currentModule => (
                                <li className="my-2 group cursor-pointer shadow-md" id={currentModule.moduleNumber}>
                                    <div
                                    className="bg-primary/30 px-10 text-2xl shadow-lg flex justify-between items-center gap-[2px] py-4">
                                        <h2>{currentModule.moduleNumber}. {currentModule.title}</h2>
                                        <span>
                                            <FaCaretDown 
                                            className={`transition-all text-primary duration-200 ${currentModule.expanded ? "rotate-180" : "rotate-0"}`} onClick={() => {
                                                setModulesData(ModulesData.map(actualModule => {
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
                                                        <div className='flex items-center justify-between px-10'>
                                                            <p className=''>{lecture.lectureNumber}. {lecture.title}</p>
                                                            <a href={lecture.link}
                                                            className="rounded-md"
                                                            ><FaPlayCircle className='transition duration-200 hover:scale-125'/></a>
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
        // </div>
    )
}

export default ModulesDropDown;