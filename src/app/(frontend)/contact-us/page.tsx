import type { Metadata } from "next";
import ContactHero from '@/components/contact/ContactHero';
import WhyBookUs from '@/components/contact/WhyBookUs';
import ContactFormSection from '@/components/contact/ContactFormSection';
import ContactMap from '@/components/contact/ContactMap';

import { client } from '@/sanity/client';
import { defineQuery, type SanityDocument } from 'next-sanity';

const CONTACT_PAGE_QUERY = defineQuery(`*[_type == "contactPage"][0]`);

export async function generateMetadata(): Promise<Metadata> {
  const pageData = await client.fetch<SanityDocument>(CONTACT_PAGE_QUERY, {}, { next: { revalidate: 30 } });
  
  return {
    title: pageData?.seo?.metaTitle || "Contact Us – Get in Touch with PodiaXpert Foot Clinic",
    description: pageData?.seo?.metaDescription || "Contact PodiaXpert, Kolkata's advanced foot clinic. Reach out for queries about custom insoles, diabetic foot care, heel pain, plantar fasciitis or to book an appointment.",
    keywords: pageData?.seo?.metaTags || [
      "contact PodiaXpert",
      "foot clinic contact Kolkata",
      "podiatrist near me",
      "foot doctor contact number",
      "PodiaXpert Rajdanga",
      "foot clinic East Kolkata",
    ],
    alternates: {
      canonical: "https://www.podiaxpert.com/contact-us",
    },
  };
}

export default async function ContactPage() {
  const pageData = await client.fetch<SanityDocument>(CONTACT_PAGE_QUERY, {}, { next: { revalidate: 30 } });

  return (
    <main className="min-h-screen flex flex-col font-sans">
      <div className="flex-grow bg-white">
        <ContactHero data={pageData?.hero} />
        <ContactFormSection data={pageData?.contactInfo} />
        <WhyBookUs data={pageData?.whyBookUs} />
        <ContactMap />
      </div>
    </main>
  );
}
