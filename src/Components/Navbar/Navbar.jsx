import React from "react";
import { Link, useLocation } from "react-router";
import ThemeButton from "../ThemeButton/ThemeButton";
import { FaCalculator } from "react-icons/fa";
import { HiOutlineSwitchHorizontal } from "react-icons/hi";

const Navbar = () => {
  const location = useLocation();
  const isCalculator = location.pathname === "/";
  const isConverter = location.pathname === "/convert";

  return (
    <nav className="sticky top-0 z-50 w-full px-4 py-3 bg-primary transition-colors duration-300">
      <div className="max-w-lg mx-auto flex items-center justify-between">
        {/* Navigation Tabs */}
        <div className="flex gap-2 p-1.5 rounded-2xl bg-primary
                        shadow-neu-pressed dark:shadow-neu-pressed">
          <Link to="/">
            <button
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-sm
                         transition-all duration-300 ease-out
                         ${isCalculator 
                           ? 'bg-primary text-tertiary shadow-neu-btn dark:shadow-neu-btn' 
                           : 'text-text-dark/60 dark:text-text/60 hover:text-tertiary'}`}
            >
              <FaCalculator className="text-lg" />
              <span className="hidden sm:inline">Kalkulator</span>
            </button>
          </Link>
          <Link to="/convert">
            <button
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-sm
                         transition-all duration-300 ease-out
                         ${isConverter 
                           ? 'bg-primary text-tertiary shadow-neu-btn dark:shadow-neu-btn' 
                           : 'text-text-dark/60 dark:text-text/60 hover:text-tertiary'}`}
            >
              <HiOutlineSwitchHorizontal className="text-lg" />
              <span className="hidden sm:inline">Konverter</span>
            </button>
          </Link>
        </div>

        {/* Theme Toggle */}
        <ThemeButton />
      </div>
    </nav>
  );
};

export default Navbar;
