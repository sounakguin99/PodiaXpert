import type { Metadata } from "next";
import ServicesHero from '@/components/services/ServicesHero';
import ServicesGrid from '@/components/services/ServicesGrid';
import ServicesCTA from '@/components/services/ServicesCTA';

export const metadata: Metadata = {
  title: "Our Services – Custom Insoles, Footwear, Diabetic Foot Care & More",
  description:
    "Explore PodiaXpert's full range of podiatry services in Kolkata: custom insoles, custom footwear, diabetic foot care, computerised gait analysis & comprehensive foot assessment.",
  keywords: [
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
export default function ServicesPage() {
  return (
    <main className="min-h-screen flex flex-col font-sans">
      <div className="flex-grow bg-slate-50">
        <ServicesHero />
        <ServicesGrid />
        <ServicesCTA />
      </div>
    </main>
  );
}
