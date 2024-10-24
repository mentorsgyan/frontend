import React, { useEffect, useState } from "react";	
import { BACKEND_API, QuestionStatus } from "../../utility/Constants";
import axios from "axios";
import { XMarkIcon } from "@heroicons/react/24/outline";
import {Dialog,DialogPanel} from '@headlessui/react'
import { LanguageIcon } from "@heroicons/react/24/solid";
import { useNavigate, useParams } from "react-router-dom";

const borderMap = new Map([
	['UNVISITED', 'rounded-t-md bg-gray-300'],
	['VISITED', 'rounded-b-md bg-red-500'],
	['SUBMITTED', 'bg-green-500 rounded-lg'],
	['MARKED_FOR_REVIEW', 'rounded-lg bg-yellow-400'],
])

const TestNavigator = ({state, dispatch, setNavigatorOpen, setSelectionRequired, phoneNumber}) => {
	const underReview = state.underReview;
	const submitted = state.submitted;
	const visited = state.visited;
	const unvisited = 100 - underReview - submitted - visited;
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	const [isOpen, setIsOpen] = useState(false);

	const updateLanguage = (e) => {
		dispatch({type: "LANGUAGE", payload: e.target.value === "English"});
	}

	const openModal = () => {
		setIsOpen(true);
	};
	const closeModal = () => {
		setIsOpen(false);
	};

	// Function to check the window size and update the state
	const checkWindowSize = () => {
	  // Assuming 'md' breakpoint is 768px (you can adjust it based on your Tailwind config)
		dispatch({type: "WINDOW_WIDTH", payload: window.innerWidth >= 1280});
		setMobileMenuOpen(state.isMdOrGreater);
	};
  
	useEffect(() => {
	  // Check the window size on initial load
		checkWindowSize();
  
	  // Add an event listener for window resize
		window.addEventListener('resize', checkWindowSize);
  
	  // Clean up the event listener on component unmount
		return () => {
		window.removeEventListener('resize', checkWindowSize);
		};
	}, []);

	return (
		<>
			<button className="fixed -right-3 px-4 py-4 top-1/2 rounded-full bg-gray-200 text-gray-600" 
			onClick={() => {
				setMobileMenuOpen(true);
				setNavigatorOpen(true);
				setIsOpen(false);
			}}>&larr;</button>
			<Dialog static={state.isMdOrGreater || (!state.isMdOrGreater && isOpen)} open={mobileMenuOpen} 
			onClose={() => {
					setMobileMenuOpen(false);
					if (!state.isMdOrGreater)
						setNavigatorOpen(false);
				}}>
				<div className="fixed z-10 inset-0 pointer-events-none" />
				<DialogPanel className="fixed inset-y-0 right-0 w-fit overflow-y-auto bg-blue-100 dark:bg-gray-900 px-2  sm:max-w-sm">
					
					<div className="bg-blue-50 dark:bg-gray-800 z-10 flex flex-col justify-between h-full py-4">
						{/* Heading */}
						<div className="flex items-center justify-between mx-4">
								<div className="flex gap-2 items-center md-900:mt-0 mt-10">
									<LanguageIcon className="dark:text-white h-6"/>
									<select value={state.english ? "English" : "हिन्दी"} onChange={(e) => updateLanguage(e)} className="text-sm">
										<option value="हिन्दी">हिन्दी</option>
										<option value="English">English</option>
									</select>
								</div>
							<div className="flex justify-end">
								<button
									type="button"
									onClick={() => {
										setMobileMenuOpen(false);
										setNavigatorOpen(false);
										setIsOpen(false);
									}}
									className="-m-2.5 rounded-md p-2.5 dark:text-gray-200 xl:hidden"
									>
									<span className="sr-only">Close menu</span>
									<XMarkIcon aria-hidden="true" className="h-6 w-6" />
								</button>
							</div>
						</div>
							<div className="dark:bg-gray-300 bg-gray-400 p-0.5"/>
							{/* Question markers */}
							<div className="grid grid-cols-2 items-center gap-4 mx-5">
								<Markers number={unvisited} status={QuestionStatus.UNVISITED} label={true} />
								<Markers number={submitted} status={QuestionStatus.SUBMITTED } label={true}/>
								<Markers number={visited} status={QuestionStatus.VISITED} label={true} />
								<Markers number={underReview} status={QuestionStatus.MARKED_FOR_REVIEW} label={true}/>
							</div>
							{/* Question navigator */}
							<div className="overflow-y-scroll grid grid-cols-5 h-max-md:grid-cols-6 items-start h-[300px] gap-2 border m-2 p-2">
								{
									state.questionStatus.map((status, idx) => (
										<button  key={idx} onClick={() => {
											if (state.questionStatus[idx] === QuestionStatus.UNVISITED)
												dispatch({type: "QUESTION_STATUS", payload: {idx, status: QuestionStatus.VISITED}});
											dispatch({type: "QUESTION_IDX", payload: idx})
											setSelectionRequired(false);
										}} className="cursor-pointer">
											<Markers number={idx+1} status={status} selected={idx === state.currentQuestionIndex}/>
										</button>
									))
								}
							</div>
							{/* Submit / instructions */}
							<div className="container flex h-md:flex-col gap-5 h-md:mt-4 items-center text-white">
								<button className="bg-blue-400 w-full p-1 h-md:p-3 hover:bg-blue-500 rounded-md" onClick={openModal}>Submit</button>
								<button className="bg-red-500 w-full p-1 h-md:p-3 hover:bg-red-600 rounded-md h-md:mb-2" onClick={() => {dispatch({type: "TOGGLE_INSTRUCTIONS"})}}>Instructions</button>
							</div>
							<button className="bg-green-500 container w-full p-1 h-md:p-3 hover:bg-green-400 rounded-md h-md:mb-2" 
							onClick={() => {
								dispatch({type: "ALL_QUESTIONS_VISIBLE"})
							}}>Show All Questions</button>
					</div>
					
				</DialogPanel>
				{(isOpen || state.timerStatus === "EXPIRED") && 
				<SubmitPopover 
				submitted={submitted} 
				visited={visited} 
				unvisited={unvisited} 
				underReview={underReview} 
				closeModal={closeModal} 
				state={state}
				dispatch={dispatch}
				phoneNumber={phoneNumber}/>}
			</Dialog>
		</>
	)
}

const SubmitPopover = ({submitted, unvisited, underReview, visited, closeModal, state, dispatch, phoneNumber}) => {
	const { number } = useParams();
	const [submitStarted, setSubmitStarted] = useState(false);
	const navigate = useNavigate();
	async function submitTest() {
		setSubmitStarted(true);
		await axios.post(BACKEND_API + `/test-series/saveAnswers?phoneNumber=${phoneNumber}&testNumber=${number}`, Array.from(state.userAnswers));
		const dataToSend = {
			submitted,
			unvisited, 
			underReview, 
			visited,
			language: state.english ? "English" : "हिन्दी",
			userAnswers: state.userAnswers
		}
		navigate(`/test/completed/${number}`, {state: dataToSend});
	}
	  return (
			<div className="fixed inset-0 flex items-center justify-center z-50">
			  {/* Backdrop */}
			  <div 
				className="absolute inset-0 bg-black opacity-50"
				onClick={closeModal}
			  ></div>
			  
			  {/* Modal content */}
			  <div className="relative bg-white p-6 rounded-lg shadow-lg z-10 w-fit">
				<h2 className="text-xl font-semibold mb-4">Test Summary</h2>
				
				<Report submitted={submitted} unvisited={unvisited} underReview={underReview} visited={visited}/>
				<div className={`flex ${state.timerStatus !== "EXPIRED" ? 'justify-between' : 'justify-end'}`}>
					{
						state.timerStatus !== "EXPIRED" &&
						<button 
						onClick={closeModal} 
						className="px-4 py-2 bg-green-500 text-white rounded"
						>
						Continue Test
						</button>
					}
					<button 
					disabled={submitStarted}
					onClick={submitTest}
					className={`px-4 py-2 bg-red-500 text-white rounded ${submitStarted ? 'animate-pulse' : ''}`}
					>
					{submitStarted ? 'Saving Answers...' : 'End Test'}
					</button>
				</div>
			  </div>
			</div>
	  );
}

export const Report = ({submitted, unvisited, underReview, visited}) => {
	return (
		<>
			<div className="md-900:grid grid-cols-5 text-center my-4 hidden bg-white">
				<h1 className="bg-blue-100 p-2 font-semibold">Total Questions</h1>
				<h1 className="bg-blue-100 p-2 font-semibold">Visited</h1>
				<h1 className="bg-blue-100 p-2 font-semibold">Submitted</h1>
				<h1 className="bg-blue-100 p-2 font-semibold">Marked for Review</h1>
				<h1 className="bg-blue-100 p-2 font-semibold">Unvisited</h1>
				<p className="py-2 border">100</p>
				<p className="py-2 border">{visited}</p>
				<p className="py-2 border">{submitted}</p>
				<p className="py-2 border">{underReview}</p>
				<p className="py-2 border">{unvisited}</p>
			</div>
			<div className="grid grid-cols-2 text-center my-4 md-900:hidden bg-white">
				<h1 className="bg-blue-100 p-2 font-semibold col-span-2">Total Questions</h1>
				<p className="py-2 border col-span-2">100</p>
				<h1 className="bg-blue-100 p-2 font-semibold">Visited</h1>
				<h1 className="bg-blue-100 p-2 font-semibold">Submitted</h1>
				<p className="py-2 border">{visited}</p>
				<p className="py-2 border">{submitted}</p>
				<h1 className="bg-blue-100 p-2 font-semibold">Marked for Review</h1>
				<h1 className="bg-blue-100 p-2 font-semibold">Unvisited</h1>
				<p className="py-2 border">{underReview}</p>
				<p className="py-2 border">{unvisited}</p>
			</div>
		</>
	)
}

const Markers = React.memo(({ number , status , label=false , selected = false}) => {
	return (
		<div className={`flex h-max-md:text-xs items-center  ${label ? '' : ' justify-center'}`}>
			<p className={`py-1 px-2.5 h-md:w-[50px] ${selected ? 'dark:bg-white bg-primary text-center text-gray-600 rounded-full shadow-md dark:shadow-black' : borderMap.get(status)}`}>{number}</p>
			<p className={`${label ? 'block' : 'hidden'} capitalize dark:text-white text-sm`}>{status.toLowerCase().split('_').join(' ')}</p>
		</div>
	)
})

export default React.memo(TestNavigator);