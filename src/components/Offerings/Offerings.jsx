import React, { useState } from "react";
import { MdGroups , MdSchool} from "react-icons/md";
import { ImBooks } from "react-icons/im";
import { BsListCheck } from "react-icons/bs";

const ServiceOffered = [
    {
        title: "मेंटरशिप",
        description: "हमारा CGPSC मार्गदर्शन कार्यक्रम विशेषज्ञ परामर्श, चुने हुए अध्ययन सामग्री, व्यक्तिगत समय सारिणी, प्रभावी तैयारी रणनीतियाँ, नियमित मूल्यांकन और निरंतर समर्थन प्रदान करता है ताकि उम्मीदवार अपनी परीक्षा में उत्कृष्टता प्राप्त कर सकें।",
        redirection: "#mentorship",
        icon: <MdGroups className="text-5xl"/>
    },
    {
        title: "Daily Test Series",
        description: "हमारी CGPSC मॉक टेस्ट सीरीज प्रतिदिन 5 वर्णनात्मक प्रश्न और 20 वस्तुनिष्ठ प्रश्न प्रदान करती है, जिससे आपकी तैयारी को सशक्त बनाया जा सके और सफलता की संभावनाएं बढ़ सकें।",
        redirection: "#test-series",
        icon: <BsListCheck className="text-5xl" />
    },
    {
        title: "CGPSC Classes",
        description: "CGPSC की ऑनलाइन कक्षाएं \"Mentors Gyan\" द्वारा पेश की जाती हैं, जो व्यक्तिगत मार्गदर्शन और विशेषज्ञ सलाह के साथ तैयारी को संपूर्ण बनाती हैं।",
        redirection: "#mentorship",
        icon: <MdSchool className="text-5xl"/>
    },
    {
        title: "Discussions",
        description: "CGPSC टॉपर्स के साथ वेबिनार्स में चर्चा से मार्गदर्शन प्राप्त होता है, जो तैयारी को बेहतर बनाने और सफलता हासिल करने के लिए महत्वपूर्ण सुझाव और रणनीतियाँ प्रदान करती है।",
        redirection: "#mentorship",
        icon: <MdGroups className="text-5xl"/>
    },
    {
        title: "E-Library",
        description: "हमारी CGPSC अभ्यर्थियों के लिए ई-लाइब्रेरी में पिछले वर्षों के प्रश्नपत्र, टॉपर्स की मुख्य परीक्षा की कॉपियां, आर्थिक सर्वेक्षण, सरकारी पत्रिकाएं, प्रशासनिक प्रतिवेदन, सामयिकी, और समाचार पत्र की कतरनें शामिल हैं।",
        redirection: "#e-library",
        icon: <ImBooks className="text-5xl"/>
    }
]

/**
 * This component renders the offereings provided by Mentorsgyan
 * @author Mayank Shukla
 * @returns 
 */
const Offerings = () => {
    
    return (
        <div id="services" className="flex flex-col justify-center items-center md:mb-20  section">
            <h1 className="text-3xl font-bold tracking-tight text-center pt-10" >MentorsGyan के साथ अपना भविष्य सवारें!</h1>
            <p className="my-10 md:text-center md:mx-40 px-5 text-justify leading-10 text-xl tracking-wider">हमारा मुख्य मूल्य है CGPSC परीक्षा की अनूठी चुनौतियों के लिए सटीक और प्रभावी मार्गदर्शन प्रदान करना। हमें विश्वास है कि सही दिशा में चलकर हर Aspirant अपनी क्षमता को पहचान सकता है।</p>
            <div className="px-20 pt-20 pb-5 md:flex w-screen justify-center">                
                {/* Services Cards */}
                {
                    ServiceOffered.map((service, idx) => (
                        <ServiceCards key={idx} Data={service}/>
                    ))
                }
            </div>
        </div>
    )
}

const ServiceCards = ({Data}) => {
    const [detailsVisibility, setDetailsVisibility] = useState(false);
    return (
        <div className="flex items-center flex-col md:w-[230px] hover:-translate-y-20 transition-transform duration-700 p-4"
            onMouseEnter={() => setDetailsVisibility(true)}
            onMouseLeave={() => setDetailsVisibility(false)}
            role = "button"
        >
            <img 
                src="https://www-media.discoveryeducation.com/wp-content/uploads/2024/03/de-science-hp-blob.svg" 
                alt="" 
                className={`text-center absolute -z-10 ${detailsVisibility ? 'w-[200px] translate-y-16' : 'w-[75px]'} transition-transform duration-300`}
                />
            <div className="relative flex flex-col gap-4 items-center justify-center">
                {Data.icon}
                {/* title */}
                <h2 className="text-2xl font-bold">{Data.title}</h2>
            </div>
            <div className={`absolute ${detailsVisibility ? "translate-y-24 block pt-4" : "hidden"}`}>
                <p className={`transition-opacity duration-500`}>
                    {detailsVisibility && Data.description}
                </p>
                {/* Read more */}
                <a href={Data.redirection} 
                className={`p-4 text-secondary underline font-bold `}>
                    Learn more
                </a>
            </div>
            <a href={Data.redirection}
            className={`p-4 text-secondary underline font-bold md:hidden`}>
                Learn more
            </a>           
        </div>
    )
}

export default Offerings;