import Navbar from '@/components/global/Navbar';
import Footer from '@/components/global/Footer';
import FootwearHero from '@/components/custom-footwear/FootwearHero';
import FootwearGenderSelection from '@/components/custom-footwear/FootwearGenderSelection';
import FootwearBenefits from '@/components/custom-footwear/FootwearBenefits';
import FootwearSteps from '@/components/custom-footwear/FootwearSteps';
import FootwearCatalog from '@/components/custom-footwear/FootwearCatalog';

export default function CustomFootwearPage() {
  return (
    <main className="min-h-screen flex flex-col font-sans">
      <Navbar />
      
      <div className="flex-grow bg-slate-50">
        <FootwearHero />
        <FootwearGenderSelection />
        <FootwearBenefits />
        <FootwearSteps />
        <FootwearCatalog />
      </div>

      <Footer />
    </main>
  );
}
