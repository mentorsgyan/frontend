import React from "react";
import Pyq from "../../assets/elibrary/pyq.png";
import Logo from "../../assets/logo/white_bg.jpg"
import Paper from "../../assets/elibrary/paper.png";
import Govt from "../../assets/elibrary/govtmags.png";
import EconomcSurvey from "../../assets/elibrary/economicsurvey.png";
import AdminReports from "../../assets/elibrary/adminreports.png";
import { FaArrowRight, FaCheck } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const sectionDetails = {
    title: "ई-लाइब्रेरी Premium",
    description: "Hum le kar aaye hai, premium e-books",
    features: ["पिछले वर्षों के प्रश्नपत्र", "टॉपर्स की मुख्य परीक्षा की कॉपियां", "आर्थिक सर्वेक्षण", "सरकारी पत्रिकाएं", "प्रशासनिक प्रतिवेदन", "सामयिकी", "समाचार पत्र की कतरनें"]
}

/**
 * E library section of the website
 */
const PremiumELibrary = () => {
    const navigate = useNavigate();
    return (
        <div id="e-library" className="section">
            
            <div className="container  isolate  border rounded-3xl shadow-2xl py-4">
                {/* Section description */}
                <div className="flex sm:flex-row flex-col items-center justify-center">
                    {/* text section */}
                    <div className="flex flex-col gap-4">
                        {/* Section heading */}
                        <h1 className="text-center md-900:text-left text-secondary font-bold tracking-tight text-3xl">{sectionDetails.title}</h1>
                        <div className="flex md-900:flex-row flex-col items-center gap-4">
                            <div className="flex md-900:order-1 order-2 flex-col p-3 gap-3 w-full">
                                <p className="text-2xl tracking-wide text-secondary font-bold">{sectionDetails.description}</p>
                                <hr />
                                {
                                    sectionDetails.features.map((feature, idx) => (
                                        <div key={idx} className="flex gap-3 items-center">
                                            <FaCheck className="text-xl text-secondary"/>
                                            <p className="text-xl">{feature}</p>
                                        </div>
                                    ))
                                }
                                <button className="bg-secondary p-2 hover:bg-secondary/70 font-semibold text-white rounded-md w-fit flex items-center gap-4"
                                    onClick={() => navigate("/e-library")}
                                    >
                                    <p className="text-xl">और अधिक जानें</p>
                                    <FaArrowRight/>
                                </button>
                            </div>
                            <div className="md-900:order-2 order-1">
                                <Grid />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const Grid = () => {
    return (
        <div className="relative border-l-2 shadow-2xl border-secondary/50 p-5 m-2 rounded-2xl scale-75 md-900:scale-90">
            <img src={Logo} alt="" className="blur-lg absolute -z-20" />
            <div className="grid grid-flow-col grid-rows-2 grid-cols-3 gap-8 -z-10 w-full">
                <div className="w-1/3 scale-110">
                    <img src={Pyq} alt="" loading="lazy" />
                </div>
                <div className="col-start-3 ">
                    <img src={AdminReports} alt="" loading="lazy" />
                </div>
                <div className="">
                    <img src={Paper} alt="" loading="lazy" />
                </div>
                <div className="w-1/3 ">
                    <img src={Govt} alt="" loading="lazy" />
                </div>
                <div className="w-1/3 row-start-1 col-start-2 col-span-2">
                    <img src={EconomcSurvey} alt="" loading="lazy" />
                </div>
            </div>
        </div>
    )
}

export default PremiumELibrary;