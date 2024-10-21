
import React, { useReducer, useEffect } from "react";
import TestNavigator from "../../components/Test/TestNavigator";
import { BACKEND_API, QuestionStatus } from "../../utility/Constants";
import TestInstructions from "../../components/Test/TestInstructions";
import { ClockIcon } from "@heroicons/react/24/outline";
import { questionsEnglish, questionsHindi } from "../../utility/defaultTest";
import { Navigate, useLocation, useParams, useSearchParams } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase.config";
import AllQuestions from "./AllQuestions";

// Initial state
const initialState = {
  userAnswers: new Map(),
  currentQuestionIndex: 0,
  english: false,
  questionJson: {
    english: questionsEnglish,
    hindi: questionsHindi
  },
  instructionOpen: false,
  allQuestions: false,
  remainingTime: 7200,
  timerStatus: "RUNNING",
  agreedToInstructions: false,
  isMdOrGreater: false
};

// Reducer function to manage state transitions
const reducer = (state, action) => {
  switch (action.type) {
    case "SET_ANSWER":
      return {
        ...state,
        userAnswers: new Map(state.userAnswers).set(action.payload.questionId, action.payload.answer)
      };
    case "SET_CURRENT_QUESTION_INDEX":
      return { ...state, currentQuestionIndex: action.payload };
    case "TOGGLE_LANGUAGE":
      return { ...state, english: !state.english };
    case "SET_REMAINING_TIME":
      return { ...state, remainingTime: action.payload };
    case "SET_TIMER_STATUS":
      return { ...state, timerStatus: action.payload };
    case "TOGGLE_INSTRUCTIONS":
      return { ...state, instructionOpen: !state.instructionOpen };
    case "TOGGLE_ALL_QUESTIONS":
      return { ...state, allQuestions: !state.allQuestions };
    default:
      return state;
  }
};

const Test = () => {
  const { number } = useParams();
  const location = useLocation();
  const validSession = location.state ? location.state.valid : false;

  const [searchParams] = useSearchParams();
  const phoneNumber = searchParams.get('phoneNumber');

  // useReducer hook to manage state
  const [state, dispatch] = useReducer(reducer, initialState);

  const questionList = state.english ? state.questionJson.english : state.questionJson.hindi;
  const currentQuestion = questionList[state.currentQuestionIndex % questionList.length];

  // Handle answer save
  const handleSaveAnswer = (questionId, answer) => {
    dispatch({ type: "SET_ANSWER", payload: { questionId, answer } });
  };

  // Handle next question
  const handleNextQuestion = () => {
    dispatch({ type: "SET_CURRENT_QUESTION_INDEX", payload: state.currentQuestionIndex + 1 });
  };

  // Toggle language between English and Hindi
  const toggleLanguage = () => {
    dispatch({ type: "TOGGLE_LANGUAGE" });
  };

  return (
    <>
      {validSession ? (
        <div>
          {/* Instructions */}
          {state.instructionOpen && <TestInstructions onClose={() => dispatch({ type: "TOGGLE_INSTRUCTIONS" })} />}
          {/* Render current question */}
          <div>
            <h1>Question {state.currentQuestionIndex + 1}</h1>
            <p>{currentQuestion.questionText}</p>
            {/* Save Answer */}
            <button onClick={() => handleSaveAnswer(currentQuestion.id, "user's answer")}>Save Answer</button>
          </div>
          {/* Navigation */}
          <div>
            <button onClick={handleNextQuestion}>Next Question</button>
            <button onClick={toggleLanguage}>
              Switch to {state.english ? 'Hindi' : 'English'}
            </button>
          </div>
          {/* Timer */}
          <p>Remaining time: {state.remainingTime} seconds</p>

          {/* Test Navigator */}
          <TestNavigator
            userAnswers={state.userAnswers}
            setCurrentQuestionNumber={(index) => dispatch({ type: "SET_CURRENT_QUESTION_INDEX", payload: index })}
            currentQuestion={state.currentQuestionIndex}
            timerStatus={state.timerStatus}
            setLanguage={toggleLanguage}
            language={state.english ? "English" : "हिन्दी"}
            phoneNumber={phoneNumber}
          />
        </div>
      ) : (
        <Navigate to={"/test/login"} />
      )}
    </>
  );
};

export default Test;
