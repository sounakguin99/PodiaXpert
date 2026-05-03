import Navbar from '@/components/global/Navbar';
import Footer from '@/components/global/Footer';
import ServicesHero from '@/components/services/ServicesHero';
import ServicesGrid from '@/components/services/ServicesGrid';
import ServicesCTA from '@/components/services/ServicesCTA';

export default function ServicesPage() {
  return (
    <main className="min-h-screen flex flex-col font-sans">
      <Navbar />
      
      <div className="flex-grow bg-slate-50">
        <ServicesHero />
        <ServicesGrid />
        <ServicesCTA />
      </div>

      <Footer />
    </main>
  );
}
