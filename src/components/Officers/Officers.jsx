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
        quotes: 'प्रभावी यूपीएससी तैयारी के लिए अनुभवी सलाहकारों से व्यक्तिगत मार्गदर्शन की आवश्यकता होती है, जिसमें इस बात पर ध्यान केंद्रित किया जाता है कि क्या अध्ययन करना है और क्या नहीं। आँख मूंदकर दूसरों का अनुसरण करने के बजाय, अनुकूलित रणनीतियाँ छात्रों को अपनी शक्तियों का लाभ उठाने और कुशलतापूर्वक समय का प्रबंधन करने में मदद करती हैं।',
        image: Umesh
    },
    {
        reviewerName: "Siddharth Singh Chauhan",
        reviewerPosition: 'DSP',
        quotes: 'इस बात पर जोर दें कि प्रत्येक छात्र की सफलता का मार्ग अद्वितीय है और उसे उनके आराम और ताकत के अनुरूप बनाया जाना चाहिए। साथियों और विशेषज्ञों से मान्यता आत्मविश्वास पैदा करती है, जिससे यह सुनिश्चित होता है कि वे अपनी चुनी हुई रणनीति के प्रति प्रतिबद्ध रहें।',
        image: Siddharth
    },
    {
        reviewerName: "Pritesh Singh Chauhan",
        reviewerPosition: "DC",
        quotes: 'यूपीएससी की तैयारी में गलतियाँ सुधारने, विषय की समझ का मार्गदर्शन करने और उत्तरों को बेहतर बनाने में सलाहकार महत्वपूर्ण भूमिका निभाते हैं। उनकी प्रतिक्रिया और अनुरूप मार्गदर्शन परीक्षा प्रदर्शन को महत्वपूर्ण रूप से बढ़ाते हैं।',
        image: Pritesh
    },
    {
        reviewerName: "Garima Tiwari",
        reviewerPosition: "SASO",
        quotes: "एक सलाहकार आवश्यक मार्गदर्शन और स्पष्टता प्रदान करता है, जिससे सूचित निर्णय लेने में सहायता मिलती है। सफल व्यक्तियों का अवलोकन करना और उनकी रणनीतियों को अपनी शैली के साथ जोड़ना चुनौतियों से प्रभावी ढंग से निपटने की आपकी क्षमता को बढ़ाता है।",
        image: Garima
    }
]


const Officers = () => {
    return (
        <div className="container">
            {/* <OfficersCard info={OfficerInfos[0]}/> */}
            <div className="grid grid-cols-1 md-1024:grid-cols-2 gap-4 mt-4">
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