import Navbar from '../../components/global/Navbar';
import Footer from '../../components/global/Footer';
import ProblemsHero from '../../components/problems/ProblemsHero';
import ProblemsGrid from '../../components/problems/ProblemsGrid';

export default function ProblemsPage() {
  return (
    <main className="min-h-screen flex flex-col font-sans">
      <Navbar />
      
      <div className="flex-grow bg-slate-50">
        <ProblemsHero />
        <ProblemsGrid />
      </div>

      <Footer />
    </main>
  );
}
