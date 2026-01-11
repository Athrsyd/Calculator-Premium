import { useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDeleteLeft } from "@fortawesome/free-solid-svg-icons";
import { PiSwapBold } from "react-icons/pi";

function App() {
  const [value, setValue] = useState("");
  const [isAdvance, setIsAdvance] = useState(false);

  const logBase = (x, base = 10) => {
    return Math.log(x) / Math.log(base);
  };

  const calculate = () => {
    try {
      const hasil = value
        .replaceAll("x", "*")
        .replaceAll("^", "**")
        .replaceAll("÷", "/")
        .replaceAll("lg(", "logBase(");
      setValue(String(eval(hasil)));
    } catch {
      setValue("Error...");
    }
  };
  return (
    <>
      <div className="container w-full h-auto  mt-15 flex flex-col justify-center items-center gap-5 bg-primary">
        <div className="Kalkulator bg-primary border rounded-xl h-7/10 w-[90%] flex flex-col justify-center items-center gap-5 p-5">
          <div className="output flex justify-center items-center h-1/2 w-full">
            <input
              type="text"
              value={value}
              disabled
              className=" bg-white/85 rounded-xl flex-1 w-70 h-1/3 shadow-lg text-amber-700 text-3xl p-5 text-end font-bold "
            />
          </div>
          <div className="tombols h-3/4 w-full flex flex-col justify-center items-center gap-3">
            <div className="row1 w-full flex justify-between items-center">
              <input
                type="button"
                value="C"
                onClick={() => setValue("")}
                className="w-1/5 bg-amber-50 rounded-xl h-13 text-amber-700 font-bold text-3xl"
              />
              <button
                className="w-1/5 bg-amber-50 rounded-xl h-13 text-amber-700 font-bold text-3xl"
                onClick={() => setValue(value.slice(0, -1))}
              >
                <FontAwesomeIcon icon={faDeleteLeft} />
              </button>
              <input
                type="button"
                value={!isAdvance ? "%" : "π"}
                onClick={() =>
                  !isAdvance ? setValue(value * 0.01) : setValue(value + 3.14)
                }
                className="w-1/5 bg-amber-50 rounded-xl h-13 text-amber-700 font-bold text-3xl"
              />
              <input
                type="button"
                value={!isAdvance ? "÷" : "^"}
                onClick={(e) => {
                  setValue(value + e.target.value);
                }}
                className="w-1/5 bg-amber-50 rounded-xl h-13 text-amber-700 font-bold pb-1 text-3xl"
              />
            </div>
            <div className="row2 w-full flex justify-between items-center">
              <input
                type="button"
                onClick={(e) => {
                  setValue(value + e.target.value);
                }}
                value="7"
                className="w-1/5 bg-amber-50 rounded-xl h-13 text-amber-700 font-bold text-3xl"
              />
              <input
                type="button"
                onClick={(e) => {
                  setValue(value + e.target.value);
                }}
                value="8"
                className="w-1/5 bg-amber-50 rounded-xl h-13 text-amber-700 font-bold text-3xl"
              />
              <input
                type="button"
                onClick={(e) => {
                  setValue(value + e.target.value);
                }}
                value="9"
                className="w-1/5 bg-amber-50 rounded-xl h-13 text-amber-700 font-bold text-3xl"
              />
              <input
                type="button"
                onClick={(e) => {
                  setValue(value + e.target.value);
                }}
                value={!isAdvance ? "x" : "("}
                className="w-1/5 bg-amber-50 rounded-xl h-13 text-amber-700 font-bold text-3xl"
              />
            </div>
            <div className="row3 w-full flex justify-between items-center">
              <input
                type="button"
                onClick={(e) => {
                  setValue(value + e.target.value);
                }}
                value="4"
                className="w-1/5 bg-amber-50 rounded-xl h-13 text-amber-700 font-bold text-3xl"
              />
              <input
                type="button"
                onClick={(e) => {
                  setValue(value + e.target.value);
                }}
                value="5"
                className="w-1/5 bg-amber-50 rounded-xl h-13 text-amber-700 font-bold text-3xl"
              />
              <input
                type="button"
                onClick={(e) => {
                  setValue(value + e.target.value);
                }}
                value="6"
                className="w-1/5 bg-amber-50 rounded-xl h-13 text-amber-700 font-bold text-3xl"
              />
              <input
                type="button"
                onClick={(e) => {
                  setValue(value + e.target.value);
                }}
                value={!isAdvance ? "-" : ")"}
                className="w-1/5 bg-amber-50 rounded-xl h-13 text-amber-700 font-bold text-3xl"
              />
            </div>
            <div className="row5 w-full flex justify-between items-center">
              <input
                type="button"
                onClick={(e) => {
                  setValue(value + e.target.value);
                }}
                value="1"
                className="w-1/5 bg-amber-50 rounded-xl h-13 text-amber-700 font-bold text-3xl"
              />
              <input
                type="button"
                onClick={(e) => {
                  setValue(value + e.target.value);
                }}
                value="2"
                className="w-1/5 bg-amber-50 rounded-xl h-13 text-amber-700 font-bold text-3xl"
              />
              <input
                type="button"
                onClick={(e) => {
                  setValue(value + e.target.value);
                }}
                value="3"
                className="w-1/5 bg-amber-50 rounded-xl h-13 text-amber-700 font-bold text-3xl"
              />
              <input
                type="button"
                value={!isAdvance ? "+" : "lg"}
                onClick={(e) => {
                  !isAdvance
                    ? setValue(value + e.target.value)
                    : setValue(value + "lg(");
                }}
                className="w-1/5 bg-amber-50 rounded-xl h-13 text-amber-700 font-bold text-3xl"
              />
            </div>
            <div className="row5 w-full flex justify-between items-center">
              <button
                className="w-1/5 text-center flex justify-center items-center bg-amber-50 rounded-xl h-13 text-amber-700 font-bold text-3xl"
                onClick={() => setIsAdvance(!isAdvance)}
              >
                <PiSwapBold />
              </button>
              <input
                type="button"
                onClick={(e) => {
                  setValue(value + e.target.value);
                }}
                value="0"
                className="w-1/5 bg-amber-50 rounded-xl h-13 text-amber-700 font-bold text-3xl"
              />
              <input
                type="button"
                onClick={(e) => {
                  setValue(value + e.target.value);
                }}
                value={!isAdvance ? "." : ","}
                className="w-1/5 bg-amber-50 rounded-xl h-13 text-amber-700 font-bold text-3xl"
              />
              <input
                type="button"
                onClick={() => calculate()}
                value="="
                className="w-1/5 bg-amber-50 rounded-xl h-13 text-amber-700 font-bold text-3xl"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
