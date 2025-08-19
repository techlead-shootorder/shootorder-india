import Image from "next/image";

const DescriptionService = () => {
  return (
    <div className="services-details-area py-20 bg-[#9a0c28] text-white"> 
      <div className="container mx-auto !max-w-7xl px-4">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Text Section */}
          <div className="lg:w-1/2 services-details">
            <div className="services-details-desc mb-8 lg:mb-0 lg:pr-8">
              <h3 className="text-[25px] font-bold mb-4">
                
                  Our Story
              </h3>
              <div className=" leading-relaxed">           
                   ShootOrder | Digital Marketing Agency, a division of Ivent It Solutions Pvt. Ltd., is a privately held digital marketing company in hyderabad, India. From conception we made sure that we set our foot into the massive universe of internet ventures which we knew the best and since then we have been making strides towards creative innovative and strategic benchmarks across the realm of digital marketing, with an adept talent pool and hunger for perfection we have been delivering the best results, bringing new market trends and have bought in more business for all our clients.
              </div>
            </div>
          </div>
          {/* Image Section */}
          <div className="lg:w-1/2 w-full">
            <div className="services-details-image w-full animate__animated animate__fadeInUp">
              <Image
                src={
                   "/images/about-us/about.webp"
                }
                alt="Web Development Services"
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

export default DescriptionService;
