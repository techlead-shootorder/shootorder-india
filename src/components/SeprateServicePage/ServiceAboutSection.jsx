import Image from "next/image";

// Dynamic content based on service slug
const serviceAboutData = {
  "digital-marketing": {
    heading: "Digital Marketing Excellence",
    content: "ShootOrder's Digital Marketing division specializes in comprehensive online marketing strategies that drive real results. Our expert team combines SEO, SEM, social media marketing, and content strategy to amplify your brand's digital presence. From increasing organic search visibility to crafting compelling social campaigns, we leverage data-driven insights and cutting-edge tools to maximize your ROI. With years of experience in the digital landscape, we understand what it takes to connect with your target audience and convert prospects into loyal customers."
  },
  "branding": {
    heading: "Brand Identity & Strategy",
    content: "At ShootOrder, we believe that powerful branding is the foundation of business success. Our branding experts work closely with you to develop a distinctive brand identity that resonates with your target audience and stands out in the marketplace. From logo design and brand guidelines to comprehensive brand strategy and positioning, we create cohesive visual and messaging frameworks that tell your story authentically. We help businesses of all sizes build memorable brands that foster trust, loyalty, and long-term growth."
  },
  "growth-hacking": {
    heading: "Growth Hacking Innovation",
    content: "ShootOrder's Growth Hacking team specializes in rapid, scalable growth strategies that maximize results with minimal resources. We combine creative marketing techniques, data analytics, and innovative experimentation to identify the most effective growth channels for your business. Our growth hackers use a systematic approach to test, measure, and optimize every aspect of your customer acquisition funnel. From viral marketing campaigns to conversion rate optimization, we help startups and established businesses achieve explosive growth through unconventional yet highly effective methods."
  },
  "marketing-automation": {
    heading: "Marketing Automation Solutions",
    content: "Transform your marketing efficiency with ShootOrder's comprehensive marketing automation services. Our team designs and implements sophisticated automation workflows that nurture leads, engage customers, and drive conversions around the clock. From email marketing sequences and lead scoring systems to personalized customer journeys and behavioral triggers, we create seamless automated experiences that feel personal and relevant. Our marketing automation solutions help businesses scale their marketing efforts, improve customer relationships, and achieve consistent results while saving time and resources."
  }
};

const ServiceAboutSection = ({ data }) => {
  // Get the dynamic content based on the service slug
  const aboutContent = serviceAboutData[data?.slug] || {
    heading: "Our Story",
    content: "ShootOrder | Digital Marketing Agency, a division of Ivent It Solutions Pvt. Ltd., is a privately held digital marketing company in hyderabad, India. From conception we made sure that we set our foot into the massive universe of internet ventures which we knew the best and since then we have been making strides towards creative innovative and strategic benchmarks across the realm of digital marketing, with an adept talent pool and hunger for perfection we have been delivering the best results, bringing new market trends and have bought in more business for all our clients."
  };

  return (
    <div className="services-details-area py-20 text-black"> 
      <div className="container mx-auto !max-w-7xl px-4">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Text Section */}
          <div className="lg:w-1/2 services-details">
            <div className="services-details-desc mb-8 lg:mb-0 lg:pr-8">
              <h3 className="text-[25px] font-bold mb-4">
                {aboutContent.heading}
              </h3>
              <div className="leading-relaxed">           
                {aboutContent.content}
              </div>
            </div>
          </div>
          {/* Image Section */}
          <div className="lg:w-1/2 w-full">
            <div className="services-details-image w-full animate__animated animate__fadeInUp">
              <Image
                src="/images/our-story.webp"
                alt={`${data?.title || 'Our'} Services`}
                layout="responsive"
                className="rounded-md"
                width={549}
                height={411}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceAboutSection;