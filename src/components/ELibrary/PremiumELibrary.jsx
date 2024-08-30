import React from "react";
import { FaArrowRight, FaCheck } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const sectionDetails = {
    title: "स्पेशल 12",
    description: "MentorsGyan आपके लिए पेश करता है स्पेशल 12 सीरीज",
    features: ["CGPSC", "CG Vyapam", "ADEO", "होस्टल वार्डन", "और CG SI जैसे विभिन्न परीक्षाओं", "हिन्दी + English"]
}

/**
 * E library section of the website
 */
const PremiumELibrary = () => {
    const navigate = useNavigate();
    return (
        <div id="special-e-library" className="section isolate font-mukta dark:bg-gray-800 dark:text-white pt-5">
            
		{/* Section description */}
		<div className="flex sm:flex-row flex-col items-center justify-center container isolate border rounded-3xl shadow-2xl py-4 ">
			{/* text section */}
			<div className="flex flex-col gap-4 items-center">
			{/* Section heading */}
				<h1 className="text-secondary font-bold tracking-tight text-5xl">{sectionDetails.title}</h1>
				<div className="flex md-900:flex-row flex-col items-center justify-center gap-4">
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
							onClick={() => navigate("/premium-ebooks")}
							>
							<p className="text-xl">और अधिक जानें</p>
							<FaArrowRight/>
						</button>
					</div>
					<div className="md-900:order-2 order-1">
						<img src="https://firebasestorage.googleapis.com/v0/b/mentorsgyan-51f21.appspot.com/o/resources%2Febooks2.jpg?alt=media&token=5a94b2dc-e162-46ae-ae19-ff90d9b3ab21" alt="ebooks collage" className="w-2/3" />
					</div>
				</div>
			</div>
		</div>
        </div>
    )
}

const EBookTiles = () => {
	return (
		<div>
			
		</div>
	)
}

export default PremiumELibrary;