import type { Metadata } from "next";
import BookingHero from "../../components/book/BookingHero";
import BookingContent from "../../components/book/BookingContent";
import ContactMap from "../../components/contact/ContactMap";

export const metadata: Metadata = {
  title: "Book an Appointment – Free Foot Consultation at PodiaXpert",
  description:
    "Book a free foot consultation at PodiaXpert, Kolkata's advanced foot clinic. Get expert care for heel pain, plantar fasciitis, flat feet, diabetic foot problems. Custom insoles & footwear solutions.",
  keywords: [
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
export default function BookPage() {
  return (
    <main className="min-h-screen flex flex-col font-sans">
      <div className="flex-grow bg-white">
        <BookingHero />
        <BookingContent />
        <ContactMap />
      </div>
    </main>
  );
}
