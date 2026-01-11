import React from "react";
import { useState } from "react";
import { MdDiscount } from "react-icons/md";
import { FaTag, FaMoneyBillWave } from "react-icons/fa";

const Discount = () => {
  const [hargaAwal, setHargaAwal] = useState("");
  const [besarDiskon, setBesarDiskon] = useState("");
  const [hargaSetelahDiskon, setHargaSetelahDiskon] = useState(null);
  const [keuntungan, setKeuntungan] = useState(null);

  const handleChangeHargaAwal = (e) => {
    setHargaAwal(e.target.value);
  };
  const handleDiskon = (e) => {
    setBesarDiskon(e.target.value);
  };
  const calculate = () => {
    if (hargaAwal && besarDiskon) {
      const diskon = besarDiskon * 0.01;
      const potongan = hargaAwal * diskon;
      setHargaSetelahDiskon(hargaAwal - potongan);
      setKeuntungan(potongan);
    }
  };

  const formatRupiah = (num) => {
    if (num === null) return "-";
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(num);
  };

  const inputClass = `w-full rounded-2xl px-4 py-4 bg-primary text-text-dark dark:text-text
                      shadow-neu-pressed
                      outline-none transition-all duration-300
                      placeholder:text-text-muted`;

  return (
    <div className="min-h-[calc(100vh-76px)] w-full px-4 py-6 bg-primary transition-colors duration-300 animate-fadeIn">
      <div className="max-w-md mx-auto">
        {/* Header Icon */}
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 rounded-2xl bg-teal-500/20 flex items-center justify-center
                          shadow-neu-btn dark:shadow-neu-btn">
            <MdDiscount className="text-3xl text-teal-500" />
          </div>
        </div>

        {/* Main Card */}
        <div className="p-6 rounded-3xl bg-primary shadow-neu-flat dark:shadow-neu-flat">
          
          {/* Input Fields */}
          <div className="space-y-4 mb-6">
            <div>
              <label className="text-sm font-medium text-text-muted block mb-2">Harga Awal (Rp)</label>
              <input
                type="number"
                inputMode="decimal"
                className={inputClass}
                placeholder="Masukkan harga awal..."
                value={hargaAwal}
                onChange={handleChangeHargaAwal}
              />
            </div>

            <div>
              <label className="text-sm font-medium text-text-muted block mb-2">Besar Diskon (%)</label>
              <div className="relative">
                <input
                  type="number"
                  inputMode="decimal"
                  className={`${inputClass} pr-12`}
                  placeholder="Masukkan diskon..."
                  value={besarDiskon}
                  onChange={handleDiskon}
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-teal-500 font-bold">%</span>
              </div>
            </div>
          </div>

          {/* Calculate Button */}
          <button
            onClick={calculate}
            className="w-full py-4 rounded-2xl font-semibold text-white
                      bg-linear-to-r from-teal-400 to-teal-600
                      shadow-neu-btn dark:shadow-neu-btn
                      hover:scale-[1.02] active:scale-[0.98] transition-all duration-200
                      mb-6"
          >
            Hitung Diskon
          </button>

          {/* Results */}
          <div className="grid grid-cols-2 gap-4">
            {/* Final Price Card */}
            <div className="p-4 rounded-2xl bg-primary
                          shadow-neu-flat dark:shadow-neu-flat
                          transition-all duration-300 hover:scale-[1.02]">
              <div className="flex items-center gap-2 mb-2">
                <FaTag className="text-teal-500" />
                <p className="text-xs text-text-muted">Harga Akhir</p>
              </div>
              <p className="text-lg font-bold bg-linear-to-r from-teal-400 to-teal-600 bg-clip-text text-transparent">
                {formatRupiah(hargaSetelahDiskon)}
              </p>
            </div>

            {/* Savings Card */}
            <div className="p-4 rounded-2xl bg-primary
                          shadow-neu-flat dark:shadow-neu-flat
                          transition-all duration-300 hover:scale-[1.02]">
              <div className="flex items-center gap-2 mb-2">
                <FaMoneyBillWave className="text-green-500" />
                <p className="text-xs text-text-muted">Anda Hemat</p>
              </div>
              <p className="text-lg font-bold bg-linear-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
                {formatRupiah(keuntungan)}
              </p>
            </div>
          </div>

          {/* Discount Preview */}
          {hargaAwal && besarDiskon && hargaSetelahDiskon !== null && (
            <div className="mt-6 p-4 rounded-2xl
                          shadow-neu-pressed dark:shadow-neu-pressed
                          text-center">
              <p className="text-sm text-text-muted">
                <span className="line-through">{formatRupiah(parseFloat(hargaAwal))}</span>
                <span className="mx-2">→</span>
                <span className="font-bold text-teal-500">{formatRupiah(hargaSetelahDiskon)}</span>
              </p>
              <div className="mt-2 inline-block px-3 py-1 rounded-full bg-linear-to-r from-red-400 to-red-600 text-white text-xs font-bold">
                -{besarDiskon}% OFF
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Discount;
