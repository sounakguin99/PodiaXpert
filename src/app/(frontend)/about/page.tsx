import type { Metadata } from "next";
import AboutHero from '@/components/about/AboutHero';

import OurStory from '@/components/about/OurStory';
import Expertise from '@/components/about/Expertise';
import Doctors from '@/components/home/Doctors';
import { client } from '@/sanity/client';
import { defineQuery, type SanityDocument } from 'next-sanity';

const ABOUT_PAGE_QUERY = defineQuery(`*[_type == "aboutPage"][0]`);

export async function generateMetadata(): Promise<Metadata> {
  const pageData = await client.fetch<SanityDocument>(ABOUT_PAGE_QUERY, {}, { next: { revalidate: 30 } });
  
  return {
    title: pageData?.seo?.metaTitle || "About Us – PodiaXpert Advanced Foot Clinic Kolkata",
    description: pageData?.seo?.metaDescription || "Learn about PodiaXpert, Kolkata's advanced foot clinic. Our experienced podiatrists deliver personalised care for heel pain, plantar fasciitis, diabetic foot problems, custom insoles and mobility solutions.",
    keywords: pageData?.seo?.metaTags || [
      "about PodiaXpert",
      "foot clinic Kolkata",
      "podiatrist team Kolkata",
      "foot specialist Kolkata",
      "podiatry clinic East Kolkata",
      "foot care experts",
    ],
    alternates: {
      canonical: "https://www.podiaxpert.com/about",
    },
  };
}

export default function AboutPage() {
  return (
    <main className="min-h-screen flex flex-col font-sans">
      <div className="flex-grow">
        <AboutHero />
        <OurStory />
        <Expertise />
        <Doctors />
      </div>
    </main>
  );
}
