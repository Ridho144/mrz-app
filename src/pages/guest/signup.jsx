import React from 'react';

const SignUp = () => {
  return (
    <section className="relative bg-[#f2f2f2] min-h-[280px] flex items-center justify-center px-4">
      {/* Gambar kursi kiri */}
      <img
        alt="Modern chair with black legs and grey seat and backrest on left side"
        className="absolute left-0 top-1/2 -translate-y-1/2 max-h-[250px] object-contain"
        src="https://storage.googleapis.com/a1aa/image/d60399de-c7a1-45b6-aa00-0ce21c9d0a21.jpg"
        style={{ maxWidth: '150px' }}
        width="150"
        height="250"
      />
      {/* Gambar daun kanan */}
      <img
        alt="Large green leaf with visible veins on right side"
        className="absolute right-0 top-1/2 -translate-y-1/2 max-h-[250px] object-contain"
        src="https://storage.googleapis.com/a1aa/image/5e2774c1-a0d7-4029-ec8d-590b49b11300.jpg"
        style={{ maxWidth: '150px' }}
        width="150"
        height="250"
      />

      {/* Konten Formulir */}
      <div className="max-w-3xl w-full text-center">
        <h2 className="text-black text-xl sm:text-2xl font-bold mb-2" style={{ fontFamily: 'Oswald, sans-serif' }}>
          SIGN UP TO NEWSLETTER
        </h2>
        <p className="text-gray-700 italic mb-6 text-sm sm:text-base leading-relaxed px-4">
          Subscribe to the Eren mailing list to receive updates on new arrivals,
          <br />
          special offers and other discount information.
        </p>
        <form className="flex max-w-3xl mx-auto">
          <input
            type="email"
            placeholder="Subscribe to our newsletter..."
            className="flex-grow border border-gray-300 px-4 py-2 text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-400"
          />
          <button
            type="submit"
            aria-label="Subscribe"
            className="border border-gray-300 border-l-0 px-4 py-2 text-gray-600 hover:text-gray-900 focus:outline-none"
          >
            <i className="fas fa-paper-plane"></i>
          </button>
        </form>
      </div>
    </section>
  );
};

export default SignUp;
