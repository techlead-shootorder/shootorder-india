import React from 'react';

const HeroAbout = () => {
  return (
    <div className="relative w-full h-screen mt-4">
      {/* Background Image */}
      <div 
        className="w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/images/background/home-bg2.png')`
        }}
      >
        {/* Content positioned at the bottom */}
        <div className="absolute inset-x-0 bottom-0 flex justify-center pb-8 sm:pb-12 md:pb-16 lg:pb-20">
          <div className="text-center text-white px-4 sm:px-6 md:px-8 !max-w-4xl">
            {/* About Us Heading */}
            <h1 className="text-3xl sm:text-4xl font-light mb-4 sm:mb-6 md:mb-8 tracking-wide">
              About Us
            </h1>
            
            {/* Description Text */}
            <div className="max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-5xl mx-auto">
              <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-light leading-relaxed px-2 sm:px-4">
                Welcome to 8 Views, the destination for the best digital marketing company in 
                Hyderabad, where digital dreams merge seamlessly with data-driven reality.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroAbout;