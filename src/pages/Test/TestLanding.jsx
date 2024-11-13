import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import PaginatedComponent from "../../components/PaginatedComponent/PaginatedComponent";
import { Navigate, useLocation, useSearchParams } from "react-router-dom";

const TestLanding = () => {
	const [searchParams] = useSearchParams();
	const location = useLocation();
	const correctPath = location.state ? location.state.loggedIn : false;
	const phoneNumber = searchParams.get('phoneNumber');

	const present = {
		mainData: [
			
		],
		componentHeading: "वर्तमान परीक्षा",
		buttonTitle: "प्रारंभ करें"
	};

	const past = {
		mainData: [
			{
				primaryInfo: "छ.ग. का आधुनिक इतिहास",
				secondaryInfo: `मराठा शासन से देशी रियासत तक | @ - 12/11/2024`,
				url: `/test/start/15?phoneNumber=${phoneNumber}`,
				urlForAnswerKey: `/test/result?phoneNumber=${phoneNumber}&testId=1211&test=15`,
				releaseDate: "2024-11-12T02:30:00.000Z",
			},
			{
				primaryInfo: "छ.ग. प्राचीनं, मध्यकालीन इतिहास",
				secondaryInfo: `प्रागैतिहासिक काल से काकतीय वंश तक  | @ - 08/11/2024`,
				url: `/test/start/14?phoneNumber=${phoneNumber}`,
				urlForAnswerKey: `/test/result?phoneNumber=${phoneNumber}&testId=0811&test=14`,
				releaseDate: "2024-11-08T02:30:00.000Z",
			},
			{
				primaryInfo: "भारत का इतिहास मेगा टेस्ट",
				secondaryInfo: `भारत का इतिहास सम्पूर्ण | @ - 05/11/2024`,
				url: `/test/start/13?phoneNumber=${phoneNumber}`,
				urlForAnswerKey: `/test/result?phoneNumber=${phoneNumber}&testId=0511&test=13`,
				releaseDate: "2024-11-05T02:30:00.000Z",
			},
			{
				primaryInfo: "भारत का आधुनिक इतिहास ",
				secondaryInfo: `यूरोपीय आगमन से भारत की स्वतंत्रता तक | @ - 03/11/2024`,
				url: `/test/start/12?phoneNumber=${phoneNumber}`,
				urlForAnswerKey: `/test/result?phoneNumber=${phoneNumber}&testId=0311&test=12`,
				releaseDate: "2024-11-03T02:30:00.000Z",
			},
			{
				primaryInfo: "भारत का मध्यकालीन इतिहास ",
				secondaryInfo: `विदेशी आक्रमण, दिल्ली सल्तनत, सूफी भक्ति आंदोलन, मुगलकाल, मराठा तक | @ - 28/10/2024`,
				url: `/test/start/11?phoneNumber=${phoneNumber}`,
				urlForAnswerKey: `/test/result?phoneNumber=${phoneNumber}&testId=2810&test=11`,
				releaseDate: "2024-10-28T02:30:00.000Z",
			},
			{
				primaryInfo: "भारत का प्राचीन इतिहास ",
				secondaryInfo: `प्रागैतिहासिक, सिंधूघाटी, वैदिक सभ्यता, बौद्ध, जैन, मौर्य, गुप्त साम्राज्य तक | @ - 25/10/2024`,
				url: `/test/start/10?phoneNumber=${phoneNumber}`,
				urlForAnswerKey: `/test/result?phoneNumber=${phoneNumber}&testId=2510&test=10`,
				releaseDate: "2024-10-25T02:30:00.000Z",
			},
			{
				primaryInfo: "जनजाति एवं कला संस्कृति मेगा टेस्ट",
				secondaryInfo: `जनजाति एवं कला संस्कृति सम्पूर्ण | @ - 22/10/2024`,
				url: `/test/start/9?phoneNumber=${phoneNumber}`,
				urlForAnswerKey: `/test/result?phoneNumber=${phoneNumber}&testId=2210&test=9`,
				releaseDate: "2024-10-22T02:30:00.000Z",
			},
			{
				primaryInfo: "छ.ग. की कला संस्कृति",
				secondaryInfo: `छत्तीसगढ़ी लोकगीत, लोकनाट्य, पर्व एवं त्यौहार इत्यादि | @ - 19/10/2024`,
				url: `/test/start/8?phoneNumber=${phoneNumber}`,
				urlForAnswerKey: `/test/result?phoneNumber=${phoneNumber}&testId=1910&test=8`,
				releaseDate: "2024-10-19T02:30:00.000Z",
			},
			{
				primaryInfo: "छ.ग. जनजाति",
				secondaryInfo: `संपूर्ण जनजाति समुदाय एवं उनकी संस्कृति | @ - 16/10/2024`,
				url: `/test/start/7?phoneNumber=${phoneNumber}`,
				urlForAnswerKey: `/test/result?phoneNumber=${phoneNumber}&testId=1610&test=7`,
				releaseDate: "2024-10-16T02:30:00.000Z",
			},
			{
				primaryInfo: "भारत भूगोल का मेगा टेस्ट",
				secondaryInfo: `भारत भुगोल सम्पूर्ण | @ - 13/10/2024`,
				url: `/test/start/6?phoneNumber=${phoneNumber}`,
				urlForAnswerKey: `/test/result?phoneNumber=${phoneNumber}&testId=1310&test=6`,
				releaseDate: "2024-10-13T02:30:00.000Z",
			},
			{
				primaryInfo: "भारत भूगोल 2",
				secondaryInfo: `वन एवं वन्य जीव, खनिज, उद्योग, ऊर्जा, परिवहन, जनगणना आदि | @ - 11/10/2024`,
				url: `/test/start/5?phoneNumber=${phoneNumber}`,
				urlForAnswerKey: `/test/result?phoneNumber=${phoneNumber}&testId=1110&test=5`,
				releaseDate: "2024-10-11T02:30:00.000Z",
			},
			{
				primaryInfo: "भारत भूगोल 1",
				secondaryInfo: `स्थिति विस्तार, भूगार्भिक संरचना, मिट्टी नदी, पर्वत, सिंचाई, कृषि समसामायिक | @ - 09/10/2024`,
				url: `/test/start/4?phoneNumber=${phoneNumber}`,
				urlForAnswerKey: `/test/result?phoneNumber=${phoneNumber}&testId=0910&test=4`,
				releaseDate: "2024-10-09T02:30:00.000Z",
			},
			{
				primaryInfo: "छीसगढ़ का भूगोल मेगा टेट",
				secondaryInfo: `छत्तीसगढ़ भुगोल सम्पूर्ण @ - 06/10/2024`,
				url: `/test/start/3?phoneNumber=${phoneNumber}`,
				urlForAnswerKey: `/test/result?phoneNumber=${phoneNumber}&testId=0610&test=3`,
				releaseDate: "2024-10-06T02:30:00.000Z",
			},
			{
				primaryInfo: "छ.ग. भुगोल 2",
				secondaryInfo: `वन एवं वन्य जीव से जनगणना तक | @ - 04/10/2024`,
				url: `/test/start/2?phoneNumber=${phoneNumber}`,
				urlForAnswerKey: `/test/result?phoneNumber=${phoneNumber}&testId=0410&test=2`,
				releaseDate: "2024-10-04T02:30:00.000Z",
				
			},
			{
				primaryInfo: "छ.ग. भुगोल 1",
				secondaryInfo: "परिचय, नामकरण सें कषि तक @ - 01/10/2024",
				url: `/test/start/1?phoneNumber=${phoneNumber}`,
				urlForAnswerKey: `/test/result?phoneNumber=${phoneNumber}&testId=0110&test=1`,
				releaseDate: "2024-10-01T02:30:00.000Z",
			},
		],
		componentHeading: "विगत परीक्षा",
		buttonTitle: "प्रारंभ करें"
	}

	const upcoming = {
		mainData: [
			
			
			{
				primaryInfo: "छत्तीसगढ़ का इतिहास मेगा टेस्ट",
				secondaryInfo: `छत्तीसगढ़ का इतिहास सम्पूर्ण | @ - 15/11/2024`,
				url: `/test/start/16?phoneNumber=${phoneNumber}`,
				urlForAnswerKey: `/test/result?phoneNumber=${phoneNumber}&testId=1511&test=16`,
				releaseDate: "2024-11-16T02:30:00.000Z",
			},
		],
		componentHeading: "आगामी परीक्षा",
		buttonTitle: "प्रारंभ करें"
	}
	return (
		<>
		{
			correctPath ? (
				<>
					<Navbar sticky={false} showBanner={false}/>
					<div className="flex flex-col gap-10 container mt-10 items-center font-mukta">

						<p className="text-center bg-green-200/50 text-lg w-fit py-3 px-6 rounded-lg">हमारा सैंपल टेस्ट देने के लिए <a className="text-secondary cursor-pointer font-light" href="/test/onboarding">यहां क्लिक </a>करें।</p>
						<PaginatedComponent buttonNeeded={true} valid = {true} paginatedData={present}/>
						<PaginatedComponent buttonNeeded={true} valid = {true} paginatedData={past} subtitle={true}/>
						<PaginatedComponent buttonNeeded={true} valid = {true} paginatedData={upcoming} locked={true}/>
						
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
