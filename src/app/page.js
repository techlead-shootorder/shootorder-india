"use client";
import { useEffect, useState, useRef, Suspense, lazy } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import useSmoothScroll from "@/utils/smooth-scroll";
import "keen-slider/keen-slider.min.css";

// Critical components - loaded immediately
import HeaderSkeleton from "@/components/Skeleton/HeaderSkeleton";
import HeroBannerSkeleton from "@/components/Skeleton/HeroBannerSkeleton";
import Banner from "@/components/Home/Banner/Banner";

// Lazy load components - Above the fold (high priority)
const AnimatedIntro = lazy(() => import("@/components/Home/Intro/AnimatedIntro"));
const AboutUs = lazy(() => import("@/components/Home/About/AboutUs"));

// Lazy load components - Below the fold (medium priority)
const ServiceTabs = lazy(() => import("../components/Home/ServiceTabs/ServiceTabs"));
const CompanyInfo = lazy(() => import("@/components/Home/CompanyInfo/CompanyInfo"));
const ServicePartnerSection = lazy(() => import("@/components/SeprateServicePage/ServicePartnerSection"));

// Lazy load components - Bottom sections (low priority)
const ClutchWidget = lazy(() => import("@/components/Home/CompanyInfo/ClutchWidget"));
const PipeDriveForm = lazy(() => import("@/components/Home/PipeDrive/PipeDriveForm"));
const ImageSection = lazy(() => import("@/components/Home/PipeDrive/ImageSection"));

// Lazy load components - Optional/Interactive (lowest priority)
const OurPartners = lazy(() => import("@/components/Home/Partners/OurPartners"));
const Hire = lazy(() => import("@/components/Home/Hire/Hire"));
const ServiceFlow = lazy(() => import("@/components/Home/ServiceFlow/ServiceFlow"));
const TalentForm = lazy(() => import("@/components/Home/TalentForm/TalentForm"));
const WhyTrustUs = lazy(() => import("@/components/Home/Partners/WhyTrustUs"));

// Fallback components for different loading states
const SkeletonLoader = () => (
  <div className="animate-pulse bg-gray-200 rounded-lg h-32 w-full"></div>
);

const MinimalLoader = () => (
  <div className="flex justify-center items-center h-20">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
  </div>
);

const SectionLoader = () => (
  <div className="animate-pulse space-y-4 p-6">
    <div className="h-4 bg-gray-200 rounded w-3/4"></div>
    <div className="h-4 bg-gray-200 rounded w-1/2"></div>
    <div className="h-32 bg-gray-200 rounded"></div>
  </div>
);

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [sectionsLoaded, setSectionsLoaded] = useState({
    intro: false,
    about: false,
    services: false,
    partners: false,
    forms: false
  });
  
  const timelineRef = useRef(null);
  const scrollTriggersRef = useRef([]);
  const isCleanedUpRef = useRef(false);
  const observerRef = useRef(null);

  // Use the smooth scroll hook
  useSmoothScroll();

  // Intersection Observer for lazy loading sections
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '200px', // Load 200px before the element comes into view
      threshold: 0.1
    };

    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = entry.target;
          const sectionName = target.getAttribute('data-section');
          
          if (sectionName && !sectionsLoaded[sectionName]) {
            setSectionsLoaded(prev => ({
              ...prev,
              [sectionName]: true
            }));
          }
        }
      });
    }, observerOptions);

    // Observe section markers
    const sectionMarkers = document.querySelectorAll('[data-section]');
    sectionMarkers.forEach(marker => {
      observerRef.current?.observe(marker);
    });

    return () => {
      observerRef.current?.disconnect();
    };
  }, [sectionsLoaded]);

  useEffect(() => {
    // Reset cleanup flag
    isCleanedUpRef.current = false;

    // Register ScrollTrigger plugin
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
    }

    let loadEventHandler;

    // Wait for everything to load before initializing animations
    const onPageLoad = () => {
      if (isCleanedUpRef.current) return;

      try {
        const loadTl = gsap.timeline({
          onComplete: () => {
            if (!isCleanedUpRef.current) {
              setIsLoaded(true);
              // Start loading above-the-fold content immediately
              setSectionsLoaded(prev => ({
                ...prev,
                intro: true,
                about: true
              }));
            }
          },
        });

        timelineRef.current = loadTl;

        loadTl.to(".page-loader", {
          opacity: 0,
          duration: 0.8,
          ease: "power2.inOut",
        });

        setupSectionAnimations();
      } catch (error) {
        console.error("Error in onPageLoad:", error);
        setIsLoaded(true);
      }
    };

    loadEventHandler = onPageLoad;

    if (typeof window !== "undefined") {
      if (document.readyState === "complete") {
        setTimeout(onPageLoad, 1000); // Reduced from 2000ms to 1000ms
      } else {
        window.addEventListener("load", () => {
          setTimeout(loadEventHandler, 1000);
        });
      }
    }

    // Clean up function
    return () => {
      isCleanedUpRef.current = true;

      if (typeof window !== "undefined" && loadEventHandler) {
        window.removeEventListener("load", loadEventHandler);
      }

      if (timelineRef.current) {
        timelineRef.current.kill();
        timelineRef.current = null;
      }

      scrollTriggersRef.current.forEach((trigger) => {
        if (trigger && trigger.kill) {
          trigger.kill();
        }
      });
      scrollTriggersRef.current = [];

      gsap.killTweensOf([
        ".page-loader",
        ".banner-background",
        ".banner-content",
        ".stat-bubble",
        ".animate-section",
        ".parallax-bg",
        ".reveal-text",
        "#partners-container",
        ".service-tab",
        ".reveal-image"
      ]);

      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger && trigger.kill) {
          trigger.kill();
        }
      });

      if (typeof window !== "undefined") {
        ScrollTrigger.refresh();
      }

      observerRef.current?.disconnect();
    };
  }, []);

  const setupSectionAnimations = () => {
    if (isCleanedUpRef.current) return;

    try {
      scrollTriggersRef.current.forEach((trigger) => {
        if (trigger && trigger.kill) {
          trigger.kill();
        }
      });
      scrollTriggersRef.current = [];

      // Banner parallax effect
      const bannerBgTrigger = ScrollTrigger.create({
        animation: gsap.to(".banner-background", {
          yPercent: 25,
          ease: "none",
        }),
        trigger: ".banner-section",
        start: "top top",
        end: "bottom top",
        scrub: 0.8,
      });
      scrollTriggersRef.current.push(bannerBgTrigger);

      const bannerContentTrigger = ScrollTrigger.create({
        animation: gsap.to(".banner-content", {
          yPercent: -15,
          ease: "none",
        }),
        trigger: ".banner-section",
        start: "top top",
        end: "bottom top",
        scrub: 0.8,
      });
      scrollTriggersRef.current.push(bannerContentTrigger);

      // Stat bubbles floating animation
      const bubbleAnimation = gsap.to(".stat-bubble", {
        y: "random(-12, 12)",
        x: "random(-8, 8)",
        rotation: "random(-3, 3)",
        duration: "random(3, 5)",
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        stagger: 0.3,
      });

      // Apply animations to each section
      const sections = document.querySelectorAll(".animate-section");
      sections.forEach((section, index) => {
        if (isCleanedUpRef.current) return;

        const isEven = index % 2 === 0;
        const direction = isEven ? 1 : -1;

        const sectionTrigger = ScrollTrigger.create({
          animation: gsap.fromTo(
            section,
            {
              y: 80,
              opacity: 0,
            },
            {
              y: 0,
              opacity: 1,
              duration: 1.2,
              ease: "power3.out",
            }
          ),
          trigger: section,
          start: "top bottom-=120",
          end: "top center",
          scrub: 1.2,
        });
        scrollTriggersRef.current.push(sectionTrigger);

        const backgrounds = section.querySelectorAll(".parallax-bg");
        backgrounds.forEach((bg) => {
          const bgTrigger = ScrollTrigger.create({
            animation: gsap.fromTo(
              bg,
              { y: 0 },
              {
                y: -30 * direction,
                ease: "power1.inOut",
              }
            ),
            trigger: section,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.2,
          });
          scrollTriggersRef.current.push(bgTrigger);
        });

        const textElements = section.querySelectorAll(".reveal-text");
        textElements.forEach((el, i) => {
          const textTrigger = ScrollTrigger.create({
            animation: gsap.fromTo(
              el,
              {
                y: 40,
                opacity: 0,
              },
              {
                y: 0,
                opacity: 1,
                duration: 1,
                delay: i * 0.12,
                ease: "power2.out",
              }
            ),
            trigger: section,
            start: "top bottom-=180",
            toggleActions: "play none none reverse",
          });
          scrollTriggersRef.current.push(textTrigger);
        });
      });

      // Rest of the animation setup...
      const partnersElement = document.querySelector("#partners-container");
      if (partnersElement) {
        const partnersTrigger = ScrollTrigger.create({
          animation: gsap.fromTo(
            "#partners-container",
            {
              y: 80,
              opacity: 0,
            },
            {
              y: 0,
              opacity: 1,
              duration: 1.2,
              ease: "power3.out",
            }
          ),
          trigger: "#partners-container",
          start: "top bottom-=120",
          toggleActions: "play none none reverse",
        });
        scrollTriggersRef.current.push(partnersTrigger);
      }

      const tabs = document.querySelectorAll(".service-tab");
      if (tabs.length > 0) {
        const tabsTrigger = ScrollTrigger.create({
          animation: gsap.fromTo(
            tabs,
            {
              scale: 0.85,
              opacity: 0,
            },
            {
              scale: 1,
              opacity: 1,
              duration: 0.7,
              stagger: 0.2,
              ease: "back.out(1.5)",
            }
          ),
          trigger: "#service-tabs-section",
          start: "top bottom-=120",
          toggleActions: "play none none reverse",
        });
        scrollTriggersRef.current.push(tabsTrigger);
      }

      const revealImages = document.querySelectorAll(".reveal-image");
      revealImages.forEach((img) => {
        if (isCleanedUpRef.current) return;

        const clipPath = gsap.utils.random([
          "circle(0% at 50% 50%)",
          "polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%)",
        ]);

        const imageTrigger = ScrollTrigger.create({
          animation: gsap.fromTo(
            img,
            {
              clipPath: clipPath,
              scale: 1.08,
            },
            {
              clipPath: "circle(100% at 50% 50%)",
              scale: 1,
              duration: 1.8,
              ease: "power3.inOut",
            }
          ),
          trigger: img,
          start: "top bottom-=120",
          toggleActions: "play none none none",
        });
        scrollTriggersRef.current.push(imageTrigger);
      });

    } catch (error) {
      console.error("Error in setupSectionAnimations:", error);
    }
  };

  return (
    <div className="smooth-scroll-container overflow-hidden">
      {/* Skeleton Preloader */}
      {!isLoaded && (
        <div className="page-loader fixed top-0 left-0 w-full h-full z-50">
          <HeaderSkeleton />
          <HeroBannerSkeleton />
        </div>
      )}

      {/* Critical above-the-fold content */}
      <div className="banner-section relative overflow-hidden max-w-7xl mx-auto">
        <div className="banner-background w-full">
          <Banner />
        </div>
      </div>

      <div className="mx-auto">
        <div
          className="w-full"
          style={{
            backgroundImage: "url(/images/background/bg.png)",
            objectFit: "cover",
          }}
        >
          {/* Intro Section - High Priority */}
          <div data-section="intro">
            {sectionsLoaded.intro ? (
              <Suspense fallback={<SkeletonLoader />}>
                <AnimatedIntro />
              </Suspense>
            ) : (
              <div className="h-40">
                <SkeletonLoader />
              </div>
            )}
          </div>

          {/* About Section - High Priority */}
          <div data-section="about">
            {sectionsLoaded.about ? (
              <Suspense fallback={<SkeletonLoader />}>
                <div className="!max-w-7xl mx-auto">
                  <AboutUs />
                </div>
              </Suspense>
            ) : (
              <div className="!max-w-7xl mx-auto h-60">
                <SkeletonLoader />
              </div>
            )}
          </div>
        </div>

        {/* Company Section */}
        <div className="animate-section !max-w-7xl !mx-auto" id="company-section">
          <div className="parallax-bg absolute inset-0 -z-10 w-full">
            <div className="absolute top-1/4 left-1/4 w-1/4 h-1/4 bg-gradient-to-bl from-amber-500/10 to-transparent rounded-full blur-3xl"></div>
          </div>
        </div>

        {/* Service Tabs Section - Medium Priority */}
        <section className="!bg-gray-50">
          <div data-section="services" className="animate-section" id="service-tabs-section">
            {sectionsLoaded.services ? (
              <Suspense fallback={<SectionLoader />}>
                <ServiceTabs />
              </Suspense>
            ) : (
              <SectionLoader />
            )}
          </div>
        </section>

        {/* Hire Section */}
        <div className="animate-section !max-w-7xl mx-auto" id="hire-section">
          <div className="parallax-bg absolute inset-0 -z-10 w-full">
            <div className="absolute bottom-1/4 right-1/4 w-1/4 h-1/4 bg-gradient-to-tl from-green-500/10 to-transparent rounded-full blur-3xl"></div>
          </div>
        </div>

        {/* Partners Section - Medium Priority */}
        <div data-section="partners" className="!max-w-7xl mx-auto">
          {sectionsLoaded.partners ? (
            <Suspense fallback={<MinimalLoader />}>
              <ServicePartnerSection />
            </Suspense>
          ) : (
            <MinimalLoader />
          )}
        </div>

        {/* Clutch Widget - Low Priority */}
        <div className="bg-gray-50">
          <Suspense fallback={<MinimalLoader />}>
            <ClutchWidget />
          </Suspense>
        </div>

        {/* Form section - Low Priority */}
        <section className="py-10">
          <div data-section="forms" className="animate-section !max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="talent-form-section">
            <div className="parallax-bg absolute inset-0 -z-10 w-full">
              <div className="absolute top-1/3 left-1/3 w-1/3 h-1/3 bg-gradient-to-tr from-indigo-500/10 to-transparent rounded-full blur-3xl"></div>
            </div>

            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
              <div className="w-full h-full lg:w-1/2 order-1 lg:order-1">
                {sectionsLoaded.forms ? (
                  <Suspense fallback={<SkeletonLoader />}>
                    <ImageSection />
                  </Suspense>
                ) : (
                  <SkeletonLoader />
                )}
              </div>

              <div className="w-full lg:w-1/2 order-2 lg:order-2">
                <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg">
                  {sectionsLoaded.forms ? (
                    <Suspense fallback={<SkeletonLoader />}>
                      <PipeDriveForm />
                    </Suspense>
                  ) : (
                    <SkeletonLoader />
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}