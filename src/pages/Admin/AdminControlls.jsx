import React from "react";
import PDFUploader from "../../components/AdminComponents/PDFUploader";
import QuestionUploader from "../../components/AdminComponents/QuestionUploader";
import EBooks from "../../components/AdminComponents/EBooks";

const AdminControls = () => {

    return (
        <div>
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