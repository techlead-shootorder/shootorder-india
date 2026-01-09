import Image from "next/image";

// Dynamic content based on service slug
const serviceAboutData = {
  seo: {
    heading: "SEO Optimization",
    content:
      "Dominate search results with our comprehensive SEO strategies. We optimize every aspect of your website to improve visibility, drive organic traffic, and help your business rank higher on search engines. From keyword research to technical SEO, we ensure your content reaches the right audience at the right time.",
  },
  "digital-marketing": {
    heading: "Digital Marketing Excellence",
    content:
      "We don't just run ads, we create conversations. Our digital marketing approach balances creativity with performance to help your brand stand out where it matters most. From SEO to social campaigns, we design strategies that enhance visibility, attract the right audience, and convert clicks into loyal customers.",
  },
  branding: {
    heading: "Brand Identity & Strategy",
    content:
      "Your brand is more than a logo; it's the story that people remember. We craft brand identities that spark recognition and build trust. From design to messaging, we shape experiences that connect with your audience on an emotional level and keep your business unforgettable. ",
  },
  "growth-hacking": {
    heading: "Growth Hacking Innovation",
    content:
      "ShootOrder's Growth Hacking team specializes in rapid, scalable growth strategies that maximize results with minimal resources. We combine creative marketing techniques, data analytics, and innovative experimentation to identify the most effective growth channels for your business. Our growth hackers use a systematic approach to test, measure, and optimize every aspect of your customer acquisition funnel. From viral marketing campaigns to conversion rate optimization, we help startups and established businesses achieve explosive growth through unconventional yet highly effective methods.",
  },
  "marketing-automation": {
    heading: "Marketing Automation Solutions",
    content:
      "Work smarter, not harder. With data-driven dashboards, automated campaigns, and smart analytics, we help you streamline marketing and make every customer interaction count. Our automation solutions ensure you never miss an opportunity to engage, nurture, and grow.",
  },
};

const ServiceAboutSection = ({ data }) => {
  // Get the dynamic content based on the service slug
  const aboutContent = serviceAboutData[data?.slug] || {
    heading: "Our Story",
    content:
      "ShootOrder | Digital Marketing Agency, a division of Ivent It Solutions Pvt. Ltd., is a privately held digital marketing company in hyderabad, India. From conception we made sure that we set our foot into the massive universe of internet ventures which we knew the best and since then we have been making strides towards creative innovative and strategic benchmarks across the realm of digital marketing, with an adept talent pool and hunger for perfection we have been delivering the best results, bringing new market trends and have bought in more business for all our clients.",
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
              <div className="leading-relaxed">{aboutContent.content}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceAboutSection;
