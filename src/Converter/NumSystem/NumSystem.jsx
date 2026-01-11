import React from "react";
import { useState } from "react";

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

  // const test= ()=> {
  //   console.log(value);
  //   console.log(fromBase);
  // }

  return (
    <div className="numSystem w-full text-center -mt-10 flex-col gap-10 flex justify-center items-center h-screen">
      <div>
        <select
          name="Pilih Bentuk Awal"
          id=""
          className="border-2 border-black p-2 m-2 "
          value={fromBase}
          onChange={handleBaseChange}
        >
          <option value="desimal">desimal</option>
          <option value="oktal">oktal</option>
          <option value="hexadesimal">hexadesimal</option>
          <option value="biner">biner</option>
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
          <h3>Desimal</h3>
          <p>{result.desimal}</p>
        </div>
        <div className="oktal border-2 border-black p-2 m-2">
          <h3>Oktal</h3>
          <p>{result.oktal}</p>
        </div>
        <div className="hexadesimal border-2 border-black p-2 m-2">
          <h3>Hexadesimal</h3>
          <p>{result.hexadesimal}</p>
        </div>
        <div className="biner border-2 border-black p-2 m-2">
          <h3>Biner</h3>
          <p>{result.biner}</p>
        </div>
      </div>
    </div>
  );
};

export default NumSystem;
