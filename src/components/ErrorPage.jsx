import { Link } from "react-router-dom";

export default function ErrorPage({ code, description }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center p-10">
      <h1 className="text-7xl font-extrabold text-green-500 mb-4">{code}</h1>
      <p className="text-xl text-gray-600">{description}</p>

      <Link
        to="/"
        className="mt-6 inline-block px-5 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
      >
        ⬅️ Back to Home
      </Link>
    </div>
  );
}
