import React from "react";
import { FaCheck } from 'react-icons/fa6';
import { useNavigate } from "react-router-dom";

/**
 * This component will render the 
 * list of mock tests in the home page.
 * @author Mayank Shukla
 */
const MockTest = () => {

    // Data
    const MockTestData = {
        backgroundImage: 'https://cache.careers360.mobi/media/article_images/2022/3/25/How-to-attempt-your-exams-well.webp',
        highlights: [
            "इंटरएक्टिव MCQ प्रश्न",
            "तुरंत अपना स्कोर प्राप्त करें",
            "विशेषज्ञों के साथ अपने उत्तरों की समीक्षा करें"
        ]
    }

    return (
        <div id="test-series" className="section sm:flex items-center p-10 dark:bg-gray-800 dark:text-white">
            {/* BG section */}
            {/* <div className="absolute -z-10 blur">
                <img className="w-screen" src={MockTestData.backgroundImage} alt="" />
            </div> */}
             {/* Text/Card section */} 
            <div className="container rounded-3xl shadow-2xl ">
                <h1 className="text-3xl font-bold tracking-tight text-secondary pt-5 pb-10 ">मेंटर्सज्ञान पर रोजाना एमसीक्यू मॉक टेस्ट!</h1>
                {/* Sample paper card */}
                <div className="pb-5">
                    <MockTestCard MockTestData={MockTestData}/>
                </div>
            </div>
        </div>
    )
}


const MockTestCard = ({MockTestData}) => {
    const navigate = useNavigate();
    return (
        <div className="flex md-900:flex-row flex-col items-center justify-center gap-4 font-mukta">
            {/* Image */}
            {/* <div className="w-full flex justify-center">
                <img  alt="" className="w-1/2 rounded-full shadow-2xl"/>
            </div> */}
            {/* Text Section */}
            <div className="text-justify flex flex-col gap-4">
                <h2 className="text-2xl font-bold tracking-wider text-secondary ">अपनी परीक्षाओं के लिए अभी से तैयार हो जाइए!</h2>
                <p className="font-semibold text-gray-700 dark:text-gray-300">हमारी CGPSC मॉक टेस्ट सीरीज प्रतिदिन 5 वर्णनात्मक प्रश्न और 20 वस्तुनिष्ठ प्रश्न प्रदान करती है, जिससे आपकी तैयारी को सशक्त बनाया जा सके और सफलता की संभावनाएं बढ़ सकें।</p>
                <ul className="divide-y-2 divide-gray-50 dark:divide-gray-700">
                    {
                        MockTestData.highlights.map((highlight, index) => (
                            <li key={index} className="flex items-center gap-3 py-1">
                                <FaCheck className="text-secondary text-2xl"/> 
                                <p className="text-xl">{highlight}</p>
                            </li>
                        ))
                    }
                    
                </ul>
                <button className="my-2 rounded-lg bg-secondary text-2xl text-white font-semibold tracking-wider p-2 hover:bg-primary/50 dark:hover:bg-primary  duration-200 hover:scale-110" onClick={() => {
                    navigate("/mock-test")
                }}>टेस्ट शुरू करें</button>
            </div>
            
        </div>
    )
}

export default MockTest;