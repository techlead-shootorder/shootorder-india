import React from 'react';

const WhoWeAre = () => {
  return (
    <section className=" py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Top heading */}
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-[#9a0c28] mb-8">
            Best Digital Marketing Company in Hyderabad
          </h2>
        </div>

        {/* Main content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left side - Decorative Pattern */}
          <div className="flex justify-center lg:justify-end relative">
            <div className="relative w-80 h-80 sm:w-96 sm:h-96">
              {/* Decorative rounded rectangles pattern */}
              {/* Top left diagonal */}
              <div className="absolute top-8 left-12 w-20 h-4 bg-teal-400 rounded-full transform -rotate-45"></div>
              
              {/* Top center vertical */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-4 h-24 bg-teal-400 rounded-full"></div>
              
              {/* Top right diagonal */}
              <div className="absolute top-8 right-12 w-20 h-4 bg-teal-400 rounded-full transform rotate-45"></div>
              
              {/* Middle left horizontal */}
              <div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-24 h-4 bg-teal-400 rounded-full"></div>
              
              {/* Center dot */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-4 bg-teal-400 rounded-full"></div>
              
              {/* Middle right diagonal */}
              <div className="absolute top-1/2 right-4 transform -translate-y-1/2 rotate-45 w-16 h-4 bg-teal-400 rounded-full"></div>
              
              {/* Bottom left horizontal */}
              <div className="absolute bottom-16 left-8 w-24 h-4 bg-teal-400 rounded-full"></div>
              
              {/* Bottom left diagonal */}
              <div className="absolute bottom-8 left-16 w-16 h-4 bg-teal-400 rounded-full transform rotate-45"></div>
              
              {/* Bottom center vertical */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-x-4 w-4 h-20 bg-teal-400 rounded-full"></div>
              
              {/* Bottom right diagonal */}
              <div className="absolute bottom-12 right-8 w-20 h-4 bg-teal-400 rounded-full transform -rotate-45"></div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="text-left space-y-8">
            <h3 className="text-3xl md:text-4xl lg:text-4xl font-semibold text-gray-700 mb-6">
              Who We Are
            </h3>
            
            <div className="space-y-6">
              <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed font-light">
                Imagine eight distinct marketing experts coming together, each 
                bringing a unique perspective to tackle your business 
                challenges. That's 8 Views. We don't just observe your brand; 
                we analyze it through eight specialized lenses of digital 
                mastery. As the best digital marketing company in Hyderabad, 
                we offer brand storytelling and conversion optimization to SEO 
                expertise and captivating video production; bringing every 
                piece of the digital puzzle under one roof.
              </p>
            </div>

            {/* Let's Talk Button */}
            <div className="pt-4 flex justify-center">
                <div className='relative'>
                <div className='absolute top-[9px] left-[4px] h-8 w-28 bg-yellow-400 rounded-full -z-4'></div>
              <button className="text-white bg-pink-400 font-medium py-1 px-4 rounded-full text-lg transition-all">
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

export default WhoWeAre;