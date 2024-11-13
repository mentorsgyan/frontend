import React, { useEffect, useState } from "react";
import { BACKEND_API } from "../../utility/Constants";
import { useNavigate } from "react-router-dom";

const AdminTestComponent = () => {
	const navigate = useNavigate();
	const [testList, setTestList] = useState([]);
	const [test, setTest] = useState("");
	useEffect(() => {
		fetch(`${BACKEND_API}/test-series/fetchTests?phoneNumber=9179263530&admin=true`)
		.then((resp) => resp.json())
		.then((data) => setTestList(data));
	}, [])
	return (
		<div className="container mt-32 mx-20 flex gap-5">
			<select onChange={(e) => setTest(e.target.value)} value={test} className="rounded-2xl">
				<option value="-">Please select from below</option>
				{
					testList.map((test, idx) => (
						<option value={`${test.testNumber}-${test.testID}`}>{new Date(test.releaseDate).toLocaleDateString()}</option>
					))
				}
			</select>
			<button className=" bg-green-300 w-fit p-5 rounded-2xl" 
			onClick={() => {
				if (test.length === 0) {
					alert("Please select a test");
					return;
				}
				navigate(`/test/start/${test.split('-')[0]}?phoneNumber=9179263530`, {state: {valid: true}})
			}}>Go to test</button>
			<button className="bg-red-300 w-fit p-5 rounded-2xl" 
			onClick={() => {
				if (test.length === 0) {
					alert("Please select a test");
					return;
				}
				navigate(`/test/result?phoneNumber=9179263530&testId=${test.split('-')[1]}&test=${test.split('-')[0]}`, {state: {valid: true}})
			}}>Go to Answer Key</button>
			
		</div>
	)
}

export default AdminTestComponent;