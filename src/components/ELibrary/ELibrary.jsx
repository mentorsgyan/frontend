import React from "react";
import SectionImage from "../../assets/ronaldo.png"
import { FaArrowRight, FaRightLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const sectionDetails = {
    title: "E-Library",
    description: "हमारी CGPSC अभ्यर्थियों के लिए ई-लाइब्रेरी में पिछले वर्षों के प्रश्नपत्र, टॉपर्स की मुख्य परीक्षा की कॉपियां, आर्थिक सर्वेक्षण, सरकारी पत्रिकाएं, प्रशासनिक प्रतिवेदन, सामयिकी, और समाचार पत्र की कतरनें शामिल हैं।"
}

/**
 * E library section of the website
 */
const ELibrary = () => {
    const navigate = useNavigate();
    return (
        <div id="e-library" className="section">
            
            <div className="container relative overflow-hidden isolate  border rounded-3xl shadow-2xl">
                {/* <div
                className="absolute inset-x-0 -top-30 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-48"
                aria-hidden="true"
                >
                    <div
                        className="relative left-[calc(50%-11rem)] aspect-[900/678] w-[26.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-secondary to-primary opacity-30 sm:left-[calc(50%-20rem)] sm:w-[52.1875rem]"
                        style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                    />
                </div> */}
                {/* Section description */}
                <div className="flex sm:flex-row flex-col items-center justify-center">
                    {/* text section */}
                    <div className="flex flex-col gap-12">
                        {/* Section heading */}
                        <h1 className="text-center text-secondary font-bold tracking-tight text-3xl">{sectionDetails.title}</h1>
                        <hr/>
                        <div className="flex justify-center flex-col p-3 gap-3">
                            <p className="">{sectionDetails.description}</p>
                            <button className="bg-secondary p-2 hover:bg-secondary/70 font-semibold text-white rounded-md w-fit flex items-center gap-4"
                                onClick={() => navigate("/e-library")}
                            >
                                <p>Learn more</p>
                                <FaArrowRight/>
                            </button>
                        </div>
                    </div>
                    {/* Image section */}
                    <div className="w-1/2 flex justify-center bg-primary/25 rounded-3xl">
                        <img src={SectionImage} alt="" className="w-64"/>
                    </div>
                </div>
                {/* <div
                className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                aria-hidden="true"
                >
                    <div
                        className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-primary to-secondary opacity-30 sm:left-[calc(50%+20rem)] sm:w-[52.1875rem]"
                        style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                    />
                </div> */}
            </div>
        </div>
    )
}

export default ELibrary;