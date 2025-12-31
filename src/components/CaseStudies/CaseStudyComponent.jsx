"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { ChevronRight, TrendingUp, Award, Eye, Download } from "lucide-react";

const CaseStudyComponent = ({ service }) => {
  const router = useRouter();

  const processStudies = [
    {
      id: "seo",
      slug: "seo-cake-company",
      title: "Baking Up Success: How SEO Helped CountryOven Climb the Ranks",
      image: "/images/CaseStudies/SEO/country oven.png",
      description:
        "With targeted SEO efforts, CountryOven witnessed sustained traffic growth and 100% keyword visibility in 12 months.",
      results: "Overall Score 4.0",
      logoUrl: "/images/logo/country-oven-logo.png",
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
      image: "/images/CaseStudies/SEO/carawander.png",
      description:
        "With consistent SEO efforts, ShootOrder helped Carawander boost web-driven sales and profits by over 40% since 2021.",
      results: "Overall Score 5.0",
      logoUrl: "/images/logo/caravander-logo.png",
      color: "from-slate-700 to-slate-800",
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
      image: "/images/CaseStudies/SEO/travtips.png",
      description:
        "Targeted SEO strategies helped a Dubai-based travel company boost lead generation and grow its business. ",
      results: "Overall Score 4.0",
      logoUrl: "/images/logo/travtips-logo.png",
      color: "from-slate-700 to-slate-800",
      pdfUrl: "/pdfs/case-studies/seo/SEO_3.pdf",
      client: "Global Travel Solutions",
      industry: "Travel & Tourism",
      duration: "Mar. 2019 - Dec. 2022",
      investment: "$15,000 to $30,000 per month",
    },
    {
      id: "google-ads",
      slug: "ppc-edtech-company",
      title: "Creative Content That Clicks: Social Success for an EHR Platform",
      image: "/images/CaseStudies/PPC/ipi.png",
      description:
        "With sharp Facebook and Google Ads tailored for India, ShootOrder helped ALPA Kids achieve 400K+ app downloads—proving big impact doesn't need a big budget. ",
      results: "Overall Score 5.0",
      color: "from-blue-600 to-blue-700",
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
      image: "/images/CaseStudies/PPC/oasis.png",
      description:
        "By streamlining AD campaigns, ShootOrder helped Oasis Fertility cut cost-per-lead and boost returns—delivering consistent, cost-effective performance. ",
      results: "Overall Score 4.5",
      color: "from-blue-600 to-blue-700",
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
      image: "/images/CaseStudies/PPC/alpa kids.png",
      description:
        "ShootOrder's paid ad strategy helped IPI India scale online orders from $100 to $1,000/month while optimizing every rupee spent.",
      results: "Overall Score 4.0",
      color: "from-blue-600 to-blue-700",
      pdfUrl: "/pdfs/case-studies/by-service/PPC_IPI_India.pdf",
      client: "Wellness Plus Solutions",
      industry: "Health & Wellness",
      duration: "Jan. 2022 - Ongoing",
      investment: "$12,000 to $20,000 per month",
    },
    {
      id: "social-media-marketing",
      slug: "smm-luxury-car-brand",
      title: "How Strategic Social Media Marketing Fueled a Luxury Car Brand",
      image: "/images/CaseStudies/SMM/bmw - Luxury Car Brand.png",
      description:
        "With tailored campaigns and consistent engagement, ShootOrder elevated digital visibility and lead generation across key social platforms.",
      results: "Overall Score 4.5",
      color: "from-purple-600 to-purple-700",
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
      image: "/images/CaseStudies/SMM/auto dealership.png",
      description:
        "By managing SEO, PPC, and Google assets, ShootOrder helped generate 20% of all vehicle bookings through digital platforms.",
      results: "Overall Score 5.0",
      color: "from-purple-600 to-purple-700",
      pdfUrl: "/pdfs/case-studies/social-media-marketing/SMM_2.pdf",
      client: "Metro Auto Sales",
      industry: "Automotive",
      duration: "May 2021 - Ongoing",
      investment: "$15,000 to $25,000 per month",
    },
    {
      id: "social-media-marketing",
      slug: "smm-it-services",
      title: "Creative Content That Clicks: Social Success for an EHR Platform",
      image: "/images/CaseStudies/SMM/orchasp.png",
      description:
        "With standout visuals and consistent social media campaigns, ShootOrder amplified visibility for Orchasp's healthcare tech across Facebook, Instagram, and LinkedIn. ",
      results: "Overall Score 4.0",
      color: "from-purple-600 to-purple-700",
      pdfUrl: "/pdfs/case-studies/social-media-marketing/SMM_3.pdf",
      client: "TechFlow Solutions",
      industry: "Information Technology",
      duration: "Nov. 2021 - Ongoing",
      investment: "$8,000 to $18,000 per month",
    },
  ];

  // Find the matching case studies based on service prop
  const relevantStudies = processStudies.filter(
    (study) => study.id === service
  );

  // If no matching service found, don't render anything
  if (!relevantStudies || relevantStudies.length === 0) {
    return null;
  }

  const handleCaseStudyClick = (studySlug) => {
    // Navigate to individual case study page with the service context
    // router.push(`/${service}/case-studies/${studySlug}`);

    router.push(`/case-studies/${studySlug}`);
  };

  const handleDownloadPDF = async (pdfUrl, title, event) => {
    event.stopPropagation(); // Prevent card click when button is clicked

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
      key={index}
      className="group relative rounded-2xl shadow-lg hover:shadow-xl  cursor-pointer bg-white border border-gray-100"
      onClick={() => handleCaseStudyClick(study.slug)}
    >
      {/* Image Section */}
      <div className="relative h-46 ">
        <img
          src={study.image}
          alt={study.title}
          className="w-full h-full rounded-t-2xl object-cover  "
          onError={(e) => {
            // Fallback to a gradient background if image fails to load
            e.target.style.display = "none";
            e.target.parentElement.classList.add(
              "bg-gradient-to-br",
              "from-gray-100",
              "to-gray-200"
            );
          }}
        />
        {/* top logo */}
        <div className="absolute -top-6 left-1/2 -translate-x-1/2 ">
          <img
            src={study?.logoUrl}
            className="object-cover rounded-md w-[120px] h-[50px]"
            alt="TravTips"
          />
        </div>

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

        {/* Award icon overlay */}
        <div className="absolute top-4 right-4">
          <Award className="w-6 h-6 text-white drop-shadow-lg opacity-80" />
        </div>
      </div>

      {/* Content Section */}
      <div className="relative flex flex-col p-6 text-black bg-white">
        <div className="flex-grow">
          {/* <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 rounded-full bg-[#9a0c28]"></div>
              <span className="text-sm text-gray-600 font-medium">{study.industry}</span>
            </div>
            <ChevronRight className="w-5 h-5 opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
          </div> */}

          <h3 className="text-xl font-bold mb-6 group-hover:text-[#9a0c28] transition-colors duration-300 leading-tight">
            {study.title}
          </h3> 

         {/*<div className="grid grid-cols-2 text-gray-800 mb-6">
            <div className="flex flex-col items-center">
              <h2 className="text-3xl font-semibold">+232%</h2>
              <p>Online Traffic</p>
            </div>
            <div className="flex flex-col items-center">
              <h2 className="text-3xl font-semibold">+75.5%</h2>
              <p>Organic Leads</p>
            </div>
          </div>*/}

          {/* <p className="text-gray-700 mb-4 text-sm leading-relaxed line-clamp-3">
            {study.description}
          </p> */}
        </div>

        <div className="space-y-3 mt-auto">
          {/* <div className="flex items-center space-x-2">
            <TrendingUp className="w-4 h-4 text-[#9a0c28]" />
            <span className="text-sm font-medium text-gray-800">{study.results}</span>
          </div> */}

          <div className="flex justify-center space-x-2">
            <div className="inline-flex items-center space-x-2  border border-gray-400 text-gray-600 hover:bg-gray-100 px-6 py-2 rounded-full transition-all duration-300 text-lg font-medium text-center justify-center">
              {/* <Eye className="w-4 h-4" /> */}
              <span>View Study</span>
            </div>

            {/* {study.pdfUrl && (
              <button
                onClick={(e) => handleDownloadPDF(study.pdfUrl, study.title, e)}
                className="inline-flex items-center space-x-2 bg-[#9a0c28] hover:bg-[#7a0a20] px-4 py-2 rounded-lg transition-all duration-300 text-sm font-medium text-white"
                title={`Download ${study.title} Case Study PDF`}
              >
                <Download className="w-4 h-4" />
                <span className="hidden sm:inline">PDF</span>
              </button>
            )} */}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="">
      <div className="!max-w-7xl mx-auto px-4 sm:px-20 pt-16 pb-20">
        <h1 className="text-center font-bold text-3xl mb-10 text-black">
          Case Studies
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {relevantStudies.map((study, index) => (
            <CaseStudyCard key={study.slug} study={study} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CaseStudyComponent;
