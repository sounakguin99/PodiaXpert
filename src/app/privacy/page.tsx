import Navbar from '@/components/global/Navbar';
import Footer from '@/components/global/Footer';

export default function PrivacyPage() {
  return (
    <main className="min-h-screen flex flex-col font-sans">
      <Navbar />
      
      <section className="bg-white pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-lg md:text-xl text-gray-600 font-medium max-w-2xl mx-auto leading-relaxed">
            How we protect and manage your personal data.
          </p>
        </div>
      </section>

      <div className="flex-grow bg-slate-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-white p-10 md:p-16 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100">
          <div className="prose prose-slate max-w-none text-gray-600 space-y-6">
            <p className="text-sm font-medium text-gray-400">Last updated: {new Date().toLocaleDateString()}</p>
            
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">1. Introduction</h2>
            <p className="leading-relaxed">Welcome to PodiaXpert. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website.</p>

            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">2. Data We Collect</h2>
            <p className="leading-relaxed">We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li className="leading-relaxed"><strong>Identity Data:</strong> includes first name, last name, username or similar identifier.</li>
              <li className="leading-relaxed"><strong>Contact Data:</strong> includes billing address, email address and telephone numbers.</li>
              <li className="leading-relaxed"><strong>Health Data:</strong> information you explicitly provide to us via forms regarding your symptoms for the purpose of booking an appointment.</li>
            </ul>

            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">3. How We Use Your Data</h2>
            <p className="leading-relaxed">We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li className="leading-relaxed">Where we need to perform the contract we are about to enter into or have entered into with you (e.g., booking a consultation).</li>
              <li className="leading-relaxed">Where it is necessary for our legitimate interests and your interests and fundamental rights do not override those interests.</li>
              <li className="leading-relaxed">Where we need to comply with a legal obligation.</li>
            </ul>

            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">4. Data Security</h2>
            <p className="leading-relaxed">We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorized way, altered, or disclosed.</p>

            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">5. Contact Us</h2>
            <p className="leading-relaxed">If you have any questions about this privacy policy or our privacy practices, please contact us at <strong className="text-gray-900">hello@podiaxpert.com</strong>.</p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
