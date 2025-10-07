import Image from "next/image";

const DescriptionService = ({ service }) => {
  // Service content configuration
  const serviceContent = {
    seo: {
      heading: "Search Engine Optimization (SEO)",
      description: "Our SEO services help your business rank higher in search engine results, driving organic traffic and increasing your online visibility. We use proven strategies including keyword optimization, technical SEO, content marketing, and link building to ensure your website appears when your customers are searching for your services. Our comprehensive SEO approach focuses on both on-page and off-page optimization to deliver sustainable long-term results.",
      image: "/images/seo-services.webp",
      alt: "SEO Services - Search Engine Optimization"
    },
    "web-development": {
      heading: "Web Development Services",
      description: "We create modern, responsive, and user-friendly websites that drive results for your business. Our web development team specializes in cutting-edge technologies including React, Next.js, and modern frameworks to build fast, scalable, and secure websites. From custom web applications to e-commerce solutions, we deliver digital experiences that engage users and convert visitors into customers.",
      image: "/images/web-development.webp",
      alt: "Web Development Services"
    },
    "digital-marketing": {
      heading: "Digital Marketing Solutions",
      description: "Comprehensive digital marketing strategies that amplify your brand presence across all digital channels. Our services include social media marketing, pay-per-click advertising, content marketing, email campaigns, and conversion optimization. We create data-driven marketing campaigns that target your ideal customers, increase brand awareness, and generate qualified leads for sustainable business growth.",
      image: "/images/digital-marketing.webp",
      alt: "Digital Marketing Services"
    },
    "social-media": {
      heading: "Social Media Marketing",
      description: "Build a strong social media presence that engages your audience and drives business results. Our social media experts create compelling content, manage your social profiles, run targeted advertising campaigns, and build meaningful connections with your customers across platforms like Facebook, Instagram, LinkedIn, and Twitter. We help you establish thought leadership and create viral content that expands your reach.",
      image: "/images/social-media.webp",
      alt: "Social Media Marketing Services"
    },
    "content-marketing": {
      heading: "Content Marketing Strategy",
      description: "Strategic content creation that educates, engages, and converts your target audience. Our content marketing services include blog writing, video production, infographic design, and multimedia content that tells your brand story effectively. We develop content calendars, optimize for search engines, and create valuable resources that position your business as an industry authority while driving organic traffic and lead generation.",
      image: "/images/content-marketing.webp",
      alt: "Content Marketing Services"
    },
    "ppc-advertising": {
      heading: "Pay-Per-Click (PPC) Advertising",
      description: "Maximize your ROI with targeted PPC campaigns that deliver immediate results. Our certified Google Ads specialists create and manage campaigns across Google Ads, Facebook Ads, LinkedIn Ads, and other platforms. We focus on keyword research, ad copy optimization, landing page optimization, and continuous campaign refinement to ensure you get the best possible return on your advertising investment.",
      image: "/images/ppc-advertising.webp",
      alt: "PPC Advertising Services"
    }
  };

  console.log("service testing", service);

  // Default content (fallback)
  const defaultContent = {
    heading: "Our Story",
    description: "ShootOrder | Digital Marketing Agency, a division of Ivent It Solutions Pvt. Ltd., is a privately held digital marketing company in hyderabad, India. From conception we made sure that we set our foot into the massive universe of internet ventures which we knew the best and since then we have been making strides towards creative innovative and strategic benchmarks across the realm of digital marketing, with an adept talent pool and hunger for perfection we have been delivering the best results, bringing new market trends and have bought in more business for all our clients.",
    image: "/images/our-story.webp",
    alt: "Our Story - Digital Marketing Agency"
  };

  // Get content based on service prop, fallback to default
  const content = serviceContent[service] || defaultContent;

  return (
    <div className="services-details-area py-20 text-white relative "
      style={{
        backgroundImage: `url(${service?.imageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >

      <div className="absolute inset-0 bg-black z-0" style={{opacity: 0.4}}></div>

      <div className="container mx-auto !max-w-7xl px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Text Section */}
          <div className="lg:w-1/2 services-details">
            <div className="services-details-desc mb-8 lg:mb-0 lg:pr-8">
              <h3 className="text-[25px] font-bold mb-4">
                {service?.heading}
              </h3>
              <div className="leading-relaxed">
                {service?.description}
              </div>
            </div>
          </div>
          
          {/* Image Section */}
          <div className="lg:w-1/2 w-full">
            {/* <div className="services-details-image w-full animate__animated animate__fadeInUp">
              <div className="relative w-full h-96 lg:h-[400px]">
                <Image
                  src={service?.imageUrl}
                  alt={service?.heading}
                  fill
                  className="rounded-md object-cover"
                />
              </div>
            </div> */}
          </div>

          

        </div>
      </div>
    </div>
  );
};

export default DescriptionService;
