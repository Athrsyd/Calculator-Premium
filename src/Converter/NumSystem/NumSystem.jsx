import React from "react";
import { useState } from "react";
import { GoNumber } from "react-icons/go";

const NumSystem = () => {
  const [value, setValue] = useState("");
  const [fromBase, setFromBase] = useState("desimal");
  const emptyResult = { desimal: "0", oktal: "0", hexadesimal: "0", biner: "0" };
  
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const handleBaseChange = (e) => {
    setFromBase(e.target.value);
  };
  const convertNumber = (value, fromBase) => {
    let decimalValue;
    switch (fromBase) {
      case "desimal":
        decimalValue = parseInt(value, 10);
        break;
      case "oktal":
        decimalValue = parseInt(value, 8);
        break;
      case "hexadesimal":
        decimalValue = parseInt(value, 16);
        break;
      case "biner":
        decimalValue = parseInt(value, 2);
        break;
      default:
        decimalValue = 0;
    }
        
    if (isNaN(decimalValue)) {
      return emptyResult;
    }
    return {
      desimal: decimalValue.toString(10),
      oktal: decimalValue.toString(8),
      hexadesimal: decimalValue.toString(16).toUpperCase(),
      biner: decimalValue.toString(2),
    };
  }
  const result = value ? convertNumber(value, fromBase) : emptyResult;

  const inputClass = `w-full rounded-2xl px-4 py-4 bg-primary text-text-dark dark:text-text text-center text-lg
                      shadow-neu-pressed dark:shadow-neu-pressed
                      outline-none transition-all duration-300
                      placeholder:text-text-muted`;

  const selectClass = `w-full rounded-2xl px-4 py-4 bg-primary text-text-dark dark:text-text
                       shadow-neu-btn dark:shadow-neu-btn
                       outline-none cursor-pointer transition-all duration-300`;

  const resultCards = [
    { label: "Desimal", value: result.desimal, prefix: "10", color: "from-cyan-400 to-blue-400" },
    { label: "Oktal", value: result.oktal, prefix: "8", color: "from-green-400 to-teal-400" },
    { label: "Hexadesimal", value: result.hexadesimal, prefix: "16", color: "from-purple-400 to-pink-400" },
    { label: "Biner", value: result.biner, prefix: "2", color: "from-orange-400 to-red-400" },
  ];

  return (
    <div className="min-h-[calc(100vh-76px)] w-full px-4 py-6 bg-primary transition-colors duration-300 animate-fadeIn">
      <div className="max-w-md mx-auto">
        {/* Header Icon */}
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 rounded-2xl bg-cyan-500/20 flex items-center justify-center
                          shadow-neu-btn dark:shadow-neu-btn">
            <GoNumber className="text-3xl text-cyan-500" />
          </div>
        </div>

        {/* Input Card */}
        <div className="p-6 rounded-3xl bg-primary mb-6 shadow-neu-flat dark:shadow-neu-flat">
          
          <div className="space-y-3">
            <select
              value={fromBase}
              onChange={handleBaseChange}
              className={selectClass}
            >
              <option value="desimal">Desimal</option>
              <option value="oktal">Oktal</option>
              <option value="hexadesimal">Hexa</option>
              <option value="biner">Biner</option>
            </select>
            <input
              type="text"
              className={`${inputClass} font-mono`}
              value={value}
              onChange={handleChange}
              placeholder="Masukkan angka"
            />
          </div>
        </div>

        {/* Results Grid */}
        <div className="grid grid-cols-2 gap-4">
          {resultCards.map((item, index) => (
            <div
              key={item.label}
              className="p-4 rounded-2xl bg-primary
                        shadow-neu-flat dark:shadow-neu-flat
                        transition-all duration-300 hover:scale-[1.02]"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center justify-between mb-2">
                <p className="text-xs text-text-muted">{item.label}</p>
                <span className={`text-[10px] px-2 py-0.5 rounded-full bg-linear-to-r ${item.color} text-white font-medium`}>
                  Base {item.prefix}
                </span>
              </div>
              <p className={`text-xl font-bold font-mono bg-linear-to-r ${item.color} bg-clip-text text-transparent break-all`}>
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NumSystem;
