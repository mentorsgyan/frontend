import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { BACKEND_API } from "../../utility/Constants";

const UserResponse = () => {

	const location = useLocation();

	const language = location.state ? location.state.language : "हिन्दी";
	const userResponse = location.state ? location.state.userAnswers : undefined
	
	const { number } = useParams();
	
	const [questionJson, setQuestionJson] = useState({english: [], hindi: []});
	const questions = language === "हिन्दी" ? questionJson.hindi : questionJson.english;
	

	function returnOption(idx) {
		if (idx === 0)
			return 'A';
		else if (idx === 1)
			return 'B';
		else if (idx === 2)
			return 'C';
		else return 'D';
	}

	useEffect(() => {
		fetch(`${BACKEND_API}/test-series?testNumber=2`)
		.then((response) => response.json())
		.then((data) => {
			setQuestionJson(data);
			console.log(userResponse[data.english[0].questionId]);
		});
	}, [])

	return (
		<div>
			<div className="container mt-10">
					
					{
						questions?.map((question, idx) => (
							<>
								<div key={idx} className="flex gap-4 my-2 border-t-2">
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
								<div className="flex flex-col mt-10 gap-2 w-full">
									{
										question.options?.map((option, oidx) => {
											const questionId = question.questionId;
											const marked = userResponse !== undefined && userResponse.get(questionId) !== undefined ? userResponse.get(questionId) === option : false;
											return (
											<label key={oidx} className="inline-flex gap-4 px-2 py-1 items-center">
												
												{ returnOption(oidx)}. {option} {marked ? '✔' : ''}
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