import React from "react";
import { useState } from "react";

const Length = () => {
  const [fromUnit, setFromUnit] = useState("meter");
  const [toUnit, setToUnit] = useState("kilometer");
  const [inputValue, setInputValue] = useState("");
  const [outputValue, setOutputValue] = useState("");

  const handleChangeFromUnit = (e) => {
    setFromUnit(e.target.value);
  };
  const handleChangeToUnit = (e) => {
    setToUnit(e.target.value);
  };
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    const converted = convertLength(
      parseFloat(e.target.value),
      fromUnit,
      toUnit
    );
    setOutputValue(converted);
  };

  const handleOutputChange = (e) => {
    setOutputValue(e.target.value);
    const converted = convertLength(
      parseFloat(e.target.value),
      toUnit,
      fromUnit
    );
    setInputValue(converted);
  };

  const reConvertBtn = () => {

    const converted = convertLength(parseFloat(inputValue), from, toUnit);
    setOutputValue(converted);
  };
  const convertLength = (value, fromUnit, toUnit) => {
    const conversionRates = {
      meter: 1,
      kilometer: 0.001,
      centimeter: 100,
      millimeter: 1000,
      inch: 39.3701,
    };
    const valueInMeters = value / conversionRates[fromUnit];
    const convertedValue = valueInMeters * conversionRates[toUnit];
    return convertedValue;
  };

  // const test = ()=>{
  //   console.log(fromUnit);
  //   console.log(toUnit);
  //   console.log(inputValue);
  // }
  return (
    <div className="w-full px-4 flex justify-center">
      <div className="w-full max-w-2xl flex flex-col items-center">
        <form className="mt-16 space-y-4 w-full max-w-2xl">
          <div className="w-full flex flex-row-reverse gap-4 flex-nowrap">
            <div className="flex-1">
              <select
                className="mt-2 w-full rounded-xl border border-black/15 bg-white px-4 py-3"
                value={fromUnit}
                onChange={handleChangeFromUnit}
              >
                <option value="meter">Meter</option>
                <option value="kilometer">Kilometer</option>
                <option value="centimeter">Centimeter</option>
                <option value="millimeter">Millimeter</option>
                <option value="inch">Inch</option>
              </select>
            </div>
            <div className="flex-1">
              <input
                type="number"
                id="weight"
                name="weight"
                inputMode="decimal"
                className="mt-2 w-full rounded-xl border border-black/15 bg-white px-4 py-3"
                placeholder="Contoh: 60"
                value={inputValue}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="w-full flex flex-row-reverse gap-4 flex-nowrap">
            <div className="flex-1">
              <select
                className="mt-2 w-full rounded-xl border border-black/15 bg-white px-4 py-3"
                value={toUnit}
                onChange={handleChangeToUnit}
              >
                <option value="meter">Meter</option>
                <option value="kilometer">Kilometer</option>
                <option value="centimeter">Centimeter</option>
                <option value="millimeter">Millimeter</option>
                <option value="inch">Inch</option>
              </select>
            </div>
            <div className="flex-1">
              <input
                type="number"
                id="weight"
                name="weight"
                inputMode="decimal"
                className="mt-2 w-full rounded-xl border border-black/15 bg-white px-4 py-3"
                placeholder="Contoh: 60"
                value={outputValue}
                onChange={handleOutputChange}
              />
            </div>
          </div>
        </form>
        <button onClick={reConvertBtn} 
                  className="inline-flex w-full mt-10 items-center justify-center rounded-xl bg-neutral-900 px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-neutral-800 active:bg-neutral-950 sm:w-auto"

        >
          Konversi ulang
        </button>
      </div>
    </div>
  );
};

export default Length;
