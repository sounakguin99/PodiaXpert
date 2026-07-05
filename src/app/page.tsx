import type { Metadata } from "next";
import Hero from '@/components/home/Hero';
import TrustBanner from '@/components/home/TrustBanner';

export const metadata: Metadata = {
  title: "PodiaXpert – Advanced Foot Clinic, Custom Insoles & Mobility Solutions in Kolkata",
  description:
    "PodiaXpert is Kolkata's leading advanced foot clinic. Expert treatment for heel pain, plantar fasciitis, flat feet, diabetic foot care. Custom insoles, orthotics, footwear & gait analysis. Book your free consultation today.",
  keywords: [
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
import Services from '@/components/home/Services';
import About from '@/components/home/About';
import Doctors from '@/components/home/Doctors';
import Problems from '@/components/home/Problems';
import Testimonials from '@/components/home/Testimonials';

import FAQ from '@/components/home/FAQ';
import CTA from '@/components/home/CTA';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col font-sans">
      <div className="flex-grow">
        <Hero />
        <TrustBanner />
        <About />
        <Services />
        <Problems />
        <Doctors />
        <Testimonials />
        <FAQ />
        <CTA />
      </div>
    </main>
  );
}
