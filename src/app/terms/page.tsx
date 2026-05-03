import Navbar from '@/components/global/Navbar';
import Footer from '@/components/global/Footer';

export default function TermsPage() {
  return (
    <main className="min-h-screen flex flex-col font-sans">
      <Navbar />
      
      <section className="bg-white pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
            Terms of Service
          </h1>
          <p className="text-lg md:text-xl text-gray-600 font-medium max-w-2xl mx-auto leading-relaxed">
            Please read these terms carefully before using our services.
          </p>
        </div>
      </section>

      <div className="flex-grow bg-slate-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-white p-10 md:p-16 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100">
          <div className="prose prose-slate max-w-none text-gray-600 space-y-6">
            <p className="text-sm font-medium text-gray-400">Last updated: {new Date().toLocaleDateString()}</p>
            
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">1. Agreement to Terms</h2>
            <p className="leading-relaxed">These Terms of Service constitute a legally binding agreement made between you and PodiaXpert concerning your access to and use of our website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto.</p>

            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">2. Medical Disclaimer</h2>
            <p className="leading-relaxed">The information provided on the PodiaXpert website is for general informational purposes only and is not intended as a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.</p>

            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">3. Appointments and Cancellations</h2>
            <p className="leading-relaxed">When you book an appointment through our website, you agree to provide accurate and complete information. If you need to cancel or reschedule your appointment, please contact us at least 24 hours in advance.</p>

            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">4. Intellectual Property</h2>
            <p className="leading-relaxed">Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the "Content") and the trademarks, service marks, and logos contained therein are owned or controlled by us or licensed to us.</p>

            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">5. Modifications and Interruptions</h2>
            <p className="leading-relaxed">We reserve the right to change, modify, or remove the contents of the Site at any time or for any reason at our sole discretion without notice. However, we have no obligation to update any information on our Site.</p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
