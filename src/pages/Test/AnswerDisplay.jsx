import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import {BACKEND_API} from "../../utility/Constants";
import axios from "axios";
import { LanguageIcon } from "@heroicons/react/24/outline";

const AnswerDisplay = () => {
	
	const [searchParams] = useSearchParams();
	const [english, setEnglish] = useState(false);
	const [hindiQuestions, setHindiQuestions] = useState([]);
	const [englishQuestions, setEnglishQuestions] = useState([]);
	const questions = english ? englishQuestions : hindiQuestions;
	const [totalCorrect, setTotalCorrect] = useState(0);
	const [totalIncorrect, setTotalIncorrect] = useState(0);
	const [totalMarks, setTotalMarks] = useState(0);

	const phoneNumber = searchParams.get('phoneNumber');
	const testId = searchParams.get("testId");
	const testNumber = searchParams.get("test");

	const [userAnsers, setUserAnswers] = useState(undefined);

	function returnOption(idx) {
		if (idx === 0)
			return 'A';
		else if (idx === 1)
			return 'B';
		else if (idx === 2)
			return 'C';
		else return 'D';
	}

	async function fetchAnswers() {
		const data = {
			phoneNumber, testId, testNumber
		}
		const response = await axios.post(BACKEND_API + "/test-series/fetchAnswers", data);
		if (response.status === 200) {
			setTotalCorrect(response.data.score.correct);
			setTotalIncorrect(response.data.score.incorrect);
			setTotalMarks(response.data.score.totalMarks);
		}
		setEnglishQuestions(response.data.questions.englishAns);
		setHindiQuestions(response.data.questions.hindiAns);
	}

	useEffect(() => {
		fetchAnswers();
	}, []);

	return (
		<div className="h-screen overflow-y-scroll dark:text-white">
			<div className="flex gap-2 items-center mt-10 container">
				<LanguageIcon className="dark:text-white h-6"/>
				<select value={english === true ? "English" : "हिन्दी"} onChange={(e) => setEnglish(e.target.value === "English")} className="text-sm dark:bg-gray-700">
					<option value="हिन्दी">हिन्दी</option>
					<option value="English">English</option>
				</select>
			</div>
				<div className="mt-10 dark:text-black container">
					<div className="hidden md:grid grid-cols-3 items-center justify-center text-center border-2 ">
						<h1 className="font-bold dark:border-gray-700 bg-green-200 p-2 border border-gray-200">Correct (+2)</h1>
						<h1 className="font-bold dark:border-gray-700 bg-red-200 p-2 border border-gray-200">Incorrect(-2/3)</h1>
						<h1 className="font-bold dark:border-gray-700 bg-blue-100 p-2 border border-gray-200">Total Attempted</h1>
						<p className="p-2 border dark:bg-gray-100 dark:border-gray-700 border-gray-200">{totalCorrect}</p>
						<p className="p-2 border dark:bg-gray-100 dark:border-gray-700 border-gray-200">{totalIncorrect}</p>
						<p className="p-2 border dark:bg-gray-100 dark:border-gray-700 border-gray-200">{totalIncorrect + totalCorrect}</p>
						<h1 className="col-span-3 bg-blue-100 p-2 border-2">Marks Obtained: {totalMarks}</h1>
					</div>
					<div className="grid md:hidden grid-cols-2 items-center justify-center text-center border-2">
						<h1 className="font-bold dark:border-gray-700 bg-green-200 p-2 border border-gray-200">Correct (+2)</h1>
						<h1 className="font-bold dark:border-gray-700 bg-red-200 p-2 border border-gray-200">Incorrect(-2/3)</h1>
						<p className="p-2 border dark:border-gray-700 dark:bg-gray-100 border-gray-200">{totalCorrect}</p>
						<p className="p-2 border dark:border-gray-700 dark:bg-gray-100 border-gray-200">{totalIncorrect}</p>
						<h1 className="font-bold dark:border-gray-700 bg-blue-100 p-2 border border-gray-200">Total Attempted</h1>
						<p className="p-2 border dark:border-gray-700 bg-blue-100 border-gray-200">{totalIncorrect + totalCorrect}</p>
						<h1 className="col-span-2 bg-blue-100 p-2 border-t-2 border-gray-300">Marks Obtained: {totalMarks}</h1>
					</div>
				</div> 
				
				<div className="container mt-10">
					<h1 className="text-center font-bold text-3xl">Answer Key</h1>
					
					{ questions.length !== 0 && 
						questions?.map((question, idx) => (
							<>
								<div key={idx} className="flex gap-4 my-2 border-t-2">
									<h1>{idx + 1}.</h1>
									<div>
										{
											question?.quetionDescription?.split('\n').map((line, qId) => (
													<p key={qId} className={`dark:text-gray-200 text-gray-800 `}>
														{line}
													</p>
											))
										}
									</div>
								</div>
								<div key={(idx+1) * 31} className="flex flex-col mt-10 gap-2 w-full">
									{
										question?.options?.map((option, oidx) => {
											const qId = hindiQuestions[idx].questionId;
											const markedCorrect = userAnsers !== undefined ? userAnsers[qId] === hindiQuestions[idx].options[oidx] || userAnsers[qId] === englishQuestions[idx].options[oidx] : false;
											const correctAnswer = option === question.correct;
											return (
												<label key={oidx} className="inline-flex gap-4 px-2 py-1 items-center">
													
													<p className={`${correctAnswer ? 'bg-green-300 dark:bg-green-600/70 rounded-md' : ''} px-2 py-1`}>{ returnOption(oidx)}. {option}</p>
													{
														markedCorrect && <p>✔</p>
													}
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

export default AnswerDisplay;