import React from "react";
import Kalkulator from "./Components/KalkulatorNormal/Kalkulator.jsx";
import Navbar from "./Components/Navbar/Navbar.jsx";
import { Route, Routes } from "react-router";
import KonverterMenu from "./Components/KonverterMenu/KonverterMenu.jsx";
import NavConvert from "./Components/NavConvert/NavConvert.jsx";
import Length from "./Converter/Length/Length.jsx";
import Mass from "./Converter/mass/mass.jsx";
import Temperatur from "./Converter/temperatur/temperatur.jsx";
import Area from "./Converter/area/area.jsx";
import Time from "./Converter/time/time.jsx";
import NumSystem from "./Converter/numSystem/numSystem.jsx";
import Bmi from "./Converter/BMI/Bmi.jsx";
import Volume from "./Converter/Volume/Volume.jsx";
import Discount from "./Converter/Discount/Discount.jsx";

const App = () => {
  return (
    <>
      
      <Routes>
        <Route path="/" element={<><Navbar /><Kalkulator /></>} />
        <Route path="/convert" element={<><Navbar /><KonverterMenu /></>} />
        <Route path="/convert/length" element={<><NavConvert /> <Length/></>} />
        <Route path="/convert/mass" element={<><NavConvert /> <Mass/></>} />
        <Route path="/convert/temperatur" element={<><NavConvert /> <Temperatur/></>} />
        <Route path="/convert/area" element={<><NavConvert /> <Area/></>} />
        <Route path="/convert/time" element={<><NavConvert /> <Time/></>} />
        <Route path="/convert/numSystem" element={<><NavConvert /> <NumSystem/></>} />
        <Route path="/convert/bmi" element={<><NavConvert /> <Bmi/></>} />
        <Route path="/convert/volume" element={<><NavConvert /> <Volume/></>} />
        <Route path="/convert/discount" element={<><NavConvert /> <Discount/></>} />
      </Routes>
    </>
  );
};

export default App;
