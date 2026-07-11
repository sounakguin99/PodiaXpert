import type { Metadata } from "next";
import Hero from '@/components/home/Hero';
import TrustBanner from '@/components/home/TrustBanner';
import Services from '@/components/home/Services';
import About from '@/components/home/About';
import Doctors from '@/components/home/Doctors';
import Problems from '@/components/home/Problems';
import Testimonials from '@/components/home/Testimonials';
import FAQ from '@/components/home/FAQ';
import CTA from '@/components/home/CTA';
import { client } from '@/sanity/client';
import { defineQuery, type SanityDocument } from 'next-sanity';

const HOME_PAGE_QUERY = defineQuery(`*[_type == "homePage"][0]`);

export async function generateMetadata(): Promise<Metadata> {
  const homeData = await client.fetch<SanityDocument>(HOME_PAGE_QUERY, {}, { next: { revalidate: 30 } });
  
  return {
    title: homeData?.seo?.metaTitle || "PodiaXpert – Advanced Foot Clinic, Custom Insoles & Mobility Solutions in Kolkata",
    description: homeData?.seo?.metaDescription || "PodiaXpert is Kolkata's leading advanced foot clinic. Expert treatment for heel pain, plantar fasciitis, flat feet, diabetic foot care.",
    keywords: homeData?.seo?.metaTags || [
      "foot clinic Kolkata",
      "podiatrist Kolkata",
      "custom insoles Kolkata",
      "heel pain treatment Kolkata",
      "plantar fasciitis specialist",
      "flat feet treatment",
      "diabetic foot care Kolkata",
      "foot doctor near me",
      "custom footwear Kolkata",
      "gait analysis",
      "foot assessment",
      "PodiaXpert",
    ],
    alternates: {
      canonical: "https://www.podiaxpert.com",
    },
  };
}

export default async function Home() {
  const homeData = await client.fetch<SanityDocument>(HOME_PAGE_QUERY, {}, { next: { revalidate: 30 } });

  return (
    <main className="min-h-screen flex flex-col font-sans">
      <div className="flex-grow">
        {homeData?.hero && <Hero data={homeData.hero} />}
        {homeData?.trustBanner && <TrustBanner data={homeData.trustBanner} />}
        {(homeData?.about || homeData?.whyChoose) && <About data={homeData} />}
        {homeData?.servicesSection && <Services data={homeData.servicesSection} />}
        {homeData?.problemsSection && <Problems data={homeData.problemsSection} />}
        {homeData?.doctorsSection && <Doctors data={homeData.doctorsSection} />}
        {homeData?.testimonialsSection && <Testimonials data={homeData.testimonialsSection} />}
        {homeData?.faqSection && <FAQ data={homeData.faqSection} />}
        {homeData?.ctaSection && <CTA data={homeData.ctaSection} />}
      </div>
    </main>
  );
}
