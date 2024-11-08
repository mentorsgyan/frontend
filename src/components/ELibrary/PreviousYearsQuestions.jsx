import React from "react";

const PreviousYearsQuestions = () => {
  // This is just Tailwindcss just to make the code looks cleaner
    const styles = {
        titilesStyle: "border border-black text-center font-bold text-base font-bold md:text-xl",
        linksStyle: "border border-black text-center underline text-blue-600 p-2 text-base font-semibold",
    }

    // Dummy datas of previous questions 
  const questionPaperquestionList = [
    {
      year: 2023,
      language: "https://url_to_paper_pdf",
      essay: "https://url_to_paper_pdf",
      gs1: "https://url_to_paper_pdf",
      gs2: "https://url_to_paper_pdf",
      gs3: "https://url_to_paper_pdf",
      gs4: "https://url_to_paper_pdf",
      gs5: "https://url_to_paper_pdf",
    },
    {
      year: 2021,
      language: "https://url_to_paper_pdf",
      essay: "https://url_to_paper_pdf",
      gs1: "https://url_to_paper_pdf",
      gs2: "https://url_to_paper_pdf",
      gs3: "https://url_to_paper_pdf",
      gs4: "https://url_to_paper_pdf",
      gs5: "https://url_to_paper_pdf",
    },
    {
      year: 2020,
      language: "https://url_to_paper_pdf",
      essay: "https://url_to_paper_pdf",
      gs1: "https://url_to_paper_pdf",
      gs2: "https://url_to_paper_pdf",
      gs3: "https://url_to_paper_pdf",
      gs4: "https://url_to_paper_pdf",
      gs5: "https://url_to_paper_pdf",
    },
    {
      year: 2019,
      language: "https://url_to_paper_pdf",
      essay: "https://url_to_paper_pdf",
      gs1: "https://url_to_paper_pdf",
      gs2: "https://url_to_paper_pdf",
      gs3: "https://url_to_paper_pdf",
      gs4: "https://url_to_paper_pdf",
      gs5: "https://url_to_paper_pdf",
    },
    



];

  return (
    <>
      <div className="flex justify-center overflow-x-auto h-full">
          <div className="grid grid-cols-8 min-w-[800px] sm:min-w-full bg-white dark:bg-gray-800 ">
          {/* Column headers */}
          <h1 className={`${styles.titilesStyle}`}>Year</h1>
          <h1 className={`${styles.titilesStyle}`}>Language</h1>
          <h1 className={`${styles.titilesStyle}`}>Essay</h1>
          <h1 className={`${styles.titilesStyle}`}>GS I</h1>
          <h1 className={`${styles.titilesStyle}`}>GS II</h1>
          <h1 className={`${styles.titilesStyle}`}>GS III</h1>
          <h1 className={`${styles.titilesStyle}`}>GS IV</h1>
          <h1 className={`${styles.titilesStyle}`}>GS V</h1>
    
      {/* Question papers data */}
        {questionPaperquestionList.map((question, index) => (
      <React.Fragment key={index}>
        <p className="border border-black text-center font-semibold p-2 bg-gray-300">{question.year}</p>
        <a className={`${styles.linksStyle}`} href={question.language || ""}>Read more</a>
        <a className={`${styles.linksStyle}`} href={question.essay || ""}>Read more</a>
        <a className={`${styles.linksStyle}`} href={question.gs1 || ""}>Read more</a>
        <a className={`${styles.linksStyle}`} href={question.gs2 || ""}>Read more</a>
        <a className={`${styles.linksStyle}`} href={question.gs3 || ""}>Read more</a>
        <a className={`${styles.linksStyle}`} href={question.gs4 || ""}>Read more</a>
        <a className={`${styles.linksStyle}`} href={question.gs5 || ""}>Read more</a>
      </React.Fragment>
    ))}
  </div>
</div>

    </>
  );
};

export default PreviousYearsQuestions;