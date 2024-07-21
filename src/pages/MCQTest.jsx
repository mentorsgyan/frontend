import React, { useState } from 'react';
import { FaCheck } from 'react-icons/fa6';
import PaginatedComponent from '../components/PaginatedComponent/PaginatedComponent';
import { useParams } from 'react-router-dom';

const questions = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    answer: "Paris",
  },
  {
    question: "What is 2 + 2?",
    options: ["3", "4", "5", "6"],
    answer: "4",
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Saturn"],
    answer: "Mars",
  },
  {
    question: "Who wrote 'Hamlet'?",
    options: ["Charles Dickens", "Jane Austen", "William Shakespeare", "Mark Twain"],
    answer: "William Shakespeare",
  }
];



/**
 * This componet will render the question paper
 * @returns 
 * @author Mayank Shukla
 */
export const QuestionPaper = () => {

    // Data id
    const { testDate } = useParams();

    const [userAnswers, setUserAnswers] = useState(Array(questions.length).fill(null));
    const [result, setResult] = useState(null);
    const [submitted, setSubmitted] = useState(false);
  
    const handleOptionChange = (questionIndex, option) => {
      const newAnswers = [...userAnswers];
      newAnswers[questionIndex] = option;
      setUserAnswers(newAnswers);
    };
  
    const handleSubmit = () => {
      let score = 0;
      userAnswers.forEach((answer, index) => score += answer === questions[index].answer);
      setResult(`You scored ${score} out of ${questions.length}`);
      setSubmitted(true);
    };
  
    return (
      <div className="container mx-auto p-4">
        <h1 className='text-2xl font-bold tracking-tight p-10 '>सैंपल पेपर on: {testDate}</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {questions.map((q, index) => {
              const correct = userAnswers[index] === q.answer
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
                        checked={userAnswers[index] === option}
                        onChange={() => handleOptionChange(index, option)}
                      />
                      <span className="ml-2 gap-2 flex items-center">
                          <p>{option} </p>
                          <p>{submitted && option === q.answer ? <FaCheck /> : ''}</p>
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
  const data = {
    mainData: [
      {
          primaryInfo: 'July 07, 2024',
          secondaryInfo: 'सैंपल पेपर 1',
          url: "/mock-test/July 07, 2024",
          imageUrl:
              'https://upload.wikimedia.org/wikipedia/commons/8/87/Coat_of_arms_of_Chhattisgarh.svg'
      },
      {
          primaryInfo: 'July 06, 2024',
          secondaryInfo: 'सैंपल पेपर 2',
          url: "/mock-test/July 06, 2024",
          imageUrl:
              'https://upload.wikimedia.org/wikipedia/commons/8/87/Coat_of_arms_of_Chhattisgarh.svg'
      },
      {
          primaryInfo: 'July 05, 2024',
          secondaryInfo: 'सैंपल पेपर 3',
          url: "/mock-test/July 05, 2024",
          imageUrl:
              'https://upload.wikimedia.org/wikipedia/commons/8/87/Coat_of_arms_of_Chhattisgarh.svg'
      },
      {
          primaryInfo: 'July 04, 2024',
          secondaryInfo: 'सैंपल पेपर 4',
          url: "/mock-test/July 04, 2024",
          imageUrl:
              'https://upload.wikimedia.org/wikipedia/commons/8/87/Coat_of_arms_of_Chhattisgarh.svg'
      },
      {
          primaryInfo: 'July 03, 2024',
          secondaryInfo: 'सैंपल पेपर 5',
          url: "/mock-test/July 03, 2024",
          imageUrl:
              'https://upload.wikimedia.org/wikipedia/commons/8/87/Coat_of_arms_of_Chhattisgarh.svg'
      },
      {
          primaryInfo: 'July 02, 2024',
          secondaryInfo: 'सैंपल पेपर 6',
          url: "/mock-test/July 02, 2024",
          imageUrl:
              'https://upload.wikimedia.org/wikipedia/commons/8/87/Coat_of_arms_of_Chhattisgarh.svg'
      },
      {
          primaryInfo: 'July 01, 2024',
          secondaryInfo: 'सैंपल पेपर 7',
          url: "/mock-test/July 01, 2024",
          imageUrl:
              'https://upload.wikimedia.org/wikipedia/commons/8/87/Coat_of_arms_of_Chhattisgarh.svg'
      },
  ],
    componentHeading: "Mock Tests By MentorsGyan",
    buttonTitle: "टेस्ट प्रारंभ करें",
    test: 1
  }
    return (
        <div>
            <PaginatedComponent paginatedData={data}/>
        </div>
    )
}

export default SampleTests;
