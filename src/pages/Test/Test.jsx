import React, { act, useEffect, useMemo, useReducer, useState } from "react";
import TestNavigator from "../../components/Test/TestNavigator";
import { BACKEND_API, QuestionStatus } from "../../utility/Constants";
import TestInstructions from "../../components/Test/TestInstructions";
import { ClockIcon } from "@heroicons/react/24/outline";
import { questionsEnglish, questionsHindi } from "../../utility/defaultTest";
import { Navigate, useLocation, useParams, useSearchParams } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase.config";
import AllQuestions from "./AllQuestions";

const Test = () => {
	const { number } = useParams();

	const location = useLocation();
	const validSession = location.state ? location.state.valid : false;
	const [isAdmin, setIsAdmin] = useState(false);

	const [searchParams] = useSearchParams();
	const phoneNumber = searchParams.get('phoneNumber');

	const initialStatus = Array(100).fill(QuestionStatus.UNVISITED);
	initialStatus[0] = QuestionStatus.VISITED;	

	const windowState = {
		instructionOpen: true,
		allQuestions: false,
		agreedToInstructions: false,
		isMdOrGreater: false,
		english: false,
		currentQuestionIndex: 0,
		questionJson: {english: [], hindi: []},
		questionStatus: initialStatus,
		timerStatus: "RUNNING",
		remainingTime: 7200,
		// TODO: Design any better method
		underReview: 0,
		submitted: 0,
		visited: 1,
		userAnswers: new Map()
	}
	
	

	const windowReducer = (state, action) => {
		switch(action.type) {
			case "TOGGLE_INSTRUCTIONS":
				return {
					...state,
					instructionOpen: !state.instructionOpen
				}
			case "ALL_QUESTIONS_VISIBLE":
				return {
					...state,
					allQuestions: !state.allQuestions
				}
			case "AGREED_TO_INSTRUCTIONS":
				return {
					...state,
					agreedToInstructions: !state.agreedToInstructions
				}
			case "WINDOW_WIDTH":
				return {
					...state,
					isMdOrGreater: action.payload
				}
			case "LANGUAGE":
				if (action.payload !== undefined) {
					return {
						...state,
						english: action.payload
					}
				}
				return {
					...state,
					english: !state.english
				}

			case "QUESTION_IDX":
				if (action.payload !== undefined) {
					return {...state, currentQuestionIndex: action.payload};
				}
				if (state.currentQuestionIndex + 1 >= state.questionJson.english.length)
					return {...state, currentQuestionIndex: 0};
				return {...state, currentQuestionIndex: state.currentQuestionIndex + 1};

			case "QUESTION_JSON":
				return {
					...state,
					questionJson: action.payload
				}
		
			case "QUESTION_STATUS":
				let visited = 0;
				let mfr = (action.payload.status === QuestionStatus.MARKED_FOR_REVIEW ? 1 : 0);
				let submitted = (action.payload.status === QuestionStatus.SUBMITTED ? 1 : 0);
				let copyStatus = state.questionStatus;
				if (action.payload.markNextVisited !== undefined
					&& action.payload.markNextVisited === true) {
					copyStatus[action.payload.idx + 1] = QuestionStatus.VISITED;
					visited += 1;
				}
				copyStatus[action.payload.idx] = action.payload.status;

				if (action.payload.previousMarking === QuestionStatus.MARKED_FOR_REVIEW)
					mfr -= 1;
				else if (action.payload.previousMarking === QuestionStatus.SUBMITTED) {
					submitted -= 1;
				}

				if (action.payload.status === QuestionStatus.VISITED)
					visited += 1;

				return {
					...state,
					questionStatus: copyStatus,
					underReview: state.underReview + mfr,
					visited: state.visited + visited,
					submitted: state.submitted + submitted,
				}
			case "TIMER_STATUS":
				return {
					...state,
					timerStatus: action.payload
				}
			
			case "REMAINING_TIME":
				if (action.payload !== undefined) {
					return {...state, remainingTime: action.payload}
				}
				else if (state.remainingTime - 1 >= 0) {
					return {...state, remainingTime: state.remainingTime - 1}
				}
				return state;
			
			case "USER_ANSWERS":
				let ansCopy = state.userAnswers;
				ansCopy.set(action.payload.questionId, action.payload.userChoice)
				return {...state, userAnswers: ansCopy}
			default:
				return state;
		}
	}

	const [state, dispatch] = useReducer(windowReducer, windowState);

	const questionList = useMemo(() => {return state.english ? state.questionJson.english : state.questionJson.hindi}, [state.english, state.questionJson]);
	const question = useMemo(() => {return questionList[state.currentQuestionIndex]}, [state.currentQuestionIndex, questionList]);

	const [userResponse, setUserResponse] = useState(null);
	const [selectionRequired, setSelectionRequired] = useState(false);

	// Function to check the window size and update the state
	const checkWindowSize = () => {
	  // Assuming 'md' breakpoint is 768px (you can adjust it based on your Tailwind config)
	  	dispatch({type: "WINDOW_WIDTH", payload: window.innerWidth >= 1280})
	};

	// User fetching from e-mail
	useEffect(() => {
        const subscription = onAuthStateChanged(auth, (user) => {
            if (user) {
				if (user.email === "mentorsgyan@gmail.com") {
					setIsAdmin(true);
				}
			}
        })
        return () => subscription();
    }, [auth])

	const handlePopState = (event) => {
		// Show confirmation dialog
		const userConfirmed = confirm("कृपया रीफ़्रेश न करें या बैक बटन न दबाएँ। आपके उत्तर सहेजे नहीं जायेंगे।");
		
		if (userConfirmed) {
		  // Allow navigation (popstate is executed automatically)
		} else {
		  // Prevent navigation by pushing the current state back
		  // Push the same route back to "undo" the popstate
		  history.go(1);  // Moves the user forward, effectively canceling the back navigation
		}
	  };
  
	useEffect(() => {
		// Fetching question papers & start time
		fetch(`${BACKEND_API}/test-series?testNumber=${number}`)
		.then((response) => response.json())
		.then((data) => {
			dispatch({type: "QUESTION_JSON", payload: data})
		});

	  // Check the window size on initial load
		checkWindowSize();
		setNavigatorOpen(!windowReducer.isMdOrGreater);
  
	  // Add an event listener for window resize
		window.addEventListener('resize', checkWindowSize);

		const unloadCallback = (event) => {
			
			let interval = setInterval(() => {
				dispatch({type: "REMAINING_TIME"})
					if (state.remainingTime <= 0) {
						dispatch({type: "TIMER_STATUS", payload: "EXPIRED"})
						return clearInterval(interval);
					}
					else if (state.remainingTime <= 300)
					dispatch({type: "TIMER_STATUS", payload: "LAST_FIVE"})
				}, 1000);
		  event.preventDefault();
		  event.returnValue = "कृपया रीफ़्रेश न करें या बैक बटन न दबाएँ। आपके उत्तर सहेजे नहीं जायेंगे।";
		  return "";
		};


	  
		window.addEventListener("beforeunload", unloadCallback);
		window.addEventListener('popstate', handlePopState);
	  // Clean up the event listener on component unmount
		return () => {
		window.removeEventListener('resize', checkWindowSize);
		window.removeEventListener('popstate', handlePopState);
		window.removeEventListener("beforeunload", unloadCallback);
		};
	}, []);
	const [navigatorOpen, setNavigatorOpen] = useState(!windowReducer.isMdOrGreater);
	
	const getMapFromLocalStorage = () => {
		const mapAsString = localStorage.getItem("answers");
		if (mapAsString) {
		  // Convert the string back to an array and then to a Map
		  return new Map(JSON.parse(mapAsString));
		}
		return new Map(); // Return an empty Map if nothing was found
	};

	const handleOptionChange = (option) => {
		setSelectionRequired(false);
		setUserResponse(option);
	};

	function handleQuestionMFR() {
		if (userResponse === null || userResponse === undefined) {
			dispatch({type: "QUESTION_IDX"})
		} else {
			dispatch({type: "USER_ANSWERS", payload: {
				questionId: question.questionId, userChoice: userResponse
			}})
			setUserResponse(null);
			dispatch({type: "QUESTION_IDX"});
		}
		dispatch({type: "QUESTION_STATUS", payload: {
			idx: state.currentQuestionIndex, 
			status: QuestionStatus.MARKED_FOR_REVIEW,
			markNextVisited: state.questionStatus[state.currentQuestionIndex + 1] === QuestionStatus.UNVISITED
		}});
	}

	function handleSaveAndNext() {
		if (userResponse !== null && userResponse !== undefined) {
			dispatch({type: "USER_ANSWERS", payload: {
				questionId: question.questionId, userChoice: userResponse
			}})
			setUserResponse(null);
		}
		dispatch({type: "QUESTION_IDX"});
		dispatch({type: "QUESTION_STATUS", payload: {
			idx: state.currentQuestionIndex, 
			status: userResponse !== null && userResponse !== undefined ? QuestionStatus.SUBMITTED : QuestionStatus.VISITED,
			markNextVisited: state.questionStatus[state.currentQuestionIndex + 1] === QuestionStatus.UNVISITED
		}});
	}

	function handleOptionClear () {
		setUserResponse(null);
		setSelectionRequired(false);
		if (state.questionStatus[state.currentQuestionIndex] === QuestionStatus.MARKED_FOR_REVIEW 
			|| state.questionStatus[state.currentQuestionIndex] === QuestionStatus.SUBMITTED) {
			dispatch({type: "QUESTION_STATUS", payload: {idx: state.currentQuestionIndex, status: QuestionStatus.VISITED}});
			dispatch({type: "USER_ANSWERS", payload: {
				questionId: question.questionId, userChoice: null, previousMarking: state.questionStatus[state.currentQuestionIndex]
			}})
		}
	}

	function formatTime (seconds) {
		const hours = Math.floor(seconds / 3600);
		const minutes = Math.floor((seconds % 3600) / 60);
		const secs = seconds % 60;
		return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
	}

	useEffect(() => {
		if (state.remainingTime <= 0) {
			dispatch({type: "TIMER_STATUS", payload: "EXPIRED"})
			return;
		}
		let interval = setInterval(() => {
			dispatch({type: "REMAINING_TIME"})
			if (state.remainingTime <= 300)
				dispatch({type: "TIMER_STATUS", payload: "LAST_FIVE"})
		}, 1000);
		return () => clearInterval(interval);
	}, [state.remainingTime]);

	if (state.allQuestions === true) {
		return (<AllQuestions 
			questions={questionList} 
			setAllQuestions={() => dispatch({type: "ALL_QUESTIONS_VISIBLE"})}
			/>)
	}

	function handleSetInstructions (instructionWindowState) {
		dispatch({type: "TOGGLE_INSTRUCTIONS", action: instructionWindowState});
	}

	//   const handleNextQuestion = () => {
	// 	dispatch({ type: "SET_CURRENT_QUESTION_INDEX", payload: state.currentQuestionIndex + 1 });
	// };

	// console.log("Window Reducer: ", windowReducer);
	if (state.instructionOpen || !state.agreedToInstructions) {
		return (
			<>
				{ validSession || isAdmin ? (
						<TestInstructions 
						dispatch={dispatch}
						state={state}/>
					) : <Navigate to={"/test/login"}/>
				}
			</>
		);
	}


	return (
		<>
			{
				validSession || isAdmin ? (
					<div className="dark:bg-gray-800 bg-white h-screen grid grid-cols-4">
						{/* Questions */}
						<div className={`dark:text-white ${state.isMdOrGreater ? 'col-span-3' : 'col-span-4'} flex flex-col justify-between`}>
							<div >
								<div className="flex justify-between shadow-gray-500 p-4 shadow-md rounded-3xl mt-3 mx-3 bg-gray-100 dark:text-black">
									<h1 className="font-bold text-2xl tracking-wide text-center">CGPSC PRELIMS TEST</h1>
									<div className={`${state.timerStatus === "RUNNING" ? 'bg-blue-100' : 'bg-red-200'} flex gap-2 items-center xl:mx-10 px-2 py-1 rounded-3xl`}>
										<ClockIcon className="h-8"/>
										<p>{formatTime(state.remainingTime)} </p>
									</div>
								</div>
								<div className={`md-900:mx-10 mt-10 overflow-y-scroll text-justify px-10 md-900:h-[500px] h-[500px] pb-2`}>
									<h2 className="text-lg font-bold mb-3">{state.english ? "Question No. " : "प्रश्न क्रमांक "} {state.currentQuestionIndex + 1}</h2>
									{
										question?.quetionDescription.split('\n').map((line, idx) => (
											<p key={idx} className={`dark:text-gray-200 text-gray-800 `}>
												{line}
											</p>
										))
									}
									<div className="flex flex-col mt-10 gap-2 w-full">
											{
												question?.options.map((option, idx) => (
													<label key={idx} className="inline-flex gap-4 px-2 py-1 items-center hover:bg-gray-200 dark:hover:bg-gray-600">
														<input
														type="radio"
														name={`question-${idx}`}
														className="form-radio text-secondary"
														value={option}
														disabled={state.timerStatus === "EXPIRED"}
														// checked={
														// 	(state.questionStatus[state.currentQuestionIndex] === QuestionStatus.SUBMITTED 
														// 		|| state.questionStatus[state.currentQuestionIndex] === QuestionStatus.MARKED_FOR_REVIEW) ? state.userAnswers.get(question.questionId) === option : userResponse === option
														// }
														checked={
															(state.userAnswers.get(question.questionId) !== undefined) ? state.userAnswers.get(question.questionId) === option : userResponse === option
														}
														onChange={(e) => {handleOptionChange(option);}}
														/>
														{option}
													</label>
												))
											}
									</div>
								</div>
								{selectionRequired && (<p className="bg-red-500/30 text-center mb-5 w-fit mx-10 px-5 py-2 rounded-lg">{windowReducer.english ? 'Please select an option!' : 'कृपया एक विकल्प चुनें!'}</p>)}
							</div>
							<div className="">
								{((state.questionStatus[state.currentQuestionIndex] === QuestionStatus.MARKED_FOR_REVIEW && selectionRequired)
									|| state.questionStatus[state.currentQuestionIndex] === QuestionStatus.SUBMITTED) && (<p className="text-red-500 px-10">Respone is saved({state.userAnswers.get(question.questionId)}).</p>)}
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
										{/* <button className="bg-green-500 p-2 rounded-md " onClick={() => {console.log(state.userAnswers.get("19101"))}}>Save & Next</button> */}
									</div>
								</div>
								</div>
							</div>
						{/* Question panel */}
						<TestNavigator
						state={state}
						dispatch={dispatch}
						setNavigatorOpen={setNavigatorOpen}
						setSelectionRequired={setSelectionRequired}
						phoneNumber={phoneNumber}
						/>
						{/* Small media question floater */}
						
					</div>
				) : (<Navigate to={"/test/login"}/>)
			}
			
		</>
	)
}

export default React.memo(Test);