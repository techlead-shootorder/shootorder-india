'use client';
import Image from 'next/image';
import { useState } from 'react';
import PopupModal from "@/components/Modal/PopupModal";

// Dynamic content based on service slug
const serviceAboutData = {
  "seo": {
    heading: "SEO Optimization",
    content: "Dominate search results with our comprehensive SEO strategies. We optimize every aspect of your website to improve visibility, drive organic traffic, and help your business rank higher on search engines. From keyword research to technical SEO, we ensure your content reaches the right audience at the right time."
  },
  "digital-marketing": {
    heading: "Digital Marketing Excellence", 
    content: "We don't just run ads, we create conversations. Our digital marketing approach balances creativity with performance to help your brand stand out where it matters most. From SEO to social campaigns, we design strategies that enhance visibility, attract the right audience, and convert clicks into loyal customers."
  },
  "branding": {
    heading: "Brand Identity & Strategy",
    content: "Your brand is more than a logo; it's the story that people remember. We craft brand identities that spark recognition and build trust. From design to messaging, we shape experiences that connect with your audience on an emotional level and keep your business unforgettable. "
  },
  "growth-hacking": {
    heading: "Growth Hacking Innovation",
    content: "ShootOrder's Growth Hacking team specializes in rapid, scalable growth strategies that maximize results with minimal resources. We combine creative marketing techniques, data analytics, and innovative experimentation to identify the most effective growth channels for your business. Our growth hackers use a systematic approach to test, measure, and optimize every aspect of your customer acquisition funnel. From viral marketing campaigns to conversion rate optimization, we help startups and established businesses achieve explosive growth through unconventional yet highly effective methods."
  },
  "marketing-automation": {
    heading: "Marketing Automation Solutions",
    content: "Work smarter, not harder. With data-driven dashboards, automated campaigns, and smart analytics, we help you streamline marketing and make every customer interaction count. Our automation solutions ensure you never miss an opportunity to engage, nurture, and grow."
  }
};

const ServiceHeroSection = ({ data }) => {

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // Get the dynamic content based on the service slug
  const aboutContent = serviceAboutData[data?.slug] || {
    heading: "Our Story",
    content: "ShootOrder | Digital Marketing Agency, a division of Ivent It Solutions Pvt. Ltd., is a privately held digital marketing company in hyderabad, India. From conception we made sure that we set our foot into the massive universe of internet ventures which we knew the best and since then we have been making strides towards creative innovative and strategic benchmarks across the realm of digital marketing, with an adept talent pool and hunger for perfection we have been delivering the best results, bringing new market trends and have bought in more business for all our clients."
  };

  const openPopup = (e) => {
    // Create ripple effect
    const ripple = document.createElement('div');
    const rect = e.target.getBoundingClientRect();
    ripple.className = 'absolute animate-ripple rounded-full bg-gray-200';
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
  return (
    <section className="bg-[#fff3f3] py-16 px-4 lg:px-8 mt-20">
      <div className="!max-w-7xl mx-auto">

        <div className="grid lg:grid-cols-2 sm:gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Main Heading */}
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-blue-950 leading-tight">
              {data.heading ? data.heading : (
                <>
                  {data.h1},<br />
                  {data.h2},<br />
                  {data.h3} <span className="text-[#9a0c28]">{data.redText}</span>
                </>
              )}
            </h1>

            {/* Subtext */}
            <p className="text-lg lg:text-xl text-gray-600 max-w-lg">
              {data.subheading}
            </p>

            <div className='mb-10 sm:mb-0 sm:flex sm:flex-row sm:items-center sm:gap-16'>
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
                src="/images/clients/f1.jpg"
                alt="bmw"
                width={150}
                height={80}
                className="h-16 w-auto object-contain"
              /> */}

                {/* <Image
                src="/images/services/service-partners-image.webp"
                alt="Partners - Google Partner, Shopify Partners, Meta Business Partners, Klaviyo Partner"
                width={500}
                height={80}
                className="h-16 w-auto object-contain"
              /> */}
              </div>

              {/* CTA Button */}
              <button
                className="bg-[#9a0c28] text-white px-4 py-3 rounded-lg font-medium hover:bg-navy-800 transition-colors duration-300 inline-flex items-center gap-2 cursor-pointer"
                onClick={openPopup}
              >
                Contact Us
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Right Side - Hero Image */}
          <div className="relative">
            <Image
              src={data.imageUrl || data.banner_image}
              alt="Content creation showcase with various brand examples"
              width={600}
              height={600}
              className="w-full h-auto object-cover rounded-lg"
              priority
            />
          </div>

        </div>

        {/* About Content Section */}
        <div className="mt-16 pt-16 border-t border-gray-200">
          <div className="flex flex-col lg:flex-row items-center">
            {/* Text Section */}
            <div className="lg:w-1/2 lg:pr-8 mb-8 lg:mb-0">
              <h3 className="text-3xl font-bold mb-6 text-blue-950">
                {aboutContent.heading}
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">           
                {aboutContent.content}
              </p>
            </div>
            {/* Image Section */}
            <div className="lg:w-1/2">
              <Image
                src="/images/our-story.webp"
                alt={`${data?.title || 'Our'} Services`}
                width={549}
                height={411}
                className="rounded-lg w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>

      </div>
      {/* Popup Modal */}
      <PopupModal isOpen={isPopupOpen} onClose={closePopup} />
    </section>
  );
};

export default ServiceHeroSection;