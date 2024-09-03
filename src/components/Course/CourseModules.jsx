import React, { useEffect, useState } from "react";
import {ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import {CheckCircleIcon} from '@heroicons/react/24/outline'

const CourseModules = () => {
    return (
        <div id = "modules" className="bg-gray-800">
            {/* Course Module drop downs */}
            <DropDowns />
        </div>
    )
}

const DropDowns = () => {
    const [ModuleList, setModuleList] = useState([
        {
            title: "C++ basics",
            isCollapsed: true,
            internalLectures: [
                {
                    title: "Data types",
                },
                {
                    title: "Operators",
                },
                {
                    title: "Methods",
                }
            ]
        },
        {
            title: "C++ basics",
            isCollapsed: true,
            internalLectures: [
                {
                    title: "Data types",
                },
                {
                    title: "Operators",
                },
                {
                    title: "Methods",
                }
            ]
        },
        {
            title: "C++ basics",
            isCollapsed: true,
            internalLectures: [
                {
                    title: "Data types",
                },
                {
                    title: "Operators",
                },
                {
                    title: "Methods",
                }
            ]
        },
        {
            title: "C++ basics",
            isCollapsed: true,
            internalLectures: [
                {
                    title: "Data types",
                },
                {
                    title: "Operators",
                },
                {
                    title: "Methods",
                }
            ]
        },
        {
            title: "C++ basics",
            isCollapsed: true,
            internalLectures: [
                {
                    title: "Data types",
                },
                {
                    title: "Operators",
                },
                {
                    title: "Methods",
                }
            ]
        },
        {
            title: "C++ basics",
            isCollapsed: true,
            internalLectures: [
                {
                    title: "Data types",
                },
                {
                    title: "Operators",
                },
                {
                    title: "Methods",
                }
            ]
        },
        {
            title: "C++ basics",
            isCollapsed: true,
            internalLectures: [
                {
                    title: "Data types",
                },
                {
                    title: "Operators",
                },
                {
                    title: "Methods",
                }
            ]
        },
        {
            title: "C++ basics",
            isCollapsed: true,
            internalLectures: [
                {
                    title: "Data types",
                },
                {
                    title: "Operators",
                },
                {
                    title: "Methods",
                }
            ]
        }
    ]);
    const [isFloating, setIsFloating] = useState(false);

    function handleDropDown (moduleIdx) {
        const modulesCopy = [...ModuleList];
        modulesCopy[moduleIdx].isCollapsed = !modulesCopy[moduleIdx].isCollapsed;
        setModuleList(modulesCopy);
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

    const courseFeature = ["XYZ feature 1", "XYZ Feature 2", "XYZ Feature 3"];

    return (
        <div id="module-section" className="text-white container">
            { isFloating && 
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
            }
            <h1 className="text-secondary text-3xl font-bold tracking-tight">Course structure for this program</h1>
            <div className="border rounded-3xl p-4 border-gray-600 shadow-2xl shadow-gray-400 ">
                {
                    ModuleList.map((modules, idx) => (
                        <>
                            <div className="flex items-center cursor-pointer gap-4" key={idx} onClick={() => handleDropDown(idx)} role="button">
                                <h2 className="text-xl font-semibold">{idx + 1}. {modules.title}</h2>
                                <ChevronDownIcon 
                                    
                                    className={`h-8 ${modules.isCollapsed ? '' : 'rotate-180'} `}/>
                            </div>
                            <div className={`${modules.isCollapsed ? 'hidden' : 'block'} my-2 mx-4`}>
                                {
                                    modules.internalLectures.map((lecture, idx) => (
                                        <p>{lecture.title}</p>
                                    ))
                                }
                            </div>
                        </>
                    ))
                }
                
            </div>
        </div>
    )
}

export default CourseModules;