import React, { useState } from "react";
import {CheckCircleIcon} from '@heroicons/react/24/outline';
import axios from "axios";
import { BACKEND_API } from "../../utility/Constants";

const MentorshipSqueeze = () => {

    return (
        <div className="bg-gray-800  text-white">
            {/* Heading */}
            <h1 className="text-7.5xl tracking-tighter text-center font-semibold align-middle italic">क्या है <strong className="text-secondary text-8xl">&nbsp;रहस्य&nbsp;</strong> CGPSC &nbsp;परीक्षा <strong className="text-secondary text-8xl">&nbsp;पास&nbsp;</strong> करने का <strong  className="text-secondary font-semibold text-8xl">?</strong></h1>

            <SqueezeInfo />
            {/* Contact gaining section */}
            <ContactSection />
            <div className="py-2"/>
        </div>
    )
}

const SqueezeInfo = () => {

    const courseFeature= ["XYZ feature 1", "XYZ Feature 2", "XYZ Feature 3"];

    return (
        <div className="container rounded-3xl border-secondary border-2 p-5 ">
            <h2 className="text-5xl font-semibold text-center">इन <strong className="text-secondary">तीन</strong> बातों का रखे <strong className="text-secondary">खास</strong> ध्यान<strong className="text-secondary text-5xl font-normal">&nbsp;!</strong></h2>
            <div className="flex md:flex-row flex-col items-center justify-center my-10">
                {/* Text section */}
                <div className="w-full container p-4">
                    {/* Small dialogue */}
                    <p className="text-xl font-light text-justify">
                        अक्सर अँधेरे में रह कर विद्यार्थी मेहनत अवश्य करते हैं, पर अपनी कीमत समय गलत जगह पर लगा कर अपना मनोबल खोने लगते हैं। ये बताई गई बातों का खास ध्यान रख कर इस बार का एग्जाम दीजिए, सफलता अपने आप आयेगी -
                    </p>
                    <ul>
                        {
                            courseFeature.map((feature, idx) => (
                                <li key={idx} className="flex gap-2 py-1">
                                    <CheckCircleIcon className="h-6" />
                                    <p>{feature}</p>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                {/* Visuals section */}
                <div className="w-full">
                    <img src="https://static01.nyt.com/images/2022/07/08/multimedia/08rory-ronaldo2/08rory-ronaldo2-mediumSquareAt3X.jpg" alt="" className="rounded-full w-96"/>
                </div>
            </div>
        </div>
    )
}

const ContactSection = () => {
    
    const [name, setName] = useState("");

    const [phoneNumber, setPhoneNumber] = useState("");

    async function handleSubmit (e) {
        e.preventDefault();
        // submit phone number handling
        // const dataSaveResponse = await axios.post(BACKEND_API + "/user-contact", {name: name, phoneNumber: phoneNumber});
        // alert(dataSaveResponse.data);
        alert("boom")
    }

    return (
        <div className="container my-5 p-5 border-2 border-secondary rounded-2xl">
            <form onSubmit={handleSubmit}>
                <div className="flex md:flex-row flex-col items-center justify-evenly">
                    <h2 className="text-center text-3xl font-bold tracking-tight">Aur jaan ne ke liye apna number daale</h2>
                        <div className="flex gap-4 items-end">
                            <div className="flex flex-col gap-5">
                                <input 
                                id="userName" 
                                name="userName" 
                                value={name} 
                                required 
                                type="text" 
                                className="bg-transparent rounded-xl" 
                                title="कृपया नाम दर्ज करें" 
                                placeholder="Enter name" 
                                onChange={(e) => setName(e.target.value)}  />
                                <input required
                                id="phnumber"
                                
                                name="phnumber"
                                type="text" 
                                value={phoneNumber}
                                className="bg-transparent rounded-xl" 
                                placeholder="फ़ोन नंबर दर्ज करें" onChange={(e) => setPhoneNumber(e.target.value)} maxLength="10"
                                pattern="\d{10}"
                                title="कृपया एक वैध 10-अंकीय फ़ोन नंबर दर्ज करें"/>
                            </div>
                        </div>
                        < button type="submit" className="bg-secondary font-bold p-2 rounded-xl h-10" >Submit</button>
                </div>
            </form>
            <p className="mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique ullam ea eveniet eligendi omnis deleniti recusandae reiciendis tempore fuga, mollitia eos voluptatem laboriosam modi asperiores illo reprehenderit ipsa odit aliquid!</p>
        </div>
    )
}

export default MentorshipSqueeze;