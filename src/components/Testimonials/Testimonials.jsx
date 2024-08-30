import React from "react";
import Person1 from "../../assets/testimonial/tripty.png"
import Person2 from "../../assets/testimonial/titiksha.png"
import Person3 from "../../assets/testimonial/diksha.png"
import Person4 from "../../assets/testimonial/sanjay.png"
import { LuQuote } from "react-icons/lu";
import Slider from "react-slick";
import { SLIDER_SETTINGS } from "../../utility/Constants";

/**
 * This component renders the testimonials of the users
 * @returns 
 * @author Mayank Shukla
 */

const PersonData = [
    {
        id: 1,
        title: "Humbled and Grateful.",
        reviewerName: "Tripty Singh",
        reviewerPosition: "Aspirant",
        image: Person1,
        quotes: "मेरा अनुभव Mentor Gyan के साथ बहुत अच्छा रहा। विशेषकर मिहिर सर के निर्देशन में मुझे सही मार्गदर्शन, योग्यता और समय के अनुसार उपयुक्त टाइम टेबल मिला, जिससे मैं अपने लक्ष्य के करीब पहुंची। मिहिर सर की सलाह पढ़ाई और कार्य क्षेत्र दोनों में उपयोगी रही। आशा है, सही मार्गदर्शन से मैं अपने लक्ष्य तक अवश्य पहुंचूंगी।"
    },
    {
        id: 2,
        title: "11Humbled and Grateful.",
        reviewerName: "Titiksha Shukla",
        reviewerPosition: "Aspirant",
        image: Person2,
        quotes: "Dear Mentor Gyan Team, thank you for your invaluable guidance during my civil service preparation. Your clarity, strategic advice, encouragement, and resources have been instrumental in my progress. Your patience and support have significantly boosted my confidence."
    },
    {
        id: 4,
        title: "22Humbled and Grateful.",
        reviewerName: "Sanjay Choudhary",
        reviewerPosition: "Aspirant",
        image: Person4,
        quotes: "After getting a job through campus placement, I contacted Ashish Futan sir for CGPSC preparation advice. He guided me on study materials, important topics, and the best coaching test series. This mentorship program is excellent, and I highly recommend it to all aspirants. Thank you, Mentor Gyan and Ashish sir."
    },
    {
        id: 3,
        title: "22Humbled and Grateful.",
        reviewerName: "Diksha Upadhyay",
        reviewerPosition: "Aspirant",
        image: Person3,
        quotes: "When I joined Mentor Gyan, I was lost in my preparation. Mihir sir guided me from the start, improving my thought process and teaching essential answer writing techniques. He emphasized the importance of early mains exam preparation, helping me understand and improve my approach."
    }
]

/**
 * This Section will return the testimonials
 * of the mentees and officials.
 * @author Mayank Shukla
 */
const Testimonials = () => {
    const sliderSettings = {...SLIDER_SETTINGS};
    sliderSettings.pauseOnHover = false;
    sliderSettings.dots = true;
    return (
        <div className="dark:bg-gray-800 dark:text-white">
            <div className="relative pt-1 pb-5 container rounded-3xl shadow-2xl overflow-hidden font-mukta">
                <div
                    className="absolute inset-x-0 -top-30 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-48"
                    aria-hidden="true"
                    >
                        <div
                            className="relative left-[calc(50%-11rem)] aspect-[900/678] w-[26.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-secondary to-primary opacity-10 sm:left-[calc(50%-20rem)] sm:w-[52.1875rem]"
                            style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                            }}
                        />
                    </div>
                <h1 className="text-3xl font-bold tracking-tight text-center py-5">जानिये हमारे विद्यार्थीयो की राय</h1>
                <Slider {...sliderSettings}>
                    {
                        PersonData.map((person, idx) => (
                            <PersonReview key={idx} review={person}/>
                        ))
                    }
                </Slider>
                <div
                    className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                    aria-hidden="true"
                    >
                        <div
                            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-primary to-secondary opacity-10 sm:left-[calc(50%+20rem)] sm:w-[52.1875rem]"
                            style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                            }}
                        />
                    </div>
            </div>
        </div>
    )
}

export const PersonReview = ({review}) => {
    return (
        <div>                
            <div className="flex md-900:flex-row flex-col justify-center items-center py-5 font-kalam">
                {/* <LuQuote className="absolute text-8xl text-primary opacity-60 w-full rotate-180 -translate-y-20 -z-10 -translate-x-48"/> */}
                {/* Image */}
                <div className="flex justify-center overflow-hidden -z-50">
                    <img src={review.image}
                        className="w-1/2 rounded-full shadow-xl"
                    alt="" />
                </div>
                {/* text */}
                <div className="text-center flex flex-col items-center md-900:text-left w-full">
                    
                    {/* One liner */}
                    {/* <h2 className="text-3xl font-bold tracking-wide">{review.title}</h2> */}
                    {/* Quotations */}
                    
                    <blockquote className="w-4/5 text-center mt-5 leading-8 text-gray-900 dark:text-gray-300 sm:text-2xl sm:leading-9">
                        <p className="text-justify text-lg">
                        “{review.quotes}”
                        </p>
                    </blockquote>
                    <div className="text-right py-5 w-4/5">
                    <   p className="italic">~ {review.reviewerName}</p>
                        <p className="font-bold"> {review.reviewerPosition}</p>
                    </div>
                </div>
                {/* <LuQuote className="absolute text-8xl text-primary opacity-60 w-full -translate-x-64 sm:translate-x-64 md-900:translate-x-96 -z-10"/> */}
            </div>
        </div>
    )
}

const CirclesBG = () => {
    return(
        <div className="flex absolute w-full justify-center">
            <div
                className="aspect-[109/84] w-[28.5625rem] bg-gradient-to-tr -z-10 from-primary to-secondary opacity-50"
                style={{
                    clipPath:
                        'circle(6.3% at 50% 50%)',
                }}
            />
            <div
                className="aspect-[109/84] w-[28.5625rem] bg-gradient-to-tr -z-10 from-primary to-secondary opacity-50"
                style={{
                    clipPath:
                        'circle(16.3% at 50% 50%)',
                }}
            />
            <div
                className="aspect-[109/84] w-[28.5625rem] bg-gradient-to-tr -z-10 from-primary to-secondary opacity-50"
                style={{
                    clipPath:
                        'circle(26.3% at 50% 50%)',
                }}
            />
            <div
                className="aspect-[109/84] w-[28.5625rem] bg-gradient-to-tr -z-10 from-primary to-secondary opacity-50"
                style={{
                    clipPath:
                        'circle(16.3% at 50% 50%)',
                }}
            />
            <div
                className="aspect-[109/84] w-[28.5625rem] bg-gradient-to-tr -z-10 from-primary to-secondary opacity-50"
                style={{
                    clipPath:
                        'circle(6.3% at 50% 50%)',
                }}
            />
        </div>
    )
}

export default Testimonials;