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
          className={`text-center mb-16 transition-all duration-800 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          <h2 className="text-center font-bold text-3xl mb-4">
            {pageHeading ? pageHeading : "Our Services"}
          </h2>

        </div>

        {/* Awesome Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
  {/* Clean Service Item */}
  <div className="relative p-2 sm:p-6 hover:bg-gray-50/80 rounded-xl transition-all duration-300 border-l-4 border-transparent hover:border-l-[#9a0c28]">
    {/* Icon and Content Container */}
    <div className="flex flex-col items-start gap-6">
      {/* Icon Container */}
      <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-[#9a0c28]/10 to-[#9a0c28]/5 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
        <IconComponent 
          size={32} 
          className="text-[#9a0c28] group-hover:text-[#7a0920] transition-colors duration-300" 
        />
      </div>

      {/* Content */}
      <div className="flex-1">
        <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-[#9a0c28] transition-colors duration-300">
          {service.heading}
        </h3>
        
        <p className="text-gray-600 leading-relaxed">
          {service.content}
        </p>
      </div>
    </div>

    {/* Subtle hover effect line */}
    <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
  </div>
</div>
            );
          })}

          {/* {services.features.length == 5 && <div style={{ background: "#f6f6f6", padding:"20px" }}
            className={`group transition-all p-2 duration-600  ${isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-12"
              }`}
          >
            <div className="pipedriveWebForms" data-pd-webforms="https://webforms.pipedrive.com/f/clLwBtLo27jEENj1c595rykfb5Ynxv9zmh5cLhhrMuEiyCSwR9R84kR0xsFjGTm6LV"><script src="https://webforms.pipedrive.com/f/loader"></script></div>
          </div>} */}

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