import React from "react";
import { Link } from "react-router";
import ThemeButton from "../ThemeButton/ThemeButton";

const Navbar = () => {
  return (
    <nav className=" z-20 text-shadow-gray-50 bg-black w-full h-16 flex justify-around items-center text-3xl font-bold text-amber-400">
      <div className=" flex gap-20">
        <Link to="/">
          <h1 className="text-xl">Kalkulator</h1>
        </Link>
        <Link to="/convert">
          <h1 className="text-xl">Konverter</h1>
        </Link>
      </div>
        <ThemeButton/>
    </nav>
  );
};

export default Navbar;
