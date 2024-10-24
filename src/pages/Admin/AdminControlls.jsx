import React, { useState } from "react";
import PDFUploader from "../../components/AdminComponents/PDFUploader";
import QuestionUploader from "../../components/AdminComponents/QuestionUploader";
import EBooks from "../../components/AdminComponents/EBooks";
import AdminNavbar from "../../components/Navbar/AdminNavbar";
import AdminMentorship from "../../components/Mentorship/AdminMentorship";
import { useNavigate } from "react-router-dom";

const AdminControls = () => {

	const navigate = useNavigate();
	const [test, setTest] = useState("");

    return (
        <div className="font-mukta">
			<AdminNavbar />
			<div className="container mt-32 mx-20 flex gap-5">
				<select onChange={(e) => setTest(e.target.value)} value={test} className="rounded-2xl">
					<option value="-">Please select from below</option>
					<option value="9-2210">22/10</option>
					<option value="10-2510">25/10</option>
					<option value="11-2810">28/10</option>
					<option value="12-0311">03/11</option>
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
			{/* Mentorship updating section */}
			<AdminMentorship />
            {/* Special Ebooks sections */}
            <EBooks />
            {/* PDF Upload Section*/}
            <PDFUploader />
            {/* Question Paper Section */}
            <QuestionUploader />
        </div>
    )
}

export default AdminControls
