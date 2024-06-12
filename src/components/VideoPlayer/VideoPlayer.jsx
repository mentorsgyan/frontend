import React, { act, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from "../Footer/Footer"
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

const VideoPlayer = () => {

    const [Modules, setModules] = useState(Modules2);
    
    return (
        <div>
            <Navbar bottom={false}/>
            <div className="pb-10 pt-2 flex justify-center gap-2">
                {/* Video player */}
            <div className=" bg-white shadow-lg h-screen rounded-lg w-full">
                <video controls className="w-full">
                <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
                Your browser does not support the video tag.
                </video>
                <h4 className='text-3xl font-bold p-5'>About the lecture</h4>
                <p className='text-2xl text-justify p-5'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus eligendi ipsa amet deserunt sapiente consequatur nam error, atque consequuntur, ad ratione repudiandae reiciendis illum. Officiis ullam ratione commodi dolorum hic?
                </p>
            </div>
            {/* Scrollable course content */}
            <div className="h-screen mb-10 border-4 w-2/5 bg-secondary/5 border-primary/20 flex justify-center">
                <div className="w-full overflow-y-scroll bg-white p-4 shadow-lg">
                    <h1 className='text-2xl font-extrabold text-center border p-2 border-secondary bg-primary text-gray-50'>Course Content</h1>
                    <div className="z-[9999]  group-hover:block rounded-md bg-white p-2 text-black shadow-md">
                        <ul>
                            {
                                Modules.map(currentModule => (
                                    <li className="my-2 group cursor-pointer" id={currentModule.moduleNumber}>
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
                                                            <div className='flex '>
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
            </div>
            <Footer />
        </div>
    );
}

export default VideoPlayer;
