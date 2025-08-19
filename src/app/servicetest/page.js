import { notFound } from "next/navigation";
import { getServiceBySlug, getAllServiceSlugs } from "@/lib/services";
import HeroService from '@/components/NewServiceComponent/HeroService'
import StatisticsService from '@/components/NewServiceComponent/StatisticsService'
// import ClientsService from '@/components/NewServiceComponent/ClientsService'
import OurPartners from '@/components/Home/Partners/OurPartners';
import DescriptionService from '@/components/NewServiceComponent/DescriptionService'
import ProcessCovered from '@/components/Services/ProcessCovered';
import Faqs from '@/components/NewServiceComponent/Faq'
import CaseStudyComponent from '@/components/CaseStudies/CaseStudyComponent'


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

    return {
        title: `${service.title} | ShootOrder Services`,
        description: service.description,
    };
}



export default async function ServicePage({ params }) {
    const service = await getServiceBySlug(params.slug);

    if (!service) {
        notFound();
    }


    return (
        <div>
            <HeroService
                heading={service.heading}
                subheading={service.subheading}
                imageUrl={service.imageUrl}
            />
            <StatisticsService />
            {/* <ClientsService/> */}
            <OurPartners />
            <DescriptionService />
            <ProcessCovered services={service} />
            <Faqs />
            <CaseStudyComponent service={params.slug} />
        </div>
    )
}

