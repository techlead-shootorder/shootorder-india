import Image from "next/image";

export default function AboutUs() {
  return (
    <section className="py-4 sm:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-12 gap-12 items-center">
          {/* Empty column to align with logo position */}
          <div className="col-span-1"></div>

          <div className="col-span-10 grid md:grid-cols-2 gap-12 items-center">
            {/* Image Section */}
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/SO Banner 1024 by 1024.webp"
                alt="ShootOrder Office"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                priority
              />
              <div className="absolute inset-0">
                <div className="absolute bottom-6 left-6 text-white">
                  <p className="text-sm font-medium">Headquarters</p>
                  <p className="text-lg font-bold">Hyderabad, India</p>
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="space-y-8">
              <div className="space-y-3">
                {/* <h4 className="text-[#9a0c28] font-medium uppercase tracking-wider">
                About Us
              </h4> */}
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  Our Story
                </h2>
              </div>

              <div className="space-y-4 text-gray-600">
                {/* <p className="leading-relaxed">
                ShootOrder is a leading full-service digital marketing agency
                helping businesses across the United States grow smarter and
                faster.
              </p> */}
                {/* <p className="leading-relaxed">
                Trusted by over 300 businesses worldwide, we&apos;ve built a
                strong reputation for delivering real results through proven
                strategies in Content Marketing, SEO, PPC Advertising, and
                Social Media Marketing.
              </p> */}
                {/* <p className="leading-relaxed">
                Our team has been instrumental in scaling numerous internet
                startups, helping them transform into industry leaders. With our
                growing presence, we&apos;re continuing to expand our impact
                across the U.S., bringing global expertise with a local edge.
              </p> */}

                <p className="leading-relaxed mb-2">
                  Founded in 2013, ShootOrder initially began as an App
                  development company. However, digital marketing has always
                  been an integral part of its operations. As more requests for
                  digital marketing started pouring in our CEO, Rajat Jain saw
                  the opportunity and made digital marketing as the face of the
                  company.
                </p>
                <p className="leading-relaxed mb-2">
                  Today, ShootOrder is among the top 3% of digital marketing
                  agencies in India, proudly recognized as a Google Premier
                  Partner. With a skilled team of dynamic and talented 50+
                  digital marketers (we believe in quality over quantity) and a
                  drive for perfection, we've consistently delivered top
                  results, introduced new market trends, and brought more
                  business to our clients.
                </p>
                {/* <p className="leading-relaxed mb-2">
                With Maganti IT’s stronghold in tech and our pulse on performance marketing, we’re helping businesses scale with clarity and confidence.
              </p>
              <p className="leading-relaxed mb-2">
                This collaboration is all about raising the standard and we’re here to lead that charge.
              </p> */}
              </div>

              <div className="grid grid-cols-3 gap-8 pt-6">
                <div className="space-y-2 border-1 border-gray-300 p-3 rounded-xl text-center">
                  <h3 className="text-3xl font-bold text-[#9a0c28]">#</h3>
                  <p className="text-gray-800 font-medium">Diverse Industry Portfolio</p>
                </div>
                <div className="space-y-2 border-1 border-gray-300 p-3 rounded-xl text-center">
                  <h3 className="text-3xl font-bold text-[#9a0c28]">;)</h3>
                  <p className="text-gray-800 font-medium">
                    Innovation <br/>& Creativity
                  </p>
                  {/* <p>Developed proprietary marketing automation tools</p> */}
                </div>

                <div className="space-y-2 border-1 border-gray-300 p-3 rounded-xl text-center">
                  <h3 className="text-3xl font-bold text-[#9a0c28]">₹</h3>
                  <p className="text-gray-800 font-medium">Cost-Effective Solutions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
