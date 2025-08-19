"use client";
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
// Add these CSS imports
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// List of image paths relative to the public folder
const logos = [
  "/images/clients/a1.jpg",
  "/images/clients/b1.jpg",
  "/images/clients/c1.jpg",
  "/images/clients/d1.jpg",
  "/images/clients/e1.jpg",
  "/images/clients/f1.jpg",
  "/images/clients/g1.jpg",
  "/images/clients/h1.jpg",
  "/images/clients/i1.jpg",
  "/images/clients/j1.jpg",
  "/images/clients/Travtips.webp",
];

// Custom arrow components - Fixed structure
const CustomPrevArrow = ({ onClick }) => (
  <button
    className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 text-white hover:text-gray-300 text-2xl"
    onClick={onClick}
    aria-label="Previous"
  >
    <FaArrowLeft />
  </button>
);

const CustomNextArrow = ({ onClick }) => (
  <button
    className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 text-white hover:text-gray-300 text-2xl"
    onClick={onClick}
    aria-label="Next"
  >
    <FaArrowRight />
  </button>
);

// Dynamically import Slider with no SSR
const Slider = dynamic(() => import("react-slick"), { 
  ssr: false,
  loading: () => (
    <div className="flex justify-center items-center h-32">
      <div className="text-white">Loading...</div>
    </div>
  )
});

const ClientsService = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 5000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // Don't render slider on server side
  if (!isClient) {
    return (
      <section className="py-20 relative bg-black text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold">Our Clients</h2>
          <div className="flex justify-center items-center h-32">
            <div className="text-white">Loading...</div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 relative bg-black text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Our Clients</h2>

        {/* Set height for the logo container */}
        <div className="relative w-full overflow-hidden">
          {/* Left Fog */}
          <div className="absolute top-0 left-0 h-full w-[80px] md:w-[200px] bg-gradient-to-r from-black to-transparent opacity-100 z-10 pointer-events-none"></div>

          {/* Right Fog */}
          <div className="absolute top-0 right-0 h-full w-[80px] md:w-[200px] bg-gradient-to-l from-black to-transparent opacity-100 z-10 pointer-events-none"></div>

          {/* Slider */}
          <Slider {...settings}>
            {logos.map((logo, index) => (
              <div key={index} className="px-4">
                <div className="flex justify-center items-center">
                  <div className="relative w-full h-[90px] max-w-[200px] mx-auto">
                    <Image
                      src={logo}
                      alt={`Client logo ${index + 1}`}
                      className="object-contain bg-white p-2 rounded"
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default ClientsService;