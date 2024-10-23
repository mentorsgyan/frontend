import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Report } from "../../components/Test/TestNavigator";
import { FaWhatsapp } from "react-icons/fa6";

const TestCompletion = () => {
	const location = useLocation();
	const receivedData = location.state || undefined;
	const english = receivedData?.language === "English"
	const title = english ? "Marvelous" : "अद्भुत";
	const message = english ? "You have successfully submitted the test." : "आपने सफलतापूर्वक परीक्षा सबमिट कर दिया है"
	const report = english ? "Report Card" : "रिपोर्ट कार्ड"
	const resultMessage = english ? "Results will be published in the website. Stay tuned on our WhatsApp channel to get the latest updates" : "परिणाम वेबसाइट पर प्रकाशित किये जायेंगे। नवीनतम अपडेट पाने के लिए हमारे व्हाट्सएप चैनल पर बने रहें।";
	const whatsappMessage = english ? "Click to join" : "क्लिक करें";

	useEffect(() => {
        if (localStorage.getItem('darkMode') === 'true') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, []);

	return (
		<div className="flex flex-col items-center font-mukta">
			<h1 className="md:text-5xl text-3xl font-bold text-center dark:text-white mt-10">{title}!</h1>
			<h2 className="dark:text-gray-200 md:text-3xl text-2xl text-center my-10">{message}</h2>
			<div className="shadow-md shadow-gray-200 dark:shadow-gray-500 md:w-3/4 px-10 rounded-3xl">
				<h1 className="dark:text-gray-200 md:text-4xl text-3xl text-center my-10">{report}</h1>
				<div className="dark:bg-gray-200 bg-gray-700 p-0.5"/>
				<Report submitted={receivedData.submitted} unvisited={receivedData.unvisited} underReview={receivedData.underReview} visited={receivedData.visited}/>
			</div>
			<p className="dark:text-white text-xl text-center my-10">{resultMessage}</p>
			<a className="flex gap-4 text-3xl bg-green-400 w-fit p-3 rounded-3xl items-center hover:scale-110 cursor-pointer" target="_blank" href="https://whatsapp.com/channel/0029VaoYdr7Bqbr91JdZAQ24">
				<FaWhatsapp className="text-white animate-ping"/>
				<p className="text-white">{whatsappMessage}</p>
			</a>
		</div>
	)
}

export default React.memo(TestCompletion);