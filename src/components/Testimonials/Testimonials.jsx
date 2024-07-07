import React from "react";
import Person1 from "../../assets/testimonial1.png"
import Person2 from "../../assets/testimonial2.png"
import Person3 from "../../assets/testimonial3.png"
import Person4 from "../../assets/testimonial4.png"
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
        reviewerName: "Mayank Shukla",
        reviewerPosition: "Aspirant",
        image: Person1,
        quotes: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat natus optio, laboriosam aliquid, amet facere distinctio corporis repudiandae, officia exercitationem veniam voluptatem? Accusantium id dolorem in? Magni aspernatur consequuntur sapiente."
    },
    {
        id: 2,
        title: "11Humbled and Grateful.",
        reviewerName: "Mayank Shukla",
        reviewerPosition: "Aspirant",
        image: Person2,
        quotes: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat natus optio, laboriosam aliquid, amet facere distinctio corporis repudiandae, officia exercitationem veniam voluptatem? Accusantium id dolorem in? Magni aspernatur consequuntur sapiente."
    },
    {
        id: 3,
        title: "22Humbled and Grateful.",
        reviewerName: "Mayank Shukla",
        reviewerPosition: "Aspirant",
        image: Person3,
        quotes: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat natus optio, laboriosam aliquid, amet facere distinctio corporis repudiandae, officia exercitationem veniam voluptatem? Accusantium id dolorem in? Magni aspernatur consequuntur sapiente."
    },
    {
        id: 4,
        title: "22Humbled and Grateful.",
        reviewerName: "Mayank Shukla",
        reviewerPosition: "Aspirant",
        image: Person4,
        quotes: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat natus optio, laboriosam aliquid, amet facere distinctio corporis repudiandae, officia exercitationem veniam voluptatem? Accusantium id dolorem in? Magni aspernatur consequuntur sapiente."
    }
]

const Testimonials = () => {
    return (
        <div className="my-8 shadow-lg container rounded-3xl bg-gradient-to-t from-secondary/10 to-secondary/25">
            <h1 className="text-4xl font-bold tracking-tight text-center pt-10">Here it from our Mentees</h1>
            <Slider {...SLIDER_SETTINGS}>
                {/* Person cards */}
                {
                    PersonData.map((person, idx) => (
                        <PersonReview review={person}/>
                    ))
                }
            </Slider>
        </div>
    )
}

const PersonReview = ({review}) => {
    return (
        <div>
            {/* Background */}
            <div className="absolute w-full">
                <LuQuote className="text-8xl text-primary opacity-60 w-full rotate-180 translate-y-10 -z-10 -translate-x-40"/>
                {/* < CirclesBG />  */}
            </div>
                
            <div className="flex justify-center items-center">
                {/* Image */}
                <div className="w-full flex justify-center ">
                    <img src={review.image}
                        className="w-[320px]  p-10"
                    alt="" />
                   
                </div>
                {/* text */}
                <div className=" text-left">
                    
                    {/* One liner */}
                    <h2 className="text-3xl font-bold tracking-wide">{review.title}</h2>
                    {/* Quotations */}
                    <blockquote className="w-4/5 text-center mt-5 leading-8 text-gray-900 sm:text-2xl sm:leading-9">
                        <p className="text-justify text-lg">
                        “{review.quotes}”
                        </p>
                    </blockquote>
                    <div className="text-right py-5 w-4/5">
                    <   p className="italic">~ {review.reviewerName}</p>
                        <p className="font-bold"> {review.reviewerPosition}</p>
                    </div>
                </div>
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