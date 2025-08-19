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
                
                  Creating Apps That Drive Success
              </h3>
              <div className=" leading-relaxed">
                
                   "At Evolzer, we have got you covered when it comes to web development. Whether you are a start-up or an established organization, we are here to make your ideas into reality. Our team of talented designers and developers create responsive and custom web applications, ensuring that your website not only performs well but is also user-friendly. We stay up-to-date with the latest technologies and best industry practices to ensure your website stands out in the competitive digital landscape."
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
