import type { Metadata } from "next";
import ServicesHero from '@/components/services/ServicesHero';
import ServicesGrid from '@/components/services/ServicesGrid';
import ServicesCTA from '@/components/services/ServicesCTA';

import { client } from '@/sanity/client';
import { defineQuery, type SanityDocument } from 'next-sanity';

const SERVICES_PAGE_QUERY = defineQuery(`*[_type == "servicesPage"][0]`);

export async function generateMetadata(): Promise<Metadata> {
  const pageData = await client.fetch<SanityDocument>(SERVICES_PAGE_QUERY, {}, { next: { revalidate: 30 } });
  
  return {
    title: pageData?.seo?.metaTitle || "Our Services – Custom Insoles, Footwear, Diabetic Foot Care & More",
    description: pageData?.seo?.metaDescription || "Explore PodiaXpert's full range of podiatry services in Kolkata: custom insoles, custom footwear, diabetic foot care, computerised gait analysis & comprehensive foot assessment.",
    keywords: pageData?.seo?.metaTags || [
      "custom insoles Kolkata",
      "custom footwear Kolkata",
      "diabetic foot care",
      "gait analysis Kolkata",
      "foot assessment",
      "podiatry services Kolkata",
      "orthotics Kolkata",
    ],
    alternates: {
      canonical: "https://www.podiaxpert.com/services",
    },
  };
}

export default async function ServicesPage() {
  const pageData = await client.fetch<SanityDocument>(SERVICES_PAGE_QUERY, {}, { next: { revalidate: 30 } });

  return (
    <main className="min-h-screen flex flex-col font-sans">
      <div className="flex-grow bg-slate-50">
        <ServicesHero data={pageData?.hero} />
        <ServicesGrid />
        <ServicesCTA />
      </div>
    </main>
  );
}
