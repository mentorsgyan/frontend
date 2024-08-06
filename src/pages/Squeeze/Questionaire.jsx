import React, { useState } from "react";
import Ambassador from "../../assets/ambassador.png"

const Questionaire = () => {

    const carPosition = ['translate-x-0', 'translate-x-[10rem]', 'translate-x-[20rem]', 'translate-x-[30rem]', 'translate-x-[40rem]', 'translate-x-[50rem]']


    const [currentPosition, setCurrentPosition] = useState(0);

    function handleNext () {
        setCurrentPosition(Math.min(carPosition.length - 1, currentPosition + 1))
    }

    function handlePrevious () {
        setCurrentPosition(Math.max(0, currentPosition - 1));
    }

    return (
        <div className="bg-gray-800 h-screen text-white">
            <div className="fixed bottom-0">
                {/* Moving Ambassador */}
                <img src={Ambassador} alt="ambassador car" className={`${carPosition[currentPosition]} transition-transform duration-500`} />
            </div>
            {/* Questions */}
            <div className="container py-10">
                <div className="p-5 border rounded-2xl border-secondary shadow-2xl shadow-gray-600">
                    <h1 className="text-5xl">100rs ka hai ye tagda sawal, de do iska jawab sahi ?</h1>
                </div>
            </div>
            {/* Question Change buttons */}
            <div className="container py-20 flex justify-center">
                <button className="w-[150px] duration-300 text-2xl text-secondary mx-10 border border-white p-2 rounded-xl hover:text-white hover:bg-secondary" onClick={handlePrevious}>Previous</button>
                <button className="w-[150px] duration-300 text-2xl text-secondary mx-10 border border-white p-2 rounded-xl hover:text-white hover:bg-secondary" onClick={handleNext}>Next</button>
            </div>
        </div>
    )
}

export default Questionaire;