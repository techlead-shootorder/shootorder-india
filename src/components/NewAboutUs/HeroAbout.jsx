'use client'
import React from 'react';

const HeroAbout = () => {
  return (
    <div className="relative w-full h-screen mt-4">
      {/* Background Image */}
      <div 
        className="w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/images/about-us/about-team-banner.webp')`
        }}
      >
        {/* Black Overlay */}
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}></div>
        
        {/* Content positioned at the bottom */}
        <div className="absolute inset-x-0 bottom-0 flex justify-center pb-8 sm:pb-12 md:pb-16 lg:pb-20">
          <div className="text-center text-white px-4 sm:px-6 md:px-8 !max-w-4xl">
            {/* About Us Heading with animation */}
            <h1 className="text-3xl sm:text-4xl font-light mb-4 sm:mb-6 md:mb-8 tracking-wide animate-slide-up opacity-0 animation-delay-200">
              Not Just Any Agency — The Top 3% 
            </h1>
            
            {/* Description Text with animation */}
            <div className="max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-5xl mx-auto animate-slide-up opacity-0 animation-delay-500">
              <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-light leading-relaxed px-2 sm:px-4">
                Google Premier Partner. Smarter strategies. Measurable growth 
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Custom Animation Styles */}
      <style jsx>{`
        @keyframes slideUp {
          from {
            transform: translateY(30px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        
        .animate-slide-up {
          animation: slideUp 0.8s ease-out forwards;
        }
        
        .animation-delay-200 {
          animation-delay: 0.2s;
        }
        
        .animation-delay-500 {
          animation-delay: 0.5s;
        }
      `}</style>
    </div>
  );
};

export default HeroAbout;