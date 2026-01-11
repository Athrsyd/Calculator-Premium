import React from "react";
import BackButton from "../BackButton/BackButton";
import ThemeButton from "../ThemeButton/ThemeButton";

const NavConvert = ({title}) => {
  return (
    <>
      <nav className="flex  justify-between px-10 mt-5">
        <BackButton />
        <h1 className="text-2xl font-semibold">{title}</h1>
        <ThemeButton />
      </nav>
    </>
  );
};

export default NavConvert;
