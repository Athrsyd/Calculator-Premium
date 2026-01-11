import React from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import { useState, useEffect } from "react";

const ThemeButton = () => {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      return (
        localStorage.getItem("theme") ||
        (window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light")
      );
    }
    return "light";
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <button
      onClick={toggleTheme}
      className="relative w-12 h-12 rounded-2xl bg-primary flex items-center justify-center
                       transition-all duration-300 ease-out
                       shadow-neu-btn dark:shadow-neu-btn
                       hover:scale-105 active:scale-95
                       active:shadow-neu-btn-pressed dark:active:shadow-neu-btn-pressed"
      aria-label="Toggle theme"
    >
      <div className="relative w-6 h-6">
        <FaSun
          className={`absolute inset-0 text-2xl text-amber-500 transition-all duration-300 
                               ${
                                 theme === "light"
                                   ? "opacity-100 rotate-0"
                                   : "opacity-0 rotate-90"
                               }`}
        />
        <FaMoon
          className={`absolute inset-0 text-2xl text-yellow-300 transition-all duration-300
                               ${
                                 theme === "dark"
                                   ? "opacity-100 rotate-0"
                                   : "opacity-0 -rotate-90"
                               }`}
        />
      </div>
    </button>
  );
};

export default ThemeButton;
