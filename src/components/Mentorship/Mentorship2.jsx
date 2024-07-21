import React from "react";
import {CheckIcon} from '@heroicons/react/20/solid';
import { useNavigate } from 'react-router-dom';

const Mentorship2 = () => {

    const pageTitle = "Pricing plans for different mentorship programs"

    const mentorships = {
        keys: ["Overall Strategy", "Motivation", "Preparation Analysis", "Master Plan", "Books Information", "Calls"],
        saar: [1, "one-time", 'X', 1, 1, "one-time"],
        plus: [1, "weekly", 1, 1, 1, "in 7 days"],
        ultra: [1, "Daily", 1, 1, 1, "Daily"]
    }

    return(
        <div className="md:py-16 mx-10 text-center">
            {/* Page headers */}
            <div className="my-5 grid grid-cols-4 gap-y-4 items-center">
                <PlansColumn features = {true} heading={""} values={mentorships.keys}/>
                <PlansColumn price={99} renewalDuration={'Daily'} heading={"Saar"} values={mentorships.saar} />
                <PlansColumn price={3999} renewalDuration={'Half-yearly'} highlighted = {true} heading={"Plus"} values={mentorships.plus} />
                <PlansColumn price={5999} renewalDuration={'Half-yearly'} heading={"Ultra"} values={mentorships.ultra} />
            </div>
            <hr />
        </div>
    )
}

const PlansColumn = ({features ,highlighted, heading, values, price, renewalDuration}) => {
    const navigate = useNavigate();
    const data = {
        price: price
    }
    return (
        <div className={`${highlighted ? 'bg-gray-100 rounded-3xl p-4 shadow-md bg-opacity-50' : ''}`}>
            <div className="">
                {/* Heading */}
                <h1 className={`text-xl font-bold tracking-wide ${features ? '' : ''}`}>{heading}</h1>
                {/* Price */}
                <div className={`py-8 flex items-baseline gap-1 justify-center ${features ? 'hidden' : ''}`}>
                    <p className="text-3xl font-bold">₹{price}</p>
                    <p className="font-light lowercase">/ {renewalDuration}</p>
                </div>
                {/* Buy buttom */}
                <button className=
                {`p-2 text-secondary bg-white border border-secondary hover:text-white w-1/2 rounded-md hover:bg-secondary/75  duration-150 ${features ? 'hidden mt-5' : ''}`}
                    onClick={() => {
                        navigate("/checkout", {state: {data: data}});
                    }}
                >Buy Now</button>
            </div>
            <ul role="list" className={`divide-y divide-gray-100 w-max-[300px] ${features ? 'font-light mt-44' : 'mt-2'}`}>
                {
                    values.map((value, idx) => (
                        <li key={idx} className="py-4 flex justify-center">
                            {
                                value === 1 ? (<CheckIcon className="w-5 text-secondary"/>) : (<p>{value}</p>)
                            }
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Mentorship2;