import React from "react";
import { useState } from "react";

const Discount = () => {
  const [hargaAwal, setHargaAwal] = useState(0);
  const [besarDiskon, setBesarDiskon] = useState(0);

  const [hargaSetelahDiskon, setHargaSetelahDiskon]= useState("0")
  const [keuntungan, setkeuntungan]= useState("0")

  const handleChangeHargaAwal = (e) => {
    setHargaAwal(e.target.value);
  };
  const handleDiskon = (e) => {
    setBesarDiskon(e.target.value);
  };
  const calculate = () => {
    const diskon = besarDiskon*0.01;
    setHargaSetelahDiskon(String(hargaAwal*diskon));
    setkeuntungan(String(hargaAwal-hargaAwal*diskon ));
  };
  return (
    <div className="discount w-full -mt-10 text-center flex-col gap-10 flex justify-center items-center h-screen">
      <div className="w-96">
        <h1 className="text-3xl font-bold mb-5">Discount Calculator</h1>
        <div className="input-group mb-3 flex flex-row gap-5 items-center justify-center">
          <label className="block mb-2">Harga Awal:</label>
          <input
            type="number"
            className="border border-gray-300 rounded px-3 py-2 w-64"
            placeholder="Masukan Harga Awal..."
            value={hargaAwal}
            onChange={handleChangeHargaAwal}
          />
        </div>
        <div className="input-group mb-3 flex flex-row gap-5 items-center justify-center">
          <label className="block mb-2"> Besar diskon:</label>
          <input
            type="number"
            className="border border-gray-300 rounded px-3 py-2 w-64"
            placeholder="Masukan Besar Diskon..."
            value={besarDiskon}
            onChange={handleDiskon}
          />
        </div>
        <button
          type="submit"
          value="Hitung"
          onClick={calculate}
          className="border border-gray-300 rounded px-3 py-2 w-full bg-tertiary text-white cursor-pointer hover:bg-secondary transition"
        >
        Hitung</button>
      </div>
      <div className="hasil grid grid-cols-2 gap-5 mt-10">
        <div className="border border-gray-300 rounded px-3 py-2 w-64">
          <h2 className="text-xl font-bold mb-5">Harga Setelah Diskon:</h2>
          <p className="text-lg font-bold mb-5">{hargaSetelahDiskon}</p>
        </div>
        <div className="border border-gray-300 rounded px-3 py-2 w-80">
          <h2 className="text-xl font-bold mb-5">
            Keuntungan yang anda dapat:
          </h2>
          <p className="text-lg font-bold mb-5">{keuntungan}</p>
        </div>
      </div>
    </div>
  );
};

export default Discount;
