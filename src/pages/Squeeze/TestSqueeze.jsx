import React, { useEffect, useState } from "react";
import UserForm from "../User/UserForm";
import { StarIcon } from "@heroicons/react/24/solid";
import { BACKEND_API } from "../../utility/Constants";

const TestSqueeze = () => {

	const [target, setTarget] = useState(125);
	const [countDisplay, setCountDisplay] = useState(0);

    useEffect(() => {
        if (localStorage.getItem('darkMode') === 'true') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, []);

	useEffect(() => {
		fetch(BACKEND_API + "/user/countAll")
		.then((response) => response.json())
		.then((data) => {
			setTarget((prev) => prev + data);
			console.log(data);
		});
	}, []);

	// useEffect(() => {
	// 	const interval = setInterval(() => {
	// 		setCountDisplay((prev) => {
	// 			const newCount = prev + 1;
	// 			if (newCount >= target) {
	// 				clearInterval(interval);
	// 				return target;
	// 			}
	// 			return newCount;
	// 		})
	// 	})
	// 	return () => clearInterval(interval);
	// }, 60);

	return (
		<div className="container font-mukta">
			<h1 className="md:text-7xl text-4xl font-bold dark:text-gray-200 py-10 leading-snug text-center">आ चुकी है <strong className="text-secondary">MentorsGyan</strong> की अपनी <h2 className="text-secondary font-bold"> टेस्ट सीरीज</h2></h1>

			<div className="flex md:flex-row flex-col items-center justify-center">
				{/* text section */}
				<div className="md:w-1/2">
					<h1 className="tracking-wide font-bold md:text-5xl text-3xl dark:text-gray-200 leading-snug">आपकी तैयारी हो जाएगी अब और भी जोरदार</h1>
					<div className="fixed right-0 top-28 md-900:top-10">
						<div className="relative flex items-center justify-center">
							<StarIcon className="text-secondary/90 md:h-40 h-32" />
							<div className="absolute">
								<p className="md:text-2xl text-xl font-bold translate-y-3 text-white animate-pulse">₹999/-</p>
								<p className="md:text-2xl text-xl line-through text-red-500">₹1499/-</p>
							</div>
						</div>

					</div>
					<div className="flex flex-col dark:text-gray-300 text-lg text-justify">
						<p className="text-xl font-bold">39 Full Length Tests CGPSC प्रारंभिक परीक्षा के लिए - सभी महत्वपूर्ण विषयों को कवर करते हुए।</p>
						<p className="text-xl font-bold">&rarr; हिन्दी + English</p>
						<p>&rarr; टेस्ट कही से भी, किसी भी समय और बार बार दे सकते हैं।</p>
						<p>&rarr; टेस्ट के द्वारा अपनी तैयारी का उत्कृष्ट आंकलन करें।</p>
						<p>&rarr; विषय विशेषज्ञो द्वारा तैयार प्रश्न पर आधारित टेस्ट </p>
						<p>&rarr; इंटरएक्टिव MCQ प्रश्न</p>
						<p>&rarr; समग्र रैंकिंग</p>
						<p className="dark:text-white text-xl mt-10">परीक्षा की मांग के अनुसार नए डिजाइन किए गए प्रश्ना सीजीपी एससी 2024 की सटीक तैयारी हेतु अभी राजिस्ट्रेशन करे</p>
						
					</div>
				</div>
				{/* Image section */}
				<div className="md:w-1/2 md:ml-10 rounded-3xl shadow-2xl p-5 md:mt-0 mt-10 dark:shadow-gray-400">
					<h1 className="text-3xl font-bold text-secondary animate-bounce">स्पेशल ऑफर <br/>केवल प्रथम <strong>200</strong> विद्यार्थियों के लिए</h1>
					<div>
						<h1 className="dark:text-white text-2xl mt-10">12 प्रैक्टिस ई-बुक्स (₹1200 मूल्य की) बिल्कुल मुफ्त</h1>
						<h1 className="dark:text-white text-2xl mt-10">दैनिक, साप्ताहिक और मासिक करंट अफेयर्स PDF 1 वर्ष के लिए (₹2000 मूल्य की) मुफ्त</h1>
						<h1 className="dark:text-white text-2xl mt-10">10 विशेष रणनीति वीडियो विशेषज्ञों द्वारा</h1>
					</div>
					{/* <img src={Logo} alt="" className="block dark:hidden"/>
					<img src={DarkLogo} alt="" className="dark:block hidden scale-125"/> */}
				</div>
			</div>
			<div className="mt-10 flex flex-col items-center justify-center">
				<a href="https://drive.google.com/drive/folders/1xV3PSqrzQq4N3GjOVOtoYTsikhZ49W1B?usp=sharing" target="_blank" className="text-center text-secondary text-2xl mt-10 hover:scale-125 transition-transform duration-200">अनुसूची/Schedule के लिए क्लिक करें।</a>
				<div className="mt-10 text-center p-5 shadow-2xl rounded-3xl dark:shadow-gray-700">
					<p className="text-5xl font-bold dark:text-gray-200">{target}+</p>
					<p className="text-3xl font-light dark:text-gray-50">कुल पंजीकरण</p>
				</div>
			</div>
			{/* registration area */}
			<div className="p-0.5 dark:bg-white bg-gray-200 w-full mt-10"/>
			<h1 className="tracking-wide font-bold text-5xl dark:text-gray-200 text-center mt-10 underline">अभी पंजीकरण करें</h1>
			<UserForm squeeze = {true} />
			<div className="p-0.5 bg-white w-full mt-10 mb-10"/>
		</div>
	)
}

export default TestSqueeze;