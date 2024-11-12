import React, { useEffect, useState } from "react";
import { ImSun } from "react-icons/im";
import { FaMoon } from "react-icons/fa6";

const DarkModeToggle = () => {
    const [darkMode, setDarkMode] = useState(() => {
        return localStorage.getItem('darkMode') === 'true';
    });

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [darkMode]);

    const toggleDarkMode = (state) => {
        localStorage.setItem('darkMode', state);
        setDarkMode(state);
    }

    return (
        <div className="flex gap-4 ml-5 bg-gray-200 rounded-full w-fit">
            <button onClick={() => toggleDarkMode(false)}>
                <ImSun className={` text-yellow-700 rounded-full p-1 text-2xl ${darkMode ? '' : 'bg-white'}`}/>
            </button>
            <button
            onClick={() => toggleDarkMode(true)}
            className=""
            >
                <FaMoon className={`text-blue-950 rounded-full p-1 text-2xl ${darkMode ? 'bg-white' : ''}`}/>
            </button>
        </div>
    )
}

export default DarkModeToggle;