import { useState, useEffect } from "react";

const LogicGrafik = (initA = 1, initB = 0, initC = 0) => {
  const [a, setA] = useState(initA);
  const [b, setB] = useState(initB);
  const [c, setC] = useState(initC);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [graphData, setGraphData] = useState([]);
  const [analysis, setAnalysis] = useState(null);
  const [rangeX, setRangeX] = useState({ min: -10, max: 10 });
  const [rangeY, setRangeY] = useState({ min: -10, max: 10 });

  const hitungPuncak = (a, b, c) => {
    const x = -b / (2 * a);
    const y = a * x * x + b * x + c;
    return {
      x: parseFloat(x.toFixed(3)),
      y: parseFloat(y.toFixed(3)),
    };
  };

  const hitungAkar = (a, b, c) => {
    const deskriminan = b * b - 4 * a * c;

    if (deskriminan > 0) {
      const akar1 = (-b + Math.sqrt(deskriminan)) / (2 * a);
      const akar2 = (-b - Math.sqrt(deskriminan)) / (2 * a);
      return {
        tipe: "dua",
        akarAkar: [parseFloat(akar1.toFixed(3)), parseFloat(akar2.toFixed(3))],
        deskriminan: parseFloat(deskriminan.toFixed(3)),
      };
    } else if (deskriminan === 0) {
      const akar = -b / (2 * a);
      return {
        tipe: "satu",
        akarAkar: [parseFloat(akar.toFixed(3))],
        deskriminan: 0,
      };
    } else {
      return {
        tipe: "none",
        akarAkar: [],
        deskriminan: parseFloat(deskriminan.toFixed(3)),
      };
    }
  };

  const generateGraphData = (nilaiA, nilaiB, nilaiC, costumRangeX = null) => {
    const titikPuncak = hitungPuncak(nilaiA, nilaiB, nilaiC);
    const akarAkarPenyelesaian = hitungAkar(nilaiA, nilaiB, nilaiC);

    let minX;
    let maxX;

    if (costumRangeX) {
      minX = costumRangeX.min;
      maxX = costumRangeX.max;
    } else {
      minX = titikPuncak.x - 10;
      maxX = titikPuncak.x + 10;

      if (akarAkarPenyelesaian.tipe !== "none") {
        const semuaTitikX = [...akarAkarPenyelesaian.akarAkar, titikPuncak.x];
        minX = Math.min(...semuaTitikX) - 5;
        maxX = Math.max(...semuaTitikX) + 5;
      }
    }

    const garis = [];
    const step = (maxX - minX) / 150;

    for (let x = minX; x <= maxX; x += step) {
      const y = nilaiA * x ** 2 + nilaiB * x + nilaiC;
      garis.push({
        x: parseFloat(x.toFixed(2)),
        y: parseFloat(y.toFixed(2)),
      });
    }
    return garis;
  };

  const analisaFungsiKuadrat = (nilaiA, nilaiB, nilaiC) => {
    const titikPuncak = hitungPuncak(nilaiA, nilaiB, nilaiC);
    const akarAkarPenyelesaian = hitungAkar(nilaiA, nilaiB, nilaiC);
    const titikPotongY = nilaiC;
    const arahParabola = a > 0 ? "membuka keatas" : "membuka kebawah";
    const jenisPuncak = a > 0 ? "minimum" : "maximun";
    const sumbuSimetri = titikPuncak.x;
    const range = a > 0 
      ? `y ≥ ${titikPuncak.y.toFixed(2)}` 
      : `y ≤ ${titikPuncak.y.toFixed(2)}`;

    return {
      titikPuncak,
      akarAkarPenyelesaian,
      titikPotongY,
      arahParabola,
      jenisPuncak,
      sumbuSimetri,
      range,
    };
  };

  useEffect(() => {
    if (a !== 0) {
      try {
        const data = generateGraphData(a, b, c, rangeX);
        const hasil = analisaFungsiKuadrat(a, b, c);
        setGraphData(data);
        setAnalysis(hasil);

        if (data.length > 0) {
          const yValues = data.map((point) => point.y);
          setRangeY({
            min: Math.min(...yValues),
            max: Math.max(...yValues),
          });
        }
      } catch (error) {
        console.error("Error bang :", error);
      }
    }
  }, [a, b, c, rangeX]);

  useEffect(() => {
    if (a !== 0) {
      const titikPuncak = hitungPuncak(a, b, c);
      const akarAkarPenyelesaian = hitungAkar(a, b, c);

      let minX = titikPuncak.x - 10;
      let maxX = titikPuncak.x + 10;

      if (akarAkarPenyelesaian.tipe !== "none") {
        const semuaTitikX = [...akarAkarPenyelesaian.akarAkar, titikPuncak.x];
        let minX = Math.min(...semuaTitikX) - 5;
        let maxX = Math.max(...semuaTitikX) + 5;
      }
      setRangeX({ min: minX, max: maxX });
      const data = generateGraphData(a, b, c);
      const hasil = analisaFungsiKuadrat(a, b, c);
      setGraphData(data);
      setAnalysis(hasil);
    }
  }, []);

  const handleZoomIn = () => {
    const centerX = (rangeX.min + rangeX.max) / 2;
    const currentRange = rangeX.max - rangeX.min;
    const newRange = currentRange / 1.5;

    setRangeX({
      min: centerX - newRange / 2,
      max: centerX + newRange / 2,
    });

    setZoomLevel((prev) => prev * 1.5);
  };

  const handleZoomOut = () => {
    const centerX = (rangeX.min + rangeX.max) / 2;
    const currentRange = rangeX.max - rangeX.min;
    const newRange = currentRange * 1.5;

    setRangeX({
      min: centerX - newRange / 2,
      max: centerX + newRange / 2,
    });

    setZoomLevel((prev) => prev / 1.5);
  };

  const handleResetZoom = () => {
    const titikPuncak = hitungPuncak(a, b, c);
    const akarAkarPenyelesaian = hitungAkar(a, b, c);

    let minX = titikPuncak.x - 10;
    let maxX = titikPuncak.x + 10;

    if (akarAkarPenyelesaian.tipe !== "none") {
      const semuaTitikX = [...akarAkarPenyelesaian.akarAkar, titikPuncak.x];
      let minX = Math.min(...semuaTitikX) - 5;
      let maxX = Math.max(...semuaTitikX) + 5;
    }

    setRangeX({ min: minX, max: maxX });
    setZoomLevel(1);
  };


  const handleChangeInput = (koefisien, value) => {
    if (value === "" || value === "-") {
      if (koefisien === "a") setA(value);
      if (koefisien === "b") setB(value);
      if (koefisien === "c") setC(value);
      return;
    }

    const numValue = Number(value);
    if (!Number.isFinite(numValue)) return;

    if (koefisien === "a") setA(numValue);
    if (koefisien === "b") setB(numValue);
    if (koefisien === "c") setC(numValue);
  };
  return {
// State
    a,
    b,
    c,
    zoomLevel,
    graphData,
    analysis,
    rangeX,
    rangeY,
    
    // Functions
    handleChangeInput,
    handleZoomIn,
    handleZoomOut,
    handleResetZoom,
  };
};

export default LogicGrafik;
