import React from 'react'
import { useState } from "react";
import { AiOutlineClockCircle } from "react-icons/ai";
import { FaExchangeAlt } from "react-icons/fa";

const Time = () => {
  const [fromUnit, setFromUnit] = useState("menit");
  const [toUnit, setToUnit] = useState("jam");
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
      jam: 8760,
      menit: 525600,
      detik: 3.154e+7,
      milidetik: 3.154e+10,
      hari: 365,
      bulan: 12,
      tahun: 1,
    };
    const valueInTh = value / conversionRates[fromUnit];
    const convertedValue = valueInTh * conversionRates[toUnit];
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
          <div className="w-16 h-16 rounded-2xl bg-amber-500/20 flex items-center justify-center
                          shadow-neu-btn dark:shadow-neu-btn">
            <AiOutlineClockCircle className="text-3xl text-amber-500" />
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
              <option value="tahun">tahun</option>
              <option value="bulan">bulan</option>
              <option value="hari">hari</option>
              <option value="jam">jam</option>
              <option value="menit">menit</option>
              <option value="detik">detik</option>
              <option value="milidetik">ms</option>
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
              <FaExchangeAlt className="text-amber-500 rotate-90" />
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
              <option value="tahun">tahun</option>
              <option value="bulan">bulan</option>
              <option value="hari">hari</option>
              <option value="jam">jam</option>
              <option value="menit">menit</option>
              <option value="detik">detik</option>
              <option value="milidetik">ms</option>
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
                      bg-linear-to-r from-amber-400 to-amber-600
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

export default Time;