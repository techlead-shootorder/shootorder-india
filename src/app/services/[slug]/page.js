import Link from "next/link";
import { notFound } from "next/navigation";
import ServiceHeroSection from "@/components/SeprateServicePage/ServiceHeroSection";
import ServicePartnerSection from "@/components/SeprateServicePage/ServicePartnerSection";
import ServiceCategoriesSection from "@/components/SeprateServicePage/ServiceCategoriesSection";
import ServiceAboutSection from "@/components/SeprateServicePage/ServiceAboutSection";
import TestimonialsSection from "@/components/NewAboutUs/TestimonialsSection";
import StaticCaseStudiesComponent from "@/components/SeprateServicePage/StaticCaseStudiesComponent ";
import servicesJsonData from "@/../data/services.json";

// Dynamic metadata generation
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const data = servicesJsonData.find((service) => service.slug === slug);

  if (!data) {
    return {
      title: "Service Not Found | ShootOrder",
      description: "The requested service page could not be found.",
    };
  }

  return {
    title: `${data.title} Services | ShootOrder`,
    description: data.description,
  };
}

// Generate static params for all services (optional, for static generation)
export async function generateStaticParams() {
  const services = require('@/../data/services.json'); // Import services.json
  return services.map((service) => ({
    slug: service.slug, // Return each slug
  }));
}

<<<<<<< Updated upstream
export default async function Page({ params }) {
  const { slug } = await params; // Await the params to resolve the Promise
  const data = servicesJsonData.find(service => service.slug === slug);
=======
export default function Page({ params }) {
  const { slug } = params;
  const data = servicesJsonData.find((service) => service.slug === slug);
>>>>>>> Stashed changes

  // Use Next.js notFound() for proper 404 handling
  if (!data) {
    notFound();
  }

  return (
    <div>
      <ServiceHeroSection data={data} />
<<<<<<< Updated upstream
      <ServicePartnerSection />
      <div className='bg-gray-50'>
        <ServiceAboutSection data={data} />
      </div>
      <ServiceCategoriesSection data={data} />
      <div className='bg-gray-50'>
        <TestimonialsSection />
      </div>
=======

      <ServicePartnerSection />

      <div className="bg-gray-50">
        <ServiceAboutSection data={data} />
      </div>

      <ServiceCategoriesSection data={data} />

      <div className="bg-gray-50">
        <TestimonialsSection />
      </div>

>>>>>>> Stashed changes
      <StaticCaseStudiesComponent />
    </div>
  );
}
