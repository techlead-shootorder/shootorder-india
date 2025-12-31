import React, { useEffect, useRef, useState } from "react";

const stats = [
  { value: 12, suffix: "+", label: "12+ Years of Expertise" },
  { value: 3, suffix: "%", label: "Among the top 3% Performance Marketing Agencies in India (Ranked by Google)" },
  { value: "</>", label: "Experts in Web Solutions", isIcon: true },
  { value: 50, suffix: "+", label: "Ongoing Projects" },
  { value: 60, suffix: "+", label: "60+ Strong Team" },
  { value: 95, suffix: "%", label: "95% Client Retention Rate" },
  { value: "#", label: "Diverse Industry Portfolio", isIcon: true },
  { value: ";)", label: "Innovation & Creativity: Developed proprietary marketing automation tools" },
  { value: "₹", label: "Cost-Effective Solutions", isIcon: true },
];

export default function WhyPartnerWithUs() {
  const sectionRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [counters, setCounters] = useState(stats.map((s) => (typeof s.value === 'number' ? 0 : s.value)));

  useEffect(() => {
    const handleScroll = (entries) => {
      if (entries[0].isIntersecting && !hasAnimated) {
        setHasAnimated(true);
      }
    };
    const observer = new window.IntersectionObserver(handleScroll, {
      threshold: 0.3,
    });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated) return;
    // Animate only number stats
    stats.forEach((stat, idx) => {
      if (typeof stat.value === 'number') {
        let start = 0;
        const end = stat.value;
        const duration = 1200;
        const stepTime = 20;
        let startTime = null;
        function animateCounter(ts) {
          if (!startTime) startTime = ts;
          const progress = Math.min((ts - startTime) / duration, 1);
          const current = Math.floor(progress * (end - start) + start);
          setCounters((prev) => {
            const updated = [...prev];
            updated[idx] = current;
            return updated;
          });
          if (progress < 1) {
            requestAnimationFrame(animateCounter);
          } else {
            setCounters((prev) => {
              const updated = [...prev];
              updated[idx] = end;
              return updated;
            });
          }
        }
        requestAnimationFrame(animateCounter);
      }
    });
  }, [hasAnimated]);

  return (
    <section id="why-partner" ref={sectionRef} className="py-16 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
          Why Partner with us
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-10 gap-x-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center justify-center text-center h-full">
              <span
                className="text-primary font-extrabold text-4xl md:text-5xl mb-2"
                style={{ minWidth: 64 }}
              >
                {stat.isIcon || typeof stat.value !== 'number'
                  ? stat.value
                  : `${counters[idx]}${stat.suffix || ''}`}
              </span>
              <span className="text-gray-800 text-lg font-medium leading-snug max-w-xs">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
