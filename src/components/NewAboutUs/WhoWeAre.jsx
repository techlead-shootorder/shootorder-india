import React from 'react';

const WhoWeAre = () => {
  return (
    <section className=" py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Top heading */}
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-[#9a0c28] mb-8">
           Among India’s Top 3% Digital Marketing Agencies 
          </h2>
        </div>

        {/* Main content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-30 items-center">
          {/* Left side - Image */}
          <div className="flex justify-center lg:justify-end relative">
            <div className="relative w-80 h-80 sm:w-96 sm:h-96">
              <img 
                src="/images/about-us/shootorder-logo.svg" 
                alt="Digital Marketing Team" 
                className="w-full h-full object-contain rounded-lg"
              />
            </div>
          </div>

          {/* Right side - Content */}
          <div className="text-left space-y-8">
            <h3 className="text-3xl md:text-4xl lg:text-4xl font-semibold text-gray-700 mb-6">
              Who We Are
            </h3>
            
            <div className="space-y-6">
              <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed font-light">
                Proudly recognized as a Google Premier Partner, ShootOrder is a Hyderabad-based agency with a fast-growing presence in the USA. Founded by digital visionary Rajat Jain, the agency has evolved into a trusted growth partner for global brands. 
              </p>
              <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed font-light">
                With 12+ years of expertise and 400+ clients worldwide across e-commerce, healthcare, education, automobile, real estate, and lifestyle, ShootOrder delivers end-to-end digital solutions — Performance Marketing, SEO, Social Media, Email, Blogs, Web Design & Landing Pages. 
              </p>
              <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed font-light">
                Backed by a 50+ member powerhouse team, ShootOrder blends creativity with analytics to drive measurable growth and market impact.
              </p>
            </div>

            {/* Let's Talk Button */}
            {/* <div className="pt-4 flex justify-center">
                <div className='relative'>
                <div className='absolute top-[9px] left-[4px] h-8 w-28 bg-yellow-400 rounded-full -z-4'></div>
              <button className="text-white bg-[#9a0c28] font-medium py-1 px-4 rounded-full text-lg transition-all">
                Let's Talk
              </button>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;