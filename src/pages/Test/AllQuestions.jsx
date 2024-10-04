import { XMarkIcon } from "@heroicons/react/24/outline";
import React from "react";

const AllQuestions = ({questions=[], setAllQuestions}) => {

	function returnOption(idx) {
		if (idx === 0)
			return 'A';
		else if (idx === 1)
			return 'B';
		else if (idx === 2)
			return 'C';
		else return 'D';
	}

	return (
		<div className="h-screen overflow-y-scroll">
				<XMarkIcon className="fixed h-8 right-3 top-2 bg-secondary cursor-pointer" onClick={() => setAllQuestions(false)}/>
				<div className="container mt-10">
					
					{
						questions.map((question, idx) => (
							<>
								<div key={idx} className="flex gap-4 my-2 border-t-2 dark:text-gray-200">
									<h1>{idx + 1}.</h1>
									<div>
										{
											question.quetionDescription.split('\n').map((line, qId) => (
													<p key={qId} className={`dark:text-gray-200 text-gray-800 `}>
														{line}
													</p>
											))
										}
									</div>
								</div>
								<div className="flex flex-col mt-10 gap-2 w-full">
									{
										question.options.map((option, oidx) => (
											<label key={oidx} className="inline-flex gap-4 px-2 py-1 items-center dark:text-gray-200">
												
												{ returnOption(oidx)}. {option}
											</label>
										))
									}
								</div>
							</>
						))
					}
					
				</div>
		</div>
	)
}

export default AllQuestions;