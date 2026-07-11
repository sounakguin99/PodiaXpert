import type { Metadata } from "next";
import DoctorsHero from '@/components/doctors/DoctorsHero';
import Doctors from '@/components/home/Doctors';
import { client } from '@/sanity/client';
import { defineQuery, type SanityDocument } from 'next-sanity';

const DOCTORS_PAGE_QUERY = defineQuery(`*[_type == "doctorsPage"][0]`);

export async function generateMetadata(): Promise<Metadata> {
  const pageData = await client.fetch<SanityDocument>(DOCTORS_PAGE_QUERY, {}, { next: { revalidate: 30 } });
  
  return {
    title: pageData?.seo?.metaTitle || "Our Doctors – Expert Podiatrists & Foot Specialists",
    description: pageData?.seo?.metaDescription || "Meet PodiaXpert's team of experienced podiatrists and foot specialists in Kolkata.",
    keywords: pageData?.seo?.metaTags || [
      "podiatrist Kolkata",
      "foot doctor Kolkata",
      "foot specialist near me",
      "best podiatrist Kolkata",
      "foot care doctor East Kolkata",
    ],
    alternates: {
      canonical: "https://www.podiaxpert.com/doctors",
    },
  };
}

export default async function DoctorsPage() {
  const pageData = await client.fetch<SanityDocument>(DOCTORS_PAGE_QUERY, {}, { next: { revalidate: 30 } });

  return (
    <main className="min-h-screen flex flex-col font-sans">
      <div className="flex-grow bg-slate-50">
        <DoctorsHero data={pageData?.hero} />
        {pageData?.doctorsSection ? (
          <Doctors hideHeader={true} data={pageData.doctorsSection} />
        ) : (
          <Doctors hideHeader={true} />
        )}
      </div>
    </main>
  );
}
