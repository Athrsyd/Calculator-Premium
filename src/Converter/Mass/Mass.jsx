import React from 'react'
import { useState } from 'react';
import { FaWeightHanging, FaExchangeAlt } from "react-icons/fa";

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

  const swapUnits = () => {
    setFromUnit(toUnit);
    setToUnit(fromUnit);
    setInputValue(outputValue);
    setOutputValue(inputValue);
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

  const inputClass = `w-full rounded-2xl px-4 py-4 bg-primary text-text-dark dark:text-text
                      shadow-neu-pressed dark:shadow-neu-pressed
                      outline-none transition-all duration-300
                      placeholder:text-text-muted`;

  const selectClass = `w-full rounded-2xl px-4 py-4 bg-primary text-text-dark dark:text-text
                       shadow-neu-btn dark:shadow-neu-btn
                       outline-none cursor-pointer transition-all duration-300`;

  return (
    <div className="min-h-[calc(100vh-76px)] w-full px-4 py-6 bg-primary transition-colors duration-300 animate-fadeIn">
      <div className="max-w-md mx-auto">
        {/* Header Icon */}
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 flex items-center justify-center
                          shadow-neu-btn dark:shadow-neu-btn">
            <FaWeightHanging className="text-3xl text-emerald-500" />
          </div>
        </div>

        {/* Converter Card */}
        <div className="p-6 rounded-3xl bg-primary shadow-neu-flat dark:shadow-neu-flat">
          
          {/* From Section */}
          <div className="space-y-3">
            <label className="text-sm font-medium text-text-muted">Dari</label>
            <select
              value={fromUnit}
              onChange={handleChangeFromUnit}
              className={selectClass}
            >
              <option value="ton">ton</option>
              <option value="kg">kg</option>
              <option value="ons">ons</option>
              <option value="gr">gr</option>
              <option value="cg">cg</option>
            </select>
            <input
              type="number"
              inputMode="decimal"
              className={inputClass}
              placeholder="Masukkan nilai"
              value={inputValue}
              onChange={handleInputChange}
            />
          </div>

          {/* Swap Button */}
          <div className="flex justify-center my-4">
            <button
              onClick={swapUnits}
              className="w-12 h-12 rounded-full bg-primary flex items-center justify-center
                        shadow-neu-btn dark:shadow-neu-btn
                        hover:scale-105 active:scale-95 transition-all duration-200
                        active:shadow-neu-btn-pressed dark:active:shadow-neu-btn-pressed"
            >
              <FaExchangeAlt className="text-emerald-500 rotate-90" />
            </button>
          </div>

          {/* To Section */}
          <div className="space-y-3">
            <label className="text-sm font-medium text-text-muted">Ke</label>
            <select
              value={toUnit}
              onChange={handleChangeToUnit}
              className={selectClass}
            >
              <option value="ton">ton</option>
              <option value="kg">kg</option>
              <option value="ons">ons</option>
              <option value="gr">gr</option>
              <option value="cg">cg</option>
            </select>
            <input
              type="number"
              inputMode="decimal"
              className={inputClass}
              placeholder="Hasil"
              value={outputValue}
              onChange={handleOutputChange}
            />
          </div>

          {/* Convert Button */}
          <button
            onClick={reConvertBtn}
            className="w-full mt-6 py-4 rounded-2xl font-semibold text-white
                      bg-linear-to-r from-emerald-400 to-emerald-600
                      shadow-neu-btn dark:shadow-neu-btn
                      hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
          >
            Konversi Ulang
          </button>
        </div>
      </div>
    </div>
  );
};

export default Mass