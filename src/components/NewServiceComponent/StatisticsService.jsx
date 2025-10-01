import React from "react";
import Image from "next/image";
import { FaProjectDiagram, FaClock, FaTasks, FaUserCheck } from "react-icons/fa";

const StatisticsService = () => {
  return (
    <section
      id="statistics"
      className="relative z-10 py-20"
    >
      <div className="!max-w-7xl mx-auto px-6">
        {/* Clean header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            We understand your needs and{" "}
            <span className="text-[#cc1036]">deliver what works</span> for you.
          </h2>
          <div className="w-20 h-1 bg-[#cc1036] mx-auto rounded-full mt-6"></div>
        </div>

        {/* Equal-height statistics grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
          {/* Projects Delivered */}
          <div className="group">
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full">
              <div className="text-center">
                <h3 className="text-4xl font-bold text-gray-900 mb-3">
                  250<span className="text-[#cc1036]">+</span>
                </h3>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Projects Delivered
                </h3>
                <p className="text-gray-600 text-sm">
                  Successfully delivered high-quality projects.
                </p>
              </div>
            </div>
          </div>

          {/* Years Of Expertise */}
          <div className="group">
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full">
              <div className="text-center">
                <h3 className="text-4xl font-bold text-gray-900 mb-3">
                  11<span className="text-[#cc1036]">+</span>
                </h3>
                <h3 className="text-lg font-semibold text-gray-800">
                  Years Of Expertise
                </h3>
                <p className="text-gray-600 text-sm">
                  Bringing over a decade of experience.
                </p>
              </div>
            </div>
          </div>

          {/* Ongoing Projects */}
          <div className="group">
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full">
              <div className="text-center">
                <h3 className="text-4xl font-bold text-gray-900 mb-3">
                  50<span className="text-[#cc1036]">+</span>
                </h3>
                <h3 className="text-lg font-semibold text-gray-800">
                  Ongoing Projects
                </h3>
                <p className="text-gray-600 text-sm">
                  Continuously delivering excellence.
                </p>
              </div>
            </div>
          </div>

          {/* Client Retention Rate */}
          <div className="group">
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full">
              <div className="text-center">
                <h3 className="text-4xl font-bold text-gray-900 mb-3">
                  92<span className="text-[#cc1036]">%</span>
                </h3>
                <h3 className="text-lg font-semibold text-gray-800">
                  Client Retention Rate
                </h3>
                <p className="text-gray-600 text-sm">
                  Ensuring client satisfaction and loyalty.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatisticsService;
