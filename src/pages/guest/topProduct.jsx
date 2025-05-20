import React from "react";

export default function TopProductCard({ image, title, subtitle, price }) {
  return (
    <div className="bg-white border rounded-lg shadow-md p-4 w-64 text-center transition duration-300 hover:bg-[#e0f2f5] hover:scale-105 cursor-pointer">
      <img src={image} alt={title} className="w-full h-40 object-cover mb-4 rounded-md transition duration-300" />
      <h3 className="font-semibold text-sm text-gray-800 group-hover:text-[#4a7a87]">{title}</h3>
      <p className="text-xs text-gray-600 mb-2">{subtitle}</p>
      <span className="font-bold text-[#4a7a87]">{price}</span>
    </div>
  );
}
