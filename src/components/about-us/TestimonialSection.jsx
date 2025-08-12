import Image from "next/image";
import React from "react";

const TestimonialSection = () => {
  return (
    <section className="bg-gray-100">
      <div className="relative max-w-7xl mx-auto py-12 md:py-16 px-4 md:px-16">
        {/* Header - Centered on all devices */}
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-3xl md:text-5xl font-bold text-black mb-4">Our Leadership</h1>
          <p className="text-lg md:text-xl text-gray-600">Meet the visionaries driving our innovation forward</p>
        </div>

        {/* Main Content Grid */}
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Image Section */}
          <div className="flex justify-center lg:justify-start order-1 lg:order-1">
            <div className="w-64 h-64 md:w-80 md:h-80 lg:w-[450px] lg:h-[450px] rounded-full bg-black shadow-lg overflow-hidden">
              <Image
                src="/images/about-us/Rajat.webp"
                alt="Rajat Jain"
                width={450}
                height={450}
                className="rounded-full w-full h-full object-cover"
              />
            </div>
          </div>
          
          {/* Content Section */}
          <div className="flex flex-col justify-center order-2 lg:order-2 w-full">
            {/* Name and Title */}
            <div className="text-center lg:text-left mb-6 lg:mb-8">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black mb-2">
                Rajat Jain
              </h2>
              <p className="text-base md:text-lg lg:text-xl font-semibold text-gray-700 leading-relaxed">
                Where Strategy Meets Innovation in Digital Marketing
              </p>
            </div>
            
            {/* Quote Content */}
            <div className="relative">
              {/* Opening Quote */}
              <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-400 leading-none mb-2">
                "
              </div>
              
              {/* Quote Text */}
              <div className="px-4 lg:px-0">
                <p className="text-sm md:text-base lg:text-lg text-gray-800 leading-relaxed mb-4 italic">
                  Rajat Jain is a digital strategist known for being able to connect creativity with performance. 
                  He is mainly involved in creating scalable marketing frameworks and generating business growth 
                  via innovation. He is also very enthusiastic about emerging technology and product thinking, 
                  and he continuously explores new ways to enhance digital outcomes.
                </p>
              </div>
              
              {/* Closing Quote */}
              <div className="flex justify-end">
                <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-400 leading-none">
                  "
                </div>
              </div>
            </div>
            
            {/* Attribution */}
            <div className="text-center lg:text-right mt-4">
              <p className="text-sm md:text-base font-medium text-gray-600">
                — Rajat Jain, Digital Strategist
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;