import React from "react";
import PDFUploader from "../../components/AdminComponents/PDFUploader";
import QuestionUploader from "../../components/AdminComponents/QuestionUploader";
import EBooks from "../../components/AdminComponents/EBooks";
import AdminNavbar from "../../components/Navbar/AdminNavbar";
import AdminMentorship from "../../components/Mentorship/AdminMentorship";
import AdminTestComponent from "../../components/Test/AdminTestComponent";

const AdminControls = () => {

    return (
        <div className="font-mukta">
			<AdminNavbar />
			{/* Admin Test section */}
			<AdminTestComponent />
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
