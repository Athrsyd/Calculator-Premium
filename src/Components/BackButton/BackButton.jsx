import React from "react";
import { IoArrowBack } from "react-icons/io5";
import { Link } from "react-router";

const BackButton = () => {
  return (
    <Link to="/convert">
      <button className="z-30 p-2 bg-amber-400 text-white text-5xl flex justify-center items-center gap-5 w-15 h-10 text-center font-bold rounded-lg">
        <IoArrowBack size={30} />
      </button>
    </Link>
  );
};

export default BackButton;
