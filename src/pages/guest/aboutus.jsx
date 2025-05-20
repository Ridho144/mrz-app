import React from "react";

export default function aboutus() {
  return (
    <div className="bg-[#e6e6e6] relative overflow-x-hidden font-[Inter]">
      {/* Top Section with Services */}
      <section className="max-w-7xl mx-auto px-6 py-20 flex flex-col md:flex-row justify-center gap-12 relative z-10">
        {/* Creative Design */}
        <div
          className="bg-white bg-opacity-30 backdrop-blur-[40px] rounded-3xl p-10 max-w-xs flex flex-col items-center text-center relative"
          style={{ boxShadow: "0 0 40px 10px rgba(255 255 255 / 0.3)" }}
        >
          <img
            src="https://storage.googleapis.com/a1aa/image/68963bb1-9795-404c-82ab-ffb86062ef09.jpg"
            alt="Creative Design"
            className="mb-6"
            width="80"
            height="80"
          />
          <h3 className="text-gray-700 font-semibold text-lg mb-3">
            Creative Design
          </h3>
          <p className="text-gray-500 text-sm leading-relaxed">
            Get your documents out the door fast to keep deals with automatic
            notifications, on-the-fly editing, and integrated.
          </p>

          {/* Decorative Shapes */}
          <div className="absolute top-2 left-1/2 -translate-x-1/2 w-4 h-4 border-2 border-yellow-400 rounded-full" />
          <div
            className="absolute top-10 left-3 w-3 h-3 border-2 border-pink-400 rotate-45"
            style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
          />
          <div className="absolute bottom-6 right-6 w-4 h-4 border-2 border-pink-400 rotate-45" />
          <div className="absolute top-1/2 right-2 w-3 h-3 border-2 border-teal-400 rotate-45" />
          <div className="absolute top-1/2 left-0 w-4 h-4 border-2 border-blue-400 rounded-full" />
        </div>

        {/* SEO Consultants */}
        <div className="max-w-xs flex flex-col items-center text-center text-gray-600">
          <img
            src="https://storage.googleapis.com/a1aa/image/916a295e-84c0-400e-4138-3da84e361c66.jpg"
            alt="SEO Consultants"
            className="mb-6"
            width="80"
            height="80"
          />
          <h3 className="text-gray-700 font-semibold text-lg mb-3">
            SEO Consultants
          </h3>
          <p className="text-gray-500 text-sm leading-relaxed">
            Get your documents out the door fast to keep deals with automatic
            notifications, on-the-fly editing, and integrated.
          </p>
        </div>

        {/* App Development */}
        <div className="max-w-xs flex flex-col items-center text-center text-gray-600">
          <img
            src="https://storage.googleapis.com/a1aa/image/5d29473f-e93f-4746-a94f-7a85418c17c0.jpg"
            alt="App Development"
            className="mb-6"
            width="80"
            height="80"
          />
          <h3 className="text-gray-700 font-semibold text-lg mb-3">
            App Development
          </h3>
          <p className="text-gray-500 text-sm leading-relaxed">
            Get your documents out the door fast to keep deals with automatic
            notifications, on-the-fly editing, and integrated.
          </p>
        </div>
      </section>

      {/* Bottom Section */}
      <section className="max-w-7xl mx-auto px-6 pb-20 flex flex-col md:flex-row items-center justify-center gap-12 relative z-10">
        <div className="flex-shrink-0 max-w-md md:max-w-lg">
          <img
            src="https://storage.googleapis.com/a1aa/image/de6fbc65-35fd-4151-83ca-648643527622.jpg"
            alt="Illustration"
            className="w-full h-auto"
            width="400"
            height="300"
          />
        </div>
        <div className="max-w-xl text-center md:text-left">
          <p className="text-xs text-gray-500 font-semibold tracking-widest mb-2">
            ABOUT US
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-700 leading-tight mb-4">
            Business Growth Beyond{" "}
            <span className="font-extrabold text-gradient bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-600 text-transparent bg-clip-text">
              Your Imagination.
            </span>
          </h2>
          <p className="text-gray-500 text-sm leading-relaxed max-w-md">
            We design new concepts, prototypes and processes for the next
            generation of services and experiences, ready for the market.
          </p>
        </div>
      </section>

      {/* Scroll to top button */}
      <button
        aria-label="Scroll to top"
        className="fixed bottom-10 right-10 w-10 h-10 bg-white bg-opacity-70 backdrop-blur-md rounded-full flex items-center justify-center text-gray-600 hover:text-gray-900 transition"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <i className="fas fa-arrow-up" />
      </button>
    </div>
  );
}
