import React from "react";

const PreviousYearsQuestions = () => {
  
  // This is just Tailwindcss just to make the code looks cleaner
    const styles = {
        titlesStyle: "border border-gray-700 text-center font-semibold text-base md:text-lg whitespace-normal break-words",
        linksStyle: "border border-gray-700 text-center underline text-blue-600 p-2 text-base",
        mainHeaderText: "border border-gray-700 text-center font-semibold text-base md:text-xl whitespace-normal break-words",
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
        csat: "https://url_to_csat_pdf",
        gs: "https://url_to_general_studies_pdf"
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
        csat: "https://url_to_csat_pdf",
        gs: "https://url_to_general_studies_pdf"
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
        csat: "https://url_to_csat_pdf",
        gs: "https://url_to_general_studies_pdf"
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
        csat: "https://url_to_csat_pdf",
        gs: "https://url_to_general_studies_pdf"
      },
    ];
  return (
      <div className="flex sm:justify-center overflow-x-auto h-[90vh] w-full items-start">
          <div className={`grid grid-cols-10 w-full min-w-[800px] border-2 mt-4 border-gray-700 bg-white dark:bg-gray-800 md:w-4/5 rounded-md`}>
            <>
            <h1 className={`${styles.mainHeaderText} col-start-2 col-span-2 p-4 border-r-2`}>Prelims</h1>
            <h1 className={`${styles.mainHeaderText} col-span-7 p-4`}>Mains</h1>
            </>
          {/* Column headers */}
          <h1 className={`${styles.titlesStyle}`}>Year</h1>
          <h1 className={`${styles.titlesStyle}`}>C-SAT</h1>
          <h1 className={`${styles.titlesStyle} border-r-2`}>GS</h1>
          <h1 className={`${styles.titlesStyle}`}>Language</h1>
          <h1 className={`${styles.titlesStyle}`}>Essay</h1>
          <h1 className={`${styles.titlesStyle}`}>GS I</h1>
          <h1 className={`${styles.titlesStyle}`}>GS II</h1>
          <h1 className={`${styles.titlesStyle}`}>GS III</h1>
          <h1 className={`${styles.titlesStyle}`}>GS IV</h1>
          <h1 className={`${styles.titlesStyle}`}>GS V</h1>
    
      {/* Question papers data */}
        {questionPaperquestionList.map((question, index) => (
      <React.Fragment key={index}>
        <p className="border border-gray-700 text-center font-semibold p-2 bg-gray-300">{question.year}</p>
        <a className={`${styles.linksStyle}`} href={question.csat || ""}>Read more</a>
        <a className={`${styles.linksStyle} border-r-2`} href={question.gs || ""}>Read more</a>
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
  );
};
export default PreviousYearsQuestions;