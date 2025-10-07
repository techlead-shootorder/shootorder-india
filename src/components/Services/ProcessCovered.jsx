"use client";
import React, { useState, useEffect } from "react";
import * as LucideIcons from "lucide-react";
import { ChevronRight, ChevronLeft } from "lucide-react";

const getIconComponent = (iconName) => {
  if (React.isValidElement(iconName)) return iconName;
  const pascalCase = iconName?.charAt(0).toUpperCase() + iconName?.slice(1);
  const IconComponent = LucideIcons[iconName] || LucideIcons[pascalCase] || LucideIcons.Package;
  return IconComponent;
};

function ProcessCovered({ services, pageHeading }) {
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  useEffect(() => {
    setIsVisible(true);

    const script = document.createElement('script');
    script.src = 'https://webforms.pipedrive.com/f/loader';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  // Handle responsive items per page
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerPage(1);
      } else {
        setItemsPerPage(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Reset currentIndex when itemsPerPage changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [itemsPerPage]);

  if (!services?.features) return null;

  const totalPages = Math.ceil(services.features.length / itemsPerPage);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalPages);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const ServiceCard = ({ service, index }) => {
    const IconComponent = getIconComponent(service.icon);

    return (
      <div
        key={`service-${index}`}
        className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white border border-gray-100 flex-shrink-0 w-full h-[360px] flex flex-col"
      >
        {/* Content Section */}
        <div className="relative flex flex-col p-6 text-black bg-white h-full">
          <div className="flex items-center gap-4 mb-4">
            {/* Icon Container */}
            <IconComponent
              size={32}
              className="text-[#9a0c28] group-hover:text-[#7a0920] transition-colors duration-300"
            />
            
            {/* Heading */}
            <h3 className="text-xl font-semibold text-gray-900 group-hover:text-[#9a0c28] transition-colors duration-300">
              {service.heading}
            </h3>
          </div>
          
          <div className="flex justify-center mb-4">
            <div className="bg-[#9a0c28] w-[90%] h-[2px] rounded-full"></div>
          </div>

          {/* Content - scrollable if overflow */}
          <div className="flex-1 overflow-y-auto">
            <p className="text-gray-600 leading-6">
              {service.content}
            </p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className=" bg-gray-50 py-20 px-6">
      <div className="!max-w-7xl mx-auto">
        {/* Section Header */}
        <div
          className={`mb-16 text-center transition-all duration-800 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-center font-bold text-3xl mb-4">
            {pageHeading ? pageHeading : "Our Services"}
          </h2>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className="cursor-pointer absolute -left-4 sm:-left-10 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-1.5 sm:p-3 hover:bg-gray-50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed border border-gray-200"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>

          <button
            onClick={nextSlide}
            disabled={currentIndex === totalPages - 1}
            className="cursor-pointer absolute -right-4 sm:-right-10 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-1.5 sm:p-3 hover:bg-gray-50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed border border-gray-200"
          >
            <ChevronRight className="w-6 h-6 text-gray-700" />
          </button>

          {/* Carousel Content */}
          <div className="overflow-hidden rounded-xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {Array.from({ length: totalPages }).map((_, pageIndex) => {
                const startIndex = pageIndex * itemsPerPage;
                const pageItems = services.features.slice(startIndex, startIndex + itemsPerPage);
                
                return (
                  <div
                    key={pageIndex}
                    className={`flex w-full flex-shrink-0 ${
                      itemsPerPage === 1 ? '' : 'gap-8'
                    }`}
                  >
                    {pageItems.map((service, index) => (
                      <div
                        key={`${pageIndex}-${index}`}
                        className={`${
                          itemsPerPage === 1 ? 'w-full' : 'w-1/3'
                        }`}
                      >
                        <ServiceCard service={service} index={`${pageIndex}-${index}`} />
                      </div>
                    ))}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentIndex === index
                    ? 'bg-[#9a0c28] scale-110'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProcessCovered;