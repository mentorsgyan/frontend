import React, { useEffect, useReducer, useState } from "react";
import TestNavigator from "../../components/Test/TestNavigator";
import { BACKEND_API, QuestionStatus } from "../../utility/Constants";
import TestInstructions from "../../components/Test/TestInstructions";
import axios from "axios";
import { ClockIcon } from "@heroicons/react/24/outline";
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

const questionsHi = [
	{
		questionId: "test-1",
		quetionDescription: "this sdafsadfsadf very fantastic question, which is going to help a lot of students \nin getting ready for their exams Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur magnam consequuntur, repellat beatae sunt fugiat odit ducimus neque temporibus maxime nisi ipsum facere culpa, vel corrupti laboriosam. Sint, esse quis! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur magnam consequuntur, repellat beatae sunt fugiat odit ducimus neque temporibus maxime nisi ipsum facere culpa, vel corrupti laboriosam. Sint, esse quis!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur magnam consequuntur, repellat beatae sunt fugiat odit ducimus neque temporibus maxime nisi ipsum facere culpa, vel corrupti laboriosam. Sint, esse quis!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur magnam consequuntur, repellat beatae sunt fugiat odit ducimus neque temporibus maxime nisi ipsum facere culpa, vel corrupti laboriosam. Sint, esse quis!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur magnam consequuntur, repellat beatae sunt fugiat odit ducimus neque temporibus maxime nisi ipsum facere culpa, vel corrupti laboriosam. Sint, esse quis!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur magnam consequuntur, repellat beatae sunt fugiat odit ducimus neque temporibus maxime nisi ipsum facere culpa, vel corrupti laboriosam. Sint, esse quis!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur magnam consequuntur, repellat beatae sunt fugiat odit ducimus neque temporibus maxime nisi ipsum facere culpa, vel corrupti laboriosam. Sint, esse quis!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur magnam consequuntur, repellat beatae sunt fugiat odit ducimus neque temporibus maxime nisi ipsum facere culpa, vel corrupti laboriosam. Sint, esse quis!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur magnam consequuntur, repellat beatae sunt fugiat odit ducimus neque temporibus maxime nisi ipsum facere culpa, vel corrupti laboriosam. Sint, esse quis!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur magnam consequuntur, repellat beatae sunt fugiat odit ducimus neque temporibus maxime nisi ipsum facere culpa, vel corrupti laboriosam. Sint, esse quis!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur magnam consequuntur, repellat beatae sunt fugiat odit ducimus neque temporibus maxime nisi ipsum facere culpa, vel corrupti laboriosam. Sint, esse quis!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur magnam consequuntur, repellat beatae sunt fugiat odit ducimus neque temporibus maxime nisi ipsum facere culpa, vel corrupti laboriosam. Sint, esse quis!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur magnam consequuntur, repellat beatae sunt fugiat odit ducimus neque temporibus maxime nisi ipsum facere culpa, vel corrupti laboriosam. Sint, esse quis!",
		questionNumber: 10,
		options: ["Bombay", "Delfsdfdshi", "Gurugram", "Indore"]
	},
	{
		questionId: "test-2",
		quetionDescription: "fs fsaf very safsafsadfsf question, which is going to help a lot of students \nin getting ready for their exams",
		questionNumber: 10,
		options: ["Calcutsdfdsfta", "fdfHyd", "Blr", "NYC"]
	}
];

const Test = () => {
	const [userAnswers, setUserAnswers] = useState(new Map());
	const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
	const [english, setLanguage] = useState(false);
	const questionList = english ? questions : questionsHi;
	const question = questionList[currentQuestionIndex % 2];
	const [instructionOpen, setInstructionOpen] = useReducer((state) => !state, false);
	const [userResponse, setUserResponse] = useState(userAnswers.get(`test-${currentQuestionIndex + 1}`));
	const [remainingTime, setRemainingTime] = useState(7200);
	const [isMdOrGreater, setIsMdOrGreater] = useState(false);
	const questionHeight = `h-[${window.innerHeight * 3 / 5}px]`;
	
	const [questionStatus, setQuestionStatus] = useState(() => {
		const initialStatus = Array(100).fill(QuestionStatus.UNVISITED);
		initialStatus[0] = QuestionStatus.VISITED;
		return initialStatus;
	});

	// Function to check the window size and update the state
	const checkWindowSize = () => {
	  // Assuming 'md' breakpoint is 768px (you can adjust it based on your Tailwind config)
	  console.log(questionHeight);
		setIsMdOrGreater(window.innerWidth >= 1280);
	};
  
	useEffect(() => {
	  // Check the window size on initial load
		checkWindowSize();
		setNavigatorOpen(!isMdOrGreater);
  
	  // Add an event listener for window resize
		window.addEventListener('resize', checkWindowSize);
  
	  // Clean up the event listener on component unmount
		return () => {
		window.removeEventListener('resize', checkWindowSize);
		};
	}, []);
	const [navigatorOpen, setNavigatorOpen] = useState(!isMdOrGreater);
	// const [navigatorOpen, setNavigatorOpen] = useState(!isMdOrGreater);
	

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
	};

	function handleQuestionMFR() {
		setUserAnswers((prevResp) => prevResp.set(`test-${currentQuestionIndex+1}`, userResponse));
		setUserResponse(null);
		setCurrentQuestionIndex(currentQuestionIndex + 1);
		let copyStatus = questionStatus;
		if (copyStatus[currentQuestionIndex + 1] === QuestionStatus.UNVISITED)
			copyStatus[currentQuestionIndex + 1] = QuestionStatus.VISITED;
		copyStatus[currentQuestionIndex] = QuestionStatus.MARKED_FOR_REVIEW;
		setQuestionStatus(copyStatus);
	}

	function handleOptionClear () {
		setUserResponse(null);
		console.log(currentQuestionIndex);
		console.log("Status:", questionStatus[currentQuestionIndex]);
		if (questionStatus[currentQuestionIndex] === QuestionStatus.MARKED_FOR_REVIEW || questionStatus[currentQuestionIndex] === QuestionStatus.SUBMITTED) {
			let copyStatus = questionStatus;
			copyStatus[currentQuestionIndex] = QuestionStatus.VISITED;
			setQuestionStatus(copyStatus);
			// setUserAnswers((prevResp) => prevResp.delete(`test-${currentQuestionIndex+1}`));
			setUserAnswers((prevResp) => prevResp.set(`test-${currentQuestionIndex+1}`, null));
		}
	}

	function handleSaveAndNext() {
		setUserAnswers((prevResp) => prevResp.set(`test-${currentQuestionIndex+1}`, userResponse));
		setUserResponse(null);
		let statusCopy = questionStatus;
		setCurrentQuestionIndex(currentQuestionIndex + 1);
		statusCopy[currentQuestionIndex] = QuestionStatus.SUBMITTED;
		if (statusCopy[currentQuestionIndex + 1] === QuestionStatus.UNVISITED)
			statusCopy[currentQuestionIndex + 1] = QuestionStatus.VISITED;
		setQuestionStatus(statusCopy);
	}

	function formatTime (seconds) {
		const hours = Math.floor(seconds / 3600);
		const minutes = Math.floor((seconds % 3600) / 60);
		const secs = seconds % 60;
		return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
	}

	useEffect(() => {
		if (remainingTime <= 0)
			return;
		let interval = setInterval(() => {setRemainingTime((prev) => prev - 1)}, 1000);
		return () => clearInterval(interval);
	}, [remainingTime]);

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
		<div className="dark:bg-gray-800 bg-white h-screen grid grid-cols-4">
			{/* Questions */}
			<div className={`dark:text-white ${isMdOrGreater ? 'col-span-3' : 'col-span-4'} flex flex-col justify-between`}>
				<div >
					<div className="flex justify-between shadow-gray-500 p-4 shadow-md rounded-3xl mt-3 mx-3 bg-gray-100">
						<h1 className="font-bold text-2xl tracking-wide text-center">CGPSC PRELIMS TEST</h1>
						<div className="flex gap-2 items-center bg-blue-100 px-2 py-1 rounded-3xl">
							<ClockIcon className="h-8"/>
							<p>{formatTime(remainingTime)} </p>
						</div>
					</div>
					<div className={`md-900:mx-10 mt-10 overflow-y-scroll text-justify px-10 md-900:h-[500px] h-[700px] pb-4`}>
						<h2 className="text-lg font-bold mb-3">Question. No. {currentQuestionIndex + 1}</h2>
						{
							question.quetionDescription.split('\n').map((line, idx) => (
								<p key={idx} className={`dark:text-gray-200 text-gray-800 `}>
									{line}
								</p>
							))
						}
						<div className="flex flex-col mt-10 gap-2 w-full">
								{
									question.options.map((option, idx) => (
										<label key={idx} className="inline-flex gap-4 px-2 py-1 items-center hover:bg-gray-200">
											<input
											type="radio"
											name={`question-${idx}`}
											className="form-radio text-secondary"
											value={option}
											checked={
												(questionStatus[currentQuestionIndex] === QuestionStatus.SUBMITTED || questionStatus[currentQuestionIndex] === QuestionStatus.MARKED_FOR_REVIEW) ? userAnswers.get(`test-${currentQuestionIndex + 1}`) === option : userResponse === option
											}
											onChange={(e) => handleOptionChange(option)}
											/>
											{option}
										</label>
									))
								}
						</div>
					</div>
				</div>
				<div className="">
					{(questionStatus[currentQuestionIndex] === QuestionStatus.MARKED_FOR_REVIEW || questionStatus[currentQuestionIndex] === QuestionStatus.SUBMITTED) && (<p className="text-red-500 px-10">Respone is saved({userAnswers.get(`test-${currentQuestionIndex+1}`)}).</p>)}
					<div className="p-4 pt-1 overflow-hidden bg-blue-100">
						{/* <div className="flex gap-5 justify-between items-center">
							<button className="bg-gray-600 p-3 font-bold rounded-md w-fit text-white" onClick={() => handleArrowKey(-1)}>&larr;</button>
							<button className="bg-gray-600 p-3 font-bold rounded-md w-fit text-white" onClick={() => handleArrowKey(1)}>&rarr;</button>
						</div> */}
						<div className={`flex md:flex-row flex-col gap-5 justify-between items-center mt-5 md:container text-white font-light`}>
							<div className="flex gap-3">
								<button className="bg-yellow-400 p-2 rounded-md " onClick={handleQuestionMFR}>Marked for review & Next</button>
								<button className="bg-red-500 px-4 rounded-md " onClick={handleOptionClear}>Clear</button>
							</div>
							<button className="bg-green-500 p-2 rounded-md " onClick={handleSaveAndNext}>Save & Next</button>
						</div>
					</div>
					</div>
				</div>
			{/* Question panel */}
			<TestNavigator userAnswers={userAnswers} setCurrentQuestionNumber={setCurrentQuestionIndex} questionStatus={questionStatus} setQuestionStatus={setQuestionStatus} currentQuestion={currentQuestionIndex} setInstructions={setInstructionOpen}
			setLanguage={setLanguage}
			setNavigatorOpen={setNavigatorOpen}
			/>
			{/* Small media question floater */}
			
		</div>
	)
}

export default Test;