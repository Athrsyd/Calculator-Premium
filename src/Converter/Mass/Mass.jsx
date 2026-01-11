import React from 'react'
import { useState } from 'react';
const Mass = () => {
const [fromUnit, setFromUnit] = useState("kg");
  const [toUnit, setToUnit] = useState("gr");
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
      gr: 1,
      kg: 0.001,
      ons: 0.01,
      ton: 0.000001,
      cg: 100,
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
                <option value="ton">ton</option>
                <option value="kg">kg</option>
                <option value="ons">ons</option>
                <option value="gr">gr</option>
                <option value="cg">cg</option>
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
                <option value="ton">ton</option>
                <option value="kg">kg</option>
                <option value="ons">ons</option>
                <option value="gr">gr</option>
                <option value="cg">cg</option>
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

export default Mass