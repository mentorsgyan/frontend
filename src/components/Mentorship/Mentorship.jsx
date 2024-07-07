import React from "react";
import {CheckIcon} from '@heroicons/react/20/solid';

const MentorshipPrograms = [
    {
        mostPopular: true,
        renewalDuration: "Yearly",
        programDescription: "Mentorsgyan Platinum Mentorship Pack",
        price: 10000,
        programFeatures: ["Daily mentorship", "Books included", "₹7000/- without books"],
        notIncludedFeatures: []
    },
    {
        mostPopular: false,
        renewalDuration: "Yearly",
        programDescription: "Mentorsgyan Gold Mentorship Pack",
        price: 3000,
        programFeatures: ["Weekly mentorship", "Weekly Follow-ups"],
        notIncludedFeatures: ["Books"]
    },
    {
        mostPopular: false,
        renewalDuration: "One-time",
        programDescription: "Mentorsgyan Membership Trial Pack",
        price: 99,
        programFeatures: ["1:1 Phone call", "1 hour personal guidance"],
        notIncludedFeatures: ["No follow-ups"]
    }
]

/**
 * This page renders the mentorship pricing component
 * It will render cards.
 * @returns 
 */
export default function () {
    return (
        <div id="mentorship" className="py-5 mx-5 flex flex-col items-center gap-6">
            {/* Section heading area */}
            <h2 data-aos="fade-up" data-aos-duration="6000" className="text-secondary font-bold tracking-wide text-xl">Pricing</h2>
            <h1 data-aos="fade-up" data-aos-duration="6000" className="text-4xl tracking-tight font-bold">Pricing plans for different mentorship programs</h1>
            <p data-aos="fade-up" data-aos-duration="6000" className="font-light uppercase tracking-wide">Mentorship brings you tailored mentorship plans</p>

            {/* Mentorship pricing cards */}
            <div className="grid md:grid-cols-3 grid-cols-1 gap-16">
                {
                    MentorshipPrograms.map((program, idx) => (
                        <MentorshipCard program={program} key={idx}/>
                    ))
                }
            </div>
            
            {/* Know more about mentors */}
            <div >
                Want to know more about our Mentors?
            </div>
        </div>
    )
}

const MentorshipCard = ({program}) => {
    return (
        <div data-aos = "flip-down" data-aos-easing="ease-out-cubic" data-aos-duration="8000"  className="hover:scale-105">
            {/* New arrival banner */}
            {/* <NewArrivalBanner /> */}

            <div className={`flex flex-col gap-6 border bg-white p-2 ${!program.mostPopular ? "border-gray-300" : "border-primary"} pb-8 px-4 rounded-3xl w-[250px] `}>
                {/* Heading */}
                <div className="flex justify-between">
                    <h3 className={`text-xl font-semibold ${program.mostPopular ? "text-secondary" : "text-black"}`}>{program.renewalDuration}</h3>
                    {program.mostPopular && <h3 className="text-secondary bg-primary/50 rounded-full px-2 py-1">Most popular</h3>}
                </div>
                {/* Plan description */}
                <p className="text-gray-700">{program.programDescription}</p>
                {/* Course price */}
                <div className="flex items-baseline gap-1">
                    <p className="text-3xl font-bold">₹{program.price}</p>
                    <p className="font-light lowercase">/ {program.renewalDuration}</p>
                </div>
                {/* Buy plan button */}
                <div>
                    <button className=
                    {`p-2 ${!program.mostPopular ? "text-secondary bg-white border border-secondary hover:text-white" : "text-white bg-secondary"} w-full rounded-md hover:bg-secondary/75  duration-150`}>Buy Now</button>
                </div>
                {/* Mentorship details in points */}
                <ul>
                    {
                        program.programFeatures.map((features, idx) => (
                            <li key={idx}>
                                <div className="flex gap-4">
                                <CheckIcon className="w-7 text-secondary"/> {features}
                                </div>
                            </li>
                        ))
                        
                    }
                    {
                        program.notIncludedFeatures.map((features, idx) => (
                            <li key={idx}>
                                <div className="flex gap-4">
                                <svg xmlns="http://www.w3.org/2000/svg"  fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path className = "text-secondary" strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                </svg>
                                    {features}
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

const NewArrivalBanner = () => {
    return (
        <div className="relative rotate-45 translate-y-24 translate-x-28 ">
            <p className="bg-secondary w-fit px-5 rounded-lg">
            Newly Launched
            </p>
            
        </div>
    )
}