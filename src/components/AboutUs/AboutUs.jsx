import React from "react";
import LogoImg from "../../assets/logo/white_bg.jpg"
import DarkLogo from "../../assets/logo/footer_logo.png"
/**
 * This component will render the about us section of the website.
 * @returns
 * @author Mayank Shukla
 */
const AboutUs = () => {
    return (
        <div id="about-us" className="section dark:bg-gray-800 dark:text-gray-300">
            
            <div className="container relative min-h-[550px] rounded-3xl shadow-xl pb-5 flex justify-center items-center pt-8 font-mukta">
                <div className="grid grid-cols-1 md-900:grid-cols-2 gap-12">
                    {/* image section */}
                    {/* <div data-aos="zoom-in">
                        <img src={BannerImg} alt="" 
                        className="max-w-[400px] h-[350px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover"
                        />
                    </div> */}
                    {/* text section */}
                    <div className="relative flex flex-col shadow-lg rounded-3xl p-2 shadow-secondary dark:shadow-gray-500">
                        <h1 className="text-3xl text-secondary p-2 text-center sm:text-4xl font-bold"
                        >मेंटर्सज्ञान के साथ जुड़ें और अपनी CGPSC <br></br>सफलता की ओर पहला कदम बढ़ाएँ!</h1>
                        <img src={LogoImg} alt="" className="dark:hidden md-900:block -z-10 dark:z-10 rounded-full" />
                        <img src={DarkLogo} alt="" className="dark:md-900:block hidden -z-10 dark:z-10 rounded-full" />
                        </div>
                    <div className="flex flex-col justify-center gap-6 sm:pt-0">
                        
                        <div className="flex flex-col gap-4 text-xl tracking-wide text-justify">
                            <p >
                                <b>MentorsGyan</b> में, हम <b>CGPSC</b> परीक्षार्थियों को सही <b>मार्गदर्शन</b> प्रदान करने के लिए समर्पित हैं ताकि वे अपने <b>लक्ष्यों</b> को हासिल कर सकें। हमारा मिशन है विशेषज्ञ <b>मेंटॉरशिप</b> के माध्यम से व्यापक समर्थन प्रदान करना, यह सुनिश्चित करना कि हर छात्र को सफलता के लिए आवश्यक संसाधन और रणनीतियाँ मिलें।
                            </p>
                            <p>
                            हमारा मुख्य मूल्य है CGPSC परीक्षा की अनूठी चुनौतियों के लिए सटीक और प्रभावी मार्गदर्शन प्रदान करना। हमें विश्वास है कि सही दिशा में चलकर हर Aspirant अपनी क्षमता को पहचान सकता है।
                            </p>
                            <p>
                            हमें विशेष बनाता है हमारे शिक्षण में अवधारणाओं को दृश्यात्मक रूप से प्रस्तुत करने का हमारा समर्पण, जिससे जटिल विषयों को समझना और याद रखना आसान हो जाता है। हमारी नवीनतम शिक्षण विधियाँ चुनौतीपूर्ण विषयों को आकर्षक और सुलभ शिक्षण अनुभव में बदल देती हैं।
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs;