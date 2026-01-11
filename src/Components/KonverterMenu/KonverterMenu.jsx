import React, { useRef } from "react";
import { Link, useNavigate } from "react-router";
import { FaRuler, FaWeightHanging, FaTemperatureHigh } from "react-icons/fa";
import { BiSolidArea } from "react-icons/bi";
import { AiOutlineClockCircle } from "react-icons/ai";
import { GoNumber } from "react-icons/go";
import { IoIosBody } from "react-icons/io";
import { FaCube } from "react-icons/fa6";
import { MdDiscount } from "react-icons/md";

const convertMenu = [
  {
    id: 1,
    name: "Panjang",
    icon: <FaRuler />,
    linkDestination: "/convert/length",
    color: "from-blue-400 to-blue-600",
    iconBg: "bg-blue-500/20",
    textColor: "text-blue-500",
  },
  {
    id: 2,
    name: "Massa",
    icon: <FaWeightHanging />,
    linkDestination: "/convert/mass",
    color: "from-emerald-400 to-emerald-600",
    iconBg: "bg-emerald-500/20",
    textColor: "text-emerald-500",
  },
  {
    id: 3,
    name: "Suhu",
    icon: <FaTemperatureHigh />,
    linkDestination: "/convert/temperatur",
    color: "from-red-400 to-red-600",
    iconBg: "bg-red-500/20",
    textColor: "text-red-500",
  },
  {
    id: 4,
    name: "Area",
    icon: <BiSolidArea />,
    linkDestination: "/convert/area",
    color: "from-violet-400 to-violet-600",
    iconBg: "bg-violet-500/20",
    textColor: "text-violet-500",
  },
  {
    id: 5,
    name: "Waktu",
    icon: <AiOutlineClockCircle />,
    linkDestination: "/convert/time",
    color: "from-amber-400 to-amber-600",
    iconBg: "bg-amber-500/20",
    textColor: "text-amber-500",
  },
  {
    id: 6,
    name: "Sistem Angka",
    icon: <GoNumber />,
    linkDestination: "/convert/numSystem",
    color: "from-cyan-400 to-cyan-600",
    iconBg: "bg-cyan-500/20",
    textColor: "text-cyan-500",
  },
  {
    id: 7,
    name: "BMI",
    icon: <IoIosBody />,
    linkDestination: "/convert/bmi",
    color: "from-pink-400 to-pink-600",
    iconBg: "bg-pink-500/20",
    textColor: "text-pink-500",
  },
  {
    id: 8,
    name: "Volume",
    icon: <FaCube />,
    linkDestination: "/convert/volume",
    color: "from-indigo-400 to-indigo-600",
    iconBg: "bg-indigo-500/20",
    textColor: "text-indigo-500",
  },
  {
    id: 9,
    name: "Diskon",
    icon: <MdDiscount />,
    linkDestination: "/convert/discount",
    color: "from-teal-400 to-teal-600",
    iconBg: "bg-teal-500/20",
    textColor: "text-teal-500",
  },
];

const KonverterMenu = () => {
  const navigate = useNavigate();
  const touchStartX = useRef(0);
  const touchStartY = useRef(0);

  const handleTouchStart = (e) => {
    const t = e.touches[0];
    touchStartX.current = t.clientX;
    touchStartY.current = t.clientY;
  };

  const handleTouchEnd = (e) => {
    const t = e.changedTouches[0];
    const dx = t.clientX - touchStartX.current;
    const dy = t.clientY - touchStartY.current;

    // swipe kiri -> balik ke kalkulator normal
    if (dx < -60 && Math.abs(dy) < 40) {
      navigate("/");
    }
  };

  return (
    <div
      className="min-h-[calc(100vh-76px)] w-full px-4 py-6 bg-primary transition-colors duration-300 animate-fadeIn"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="max-w-lg mx-auto">
        {/* Header */}
        <div className="mb-6 text-center">
          <h1 className="text-2xl font-bold text-text-dark dark:text-text">Konverter</h1>
          <p className="text-sm text-text-muted mt-1">Pilih jenis konversi</p>
        </div>

        {/* Grid Menu */}
        <div className="grid grid-cols-3 gap-4">
          {convertMenu.map((item, index) => (
            <Link key={item.id} to={item.linkDestination}>
              <div
                className="group relative p-4 rounded-2xl bg-primary
                          shadow-neu-flat dark:shadow-neu-flat
                          transition-all duration-300 ease-out
                          hover:scale-[1.02] active:scale-[0.98]
                          active:shadow-neu-pressed dark:active:shadow-neu-pressed
                          flex flex-col items-center justify-center gap-3 min-h-25"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {/* Icon with gradient background on hover */}
                <div className={`w-12 h-12 rounded-xl ${item.iconBg} flex items-center justify-center
                               transition-all duration-300 group-hover:scale-110`}>
                  <span className={`text-2xl ${item.textColor}`}>{item.icon}</span>
                </div>
                
                {/* Name */}
                <span className="text-xs sm:text-sm font-medium text-text-dark dark:text-text text-center leading-tight">
                  {item.name}
                </span>

                {/* Hover indicator */}
                <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-1 rounded-full 
                                bg-linear-to-r ${item.color} opacity-0 group-hover:opacity-100 
                                transition-opacity duration-300`} />
              </div>
            </Link>
          ))}
        </div>

        {/* Swipe hint */}
        <p className="text-center text-xs text-text-muted mt-6">
          ← Geser ke kiri untuk Kalkulator
        </p>
      </div>
    </div>
  );
};

export default KonverterMenu;
