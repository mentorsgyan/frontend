import React, { useState } from "react";
import { MdGroups , MdSchool} from "react-icons/md";
import { ImBooks } from "react-icons/im";
import { BsListCheck } from "react-icons/bs";

const ServiceOffered = [
    {
        title: "मेंटरशिप",
        description: "हमारा CGPSC मार्गदर्शन कार्यक्रम विशेषज्ञ परामर्श, चयनित अध्ययन सामग्री, समय सारिणी, प्रभावी रणनीतियाँ, मूल्यांकन और समर्थन प्रदान करता है ताकि उम्मीदवार उत्कृष्टता प्राप्त कर सकें।",
        redirection: "#mentorship",
        icon: <MdGroups className="text-5xl"/>
    },
    {
        title: "मॉक टेस्ट",
        description: "हमारी CGPSC मॉक टेस्ट सीरीज प्रतिदिन 5 वर्णनात्मक प्रश्न और 20 वस्तुनिष्ठ प्रश्न प्रदान करती है, जिससे आपकी तैयारी को सशक्त बनाया जा सके और सफलता की संभावनाएं बढ़ सकें।",
        redirection: "#test-series",
        icon: <BsListCheck className="text-5xl" />
    },
    {
        title: "ऑनलाइन क्लास",
        description: "CGPSC की ऑनलाइन कक्षाएं \"Mentors Gyan\" द्वारा पेश की जाती हैं, जो व्यक्तिगत मार्गदर्शन और विशेषज्ञ सलाह के साथ तैयारी को संपूर्ण बनाती हैं।",
        redirection: "#mentorship",
        icon: <MdSchool className="text-5xl"/>
    },
    {
        title: "वेबिनार्स",
        description: "CGPSC टॉपर्स के साथ वेबिनार्स में चर्चा से मार्गदर्शन प्राप्त होता है, जो तैयारी को बेहतर बनाने और सफलता हासिल करने के लिए महत्वपूर्ण सुझाव और रणनीतियाँ प्रदान करती है।",
        redirection: "#mentorship",
        icon: <MdGroups className="text-5xl"/>
    },
    {
        title: "ई-लाइब्रेरी",
        description: "हमारी CGPSC अभ्यर्थियों की ई-लाइब्रेरी में प्रश्नपत्र, टॉपर्स की कॉपियां, आर्थिक सर्वेक्षण, सरकारी पत्रिकाएं, प्रशासनिक प्रतिवेदन, सामयिकी, और समाचार पत्र की कतरनें शामिल हैं।",
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
        <div id="services" className="flex flex-col justify-center items-center md-900:pb-20  section font-mukta dark:bg-gray-800 dark:text-gray-200">
            <h1 className="text-3xl font-bold tracking-tight text-center pt-10 dark:text-secondary" >MentorsGyan के साथ अपना भविष्य सवारें!</h1>
            <p className="my-10 md-900:text-center md-900:mx-40 px-5 text-justify leading-10 text-xl tracking-wider">हमारा मुख्य मूल्य है CGPSC परीक्षा की अनूठी चुनौतियों के लिए सटीक और प्रभावी मार्गदर्शन प्रदान करना। हमें विश्वास है कि सही दिशा में चलकर हर Aspirant अपनी क्षमता को पहचान सकता है।</p>
            <div className="px-5 pt-20 pb-10 md-900:flex w-screen justify-center">                
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
        <div className="flex items-center flex-col w-full md-900:hover:-translate-y-20 transition-transform duration-700"
            onMouseEnter={() => setDetailsVisibility(true)}
            onMouseLeave={() => setDetailsVisibility(false)}
            role = "button"
        >
            <img 
                src="https://www-media.discoveryeducation.com/wp-content/uploads/2024/03/de-science-hp-blob.svg" 
                alt="" 
                className={`text-center absolute ${detailsVisibility ? 'md-900:w-[200px] md-900:translate-y-16' : ''} w-[75px] transition-transform duration-300 dark:invert dark:saturate-50`}
                />
            <div className="relative flex flex-col gap-4 items-center justify-center">
                {Data.icon}
                {/* title */}
                <h2 className="text-2xl font-bold text-center">{Data.title}</h2>
            </div>
            <div className={`absolute ${detailsVisibility ? "translate-y-24 hidden md-900:block pt-4" : "hidden"}`}>
                <p className={`transition-opacity duration-500 text-center`}>
                    {detailsVisibility && Data.description}
                </p>
                {/* Read more */}
                <a href={Data.redirection} 
                className={`p-4 text-secondary underline font-bold `}>
                    अधिक जानें
                </a>
            </div>
            <a href={Data.redirection}
            className={`p-4 text-secondary underline font-bold md-900:hidden`}>
                अधिक जानें
            </a>           
        </div>
    )
}

export default Offerings;