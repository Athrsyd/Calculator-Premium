import React from 'react'
import { useState } from "react";

const Volume = () => {
const [fromUnit, setFromUnit] = useState("liter");
  const [toUnit, setToUnit] = useState("ml");
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

    const converted = convertLength(parseFloat(inputValue), fromUnit, toUnit);
    setOutputValue(converted);
  };
  const convertLength = (value, fromUnit, toUnit) => {
    const conversionRates = {
      liter: 1,
      mililiter: 1000,
      desimeterKubik: 1,
      milimeterKubik: 1000000,
      meterKubik: 0.001,
    };
    const valueInGr = value / conversionRates[fromUnit];
    const convertedValue = valueInGr * conversionRates[toUnit];
    return convertedValue;
  };
  return (
    <div className="w-full px-4 flex justify-center">
      <div className="w-full max-w-2xl flex flex-col items-center">
        <form className="mt-16 space-y-4 w-full max-w-2xl">
          <div className="w-full flex flex-row gap-4 flex-nowrap">
            <div className="flex-1">
              <select
                value={fromUnit}
                onChange={handleChangeFromUnit}
                className="mt-2 w-full rounded-xl border border-black/15 bg-white px-4 py-3"
              >
                <option value="liter">liter</option>
                <option value="mililiter">ml</option>
                <option value="desimeterKubik">dm³</option>
                <option value="milimeterKubik">mm³</option>
                <option value="meterKubik">m³</option>
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

          <div className="w-full flex flex-row gap-4 flex-nowrap">
            <div className="flex-1">
              <select
                value={toUnit}
                onChange={handleChangeToUnit}
                className="mt-2 w-full rounded-xl border border-black/15 bg-white px-4 py-3"
              >
                <option value="liter">liter</option>
                <option value="mililiter">ml</option>
                <option value="desimeterKubik">dm3</option>
                <option value="milimeterKubik">mm3</option>
                <option value="meterKubik">m3</option>
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
        <button
          onClick={reConvertBtn}
          className="inline-flex w-full mt-10 items-center justify-center rounded-xl bg-neutral-900 px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-neutral-800 active:bg-neutral-950 sm:w-auto"
        >
          Konversi ulang
        </button>
      </div>
    </div>
  );
};

export default Volume