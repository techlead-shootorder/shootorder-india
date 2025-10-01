import React from 'react';

const ReviewsService = () => {
  const achievements = [
    {
      platform: 'Clutch',
      logo: (
        <div className="text-5xl font-bold text-gray-800 mb-4">
          Clutch
        </div>
      ),
      rating: 4.9,
      description: 'Recognized for delivering exceptional results and exceeding client expectations.'
    },
    {
      platform: 'GLASSDOOR',
      logo: (
        <div className="text-4xl font-bold text-green-600 mb-4">
          'GLASSDOOR'
        </div>
      ),
      rating: 4.1,
      description: 'A workplace that fosters growth, collaboration, and employee satisfaction.'
    },
    {
      platform: 'GoodFirms',
      logo: (
        <div className="flex items-center gap-2 mb-4">
          <div className="w-10 h-10 bg-blue-500 rounded flex items-center justify-center">
            <span className="text-white text-xl font-bold">F</span>
          </div>
          <span className="text-3xl font-medium text-blue-600">GoodFirms</span>
        </div>
      ),
      rating: 4.9,
      description: 'Celebrated for our commitment to high-quality services and client success.'
    },
    {
      platform: 'Google',
      logo: (
        <div className="text-5xl font-bold mb-4">
          <span className="text-blue-500">G</span>
          <span className="text-red-500">o</span>
          <span className="text-yellow-500">o</span>
          <span className="text-blue-500">g</span>
          <span className="text-green-500">l</span>
          <span className="text-red-500">e</span>
        </div>
      ),
      rating: 4.4,
      description: 'Trusted by both clients and employees for delivering consistent, reliable excellence.'
    }
  ];

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <span key={i} className="text-orange-500 text-2xl">★</span>
      );
    }

    if (hasHalfStar) {
      stars.push(
        <span key="half" className="text-orange-300 text-2xl">★</span>
      );
    }

    while (stars.length < 5) {
      stars.push(
        <span key={`empty-${stars.length}`} className="text-orange-300 text-2xl">★</span>
      );
    }

    return stars;
  };

  return (
    <section className="bg-gray-50 py-20 px-4">
      <div className="!max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-800 mb-6">
            Our Achievements
          </h2>
          <p className="text-gray-600 text-lg max-w-4xl mx-auto leading-relaxed">
            We take pride in the impact our work has on businesses. With a track record of delivering exceptional results, we're proud to be recognized for providing the best SEO services in Hyderabad.
          </p>
        </div>

        {/* Achievement Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="bg-blue-50 rounded-3xl p-8 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Logo */}
              <div className="mb-4">
                {achievement.logo}
              </div>

              {/* Stars and Rating */}
              <div className="flex items-center gap-2 mb-6">
                <div className="flex">
                  {renderStars(achievement.rating)}
                </div>
                <span className="text-gray-700 text-xl font-medium ml-1">
                  {achievement.rating}
                </span>
              </div>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed">
                {achievement.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsService;