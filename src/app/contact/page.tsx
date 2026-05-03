import Navbar from '@/components/global/Navbar';
import Footer from '@/components/global/Footer';
import ContactHero from '@/components/contact/ContactHero';
import ContactFormSection from '@/components/contact/ContactFormSection';
import ContactMap from '@/components/contact/ContactMap';

export default function ContactPage() {
  return (
    <main className="min-h-screen flex flex-col font-sans">
      <Navbar />
      
      <div className="flex-grow bg-slate-50">
        <ContactHero />
        <div className="bg-white">
          <ContactFormSection />
        </div>
        <ContactMap />
      </div>

      <Footer />
    </main>
  );
}
