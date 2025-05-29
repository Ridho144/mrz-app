import { useState } from "react";
import products from "./products.json";

// Warna untuk setiap jenis tag
const tagColors = {
  smartphone: "bg-blue-200 text-blue-800",
  laptop: "bg-green-200 text-green-800",
  headphones: "bg-purple-200 text-purple-800",
  gaming: "bg-red-200 text-red-800",
  tablet: "bg-yellow-200 text-yellow-800",
  smartwatch: "bg-teal-200 text-teal-800",
  "VR headset": "bg-pink-200 text-pink-800",
  default: "bg-gray-200 text-gray-800",
};

// Daftar warna gradient untuk kartu produk
const cardBackgrounds = [
  "from-blue-300 to-purple-400",
  "from-green-300 to-yellow-400",
  "from-red-300 to-pink-400",
];

export default function ProductList() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  // Ambil kategori unik dari produk
  const categories = ["All", ...new Set(products.map((product) => product.category))];

  // Filter produk berdasarkan search dan kategori
  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === "" || selectedCategory === "All" || product.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="p-8">
      {/* Search Input */}
      <div className="mb-4 flex flex-col md:flex-row md:items-center md:justify-between">
        <input
          type="text"
          placeholder="Cari produk..."
          className="w-full md:w-1/2 p-2 border border-gray-300 rounded mb-2 md:mb-0"
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        {/* Filter Dropdown */}
        <select
          className="w-full md:w-1/4 p-2 border border-gray-300 rounded"
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      {/* Daftar Produk */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product, index) => (
            <div
              key={product.id}
              className={`relative bg-gradient-to-br ${
                cardBackgrounds[index % cardBackgrounds.length]
              } border rounded-lg shadow-xl p-6 hover:shadow-2xl transition transform hover:scale-105 hover:brightness-110`}
            >
              {/* Simulasi gambar produk */}
              <div className="h-40 bg-white bg-opacity-50 flex items-center justify-center rounded-lg mb-4">
                <span className="text-gray-500">Gambar Produk</span>
              </div>

              {/* Nama Produk */}
              <h2 className="text-lg font-bold text-white">{product.title}</h2>
              <p className="text-white text-sm mt-1">{product.description}</p>

              {/* Harga & Diskon */}
              <div className="mt-2 flex items-center">
                <span className="text-white font-semibold text-lg">
                  ${product.price.toFixed(2)}
                </span>
                {product.discountPercentage > 0 && (
                  <span className="ml-2 text-sm text-red-800 bg-red-300 px-2 py-1 rounded-full">
                    -{product.discountPercentage}%
                  </span>
                )}
              </div>

              {/* Brand */}
              <p className="text-sm text-white mt-1">Brand: {product.brand}</p>

              {/* Tags dengan warna berbeda */}
              <div className="mt-2">
                {product.tags.map((tag, index) => (
                  <span
                    key={index}
                    className={`px-2 py-1 text-xs rounded-full mr-2 ${
                      tagColors[tag.toLowerCase()] || tagColors.default
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Tombol Aksi */}
              <button className="mt-4 bg-white text-gray-900 font-bold px-4 py-2 rounded-lg w-full hover:bg-gray-200 transition">
                Beli Sekarang
              </button>
            </div>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">
            Tidak ada produk yang sesuai dengan pencarian atau filter.
          </p>
        )}
      </div>
    </div>
  );
}
