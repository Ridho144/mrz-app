import { useState } from "react";
import InputGaji from "./components/InputGaji";

export default function HitungGajiForm() {
  const [gaji, setGaji] = useState("");
  const totalGaji = gaji - gaji * 0.11;

  return (
    <div className="flex flex-col items-center justify-center m-5 p-5 bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-semibold text-center mb-4 text-gray-700">
          Hitung Gaji Bersih
        </h2>

        <InputGaji
          label="Gaji Pokok"
          type="number"
          placeholder="Masukkan jumlah gaji"
          onChange={(e) => setGaji(e.target.value)}
        />

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1">
            Pajak: <b className="text-red-500">11%</b>
          </label>
        </div>

        {gaji > 0 && (
          <div className="mt-4 p-3 bg-blue-100 border-l-4 border-blue-500 text-blue-700">
            <p className="font-semibold">
              Total Take Home Pay (THP): Rp {totalGaji.toLocaleString()}
            </p>
          </div>
        )}

        <button className="w-full bg-green-500 text-white p-2 rounded mt-4">
          Hitung
        </button>
      </div>
    </div>
  );
}