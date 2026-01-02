"use client";
import React, { useState, useEffect, useRef } from "react";
import * as LucideIcons from "lucide-react";
import { ChevronRight, ChevronLeft } from "lucide-react";

const getIconComponent = (iconName) => {
  if (React.isValidElement(iconName)) return iconName;
  const pascalCase = iconName?.charAt(0).toUpperCase() + iconName?.slice(1);
  const IconComponent =
    LucideIcons[iconName] || LucideIcons[pascalCase] || LucideIcons.Package;
  return IconComponent;
};

function ProcessCovered({ services, pageHeading }) {
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    setIsVisible(true);

    const script = document.createElement("script");
    script.src = "https://webforms.pipedrive.com/f/loader";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  if (!services?.features) return null;

  const cardsPerView = 3;
  const maxIndex = Math.max(0, services.features.length - cardsPerView);

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  // Get visible cards based on current index
  const getVisibleCards = () => {
    return services.features.slice(currentIndex, currentIndex + cardsPerView);
  };

  // Calculate which card is in the middle position
  const getMiddleCardIndex = () => {
    return currentIndex + 1; // Middle of 3 visible cards
  };

  const ServiceCard = ({ service, index, isMiddle = false }) => {
    const IconComponent = getIconComponent(service.icon);

    return (
      <div
        className="bg-white rounded-2xl shadow-lg hover:shadow-xl overflow-hidden group h-full"
        style={{
          transform: isMiddle ? "scale(1.05)" : "scale(1)",
          boxShadow: isMiddle
            ? "0 25px 50px rgba(0, 0, 0, 0.25)"
            : "0 10px 15px rgba(0, 0, 0, 0.1)",
          // explicit transitions for properties that change
          transitionProperty: "transform, box-shadow, height, padding",
          transitionDuration: "700ms",
          transitionTimingFunction: "ease-in-out",
          willChange: "transform, height",
        }}
      >
        {/* Card Header with Icon */}
        <div
          className="relative bg-gradient-to-br from-[#cd1f38] to-[#c41e3a] flex items-center justify-center"
          style={{
            height: isMiddle ? "256px" : "192px",
            overflow: "hidden", // ensure children don't overflow during animation
            transitionProperty: "height, transform, opacity",
            transitionDuration: "700ms",
            transitionTimingFunction: "ease-in-out",
            willChange: "height, transform",
          }}
        >
          <div className="absolute inset-0 bg-black/10"></div>
          <div
            className="relative z-10 transition-all duration-700 ease-in-out"
            style={{
              transform: `scale(${isMiddle ? 1.25 : 1})`,
            }}
          >
            <IconComponent size={64} className="text-white drop-shadow-lg" />
          </div>
          {/* Decorative Pattern */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -translate-y-16 translate-x-16"></div>
          <div
            className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full blur-2xl translate-y-12 -translate-x-12 transition-all duration-700 ease-in-out"
            style={{
              opacity: isMiddle ? 1 : 0,
              transform: `translate(-48px, 48px) scale(${isMiddle ? 1 : 0.5})`,
            }}
          ></div>
        </div>

        {/* Card Content */}
        <div
          className=""
          style={{
            padding: isMiddle ? "32px" : "24px",
            transitionProperty: "padding, font-size, max-height",
            transitionDuration: "700ms",
            transitionTimingFunction: "ease-in-out",
          }}
        >
          <h3
            className="font-bold text-gray-900 mb-3 group-hover:text-[#cd1f38] transition-all duration-700"
            style={{
              fontSize: isMiddle ? "1.5rem" : "1.25rem",
              lineHeight: isMiddle ? "2rem" : "1.75rem",
            }}
          >
            {service.heading}
          </h3>

          <div
            className="bg-[#cd1f38] mb-4 group-hover:w-20 transition-all duration-700 ease-in-out"
            style={{
              width: isMiddle ? "64px" : "48px",
              height: isMiddle ? "4px" : "2px",
            }}
          ></div>

          <p
            className="text-gray-600 leading-relaxed mb-4"
            style={{
              fontSize: isMiddle ? "1rem" : "0.875rem",
              lineHeight: isMiddle ? "1.5rem" : "1.25rem",
              // animate expansion/collapse using maxHeight instead of toggling display
              maxHeight: isMiddle ? "500px" : "72px",
              overflow: "hidden",
              transition: "max-height 700ms ease-in-out",
            }}
          >
            {service.content}
          </p>

          {/* Read More Button */}
          <button
            className="inline-flex items-center text-[#cd1f38] font-medium hover:text-[#7a0920] transition-all duration-700 group-hover:translate-x-1 transform"
            style={{
              fontSize: isMiddle ? "1.125rem" : "1rem",
            }}
          >
            Read More
            <ChevronRight
              size={isMiddle ? 20 : 16}
              className="ml-1 transition-all duration-700"
            />
          </button>
        </div>
      </div>
    );
  };

  return (
    <div ref={sectionRef} className="bg-gray-50 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div
          className={`mb-12 text-center transition-all duration-800 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {pageHeading ? pageHeading : "Our Services"}
          </h2>
          <div className="w-20 h-1 bg-[#cd1f38] mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Discover our comprehensive range of innovative solutions designed to
            transform your business
          </p>
        </div>

        {/* Cards Slider */}
        <div className="relative">
          {/* Navigation Buttons */}
          {services.features.length > cardsPerView && (
            <>
              <button
                onClick={prevSlide}
                disabled={currentIndex === 0}
                className="absolute -left-6 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border border-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronLeft className="w-6 h-6 text-gray-600" />
              </button>

              <button
                onClick={nextSlide}
                disabled={currentIndex === maxIndex}
                className="absolute -right-6 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border border-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronRight className="w-6 h-6 text-gray-600" />
              </button>
            </>
          )}

          {/* Cards Container */}
          <div className="overflow-hidden rounded-xl">
            <div
              className="flex transition-transform duration-700 ease-in-out gap-6 items-end"
              style={{
                transform: `translateX(-${
                  currentIndex * (100 / cardsPerView)
                }%)`,
              }}
            >
              {services.features.map((service, index) => {
                const middleCardIndex = getMiddleCardIndex();
                const isMiddleCard = index === middleCardIndex;

                return (
                  <div
                    key={index}
                    className={`flex-shrink-0 w-1/3 ${
                      isMiddleCard ? "mb-6" : ""
                    }`}
                  >
                    <ServiceCard
                      service={service}
                      index={index}
                      isMiddle={isMiddleCard}
                    />
                  </div>
                );
              })}
            </div>
          </div>

          {/* Dots Indicator */}
          {services.features.length > cardsPerView && (
            <div className="flex justify-center mt-8 space-x-2">
              {Array.from({ length: maxIndex + 1 }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentIndex === index
                      ? "bg-[#cd1f38] scale-110"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProcessCovered;
