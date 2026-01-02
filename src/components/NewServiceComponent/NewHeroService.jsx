// components/NewServiceComponent/HeroService.jsx
"use client";
import { getCategoryByService } from "@/lib/serviceCategories";
import React, { useState } from "react";
import PopupModal from "@/components/Modal/PopupModal";
import Image from "next/image";

const NewHeroService = ({ heading, subheading, imageUrl, serviceSlug }) => {
  // Get category information based on service slug
  const category = getCategoryByService(serviceSlug);

  // Use category-specific hero content if available, otherwise use default
  const heroContent = category?.heroContent || {
    title: heading || "Our Professional Services",
    subtitle: subheading || "Excellence in Every Solution",
    description:
      "Professional services tailored to meet your business needs and drive growth.",
    buttonText: "Get Started",
    backgroundGradient: "from-gray-600 to-gray-800",
    icon: "⚡",
  };

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = (e) => {
    // Create ripple effect
    const ripple = document.createElement("div");
    const rect = e.target.getBoundingClientRect();
    ripple.className = "absolute animate-ripple rounded-full bg-gray-200";
    ripple.style.left = `${e.clientX - rect.left}px`;
    ripple.style.top = `${e.clientY - rect.top}px`;
    e.target.appendChild(ripple);

    // Remove ripple after animation
    setTimeout(() => ripple.remove(), 1000);

    // Open popup with slight delay for visual feedback
    setTimeout(() => setIsPopupOpen(true), 200);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <section className="bg-[#ffffff] py-16 px-4 lg:px-8 mt-20 border-b border-gray-200">
      <div className="!max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 sm:gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Main Heading */}
            <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-blue-950 leading-tight font-poppins">
              {heading || heroContent.title}
            </h1>
            <div className="w-24 h-1 bg-[#cd1f38] rounded-full"></div>
            {/* Subtext */}
            <p className="text-lg lg:text-xl text-gray-600 max-w-lg">
              {subheading || heroContent.subtitle}
            </p>

            {/* Partners Image */}
            <div className="py-4 flex flex-col sm:flex-row justify-between sm:items-center">
              <div className="flex items-center gap-2 mb-4 sm:mb-0">
                <Image
                  src="/images/logo/meta.png"
                  alt="Meta Partner"
                  width={100}
                  height={30}
                  className="hover:scale-105 transition-transform w-[80px] sm:w-[100px]  sm:!h-[90px]"
                  style={{ objectFit: "contain" }}
                />
                <Image
                  src="/images/logo/google.png"
                  alt="Google Partner"
                  width={90}
                  height={40}
                  className="hover:scale-105 transition-transform w-[80px] sm:w-[90px]"
                  style={{ objectFit: "contain" }}
                />
                <Image
                  src="/images/logo/hubspot.png"
                  alt="HubSpot Partner"
                  width={100}
                  height={40}
                  className="hover:scale-105 transition-transform w-[80px] sm:w-[90px] mr-4"
                  style={{ objectFit: "contain" }}
                />
              </div>

              {/* CTA Button */}
              <div>
                <button
                  className="bg-[#cd1f38] text-white px-4 py-3 rounded-lg font-medium hover:bg-navy-800 transition-colors duration-300 inline-flex items-center gap-2 cursor-pointer"
                  onClick={openPopup}
                >
                  Contact Us
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Right Side - Hero Image */}
          <div className="relative">
            <Image
              src={imageUrl || "/images/services/default-service.webp"}
              alt="Content creation showcase with various brand examples"
              width={600}
              height={600}
              className="w-full h-auto object-cover rounded-lg"
              priority
            />
          </div>
        </div>
      </div>
      {/* Popup Modal */}
      <PopupModal isOpen={isPopupOpen} onClose={closePopup} />
    </section>
  );
};

export default NewHeroService;
