import Link from 'next/link';
import { notFound } from 'next/navigation';
import ServiceHeroSection from '@/components/SeprateServicePage/ServiceHeroSection';
import ServicePartnerSection from '@/components/SeprateServicePage/ServicePartnerSection';
import ServiceCategoriesSection from '@/components/SeprateServicePage/ServiceCategoriesSection';
import ServiceAboutSection from '@/components/SeprateServicePage/ServiceAboutSection';
import TestimonialsSection from '@/components/NewAboutUs/TestimonialsSection';
import StaticCaseStudiesComponent from '@/components/SeprateServicePage/StaticCaseStudiesComponent ';

const servicesData = {
  "digital-marketing": {
    title: "Digital Marketing",
    slug: "digital-marketing",
    h1: "Driving Growth",
    h2: "Building Connections",
    h3: "Delivering",
    redText: "Results",
    subheading: "We are a performance-driven digital marketing agency specializing in SEO, Paid Ads, and Data-led strategies that turn clicks into loyal customers.",
    banner_image: "/images/services/digital-marketing/digital-marketing-hero.png",
    description: "Grow your online presence with SEO, SEM, and social campaigns.",
  },
  "branding": {
    title: "Branding",
    slug: "branding",
     h1: "Shaping Identities",
    h2: "Building Trust",
    h3: "Creating",
    redText: "Legacy",
    subheading: " We are a strategy-led branding agency crafting unique identities, brand stories, and experiences that make businesses unforgettable.",
    banner_image: "/images/services/branding/branding-hero.png",
    description: "Build a powerful and lasting brand identity.",
  },
  "growth-hacking": {
    title: "Growth Hacking",
    slug: "growth-hacking",
    h1: "Designing Impact",
    h2: "Driving Action",
    h3: "Delivering",
    redText: "Growth",
    subheading: "We craft conversion-focused landing pages, meaningful on-site engagement, and strong reputation management strategies to fuel business results.",
    banner_image: "/images/services/growth-hacking/growth-hacking-hero.png",
    description: "Scale quickly with innovative growth strategies.",
  },
  "marketing-automation": {
    title: "Marketing Automation",
    slug: "marketing-automation",
    h1: "Data that Speaks",
    h2: "Insights that Drive",
    h3: "Decisions that",
    redText: "Win",
    subheading: "We turn complex data into smart dashboards and analytics that power informed, faster, and smarter marketing moves.",
    banner_image: "/images/services/marketing-automation/marketing-automation-hero.png",
    description: "Automate workflows and nurture leads effectively.",
  },
};

// Dynamic metadata generation
export async function generateMetadata({ params }) {
  const { slug } = params;
  const data = servicesData[slug];

  if (!data) {
    return {
      title: 'Service Not Found | ShootOrder',
      description: 'The requested service page could not be found.',
    };
  }

  return {
    title: `${data.title} Services | ShootOrder`,
    description: data.description,
  };
}

// Generate static params for all services (optional, for static generation)
export async function generateStaticParams() {
  return Object.keys(servicesData).map((slug) => ({
    slug,
  }));
}

export default function Page({ params }) {
  const { slug } = params;
  const data = servicesData[slug];

  // Use Next.js notFound() for proper 404 handling
  if (!data) {
    notFound();
  }

  return (
    <div>
      <ServiceHeroSection data={data} />
      
        <ServicePartnerSection />
     
      <div className='bg-gray-50'>
      <ServiceAboutSection data={data}/>
       </div>

      <ServiceCategoriesSection data={data} />

      <div className='bg-gray-50'>
      <TestimonialsSection/>
      </div>

      <StaticCaseStudiesComponent/>
    </div>
  );
}