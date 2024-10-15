import React from "react";
import PDFUploader from "../../components/AdminComponents/PDFUploader";
import QuestionUploader from "../../components/AdminComponents/QuestionUploader";
import EBooks from "../../components/AdminComponents/EBooks";
import AdminNavbar from "../../components/Navbar/AdminNavbar";
import AdminMentorship from "../../components/Mentorship/AdminMentorship";
import { useNavigate } from "react-router-dom";

const AdminControls = () => {

	const navigate = useNavigate();

    return (
        <div className="font-mukta">
			<AdminNavbar />
			<button className="mt-32 mx-20 bg-secondary w-fit p-5" onClick={() => {navigate("/test/start/7?phoneNumber=9179263530", {state: {valid: true}})}}>Go to test 1</button>
			<button className="mt-32 mx-20 bg-secondary w-fit p-5" onClick={() => {navigate("/test/result?phoneNumber=9179263530&testId=1610&test=7", {state: {valid: true}})}}>Go to test 1 Answer Key</button>
			
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
