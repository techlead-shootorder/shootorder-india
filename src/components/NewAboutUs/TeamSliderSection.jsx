'use client'
import React from 'react';

const TeamSliderSection = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Parmeet Gill",
      position: "Director Operations",
      image: "/images/team/parmeet.jpg",
      bgColor: "bg-black"
    },
    {
      id: 2,
      name: "Rajul Jain",
      position: "Associate Director- Operations",
      image: "/images/team/rajul.jpg",
      bgColor: "bg-gray-300"
    },
    {
      id: 3,
      name: "Ajay Nandikanti",
      position: "Lead UX/UI Designer",
      image: "/images/team/ajay.jpg",
      bgColor: "bg-black"
    },
    {
      id: 4,
      name: "Shreya Annam",
      position: "Sr. Graphic Designer",
      image: "/images/team/shreya.jpg",
      bgColor: "bg-black"
    },
    {
      id: 5,
      name: "Anusha",
      position: "Sr. Software Quality Analyst",
      image: "/images/team/anusha.jpg",
      bgColor: "bg-gray-300"
    },
    {
      id: 6,
      name: "Madhav",
      position: "Manager",
      image: "/images/team/madhav.jpg",
      bgColor: "bg-black"
    },
    {
      id: 7,
      name: "John Doe",
      position: "Marketing Specialist",
      image: "/images/team/john.jpg",
      bgColor: "bg-gray-300"
    },
    {
      id: 8,
      name: "Jane Smith",
      position: "Content Strategist",
      image: "/images/team/jane.jpg",
      bgColor: "bg-black"
    }
  ];

  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-light text-gray-800">
            Team
          </h2>
        </div>

        {/* Team Grid/Slider */}
        <div className="overflow-x-auto scrollbar-hide">
          <div className="flex gap-4 sm:gap-6 pb-4" style={{ width: 'max-content' }}>
            {teamMembers.map((member, index) => (
              <div 
                key={member.id}
                className="flex-shrink-0 w-64 sm:w-72 md:w-80"
              >
                <div className="group cursor-pointer">
                  {/* Team Member Card */}
                  <div className={`${member.bgColor} rounded-2xl overflow-hidden transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl`}>
                    <div className="aspect-square p-4">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover rounded-xl transition-all duration-300 group-hover:scale-110"
                      />
                    </div>
                  </div>
                  
                  {/* Member Info */}
                  <div className="text-center mt-4 px-2">
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
                      {member.name}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                      {member.position}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default TeamSliderSection;