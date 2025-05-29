import React, { useState, useEffect } from "react";
import TopProductCard from "./topProduct";
import Product from "./produk";
import BannerSection from "./BannerSection";
import FeaturedProduct from "./fearturedproduct";
import BlogSection from "./blog";
import SignUp from "./signup";
import Contact from "./contact";
import Footer from "./footer";

export default function dashboardguest() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    "https://storage.googleapis.com/a1aa/image/0c9abc11-ccf2-4d11-55f1-de7e97e91fa1.jpg",
    "https://d2xjmi1k71iy2m.cloudfront.net/dairyfarm/id/images/807/0880725_PE617347_S4.webp",
  ];

  const nextSlide = () => setCurrentImageIndex((prev) => (prev + 1) % images.length);
  const prevSlide = () => setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  const topProducts = [
    {
      image: "https://storage.googleapis.com/a1aa/image/7847de6b-6f1a-4615-9646-dae13b88e357.jpg",
      title: "ERENHOME DECO",
      subtitle: "Creative home deco ideal",
      price: "$167.00",
    },
    {
      image: "https://storage.googleapis.com/a1aa/image/f8baf6ad-5e73-4066-88dc-b5f550154550.jpg",
      title: "MEGA SALE\nOFF UP TO",
      subtitle: "Lamps & Lighting",
      price: "$167.00",
    },
    {
      image: "https://storage.googleapis.com/a1aa/image/6e71576a-04b3-4b10-b2eb-a785eb9c195a.jpg",
      title: "CREATIVE\nTABLE DESIGN",
      subtitle: "Creative home deco ideal",
      price: "$167.00",
    },
  ];

  const newArrivals = [
    {
      image: "https://storage.googleapis.com/a1aa/image/613954e8-3e99-4198-8ec7-48ce5f84c0ab.jpg",
      title: "Modern Chair",
      description: "Sacrificial Chair Design",
      price: "£170.00",
    },
    {
      image: "https://storage.googleapis.com/a1aa/image/aa29af61-6cfe-49e0-2766-a2773fcf4e37.jpg",
      title: "Brown Jacket",
      description: "Sacrificial Chair Design",
      price: "£170.00",
      isNew: true,
    },
    {
      image: "https://storage.googleapis.com/a1aa/image/da85604b-69cb-4a99-7752-a53a303ac102.jpg",
      title: "Ceiling Lamp",
      description: "Sacrificial Chair Design",
      price: "£170.00",
    },
    {
      image: "https://storage.googleapis.com/a1aa/image/fcdf1b5c-e491-491b-f082-ec709571e3d9.jpg",
      title: "Beige Backpack",
      description: "Sacrificial Chair Design",
      price: "£170.00",
    },
  ];

  return (
    <div className="bg-white text-gray-900" style={{ fontFamily: "'Poppins', sans-serif" }}>
      {/* Hero Section */}
      <section className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] flex flex-col md:flex-row items-center justify-between px-6 sm:px-12 md:px-20 bg-[#b6d7df]">
        <div className="max-w-xl select-none py-10 md:py-0">
          <p className="text-gray-600 font-semibold text-xs sm:text-sm md:text-base uppercase mb-1">
            NEW ARRIVALS
          </p>
          <h1 className="font-extrabold text-[40px] sm:text-[48px] md:text-[56px] text-gray-500 leading-tight">
            NEW STYLE
          </h1>
          <h2 className="font-light text-[40px] sm:text-[48px] md:text-[56px] text-gray-400 leading-tight">
            FOR LAMP
          </h2>
        </div>

        <div className="w-full md:w-1/2 flex justify-center mt-6 md:mt-0">
          <img
            src={images[currentImageIndex]}
            alt="Banner"
            className="w-full h-auto max-w-md rounded-xl shadow-lg object-cover transition duration-500"
          />
        </div>

        <button aria-label="Previous" onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 bg-[#6a8f9a] w-10 h-10 rounded-full flex items-center justify-center text-white hover:bg-[#4a7a87] transition-colors duration-300">
          <i className="fas fa-chevron-left"></i>
        </button>
        <button aria-label="Next" onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 bg-white w-10 h-10 rounded-full flex items-center justify-center text-[#4a7a87] hover:bg-[#e5e5e5] transition-colors duration-300">
          <i className="fas fa-chevron-right"></i>
        </button>
      </section>

      {/* Top Product Cards */}
      <div className="flex justify-center gap-6 mt-16 px-4 sm:px-6 md:px-0">
        {topProducts.map((item, idx) => (
          <TopProductCard key={idx} {...item} />
        ))}
      </div>

      {/* New Arrivals */}
      <div className="text-center mt-20 px-4">
        <h2 className="text-black font-bold text-lg leading-tight">NEW ARRIVALS</h2>
        <p className="italic text-xs text-black/60 mt-1 max-w-md mx-auto">
          Claritas est etiam processus dynamicus, qui sequitur.
        </p>
      </div>

      <div className="relative max-w-7xl mx-auto mt-10 px-4 sm:px-6 md:px-0">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {newArrivals.map((item, idx) => (
            <Product key={idx} {...item} />
          ))}
        </div>
      </div>

      {/* Featured Product Section */}
      <FeaturedProduct />

      
      {/* Banner Section */}
      <BannerSection />

      <BlogSection />

      <SignUp/>

      <Contact/>

      <Footer/>

    </div>
  );
}

