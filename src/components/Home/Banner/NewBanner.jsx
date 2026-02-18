"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { FiBriefcase, FiClock, FiUsers } from "react-icons/fi";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePathname } from "next/navigation";
import PopupModal from "@/components/Modal/PopupModal";

export default function NewBanner() {
  const bannerRef = useRef(null);
  const headingRef = useRef(null);
  const descriptionRef = useRef(null);
  const buttonRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);
  const pathname = usePathname();
  const [isMobile, setIsMobile] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // Detect mobile device
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    // Make sure GSAP plugins are registered
    if (typeof window !== "undefined") {
      gsap.registerPlugin(SplitText, ScrollTrigger);
    }

    // Create timeline for banner entrance animation
    const tl = gsap.timeline();
    let splitTextInstance;

    // Animate content from left
    tl.fromTo(
      contentRef.current,
      {
        x: isMobile ? -30 : -100,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: isMobile ? 0.8 : 1.2,
        ease: "power3.out",
      },
      0
    );

    // Simple text animation for all devices to prevent disappearing text
    if (headingRef.current) {
      tl.fromTo(
        headingRef.current,
        {
          y: 30,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
        },
        0.3
      );
    }

    // Animate description text
    tl.fromTo(
      descriptionRef.current,
      {
        y: isMobile ? 20 : 30,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
      },
      0.5
    );

    // Animate button
    tl.fromTo(
      buttonRef.current,
      {
        y: isMobile ? 15 : 30,
        opacity: 0,
        scale: 0.9,
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.6,
        ease: "back.out(1.7)",
      },
      0.7
    );

    // Animate images from right
    tl.fromTo(
      imageRef.current,
      {
        x: isMobile ? 30 : 100,
        opacity: 0,
        scale: 0.9,
      },
      {
        x: 0,
        opacity: 1,
        scale: 1,
        duration: isMobile ? 0.8 : 1.2,
        ease: "power3.out",
      },
      0.2
    );

    // Stats animation
    const stats = document.querySelectorAll(".new-banner-stat");
    if (stats.length > 0) {
      tl.fromTo(
        stats,
        {
          y: 20,
          opacity: 0,
          scale: 0.9,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "back.out(1.7)",
        },
        1
      );
    }

    // Scroll animations for parallax effect
    const scrollTriggers = [];

    if (!isMobile) {
      // Desktop parallax effects
      scrollTriggers.push(
        ScrollTrigger.create({
          animation: gsap.to(imageRef.current, {
            y: "15%",
            ease: "none",
          }),
          trigger: bannerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        })
      );

      scrollTriggers.push(
        ScrollTrigger.create({
          animation: gsap.to(contentRef.current, {
            y: "-10%",
            ease: "none",
          }),
          trigger: bannerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        })
      );
    }

    // Cleanup function
    return () => {
      if (tl) tl.kill();

      scrollTriggers.forEach((trigger) => {
        if (trigger) trigger.kill();
      });

      gsap.killTweensOf([
        contentRef.current,
        imageRef.current,
        headingRef.current,
        descriptionRef.current,
        buttonRef.current,
        stats,
      ]);

      if (splitTextInstance) {
        splitTextInstance.revert();
      }

      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger) trigger.kill();
      });
    };
  }, [pathname, isMobile]);

  const openPopup = (e) => {
    const ripple = document.createElement("div");
    const rect = e.target.getBoundingClientRect();
    ripple.className = "absolute animate-ripple rounded-full bg-gray-200";
    ripple.style.left = `${e.clientX - rect.left}px`;
    ripple.style.top = `${e.clientY - rect.top}px`;
    e.target.appendChild(ripple);

    setTimeout(() => ripple.remove(), 1000);
    setTimeout(() => setIsPopupOpen(true), 200);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <>
      <section
        ref={bannerRef}
        className="w-full relative overflow-hidden min-h-screen flex pt-25"
        style={{
          backgroundImage: "url(/~shootordernew/images/background/Shootorder_Herobanner.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center top 20%",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 w-full">
          <div className="grid grid-cols-12 gap-12 items-center w-full">
            {/* Empty column to align with logo position */}
            <div className="col-span-1"></div>

            {/* Content column */}
            <div
              ref={contentRef}
              className="col-span-9 space-y-6 lg:space-y-8 text-left"
            >
              {/* Badge */}
              {/* <div className="inline-flex items-center px-3 py-2 rounded-full text-xs lg:text-sm font-medium bg-gradient-to-r from-blue-600/10 to-purple-600/10 text-blue-700 border border-blue-200/50 backdrop-blur-sm">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-2 animate-pulse flex-shrink-0"></span>
                <span className="truncate max-w-[200px] sm:max-w-none">Top 3% Digital Marketing Agency</span>
              </div> */}

              {/* Main heading */}
              <h1
                ref={headingRef}
                className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-[1.1] text-gray-900 tracking-tight"
              >
                Awarded <span style={{ color: "#cd1f38" }}>#1</span>
                <br />
                <span style={{ color: "#cd1f38" }}>Digital Marketing</span>
                <br />
                Agency
              </h1>

              {/* Decorative Line */}
              <div className="w-24 h-1 bg-[#cd1f38] rounded-full"></div>

              {/* Description */}
              <p
                ref={descriptionRef}
                className="text-gray-600 text-lg lg:text-xl leading-relaxed max-w-2xl"
              >
                Elevate your brand with strategic <br />
                <span className="font-semibold text-gray-900">
                  SEO, Paid Media, Content, and Social
                </span>{" "}
                expertise.
              </p>

              {/* CTA Button */}
              <div ref={buttonRef}>
                <Button
                  className="group relative overflow-hidden text-white font-semibold px-8 py-6 text-lg rounded-full shadow-lg transition-all duration-300 hover:shadow-xl active:scale-95"
                  style={{ backgroundColor: "#cd1f38 !important" }}
                  onMouseEnter={(e) =>
                    (e.target.style.backgroundColor = "#cd1f38")
                  }
                  onMouseLeave={(e) =>
                    (e.target.style.backgroundColor = "#cd1f38")
                  }
                  onClick={openPopup}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Get Started Today
                    <svg
                      className="w-5 h-5 transition-transform group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </span>
                </Button>
              </div>

              {/* Stats */}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center text-white">
            <span className="text-sm font-medium mb-2">Scroll Down</span>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </section>

      {/* Popup Modal */}
      <PopupModal isOpen={isPopupOpen} onClose={closePopup} />
    </>
  );
}
