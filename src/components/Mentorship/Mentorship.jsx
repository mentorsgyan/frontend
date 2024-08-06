import React from "react";
import MentorshipSM from "./MentorshipSM";

const MentorshipPrograms = [
    {
        id: 1123,
        mostPopular: false,
        renewalDuration: "अर्धवार्षिक",
        programDescription: "अल्ट्रा",
        price: 15999,
        offerPrice: 5999,
        features: [1, 1, 1, 1,"दैनिक", "दैनिक"]
    },
    {
        id: 1234,
        mostPopular: true,
        renewalDuration: "अर्धवार्षिक",
        programDescription: "प्लस",
        price: 13999,
        offerPrice: 3999,
        features: [1, 1, 1, 1, "साप्ताहिक", "सप्ताह में एक बार"]
    },
    {
        id: 1344,
        mostPopular: false,
        renewalDuration: "एक बार",
        programDescription: "सार",
        offerPrice: 99,
        features: [1, 'X', 1, 1, "एक बार", "एक बार"]
    }
]

/**
 * This page renders the mentorship pricing component
 * It will render cards.
 * @returns 
 */
export default function () {
    return (
        <div id="mentorship" className="section py-5 mx-5 flex flex-col items-center gap-6">
            {/* Section heading area */}
            <h2 /* data-aos="fade-up" data-aos-duration="6000"*/ className="text-secondary font-bold tracking-wide text-xl">Pricing</h2>
            <h1 /* data-aos="fade-up" data-aos-duration="6000"*/ className="text-4xl tracking-tight font-bold text-center">विभिन्न मेंटरशिप कार्यक्रमों के मूल्य</h1>
            <p /* data-aos="fade-up" data-aos-duration="6000"*/ className="font-light uppercase tracking-wide text-center">MentorsGyan brings you tailored mentorship plans</p>

            {/* Mentorship pricing cards */}
            <MentorshipSM MentorshipPrograms={MentorshipPrograms}/>
        </div>
    )
}
