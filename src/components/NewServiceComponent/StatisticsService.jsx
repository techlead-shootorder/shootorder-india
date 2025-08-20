import React from "react";
import Image from "next/image";
import { FaProjectDiagram, FaClock, FaTasks, FaUserCheck } from "react-icons/fa";



const StatisticsService = () => {
  // Initialize AOS in the component
 

  return (
    <section
      id="statistics"
      className="relative z-10 text-black flex items-center py-5"
     
    >
      {/* Optimized Image */}
      {/* <div className="absolute inset-0 z-0">
        <Image
          src="/images/banner-image/faint-orange-background.jpeg"
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
        />
      </div> */}

      <div className="relative z-10 max-w-[1170px] mx-auto px-6 py-12 space-y-12">
        <h2 className="text-3xl text-center text-black font-bold">
          We understand your needs and <br /> deliver what works for you.
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Projects Delivered */}
          <div data-aos="fade-up" data-aos-delay="100">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-12 h-12 rounded-full flex justify-center items-center">
                <FaProjectDiagram size={30} />
              </div>
              <h3 className="text-lg font-semibold">Projects Delivered</h3>
            </div>
            <div className="border-b border-gray-400 mb-6"></div>
            <div className="text-center">
              <h3 className="text-4xl font-bold text-black">250+</h3>
              <p className="text-sm mt-2 text-black">
                Successfully delivered high-quality projects.
              </p>
            </div>
          </div>

          {/* Years Of Expertise */}
          <div data-aos="fade-up" data-aos-delay="300">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-12 h-12 rounded-full flex justify-center items-center">
                <FaClock size={30} />
              </div>
              <h3 className="text-lg font-semibold">Years Of Expertise</h3>
            </div>
            <div className="border-b border-gray-400 mb-6"></div>
            <div className="text-center">
              <h3 className="text-4xl font-bold text-black">11+</h3>
              <p className="text-sm mt-2 text-black">
                Bringing over a decade of experience.
              </p>
            </div>
          </div>

          {/* Ongoing Projects */}
          <div data-aos="fade-up" data-aos-delay="500">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-12 h-12 rounded-full flex justify-center items-center">
                <FaTasks size={30} />
              </div>
              <h3 className="text-lg font-semibold">Ongoing Projects</h3>
            </div>
            <div className="border-b border-gray-400 mb-6"></div>
            <div className="text-center">
              <h3 className="text-4xl font-bold text-black">50+</h3>
              <p className="text-sm mt-2 text-black">
                Continuously delivering excellence.
              </p>
            </div>
          </div>

          {/* Client Retention Rate */}
          <div data-aos="fade-up" data-aos-delay="700">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-12 h-12 rounded-full flex justify-center items-center">
                <FaUserCheck size={30} />
              </div>
              <h3 className="text-lg font-semibold">Client Retention Rate</h3>
            </div>
            <div className="border-b border-gray-400 mb-6"></div>
            <div className="text-center">
              <h3 className="text-4xl font-bold text-black">92%</h3>
              <p className="text-sm mt-2 text-black">
                Ensuring client satisfaction and loyalty.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatisticsService;
