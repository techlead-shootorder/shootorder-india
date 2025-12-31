import React from "react";

const stats = [
  { value: "12+", label: "12+ Years of Expertise" },
  { value: "3%", label: "Among the top 3% Performance Marketing Agencies in India (Ranked by Google)" },
  { value: "</>", label: "Experts in Web Solutions", isIcon: true },
  { value: "50+", label: "Ongoing Projects" },
  { value: "60+", label: "60+ Strong Team" },
  { value: "95%", label: "95% Client Retention Rate" },
  { value: "#", label: "Diverse Industry Portfolio", isIcon: true },
  { value: ";)", label: "Innovation & Creativity: Developed proprietary marketing automation tools" },
  { value: "₹", label: "Cost-Effective Solutions", isIcon: true },
];

export default function WhyPartnerWithUs() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
          Why Partner with us
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-10 gap-x-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex items-center">
              <span
                className="text-primary font-extrabold text-4xl md:text-5xl mr-4"
                style={{ minWidth: 64, textAlign: 'right' }}
              >
                {stat.value}
              </span>
              <span className="text-gray-800 text-lg font-medium leading-snug">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
