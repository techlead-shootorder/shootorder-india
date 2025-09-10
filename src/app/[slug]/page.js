// app/[slug]/page.js
import { notFound } from "next/navigation";
import { getServiceBySlug, getAllServiceSlugs } from "@/lib/services";
import { getCategoryByService } from "@/lib/serviceCategories";
import HeroService from '@/components/NewServiceComponent/HeroService'
import NewHeroService from '@/components/NewServiceComponent/NewHeroService'

import StatisticsService from '@/components/NewServiceComponent/StatisticsService'
// import ClientsService from '@/components/NewServiceComponent/ClientsService'
import OurPartners from '@/components/Home/Partners/OurPartners';
import DescriptionService from '@/components/NewServiceComponent/DescriptionService'
import ProcessCovered from '@/components/Services/ProcessCovered';
import Faqs from '@/components/NewServiceComponent/Faq'
import CaseStudyComponent from '@/components/CaseStudies/CaseStudyComponent'
import ServicePartnerSection from "@/components/SeprateServicePage/ServicePartnerSection";


export async function generateStaticParams() {
    const slugs = await getAllServiceSlugs();

    return slugs.map((slug) => ({
        slug: slug,
    }));
}

export async function generateMetadata({ params }) {
    const service = await getServiceBySlug(params.slug);

    if (!service) {
        return {
            title: "Service Not Found",
        };
    }

    // Get category information for better SEO
    const category = getCategoryByService(params.slug);
    const categoryName = category ? ` - ${category.name}` : '';

    return {
        title: `${service.title}${categoryName} | ShootOrder Services`,
        description: service.description,
        keywords: category ? `${service.title}, ${category.name}, ${category.services.join(', ')}` : service.title,
    };
}



export default async function ServicePage({ params }) {
    const service = await getServiceBySlug(params.slug);

    if (!service) {
        notFound();
    }

    // Get category information to enhance the page
    const category = getCategoryByService(params.slug);

    return (
        <div>
            {/* Pass the service slug to HeroService for dynamic category-based content */}
            {/* <HeroService
                heading={service.heading}
                subheading={service.subheading}
                imageUrl={service.imageUrl}
                serviceSlug={params.slug}  // Add this prop
            /> */}

            <NewHeroService
              heading={service.heading}
                subheading={service.subheading}
                imageUrl={service.imageUrl}
                serviceSlug={params.slug} 
            />

            {/* <OurPartners /> */}
            <ServicePartnerSection />

            <div className="bg-gray-50">
                <StatisticsService />
                {/* <ClientsService/> */}
            </div>

            <DescriptionService />

            <div className="bg-gray-50">
                <ProcessCovered services={service} />
            </div>

            <Faqs services={service} />

            <div className="bg-gray-50">
                <CaseStudyComponent service={params.slug} />
            </div>

            {/* Optional: Add related services section based on category */}
            {category && (
                <div className="bg-white py-16">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">
                                Other {category.name} Services
                            </h2>
                            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                                {category.description}
                            </p>
                        </div>
                        
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {category.services
                                .filter(serviceSlug => serviceSlug !== params.slug)
                                .slice(0, 6)
                                .map((relatedServiceSlug) => (
                                    <a
                                        key={relatedServiceSlug}
                                        href={`/${relatedServiceSlug}`}
                                        className="group bg-white border-2 border-gray-100 rounded-xl p-6 hover:border-blue-200 hover:shadow-lg transition-all duration-300"
                                    >
                                        <div className="flex items-center mb-3">
                                            <span className="text-2xl mr-3">{category.heroContent.icon}</span>
                                            <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors capitalize">
                                                {relatedServiceSlug.replace(/-/g, ' ')}
                                            </h3>
                                        </div>
                                        <p className="text-gray-600 text-sm">
                                            Professional {relatedServiceSlug.replace(/-/g, ' ')} services to help your business grow.
                                        </p>
                                        <div className="mt-4 text-blue-600 text-sm font-medium group-hover:text-blue-700">
                                            Learn more →
                                        </div>
                                    </a>
                                ))
                            }
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}