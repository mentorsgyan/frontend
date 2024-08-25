import React from "react";
import { CheckIcon, XMarkIcon , SignalSlashIcon} from '@heroicons/react/20/solid';
import { useNavigate } from "react-router-dom"; 

const MentorshipSM = ({MentorshipPrograms}) => {
    return (
        <div className="grid md-900:grid-cols-3 grid-cols-1 gap-16 p-5">
            {
                MentorshipPrograms.map(program => (
                    <MentorshipCard program={program} key={program.id}/>
                ))
            }
        </div>
    )
}

const MentorshipCard = ({program}) => {
    const mentorshipFeatures = ["संपूर्ण रणनीति", "तैयारी का आंकलन", "मास्टर प्लान", "किताबों की जानकारी", "प्रेरणा", "कॉल पर मेंटर से बात"];
    const navigate = useNavigate();
    const data = {
        price: program.offerPrice,
        id: program.id,
        name: 'MENTORSHIP-' + program.programDescription,
	validity: program.renewalInNumber
    }
    return (
        <div /*data-aos = "flip-down" data-aos-easing="ease-out-cubic" data-aos-duration="8000" */ className="hover:scale-105 duration-200">
            {/* New arrival banner */}
            {/* <NewArrivalBanner /> */}

            <div className={`flex flex-col gap-6 border bg-white p-2 ${!program.mostPopular ? "border-gray-300" : "border-primary shadow-2xl shadow-secondary/50"} pb-8 px-4 rounded-3xl md-1024:w-[300px] `}>
                {/* Heading */}
                <div className="flex justify-between">
                    <h3 className={`text-2xl font-semibold ${program.mostPopular ? "text-secondary" : "text-black"}`}>{program.renewalDuration}</h3>
                    {program.mostPopular && <h3 className="text-secondary bg-primary/50 rounded-full px-2 py-1 text-lg">लोकप्रिय</h3>}
                </div>
                {/* Plan description */}
                <p className="text-gray-700 text-2xl">{program.programDescription}</p>
                {/* Course price */}
                <div className="flex items-baseline gap-1">
                    <p className="text-3xl font-bold text-secondary text-right">₹{program.offerPrice}/-</p>
                    {program.price &&
                        <p className="text-xl text-black font-bold z-10 line-through">{program.price}</p>
                    }
                </div>
                {
                    program.price &&  <p className="text-red-500 text-3xl font-extrabold animate-bounce">{100-Math.round(program.offerPrice/program.price * 100)}% छूट !</p>
                }
                {/* Buy plan button */}
                <div>
                    <button className=
                    {`p-2 ${!program.mostPopular ? "text-secondary bg-white border border-secondary hover:text-white" : "text-white bg-secondary"} w-full rounded-md hover:bg-secondary/75  duration-150`}
                    onClick={() => {
                        navigate("/checkout", {state: {data: data}});
                    }}
                    >अभी खरीदें</button>
                </div>
                {/* Mentorship details in points */}
                <ul>
                    {
                        program.features.map((value, idx) => (
                            <li key={idx} className="py-4 flex gap-2 text-lg">
                                {
                                    value === 1 ? (<CheckIcon className="w-5 text-secondary"/>) : (<p className="text-secondary">{value}</p>)
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