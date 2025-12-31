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
import ReviewsService from '@/components/NewServiceComponent/ReviewsService'

import ProcessTimeline from '@/components/Services/ProcessTimeline';
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
    const { slug } = await params;
    const service = await getServiceBySlug(slug);

    if (!service) {
        return {
            title: "Service Not Found",
        };
    }

    // Get category information for better SEO
    const category = getCategoryByService(slug);
    const categoryName = category ? ` - ${category.name}` : '';

    return {
        title: `${service.title}${categoryName} | ShootOrder Services`,
        description: service.description,
        keywords: category ? `${service.title}, ${category.name}, ${category.services.join(', ')}` : service.title,
    };
}



export default async function ServicePage({ params }) {
    // Await params if it is a Promise (Next.js app router)
    const awaitedParams = typeof params.then === 'function' ? await params : params;
    const slug = awaitedParams.slug;
    const service = await getServiceBySlug(slug);

    if (!service) {
        notFound();
    }

    // Get category information to enhance the page
    const category = getCategoryByService(slug);

    return (
        <div>
            {/* Pass the service slug to HeroService for dynamic category-based content */}
            {/* <HeroService
                heading={service.heading}
                subheading={service.subheading}
                imageUrl={service.imageUrl}
                serviceSlug={slug}  // Add this prop
            /> */}

            <NewHeroService
                heading={service.heading}
                subheading={service.subheading}
                imageUrl={service.imageUrl} 
                serviceSlug={slug}
            />
            <div className="bg-gray-50">
                <ProcessTimeline 
                    features={service.features} 
                    bottomheading={service.bottomheading}
                    subheading={service.bottomsubheading}
                />
            </div>
            <StatisticsService />

         
            {/* <OurPartners /> */}
            <div className="bg-gray-50">
                 <ServicePartnerSection />
                {/* <ClientsService/> */}
            </div>

            {/* <DescriptionService service={service} /> */}

           

            <ReviewsService/>

            <Faqs services={service} />

            <div className="bg-gray-50">
                <CaseStudyComponent service={slug} />
            </div>

            {/* Optional: Add related services section based on category */}
            {category && (
                <div className="bg-white py-16">
                    <div className="!max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-[#9a0c28] mb-4">
                                Other {category.name} Services
                            </h2>
                            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                                {category.description}
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {category.services
                                .filter((serviceSlug) => serviceSlug !== slug)
                                .slice(0, 6)
                                .map((relatedServiceSlug) => (
                                    <a
                                        key={relatedServiceSlug}
                                        href={`/${relatedServiceSlug}`}
                                        className="group bg-white border-2 border-gray-100 rounded-xl p-6 hover:border-[#9a0c28]/30 hover:shadow-lg transition-all duration-300"
                                    >
                                        <div className="flex items-center mb-3">
                                            <span className="text-2xl">{category.heroContent.icon}</span>
                                            <h3 className="font-semibold text-gray-900 group-hover:text-[#9a0c28] transition-colors capitalize">
                                                {relatedServiceSlug.replace(/-/g, " ")}
                                            </h3>
                                        </div>
                                        <p className="text-gray-600 text-sm">
                                            Professional {relatedServiceSlug.replace(/-/g, " ")} services to help your business grow.
                                        </p>
                                        <div className="mt-4 text-[#9a0c28] text-sm font-medium group-hover:text-[#7a0a20]">
                                            Learn more →
                                        </div>
                                    </a>
                                ))}
                        </div>
                    </div>
                </div>

            )}
        </div>
    )
}