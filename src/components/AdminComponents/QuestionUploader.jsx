import React, { useState } from "react";
import axios from 'axios';
import {BACKEND_API} from "../../utility/Constants"

const QuestionUploader = () => {

    // Questions Variables
    const [questions, setAllQuestions] = useState([]);
    const [testName, setTestName] = useState('');
    const [testDescription, setTestDescription] = useState('');

    // questions upload handler
    const handleQuestionUpload = async () => {
        if (testName.length === 0) {
            alert("Please enter test name.");
            return;
        } else if (testDescription.length === 0) {
            alert("Please enter test description.");
            return;
        } else if (questions.length === 0) {
            alert("Please add questions.");
            return;
        }
        const data = {
            testName: testName,
            testDescription: testDescription,
            mcqQuestions: questions
        }
        const response = await axios.post(BACKEND_API + "/mcq/addQuestions", data);
        if (response.status === 201) {
            alert("Successfully created new test");
        } else {
            alert("Cannot create test, please retry");
        }
    }

    return (
        <div className="my-7 py-5 gap-10 rounded-3xl shadow-2xl container flex flex-col items-center selection dark:text-white" id="question-paper">
            <h1 className="text-2xl font-bold text-secondary">Add MCQ Questions</h1>
            <div className="flex gap-2 flex-col">
                <input type="text" placeholder="Enter test title" onChange={(e) => {setTestName(e.target.value)}}/>
                <input type="text" placeholder="Enter Test description" onChange={(e) => {setTestDescription(e.target.value)}} />
            </div>
            <div className="flex justify-center container">
                <AddMcqQuestions questions={questions} setAllQuestions={setAllQuestions}/>
                <div className="flex flex-col gap-5 overflow-y-scroll w-full items-center">
                    {
                        questions.map((question, idx) => (
                            <div key={idx}>
                                <p className="font-bold">Q. {question.question}</p>
                                {
                                    question.options?.map((option, idx) => (
                                        <p key={idx}>{idx + 1}. {option} </p>
                                    ))
                                }
                                <p className="font-bold">Correct option: {question.correctOption}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
            <button className="bg-secondary p-2 rounded-3xl text-white font-bold" onClick={handleQuestionUpload}>Submit Question Paper</button>
        </div>
    )
}

const AddMcqQuestions = ({questions, setAllQuestions}) => {
    const question = {
        question: "",
        options: ["", "", "", ""],
        correctOption: -1
    };

    const [editNumber, setEditNumber] = useState(-1);

    const handleSaveQuestion = () => {
        if (question.correctOption === -1) {
            alert("Please select correct option.");
            return;
        }
        question.options.map((option, idx) => {
            if (option.length === 0) {
                alert("Enter Valid option ", idx + 1);
                return;
            }
        })
        let newArr = [...questions];
        if (editNumber === -1) {
            let questCopy = question;
            newArr.push(questCopy);
        } else {
            newArr[editNumber-1] = question;    
        }
        setAllQuestions(newArr);
    }

    return (
        <div className="flex justify-center w-full">
            <div className="flex flex-col gap-5 items-end">
                <div className="flex gap-5">
                    <h1 className="text-lg font-semibold">Quesion title: </h1>
                    <textarea  onChange={(e) => {question.question = e.target.value}}/>
                </div>
                {
                    Array.from({length: 4}, (_, optIdx) => (
                        <div key={optIdx} className="flex gap-5">
                            <h1>Options: {optIdx + 1}</h1>
                            <textarea type="text" onChange={(e) => {question.options[optIdx] = e.target.value}}/>
                        </div>
                    ))
                }
                <div className="flex gap-5">
                    <h1 className="font-semibold">Correct Option:</h1>
                    <input type="number" onChange={(e) => {question.correctOption = e.target.value}}/>
                </div>
                <div>
                    <input type="number" placeholder="Edit QNo." onChange={(e) => {setEditNumber(e.target.value)}}/>
                    <button className="bg-secondary text-white p-2 hover:scale-105 duration-200" onClick={handleSaveQuestion}>Save Question</button>
                </div>
            </div>
        </div>
    )
}

export default QuestionUploader;