import React from 'react';

const OurFoundersSection = () => {
  return (
    <section className=" py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Top heading */}
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-gray-800 mb-8">
           Our Founder
          </h2>
        </div>

        {/* Main content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-30 items-center">
          {/* Left side - Image */}
          <div className="flex justify-center lg:justify-end relative">
            <div className="relative w-80 h-80 sm:w-96 sm:h-96">
              <img 
                src="/images/about-us/Rajat.webp" 
                alt="Digital Marketing Team" 
                className="w-full h-full object-contain rounded-lg"
              />
            </div>
          </div>

          {/* Right side - Content */}
          <div className="text-left space-y-8">
            <h3 className="text-3xl md:text-4xl lg:text-4xl font-semibold text-gray-700 mb-6">
              Rajat Jain
            </h3>
            
            <div className="space-y-6">
              <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed font-light">
                Unlike most experts in the various industry domains, Rajat Jain doesn’t subscribe to the traditional persona of gaining his expertise through experience or intuition.
                He nurtures digital marketing efforts of organisations ranging from startups to tip of the tongue brands. He has directed campaigns of brands making baby steps into new domains and corrected courses of established marketing efforts with his digital marketing expertise.
              </p>
            </div>

            {/* Let's Talk Button */}
            <div className="pt-4 flex justify-center">
                <div className='relative'>
                <div className='absolute top-[9px] left-[4px] h-8 w-28 bg-yellow-400 rounded-full -z-4'></div>
              <button className="text-white bg-[#9a0c28] font-medium py-1 px-4 rounded-full text-lg transition-all">
                Let's Talk
              </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurFoundersSection;