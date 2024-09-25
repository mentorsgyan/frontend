import React, { useState } from "react";
import UserForm from "../User/UserForm";
import { StarIcon } from "@heroicons/react/24/solid";

const TestSqueeze = () => {

	const [english, setEnglish] = useState(true);

	function handleLanguageChange(e) {
		setEnglish(e.target.value === "english");
	}

	return (
		<div className="container font-mukta">
			<h1 className="md:text-7xl text-4xl font-bold dark:text-gray-200 py-10 leading-snug text-center">आ चुकी है <strong className="text-secondary">MentorsGyan</strong> की अपनी <h2 className="text-secondary font-bold"> टेस्ट सीरीज</h2></h1>

			<div className="flex md:flex-row flex-col items-center justify-center">
				{/* text section */}
				<div className="md:w-1/2">
					<h1 className="tracking-wide font-bold text-5xl dark:text-gray-200 leading-snug">आपकी तैयारी हो जाएगी अब और भी जोरदार</h1>
					<div className="fixed right-0 top-10 animate-bounce">
						<div className="relative flex items-center justify-center">
							<StarIcon className="text-secondary h-32" />
							<p className="absolute text-2xl font-bold text-white">₹999/-</p>
						</div>

					</div>
					<div className="flex flex-col dark:text-gray-300 text-lg text-justify">
						<p>39 Full Length Tests CGPSC प्रारंभिक परीक्षा के लिए - सभी महत्वपूर्ण विषयों को कवर करते हुए।</p>
						<p>&rarr; टेस्ट कही से भी, किसी भी समय और बार बार दे सकते हैं।</p>
						<p>&rarr; टेस्ट के द्वारा अपनी तैयारी का उत्कृष्ट आंकलन करें।</p>
						<p>&rarr; विषय विशेषज्ञो द्वारा तैयार प्रश्न पर आधारित टेस्ट </p>
						<p>&rarr; इंटरएक्टिव MCQ प्रश्न</p>
						<p>&rarr; समग्र रैंकिंग</p>
						<p className="text-white text-xl mt-10">परीक्षा की मांग के अनुसार नए डिजाइन किए गए प्रश्ना सीजीपी एससी 2024 की सटीक तैयारी हेतु अभी राजिस्ट्रेशन करे</p>
					</div>
				</div>
				{/* Image section */}
				<div className="md:w-1/2 md:ml-10 rounded-3xl shadow-2xl p-5 md:mt-0 mt-10 dark:shadow-gray-400">
					<h1 className="text-3xl font-bold text-secondary animate-bounce">स्पेशल ऑफर</h1>
					<div>
						<h1 className="dark:text-white text-2xl mt-10">12 प्रैक्टिस ई-बुक्स (₹1200 मूल्य की) बिल्कुल मुफ्त</h1>
						<h1 className="dark:text-white text-2xl mt-10">दैनिक, साप्ताहिक और मासिक करंट अफेयर्स PDF 1 वर्ष के लिए (₹2000 मूल्य की) मुफ्त</h1>
						<h1 className="dark:text-white text-2xl mt-10">10 विशेष रणनीति वीडियो विशेषज्ञों द्वारा</h1>
					</div>
					{/* <img src={Logo} alt="" className="block dark:hidden"/>
					<img src={DarkLogo} alt="" className="dark:block hidden scale-125"/> */}
				</div>
			</div>
			{/* registration area */}
			<div className="p-0.5 bg-white w-full mt-10"/>
			<h1 className="tracking-wide font-bold text-5xl dark:text-gray-200 text-center mt-10 underline">अभी पंजीकरण करें</h1>
			<UserForm squeeze = {true} />
			<div className="p-0.5 bg-white w-full mt-10 mb-10"/>
		</div>
	)
}

export default TestSqueeze;