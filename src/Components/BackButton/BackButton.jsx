import React from "react";
import { IoArrowBack } from "react-icons/io5";
import { Link } from "react-router";

const BackButton = () => {
  return (
    <Link to="/convert">
      <button className="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center
                        transition-all duration-300 ease-out
                        shadow-neu-btn dark:shadow-neu-btn
                        hover:scale-105 active:scale-95
                        active:shadow-neu-btn-pressed dark:active:shadow-neu-btn-pressed
                        text-text-dark dark:text-text">
        <IoArrowBack size={22} />
      </button>
    </Link>
  );
};

export default BackButton;
