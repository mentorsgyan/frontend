import React, { useEffect, useState } from "react";
import MentorshipSM from "./MentorshipSM";
import { BACKEND_API } from "../../utility/Constants";

/**
 * This page renders the mentorship pricing component
 * It will render cards.
 * @returns 
 */
export default function () {

	const [mentorshipData, setMentorshipData] = useState([]);

	async function fetchMentorshipPrograms () {
		fetch(BACKEND_API + "/mentorship/fetch")
		.then((response) => response.json())
		.then((data) => {
			data.sort((a, b) => Number.parseInt(a.offerPrice) > Number.parseInt(b.offerPrice))
			setMentorshipData(data)
		});
	}

	useEffect(() => {
		fetchMentorshipPrograms();
	}, [])
    return (
        <div id="mentorship" className="section py-5 px-5 flex flex-col items-center gap-6 font-mukta dark:bg-gray-800 dark:text-gray-200">
            {/* Section heading area */}
            <h2 /* data-aos="fade-up" data-aos-duration="6000"*/ className="text-secondary font-bold tracking-wide text-xl">Pricing</h2>
            <h1 /* data-aos="fade-up" data-aos-duration="6000"*/ className="text-4xl tracking-tight font-bold text-center">विभिन्न मेंटरशिप कार्यक्रमों के मूल्य</h1>
            <p /* data-aos="fade-up" data-aos-duration="6000"*/ className="font-light uppercase tracking-wide text-center">MentorsGyan brings you tailored mentorship plans</p>

            {/* Mentorship pricing cards */}
            {mentorshipData.length !== 0 && <MentorshipSM MentorshipPrograms={mentorshipData}/>}
        </div>
    )
}
