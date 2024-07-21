import React from "react";
import Slider from "react-slick";
import { SLIDER_SETTINGS } from "../../utility/Constants";
import Siddharth from "../../assets/officers/siddharth.png"
import Pritesh from "../../assets/officers/pritesh.png"
import Garima from "../../assets/officers/garima.png"
import Umesh from "../../assets/officers/umesh.png"
import { PersonReview } from "../Testimonials/Testimonials";

/*
IPS Umesh Gupta - Effective UPSC preparation requires personalized guidance from experienced mentors, focusing on what to study and what to avoid. Tailored strategies, rather than blindly following others, help students leverage their strengths and manage time efficiently.
DSP Siddharth Singh Chauhan - Emphasize that every student's path to success is unique and should be tailored to their comfort and strengths. Validation from peers and experts builds confidence, ensuring they stay committed to their chosen strategy.
DC Pritesh Singh Chauhan- Mentors play a crucial role in UPSC preparation by correcting mistakes, guiding topic understanding, and improving answers. Their feedback and tailored guidance significantly enhance exam performance.
Mobile se click kr k bhej n
@Ashish Futtan Bhaiyya
NT Garima Tiwari - A mentor offers essential guidance and clarity, aiding in informed decision-making. Observing successful individuals and aligning their strategies with your own style enhances your ability to navigate challenges effectively.
*/

const OfficerInfos = [
    {
        reviewerName: "Umesh Gupta",
        reviewerPosition: 'IPS',
        quotes: 'Effective UPSC preparation requires personalized guidance from experienced mentors, focusing on what to study and what to avoid. Tailored strategies, rather than blindly following others, help students leverage their strengths and manage time efficiently.',
        image: Umesh
    },
    {
        reviewerName: "Siddharth Singh Chauhan",
        reviewerPosition: 'DSP',
        quotes: "Emphasize that every student's path to success is unique and should be tailored to their comfort and strengths. Validation from peers and experts builds confidence, ensuring they stay committed to their chosen strategy.",
        image: Siddharth
    },
    {
        reviewerName: "Pritesh Singh Chauhan",
        reviewerPosition: "DC",
        quotes: "Mentors play a crucial role in UPSC preparation by correcting mistakes, guiding topic understanding, and improving answers. Their feedback and tailored guidance significantly enhance exam performance.",
        image: Pritesh
    },
    {
        reviewerName: "Garima Tiwari",
        reviewerPosition: "Naib Tehsildar",
        quotes: "A mentor offers essential guidance and clarity, aiding in informed decision-making. Observing successful individuals and aligning their strategies with your own style enhances your ability to navigate challenges effectively.",
        image: Garima
    }
]


const Officers = () => {
    return (
        <div className="container">
            {/* <OfficersCard info={OfficerInfos[0]}/> */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                {
                    OfficerInfos.map((info, idx) => (
                        <OfficersCard key={idx}  review={info} />
                    ))
                }
            </div>
        </div>
    )
}

const OfficersCard = ({review}) => {
    return (
        <div className="flex flex-col sm:flex-row items-center shadow-2xl shadow-secondary/20 rounded-3xl p-4">
            {/* Image */}
            <img src={review.image} alt="" className="p-2 rounded-full w-[220px]" />
            {/* Quotation */}
            <div className="flex flex-col gap-8 px-5">
                <blockquote className="text-justify">
                    {review.quotes}
                </blockquote>
                <hr />
                {/* Name */}
                <h2 className="text-xl italic text-right">~ {review.reviewerName}, <b>{review.reviewerPosition}</b></h2>
            </div>
        </div>
    )
}

export default Officers;