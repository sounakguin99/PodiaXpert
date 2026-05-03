import Navbar from '@/components/global/Navbar';
import Footer from '@/components/global/Footer';
import Hero from '@/components/home/Hero';
import TrustBanner from '@/components/home/TrustBanner';
import Services from '@/components/home/Services';
import About from '@/components/home/About';
import Doctors from '@/components/home/Doctors';
import Problems from '@/components/home/Problems';
import Testimonials from '@/components/home/Testimonials';
import CTA from '@/components/home/CTA';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col font-sans">
      <Navbar />
      
      <div className="flex-grow">
        <Hero />
        <TrustBanner />
        <Services />
        <About />
        <Doctors />
        <Problems />
        <Testimonials />
        <CTA />
      </div>

      <Footer />
    </main>
  );
}
