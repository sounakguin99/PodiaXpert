import Navbar from '../../components/global/Navbar';
import Footer from '../../components/global/Footer';
import BookingHero from '../../components/book/BookingHero';
import BookingContent from '../../components/book/BookingContent';

export default function BookPage() {
  return (
    <main className="min-h-screen flex flex-col font-sans">
      <Navbar />
      
      <div className="flex-grow bg-white">
        <BookingHero />
        <BookingContent />
      </div>

      <Footer />
    </main>
  );
}
