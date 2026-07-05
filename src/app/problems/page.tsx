import type { Metadata } from "next";
import ProblemsHero from '../../components/problems/ProblemsHero';
import ProblemsGrid from '../../components/problems/ProblemsGrid';

export const metadata: Metadata = {
  title: "Foot Problems We Treat – Heel Pain, Plantar Fasciitis, Flat Feet & More",
  description:
    "PodiaXpert treats all foot problems: heel pain, plantar fasciitis, flat feet, diabetic neuropathy, bunions, ankle pain, corns & calluses, ingrown toenails, metatarsalgia & achilles tendinitis in Kolkata.",
  keywords: [
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
export default function ProblemsPage() {
  return (
    <main className="min-h-screen flex flex-col font-sans">
      <div className="flex-grow bg-slate-50">
        <ProblemsHero />
        <ProblemsGrid />
      </div>
    </main>
  );
}
