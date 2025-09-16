"use client";
import React, { useState } from "react";
import { ArrowRight, Target, Users, Heart, BarChart3 } from "lucide-react";
import Image from "next/image";

const PLACEHOLDER_IMAGE = "https://placehold.co/400x400/e2e8f0/475569?text=Service";

// Define background colors for each service category
const serviceColors = {
  "Digital Marketing": [
    "bg-gradient-to-br from-blue-500 to-blue-600", // SEO & Content
    "bg-gradient-to-br from-green-500 to-green-600", // Paid Advertising
    "bg-gradient-to-br from-purple-500 to-purple-600", // Digital PR
    "bg-gradient-to-br from-pink-500 to-pink-600", // Influencer Marketing
  ],
  Branding: [
    "bg-gradient-to-br from-orange-500 to-orange-600", // Identity Development
    "bg-gradient-to-br from-red-500 to-red-600", // Brand Audit
    "bg-gradient-to-br from-indigo-500 to-indigo-600", // Brand Messaging
    "bg-gradient-to-br from-teal-500 to-teal-600", // Package & Design
  ],
  "Growth Hacking": [
    "bg-gradient-to-br from-cyan-500 to-cyan-600", // Landing Pages
    "bg-gradient-to-br from-emerald-500 to-emerald-600", // On-site Engagement
    "bg-gradient-to-br from-violet-500 to-violet-600", // Online Reputation Management
  ],
  "Marketing Automation": [
    "bg-gradient-to-br from-slate-500 to-slate-600", // Data Analytics & Dashboard
    "bg-gradient-to-br from-rose-500 to-rose-600", // Smart Analytics
  ],
};

const servicesData = {
    "Digital Marketing": [
    {
      title: "SEO & Content",
      desc: "Drive organic growth through strategic SEO and content marketing.",
      image: "/images/so-homepage-services/seo.png",
      tags: ["SEO", "Content", "Organic"],
      href: "/seo",
    },
    {
      title: "Paid Advertising",
      desc: "Targeted campaigns across Google and Meta platforms.",
      image: "/images/so-homepage-services/Performance-Marketing.png",
      tags: ["PPC", "Social", "Ads"],
      href: "/google-ads",
    },
    {
      title: "Digital PR",
      desc: "Build authority and reach through strategic digital PR.",
      image: "/images/so-homepage-services/digital-pr.jpg",
      tags: ["PR", "Authority", "Reach"],
      href: "/digital-pr",
    },
    {
      title: "Influencer Marketing",
      desc: "Leverage influencer partnerships for authentic brand growth.",
      image: "/images/so-homepage-services/Influencer-Marketing.png",
      tags: ["Influencers", "Social", "Growth"],
      href: "/influencers-marketing",
    },
  ],
  Branding: [
    {
      title: "Identity Development",
      desc: "Create a distinctive brand identity that sets you apart from competitors.",
      image: "/images/so-homepage-services/identity-development.jpg",
      tags: ["Brand", "Identity", "Design"],
      href: "/identity",
    },
    {
      title: "Brand Audit",
      desc: "Comprehensive analysis of your brand's current position and performance.",
      image: "/images/so-homepage-services/brand-audit.jpg",
      tags: ["Analysis", "Strategy", "Growth"],
      href: "/audit",
    },
    {
      title: "Brand Messaging",
      desc: "Develop a compelling voice that resonates with your audience.",
      image: "/images/so-homepage-services/brand-messaging.jpg",
      tags: ["Voice", "Message", "Communication"],
      href: "/messaging",
    },
    {
      title: "Package & Design",
      desc: "Create visually stunning brand assets that capture attention.",
      image: "/images/so-homepage-services/package-and-design.jpg",
      tags: ["Design", "Visual", "Assets"],
      href: "/design",
    },
  ],

  "Growth Hacking": [
    {
      title: "Landing Pages",
      desc: "High converting landing pages that converts quality leads",
      image: "/images/so-homepage-services/growth-hacking.jpg",
      tags: ["Growth", "Strategy", "Innovation"],
      href: "/landing-pages",
    },
    {
      title: "On-site Engagement",
      desc: "Turn in-person interactions into memorable brand experiences. ",
      image: "/images/so-homepage-services/marketing-automation.jpg",
      tags: ["Automation", "Efficiency", "Scale"],
      href: "/on-site-engagement",
    },
    {
      title: "Online Reputation Managment",
      desc: "Manage and enhance your online reputation.",
      image: "/images/so-homepage-services/orm.jpg",
      tags: ["Reputation", "Management", "Brand"],
      href: "/orm",
    },
  ],
  "Marketing Automation": [
    {
      title: "Data Analytics & Dashboard",
      desc: "Transform raw data into actionable insights with custom dashboards for real-time monitoring.",
      image: "https://placehold.co/400x400/3b82f6/ffffff?text=Data+Analytics",
      tags: ["Analytics", "Dashboard", "Data"],
      href: "/analytics-dashboard",
    },
    {
      title: "Smart Analytics",
      desc: "AI-powered analytics to predict trends and optimize performance with intelligent insights.",
      image: "https://placehold.co/400x400/8b5cf6/ffffff?text=Smart+AI",
      tags: ["AI", "Smart", "Prediction"],
      href: "/smart-analytics",
    },
  ],
};

const tabDescriptions = {
  Branding: "Build a strong brand identity",
  "Digital Marketing": "Drive growth through digital channels",
  "Growth Hacking": "Scale and optimize your business",
  "Marketing Automation": "Automate and optimize marketing processes",
};

const tabIcons = {
  Branding: Target,
  "Digital Marketing": Users,
  "Growth Hacking": Heart,
  "Marketing Automation": BarChart3,
};

export default function CombinedServiceFlow() {
  const categories = ["Digital Marketing", "Branding", "Growth Hacking", "Marketing Automation"];
  const [activeTab, setActiveTab] = useState(categories[0]);

  const handleImageError = (e) => {
    e.target.src = PLACEHOLDER_IMAGE;
  };

  return (
    <section className="py-8 md:py-16 px-4">
      <div className="max-w-7xl mx-auto" style={{ width: "min(1260px, 100%)" }}>
        {/* Header Section - Improved Mobile Spacing */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl font-bold mb-3 md:mb-4">Our Services</h2>
          <p className="text-base md:text-lg text-gray-600 px-2">
            Comprehensive digital solutions for your business growth
          </p>
        </div>

        {/* Mobile-Optimized Tabs Navigation */}
        <div className="flex overflow-x-auto md:overflow-visible md:justify-center gap-2 md:gap-4 mb-6 md:mb-8 pb-2 md:pb-0 scrollbar-hide">
          {categories.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 md:px-6 py-2.5 md:py-3 rounded-lg font-medium transition-all whitespace-nowrap flex-shrink-0 ${
                activeTab === tab
                  ? "bg-[#9a0c28] text-white shadow-lg"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tab Content - Mobile Optimized */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-8">
          {/* Left Column - Simplified Image */}
          <div className="lg:col-span-5">
            {activeTab === "Digital Marketing" ? (
              <div className="h-full flex items-stretch">
                <img
                  src="/images/services/service-flow2.webp"
                  alt="Service Flow"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            ) : null}
          </div>

          {/* Right Column - Improved Mobile Service Cards */}
          <div className={`${activeTab === "Digital Marketing" ? "lg:col-span-7" : "lg:col-span-12"}`}>
            <div className={`grid grid-cols-1 gap-4 ${
              activeTab === "Digital Marketing" ? "xl:grid-cols-2" : activeTab === "Marketing Automation" ? "md:grid-cols-2 xl:grid-cols-2" : "xl:grid-cols-4"
            }`}>
              {servicesData[activeTab].map((item, idx) => (
                <div
                  key={idx}
                  className="group bg-white border border-gray-200 rounded-xl p-4 md:p-5 hover:shadow-lg hover:border-red-200 transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="flex flex-col md:flex-row md:items-start gap-3">
                    {/* Image container - Full width on mobile with dynamic colors */}
                    <div className="flex-shrink-0 w-full md:w-28">
                      <div className={`h-[96px] w-full rounded-lg overflow-hidden ${serviceColors[activeTab][idx]} flex items-center justify-center shadow-md`}>
                        {/* <img
                          src={item.image || PLACEHOLDER_IMAGE}
                          alt={item.title}
                          className="w-full h-full object-cover"
                          onError={handleImageError}
                          loading="lazy"
                        /> */}

                        <p className="text-white text-[16px] p-2 text-center font-medium drop-shadow-sm">{item?.title}</p>
                      </div>
                    </div>
                    
                    {/* Content - Full width on mobile */}
                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold text-base md:text-sm text-gray-900 mb-2 group-hover:text-[#9a0c28] transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-gray-600 text-sm md:text-xs leading-relaxed mb-3 line-clamp-2">
                        {item.desc}
                      </p>
                      <div className="flex flex-wrap gap-1.5 mb-3">
                        {item.tags.slice(0, 2).map((tag, i) => (
                          <span
                            key={i}
                            className="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <a
                        href={item.href}
                        target={item.external ? "_blank" : "_self"}
                        rel={item.external ? "noopener noreferrer" : ""}
                        className="inline-flex items-center text-[#9a0c28] hover:text-[#7a0920] font-semibold text-sm md:text-xs group-hover:underline transition-all py-1"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 md:w-3 md:h-3 ml-1 transform group-hover:translate-x-1 transition-transform" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile-Optimized CTA */}
        {/* <div className="text-center mt-8 md:mt-12">
          <button className="w-full md:w-auto bg-[#9a0c28] hover:bg-[#7a0920] text-white px-6 py-3.5 md:py-3 rounded-full font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl text-base md:text-lg">
            Explore All Services
          </button>
        </div> */}
      </div>
    </section>
  );
}