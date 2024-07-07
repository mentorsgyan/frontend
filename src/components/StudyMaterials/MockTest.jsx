import React from "react";
import Ronaldo from "../../assets/ronaldo.png"
import { FaCheck } from 'react-icons/fa6';

/**
 * This component will render the 
 * list of mock tests in the home page.
 * @author Mayank Shukla
 */
const MockTest = () => {

    // Data
    const MockTestData = {
        mainImage: Ronaldo,
        tileImage: 'https://upload.wikimedia.org/wikipedia/commons/8/87/Coat_of_arms_of_Chhattisgarh.svg',
        backgroundImage: 'https://cache.careers360.mobi/media/article_images/2022/3/25/How-to-attempt-your-exams-well.webp',
        highlights: [
            "Interactive MCQ questions",
            "Get your scores immidiately",
            "Review your answers with Experts"
        ]
    }

    return (
        <div id="test-series" data-aos="fade-in" className="sm:flex justify-between p-10">
            {/* BG section */}
            {/* <div className="absolute -z-10 blur">
                <img className="w-screen" src={MockTestData.backgroundImage} alt="" />
            </div> */}
             {/* Text/Card section */} 
            <div className="container ">
                <h1 className="text-3xl font-bold tracking-tight text-secondary pt-5 pb-10 ">Daily MCQ mock test by MentorsGyan</h1>
                {/* Sample paper card */}
                <div className="pb-5">
                    <MockTestCard MockTestData={MockTestData}/>
                </div>
            </div>
            {/* Section image */}
            <div className="container">
                <img className="w-1/2 md:block hidden"  src={MockTestData.mainImage} alt="" />
            </div>
        </div>
    )
}


const MockTestCard = ({MockTestData}) => {
    return (
        <div className="md:flex items-center justify-center gap-4">
            {/* Image */}
            <img src={MockTestData.tileImage} alt="" className="w-1/2"/>
            {/* Text Section */}
            <div className="text-justify">
                <h2 className="text-xl font-bold tracking-wide text-white">Get ready for your exams, NOW!</h2>
                <p className="font-semibold text-gray-400">Ace your CGPCS journey with daily mock tests by MentorsGyan</p>
                <ul>
                    {
                        MockTestData.highlights.map((highlight, index) => (
                            <li className="flex items-center gap-3 text-white">
                                <FaCheck /> 
                                <p>{highlight}</p>
                            </li>
                        ))
                    }
                    
                </ul>
                <button className="my-2 rounded-lg bg-secondary text-white font-semibold tracking-wider p-2 hover:bg-primary/50  duration-200 hover:scale-110">Start Mock Test</button>
            </div>
            
        </div>
    )
}

export default MockTest;