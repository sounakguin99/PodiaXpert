import Navbar from '@/components/global/Navbar';
import Footer from '@/components/global/Footer';
import DoctorsHero from '@/components/doctors/DoctorsHero';
import Doctors from '@/components/home/Doctors';

export default function DoctorsPage() {
  return (
    <main className="min-h-screen flex flex-col font-sans">
      <Navbar />
      
      <div className="flex-grow bg-slate-50">
        <DoctorsHero />
        <Doctors hideHeader={true} />
      </div>

      <Footer />
    </main>
  );
}
