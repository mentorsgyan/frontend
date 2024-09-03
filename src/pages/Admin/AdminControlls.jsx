import React from "react";
import PDFUploader from "../../components/AdminComponents/PDFUploader";
import QuestionUploader from "../../components/AdminComponents/QuestionUploader";
import CourseUploader from "../../components/AdminComponents/CourseUploader";

const AdminControls = () => {

    return (
        <div>
            {/* Course Upload section */}
            <CourseUploader />
            {/* PDF Upload Section*/}
            <PDFUploader />
            {/* Question Paper Section */}
            <QuestionUploader />
        </div>
    )
}

export default AdminControls