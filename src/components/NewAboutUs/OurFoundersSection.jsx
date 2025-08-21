import React from 'react';

const OurFoundersSection = () => {
  return (
    <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="!max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-5xl font-medium text-gray-800 mb-8">
            Our founders
          </h2>
        </div>

        {/* Founders Container */}
        <div className="bg-black  rounded-3xl p-8 sm:p-12 md:p-16 lg:p-20">
          <div className="flex justify-center">
            
            {/* Founder 1 - Rajat Jain */}
            <div className="relative group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl">
                <img 
                  src="/images/about-us/Rajat.webp" 
                  alt="Rajat Jain"
                  className="w-full h-80 sm:h-96 md:h-[28rem] object-cover transition-all duration-500 group-hover:scale-105"
                />
                
                {/* Hover overlay with content */}
                <div className="absolute inset-0   bg-opacity-0 group-hover:bg-opacity-75 transition-all duration-500 flex items-end justify-center p-6">
                  <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-8 group-hover:translate-y-0 text-center text-white w-full">
                    <div className="bg-white bg-opacity-95 rounded-2xl p-6 text-gray-800">
                      <h3 className="text-2xl sm:text-3xl font-semibold mb-4">
                        Rajat Jain
                      </h3>
                      <p className="text-base sm:text-lg leading-relaxed">
                        Visionary leader with extensive experience in digital marketing and business strategy, driving innovation and growth across diverse industries.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Default name overlay (visible when not hovering) */}
                <div className="absolute bottom-6 left-6 right-6 group-hover:opacity-0 transition-opacity duration-500">
                  <div className="bg-white bg-opacity-95 rounded-2xl p-4 text-center">
                    <h3 className="text-xl sm:text-2xl font-semibold text-gray-800">
                      Rajat Jain
                    </h3>
                  </div>
                </div>
              </div>
            </div>
           

          </div>
        </div>
      </div>
    </section>
  );
};

export default OurFoundersSection;