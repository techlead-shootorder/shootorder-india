import React from 'react';

const OurCultureSection = () => {
    return (
        <section className="bg-[#9a0c28] py-10 px-4 sm:px-6 lg:px-8 mt-28 h-[600px] md:[800px] sm:[1000px] ">
            <div className="!max-w-7xl mx-auto relative h-full">
                {/* Images Section */}
                <div className="absolute -top-[150px] w-full">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-0 rounded-3xl overflow-hidden shadow-2xl">
                        {/* Left Image - THEN */}
                        <div className="relative group h-64 sm:h-80 md:h-96 overflow-hidden">
                            <img
                                src="/images/about-us/shootorder-cricket.jpg"
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
                                src="/images/about-us/shootorder-cricket.jpg"
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
                        Our Culture: Innovation Meets Impact
                    </h2>
                    <div className="max-w-4xl mx-auto">
                        <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-light leading-relaxed">
                            At 8 Views, every day starts with the question: "How can we exceed expectations today?"
                            Our culture thrives on breakthrough ideas, creative problem-solving, and relentless focus
                            on results that truly matter.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurCultureSection;