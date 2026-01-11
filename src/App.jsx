import React from "react";
import Kalkulator from "./Components/KalkulatorNormal/Kalkulator.jsx";
import Navbar from "./Components/Navbar/Navbar.jsx";
import { Route, Routes } from "react-router";
import KonverterMenu from "./Components/KonverterMenu/KonverterMenu.jsx";
import NavConvert from "./Components/NavConvert/NavConvert.jsx";
import Length from "./Converter/Length/Length.jsx";
import Mass from "./Converter/Mass/Mass.jsx";
import Temperatur from "./Converter/Temperatur/Temperatur.jsx";
import Area from "./Converter/Area/Area.jsx";
import Time from "./Converter/Time/Time.jsx";
import NumSystem from "./Converter/NumSystem/NumSystem.jsx";
import Bmi from "./Converter/BMI/Bmi.jsx";
import Volume from "./Converter/Volume/Volume.jsx";
import Discount from "./Converter/Discount/Discount.jsx";

const App = () => {
  return (
    <>
      
      <Routes>
        <Route path="/" element={<><Navbar /><Kalkulator /></>} />
        <Route path="/convert" element={<><Navbar /><KonverterMenu /></>} />
        <Route path="/convert/length" element={<><NavConvert title={"Konversi satuan panjang"} /> <Length/></>} />
        <Route path="/convert/mass" element={<><NavConvert title={"Konversi satuan massa"}  /> <Mass/></>} />
        <Route path="/convert/temperatur" element={<><NavConvert title={"Konversi satuan suhu"}  /> <Temperatur/></>} />
        <Route path="/convert/area" element={<><NavConvert title={"Konversi satuan area"}  /> <Area/></>} />
        <Route path="/convert/time" element={<><NavConvert title={"Konversi satuan waktu"} /> <Time/></>} />
        <Route path="/convert/numSystem" element={<><NavConvert title={"Konversi sistem angka"} /> <NumSystem/></>} />
        <Route path="/convert/bmi" element={<><NavConvert title={"Kalkulator BMI"} /> <Bmi/></>} />
        <Route path="/convert/volume" element={<><NavConvert title={"Konversi satuan volume"} /> <Volume/></>} />
        <Route path="/convert/discount" element={<><NavConvert title={"Kalkulator potongan harga"} /> <Discount/></>} />
      </Routes>
    </>
  );
};

export default App;
