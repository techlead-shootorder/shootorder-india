import Image from 'next/image';

const ServiceHeroSection = () => {
  return (
    <section className="bg-[#fffdf4] py-16 px-4 lg:px-8 mt-20">
      <div className="!max-w-7xl mx-auto">

        <div className="grid lg:grid-cols-2 sm:gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Main Heading */}
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-blue-950 leading-tight">
              Amplifying brands,<br />
              driving engagement,<br />
              and creating <span className="text-yellow-400">impact</span>
            </h1>
            
            {/* Subtext */}
            <p className="text-lg lg:text-xl text-gray-600 max-w-lg">
              We are a content-focused social media agency specializing in original, 
              high-engagement content for brands on Meta and LinkedIn.
            </p>
            
            {/* Partners Image */}
            <div className="py-4">
              <Image
                src="/images/services/service-partners-image.webp"
                alt="Partners - Google Partner, Shopify Partners, Meta Business Partners, Klaviyo Partner"
                width={500}
                height={80}
                className="h-16 w-auto object-contain"
              />
            </div>
            
            {/* CTA Button */}
            <button className="bg-blue-950 text-white px-4 py-3 rounded-lg font-medium hover:bg-navy-800 transition-colors duration-300 inline-flex items-center gap-2">
              Check our services
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          
          {/* Right Side - Hero Image */}
          <div className="relative">
            <Image
              src="/images/services/service-hero-image.webp"
              alt="Content creation showcase with various brand examples"
              width={600}
              height={600}
              className="w-full h-auto object-cover rounded-lg"
              priority
            />
          </div>

        </div>

      </div>
    </section>
  );
};

export default ServiceHeroSection;