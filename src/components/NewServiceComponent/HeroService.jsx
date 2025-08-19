import React from "react";
import Image from "next/image";
import Link from "next/link";

const HeroService = ({ imageUrl, subheading, heading }) => {
  return (
    <div
      className={`page-title-area relative h-[80vh]`}
    >
      <Image
        src={imageUrl}
        alt="Banner background"
        layout="fill"
        objectFit="cover"
        priority
      />
      {/* <div className="overlay absolute inset-0 bg-black opacity-40"></div> */}
      <div className="overlay absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent z-[]"></div>

      <div className="container mx-auto !max-w-7xl relative z-10 h-full flex flex-col justify-center">
        <div className="grid grid-cols-12 items-center !justify-between md:gap-24 !mx-2 md:mx-0">
          <div className="col-span-12 lg:col-span-7 text-center h-full flex flex-col justify-center lg:text-left">


            <h1 className="text-white !text-[30px] md:!text-[38px] font-bold mb-4 ">
              {heading}
            </h1>

            <p className="text-white max-w-lg text-lg">{subheading}</p>

            <Link
              href="/contact-us"
              className="w-fit bg-[#9a0c28] text-white px-4 py-2 rounded-lg font-semibold transition-colors block text-center mt-8"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroService;