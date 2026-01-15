import { useEffect, useState, useRef, use } from "react";
import { useNavigate } from "react-router";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDeleteLeft } from "@fortawesome/free-solid-svg-icons";
import { PiSwapBold } from "react-icons/pi";

function App() {
  const navigate = useNavigate();
  const [value, setValue] = useState("");
  const [isAdvance, setIsAdvance] = useState(false);
  const [isMultipleSeven,setIsMultipleSeven] = useState(false);

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

    // swipe kanan
    if (dx < -60 && Math.abs(dy) < 40) {
      navigate("/convert");
    }
  };

  const logBase = (x, base = 10) => {
    return Math.log(x) / Math.log(base);
  };

  useEffect(() => {
    changePi();
  }, [value]);

  const calculate = () => {
    try {
      const hasil = value
        .replaceAll("x", "*")
        .replaceAll("^", "**")
        .replaceAll("÷", "/")
        .replaceAll("lg(", "logBase(")
        .replaceAll("π", !isMultipleSeven?Math.PI:"22/7");
      setValue(String(eval(hasil)));
    } catch {
      setValue("Error...");
      console.log(value);
    }
  };

  const changePi = () => {
    if (value){
      const numbers = value.match(/\d+(\.\d+)?/g);

      if(numbers){
        const hasMultipleOfSeven = numbers.some(num =>{
          const parsed = parseFloat(num);
          return parsed % 7 === 0 && parsed !== 0;
        }) 
        setIsMultipleSeven(hasMultipleOfSeven);
      } else {
        setIsMultipleSeven (false);
      }
    }
  }

  const changePiOnClick = () => {
    if (!isMultipleSeven) {
      setValue(value + "π");
    } else {
      setValue(value + "22/7");
    }
  }
  // Neumorphism button base class
  const neuBtnBase = `
    w-full aspect-square rounded-2xl font-semibold text-xl sm:text-2xl
    transition-all duration-200 ease-out
    bg-primary
    shadow-neu-btn
    hover:scale-[1.02] active:scale-[0.98]
    active:shadow-neu-btn-pressed
  `;

  const neuBtnNumber = `${neuBtnBase} text-text-dark dark:text-text`;
  const neuBtnOperator = `${neuBtnBase} text-text`;
  const neuBtnSpecial = `${neuBtnBase} text-secondary dark:text-text`;
  const neuBtnEqual = `${neuBtnBase} bg-tertiary dark:bg-btn-equal text-white`;

  return (
    <div
      className="min-h-[calc(100vh-76px)] w-full px-4 py-6 bg-primary transition-colors duration-300 animate-fadeIn"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="max-w-sm mx-auto flex flex-col gap-6">
        {/* Display */}
        <div className="w-full p-6 rounded-3xl bg-primary shadow-neu-pressed">
          <div className="text-right">
            <p className="text-sm text-text-muted mb-1 h-5">
              {isAdvance ? "Mode Lanjutan" : "Mode Standar"}
            </p>
            <input
              type="text"
              value={value}
              disabled
              placeholder="0"
              className="w-full bg-transparent text-right text-4xl sm:text-5xl font-bold 
                        text-text-dark dark:text-text display-number
                        outline-none border-none"
            />
          </div>
        </div>

        {/* Keypad */}
        <div className="grid grid-cols-4 gap-3 sm:gap-4">
          {/* Row 1 */}
          <button onClick={() => setValue("")} className={neuBtnSpecial}>C</button>
          <button onClick={() => setValue(value.slice(0, -1))} className={neuBtnSpecial}>
            <FontAwesomeIcon icon={faDeleteLeft} />
          </button>
          <button
            onClick={() => !isAdvance ? setValue(value * 0.01) : setValue(value + "π ")}
            className={neuBtnOperator}
          >
            {!isAdvance ? "%" : "π"}
          </button>
          <button
            onClick={() => setValue(value + (!isAdvance ? "÷ " : "^ "))}
            className={neuBtnOperator}
          >
            {!isAdvance ? "÷" : "^"}
          </button>

          {/* Row 2 */}
          <button onClick={() => setValue(value + "7 ")} className={neuBtnNumber}>7</button>
          <button onClick={() => setValue(value + "8 ")} className={neuBtnNumber}>8</button>
          <button onClick={() => setValue(value + "9 ")} className={neuBtnNumber}>9</button>
          <button
            onClick={() => setValue(value + (!isAdvance ? "x " : "( "))}
            className={neuBtnOperator}
          >
            {!isAdvance ? "×" : "("}
          </button>

          {/* Row 3 */}
          <button onClick={() => setValue(value + "4 ")} className={neuBtnNumber}>4</button>
          <button onClick={() => setValue(value + "5 ")} className={neuBtnNumber}>5</button>
          <button onClick={() => setValue(value + "6 ")} className={neuBtnNumber}>6</button>
          <button
            onClick={() => setValue(value + (!isAdvance ? "- " : ") "))}
            className={neuBtnOperator}
          >
            {!isAdvance ? "−" : ")"}
          </button>

          {/* Row 4 */}
          <button onClick={() => setValue(value + "1 ")} className={neuBtnNumber}>1</button>
          <button onClick={() => setValue(value + "2 ")} className={neuBtnNumber}>2</button>
          <button onClick={() => setValue(value + "3 ")} className={neuBtnNumber}>3</button>
          <button
            onClick={() => !isAdvance ? setValue(value + "+ ") : setValue(value + "lg( ")}
            className={neuBtnOperator}
          >
            {!isAdvance ? "+" : "lg"}
          </button>

          {/* Row 5 */}
          <button onClick={() => setIsAdvance(!isAdvance)} className={neuBtnSpecial}>
            <PiSwapBold className="mx-auto text-2xl" />
          </button>
          <button onClick={() => setValue(value + "0 ")} className={neuBtnNumber}>0</button>
          <button
            onClick={() => setValue(value + (!isAdvance ? "." : ","))}
            className={neuBtnNumber}
          >
            {!isAdvance ? "." : ","}
          </button>
          <button onClick={() => calculate()} className={neuBtnEqual}>=</button>
        </div>

        {/* Swipe hint */}
        <p className="text-center text-xs text-text-muted mt-2">
          Geser ke kanan untuk Konverter →
        </p>
      </div>
    </div>
  );
}

export default App;
