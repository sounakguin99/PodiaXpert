import Navbar from '@/components/global/Navbar';
import Footer from '@/components/global/Footer';
import InsolesHero from '@/components/custom-insoles/InsolesHero';
import InsolesSteps from '../../components/custom-insoles/InsolesSteps';
import InsolesBenefits from '../../components/custom-insoles/InsolesBenefits';
import InsolesComparison from '../../components/custom-insoles/InsolesComparison';
import InsolesTechnology from '@/components/custom-insoles/InsolesTechnology';
import InsolesFAQ from '@/components/custom-insoles/InsolesFAQ';

export default function CustomInsolesPage() {
  return (
    <main className="min-h-screen flex flex-col font-sans">
      <Navbar />
      
      <div className="flex-grow bg-slate-50">
        <InsolesHero />
        <InsolesSteps />
        <InsolesBenefits />
        <InsolesTechnology />
        <InsolesComparison />
        <InsolesFAQ />
      </div>

      <Footer />
    </main>
  );
}
