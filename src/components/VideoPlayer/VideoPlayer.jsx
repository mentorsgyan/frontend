import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from "../Footer/Footer"
import ModulesDropDown from '../ModulesDropDown/ModulesDropDown';
import { useLocation } from 'react-router-dom';
import { BACKEND_API } from '../../utility/Constants';

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

/**
 * This component is the video player
 * where a module scroller besides the video player
 * @author Mayank Shukla
 * @returns
 */
const VideoPlayer = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);

    useEffect(async () =>  {
        try {
            const response = await fetch(BACKEND_API + "/courseById", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({courseId: queryParams.get('courseId')})
            });
    
            if (response.ok) {
    
            } else {
                console.log()
            }
        } catch (error) {
            console.error("Error occured in fetching course data");
        }
        
    }, [])

    const [Modules, setModules] = useState(Modules2);
    
    return (
        <div>
            <Navbar bottom={false}/>
            <div className="pt-2 shadow-md grid grid-cols-1 md:grid-cols-3">
                {/* Video player */}
                <div className=" bg-white  rounded-lg col-span-2">
                    <video controls className="w-full">
                    <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                    </video>
                </div>
                {/* Scrollable course content */}
                <div>
                    <ModulesDropDown Modules={Modules} videoPlayer={true}/>
                </div>
            </div>
            <div>
                <h4 className='text-3xl font-bold '>About the lecture</h4>
                <p className='text-2xl text-justify'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus eligendi ipsa amet deserunt sapiente consequatur nam error, atque consequuntur, ad ratione repudiandae reiciendis illum. Officiis ullam ratione commodi dolorum hic?
                </p>
            </div>
            <Footer />
        </div>
    );
}

export default VideoPlayer;
