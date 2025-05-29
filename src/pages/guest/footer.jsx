import React from 'react';

const Footer = () => {
  return (
    <footer className="relative bg-[#222222] text-gray-300 font-['Roboto']">
      {/* Scroll to Top Button */}
      <div className="absolute -top-7 left-1/2 -translate-x-1/2">
        <button
          aria-label="Scroll to top"
          className="bg-[#6ba6bb] w-12 h-12 rounded-full flex items-center justify-center text-white"
        >
          <i className="fas fa-angle-double-up"></i>
        </button>
      </div>

      {/* Footer Main Section */}
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-12 flex flex-wrap justify-center gap-x-20 gap-y-10 relative z-10">
        {/* About Store */}
        <div className="max-w-xs min-w-[220px]">
          <h3 className="font-['Oswald'] text-white text-lg mb-6 border-l-2 border-[#6ba6bb] pl-3 font-bold">
            ABOUT STORE
          </h3>
          <ul className="space-y-3 text-gray-400 text-sm">
            <li className="flex items-center gap-2">
              <i className="fas fa-home text-gray-400"></i>
              234 Heaven Stress, Beverly Hill.
            </li>
            <li className="flex items-center gap-2">
              <i className="fas fa-phone-alt text-gray-400"></i>
              (800) 123 456 789
            </li>
            <li className="flex items-center gap-2">
              <i className="fas fa-envelope text-gray-400"></i>
              Contact@erentheme.com
            </li>
            <li className="pt-3">
              <img
                src="https://storage.googleapis.com/a1aa/image/006d8add-3835-4a91-c84d-b200ef09c58d.jpg"
                alt="Payment method logos"
                className="inline-block"
                width="120"
                height="30"
              />
            </li>
          </ul>
        </div>

        {/* My Account */}
        <div className="max-w-xs min-w-[220px]">
          <h3 className="font-['Oswald'] text-white text-lg mb-6 border-l-2 border-[#6ba6bb] pl-3 font-bold">
            MY ACCOUNT
          </h3>
          <ul className="list-disc list-inside text-gray-400 text-sm space-y-2">
            <li className="hover:text-[#6ba6bb] transition-colors duration-300">My Account</li>
            <li className="hover:text-[#6ba6bb] transition-colors duration-300">Login</li>
            <li className="hover:text-[#6ba6bb] transition-colors duration-300">My Cart</li>
            <li className="hover:text-[#6ba6bb] transition-colors duration-300">Wishlist</li>
            <li className="hover:text-[#6ba6bb] transition-colors duration-300">Checkout</li>
            <li className="hover:text-[#6ba6bb] transition-colors duration-300">Userinfo</li>
          </ul>
        </div>

        {/* Information */}
        <div className="max-w-xs min-w-[220px]">
          <h3 className="font-['Oswald'] text-white text-lg mb-6 border-l-2 border-[#6ba6bb] pl-3 font-bold">
            INFORMATION
          </h3>
          <ul className="list-disc list-inside text-gray-400 text-sm space-y-2">
            <li className="hover:text-[#6ba6bb] transition-colors duration-300">My Account</li>
            <li className="hover:text-[#6ba6bb] transition-colors duration-300">Login</li>
            <li className="hover:text-[#6ba6bb] transition-colors duration-300">My Cart</li>
            <li className="hover:text-[#6ba6bb] transition-colors duration-300">Wishlist</li>
            <li className="hover:text-[#6ba6bb] transition-colors duration-300">Checkout</li>
            <li className="hover:text-[#6ba6bb] transition-colors duration-300">Userinfo</li>
          </ul>
        </div>

        {/* Customer Service */}
        <div className="max-w-xs min-w-[220px]">
          <h3 className="font-['Oswald'] text-white text-lg mb-6 border-l-2 border-[#6ba6bb] pl-3 font-bold">
            CUSTOMER SERVICE
          </h3>
          <ul className="list-disc list-inside text-gray-400 text-sm space-y-2">
            <li className="hover:text-[#6ba6bb] transition-colors duration-300">Shipping Policy</li>
            <li className="hover:text-[#6ba6bb] transition-colors duration-300">Compensation First</li>
            <li className="hover:text-[#6ba6bb] transition-colors duration-300">My Account</li>
            <li className="hover:text-[#6ba6bb] transition-colors duration-300">Return Policy</li>
            <li className="hover:text-[#6ba6bb] transition-colors duration-300">Contact Us</li>
            <li className="hover:text-[#6ba6bb] transition-colors duration-300">Shipping Info</li>
          </ul>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-[#1e1e1e] text-gray-500 text-sm italic py-4 px-6 flex flex-col sm:flex-row justify-between items-center max-w-7xl mx-auto">
        <p className="mb-3 sm:mb-0">
          Copyright © 2016{' '}
          <a href="#" className="text-[#6ba6bb] italic font-['Oswald']">
            Eren
          </a>
          . All Right Reserved.
        </p>
        <div className="flex space-x-6 border-l border-gray-600 pl-6 text-lg text-gray-400">
          <a
            aria-label="Facebook"
            href="#"
            className="hover:text-[#6ba6bb] transition-colors duration-300"
          >
            <i className="fab fa-facebook-f"></i>
          </a>
          <a
            aria-label="Twitter"
            href="#"
            className="hover:text-[#6ba6bb] transition-colors duration-300"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            aria-label="RSS"
            href="#"
            className="hover:text-[#6ba6bb] transition-colors duration-300"
          >
            <i className="fas fa-rss"></i>
          </a>
          <a
            aria-label="Google Plus"
            href="#"
            className="hover:text-[#6ba6bb] transition-colors duration-300"
          >
            <i className="fab fa-google-plus-g"></i>
          </a>
          <a
            aria-label="LinkedIn"
            href="#"
            className="hover:text-[#6ba6bb] transition-colors duration-300"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
