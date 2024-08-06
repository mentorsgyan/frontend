import React from "react";
import {CheckCircleIcon} from '@heroicons/react/24/outline';

const MentorshipSqueeze = () => {
    const courseFeature= ["XYZ feature 1", "XYZ Feature 2", "XYZ Feature 3"];
    return (
        <div className="bg-gray-800 h-screen text-white">
            {/* Heading */}
            <h1 className="text-7.5xl tracking-tighter text-center font-semibold align-middle italic">क्या है <strong className="text-secondary text-8xl">&nbsp;रहस्य&nbsp;</strong> CGPSC &nbsp;परीक्षा <strong className="text-secondary text-8xl">&nbsp;पास&nbsp;</strong> करने का <strong  className="text-secondary font-semibold text-8xl">?</strong></h1>
            {/* Text and visual section */}
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
        </div>
    )
}

// विद्यार्थी सही मार्गदर्शन के अनुभव में अपना समय व्यार्थ करते हुए पाए जाते हैं।

export default MentorshipSqueeze;