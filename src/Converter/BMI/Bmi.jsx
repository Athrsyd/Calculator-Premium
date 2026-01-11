import React from "react";
import { GrRestroomWomen, GrRestroomMen } from "react-icons/gr";
import { IoIosBody } from "react-icons/io";
import { useState } from "react";

const Bmi = () => {
  const [gender, setGender] = useState("");
  const [berat, setBerat] = useState("");
  const [tinggi, setTinggi] = useState("");
  const [bmi, setBmi] = useState(null);
  const [isField, setIsField] = useState(true);
  const [ket, setKet] = useState("");

  const handleOnChangeBerat = (e) => {
    setBerat(e.target.value);
  };
  const handleOnChangeTinggi = (e) => {
    setTinggi(e.target.value);
  };
  const CalculateBmi = () => {
    if (berat === "" || tinggi === "" || gender === "") {
      setIsField(false);
      setBmi(null);
      setKet("Lengkapi semua data");
    } else {
      setIsField(true);
      const tinggiDalamMeter = tinggi * 0.01;
      const result = berat / tinggiDalamMeter ** 2;
      setBmi(result.toFixed(1));
      getKeterangan(result);
    }
  };

  const resetForm = () => {
    setGender("");
    setBerat("");
    setTinggi("");
    setBmi(null);
    setKet("");
    setIsField(true);
  };

  const getKeterangan = (bmi) => {
    if (bmi < 18.5) {
      setKet("Kurang berat badan");
    } else if (18.5 <= bmi && bmi <= 22.9) {
      setKet("Berat badan normal");
    } else if (23 <= bmi && bmi <= 29.9) {
      setKet("Berat badan berlebih");
    } else if (30 <= bmi) {
      setKet("Obesitas");
    } else {
      setKet("invalid");
    }
  };

  const getBmiColor = () => {
    if (!bmi) return "from-gray-400 to-gray-500";
    const bmiNum = parseFloat(bmi);
    if (bmiNum < 18.5) return "from-blue-400 to-blue-600";
    if (bmiNum <= 22.9) return "from-green-400 to-green-600";
    if (bmiNum <= 29.9) return "from-yellow-400 to-orange-500";
    return "from-red-400 to-red-600";
  };

  const inputClass = `w-full rounded-2xl px-4 py-4 bg-primary text-text-dark dark:text-text
                      shadow-neu-pressed
                      outline-none transition-all duration-300
                      placeholder:text-text-muted`;

  const bmiCategories = [
    { range: "< 18.5", label: "Kurang", color: "bg-blue-500" },
    { range: "18.5 - 24.9", label: "Normal", color: "bg-green-500" },
    { range: "25 - 29.9", label: "Berlebih", color: "bg-yellow-500" },
    { range: "≥ 30", label: "Obesitas", color: "bg-red-500" },
  ];

  return (
    <div className="min-h-[calc(100vh-76px)] w-full px-4 py-6 bg-primary transition-colors duration-300 animate-fadeIn">
      <div className="max-w-md mx-auto">
        {/* Header Icon */}
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 rounded-2xl bg-pink-500/20 flex items-center justify-center
                          shadow-neu-btn dark:shadow-neu-btn">
            <IoIosBody className="text-3xl text-pink-500" />
          </div>
        </div>

        {/* Main Card */}
        <div className="p-6 rounded-3xl bg-primary shadow-neu-flat dark:shadow-neu-flat">
          
          {/* BMI Categories Mini */}
          <div className="flex justify-center gap-2 mb-6">
            {bmiCategories.map((cat, i) => (
              <div key={i} className="flex items-center gap-1">
                <div className={`w-2 h-2 rounded-full ${cat.color}`}></div>
                <span className="text-[10px] text-text-muted">{cat.label}</span>
              </div>
            ))}
          </div>

          {/* Gender Selection */}
          <div className="mb-6">
            <label className="text-sm font-medium text-text-muted block mb-3 text-center">Pilih Gender</label>
            <div className="flex gap-4 justify-center">
              <button
                onClick={() => setGender("laki-laki")}
                type="button"
                className={`flex-1 max-w-30 p-4 rounded-2xl flex flex-col items-center gap-2
                          transition-all duration-300
                          ${gender === "laki-laki" 
                            ? "bg-blue-500/20 shadow-neu-pressed dark:shadow-neu-pressed" 
                            : "bg-primary shadow-neu-btn dark:shadow-neu-btn hover:scale-[1.02]"}`}
              >
                <GrRestroomMen className={`text-3xl ${gender === "laki-laki" ? "text-blue-500" : "text-text-muted"}`} />
                <span className={`text-xs font-medium ${gender === "laki-laki" ? "text-blue-500" : "text-text-dark dark:text-text"}`}>
                  Laki-laki
                </span>
              </button>

              <button
                onClick={() => setGender("perempuan")}
                type="button"
                className={`flex-1 max-w-30 p-4 rounded-2xl flex flex-col items-center gap-2
                          transition-all duration-300
                          ${gender === "perempuan" 
                            ? "bg-pink-500/20 shadow-neu-pressed dark:shadow-neu-pressed" 
                            : "bg-primary shadow-neu-btn dark:shadow-neu-btn hover:scale-[1.02]"}`}
              >
                <GrRestroomWomen className={`text-3xl ${gender === "perempuan" ? "text-pink-500" : "text-text-muted"}`} />
                <span className={`text-xs font-medium ${gender === "perempuan" ? "text-pink-500" : "text-text-dark dark:text-text"}`}>
                  Perempuan
                </span>
              </button>
            </div>
            {!isField && !gender && (
              <span className="text-red-500 block mt-2 text-[10px] text-center">*Pilih gender</span>
            )}
          </div>

          {/* Input Fields */}
          <div className="space-y-4 mb-6">
            <div>
              <label className="text-sm font-medium text-text-muted block mb-2">Berat Badan (kg)</label>
              <input
                type="number"
                inputMode="decimal"
                className={inputClass}
                placeholder="Contoh: 60"
                value={berat}
                onChange={handleOnChangeBerat}
              />
              {!isField && !berat && (
                <span className="text-red-500 block mt-1 text-[10px]">*Masukkan berat badan</span>
              )}
            </div>

            <div>
              <label className="text-sm font-medium text-text-muted block mb-2">Tinggi Badan (cm)</label>
              <input
                type="number"
                inputMode="decimal"
                className={inputClass}
                placeholder="Contoh: 170"
                value={tinggi}
                onChange={handleOnChangeTinggi}
              />
              {!isField && !tinggi && (
                <span className="text-red-500 block mt-1 text-[10px]">*Masukkan tinggi badan</span>
              )}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 mb-6">
            <button
              type="button"
              onClick={CalculateBmi}
              className="flex-1 py-4 rounded-2xl font-semibold text-white
                        bg-linear-to-r from-pink-400 to-pink-600
                        shadow-neu-btn dark:shadow-neu-btn
                        hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
            >
              Hitung BMI
            </button>
            <button
              type="button"
              onClick={resetForm}
              className="px-6 py-4 rounded-2xl font-semibold text-text-dark dark:text-text
                        bg-primary
                        shadow-neu-btn dark:shadow-neu-btn
                        hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
            >
              Reset
            </button>
          </div>

          {/* Result Display */}
          {(bmi || ket) && (
            <div className="p-5 rounded-2xl bg-primary
                          shadow-neu-pressed dark:shadow-neu-pressed
                          text-center">
              {bmi && (
                <div className="mb-2">
                  <span className="text-sm text-text-muted">BMI Anda</span>
                  <p className={`text-4xl font-bold bg-linear-to-r ${getBmiColor()} bg-clip-text text-transparent`}>
                    {bmi}
                  </p>
                </div>
              )}
              <p className={`text-sm font-medium ${bmi ? `bg-linear-to-r ${getBmiColor()} bg-clip-text text-transparent` : 'text-red-500'}`}>
                {ket}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Bmi;
