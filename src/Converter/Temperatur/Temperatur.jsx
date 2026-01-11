import React from 'react'
import { useState } from 'react'
import { FaTemperatureHigh } from "react-icons/fa";

const Temperatur = () => {
  const [value, setValue] = useState("");
  const [fromUnit, setFromUnit] = useState("celcius");
  const emptyResult = { celcius: "0", fahrenheit: "0", reamur: "0", kelvin: "0" };
  
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const handleBaseChange = (e) => {
    setFromUnit(e.target.value);
  };

  const convertNumber = (value, fromBase) => {
    const numberResult = parseFloat(value);
    let C;
    switch (fromBase) {
      case "celcius":
        C = numberResult;
        break;
      case "fahrenheit":
        C = (numberResult-32) * 5/9;
        break;
      case "reamur":
        C = numberResult * 5/4;
        break;
      case "kelvin":
        C = numberResult - 273.15;
        break;
      default:
        C = 0;
    }
        
    if (Number.isNaN(numberResult)) {
      return emptyResult;
    }
    return {
      celcius: C,
      fahrenheit: (C*9/5)+32,
      reamur: C*0.8,
      kelvin: C+273.15,
    };
  }
  const result = value ? convertNumber(value, fromUnit) : emptyResult;

  const inputClass = `w-full rounded-2xl px-4 py-4 bg-primary text-text-dark dark:text-text text-center text-lg
                      shadow-neu-pressed dark:shadow-neu-pressed
                      outline-none transition-all duration-300
                      placeholder:text-text-muted`;

  const selectClass = `w-full rounded-2xl px-4 py-4 bg-primary text-text-dark dark:text-text
                       shadow-neu-btn dark:shadow-neu-btn
                       outline-none cursor-pointer transition-all duration-300`;

  const resultCards = [
    { label: "Celsius", value: result.celcius, unit: "°C", color: "from-red-400 to-orange-400" },
    { label: "Fahrenheit", value: result.fahrenheit, unit: "°F", color: "from-orange-400 to-yellow-400" },
    { label: "Reamur", value: result.reamur, unit: "°R", color: "from-pink-400 to-red-400" },
    { label: "Kelvin", value: result.kelvin, unit: "K", color: "from-blue-400 to-cyan-400" },
  ];

  return (
    <div className="min-h-[calc(100vh-76px)] w-full px-4 py-6 bg-primary transition-colors duration-300 animate-fadeIn">
      <div className="max-w-md mx-auto">
        {/* Header Icon */}
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 rounded-2xl bg-red-500/20 flex items-center justify-center
                          shadow-neu-btn dark:shadow-neu-btn">
            <FaTemperatureHigh className="text-3xl text-red-500" />
          </div>
        </div>

        {/* Input Card */}
        <div className="p-6 rounded-3xl bg-primary mb-6 shadow-neu-flat dark:shadow-neu-flat">
          
          <div className="space-y-3">
            <select
              value={fromUnit}
              onChange={handleBaseChange}
              className={selectClass}
            >
              <option value="celcius">Celsius</option>
              <option value="fahrenheit">Fahrenheit</option>
              <option value="reamur">Reamur</option>
              <option value="kelvin">Kelvin</option>
            </select>
            <input
              type="text"
              className={inputClass}
              value={value}
              onChange={handleChange}
              placeholder="Masukkan suhu"
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
              <p className="text-xs text-text-muted mb-1">{item.label}</p>
              <div className="flex items-baseline gap-1">
                <span className={`text-2xl font-bold bg-linear-to-r ${item.color} bg-clip-text text-transparent`}>
                  {Number(item.value).toFixed(2)}
                </span>
                <span className="text-sm text-text-muted">{item.unit}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Temperatur