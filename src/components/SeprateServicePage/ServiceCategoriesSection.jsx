"use client";
import { useState } from "react";
import {
  Search,
  MousePointer,
  Users,
  PenTool,
  Edit,
  Globe,
  Share2,
  TrendingUp,
  Target,
  Eye,
  BarChart3,
  Brain,
  Palette,
  Award,
  Megaphone,
  MessageSquare,
} from "lucide-react";

const ServiceCategoriesSection = ({ data }) => {
  const [activeTab, setActiveTab] = useState("owned");

  const digitalMarketingServices = {
    owned: [
      {
        title: "SEO Optimization",
        description: "Dominate organic search results",
        slug: "/seo",
        icon: Search,
      },
      // {
      //   title: "Blog Management",
      //   description: "Content that converts and engages",
      //   slug: "/blog-management",
      //   icon: Edit,
      // },
      {
        title: "Website Development",
        description: "High-performance, responsive websites",
        slug: "/web-design",
        icon: Globe,
      },
      {
        title: "Social Media Marketing",
        description: "Build your social media presence",
        slug: "/social-media-marketing",
        icon: Share2,
      },
      // {
      //   title: "GBP Management",
      //   description: "Build your social media presence",
      //   slug: "/gbp-management",
      //   icon: Target,
      // },
    ],
    paid: [
      {
        title: "Google Ads",
        description: "PPC campaigns that drive results",
        slug: "/google-ads",
        icon: MousePointer,
      },
      {
        title: "Meta Ads",
        description: "Effective social media advertising",
        slug: "/meta-ads",
        icon: Users,
      },
    ],
    earned: [
      {
        title: "Digital PR",
        description: "Build your online presence",
        slug: "/digital-pr",
        icon: Megaphone,
      },
      {
        title: "Influencer Marketing",
        description: "Connect with relevant influencers",
        slug: "/influencers-marketing",
        icon: Users,
      },
    ],
  };

  const brandingServices = [
    {
      title: "Identity Development",
      description: "Create a unique brand identity that stands out",
      slug: "/identity",
      icon: Palette,
    },
    {
      title: "Packaging & Design",
      description: "Stunning visual brand assets and materials",
      slug: "/design",
      icon: PenTool,
    },
    {
      title: "Brand Audit",
      description: "Evaluate your brand's performance & positioning",
      slug: "/audit",
      icon: Award,
    },
    {
      title: "Brand Launch & Campaigns",
      description: "Launch your brand with impact",
      slug: "/campaigns",
      icon: TrendingUp,
    },
    // {
    //   title: "Brand Messaging & Tone of Voice",
    //   description: "Develop your authentic brand voice",
    //   slug: "/messaging",
    //   icon: MessageSquare,
    // },
  ];

  const growthHackingServices = [
    {
      title: "Landing Pages",
      description: "High-converting landing pages that generate quality leads",
      slug: "/landing-pages",
      icon: Globe,
    },
    {
      title: "On-site Engagement",
      description: "Optimize user experience and engagement",
      slug: "/on-site-engagement",
      icon: MousePointer,
    },
    {
      title: "Online Reputation Management (ORM)",
      description: "Protect and enhance your online reputation",
      slug: "/orm",
      icon: Eye,
    },
  ];

  const marketingAutomationServices = [
    {
      title: "Data Analytics & Dashboards",
      description: "Advanced analytics and comprehensive reporting tools",
      slug: "/analytics-dashboards",
      icon: BarChart3,
    },
    {
      title: "Smart Analytics",
      description: "AI-powered insights to stay ahead of competition",
      slug: "/smart-analytics",
      icon: Brain,
    },
  ];

  const ServiceCard = ({ service }) => {
    const IconComponent = service.icon;

    return (
      <a href={service.slug}>
        <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                <IconComponent className="w-6 h-6 text-[#cd1f38]" />
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          </div>
        </div>
      </a>
    );
  };

  const CategorySection = ({ title, subtitle, children, className = "" }) => (
    <div className={`py-16 ${className}`}>
      <div className="!max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{title}</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
        </div>
        {children}
      </div>
    </div>
  );

  // Function to render based on slug
  const renderCategory = () => {
    if (!data?.slug) return null;

    switch (data.slug) {
      case "digital-marketing":
        return (
          <CategorySection
            title="Digital Marketing"
            subtitle="Explore our comprehensive digital marketing solutions"
            className="bg-white"
          >
            {/* Tab Navigation */}
            <div className="flex justify-center mb-8">
              <div className="bg-gray-100 p-1 rounded-xl">
                {[
                  { key: "owned", label: "Owned Media" },
                  { key: "paid", label: "Paid Media" },
                  { key: "earned", label: "Earned Media" },
                ].map((tab) => (
                  <button
                    key={tab.key}
                    onClick={() => setActiveTab(tab.key)}
                    className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                      activeTab === tab.key
                        ? "bg-white text-[#cd1f38] shadow-sm"
                        : "text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Tab Content */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {digitalMarketingServices[activeTab].map((service, index) => (
                <ServiceCard key={index} service={service} />
              ))}
            </div>
          </CategorySection>
        );

      case "branding":
        return (
          <CategorySection
            title="Branding"
            subtitle="Explore our comprehensive branding solutions"
            className=""
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {brandingServices.map((service, index) => (
                <ServiceCard key={index} service={service} />
              ))}
            </div>
          </CategorySection>
        );

      case "growth-hacking":
        return (
          <CategorySection
            title="Growth Hacking"
            subtitle="Explore our comprehensive growth hacking solutions"
            className="bg-white"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {growthHackingServices.map((service, index) => (
                <ServiceCard key={index} service={service} />
              ))}
            </div>
          </CategorySection>
        );

      case "marketing-automation":
        return (
          <CategorySection
            title="Marketing Automation"
            subtitle="Explore our comprehensive marketing automation solutions"
            className=""
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {marketingAutomationServices.map((service, index) => (
                <ServiceCard key={index} service={service} />
              ))}
            </div>
          </CategorySection>
        );

      default:
        return (
          <div className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Category Not Found
              </h2>
              <p className="text-gray-600">
                The requested service category is not available.
              </p>
            </div>
          </div>
        );
    }
  };

  return <div className="">{renderCategory()}</div>;
};

export default ServiceCategoriesSection;
