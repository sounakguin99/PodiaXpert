import type { Metadata } from "next";
import BookingHero from "../../components/book/BookingHero";
import BookingContent from "../../components/book/BookingContent";
import ContactMap from "../../components/contact/ContactMap";

import { client } from '@/sanity/client';
import { defineQuery, type SanityDocument } from 'next-sanity';

const APPOINTMENT_PAGE_QUERY = defineQuery(`*[_type == "appointmentPage"][0]`);

export async function generateMetadata(): Promise<Metadata> {
  const pageData = await client.fetch<SanityDocument>(APPOINTMENT_PAGE_QUERY, {}, { next: { revalidate: 30 } });
  
  return {
    title: pageData?.seo?.metaTitle || "Book an Appointment – Free Foot Consultation at PodiaXpert",
    description: pageData?.seo?.metaDescription || "Book a free foot consultation at PodiaXpert, Kolkata's advanced foot clinic. Get expert care for heel pain, plantar fasciitis, flat feet, diabetic foot problems. Custom insoles & footwear solutions.",
    keywords: pageData?.seo?.metaTags || [
      "book appointment foot clinic Kolkata",
      "free foot consultation Kolkata",
      "podiatrist appointment",
      "heel pain consultation",
      "diabetic foot care appointment",
      "PodiaXpert book appointment",
      "foot doctor appointment Kolkata",
    ],
    alternates: {
      canonical: "https://www.podiaxpert.com/book-appointment",
    },
  };
}

export default async function BookPage() {
  const pageData = await client.fetch<SanityDocument>(APPOINTMENT_PAGE_QUERY, {}, { next: { revalidate: 30 } });

  return (
    <main className="min-h-screen flex flex-col font-sans">
      <div className="flex-grow bg-white">
        <BookingHero data={pageData?.hero} />
        <BookingContent data={pageData} />
        <ContactMap />
      </div>
    </main>
  );
}
