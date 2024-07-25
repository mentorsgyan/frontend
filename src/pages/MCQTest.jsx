import React, { useEffect, useState } from 'react';
import { FaCheck } from 'react-icons/fa6';
import PaginatedComponent from '../components/PaginatedComponent/PaginatedComponent';
import { useParams } from 'react-router-dom';
import { BACKEND_API } from "../utility/Constants"

/**
 * This componet will render the question paper
 * @returns 
 * @author Mayank Shukla
 */
export const QuestionPaper = () => {

    // Data id
    const { testTitle } = useParams();

    const [userChoiceForRadio, setUserChoiceForRadio] = useState([]);
    const [userAnswers, setUserAnswers] = useState([]);
    const [result, setResult] = useState(null);
    const [submitted, setSubmitted] = useState(false);

    const [fetchedQuestions, setFetchedQuestions] = useState([]);
  
    const handleOptionChange = (questionIndex, idx, option) => {
      const newAnswers = [...userChoiceForRadio];
      const newOptions = [...userAnswers];
      newOptions[questionIndex] = (idx + 1).toString();
      newAnswers[questionIndex] = option;
      setUserAnswers(newOptions);
      setUserChoiceForRadio(newAnswers);
    };
  
    const handleSubmit = () => {
      let score = 0;
      userAnswers.forEach((answer, index) => {
        score += (answer?.localeCompare(fetchedQuestions[index].correctOption) === 0 ? 1 : 0)
      });
      setResult(`You scored ${score} out of ${fetchedQuestions.length}`);
      setSubmitted(true);
    };

    async function fetchQuestions() {
      fetch(BACKEND_API + "/getQuestionPaper/About India")
      .then((response) => {
        if (response.status !== 200) {
          alert("Cannot get the questions. Please try again later.");
        }
        return response.json();
      })
      .then((data) => {
        setFetchedQuestions(data.mcqQuestions)
        setUserChoiceForRadio(Array(fetchedQuestions.length).fill(null));
      })
      .catch((error) => {
        console.log("Error Occurred: ", error);
      });
    }

    useEffect(() => {
      setSubmitted(false);
      fetchQuestions();
    }, []);
    return (
      <div className="container mx-auto p-4">
        <h1 className='text-2xl font-bold tracking-tight p-10 '>सैंपल पेपर on: {testTitle}</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {fetchedQuestions.map((q, index) => {
              const correct = userChoiceForRadio[index] === q.options[q.correctOption - '1'];
              const color = correct ? 'bg-green-200/50' : 'bg-red-200/50';
              const mark = correct ? <FaCheck /> : '';
              const highlightClass = submitted ? color : '';
          return (
            <div key={index} className={`p-4 border rounded shadow ${submitted ? highlightClass : ""}`}>
              <h3 className="font-semibold mb-2">{q.question}</h3>
              <ul>
                {q.options.map((option, idx) => (
                  <li key={idx} className="mb-1">
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        name={`question-${index}`}
                        className="form-radio "
                        value={option}
                        disabled={submitted}
                        checked={userChoiceForRadio[index] === option}
                        onChange={() => handleOptionChange(index, idx, option)}
                      />
                      <span className="ml-2 gap-2 flex items-center">
                          <p>{option} </p>
                          { submitted && <p>{option === q.options[q.correctOption - '1'] ? <FaCheck /> : 'X'}</p>}
                      </span>
                    </label>
                  </li>
                ))}
              </ul>
            </div>
          )
          })}
        </div>
        <div className="flex justify-center mt-4">
          <button
            onClick={handleSubmit}
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
          >
            Submit
          </button>
        </div>
        {result && (
          <div className="mt-4 text-center">
            <p className="text-lg font-semibold">{result}</p>
          </div>
        )}
      </div>
    );
};

const SampleTests = () => {
  const [questionData, setQuestionData] = useState({
    mainData: [],
    componentHeading: "Mock Tests By MentorsGyan",
    buttonTitle: "टेस्ट प्रारंभ करें",
    test: 1
  })
    
    const [questionPaperLists, setQuestionPaperList] = useState();
    async function fetchQuestionPaperLists() {
      fetch(BACKEND_API + "/questionPaperLists")
      .then((response) => {
        if(response.status !== 200) {
          alert("Questions cannot be fetched now. Please try again later");
        }
        return response.json();
      })
      .then((data) => {
        let testList = [];
        data?.map(test => {
          let url = "mock-test/" + test.testName;
          let testData = {
            primaryInfo: test.testName,
            secondaryInfo: test.testDescription,
            url: url,
            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/87/Coat_of_arms_of_Chhattisgarh.svg'
          }
          testList.push(testData);
        })
        // questionData.mainData = testList;
        setQuestionData({
          ...questionData,
          mainData: testList
        })
        setQuestionPaperList(data);
        console.log("Questions: ", data);
      })
    }

    useEffect(() => {
      fetchQuestionPaperLists();
    }, [])
    return (
        <div>
            <PaginatedComponent paginatedData={questionData}/>
        </div>
    )
}

export default SampleTests;
