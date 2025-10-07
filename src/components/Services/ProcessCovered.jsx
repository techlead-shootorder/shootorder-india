"use client";
import React, { useState, useEffect } from "react";
import * as LucideIcons from "lucide-react";

const getIconComponent = (iconName) => {
  // If iconName is already a component, return it
  if (React.isValidElement(iconName)) return iconName;

  // Convert string to PascalCase if needed
  const pascalCase = iconName?.charAt(0).toUpperCase() + iconName?.slice(1);

  // Get the icon component from Lucide
  const IconComponent = LucideIcons[iconName] || LucideIcons[pascalCase] || LucideIcons.Package;

  return IconComponent;
};

function ProcessCovered({ services, pageHeading }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    // Load Pipedrive script when component mounts
    const script = document.createElement('script');
    script.src = 'https://webforms.pipedrive.com/f/loader';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script when component unmounts
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  if (!services?.features) return null;

  return (
    <div className="min-h-screen py-20 px-6">
      <div className="!max-w-7xl mx-auto">
        {/* Section Header */}
        <div
          className={`mb-8 text-center transition-all duration-800 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          <h2 className="text-center font-bold text-3xl">
            {pageHeading ? pageHeading : "Our Services"}
          </h2>

        </div>

        {/* Awesome Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-8">
         {services.features.map((service, index) => {
            const IconComponent = getIconComponent(service.icon);

            return (
              <div
                key={index}
                className={`group transition-all duration-600 ${isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
                  }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Card with fixed height */}
                <div className="relative h-[360px] bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 flex flex-col">

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
                  <p className="text-gray-600 leading-6 overflow-y-auto flex-1">
                    {service.content}
                  </p>
                </div>
              </div>
            );
          })}

          

        </div>



        {/* Optional: Add more services link */}
        {/* <div
          className={`text-center mt-16 transition-all duration-800 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          <button className="inline-flex items-center gap-2 text-[#9a0c28] hover:text-[#7a0920] font-medium text-lg transition-colors duration-300 group">
            <span>View All Services</span>
            <svg
              className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
        </div> */}
      </div>

      <style jsx>{`
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
}

export default ProcessCovered;