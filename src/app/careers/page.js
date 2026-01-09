"use client";
import Image from "next/image";
import React, { useState } from "react";
import PopupModal from "@/components/Modal/PopupModal";
import LifeGallerySlider from "@/components/GallerySection";

const CareerPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All positions");
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const jobCategories = [
    { name: "All positions", count: 17 },
    { name: "Design", count: 1 },
    { name: "Operation", count: 4 },
    { name: "Marketing", count: 2 },
  ];

  const jobListings = [
    {
      id: 1,
      title: "Group Account Manager",
      type: "Full-time",
      location: "USA",
      description:
        "he Group Account Manager is responsible for overseeing a portfolio of key client accounts, leading multiple account teams, and ensuring the successful delivery of marketing strategies and campaigns.",
      category: "Marketing",
    },
    {
      id: 2,
      title: "Paid Ads Specialist",
      type: "Full-time",
      location: "USA",
      description:
        "We are looking for a results-driven Paid Ads Specialist to join our digital marketing team. In this role, you will be responsible for strategizing, executing, monitoring, and optimizing paid advertising campaigns across platforms such as Google Ads, Meta (Facebook & Instagram), LinkedIn, and more.",
      category: "Marketing",
    },
  ];
  const openPopup = (e) => {
    // Create ripple effect
    const ripple = document.createElement("div");
    const rect = e.target.getBoundingClientRect();
    ripple.className = "absolute animate-ripple rounded-full bg-gray-200";
    ripple.style.left = `${e.clientX - rect.left}px`;
    ripple.style.top = `${e.clientY - rect.top}px`;
    e.target.appendChild(ripple);

    // Remove ripple after animation
    setTimeout(() => ripple.remove(), 1000);

    // Open popup with slight delay for visual feedback
    setTimeout(() => setIsPopupOpen(true), 200);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };
  const filteredJobs =
    selectedCategory === "All positions"
      ? jobListings
      : jobListings.filter((job) => job.category === selectedCategory);

  return (
    <div className="min-h-screen ">
      {/* Banner Section with Image */}
      {/* <div className="relative h-128 bg-gray-50">
        <Image
          src="/images/background/careers/bg.jpg"
          alt="Career Banner"
          fill
          className="object-cover"
          priority
        />
      </div> */}
      {/* Main Content */}
      <div className="bg-[#ffffff] py-16 px-4 lg:px-8 mt-20">
        <div className="!max-w-7xl mx-auto">
          {/* Introduction Section */}
          <div className="grid lg:grid-cols-2 sm:gap-20 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              {/* Main Heading */}
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-blue-950 leading-tight">
                More than work.
                <br />
                <span className="text-[#cd1f38]">A Celebration.</span>
              </h1>
              {/*decorative Line */}
              <div className="w-24 h-1 bg-[#cd1f38] rounded-full"></div>
              {/* Subtext */}
              <p className="text-lg lg:text-xl text-gray-600 max-w-lg">
                A place where work is all about celebrating challenges,
                rejoicing ideas and cherishing camaraderie.
              </p>

              {/* Partners Image */}
              <div className="py-4 flex items-center gap-2">
                <Image
                  src="/images/logo/meta.png"
                  alt="Meta Partner"
                  width={100}
                  height={30}
                  className="hover:scale-105 transition-transform w-[80px] sm:w-[100px]  sm:!h-[90px]"
                  style={{ objectFit: "contain" }}
                />
                <Image
                  src="/images/logo/google.png"
                  alt="Google Partner"
                  width={90}
                  height={40}
                  className="hover:scale-105 transition-transform w-[80px] sm:w-[90px]"
                  style={{ objectFit: "contain" }}
                />
                <Image
                  src="/images/logo/hubspot.png"
                  alt="HubSpot Partner"
                  width={100}
                  height={40}
                  className="hover:scale-105 transition-transform w-[80px] sm:w-[90px]"
                  style={{ objectFit: "contain" }}
                />

                {/* <Image
                         src="/images/services/service-partners-image.webp"
                         alt="Partners - Google Partner, Shopify Partners, Meta Business Partners, Klaviyo Partner"
                         width={500}
                         height={80}
                         className="h-16 w-auto object-contain"
                       /> */}

                <button
                  className="bg-[#cd1f38] text-white px-4 py-3 rounded-lg font-medium hover:bg-navy-800 transition-colors duration-300 inline-flex items-center gap-2 cursor-pointer"
                  onClick={openPopup}
                >
                  Contact Us
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Right Side - Hero Image */}
            <div className="relative">
              <Image
                src="/images/background/careers/lifeatshootorder.webp"
                alt="Content creation showcase with various brand examples"
                width={600}
                height={600}
                className="w-full h-auto object-cover rounded-lg"
                priority
              />
            </div>
          </div>
          <PopupModal isOpen={isPopupOpen} onClose={closePopup} />
         
          <div className="services-details-area py-10 text-black">
            <div className="container mx-auto !max-w-7xl px-4">
              <div className="flex flex-col lg:flex-row items-start gap-12">
                {/* Left Text Section */}
                <div className="lg:w-1/2 services-details">
                  <div className="services-details-desc">
                    <h3 className="text-[25px] font-bold mb-4">
                      Life At ShootOrder
                    </h3>

                    <div className="leading-relaxed">
                      <p className="text-lg lg:text-xl text-gray-600 max-w-lg">
                        We believe great ideas come from happy teams. With
                        fun-filled days, festive moments, and an open-door
                        leadership style, our workplace is built on
                        collaboration and creativity. Here, your ideas are
                        heard, encouraged, and shaped with guidance from senior
                        mentors who invest in your growth. You’ll never feel
                        like just another employee but part of a team that has
                        your back.
                      </p>

                      <p className="text-lg lg:text-xl text-gray-600 max-w-lg mt-4">
                        We offer best career opportunities for all those
                        aspirants who are looking to shape their career in the
                        field of Digital Marketing, SEO, Social Media Marketing,
                        PPC, Content Writing, Web Development, Graphic
                        Designing.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Right Slider Section */}
                <div className="lg:w-1/2 w-full">
                  <LifeGallerySlider />
                </div>
              </div>
            </div>
          </div>
          <div className="!max-w-7xl mx-auto pb-12 mt-2">
            <div className="text-center mb-12 ">
              <h2 className="text-3xl font-medium text-gray-900">
                Explore Exciting Career Opportunities
              </h2>
            </div>

            {/* Job Listings Section */}
            <div className="flex gap-12">
              {/* Sidebar */}
              <div className="w-80 flex-shrink-0">
                {/* Categories */}
                <div className="mb-8">
                  {jobCategories.map((category) => (
                    <div
                      key={category.name}
                      onClick={() => setSelectedCategory(category.name)}
                      className={`cursor-pointer py-2 px-3 mb-1 text-sm ${
                        selectedCategory === category.name
                          ? "bg-blue-50 text-blue-600 border-l-4 border-blue-600 font-medium"
                          : "text-gray-700 hover:bg-gray-50"
                      }`}
                    >
                      {category.name} ({category.count})
                    </div>
                  ))}
                </div>

                {/* Contact Info */}
                <div className="bg-[#f6f9f6] p-4 rounded-lg text-sm text-gray-600">
                  <p className="mb-3">
                    We are always seeking talented people! In case you cannot
                    find your desired position here, please send us your
                    LinkedIn profile and give us your contact information. We
                    will be in touch.
                  </p>
                  <button className="w-full bg-white rounded-full border border-gray-300 text-gray-700 py-2 px-4 text-sm hover:bg-gray-50 transition-colors">
                    Share your LinkedIn profile
                  </button>
                </div>
              </div>

              {/* Job Listings */}
              <div className="flex-1 space-y-8">
                {filteredJobs.map((job) => (
                  <div key={job.id} className="bg-white p-6 rounded-xl pb-8">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-semibold text-gray-900">
                        {job.title}
                      </h3>
                      <button className="bg-red-400 hover:bg-red-500 text-white px-4 py-2 rounded-full text-sm transition-colors">
                        See positions →
                      </button>
                    </div>

                    <div className="flex gap-3 mb-4">
                      <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                        {job.location}
                      </span>
                      <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                        {job.type}
                      </span>
                    </div>

                    <p className="text-sm text-gray-600 leading-relaxed">
                      {job.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerPage;
