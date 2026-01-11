import React from 'react'
import { FaSun, FaMoon } from "react-icons/fa";
import { useState, useEffect } from "react";

const ThemeButton = () => {
    const [theme, setTheme] = useState("light");

    useEffect(() => {
        document.documentElement.classList.toggle("dark", theme === "dark");
    }, [theme]);
  return (
    <button className='p-2 w-10 h-10 rounded-md bg-gray-200 dark:bg-gray-700' >
        {theme === "light" ? (
            <FaMoon
                className="text-2xl text-yellow-500"
                onClick={() => setTheme("dark")}
            />
        ) : (
            <FaSun
                className="text-2xl text-yellow-500"
                onClick={() => setTheme("light")}
            />
        )}
    </button>
  )
}

export default ThemeButton