import type { Metadata } from "next";
import ContactHero from '@/components/contact/ContactHero';
import WhyBookUs from '@/components/contact/WhyBookUs';
import ContactFormSection from '@/components/contact/ContactFormSection';
import ContactMap from '@/components/contact/ContactMap';

export const metadata: Metadata = {
  title: "Contact Us – Get in Touch with PodiaXpert Foot Clinic",
  description:
    "Contact PodiaXpert, Kolkata's advanced foot clinic. Reach out for queries about custom insoles, diabetic foot care, heel pain, plantar fasciitis or to book an appointment. Call +91 92303 74058.",
  keywords: [
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
export default function ContactPage() {
  return (
    <main className="min-h-screen flex flex-col font-sans">
      <div className="flex-grow bg-white">
        <ContactHero />
        <ContactFormSection />
        <WhyBookUs />
        <ContactMap />
      </div>
    </main>
  );
}
