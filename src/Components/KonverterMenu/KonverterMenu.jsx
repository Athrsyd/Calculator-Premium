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
  },
  {
    id: 2,
    name: "Massa",
    icon: <FaWeightHanging />,
    linkDestination: "/convert/mass",
  },
  {
    id: 3,
    name: "Suhu",
    icon: <FaTemperatureHigh />,
    linkDestination: "/convert/temperatur",
  },
  {
    id: 4,
    name: "Area",
    icon: <BiSolidArea />,
    linkDestination: "/convert/area",
  },
  {
    id: 5,
    name: "Waktu",
    icon: <AiOutlineClockCircle />,
    linkDestination: "/convert/time",
  },
  {
    id: 6,
    name: "Sistem Angka",
    icon: <GoNumber />,
    linkDestination: "/convert/numSystem",
  },
  {
    id: 7,
    name: "BMI",
    icon: <IoIosBody />,
    linkDestination: "/convert/bmi",
  },
  {
    id: 8,
    name: "Volume",
    icon: <FaCube />,
    linkDestination: "/convert/volume",
  },
  {
    id: 9,
    name: "Diskon",
    icon: <MdDiscount />,
    linkDestination: "/convert/discount",
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
      className=" flex items-center justify-center mt-10"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="buttons grid grid-cols-3 gap-4">
        {convertMenu.map((item) => (
          <Link key={item.id} to={item.linkDestination}>
            <button className={`m-4 p-4 bg-amber-400 text-white text-xl flex justify-center items-center gap-5 w-40 h-30 text-center font-bold rounded-lg`}>
              <span className="text-4xl">{item.icon}</span>
              <span>{item.name}</span>
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default KonverterMenu;
