import type { Metadata } from "next";
import AboutHero from '@/components/about/AboutHero';

export const metadata: Metadata = {
  title: "About Us – PodiaXpert Advanced Foot Clinic Kolkata",
  description:
    "Learn about PodiaXpert, Kolkata's advanced foot clinic. Our experienced podiatrists deliver personalised care for heel pain, plantar fasciitis, diabetic foot problems, custom insoles and mobility solutions.",
  keywords: [
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
import OurStory from '@/components/about/OurStory';
import Expertise from '@/components/about/Expertise';
import Doctors from '@/components/home/Doctors';

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
