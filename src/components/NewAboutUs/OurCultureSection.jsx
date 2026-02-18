import React from "react";

const OurCultureSection = () => {
  return (
    <section className="bg-[#cd1f38] py-10 px-4 sm:px-6 lg:px-8 mt-28 h-[600px] md:[800px] sm:[1000px] ">
      <div className="!max-w-7xl mx-auto relative h-full">
        {/* Images Section */}
        <div className="absolute -top-[150px] w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 rounded-3xl overflow-hidden shadow-2xl">
            {/* Left Image - THEN */}
            <div className="relative group h-64 sm:h-80 md:h-96 overflow-hidden">
              <img
                src="/~shootordernew/images/about-us/then.png"
                alt="Then - Team photo"
                className="w-full h-full object-cover transition-all duration-500"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black opacity-50 group-hover:opacity-0 transition-opacity duration-300"></div>
              {/* Text */}
              <div className="absolute inset-0 flex items-center justify-center group-hover:opacity-0 transition-opacity duration-300">
                <h2 className="text-2xl font-semibold text-white">THEN</h2>
              </div>
            </div>

            {/* Right Image - NOW */}
            <div className="relative group h-64 sm:h-80 md:h-96 overflow-hidden">
              <img
                src="/~shootordernew/images/about-us/now.jpeg"
                alt="Now - Team celebration photo"
                className="w-full h-full object-cover transition-all duration-500"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black opacity-50 group-hover:opacity-0 transition-opacity duration-300"></div>
              {/* Text */}
              <div className="absolute inset-0 flex items-center justify-center group-hover:opacity-0 transition-opacity duration-300">
                <h2 className="text-2xl font-semibold text-white">NOW</h2>
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="absolute bottom-0 text-center text-white space-y-8">
          <h2 className="text-3xl sm:text-3xl md:text-5xl lg:text-4xl font-light mb-8">
            Our Culture: Where Creativity Meets Performance
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-light leading-relaxed">
              At ShootOrder, imagination isn’t just encouraged, it’s shaped to
              drive real impact. We blend bold creative ideas with data-driven
              strategies to deliver measurable performance for every brand we
              work with.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurCultureSection;
