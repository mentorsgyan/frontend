import { LanguageIcon } from "@heroicons/react/24/outline";
import axios from "axios";
import React, { useState } from "react";
import { BACKEND_API } from "../../utility/Constants";

const TestInstructions = ({setInstruction, setAgreedToInstructions, agreedTo, setLanguage, language, phoneNumber}) => {
	const [isChecked, setIsChecked] = useState(false);
	const [currLanguage, setCurrLanguage] = useState(language);
	const english = currLanguage === "English";
	const instruction = english ? "INSTRUCTIONS" : "निर्देश";

	const instructionHindi = [
		{
			title: "सामान्य निर्देश:",
			data: [
				{
					main: "1. घड़ी सर्वर पर सेट की जाएगी। स्क्रीन के शीर्ष दाएं कोने पर काउंटडाउन टाइमर आपके पास शेष समय दिखाएगा। जैसे ही टाइमर शून्य तक पहुंचता है, परीक्षा अपने आप समाप्त हो जाएगी। आपको परीक्षा को समाप्त करने या अपना पेपर जमा करने की आवश्यकता नहीं है।"
				},
				{
					main: "2. स्क्रीन के दाहिने ओर दिखाए गए प्रश्न पैलेट में प्रत्येक प्रश्न की स्थिति निम्नलिखित प्रतीकों का उपयोग करके दिखाई जाएगी:",
					subins: [
						"- आपने अभी तक प्रश्न का अवलोकन नहीं किया है।",
						"- आपने प्रश्न का उत्तर नहीं दिया है।",
						"- आपने प्रश्न का उत्तर दे दिया है।",
						"- आपने प्रश्न का उत्तर दिया है, लेकिन उसे समीक्षा के लिए चिह्नित किया है।",
						"- समीक्षा के लिए चिह्नित प्रश्न का अर्थ है कि आप उस प्रश्न को बाद में देखना चाहते हैं। यदि किसी प्रश्न का उत्तर दिया गया है, लेकिन उसे समीक्षा के लिए चिह्नित किया गया है, तो उत्तर का मूल्यांकन किया जाएगा जब तक कि उम्मीदवार द्वारा स्थिति बदली न जाए।",
					]
				},
			]
		},
		{
			title: "प्रश्न पर नेविगेट करना:",
			data: [
				{
					main: "किसी प्रश्न का उत्तर देने के लिए निम्नलिखित करें:",
					subins: [
							"1. स्क्रीन के दाईं ओर प्रश्न पैलेट में प्रश्न संख्या पर क्लिक करके उस नंबर के प्रश्न पर सीधे जाएं। ध्यान दें कि इस विकल्प का उपयोग करने से आपके वर्तमान प्रश्न का उत्तर सहेजा नहीं जाएगा।",
							"2. अपने वर्तमान प्रश्न का उत्तर सहेजने के लिए Save & Next पर क्लिक करें और फिर अगले प्रश्न पर जाएं।",
							"3. Save & Next पर क्लिक करके अपने वर्तमान प्रश्न का उत्तर सहेजें और साथ ही उसे समीक्षा के लिए चिह्नित करें, और फिर अगले प्रश्न पर जाएं।	ध्यान दें कि यदि आप उत्तर सहेजने के बिना सीधे किसी अन्य प्रश्न पर जाते हैं, तो आपका उत्तर सहेजा नहीं जाएगा। आप सभी प्रश्नों को एक नज़र में देखने के लिए प्रश्न पत्र बटन पर क्लिक कर सकते हैं।"
					]
				}
			]
		},
		{
			title: "प्रश्न का उत्तर देना:",
			data: [
			{
				main: "1. बहुविकल्पीय (MCQ) प्रश्न का उत्तर देने की प्रक्रिया:",
				subins: [
					"1. चार विकल्पों (A, B, C, D) में से एक उत्तर चुनें, और चुने गए विकल्प के आगे स्थित बबल पर क्लिक करें।",
					"2. चुने गए उत्तर को अचयनित करने के लिए, उसी विकल्प के बबल पर फिर से क्लिक करें या Clear Response बटन पर क्लिक करें।",
					"3. अपने चुने गए उत्तर को बदलने के लिए, किसी अन्य विकल्प के बबल पर क्लिक करें।",
					"4. अपने उत्तर को सहेजने के लिए, आपको Save & Next पर क्लिक करना होगा।",
				]
			},

			{main: "2. ध्यान दें कि केवल वे प्रश्न जिनके उत्तर सहेजे गए हैं या समीक्षा के लिए चिह्नित किए गए हैं, उनका मूल्यांकन किया जाएगा।"},
			{main: "3. इस प्रश्न पत्र में अनुभाग स्क्रीन के शीर्ष बार में प्रदर्शित होंगे। किसी अनुभाग में प्रश्नों को देखने के लिए उस अनुभाग के नाम पर क्लिक करें।"},
			{main: "4. अंतिम प्रश्न के लिए Save & Next बटन पर क्लिक करने के बाद, आपको स्वचालित रूप से अगले अनुभाग के पहले प्रश्न पर ले जाया जाएगा।"},
			{main: "5. आप किसी अनुभाग पर माउस कर्सर ले जाकर उस अनुभाग की उत्तर स्थिति देख सकते हैं।"},
			]
		},
		{
			title: "निर्देश:",
			data: [
			{main: "1. परीक्षा में 100 प्रश्न होंगे।"},
			{main: "2. प्रत्येक प्रश्न में 4 विकल्प होंगे, जिनमें से केवल एक सही होगा।"},
			{main: "3. आपको 120 मिनट में परीक्षा समाप्त करनी होगी।"},
			{main: "4. प्रत्येक सही उत्तर के लिए 2 अंक मिलेंगे और प्रत्येक गलत उत्तर के लिए 0.66 अंक काटे जाएंगे।"},
			{main: "5. जो प्रश्न आपने नहीं किए हैं, उनके लिए कोई नकारात्मक अंक नहीं होगा।"},
			{main: "6. आप यह परीक्षा केवल एक बार दे सकते हैं। सुनिश्चित करें कि आप ब्राउज़र बंद करने या परीक्षा जमा करने से पहले परीक्षा समाप्त कर लें।"},
			]
		}
	]

	const instructionsEnglish = [
		{
			title: "General Instructions: ",
			data: [
				{main: "1. The clock will be set at the server. The countdown timer at the top right corner of screen will display the remaining time available for you to complete the examination. When the timer reaches zero, the examination will end by itself. You need not terminate the examination or submit your paper."},
				{main: "2. The Question Palette displayed on the right side of screen will show the status of each question using one of the following symbols:",
					subins: [
						"You have not visited the question yet.",
						"You have not answered the question.",
						"You have answered the question.",
						"You have answered the question, but marked it for review.",
						"The Mark For Review status for a question simply indicates that you would like to look at that question again. If a question is answered, but marked for review, then the answer will be considered for evaluation unless the status is modified by the candidate"
					]
				}
			]
		},
		{
			title: "Navigating to Question: ",
			data: [
				{
					main: "1. To answer a question, do the following:",
					subIns: [
						"1. Click on the question number in the Question Palette at the right of your screen to go to that numbered question directly.", 
						" -- Note: that using this option does NOT save your answer to the current question.",
						"2. Click on Save & Next to save your answer for the current question and then go to the next question.",
						"3. Click on Mark for Review & Next to save your answer for the current question and also mark it for review, and then go to the next question.",
						" -- Note that your answer for the current question will not be saved, if you navigate to another question directly by clicking on a question number without saving the answer to the previous question."
					]
				}
			]
		},
		{
			title: "Answering a Question: ",
			data: [
				{
					main: "Procedure for answering a multiple choice (MCQ) type question:",
					subins: [
						"1. Choose one answer from the 4 options (A,B,C,D) given below the question, click on the bubble placed before the chosen option.",
						"2. To deselect your chosen answer, click on the bubble of the chosen option again or click on the Clear Response button",
						"3. To change your chosen answer, click on the bubble of another option.",
						"4. To save your answer, you MUST click on the Save & Next",
						"5. Note that ONLY Questions for which answers are saved or marked for review after answering will be considered for evaluation.",
						"6. Sections in this question paper are displayed on the top bar of the screen. Questions in a Section can be viewed by clicking on the name of that Section. The Section you are currently viewing will be highlighted.",
						"7. After clicking the Save & Next button for the last question in a Section, you will automatically be taken to the first question of the next Section in sequence.",
						"8. You can move the mouse cursor over the name of a Section to view the answering status for that Section."
					]
				}
			]
		},
		{
			title: "Read the following instructions carefully.",
			data: [
				{main: "1. The test contain 100 questions."},
				{main: "2. Each question has 4 options out of which only one is correct."},
				{main: "3. You have to finish the test in 120 minutes."},
				{main: "4. You will be awarded 2 mark for each correct answer and 0.66 will be deducted for each wrong answer."},
				{main: "5. There is no negative marking for the questions that you have not attempted."},
				{main: "6. You can write this test only once. Make sure that you complete the test before you submit the test and/or close the browser."}
			]
		}
	]
	
	const instructions = english ? instructionsEnglish : instructionHindi;

	const updateLanguage = (e) => {
		setLanguage(e.target.value === "English");
		setCurrLanguage(e.target.value);
	}
	const handleCheckboxChange = (event) => {
		setIsChecked(event.target.checked);
	};

	async function sendStartTime() {
		const time = new Date();
		const data = {
			phoneNumber: phoneNumber,
			testId: "0110",
			time: time.getTime().toString()
		}
		await axios.post(BACKEND_API + "/test-series/started", data);
	}

	function handleContinue() {
		setInstruction(false);
		setAgreedToInstructions(true);
	}

	return (
		<div>
			<div className="dark:bg-gray-800 mx-10 mt-10 dark:text-gray-300 md-900:h-[500px] h-[500px] overflow-y-scroll">
				<h1 className="text-3xl text-center font-bold mb-5">{instruction}</h1>
				<div className="dark:bg-gray-400 bg-gray-700 p-0.5 mb-10"/>
				{
					instructions.map((curr, idx) => (
						<div key={idx}>
							<h1 className="text-lg font-bold">{curr.title}</h1>
							<ul>
								{
									curr.data.map((ins, id) => (
										<li key={id} className="mx-2">
											{ins.main}
											{
												ins.subins?.map((sub, sid) => (
													<p key={sid} className="mx-4">{sub}</p>
												))
											}
										</li>
									))
								}
								</ul>
						</div>
					))
				}
				<div className="dark:bg-gray-400 bg-gray-700 p-0.5 mb-10 mt-4"/>
				<p className="text-center"><strong>{english ? "Duration":"समयावधि"}</strong>{' '}: 120 {english ? "Minute":"मिनट"}</p>
				<p className="text-center"><strong>{english ? "Maximum Marks":"अधिकतम अंक"}</strong>{' '}: 200</p>
				<div className="dark:bg-gray-400 bg-gray-700 p-0.5 my-10"/>
			</div>
				<div className=" fixed bottom-0 flex flex-col gap-4 justify-center items-center w-full bg-blue-100 py-2">
					
					<div className="flex flex-row justify-evenly w-full">
						{
							!agreedTo &&
							<div className="flex flex-col w-2/5 justify-center">
								<label className="text-red-500 flex items-center">
									<input
										type="checkbox"
										checked={isChecked}
										onChange={handleCheckboxChange}
										className="mr-2"
									/>
									<p className="font-bold">{english ? "Declaration" : "घोषणा"}*</p>
								</label>
								
								<p className="text-sm text-justify">{english ? "I have read all the instructions carefully and have understood them. I agree not to cheat or use unfair means in this examination. I understand that using unfair means of any sort will lead to my immediate disqualification" : "मैंने सभी निर्देशों को ध्यानपूर्वक पढ़ा और समझ लिया है। मैं यह वचन देता हूँ कि परीक्षा में नकल या अनुचित साधनों का उपयोग नहीं करूँगा।"}</p>
							</div>
						}
						<div className="flex flex-col justify-center w-1/3">
							<div className="flex gap-2 items-center md-900:mt-0 mt-10">
								<select value={currLanguage} onChange={(e) => updateLanguage(e)} className="text-sm">
									<option value="हिन्दी">हिन्दी</option>
									<option value="English">English</option>
								</select>
							</div>
							<p className="text-sm font-semibold text-red-500">{english ? "Default Language" : "डिफ़ॉल्ट भाषा चुनें"}*</p>
							<p className="text-sm">
								{
									english ? "Please note all questions will appear in your default language. This language can be changed for a particular question later on" : "कृपया ध्यान दें कि सभी प्रश्न आपकी डिफ़ॉल्ट भाषा में दिखाई देंगे। इस भाषा को आप किसी विशेष प्रश्न के लिए बाद में बदल सकते हैं।"
								}
							</p>
						</div>
						
					</div>
					<button className="bg-primary text-white p-3 rounded-md hover:bg-secondary" onClick={handleContinue} disabled={!agreedTo && !isChecked}>Continue</button>
				</div>

		</div>
	)
}

export default TestInstructions;