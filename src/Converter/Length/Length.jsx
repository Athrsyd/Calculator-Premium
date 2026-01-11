import React from "react";
import { useState } from "react";
import { FaRuler, FaExchangeAlt } from "react-icons/fa";

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
          <div className="w-16 h-16 rounded-2xl bg-blue-500/20 flex items-center justify-center
                          shadow-neu-btn dark:shadow-neu-btn">
            <FaRuler className="text-3xl text-blue-500" />
          </div>
        </div>

        {/* Converter Card */}
        <div className="p-6 rounded-3xl bg-primary shadow-neu-flat dark:shadow-neu-flat">
          
          {/* From Section */}
          <div className="space-y-3">
            <label className="text-sm font-medium text-text-muted">Dari</label>
            <select
              className={selectClass}
              value={fromUnit}
              onChange={handleChangeFromUnit}
            >
              <option value="meter">Meter</option>
              <option value="kilometer">Kilometer</option>
              <option value="centimeter">Centimeter</option>
              <option value="millimeter">Millimeter</option>
              <option value="inch">Inch</option>
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
              <FaExchangeAlt className="text-blue-500 rotate-90" />
            </button>
          </div>

          {/* To Section */}
          <div className="space-y-3">
            <label className="text-sm font-medium text-text-muted">Ke</label>
            <select
              className={selectClass}
              value={toUnit}
              onChange={handleChangeToUnit}
            >
              <option value="meter">Meter</option>
              <option value="kilometer">Kilometer</option>
              <option value="centimeter">Centimeter</option>
              <option value="millimeter">Millimeter</option>
              <option value="inch">Inch</option>
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
                      bg-linear-to-r from-blue-400 to-blue-600
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

export default Length;
