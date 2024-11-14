import React, { useState, useEffect } from "react";
import { BACKEND_API } from "../../utility/Constants";
import toast, { Toaster } from "react-hot-toast";

const initialState = {
  year: undefined,
  csat: "",
  gs: "",
  language: "",
  essay: "",
  gs1: "",
  gs2: "",
  gs3: "",
  gs4: "",
  gs5: "",
};

const QuestionsManager = () => {
  const startYear = 2010;
  const currentYear = new Date().getFullYear();
  const yearsArray = Array.from(
    { length: currentYear - startYear + 1 },
    (_, i) => startYear + i
  );

  const [questionData, setQuestionData] = useState(initialState);

  // fetch the year data
  useEffect(() => {
    if (!questionData.year) return;
    fetch(`${BACKEND_API}/e-library/pyq?year=${questionData.year}`, { method: "GET" })
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((data) => {
        console.log(data);
        if (data === "No entry found") {
          setQuestionData(initialState);
        } else {
          setQuestionData(data);
        }
      })
      .catch((error) => {
        
        console.log(error, "Error occurs on the cath block");
      });
  }, [questionData.year]);

  const styles = {
    input: "mt-1 block w-full px-3 py-2 border rounded-md dark:bg-gray-700",
    columns: "flex lg:gap-20 gap-2 lg:flex-row flex-col lg:items-center",
  };

  function handleChange(e) {
    const { name, value } = e.target;
    setQuestionData({
      ...questionData,
      [name]: value,
    });
  }

  // Function to delete the questions
  async function handleDelete() {
    try {
      const response = await fetch(
        `${BACKEND_API}/e-library/pyq?year=${questionData.year}`,
        {
          method: "DELETE",
        }
      );

      toast.dismiss("save-toast");
      toast.dismiss("error-toast");
      if (response.ok) {
        toast.success("Data has been deleted for the year, " + questionData.year, {
          id: "save-toast",
          duration: 3000,
        });
        setQuestionData(initialState);
      } else {
        toast.error("Failed to delete the entry. Please try again.", {
          id: "error-toast",
          duration: 3000,
        });
      }
      setQuestionData(initialState);
    } catch (error) {
      console.error("An error occurred:", error);
      toast.error("An error occurred. Please contact support.", {
        id: "error-toast",
        duration: 3000,
      });
    }
  }

  // Function to save the questions
  async function handleSave() {

    // Checking if data is empty and pop up a toast message
    if (questionData === initialState) {
      toast.dismiss("error-toast");
      toast.error("Empty data cannot be saved!", {
        id: "error-toast",
        duration: 3000,
      });
      return;
    }
    // Proceed with the fetch call
    fetch(`${BACKEND_API}/e-library/pyq`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(questionData),
    })
      .then((response) => {
        toast.dismiss("save-toast");
        toast.dismiss("error-toast");

        if (response.status === 200) {
          toast.success("Created entry for the year " + questionData.year, {
            id: "save-toast",
            duration: 3000,
          });
        } else {
          toast.error("Cannot save the entry for " + questionData.year, {
            id: "error-toast",
            duration: 3000,
          });
        }
      })
      .catch((error) => {
        toast.dismiss("error-toast");
        toast.error("Contact developer: " + error.message, {
          id: "error-toast",
          duration: 3000,
        });
      });
  }


  function handleChange(e) {
	const {name, value} = e.target
	setQuestionData({
		...questionData,
		[name]: value,
	})
  }  
  return (
    <main className="flex text-gray-700 flex-col items-center min-h-screen justify-center gap-10 min-w-[275px] dark:shadow-gray-600 dark:text-gray-200">
      <Toaster />
      <h1 className="font-bold text-3xl text-center">
        Previous Years Question
      </h1>
      <div className="grid grid-cols-1 gap-6 w-4/5 h-auto p-10 mb-10 border-black border rounded-lg shadow-[rgba(0,0,15,0.5)_-3px_5px_4px_0px]">
        {/* Form for the input */}
        <div className="flex gap-5 sm:gap-10 sm:flex-row flex-col sm:items-center">
          <div className="flex gap-2 sm:justify-center items-center">
            <label htmlFor="year" className="font-bold text-xl">
              Year
            </label>
            <select
              onChange={handleChange}
              defaultValue=""
              name="year"
              value={questionData.year}
              id="year"
              className="mt-1 block w-32 px-3 py-2 border rounded-md dark:bg-gray-700"
            >
              <option value="" disabled>
                Select year
              </option>
              {yearsArray.map((yr, index) => (
                <option
                  onChange={handleChange}
                  name="year"
                  key={index}
                  value={yr}
                >
                  {yr}
                </option>
              ))}
            </select>
          </div>
          <button
            type="submit"
            className={`${
              questionData.year === undefined? "bg-gray-500/20" : "bg-red-600"
            } sm:col-span-2 col-span-1 sm:text-center text-white font-bold p-1 rounded-md w-[100px] h-9`}
            onClick={handleDelete}
            disabled={questionData.year === undefined}
          >
            Delete
          </button>
        </div>

        {/* 2nd Colunm */}
        <div className={`${styles.columns}`}>
          <div className="flex flex-col">
            <label htmlFor="">C-SAT</label>
            <input
              className={`${styles.input}`}
              name="csat"
              onChange={handleChange}
              type="text"
              value={questionData.csat}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="">GS</label>
            <input
              className={`${styles.input}`}
              name="gs"
              onChange={handleChange}
              type="text"
              value={questionData.gs}
            />
          </div>
        </div>

        {/* 3rd column */}
        <div className={`${styles.columns}`}>
          <div className="flex flex-col">
            <label htmlFor="">Languange</label>
            <input
              className={`${styles.input}`}
              name="language"
              onChange={handleChange}
              type="text"
              value={questionData.language}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="">Essay</label>
            <input
              className={`${styles.input}`}
              name="essay"
              onChange={handleChange}
              type="text"
              value={questionData.essay}
            />
          </div>
        </div>

        {/* 4th column */}
        <div className={`${styles.columns}`}>
          <div className="flex flex-col">
            <label htmlFor="">GS-1</label>
            <input
              className={`${styles.input}`}
              name="gs1"
              onChange={handleChange}
              type="text"
              value={questionData.gs1}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="">GS-2</label>
            <input
              className={`${styles.input}`}
              name="gs2"
              onChange={handleChange}
              type="text"
              value={questionData.gs2}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="">GS-3</label>
            <input
              className={`${styles.input}`}
              name="gs3"
              onChange={handleChange}
              type="text"
              value={questionData.gs3}
            />
          </div>
        </div>

        {/* 5th column */}
        <div className={`${styles.columns}`}>
          <div className="flex flex-col">
            <label htmlFor="">GS-4</label>
            <input
              className={`${styles.input}`}
              name="gs4"
              onChange={handleChange}
              type="text"
              value={questionData.gs4}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="">GS-5</label>
            <input
              className={`${styles.input}`}
              name="gs5"
              onChange={handleChange}
              type="text"
              value={questionData.gs5}
            />
          </div>
          <button
            className=" bg-blue-500 h-8 w-[100px] font-bold p-1 sm:text-center lg:mt-5 rounded-md"
            onClick={handleSave}
            disabled={questionData.year === undefined}
          >
            Save
          </button>
        </div>
      </div>
    </main>
  );
};

export default QuestionsManager;
