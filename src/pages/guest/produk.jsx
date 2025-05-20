import React from "react";

export default function Product({ image, title, description, price, isNew }) {
  return (
    <div className="relative bg-white border rounded-lg shadow-sm overflow-hidden group hover:shadow-md transition">
      {/* NEW Badge */}
      {isNew && (
        <div className="absolute top-2 left-2 bg-blue-500 text-white text-[10px] px-2 py-1 rounded-full uppercase font-bold z-10">
          NEW
        </div>
      )}

      <img src={image} alt={title} className="w-full h-48 object-cover" />

      <div className="p-4">
        <h3 className="text-sm font-semibold text-gray-800">{title}</h3>
        <p className="text-xs text-gray-500">{description}</p>
        <p className="text-sm font-bold text-cyan-600 mt-2">{price}</p>
      </div>
    </div>
  );
}
