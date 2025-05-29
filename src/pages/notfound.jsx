import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-800">404</h1>
        <p className="text-xl mt-4 text-gray-600">Halaman tidak ditemukan</p>
        <p className="mt-2 text-gray-500">
          Maaf, halaman yang kamu cari tidak tersedia atau telah dipindahkan.
        </p>
        <Link
          to="/"
          className="mt-6 inline-block px-5 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
        >
          ⬅️ Kembali ke Beranda
        </Link>
      </div>
    </div>
  );
}
