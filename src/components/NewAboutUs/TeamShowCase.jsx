'use client';

import React from 'react';
import Image from 'next/image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const TeamShowcase = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    customPaging: (i) => (
      <div className="w-3 h-3 rounded-full bg-gray-300 hover:bg-blue-500 transition-colors duration-300"></div>
    ),
    dotsClass: "slick-dots custom-dots",
  };

  const slides = [
    {
      id: 1,
      image: "/api/placeholder/800/400", // Replace with your actual image path
      title: "100+ Creative Minds, One Unified Vision",
      description: "At 8 Views, we blend creativity, strategy, and technology to power digital growth. Our diverse team works together to craft bold, impactful campaigns that deliver real results."
    },
    {
      id: 2,
      image: "/api/placeholder/800/400", // Replace with your actual image path
      title: "Innovation Meets Excellence",
      description: "Our collaborative approach brings together the best minds in digital marketing to create campaigns that stand out and drive meaningful results for our clients."
    },
    {
      id: 3,
      image: "/api/placeholder/800/400", // Replace with your actual image path
      title: "Crafting Digital Success Stories",
      description: "With expertise spanning creativity, strategy, and technology, we transform ideas into powerful digital experiences that resonate with audiences."
    }
  ];

  return (
    <section className="relative bg-white py-16 px-4">
      <div className="!max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-light text-gray-800">
            100+ Creative Minds, One Unified Vision
          </h2>
          <p className='mt-4 text-2xl text-gray-800'>At 8 Views, we blend creativity, strategy, and technology to power digital growth. Our diverse team works together to craft bold, impactful campaigns that deliver real results.</p>
        </div>
        
        <Slider {...settings}>
          {slides.map((slide) => (
            <div key={slide.id} className="outline-none">
              <div className="text-center mb-8">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight">
                  {slide.title}
                </h2>
                <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                  {slide.description}
                </p>
              </div>
              
              {/* Image Container with Curved Design */}
              <div className="relative mt-12">
                {/* Curved background shape */}
                <div className="absolute inset-0 transform -skew-y-1 bg-gradient-to-r from-blue-50 to-green-50 rounded-3xl"></div>
                
                {/* Main image container */}
                <div className="relative z-10 px-8 py-12">
                  <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                    {/* Curved overlay for unique shape */}
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/10 to-transparent rounded-2xl"></div>
                    
                    <img
                      src={slide.image}
                      alt="Team collaboration"
                      className="w-full h-96 md:h-[500px] object-cover transform hover:scale-105 transition-transform duration-700"
                    />
                    
                    {/* Decorative elements */}
                    <div className="absolute top-4 left-4 w-16 h-16 bg-white/20 rounded-full backdrop-blur-sm"></div>
                    <div className="absolute bottom-4 right-4 w-12 h-12 bg-blue-500/20 rounded-full backdrop-blur-sm"></div>
                  </div>
                </div>
                
                {/* Additional curved decoration */}
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-6 bg-gradient-to-r from-blue-400 to-green-400 rounded-full opacity-60"></div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      
      {/* Custom CSS for dots */}
      <style jsx global>{`
        .custom-dots {
          display: flex !important;
          justify-content: center;
          align-items: center;
          gap: 12px;
          margin-top: 40px;
          padding: 0;
          list-style: none;
        }
        
        .custom-dots li {
          margin: 0;
        }
        
        .custom-dots li div {
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .custom-dots li.slick-active div {
          background-color: #3b82f6 !important;
          transform: scale(1.2);
        }
        
        .slick-slider {
          position: relative;
        }
        
        .slick-list {
          overflow: visible;
        }
        
        .slick-track {
          display: flex;
          align-items: center;
        }
        
        .slick-slide {
          opacity: 1;
          transition: all 0.3s ease;
        }
        
        .slick-slide:not(.slick-active) {
          opacity: 0.7;
        }
      `}</style>
    </section>
  );
};

export default TeamShowcase;