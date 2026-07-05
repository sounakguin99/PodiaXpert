import type { Metadata } from "next";
import DoctorsHero from '@/components/doctors/DoctorsHero';
import Doctors from '@/components/home/Doctors';

export const metadata: Metadata = {
  title: "Our Doctors – Expert Podiatrists & Foot Specialists",
  description:
    "Meet PodiaXpert's team of experienced podiatrists and foot specialists in Kolkata. Our doctors are experts in heel pain, diabetic foot care, custom insoles, gait analysis and more.",
  keywords: [
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
export default function DoctorsPage() {
  return (
    <main className="min-h-screen flex flex-col font-sans">
      <div className="flex-grow bg-slate-50">
        <DoctorsHero />
        <Doctors hideHeader={true} />
      </div>
    </main>
  );
}
