import React from "react";
import BackButton from "../BackButton/BackButton";
import ThemeButton from "../ThemeButton/ThemeButton";

const NavConvert = ({title}) => {
  return (
    <nav className="sticky top-0 z-50 w-full px-4 py-3 bg-primary transition-colors duration-300">
      <div className="max-w-lg mx-auto flex items-center justify-between gap-3">
        <BackButton />
        <h1 className="flex-1 text-center text-base sm:text-lg font-semibold text-text-dark dark:text-text truncate">
          {title}
        </h1>
        <ThemeButton />
      </div>
    </nav>
  );
};

export default NavConvert;
