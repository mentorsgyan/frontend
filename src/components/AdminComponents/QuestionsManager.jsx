import React, { useState, useEffect } from "react";
import { BACKEND_API } from "../../utility/Constants";
import toast, { Toaster } from "react-hot-toast";

const initialState = {
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

  const [year, setYear] = useState();
  const [questionDatas, setQuestionDatas] = useState(initialState);

  // fetch the year data
  useEffect(() => {
    if (!year) return;
    fetch(`${BACKEND_API}/e-library/pyq?year=${year}`, { method: "GET" })
      .then((response) => response.json())
      .then((data) => {
        if (data === "No entry found") {
          setQuestionDatas(initialState);
        } else {
          setQuestionDatas(data);
        }
      })
      .catch((error) => {
        setQuestionDatas(initialState);
        console.log(error, "Erro occurs on the cath block");
      });
  }, [year]);

  const styles = {
    input: "mt-1 block w-full px-3 py-2 border rounded-md dark:bg-gray-700",
    columns: "flex lg:gap-20 gap-2 lg:flex-row flex-col lg:items-center",
  };

  function handleChange(e) {
    const { name, value } = e.target;
    setQuestionDatas({
      ...questionDatas,
      [name]: value,
    });
  }

  // Function to delete the questions
  async function handleDelete() {
    try {
      const response = await fetch(
        `${BACKEND_API}/e-library/pyq?year=${year}`,
        {
          method: "DELETE",
        }
      );

      toast.dismiss("save-toast");
      toast.dismiss("error-toast");
      if (response.ok) {
        toast.success("Data has been deleted for the year, " + year, {
          id: "save-toast",
          duration: 3000,
        });
        setQuestionDatas(initialState);
      } else {
        toast.error("Failed to delete the entry. Please try again.", {
          id: "error-toast",
          duration: 3000,
        });
      }
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
    const bodyData = { year, ...questionDatas };

    // Checking if data is empty and pop up a toast message
    if (questionDatas === initialState) {
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
      body: JSON.stringify(bodyData),
    })
      .then((response) => {
        toast.dismiss("save-toast");
        toast.dismiss("error-toast");

        if (response.status === 200) {
          toast.success("Created entry for the year " + year, {
            id: "save-toast",
            duration: 3000,
          });
        } else {
          toast.error("Cannot save the entry for " + year, {
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

  return (
    <main className="flex text-gray-700 flex-col items-center justify-center min-h-[400px] gap-10 min-w-[275px] dark:shadow-gray-600 dark:text-gray-200">
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
              onChange={(e) => setYear(e.target.value)}
              defaultValue=""
              name="year"
              value={year}
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
              !year ? "bg-gray-500/20" : "bg-red-600"
            } sm:col-span-2 col-span-1 sm:text-center text-white font-bold p-1 rounded-md w-[100px] h-9`}
            onClick={handleDelete}
            disabled={!year}
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
              value={questionDatas.csat}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="">GS</label>
            <input
              className={`${styles.input}`}
              name="gs"
              onChange={handleChange}
              type="text"
              value={questionDatas.gs}
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
              value={questionDatas.language}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="">Essay</label>
            <input
              className={`${styles.input}`}
              name="essay"
              onChange={handleChange}
              type="text"
              value={questionDatas.essay}
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
              value={questionDatas.gs1}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="">GS-2</label>
            <input
              className={`${styles.input}`}
              name="gs2"
              onChange={handleChange}
              type="text"
              value={questionDatas.gs2}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="">GS-3</label>
            <input
              className={`${styles.input}`}
              name="gs3"
              onChange={handleChange}
              type="text"
              value={questionDatas.gs3}
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
              value={questionDatas.gs4}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="">GS-5</label>
            <input
              className={`${styles.input}`}
              name="gs5"
              onChange={handleChange}
              type="text"
              value={questionDatas.gs5}
            />
          </div>
          <button
            className={`${
              !year ? "bg-gray-500/20 line-through" : "bg-blue-500"
            } h-8 w-[100px] font-bold p-1 sm:text-center lg:mt-5 rounded-md`}
            onClick={handleSave}
            disabled={!year}
          >
            Save
          </button>
        </div>
      </div>
    </main>
  );
};

export default QuestionsManager;
