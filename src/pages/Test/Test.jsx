import React, { useEffect, useReducer, useState } from "react";
import TestNavigator from "../../components/Test/TestNavigator";
import { BACKEND_API, QuestionStatus } from "../../utility/Constants";
import TestInstructions from "../../components/Test/TestInstructions";
import axios from "axios";
const questions = [
	{
		questionId: "test-1",
		quetionDescription: "this a very fantastic question, which is going to help a lot of students \nin getting ready for their exams Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur magnam consequuntur, repellat beatae sunt fugiat odit ducimus neque temporibus maxime nisi ipsum facere culpa, vel corrupti laboriosam. Sint, esse quis! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur magnam consequuntur, repellat beatae sunt fugiat odit ducimus neque temporibus maxime nisi ipsum facere culpa, vel corrupti laboriosam. Sint, esse quis!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur magnam consequuntur, repellat beatae sunt fugiat odit ducimus neque temporibus maxime nisi ipsum facere culpa, vel corrupti laboriosam. Sint, esse quis!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur magnam consequuntur, repellat beatae sunt fugiat odit ducimus neque temporibus maxime nisi ipsum facere culpa, vel corrupti laboriosam. Sint, esse quis!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur magnam consequuntur, repellat beatae sunt fugiat odit ducimus neque temporibus maxime nisi ipsum facere culpa, vel corrupti laboriosam. Sint, esse quis!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur magnam consequuntur, repellat beatae sunt fugiat odit ducimus neque temporibus maxime nisi ipsum facere culpa, vel corrupti laboriosam. Sint, esse quis!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur magnam consequuntur, repellat beatae sunt fugiat odit ducimus neque temporibus maxime nisi ipsum facere culpa, vel corrupti laboriosam. Sint, esse quis!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur magnam consequuntur, repellat beatae sunt fugiat odit ducimus neque temporibus maxime nisi ipsum facere culpa, vel corrupti laboriosam. Sint, esse quis!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur magnam consequuntur, repellat beatae sunt fugiat odit ducimus neque temporibus maxime nisi ipsum facere culpa, vel corrupti laboriosam. Sint, esse quis!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur magnam consequuntur, repellat beatae sunt fugiat odit ducimus neque temporibus maxime nisi ipsum facere culpa, vel corrupti laboriosam. Sint, esse quis!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur magnam consequuntur, repellat beatae sunt fugiat odit ducimus neque temporibus maxime nisi ipsum facere culpa, vel corrupti laboriosam. Sint, esse quis!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur magnam consequuntur, repellat beatae sunt fugiat odit ducimus neque temporibus maxime nisi ipsum facere culpa, vel corrupti laboriosam. Sint, esse quis!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur magnam consequuntur, repellat beatae sunt fugiat odit ducimus neque temporibus maxime nisi ipsum facere culpa, vel corrupti laboriosam. Sint, esse quis!",
		questionNumber: 10,
		options: ["Bombay", "Delhi", "Gurugram", "Indore"]
	},
	{
		questionId: "test-2",
		quetionDescription: "this a very fantastic question, which is going to help a lot of students \nin getting ready for their exams",
		questionNumber: 10,
		options: ["Calcutta", "Hyd", "Blr", "NYC"]
	}
];

const Test = () => {
	
	const [userAnswers, setUserAnswers] = useState(new Map());
	const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
	const question = questions[currentQuestionIndex % 2];
	const [instructionOpen, setInstructionOpen] = useReducer((state) => !state, false);
	const [userResponse, setUserResponse] = useState(userAnswers.get(`test-${currentQuestionIndex+1}`));
	const [questionStatus, setQuestionStatus] = useState(() => {
		const initialStatus = Array(100).fill(QuestionStatus.UNVISITED);
		initialStatus[0] = QuestionStatus.VISITED;
		return initialStatus;
	});

	const getMapFromLocalStorage = () => {
		const mapAsString = localStorage.getItem("answers");
		if (mapAsString) {
		  // Convert the string back to an array and then to a Map
		  return new Map(JSON.parse(mapAsString));
		}
		return new Map(); // Return an empty Map if nothing was found
	};

	const handleOptionChange = (option) => {
		setUserResponse(option);
		setUserAnswers((prevResp) => prevResp.set(`test-${currentQuestionIndex+1}`, option));
		let statusCopy = questionStatus;
		statusCopy[currentQuestionIndex] = QuestionStatus.SUBMITTED;
		setQuestionStatus(statusCopy);
	};

	function handleQuestionMFR() {
		setCurrentQuestionIndex(currentQuestionIndex + 1);
		let copyStatus = questionStatus;
		if (copyStatus[currentQuestionIndex + 1] === QuestionStatus.UNVISITED)
			copyStatus[currentQuestionIndex + 1] = QuestionStatus.VISITED;
		copyStatus[currentQuestionIndex] = QuestionStatus.MARKED_FOR_REVIEW;
		setQuestionStatus(copyStatus);
	}

	function handleOptionClear () {
		setUserResponse(null);
		setUserAnswers((prevResp) => prevResp.delete(`test-${currentQuestionIndex+1}`));
	}

	function handleArrowKey(i) {
		const newIdx = currentQuestionIndex + i;
		if (newIdx < 100 && newIdx >= 0) {
			setCurrentQuestionIndex(newIdx);
			if (questionStatus[newIdx] === QuestionStatus.UNVISITED) {
				let copyStatus = questionStatus;
				copyStatus[newIdx] = QuestionStatus.VISITED;
				setQuestionStatus(copyStatus);
			}

		}
	}

	useEffect(() => {
		setUserAnswers(getMapFromLocalStorage());
		const saveResponsesToLocalStorage = () => {
			// Convert the Map to an array and then to a string
			const answerArray = Array.from(userAnswers.entries());
			localStorage.setItem('answers', JSON.stringify(answerArray));
		  };
		const intervalId = setInterval(saveResponsesToLocalStorage, 5000);
		return () => clearInterval(intervalId);
	}, []);

	if (instructionOpen) {
		return (<TestInstructions setInstruction={setInstructionOpen}/>);
	}

	return (
		<div className="bg-gray-800 h-screen grid grid-cols-3">
			{/* Questions */}
			<div className="text-white col-span-3 md:col-span-2 flex flex-col justify-between">
				<div>
					<h1 className="font-bold text-4xl tracking-wide text-center p-4 shadow-md rounded-3xl mt-3 mx-3 shadow-gray-500">CGPSC PRELIMS TEST</h1>
					<div className="container mt-10 h-[500px] overflow-y-scroll ">
						<h2 className="text-xl">Q. No. {currentQuestionIndex + 1}</h2>
						{
							question.quetionDescription.split('\n').map((line, idx) => (
								<p key={idx} className="text-xl font-bold text-gray-200">
									{line}
								</p>
							))
						}
						<div className="grid md:grid-cols-2 grid-cols-1 mt-10">
								{
									question.options.map((option, idx) => (
										<label key={idx} className="inline-flex gap-4 items-center">
											<input
											type="radio"
											name={`question-${idx}`}
											className="form-radio text-secondary"
											value={option}
											checked={userAnswers.get(`test-${currentQuestionIndex+1}`) === option}
											onChange={(e) => handleOptionChange(option)}
											/>
											{option}
										</label>
									))
								}
						</div>
					</div>
				</div>
				<div>
					{userAnswers.get(`test-${currentQuestionIndex+1}`) && (<p className="text-red-500 px-10">Respone is saved({userAnswers.get(`test-${currentQuestionIndex+1}`)}).</p>)}
					<div className="shadow-2xl rounded-t-3xl p-4 shadow-gray-300 container overflow-hidden">
						<div className="flex gap-5 justify-between items-center container">
							<button className="bg-gray-600 p-3 font-bold rounded-md w-fit text-white" onClick={() => handleArrowKey(-1)}>&larr;</button>
							<button className="bg-gray-600 p-3 font-bold rounded-md w-fit text-white" onClick={() => handleArrowKey(1)}>&rarr;</button>
						</div>
						<div className="flex md-900:flex-row flex-col gap-5 justify-between items-center mt-5 container">
							<div className="flex gap-3">
								<button className="bg-yellow-500 p-2 font-bold rounded-md w-[160px]" onClick={handleQuestionMFR}>Marked for review</button>
								<button className="bg-red-500 p-2 font-bold rounded-md w-[160px]" onClick={handleOptionClear}>Clear</button>
							</div>
							<button className="bg-green-500 p-2 font-bold rounded-md w-[160px]" onClick={handleOptionClear}>Save and Next</button>
						</div>
					</div>
					</div>
				</div>
			{/* Question panel */}
			<TestNavigator userAnswers={userAnswers} setCurrentQuestionNumber={setCurrentQuestionIndex} questionStatus={questionStatus} setQuestionStatus={setQuestionStatus} currentQuestion={currentQuestionIndex} setInstructions={setInstructionOpen}/>
			{/* Small media question floater */}
			
		</div>
	)
}

export default Test;