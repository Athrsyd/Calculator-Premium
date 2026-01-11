import React from "react";
import BackButton from "../BackButton/BackButton";
import ThemeButton from "../ThemeButton/ThemeButton";

const NavConvert = () => {
  return (
    <>
      <nav className="flex  justify-between px-10 mt-5">
        <BackButton />
        <ThemeButton />
      </nav>
    </>
  );
};

export default NavConvert;
