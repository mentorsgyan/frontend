import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import PaginatedComponent from "../../components/PaginatedComponent/PaginatedComponent";
import { Navigate, useLocation, useSearchParams } from "react-router-dom";
import {BACKEND_API} from "../../utility/Constants";

const TestLanding = () => {
	const [searchParams] = useSearchParams();
	const location = useLocation();
	const correctPath = location.state ? location.state.loggedIn : false;
	const phoneNumber = searchParams.get('phoneNumber');

	const [questionPaperList, setQuestionPaperList] = useState({pastTests: [], currentTests: [], upcomingTests: []});

	useEffect(() => {
		fetch(`${BACKEND_API}/test-series/fetchTests?phoneNumber=${phoneNumber}`)
		.then((resp) => resp.json())
		.then((data) => setQuestionPaperList(data));
	}, [])

	return (
		<>
		{
			correctPath ? (
				<>
					<Navbar sticky={false} showBanner={false}/>
					<div className="flex flex-col gap-10 container mt-10 items-center font-mukta">

						<p className="text-center bg-green-200/50 text-lg w-fit py-3 px-6 rounded-lg">हमारा सैंपल टेस्ट देने के लिए <a className="text-secondary cursor-pointer font-light" href="/test/onboarding">यहां क्लिक </a>करें।</p>
						{
							questionPaperList.pastTests.length !== 0 && 
							<>
								<PaginatedComponent buttonNeeded={true} valid = {true} paginatedData={questionPaperList.currentTests}/>
								<PaginatedComponent buttonNeeded={true} valid = {true} paginatedData={questionPaperList.pastTests} subtitle={true}/>
								<PaginatedComponent buttonNeeded={true} valid = {true} paginatedData={questionPaperList.upcomingTests} locked={true}/>
							</>
						}
						
						
						{/* <TestContainers testStatus={"आगामी परीक्षण"} testList={[]}/>
						<TestContainers testStatus={"विगत परीक्षण"} testList={[]}/> */}
					</div>
				</>
			) : (
				<Navigate to={"/test/login"}/>
			)
		}
		</>
	)
}

// const TestContainers = ({testStatus, testList}) => {
// 	return (
// 		<div>
// 			<h1 className="text-3xl ">{testStatus}</h1>
// 			{
// 				testList.length === 0 ? (
// 					<p>कोई {testStatus} नहीं।</p>
// 				) : (
					// testList.map((test, idx) => (
						
					// ))
// 				)
// 			}
// 		</div>
// 	)
// }

export default TestLanding;
