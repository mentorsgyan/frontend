import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import PaginatedComponent from "../../components/PaginatedComponent/PaginatedComponent";

const TestLanding = () => {
	const arr = {
			data: {
				mainData: [
				],
				componentHeading: "वर्तमान परीक्षण",
				buttonTitle: "प्रारंभ करें"
			}
	};

	const past = {
		mainData: [
		],
		componentHeading: "विगत परीक्षण",
		buttonTitle: "प्रारंभ करें"
	}

	const upcoming = {
		mainData: [
			{
				primaryInfo: "छ.ग. भुगोल 1",
				secondaryInfo: "परिचय, नामकरण सें कषि तक @ - 01/10/2024",
				url: "/test/start&test-id=mayank1",
				imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/87/Coat_of_arms_of_Chhattisgarh.svg'
			},
			{
				primaryInfo: "छ.ग. भुगोल 2",
				secondaryInfo: `वन एवं वन्य जीव से जनगणना तक| @ - 04/10/2024`,
				url: "/test/start&test-id=mayank1",
				imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/87/Coat_of_arms_of_Chhattisgarh.svg'
			}
		],
		componentHeading: "आगामी परीक्षण",
		buttonTitle: "प्रारंभ करें"
	}

	return (
		<>
			<Navbar sticky={false} showBanner={false}/>
			<div className="flex flex-col gap-10 container mt-10 items-center font-mukta">

				<p className="text-center bg-green-200/50 text-lg w-fit py-3 px-6 rounded-lg">हमारा सैंपल टेस्ट देने के लिए <a className="text-secondary cursor-pointer font-light" href="/test/onboarding">यहां क्लिक </a>करें।</p>
				
				<PaginatedComponent paginatedData={arr.data}/>
				<PaginatedComponent paginatedData={past}/>
				<PaginatedComponent paginatedData={upcoming} locked={true}/>
				{/* <TestContainers testStatus={"आगामी परीक्षण"} testList={[]}/>
				<TestContainers testStatus={"विगत परीक्षण"} testList={[]}/> */}
			</div>
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