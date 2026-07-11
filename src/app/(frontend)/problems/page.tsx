import type { Metadata } from "next";
import ProblemsHero from '@/components/problems/ProblemsHero';
import ProblemsGrid from '@/components/problems/ProblemsGrid';

import { client } from '@/sanity/client';
import { defineQuery, type SanityDocument } from 'next-sanity';

const PROBLEMS_PAGE_QUERY = defineQuery(`*[_type == "problemsPage"][0]`);

export async function generateMetadata(): Promise<Metadata> {
  const pageData = await client.fetch<SanityDocument>(PROBLEMS_PAGE_QUERY, {}, { next: { revalidate: 30 } });
  
  return {
    title: pageData?.seo?.metaTitle || "Foot Problems We Treat – Heel Pain, Plantar Fasciitis, Flat Feet & More",
    description: pageData?.seo?.metaDescription || "PodiaXpert treats all foot problems: heel pain, plantar fasciitis, flat feet, diabetic neuropathy, bunions, ankle pain, corns & calluses, ingrown toenails, metatarsalgia & achilles tendinitis in Kolkata.",
    keywords: pageData?.seo?.metaTags || [
      "heel pain treatment Kolkata",
      "plantar fasciitis treatment",
      "flat feet treatment Kolkata",
      "diabetic neuropathy foot",
      "bunion treatment Kolkata",
      "ankle pain specialist",
      "foot problems Kolkata",
      "corns and calluses treatment",
      "ingrown toenail treatment",
    ],
    alternates: {
      canonical: "https://www.podiaxpert.com/problems",
    },
  };
}

export default async function ProblemsPage() {
  const pageData = await client.fetch<SanityDocument>(PROBLEMS_PAGE_QUERY, {}, { next: { revalidate: 30 } });

  return (
    <main className="min-h-screen flex flex-col font-sans">
      <div className="flex-grow bg-slate-50">
        <ProblemsHero data={pageData?.hero} />
        <ProblemsGrid />
      </div>
    </main>
  );
}
