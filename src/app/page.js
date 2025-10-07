"use client";
import { useEffect, useState, useRef, Suspense, lazy } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import useSmoothScroll from "@/utils/smooth-scroll";
import "keen-slider/keen-slider.min.css";

// Critical components - loaded immediately
import Banner from "@/components/Home/Banner/Banner";

// Lazy load components with preload hints
const AnimatedIntro = lazy(() => import("@/components/Home/Intro/AnimatedIntro"));
const AboutUs = lazy(() => import("@/components/Home/About/AboutUs"));
const ServiceTabs = lazy(() => import("../components/Home/ServiceTabs/ServiceTabs"));
const CompanyInfo = lazy(() => import("@/components/Home/CompanyInfo/CompanyInfo"));
const ServicePartnerSection = lazy(() => import("@/components/SeprateServicePage/ServicePartnerSection"));
const ClutchWidget = lazy(() => import("@/components/Home/CompanyInfo/ClutchWidget"));
const PipeDriveForm = lazy(() => import("@/components/Home/PipeDrive/PipeDriveForm"));
const ImageSection = lazy(() => import("@/components/Home/PipeDrive/ImageSection"));

// Optimized skeleton loaders
const SkeletonLoader = () => (
  <div className="animate-pulse bg-gray-200 rounded-lg h-32 w-full" />
);

const MinimalLoader = () => (
  <div className="flex justify-center items-center h-20">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600" />
  </div>
);

const SectionLoader = () => (
  <div className="animate-pulse space-y-4 p-6">
    <div className="h-4 bg-gray-200 rounded w-3/4" />
    <div className="h-4 bg-gray-200 rounded w-1/2" />
    <div className="h-32 bg-gray-200 rounded" />
  </div>
);

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [visibleSections, setVisibleSections] = useState({
    intro: false,
    about: false,
    services: false,
    partners: false,
    forms: false
  });
  
  const scrollTriggersRef = useRef([]);
  const observerRef = useRef(null);

  // Use the smooth scroll hook
  useSmoothScroll();

  // Quick initial load - Remove the artificial delay
  useEffect(() => {
    // Set loaded immediately on mount
    setIsLoaded(true);
    
    // Load above-the-fold content immediately
    setVisibleSections(prev => ({
      ...prev,
      intro: true,
      about: true
    }));

    // Register ScrollTrigger
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
    }

    // Setup animations after a small delay to not block rendering
    const timer = setTimeout(() => {
      setupSectionAnimations();
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  // Intersection Observer for progressive loading
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '300px', // Increased to load earlier
      threshold: 0.01 // Lower threshold for faster loading
    };

    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionName = entry.target.getAttribute('data-section');
          
          if (sectionName && !visibleSections[sectionName]) {
            setVisibleSections(prev => ({
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
  }, []);

  // Cleanup effect
  useEffect(() => {
    return () => {
      scrollTriggersRef.current.forEach((trigger) => {
        trigger?.kill?.();
      });
      scrollTriggersRef.current = [];

      gsap.killTweensOf("*");
      ScrollTrigger.getAll().forEach((trigger) => trigger?.kill?.());
      
      if (typeof window !== "undefined") {
        ScrollTrigger.refresh();
      }

      observerRef.current?.disconnect();
    };
  }, []);

  const setupSectionAnimations = () => {
    try {
      // Clear existing triggers
      scrollTriggersRef.current.forEach((trigger) => trigger?.kill?.());
      scrollTriggersRef.current = [];

      // Banner parallax effect - simplified
      const bannerBgTrigger = ScrollTrigger.create({
        animation: gsap.to(".banner-background", {
          yPercent: 25,
          ease: "none",
        }),
        trigger: ".banner-section",
        start: "top top",
        end: "bottom top",
        scrub: 1,
      });
      scrollTriggersRef.current.push(bannerBgTrigger);

      // Section animations - batched
      const sections = document.querySelectorAll(".animate-section");
      sections.forEach((section, index) => {
        const isEven = index % 2 === 0;
        const direction = isEven ? 1 : -1;

        const sectionTrigger = ScrollTrigger.create({
          animation: gsap.fromTo(
            section,
            { y: 60, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" }
          ),
          trigger: section,
          start: "top bottom-=100",
          once: true, // Only animate once
        });
        scrollTriggersRef.current.push(sectionTrigger);

        // Parallax backgrounds - simplified
        const backgrounds = section.querySelectorAll(".parallax-bg");
        backgrounds.forEach((bg) => {
          const bgTrigger = ScrollTrigger.create({
            animation: gsap.fromTo(
              bg,
              { y: 0 },
              { y: -30 * direction, ease: "none" }
            ),
            trigger: section,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.5,
          });
          scrollTriggersRef.current.push(bgTrigger);
        });
      });

      // Service tabs animation
      const tabs = document.querySelectorAll(".service-tab");
      if (tabs.length > 0) {
        const tabsTrigger = ScrollTrigger.create({
          animation: gsap.fromTo(
            tabs,
            { scale: 0.9, opacity: 0 },
            { scale: 1, opacity: 1, duration: 0.6, stagger: 0.1, ease: "power2.out" }
          ),
          trigger: "#service-tabs-section",
          start: "top bottom-=100",
          once: true,
        });
        scrollTriggersRef.current.push(tabsTrigger);
      }

    } catch (error) {
      console.error("Error in setupSectionAnimations:", error);
    }
  };

  return (
    <div className="smooth-scroll-container overflow-hidden">
      {/* Critical above-the-fold content - No loader delay */}
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
          {/* Intro Section - Loads immediately */}
          <div data-section="intro">
            <Suspense fallback={<SkeletonLoader />}>
              <AnimatedIntro />
            </Suspense>
          </div>

          {/* About Section - Loads immediately */}
          <div data-section="about">
            <Suspense fallback={<SkeletonLoader />}>
              <div className="!max-w-7xl mx-auto">
                <AboutUs />
              </div>
            </Suspense>
          </div>
        </div>

        {/* Company Section */}
        <div className="animate-section !max-w-7xl !mx-auto" id="company-section">
          <div className="parallax-bg absolute inset-0 -z-10 w-full">
            <div className="absolute top-1/4 left-1/4 w-1/4 h-1/4 bg-gradient-to-bl from-amber-500/10 to-transparent rounded-full blur-3xl" />
          </div>
        </div>

        {/* Service Tabs Section - Lazy loaded */}
        <section className="!bg-gray-50">
          <div data-section="services" className="animate-section" id="service-tabs-section">
            {visibleSections.services ? (
              <Suspense fallback={<SectionLoader />}>
                <ServiceTabs />
              </Suspense>
            ) : (
              <SectionLoader />
            )}
          </div>
        </section>

        {/* Partners Section - Lazy loaded */}
        <div data-section="partners" className="!max-w-7xl mx-auto">
          {visibleSections.partners ? (
            <Suspense fallback={<MinimalLoader />}>
              <ServicePartnerSection />
            </Suspense>
          ) : (
            <MinimalLoader />
          )}
        </div>

        {/* Clutch Widget - Lazy loaded */}
        <div className="bg-gray-50">
          <Suspense fallback={<MinimalLoader />}>
            <ClutchWidget />
          </Suspense>
        </div>

        {/* Form section - Lazy loaded */}
        <section className="py-10">
          <div data-section="forms" className="animate-section !max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="talent-form-section">
            <div className="parallax-bg absolute inset-0 -z-10 w-full">
              <div className="absolute top-1/3 left-1/3 w-1/3 h-1/3 bg-gradient-to-tr from-indigo-500/10 to-transparent rounded-full blur-3xl" />
            </div>

            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
              <div className="w-full h-full lg:w-1/2 order-1 lg:order-1">
                {visibleSections.forms ? (
                  <Suspense fallback={<SkeletonLoader />}>
                    <ImageSection />
                  </Suspense>
                ) : (
                  <SkeletonLoader />
                )}
              </div>

              <div className="w-full lg:w-1/2 order-2 lg:order-2">
                <div className="bg-white sm:p-8 rounded-lg shadow-lg">
                  {visibleSections.forms ? (
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