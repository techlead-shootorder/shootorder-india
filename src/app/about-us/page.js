
import FormulaSection from "@/components/about-us/FormulaSection";
import HomeBanner from "@/components/about-us/HomeBanner";
import TestimonialSection from "@/components/about-us/TestimonialSection";
import LeaderShipSection from "@/components/about-us/LeadShipSection";
import WhyChooseSection from "@/components/about-us/WhyChooseUsSection";
import PartnerCarousel from "@/components/Home/Partners/OurPartners";
import WhyTrustUs from "@/components/Home/Partners/WhyTrustUs";
import AboutDescription from "@/components/about-us/AboutDescription";
import React from "react";
import AboutUsHero from "@/components/NewAboutUs/HeroAbout";
import WhoWeAre from "@/components/NewAboutUs/WhoWeAre";
import OurCultureSection from "@/components/NewAboutUs/OurCultureSection";
import OurFoundersSection from "@/components/NewAboutUs/OurFoundersSection";
import TeamSliderSection from "@/components/NewAboutUs/TeamSliderSection";
import TeamShowcase from "@/components/NewAboutUs/TeamShowCase";

function page() {
  return (
    <>
      {/* <HomeBanner /> */}
      <AboutUsHero/>
      <WhoWeAre/>
      <OurCultureSection/>
      <OurFoundersSection/>
      <TeamSliderSection/>
      <TeamShowcase/>

      <AboutDescription/>
      <PartnerCarousel/>
      <TestimonialSection />
      {/* <LeaderShipSection/> */}
      <WhyTrustUs/>
      <WhyChooseSection />
      <FormulaSection/>
    </>
  );
}

export default page;
