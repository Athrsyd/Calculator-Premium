import React from "react";
import { GrRestroomWomen, GrRestroomMen } from "react-icons/gr";
import { useState } from "react";

const Bmi = () => {
  const [gender, setGender] = useState("");
  const [berat, setBerat] = useState("");
  const [tinggi, setTinggi] = useState("");
  const [bmi, setBmi] = useState(null);
  const [isField, setIsField] = useState(true);
  const [ket, setKet] = useState("");

  const checkField = () => {};
  const handleOnChangeBerat = (e) => {
    setBerat(e.target.value);
  };
  const handleOnChangeTinggi = (e) => {
    setTinggi(e.target.value);
  };
  const CalculateBmi = () => {
    if (berat === "" || tinggi === "" || gender === "") {
      setIsField(false);
      setBmi("Isi semua field yang ada");
      setKet("Isi semua field yang ada");
    } else {
      setIsField(true);
      const tinggiDalamMeter = tinggi * 0.01;
      const result = berat / tinggiDalamMeter ** 2;
      setBmi(result.toFixed(1));
      getKeterangan(result);
    }
  };
  const getKeterangan = (bmi) => {
    if (bmi < 18.5) {
      setKet("Anda kurang berat badan");
    } else if (18.5 <= bmi && bmi <= 22.9) {
      setKet("Berat Badan anda normal");
    } else if (23 <= bmi && bmi <= 29.9) {
      setKet("Berat badan anda berlebih");
    } else if (30 <= bmi) {
      setKet("Anda termasuk obesitas");
    } else {
      setKet("invalid");
    }
  };

  return (
    <>
      <div className="min-h-[calc(100vh-4rem)] w-full px-4 py-10">
        <div className="mx-auto w-full max-w-2xl">
          <div className="rounded-2xl border border-black/10 bg-white/70 p-6 shadow-sm backdrop-blur sm:p-8">
            <div className="text-center">
              <h1 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
                Kalkulator BMI
              </h1>
            </div>

            <div className=" flex flex-row justify-center gap-6 w-full sm:flex-row">
              <div className="mt-6 w-1/2 rounded-xl border border-black/10 bg-neutral-50 p-4 text-left">
                <p className="text-sm font-semibold text-neutral-800">
                  Keterangan
                </p>
                <ul className="mt-2 space-y-1 text-sm text-neutral-700">
                  <li>&gt; 18,5 = Berat badan kurang</li>
                  <li>18,5–24,9 = Berat badan ideal</li>
                  <li>25–29,9 = Berat badan berlebih</li>
                  <li>30+ atau lebih = Obesitas</li>
                </ul>
              </div>
              <div className="mt-6 w-1/2 rounded-xl border border-black/10 bg-neutral-50 p-4 text-left">
                <p className="text-sm text-center font-semibold text-neutral-800">
                  Pilih Gender
                </p>
                <div className="mt-2 flex flex-row justify-center gap-4">
                  <button
                    onClick={() => setGender("laki-laki")}
                    type="button"
                    className={
                      gender === "laki-laki"
                        ? "inline-flex w-full flex-col items-center justify-center gap-2 rounded-xl border-2 border-blue-500 bg-white px-4 py-3 text-sm font-semibold text-blue-900 shadow-sm transition hover:bg-neutral-50 active:bg-neutral-100 sm:w-auto"
                        : "inline-flex w-full flex-col items-center justify-center gap-2 rounded-xl border border-black/15 bg-white px-4 py-3 text-sm font-semibold text-neutral-900 shadow-sm transition hover:bg-neutral-50 active:bg-neutral-100 sm:w-auto"
                    }
                  >
                    <span
                      className={
                        gender === "laki-laki"
                          ? "text-4xl leading-none text-blue-500"
                          : "text-4xl leading-none"
                      }
                    >
                      <GrRestroomMen />
                    </span>
                    <span className="text-sm">Laki-laki</span>
                  </button>

                  <button
                    onClick={() => setGender("perempuan")}
                    type="button"
                    className={
                      gender === "perempuan"
                        ? "inline-flex w-full flex-col items-center justify-center gap-2 rounded-xl border-2 border-pink-500 bg-white px-4 py-3 text-sm font-semibold text-pink-900 shadow-sm transition hover:bg-neutral-50 active:bg-neutral-100 sm:w-auto"
                        : "inline-flex w-full flex-col items-center justify-center gap-2 rounded-xl border border-black/15 bg-white px-4 py-3 text-sm font-semibold text-neutral-900 shadow-sm transition hover:bg-neutral-50 active:bg-neutral-100 sm:w-auto"
                    }
                  >
                    <span
                      className={
                        gender === "perempuan"
                          ? "text-4xl leading-none text-pink-500"
                          : "text-4xl leading-none"
                      }
                    >
                      <GrRestroomWomen />
                    </span>
                    <span className="text-sm">Perempuan</span>
                  </button>
                </div>
                {isField || gender ? null : (
                  <span className="text-red-600 block mt-2 text-[10px] text-center">
                    *tolong masukan keterangan gender
                  </span>
                )}
              </div>
            </div>
            <form id="bmiForm" className="mt-6 space-y-4">
              <div>
                <label
                  htmlFor="weight"
                  className="block text-sm font-medium text-neutral-800"
                >
                  Berat Badan (kg)
                </label>
                <input
                  type="number"
                  id="weight"
                  name="weight"
                  inputMode="decimal"
                  className="mt-2 w-full rounded-xl border border-black/15 bg-white px-4 py-3 text-neutral-900 shadow-sm outline-none ring-0 transition focus:border-black/30 focus:shadow"
                  placeholder="Contoh: 60"
                  value={berat}
                  onChange={handleOnChangeBerat}
                />
                {isField ||berat? null : (
                  <span className="text-red-600 block mt-2 text-[10px]">
                    *tolong masukan keterangan berat badan
                  </span>
                )}
              </div>

              <div>
                <label
                  htmlFor="height"
                  className="block text-sm font-medium text-neutral-800"
                >
                  Tinggi Badan (cm)
                </label>
                <input
                  type="number"
                  id="height"
                  name="height"
                  inputMode="decimal"
                  className="mt-2 w-full rounded-xl border border-black/15 bg-white px-4 py-3 text-neutral-900 shadow-sm outline-none ring-0 transition focus:border-black/30 focus:shadow"
                  placeholder="Contoh: 170"
                  value={tinggi}
                  onChange={handleOnChangeTinggi}
                />
                {isField || tinggi? null : (
                  <span className="text-red-600 block mt-2 text-[10px]">
                    *tolong masukan keterangan tinggi badan
                  </span>
                )}
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <button
                  type="button"
                  id="calculate"
                  className="inline-flex w-full items-center justify-center rounded-xl bg-neutral-900 px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-neutral-800 active:bg-neutral-950 sm:w-auto"
                  onClick={checkField && CalculateBmi}
                >
                  Hitung BMI
                </button>
                <button
                  type="button"
                  id="reset"
                  className="inline-flex w-full items-center justify-center rounded-xl border border-black/15 bg-white px-4 py-3 text-sm font-semibold text-neutral-900 shadow-sm transition hover:bg-neutral-50 active:bg-neutral-100 sm:ml-auto sm:w-auto"
                >
                  Reset
                </button>
              </div>

              <div
                id="result"
                className="rounded-xl border border-black/10 bg-white px-4 py-4 text-left text-sm text-neutral-800"
              >
                <span className="font-semibold">Hasil: {bmi}</span> <br />
                <span className="font-semibold">keterangan: {ket}</span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Bmi;
