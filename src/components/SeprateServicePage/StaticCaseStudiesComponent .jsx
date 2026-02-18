"use client";
import React, { useState, useEffect } from "react";
import {
  ChevronRight,
  ChevronLeft,
  TrendingUp,
  Award,
  Eye,
  Download,
} from "lucide-react";
import { useRouter } from "next/navigation";

const StaticCaseStudiesComponent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  const router = useRouter();

  const caseStudies = {
    seo: [
      {
        id: "seo",
        slug: "seo-cake-company",
        title: "Baking Up Success: How SEO Helped CountryOven Climb the Ranks",
        image: "/~shootordernew/images/CaseStudies/SEO/country-oven.webp",
        description:
          "With targeted SEO efforts, CountryOven witnessed sustained traffic growth and 100% keyword visibility in 12 months.",
        results: "Overall Score 4.0",
        pdfUrl: "/pdfs/case-studies/seo/SEO_1.pdf",
        client: "CountryOven.com",
        industry: "Bakery & E-commerce",
        duration: "Feb. 2015 - Ongoing",
        investment: "$5,000 to $10,000 per month",
      },
      {
        id: "seo",
        slug: "seo-caravan-rental",
        title: "On the Road to Success: How SEO Fueled Carawander's Journey",
        image: "/~shootordernew/images/CaseStudies/SEO/carawander.webp",
        description:
          "With consistent SEO efforts, ShootOrder helped Carawander boost web-driven sales and profits by over 40% since 2021.",
        results: "Overall Score 5.0",
        pdfUrl: "/pdfs/case-studies/seo/SEO_2.pdf",
        client: "Caravan Adventures Ltd",
        industry: "Travel & Tourism",
        duration: "Jan. 2020 - Ongoing",
        investment: "$10,000 to $25,000 per month",
      },
      {
        id: "seo",
        slug: "seo-travel-company",
        title: "Driven by Search: How SEO Accelerated a Travel Brand's Growth",
        image: "/~shootordernew/images/CaseStudies/SEO/travtips.webp",
        description:
          "Targeted SEO strategies helped a Dubai-based travel company boost lead generation and grow its business.",
        results: "Overall Score 4.0",
        pdfUrl: "/pdfs/case-studies/seo/SEO_3.pdf",
        client: "Global Travel Solutions",
        industry: "Travel & Tourism",
        duration: "Mar. 2019 - Dec. 2022",
        investment: "$15,000 to $30,000 per month",
      },
    ],
    googleAds: [
      {
        id: "google-ads",
        slug: "ppc-edtech-company",
        title:
          "Creative Content That Clicks: Social Success for an EHR Platform",
        image: "/~shootordernew/images/CaseStudies/PPC/Alpa-kids.webp",
        description:
          "With sharp Facebook and Google Ads tailored for India, ShootOrder helped ALPA Kids achieve 400K+ app downloads—proving big impact doesn't need a big budget.",
        results: "Overall Score 5.0",
        pdfUrl: "/pdfs/case-studies/google-ads/PPC_1.pdf",
        client: "IPI India Pvt. Ltd",
        industry: "Education Technology",
        duration: "Aug. 2020 - Mar. 2023",
        investment: "$25,000 to $50,000 per month",
      },
      {
        id: "google-ads",
        slug: "ppc-fertility-provider",
        title: "How ShootOrder Boosted ROI for Oasis Fertility",
        image: "/~shootordernew/images/CaseStudies/PPC/Oasis.webp",
        description:
          "By streamlining AD campaigns, ShootOrder helped Oasis Fertility cut cost-per-lead and boost returns—delivering consistent, cost-effective performance.",
        results: "Overall Score 4.5",
        pdfUrl: "/pdfs/case-studies/google-ads/PPC_2.pdf",
        client: "Advanced Fertility Center",
        industry: "Healthcare",
        duration: "Jun. 2021 - Ongoing",
        investment: "$8,000 to $15,000 per month",
      },
      {
        id: "google-ads",
        slug: "ppc-health-wellness",
        title: "Powering IPI Growth with Precision PPC",
        image: "/~shootordernew/images/CaseStudies/PPC/IPI-india.webp",
        description:
          "ShootOrder's paid ad strategy helped IPI India scale online orders from $100 to $1,000/month while optimizing every rupee spent.",
        results: "Overall Score 4.0",
        pdfUrl: "/pdfs/case-studies/by-service/PPC_IPI_India.pdf",
        client: "Wellness Plus Solutions",
        industry: "Health & Wellness",
        duration: "Jan. 2022 - Ongoing",
        investment: "$12,000 to $20,000 per month",
      },
    ],
    socialMedia: [
      {
        id: "social-media-marketing",
        slug: "smm-luxury-car-brand",
        title: "How Strategic Social Media Marketing Fueled a Luxury Car Brand",
        image: "/~shootordernew/images/CaseStudies/SMM/BMW.webp",
        description:
          "With tailored campaigns and consistent engagement, ShootOrder elevated digital visibility and lead generation across key social platforms.",
        results: "Overall Score 4.5",
        pdfUrl: "/pdfs/case-studies/social-media-marketing/SMM_1.pdf",
        client: "Elite Motors Group",
        industry: "Automotive - Luxury",
        duration: "Sep. 2020 - Ongoing",
        investment: "$20,000 to $35,000 per month",
      },
      {
        id: "social-media-marketing",
        slug: "smm-auto-dealership",
        title:
          "Driving Digital: How ShootOrder Steered Online Growth for an Auto Brand",
        image: "/~shootordernew/images/CaseStudies/SMM/Auto-dealership.webp",
        description:
          "By managing SEO, PPC, and Google assets, ShootOrder helped generate 20% of all vehicle bookings through digital platforms.",
        results: "Overall Score 5.0",
        pdfUrl: "/pdfs/case-studies/social-media-marketing/SMM_2.pdf",
        client: "Metro Auto Sales",
        industry: "Automotive",
        duration: "May 2021 - Ongoing",
        investment: "$15,000 to $25,000 per month",
      },
      {
        id: "social-media-marketing",
        slug: "smm-it-services",
        title:
          "Creative Content That Clicks: Social Success for an EHR Platform",
        image: "/~shootordernew/images/CaseStudies/SMM/Orchasp.webp",
        description:
          "With standout visuals and consistent social media campaigns, ShootOrder amplified visibility for Orchasp's healthcare tech across Facebook, Instagram, and LinkedIn.",
        results: "Overall Score 4.0",
        pdfUrl: "/pdfs/case-studies/social-media-marketing/SMM_3.pdf",
        client: "TechFlow Solutions",
        industry: "Information Technology",
        duration: "Nov. 2021 - Ongoing",
        investment: "$8,000 to $18,000 per month",
      },
    ],
  };

  // Combine all case studies into one array
  const allCaseStudies = [
    ...caseStudies.seo,
    ...caseStudies.googleAds,
    ...caseStudies.socialMedia,
  ];

  // Handle responsive items per page
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerPage(1);
      } else {
        setItemsPerPage(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Reset currentIndex when itemsPerPage changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [itemsPerPage]);

  const totalPages = Math.ceil(allCaseStudies.length / itemsPerPage);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalPages);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const getCurrentItems = () => {
    const startIndex = currentIndex * itemsPerPage;
    return allCaseStudies.slice(startIndex, startIndex + itemsPerPage);
  };

  const handleCaseStudyClick = (studySlug) => {
    router.push(`/case-studies/${studySlug}`);
    console.log("Navigate to:", studySlug);
  };

  const handleDownloadPDF = async (pdfUrl, title, event) => {
    event.stopPropagation();

    try {
      const link = document.createElement("a");
      link.href = pdfUrl;
      link.download = `${title
        .replace(/[^a-z0-9]/gi, "-")
        .toLowerCase()}-case-study.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Error downloading PDF:", error);
      alert("Error downloading PDF. Please try again.");
    }
  };

  const CaseStudyCard = ({ study, index }) => (
    <div
      key={`case-study-${index}`}
      className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer bg-white border border-gray-100 flex-shrink-0 w-full"
      onClick={() => handleCaseStudyClick(study.slug)}
    >
      {/* Image Section */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={study.image}
          alt={study.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          onError={(e) => {
            e.target.style.display = "none";
            e.target.parentElement.classList.add(
              "bg-gradient-to-br",
              "from-gray-100",
              "to-gray-200"
            );
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

        <div className="absolute top-4 right-4">
          <Award className="w-6 h-6 text-white drop-shadow-lg opacity-80" />
        </div>
      </div>

      {/* Content Section */}
      <div className="relative flex flex-col p-6 text-black bg-white">
        <div className="flex-grow">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 rounded-full bg-[#cd1f38]"></div>
              <span className="text-sm text-gray-600 font-medium">
                {study.industry}
              </span>
            </div>
            <ChevronRight className="w-5 h-5 opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
          </div>

          <h3 className="text-xl font-bold mb-3 group-hover:text-[#cd1f38] transition-colors duration-300 leading-tight">
            {study.title}
          </h3>

          <p className="text-gray-700 mb-4 text-sm leading-relaxed line-clamp-3">
            {study.description}
          </p>
        </div>

        <div className="space-y-3 mt-auto">
          <div className="flex items-center space-x-2">
            <TrendingUp className="w-4 h-4 text-[#cd1f38]" />
            <span className="text-sm font-medium text-gray-800">
              {study.results}
            </span>
          </div>

          <div className="flex space-x-2">
            <div className="inline-flex items-center space-x-2 bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-lg transition-all duration-300 text-sm font-medium flex-1 text-center justify-center">
              <Eye className="w-4 h-4" />
              <span>View Study</span>
            </div>

            {study.pdfUrl && (
              <button
                onClick={(e) => handleDownloadPDF(study.pdfUrl, study.title, e)}
                className="inline-flex items-center space-x-2 bg-[#cd1f38] hover:bg-[#7a0a20] px-4 py-2 rounded-lg transition-all duration-300 text-sm font-medium text-white"
                title={`Download ${study.title} Case Study PDF`}
              >
                <Download className="w-4 h-4" />
                <span className="hidden sm:inline">PDF</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="!max-w-7xl mx-auto px-4 pt-16 pb-20">
        {/* Main Title */}
        <div className="text-center mb-16">
          <h1 className="text-3xl font-bold text-black mb-4">
            Our Sagas of Success.
          </h1>
          <p className="text-gray-600 text-xl max-w-4xl mx-auto">
            Come, discover how we've transformed businesses across industries with innovative digital solutions.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className="absolute -left-4 sm:-left-10 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-1.5 sm:p-3 hover:bg-gray-50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed border border-gray-200"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>

          <button
            onClick={nextSlide}
            disabled={currentIndex === totalPages - 1}
            className="absolute -right-4 sm:-right-10 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-1.5 sm:p-3 hover:bg-gray-50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed border border-gray-200"
          >
            <ChevronRight className="w-6 h-6 text-gray-700" />
          </button>

          {/* Carousel Content */}
          <div className="overflow-hidden rounded-xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {Array.from({ length: totalPages }).map((_, pageIndex) => {
                const startIndex = pageIndex * itemsPerPage;
                const pageItems = allCaseStudies.slice(
                  startIndex,
                  startIndex + itemsPerPage
                );

                return (
                  <div
                    key={pageIndex}
                    className={`flex w-full flex-shrink-0 ${
                      itemsPerPage === 1 ? "" : "gap-8"
                    }`}
                  >
                    {pageItems.map((study, index) => (
                      <div
                        key={`${pageIndex}-${index}`}
                        className={`${itemsPerPage === 1 ? "w-full" : "w-1/3"}`}
                      >
                        <CaseStudyCard
                          study={study}
                          index={`${pageIndex}-${index}`}
                        />
                      </div>
                    ))}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentIndex === index
                    ? "bg-[#cd1f38] scale-110"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StaticCaseStudiesComponent;
