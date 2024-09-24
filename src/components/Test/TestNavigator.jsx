import React, { useState } from "react";	
import { BACKEND_API, QuestionStatus } from "../../utility/Constants";
import axios from "axios";
import { XMarkIcon } from "@heroicons/react/24/outline";
import {Dialog,DialogPanel} from '@headlessui/react'

const borderMap = new Map([
	['UNVISITED', 'rounded-t-md bg-gray-300'],
	['VISITED', 'rounded-b-md bg-red-500'],
	['SUBMITTED', 'bg-green-500 rounded-lg'],
	['MARKED_FOR_REVIEW', 'rounded-lg bg-yellow-400'],
])

const TestNavigator = ({userAnswers, setCurrentQuestionNumber, questionStatus, setQuestionStatus, currentQuestion, setInstructions}) => {
	const underReview = questionStatus.filter((status) => status === QuestionStatus.MARKED_FOR_REVIEW).length;
	const submitted = questionStatus.filter((status) => status === QuestionStatus.SUBMITTED).length;
	const unvisited = questionStatus.filter((status) => status === QuestionStatus.UNVISITED).length;
	const visited = 100 - underReview - submitted - unvisited;
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	async function handleSubmitAnswers () {
		const response = await axios.post(BACKEND_API + "/mcq/evaluate", Array.from(userAnswers));
		if (response.status === 200) {
			alert("yay");
		} else {
			alert("noo")
		}
	}

	return (
		<>
			<div className="hidden md:col-start-3 md:flex flex-col justify-between h-full shadow-2xl z-10 shadow-black">
				{/* Heading */}
				<h1 className="text-center text-3xl text-white font-bold my-10">TEST NAVIGATOR</h1>
				{/* Question markers */}
				<div className="grid grid-cols-2 items-center gap-4 mx-5">
					<Markers number={unvisited} status={QuestionStatus.UNVISITED} label={true} />
					<Markers number={submitted} status={QuestionStatus.SUBMITTED } label={true}/>
					<Markers number={visited} status={QuestionStatus.VISITED} label={true} />
					<Markers number={underReview} status={QuestionStatus.MARKED_FOR_REVIEW} label={true}/>
				</div>
				{/* Question navigator */}
				<div className="overflow-y-scroll grid grid-cols-3 md-900:grid-cols-4 items-center justify-center h-[400px] gap-2 border m-2 p-2">
					{
						questionStatus.map((status, idx) => (
							<button  key={idx} onClick={() => {
								let copyStatus = questionStatus;
								if (copyStatus[idx] === QuestionStatus.UNVISITED) {
									copyStatus[idx] = QuestionStatus.VISITED;
									setQuestionStatus(copyStatus);
								}
								setCurrentQuestionNumber(idx);
							}} className="cursor-pointer">
								<Markers number={idx+1} status={status} selected={idx === currentQuestion}/>
							</button>
						))
					}
				</div>
				{/* Submit / instructions */}
				<div className="container flex flex-col gap-5 mt-4">
					<button className="bg-blue-500 w-full p-3 hover:bg-blue-400 rounded-md" onClick={handleSubmitAnswers}>Submit</button>
					<button className="bg-red-500 w-full p-3 hover:bg-red-400 rounded-md" onClick={setInstructions}>Instructions</button>
				</div>
			</div>
			<button className="fixed md:hidden -right-3 top-1/2 rounded-full px-2 py-5 bg-gray-200 text-gray-600" onClick={() => setMobileMenuOpen(true)}>&larr;</button>
			<Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
				<div className="fixed inset-0 z-10" />
				<DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-gray-700 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
					<div className="flex justify-end">
						<button
                            type="button"
                            onClick={() => setMobileMenuOpen(false)}
                            className="-m-2.5 rounded-md p-2.5 text-gray-200"
                            >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                        </button>
					</div>
					<div className="shadow-2xl z-10 shadow-black flex flex-col justify-between h-full">
						{/* Heading */}
							<h1 className="text-center text-3xl text-white font-bold my-10">TEST NAVIGATOR</h1>
							{/* Question markers */}
							<div className="grid grid-cols-2 items-center gap-4 mx-5">
								<Markers number={unvisited} status={QuestionStatus.UNVISITED} label={true} />
								<Markers number={submitted} status={QuestionStatus.SUBMITTED } label={true}/>
								<Markers number={visited} status={QuestionStatus.VISITED} label={true} />
								<Markers number={underReview} status={QuestionStatus.MARKED_FOR_REVIEW} label={true}/>
							</div>
							{/* Question navigator */}
							<div className="overflow-y-scroll grid grid-cols-3 md-900:grid-cols-4 items-center justify-center h-[300px] gap-2 border m-2 p-2">
								{
									questionStatus.map((status, idx) => (
										<button  key={idx} onClick={() => {
											let copyStatus = questionStatus;
											if (copyStatus[idx] === QuestionStatus.UNVISITED) {
												copyStatus[idx] = QuestionStatus.VISITED;
												setQuestionStatus(copyStatus);
											}
											setCurrentQuestionNumber(idx);
										}} className="cursor-pointer">
											<Markers number={idx+1} status={status} selected={idx === currentQuestion}/>
										</button>
									))
								}
							</div>
							{/* Submit / instructions */}
							<div className="container flex flex-col gap-5 mt-4">
								<button className="bg-blue-500 w-full p-3 hover:bg-blue-400 rounded-md" onClick={handleSubmitAnswers}>Submit</button>
								<button className="bg-red-500 w-full p-3 hover:bg-red-400 rounded-md mb-2" onClick={setInstructions}>Instructions</button>
							</div>
					</div>
                    
                </DialogPanel>
            </Dialog>
		</>
	)
}

const Markers = ({ number , status , label=false , selected = false}) => {
	return (
		<div className={`flex items-center gap-4 ${label ? '' : ' justify-center'} text-center`}>
			<p className={`py-2 px-4 w-[50px] ${selected ? 'bg-white text-gray-600 rounded-full shadow-md shadow-black' : borderMap.get(status)}`}>{number}</p>
			<p className={`${label ? 'block' : 'hidden'} capitalize text-white text-center`}>{status.toLowerCase().split('_').join(' ')}</p>
		</div>
	)
}

export default TestNavigator;