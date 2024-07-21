import React from "react";
import {CheckIcon} from '@heroicons/react/20/solid';
import {useNavigate } from "react-router-dom"; 

const MentorshipSM = ({MentorshipPrograms}) => {
    return (
        <div className="grid md:grid-cols-3 grid-cols-1 gap-16 p-5">
            {
                MentorshipPrograms.map(program => (
                    <MentorshipCard program={program} key={program.id}/>
                ))
            }
        </div>
    )
}

const MentorshipCard = ({program}) => {
    // const history = useHistory();
    const mentorshipFeatures = ["Overall Strategy", "Motivation", "Preparation Analysis", "Master Plan", "Books Information", "Calls"];
    const navigate = useNavigate();
    const data = {
        price: program.price,
        id: program.id,
        name: 'MENTORSHIP-' + program.programDescription
    }
    return (
        <div /*data-aos = "flip-down" data-aos-easing="ease-out-cubic" data-aos-duration="8000" */ className="hover:scale-105 duration-200">
            {/* New arrival banner */}
            {/* <NewArrivalBanner /> */}

            <div className={`flex flex-col gap-6 border bg-white p-2 ${!program.mostPopular ? "border-gray-300" : "border-primary shadow-2xl shadow-secondary/50"} pb-8 px-4 rounded-3xl w-[300px] `}>
                {/* Heading */}
                <div className="flex justify-between">
                    <h3 className={`text-xl font-semibold ${program.mostPopular ? "text-secondary" : "text-black"}`}>{program.renewalDuration}</h3>
                    {program.mostPopular && <h3 className="text-secondary bg-primary/50 rounded-full px-2 py-1">Most popular</h3>}
                </div>
                {/* Plan description */}
                <p className="text-gray-700 text-2xl">{program.programDescription}</p>
                {/* Course price */}
                <div className="flex items-baseline gap-1">
                    <p className="text-3xl font-bold">₹{program.price}</p>
                    <p className="font-light lowercase">/ {program.renewalDuration}</p>
                </div>
                {/* Buy plan button */}
                <div>
                    <button className=
                    {`p-2 ${!program.mostPopular ? "text-secondary bg-white border border-secondary hover:text-white" : "text-white bg-secondary"} w-full rounded-md hover:bg-secondary/75  duration-150`}
                    onClick={() => {
                        navigate("/checkout", {state: {data: data}});
                    }}
                    >Buy Now</button>
                </div>
                {/* Mentorship details in points */}
                <ul>
                    {
                        program.features.map((value, idx) => (
                            <li key={idx} className="py-4 flex gap-2">
                                {
                                    value === 1 || value !== 'X' ? (<CheckIcon className="w-5 text-secondary"/>) : (<p className="text-secondary">{value}</p>)
                                }
                                <p>{mentorshipFeatures[idx]}</p>
                            </li>
                        ))
                        
                    }
                </ul>
            </div>
        </div>
    )
}

export default MentorshipSM;