import React from "react";

const CourseUploader = () => {

    function addInput() {
        console.log("Hi");
    }

    return (
        <div className="bg-gray-800 text-white my-7 py-5 gap-10 rounded-3xl shadow-2xl container flex flex-col items-center">
            <h1 className="text-3xl font-bold text-secondary">Create a New Course</h1>
            {/* Basic Course Details Section */}
            <div className="border p-5 w-full rounded-2xl">
                <h2 className="text-2xl font-bold text-center my-4">Basic Details</h2>
                <div className="flex justify-evenly w-full gap-5">
                    <input type="text" placeholder="Course Title" className="rounded-xl"/>
                    <input type="text" placeholder="Instructor Name" className="rounded-xl"/>
                    <input type="text" placeholder="Language" className="rounded-xl"/>
                </div>
            </div>
            <button onClick={addInput}>Add Input</button>
        </div>
    )
}

export default CourseUploader;