// src/app/services/page.jsx
import Link from "next/link";
import { getAllServices } from "@/lib/services";
import ServiceHero from "@/components/SeprateServicePage/StaticServicePage/ServiceHero";
import ServicePartner from "@/components/SeprateServicePage/StaticServicePage/ServicePartner";
import ServiceCategories from "@/components/SeprateServicePage/StaticServicePage/ServiceCategories";

export const metadata = {
  title: "All Services | ShootOrder",
  description: "Explore the full range of services offered by ShootOrder",
};

export default async function ServicesPage() {
  const services = await getAllServices();

  return (
    <div>
      <ServiceHero />
      <div className="bg-gray-50">
        <ServicePartner />
      </div>
      <ServiceCategories />
    </div>
  );
}
