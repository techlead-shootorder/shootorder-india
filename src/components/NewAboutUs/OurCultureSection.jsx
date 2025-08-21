import React from 'react';

const OurCultureSection = () => {
    return (
        <section className="bg-teal-400 py-16 px-4 sm:px-6 lg:px-8 mt-20 h-[600px]">
            <div className="!max-w-7xl mx-auto relative flex justify-end">
                {/* Images Section */}
                <div className=" absolute -top-[150px] w-full">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-0 rounded-3xl overflow-hidden shadow-2xl">
                        {/* Left Image - THEN */}
                        <div className="relative group h-64 sm:h-80 md:h-96 overflow-hidden">
                            <img
                                src="/images/then-image.jpg"
                                alt="Then - Team photo"
                                className="w-full h-full object-cover transition-all duration-500"
                            />
                            {/* Dark overlay that disappears on hover */}
                            <div className="absolute inset-0 bg-black bg-opacity-60 group-hover:bg-opacity-0 transition-all duration-500 flex items-center justify-center">
                                <h3 className="text-white text-4xl sm:text-5xl md:text-6xl font-bold tracking-wider group-hover:opacity-0 transition-opacity duration-500">
                                    THEN
                                </h3>
                            </div>
                        </div>

                        {/* Right Image - NOW */}
                        <div className="relative group h-64 sm:h-80 md:h-96 overflow-hidden">
                            <img
                                src="/images/now-image.jpg"
                                alt="Now - Team celebration photo"
                                className="w-full h-full object-cover transition-all duration-500"
                            />
                            {/* Light overlay that disappears on hover */}
                            <div className="absolute inset-0 bg-white bg-opacity-40 group-hover:bg-opacity-0 transition-all duration-500 flex items-center justify-center">
                                <h3 className="text-gray-800 text-4xl sm:text-5xl md:text-6xl font-bold tracking-wider group-hover:opacity-0 transition-opacity duration-500">
                                    NOW
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Content Section */}
                <div className="text-center text-white space-y-8 border border-black">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light mb-8">
                        Our Culture: Innovation Meets Impact
                    </h2>

                    <div className="max-w-4xl mx-auto">
                        <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-light leading-relaxed">
                            At 8 Views, every day starts with the question: "How can we exceed expectations today?" Our culture thrives
                            on breakthrough ideas, creative problem-solving, and relentless focus on results that truly matter.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurCultureSection;