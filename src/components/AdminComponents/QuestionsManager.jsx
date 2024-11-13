import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000';

const QuestionsManager = () => {

  const startYear = 2010;
  const currentYear = new Date().getFullYear();
  const yearsArray = Array.from({ length: currentYear - startYear + 1 }, (_, i) => startYear + i);

  const [yearsList, setYearsList] = useState([]);
  const [year, setyear]= useState();

  useEffect(() => {
    fetchData();
  }, [year])


  // Fetch years from the server
  const fetchData = async () => {
    try {
      const {data} = await axios.get(`/years`);
      console.log(data);
      setYearsList(data);
    } catch (error) {
      console.error("Error fetching years", error);
    }
  };


  

  const styles = {
    input: 'bg-gray-200 outline-none border-none w-[150px] h-6',
    columns: 'flex lg:gap-20 gap-2 lg:flex-row flex-col',
  }
  
  return (
    <main className='flex flex-col items-center justify-center min-h-[400px] gap-10 min-w-[275px]'>
       <h1 className='font-bold text-4xl text-center'>Previous Years Question</h1>
        <div className='grid grid-cols-1 gap-6 w-4/5 h-auto p-10 mb-10 border-black border rounded-lg shadow-[rgba(0,0,15,0.5)_-3px_5px_4px_0px]'>
          {/* Form for the input */}
          <form action="" className="flex gap-10 sm:flex-row flex-col">
            <div className='flex gap-1 sm:justify-center sm:items-center'>
              <label htmlFor="year" className="font-bold text-xl">Year</label>
              <select onChange={(e) => setyear(e.target.value)} defaultValue="" name="year" id="year" className="outline-none border-none text-center bg-gray-200 ">
                <option value="" disabled >Select year</option>
                {yearsArray.map((yr, index) => (
                  <option onChange={(e)=>setyear(e.target.value)} key={index} value={yr}>{yr}</option>
                  
                ))}
              </select>
              <pre>
                {JSON.stringify(year)}
              </pre>
            </div>
          <button type="submit" className="bg-red-600 sm:col-span-2 col-span-1 sm:text-center text-white font-bold p-1 rounded-md w-[100px] h-9">Delete</button>
          </form>

          {/* 2nd Colunm */}
          <div className={`${styles.columns}`}>
            <div className='flex flex-col'>
              <label htmlFor="">Prelims-1</label>
              <input className={`${styles.input}`} type="text" />
            </div>
            <div className='flex flex-col'>
              <label htmlFor="">Prelims-2</label>
              <input className={`${styles.input}`} type="text" />
            </div>
            
          </div>

          <div className={`${styles.columns}`}>
            <div className='flex flex-col'>
              <label htmlFor="">Languange</label>
              <input className={`${styles.input}`} type="text" />
            </div>
            <div className='flex flex-col'>
              <label htmlFor="">Essay</label>
              <input className={`${styles.input}`} type="text" />
            </div>
            
          </div>
          <div className={`${styles.columns}`}>
            <div className='flex flex-col'>
              <label htmlFor="">GS-1</label>
              <input className={`${styles.input}`} type="text" />
            </div>
            <div className='flex flex-col'>
              <label htmlFor="">GS-2</label>
              <input className={`${styles.input}`} type="text" />
            </div>
            <div className='flex flex-col'>
              <label htmlFor="">GS-3</label>
              <input className={`${styles.input}`} type="text" />
            </div>
            
          </div>
          <div className={`${styles.columns}`}>
            <div className='flex flex-col'>
              <label htmlFor="">GS-4</label>
              <input className={`${styles.input}`} type="text" />
            </div>
            <div className='flex flex-col'>
              <label htmlFor="">GS-5</label>
              <input className={`${styles.input}`} type="text" />
            </div>
            <button className='bg-blue-500 h-8 w-[100px] font-bold p-1 sm:text-center rounded-md'>Save</button>
            
          </div>
        </div>
    </main>
  );
}

export default QuestionsManager;


// {/* <div className='flex flex-col items-center justify-center h-screen gap-10'>
//         <h1 className='font-bold text-4xl text-center'>Previous Years Question</h1>
//         <div className='w-4/5 h-auto border-black border rounded-lg shadow-[rgba(0,0,15,0.5)_-3px_5px_4px_0px] text-xs sm:text-lg min-w-[350px] '>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-4 m-14">
//             {/* Year label */}
//             <div className="sm:col-span-1 col-span-2 flex sm:flex-row sm:items-center gap-2 flex-col">
//               <label htmlFor="" className='font-bold text-xl'>Year </label>
//               <select name="year" id="" className='outline-none border-none bg-gray-200 h-9'>
//                 <option value="" disabled selected >Select year</option>
//                 <option value="">2001</option>
//                 <option value="">2002</option>
//                 <option value="">2003</option>
//                 <option value="">2004</option>
//               </select>
//             </div>
//             <button className="bg-red-600 sm:col-span-2 col-span-1 sm:text-center text-white font-bold p-1 rounded-md w-[100px] h-9">Delete</button>
//             <div className="">
//               <h3>Prelims-1</h3>
//               <input className={`${styles.input}`} type="text" />
//             </div>
//             <div className="col-span-2">
//               <h3>Prelims-2</h3>
//               <input className={`${styles.input}`} type="text" />

//             </div>
//             <div className="">
//               <h3>Languange</h3>
//               <input className={`${styles.input}`} type="text" />
//             </div>
//             <div className="col-span-2">
//             <h3>Essay</h3>
//             <input className={`${styles.input}`} type="text" />
//             </div>
//             <div className="">
//             <h3>GS-1</h3>
//             <input className={`${styles.input}`} type="text" />
//             </div>
//             <div className="">
//               <h3>GS-2</h3>
//               <input className={`${styles.input}`} type="text" />
//             </div>
//             <div className="">
//               <h3>GS-3</h3>
//               <input className={`${styles.input}`} type="text" />
//             </div>
//             <div className="">
//               <h3>GS-4</h3>
//               <input className={`${styles.input}`} type="text" />
//             </div>
//             <div className="">
//               <h3>GS-5</h3>
//               <input className={`${styles.input}`} type="text" />
//             </div>
//             <button className="bg-blue-500 text-center p-1 rounded-md w-[100px] font-bold h-9">Save</button>
//           </div>
//         </div>
      
//     </div> */}