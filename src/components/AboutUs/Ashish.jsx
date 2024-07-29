import React from "react";

const Ashish = () => {
    return (
        <div className="container relative rounded-3xl shadow-xl mt-1 mb-5 flex justify-center items-center pt-8 sm:mt-0 d">
            <div className="flex items-center justify-center py-4">
                <div className="w-full text-xl flex flex-col gap-5 tracking-wide text-justify p-4">
                    <h1 className="text-3xl text-secondary font-bold tracking-tight">मेरा नाम आशीष फूटान है,</h1>
                    <p>
                        मैं <strong>IIT बॉम्बे</strong> से ड्रॉपआउट हूँ और पिछले 5 साल से <strong>Unacademy</strong> पर <strong>GATE और ESE</strong> के लिए एक शिक्षक के रूप में पढ़ा रहा हूँ। मैंने <strong>GATE टॉपर्स, ESE टॉपर्स, IAS अधिकारियों और PSC अधिकारियों</strong> (डिप्टी कलेक्टर, DSP आदि) के <strong>150 से अधिक इंटरव्यू</strong> लिए हैं। मैं <strong>मैकेनिकल इंजीनियरिंग</strong> का मेंटर हूँ।
                    </p>
                    <p>
                        मुझे विशेष कक्षाओं में सबसे अधिक लाइव शिक्षार्थियों के लिए कई बार शीर्ष प्रदर्शनकर्ता पुरस्कार मिला है। मेरे पास <strong>10 मिलियन</strong> वॉच टाइम और Unacademy पर <strong>18,000</strong> फॉलोअर्स हैं। मैंने <strong>3000+ कक्षाएं</strong> ली हैं जिनमें <strong>4000+ घंटे</strong> की लाइव शिक्षण शामिल हैं। <strong>40,000 शिक्षार्थियों</strong> ने मेरी कक्षाएं कुल <strong>60 लाख मिनट</strong> तक देखी हैं। मैंने <strong>5 बार GATE क्वालीफाई</strong> किया है।
                    </p>
                </div>
                {/* Image Section */}
                <div className="w-full items-center flex justify-center">

                    <img 
                    src="https://www-media.discoveryeducation.com/wp-content/uploads/2024/03/de-science-hp-blob.svg" 
                    alt="" 
                    className="text-center absolute -z-10 w-[350px] translate-x-32 translate-y-7"
                    />
                    
                    <img 
                    src="https://firebasestorage.googleapis.com/v0/b/mentorsgyan-51f21.appspot.com/o/resources%2Fimg_20240729_163611190.png?alt=media&token=4daaf7a2-a8fe-4e7a-a0c2-0da145d5ab2f"
                    alt="" 
                    className="text-center scale-125 -translate-y-9"
                    />
                    
                </div>
            </div>
        </div>
    )
}

export default Ashish;