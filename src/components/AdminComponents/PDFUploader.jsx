import React, { useState } from "react";
import axios from 'axios';
import {BACKEND_API} from "../../utility/Constants"

const PDFUploader = () => {
    const [caFile, setCaFile] = useState(null);
    const [fileDescription, setFileDescription] = useState('');
    const [displayName, setDisplayName] = useState('');
    const [imageUrl, setImageUrl] = useState(null);
    const [category, setCategory] = useState('current-affairs');
    const categories = [
        {name: "Current Affairs", value: "current-affairs"},
        {name: "Previous Years", value: "pyq"},
        {name: "Govt Magazines", value: "govt-mags"},
        {name: "Paper Cuts", value: "paper-cuts"},
        {name: "Economic Survey", value: "economic-survey"},
        {name: "Prativdan", value: "prativedan"},
    ]

    // File upload handler
    const handlePdfFileUpload = async (e) => {
        e.preventDefault();
        if (caFile === null) {
            alert("No File Found!");
            return;
        }
        if (fileDescription.length === 0) {
            alert("Please enter description!");
            return;
        }
        const formData = new FormData();
        formData.append('file', caFile);
        formData.append('description', fileDescription);
        formData.append('displayName', displayName);
        formData.append('category', category);
        formData.append('imageUrl', imageUrl)
        const response = await axios.post(BACKEND_API + "/uploadFile", formData);
        if (response.status === 200) {
            alert("Successfully Uploaded " + caFile.name);
        } else if (response.status === 500) {
            alert("Internal Error Occurred. Contact developer.");
        } else {
            alert("Cannot save " + caFile.name);
        }
    }

    const handleCategoryChange = (e) => {
        setCategory(e.target.value);
    }

    return (
        <div className="flex justify-center section dark:text-white" id="pdfUploader">
            <div className="my-10 flex flex-col gap-5 items-center mx-10 shadow-2xl rounded-3xl p-4 w-full s">
                <h1 className="text-3xl font-bold text-secondary">Upload E-Library Files</h1>
                <div className="flex gap-5 w-full max-w-xs mx-auto items-center">
                <label className="block text-gray-700 dark:text-gray-200 font-bold mb-2" htmlFor="category">
                    Category
                </label>
                <div className="relative">
                    <select
                    id="category"
                    onChange={handleCategoryChange}
                    name="category"
                    defaultValue={"current-affairs"}
                    className="block appearance-none w-full bg-white dark:bg-gray-700 border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                    > 
                        {
                            categories.map((category, idx) => <option key={idx} value={category.value}>{category.name}</option>)
                        }
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M5.516 7.548L10 12.032l4.484-4.484-1.407-1.416L10 9.2 6.923 6.132z"/></svg>
                    </div>
                </div>
                </div>
                <div className="flex items-start gap-5 mt-5">
                    <p className="font-bold">Upload File</p>
                    <input type="file" onChange={(e) => {setCaFile(e.target.files[0])}
                    }/>
                </div>
                <div className="flex gap-5">
                    <p className="font-bold">Enter display name*: </p>
                    <input required type="text" className="dark:bg-gray-700" onChange={(e) => {setDisplayName(e.target.value)}}/>
                </div>
                <div className="flex gap-5">
                    <p className="font-bold">Enter Description: </p>
                    <textarea onChange={(e) => {setFileDescription(e.target.value)}} className="dark:bg-gray-700"/>
                </div>
                <div className="flex gap-5">
                    <p className="font-bold">Enter Image URL: </p>
                    <textarea onChange={(e) => {setImageUrl(e.target.value)}} className="dark:bg-gray-700"/>
                </div>
                <button className="bg-secondary p-2 rounded-lg text-white font-bold" onClick={handlePdfFileUpload}>Upload Data</button>
                <p className="text-red-400 font-bold text-lg">* Todays date will be assigned automatically</p>
            </div>
        </div>
    )
}

export default PDFUploader;