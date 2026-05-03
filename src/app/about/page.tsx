import Navbar from '@/components/global/Navbar';
import Footer from '@/components/global/Footer';
import AboutHero from '@/components/about/AboutHero';
import OurStory from '@/components/about/OurStory';
import Expertise from '@/components/about/Expertise';
import Doctors from '@/components/home/Doctors';

export default function AboutPage() {
  return (
    <main className="min-h-screen flex flex-col font-sans">
      <Navbar />
      
      <div className="flex-grow">
        <AboutHero />
        <OurStory />
        <Expertise />
        <Doctors />
      </div>

      <Footer />
    </main>
  );
}
