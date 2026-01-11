import React from 'react'
import { useState } from 'react'

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
  
  return (
    <div className="numSystem w-full text-center -mt-10 flex-col gap-10 flex justify-center items-center h-screen">
      <div>
        <select
          name="Pilih Bentuk Awal"
          id=""
          className="border-2 border-black p-2 m-2"
          value={fromUnit}
          onChange={handleBaseChange}
        >
          <option value="celcius">Celcius</option>
          <option value="fahrenheit">Fahrenheit</option>
          <option value="reamur">Reamur</option>
          <option value="kelvin">Kelvin</option>
        </select>
        <input
          type="text"
          className="border-2 border-black p-2 m-2"
          value={value}
          onChange={handleChange}
        />

        {/* <button onClick={()=>test()}>test</button> */}
      </div>
      <div className="hasil grid grid-cols-2 w-1/2 mx-auto text-center">
        <div className="desimal border-2 border-black p-2 m-2">
          <h3>Celsius</h3>
          <p>{Number(result.celcius).toFixed(2)}°C</p>
        </div>
        <div className="oktal border-2 border-black p-2 m-2">
          <h3>Fahrenheit</h3>
          <p>{Number(result.fahrenheit).toFixed(2)}°F</p>
        </div>
        <div className="hexadesimal border-2 border-black p-2 m-2">
          <h3>Reamur</h3>
          <p>{Number(result.reamur).toFixed(2)}°R</p>
        </div>
        <div className="biner border-2 border-black p-2 m-2">
          <h3>Kelvin</h3>
          <p>{Number(result.kelvin).toFixed(2)}°K</p>
        </div>
      </div>
    </div>
  )
}

export default Temperatur