import React, { useState } from "react";
import CurrentAffairsSection from "./CurrentAffairsSection";
import MockTest from "./MockTest";

// Data
const Sections = [
    {
        name: "ca",
        title: "Current Affairs",
        itemToBeRendered: <CurrentAffairsSection />
    },
    {
        name: "mt",
        title: "Mock Tests",
        itemToBeRendered: <MockTest />
    }
]

const StudyMaterials = () => {

    // State variables
    const [section, setSection] = useState('ca');

    // Constants
    const imageUrl = "https://st.depositphotos.com/39746134/55867/v/600/depositphotos_558674812-stock-video-hindi-newspaper-headlines-of-indian.jpg"

    return (
        <div id="study-materials" className="relative bg-black bg-opacity-70 pt-2">
            <BackGround />
            {/* Top button */}
            <div className="flex justify-center duration-200">
                <button 
                className={`${section === 'ca' ? "bg-secondary/75 text-white" : "text-xs bg-gray-200"} py-1 px-2 rounded-l-lg `}
                onClick={() => setSection('ca')}
                >
                    Current Affairs
                </button>
                <button 
                className={`${section === 'mt' ? "bg-secondary/75 text-white" : "text-xs bg-gray-200"} py-1 px-2 rounded-r-lg`}
                onClick={() => setSection('mt')}
                >
                    Mock Tests
                </button>
            </div>
            
            {section === 'ca' ? <CurrentAffairsSection /> : <MockTest />}
        </div>
    )
}

const BackGround = () => {
    return (
        <div>
            <img 
                src="https://st.depositphotos.com/39746134/55867/v/600/depositphotos_558674812-stock-video-hindi-newspaper-headlines-of-indian.jpg"
                alt=""
                className="absolute blur-sm inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
            />
            {/* <div
                className="w-full hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
                aria-hidden="true"
            >
                <div
                    className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-primary to-secondary opacity-20"
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                />
            </div>
            <div
                className="w-full absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
                aria-hidden="true"
            >
                <div
                    className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-primary to-secondary opacity-20"
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                />
            </div> */}
        </div>
    )
}

export default StudyMaterials;