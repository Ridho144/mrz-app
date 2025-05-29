import React from "react";

export default function Header() {
  return (
    <div className="bg-white text-gray-700 font-['Poppins'] relative z-50">
      {/* Top bar */}
      <div className="w-full border-b border-gray-200">
        <div className="max-w-screen-xl mx-auto flex justify-between text-xs text-gray-600 px-4 py-2">
          <div className="flex space-x-2 items-center">
            <button className="flex items-center space-x-1 hover:text-gray-900">
              <span>ENGLISH</span>
              <i className="fas fa-chevron-down text-[8px]"></i>
            </button>
            <span>/</span>
            <button className="flex items-center space-x-1 hover:text-gray-900">
              <span>USD</span>
              <i className="fas fa-chevron-down text-[8px]"></i>
            </button>
          </div>
          <div className="flex space-x-6 items-center text-[10px] uppercase tracking-wide">
            <a href="#" className="hover:text-gray-900">MY ACCOUNT</a>
            <a href="#" className="hover:text-gray-900">WISHLIST</a>
            <a href="#" className="hover:text-gray-900">CHECKOUT</a>
            <a href="#" className="hover:text-gray-900">LOGIN</a>
          </div>
        </div>
      </div>

      {/* Main nav bar */}
      <nav className="bg-gray-900 relative">
        <div className="max-w-screen-xl mx-auto flex items-center justify-between px-4 py-4 relative">
          {/* Logo */}
          <a href="#" className="flex items-center space-x-2">
            <div className="flex flex-col space-y-1">
              <span className="block w-5 h-1 rounded-full bg-sky-400"></span>
              <span className="block w-5 h-1 rounded-full bg-sky-400"></span>
              <span className="block w-3 h-1 rounded-full bg-sky-400"></span>
            </div>
            <span className="text-white font-extrabold text-xl select-none">
              Sedap
            </span>
          </a>

          {/* Menu */}
          <ul className="hidden md:flex space-x-8 text-sm font-semibold text-white relative">
            {/* HOME with Dropdown */}
            <li className="group relative">
              <a href="#" className="text-sky-400 hover:text-sky-400">HOME</a>
              <ul className="absolute top-full left-0 bg-white text-gray-700 shadow-md py-2 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all z-40">
                <li className="px-6 py-2 hover:bg-gray-100 cursor-pointer">Home V1</li>
                <li className="px-6 py-2 hover:bg-gray-100 cursor-pointer">Home V2</li>
                <li className="px-6 py-2 hover:bg-gray-100 cursor-pointer">Home V3</li>
              </ul>
            </li>

            {/* PRODUCTS with Dropdown */}
            <li className="group relative">
              <a href="#" className="hover:text-sky-400">PRODUCTS</a>
              <ul className="absolute top-full left-0 bg-white text-gray-700 shadow-md py-2 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all z-40">
                <li className="px-6 py-2 hover:bg-gray-100 cursor-pointer">Grid Default</li>
                <li className="px-6 py-2 hover:bg-gray-100 cursor-pointer">Grid List</li>
                <li className="px-6 py-2 hover:bg-gray-100 cursor-pointer">Grid Sidebar</li>
                <li className="px-6 py-2 hover:bg-gray-100 cursor-pointer">List Sidebar</li>
              </ul>
            </li>

            {/* COLLECTION */}
            <li>
              <a href="#" className="hover:text-sky-400">COLLECTION</a>
            </li>

            {/* PAGES with Mega Menu */}
            <li className="group relative">
              <a href="#" className="hover:text-sky-400">PAGES</a>
              <div className="absolute top-full left-0 w-full bg-white text-gray-800 shadow-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-40">
                <div className="max-w-7xl mx-auto grid grid-cols-4 divide-x divide-gray-200">
                  {/* Blog */}
                  <div className="px-6 py-8">
                    <h3 className="text-sm font-semibold text-gray-900 flex items-center">
                      <span className="inline-block w-0.5 h-6 bg-[#2f6cb1] mr-2"></span>
                      Blog
                    </h3>
                    <ul className="mt-6 space-y-4 text-sm text-gray-700">
                      <li className="border-b border-gray-200 pb-2">Blog Two Cols</li>
                      <li className="border-b border-gray-200 pb-2">Blog Three Cols</li>
                      <li className="border-b border-gray-200 pb-2">Blog Posts</li>
                    </ul>
                  </div>
                  {/* Product Elements */}
                  <div className="px-6 py-8">
                    <h3 className="text-sm font-semibold text-gray-900 flex items-center">
                      <span className="inline-block w-0.5 h-6 bg-[#2f6cb1] mr-2"></span>
                      Product Elements
                    </h3>
                    <ul className="mt-6 space-y-4 text-sm text-gray-700">
                      <li className="border-b border-gray-200 pb-2">Product Checkouts</li>
                      <li className="border-b border-gray-200 pb-2">Product Details</li>
                      <li className="border-b border-gray-200 pb-2">Shopping Cart</li>
                    </ul>
                  </div>
                  {/* Theme Elements */}
                  <div className="px-6 py-8">
                    <h3 className="text-sm font-semibold text-gray-900 flex items-center">
                      <span className="inline-block w-0.5 h-6 bg-[#2f6cb1] mr-2"></span>
                      Theme Elements
                    </h3>
                    <ul className="mt-6 space-y-4 text-sm text-gray-700">
                      <li className="border-b border-gray-200 pb-2">Skills</li>
                      <li className="border-b border-gray-200 pb-2">Team & Testimonials</li>
                      <li className="border-b border-gray-200 pb-2">Errors</li>
                    </ul>
                  </div>
                  {/* Image */}
                  <div className="px-6 py-8 flex items-center justify-center">
                    <img
                      src="https://storage.googleapis.com/a1aa/image/a84090bd-c232-4158-f20c-5c703d21b327.jpg"
                      alt="Example"
                      className="max-w-full h-auto w-40"
                    />
                  </div>
                </div>
              </div>
            </li>

            {/* ABOUT US */}
            <li>
              <a href="#" className="hover:text-sky-400">ABOUT US</a>
            </li>

            {/* CONTACT US */}
            <li>
              <a href="#" className="hover:text-sky-400">CONTACT US</a>
            </li>
          </ul>

          {/* Cart and Search */}
          <div className="flex items-center space-x-6 text-white text-lg relative">
            <a href="#" className="relative">
              <i className="fas fa-shopping-cart"></i>
              <span className="absolute -top-2 -right-3 bg-sky-400 text-white text-xs font-semibold rounded-full w-5 h-5 flex items-center justify-center">
                3
              </span>
            </a>
            <a href="#" className="hover:text-sky-400">
              <i className="fas fa-search"></i>
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}
