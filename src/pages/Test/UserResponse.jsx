import React, { useEffect, useRef, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { BACKEND_API } from "../../utility/Constants";
import { Report } from "../../components/Test/TestNavigator";
import { FaWhatsapp } from "react-icons/fa6";
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { ImDownload2 } from "react-icons/im";

const UserResponse = () => {

	const location = useLocation();

	const pageRef = useRef();

	const language = location.state ? location.state.language : "हिन्दी";
	const userResponse = location.state ? location.state.userAnswers : undefined
	
	const { number } = useParams();
	
	const [questionJson, setQuestionJson] = useState({english: [], hindi: []});
	const questions = language === "हिन्दी" ? questionJson.hindi : questionJson.english;
	

	const receivedData = location.state || undefined;
	const english = language === "English"
	const title = english ? "Marvelous" : "अद्भुत";
	const message = english ? "You have successfully submitted the test." : "आपने सफलतापूर्वक परीक्षा सबमिट कर दिया है"
	const report = english ? "Report Card" : "रिपोर्ट कार्ड"
	const resultMessage = english ? "Results will be published in the website. Stay tuned on our WhatsApp channel to get the latest updates" : "परिणाम वेबसाइट पर प्रकाशित किये जायेंगे। नवीनतम अपडेट पाने के लिए हमारे व्हाट्सएप चैनल पर बने रहें।";
	const whatsappMessage = english ? "Click to join" : "क्लिक करें";
	

	function returnOption(idx) {
		if (idx === 0)
			return 'A';
		else if (idx === 1)
			return 'B';
		else if (idx === 2)
			return 'C';
		else return 'D';
	}

	const handleDownloadPdf = () => {
		const input = pageRef.current;
		

		html2canvas(input, { useCORS: true , scale: 0.99}).then((canvas) => {
		  const imgData = canvas.toDataURL('image/png');
		  const pdf = new jsPDF('p', 'mm', 'a4');
	
		  // Get the width and height of the canvas to maintain aspect ratio in PDF
		  const imgWidth = 210; // A4 width in mm
		  const pageHeight = 295; // A4 height in mm
		  const imgHeight = (canvas.height * imgWidth) / canvas.width;
		  let heightLeft = imgHeight;
	
		  let position = 0;
	
		  // Add image to PDF page
		  pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
		  heightLeft -= pageHeight;
	
		  // If content height exceeds one page, create new pages
		  while (heightLeft >= 0) {
			position = heightLeft - imgHeight;
			pdf.addPage();
			pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
			heightLeft -= pageHeight;
		  }
	
		  // Save the PDF
		  pdf.save(`Mentorsgyan test series-${number}`);
		});
	};


	useEffect(() => {
		fetch(`${BACKEND_API}/test-series?testNumber=${number}`)
		.then((response) => response.json())
		.then((data) => {
			setQuestionJson(data);
			console.log(data.english[0].questionId);
			console.log(userResponse.get(data.english[0].questionId));
			console.log(userResponse);
		});
	}, [])

	return (
		<div ref={pageRef}>
			<div className="flex flex-col items-center font-mukta">
			<h1 className="md:text-5xl text-3xl font-bold text-center dark:text-white mt-10">{title}!</h1>
			<h2 className="dark:text-gray-200 md:text-3xl text-2xl text-center my-10">{message}</h2>
			<div className="shadow-md shadow-gray-200 dark:shadow-gray-500 md:w-3/4 px-10 rounded-3xl">
				<h1 className="dark:text-gray-200 md:text-4xl text-3xl text-center my-10">{report}</h1>
				<div className="dark:bg-gray-200 bg-gray-700 p-0.5"/>
				<Report submitted={receivedData.submitted} unvisited={receivedData.unvisited} underReview={receivedData.underReview} visited={receivedData.visited}/>
			</div>
			<p className="dark:text-white text-xl text-center my-10">{resultMessage}</p>
			<a className="flex gap-4 text-3xl bg-green-400 w-fit p-3 rounded-3xl items-center hover:scale-110 transition-transform duration-200 cursor-pointer" target="_blank" href="https://whatsapp.com/channel/0029VaoYdr7Bqbr91JdZAQ24">
				<FaWhatsapp className="text-white animate-ping"/>
				<p className="text-white">{whatsappMessage}</p>
			</a>
			<button className="flex gap-4 text-3xl mt-10 bg-red-400 w-fit p-3 rounded-3xl items-center hover:scale-110 transition-transform duration-200 cursor-pointer" onClick={handleDownloadPdf}>
				<ImDownload2 className="text-white "/>
				<p className="text-white">{english ? "Download your responses" : "अपनी उत्तर पुस्तिका डाउनलोड करें"}</p>
			</button>
		</div>
			<div className="container mt-10">
					
					{
						questions?.map((question, idx) => (
							<>
								<div key={idx} className="flex gap-4 my-2 border-t-2 dark:text-gray-200">
									<h1>{idx + 1}.</h1>
									<div>
										{
											question.quetionDescription?.split('\n').map((line, qId) => (
													<p key={qId} className={`dark:text-gray-200 text-gray-800 `}>
														{line}
													</p>
											))
										}
									</div>
								</div>
								<div className="flex flex-col mt-10 gap-2 w-full dark:text-gray-200">
									{
										question.options?.map((option, oidx) => {
											const questionId = question.questionId;
											const marked = userResponse !== undefined && userResponse.get(questionId) !== undefined ? userResponse.get(questionId) === option : false;
											return (
											<label key={oidx} className="inline-flex gap-4 mx-3 px-2 py-1 items-center">
												
												{ returnOption(oidx)}. {option} <p className={`${marked ? 'px-2 py-1 bg-green-400 rounded-md' : ''}`}>{marked ? '✔' : ''}</p>
											</label>
										)})
									}
								</div>
							</>
						))
					}
					
				</div>
		</div>
	)
}

export default UserResponse;