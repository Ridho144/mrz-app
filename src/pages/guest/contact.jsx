import React from 'react';

const Contact = () => {
  return (
    <div className="bg-white font-sans max-w-7xl mx-auto px-4 py-16">
      {/* Testimonial Section */}
      <div className="flex flex-col items-center justify-center relative max-w-xl mx-auto text-center">
        <div className="mb-4">
          <img
            src="https://storage.googleapis.com/a1aa/image/4c80ac2c-f6c0-45e5-9b9c-bec3857f5602.jpg"
            alt="Profile photo of a man with beard and tattoos, circular crop"
            className="w-24 h-24 rounded-full object-cover"
            width="100"
            height="100"
          />
        </div>
        <h3 className="font-extrabold text-sm text-gray-900 mb-1">MICHEL SMITH</h3>
        <p className="text-xs text-sky-400 mb-6">DEVELOPER</p>
        <p className="text-gray-600 italic text-center text-sm leading-relaxed max-w-lg">
          Typi non habent claritatem insitam, est usus legentis in iis qui facit eorum claritatem.
          Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius. Claritas
          est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est
          notare quam littera gothica.
        </p>
      </div>

      {/* Features Section */}
      <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {[
          {
            title: 'FREE SHIPPING WORLDWIDE',
            desc: 'Free shipping worldwide',
          },
          {
            title: '24/7 CUSTOMER SERVICE',
            desc: 'Free shipping worldwide',
          },
          {
            title: 'MONEY BACK GUARANTEE!',
            desc: 'Free shipping worldwide',
          },
        ].map((feature, index) => (
          <div
            key={index}
            className="border border-gray-300 p-8 flex flex-col items-center text-center group transition-all duration-200"
          >
            <i className="fas fa-headphones-alt text-4xl text-gray-600 mb-6"></i>
            <h4 className="font-extrabold text-gray-700 text-sm mb-1 group-hover:text-sky-400 transition-colors duration-200">
              {feature.title}
            </h4>
            <p className="italic text-gray-600 text-xs group-hover:text-sky-400 transition-colors duration-200">
              {feature.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contact;
