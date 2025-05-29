import React from 'react';

export default function FeaturedProduct() {
  return (
    <main className="bg-white text-gray-900 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 font-[Oswald]">
      {/* Top Product Section */}
      <section
        className="grid grid-cols-1 md:grid-cols-2 gap-6 border border-gray-200 p-6 relative"
        style={{
          backgroundImage: 'radial-gradient(#d9d9d9 1px, transparent 1px)',
          backgroundSize: '20px 20px',
        }}
      >
        {/* Left Image */}
        <div className="relative bg-gray-50 flex justify-center items-center p-10">
          <img
            src="https://storage.googleapis.com/a1aa/image/fde90904-177f-4e2e-28d3-f006dfc5491b.jpg"
            alt="Black modern chair"
            className="max-w-full h-auto"
            width={320}
            height={400}
          />
          <div
            className="absolute top-4 right-4 bg-sky-400 text-white text-xs font-semibold px-2 py-1 tracking-wider"
            style={{
              clipPath: 'polygon(0 0, 100% 0, 100% 100%, 50% 80%, 0 100%)',
            }}
          >
            NEW
          </div>
        </div>

        {/* Right Detail */}
        <div className="border border-gray-200 p-6 flex flex-col justify-center">
          <h2 className="font-bold text-sm uppercase mb-2">SACRIFICIAL CHAIR DESIGN</h2>

          <div className="flex items-center space-x-2 mb-2 text-xs text-sky-400">
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <i className="far fa-star" key={i}></i>
              ))}
            </div>
            <span className="text-gray-700">| 10 review(s)</span>
            <span className="text-gray-700">|</span>
            <a href="#" className="text-gray-700 hover:underline">
              Add your review
            </a>
          </div>

          <div className="mb-3">
            <span className="font-bold text-sky-700 text-lg">£170.00</span>
            <span className="text-gray-700 line-through ml-3">£69.00</span>
          </div>

          <div className="text-xs text-gray-700 mb-1">
            <span>Size:</span>{' '}
            <a href="#" className="text-sky-400 italic hover:underline">
              Large
            </a>
          </div>
          <div className="text-xs text-gray-700 mb-4">
            <span>Color:</span>{' '}
            <a href="#" className="text-sky-400 italic hover:underline">
              Grey white & Brown
            </a>
          </div>
          <div className="text-xs text-gray-400 italic mb-6">
            <span>Dimensions:</span>{' '}
            <a href="#" className="text-sky-400 italic hover:underline">
              Height: 13cm x Length: 15cm
            </a>
          </div>

          {/* Countdown */}
          <div className="flex justify-between max-w-md">
            {[
              { value: 11, label: 'days', offset: 40 },
              { value: 13, label: 'hours', offset: 30 },
              { value: 17, label: 'minutes', offset: 20 },
              { value: 43, label: 'seconds', offset: 60 },
            ].map(({ value, label, offset }, i) => (
              <div
                key={i}
                className="flex flex-col items-center text-xs text-gray-700"
              >
                <svg className="w-16 h-16" fill="none" viewBox="0 0 36 36">
                  <circle
                    cx="18"
                    cy="18"
                    r="16"
                    stroke="#d9d9d9"
                    strokeWidth="4"
                  />
                  <circle
                    cx="18"
                    cy="18"
                    r="16"
                    stroke="#7cb9d9"
                    strokeDasharray="100"
                    strokeDashoffset={offset}
                    strokeLinecap="round"
                    strokeWidth="4"
                    transform="rotate(-90 18 18)"
                  />
                </svg>
                <span className="font-semibold -mt-12">{value}</span>
                <span className="uppercase font-extralight mt-1">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Header */}
      <section className="mt-20 text-center max-w-3xl mx-auto">
        <h3 className="font-bold text-sm uppercase mb-1">FEATURED PRODUCTS</h3>
        <p className="italic text-xs text-gray-600">
          Claritas est etiam processus dynamicus, qui sequitur.
        </p>
      </section>

      {/* Featured Products Grid */}
      <section className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {[
          { src: '7f2f86b2-bf75-479d-108b-19c54226b57d', hasNew: true },
          { src: 'cd03f380-eee6-4554-e90d-01d5564e14f3', hasNew: false },
          { src: '1b939224-fa47-4ad1-cf15-bdf6a8933e65', hasNew: true },
          { src: '2b977c80-ef92-48bb-834b-149eccefdaab', hasNew: false },
        ].map(({ src, hasNew }, i) => (
          <div
            key={i}
            className="relative bg-gray-50 p-6 flex flex-col items-center"
          >
            <img
              src={`https://storage.googleapis.com/a1aa/image/${src}.jpg`}
              alt="Product"
              className="mb-4"
              width={160}
              height={180}
            />
            {hasNew && (
              <div
                className="absolute top-4 right-4 bg-sky-400 text-white text-xs font-semibold px-2 py-1 tracking-wider"
                style={{
                  clipPath:
                    'polygon(0 0, 100% 0, 100% 100%, 50% 80%, 0 100%)',
                }}
              >
                NEW
              </div>
            )}
            <p className="italic text-xs text-gray-700 mb-1 text-center">
              Sacrificial Chair Design
            </p>
            <div className="flex items-center justify-center space-x-2 w-full">
              <a
                href="#"
                className="text-sky-400 text-xs italic hover:underline"
              >
                £170.00
              </a>
              <i className="fas fa-shopping-bag text-gray-500 text-sm"></i>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
