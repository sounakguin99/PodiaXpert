import Navbar from '@/components/global/Navbar';
import Footer from '@/components/global/Footer';

export default function TermsPage() {
  return (
    <main className="min-h-screen flex flex-col font-sans">
      <Navbar />
      
      <section className="bg-white pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
            Terms & Conditions
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
            
            <p className="leading-relaxed">
              Welcome to PodiaXpert – Advanced Foot Clinic, Custom Insoles & Mobility Solutions ("PodiaXpert", "we", "our" or "us").
              These Terms & Conditions govern your use of our website, services, appointments and communications with us. By accessing this website or booking an appointment, you agree to these terms.
              If you do not agree with any part of these Terms, please refrain from using our website or services.
            </p>

            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">1. Website Usage</h2>
            <p className="leading-relaxed">
              The content available on this website is intended to provide general information about foot care, mobility solutions and services offered by PodiaXpert. You agree that:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>You will use this website only for lawful purposes.</li>
              <li>You will not attempt to disrupt, damage or interfere with the website or its security.</li>
              <li>You will not copy, reproduce or distribute website content without our written permission.</li>
            </ul>

            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">2. Medical Disclaimer</h2>
            <p className="leading-relaxed">
              The information provided on this website is for educational and informational purposes only. It is not intended to replace:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Professional medical advice</li>
              <li>Clinical examination</li>
              <li>Diagnosis</li>
              <li>Treatment by a qualified healthcare professional</li>
            </ul>
            <p className="leading-relaxed">
              Every patient is unique, and treatment outcomes may vary depending on the individual's medical condition, age, lifestyle and adherence to recommendations. If you are experiencing severe pain, infection, trauma or any medical emergency, please seek immediate medical attention.
            </p>

            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">3. Appointment Booking</h2>
            <p className="leading-relaxed">
              Appointments may be booked through Online appointment form, Telephone, WhatsApp, Email, or In-person visit. Appointment requests are subject to availability and confirmation by our team. PodiaXpert reserves the right to reschedule or cancel appointments due to unforeseen circumstances.
            </p>

            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">4. Cancellation & Rescheduling Policy</h2>
            <p className="leading-relaxed">
              We understand that plans can change. If you need to cancel or reschedule your appointment, please inform us as early as possible. Repeated no-shows or last-minute cancellations may affect future appointment availability. PodiaXpert reserves the right to implement cancellation policies or fees if necessary.
            </p>

            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">5. Patient Responsibilities</h2>
            <p className="leading-relaxed">
              To provide safe and effective care, patients are requested to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide accurate personal and medical information.</li>
              <li>Inform us of any existing medical conditions, medications, and allergies.</li>
              <li>Follow treatment advice and footwear recommendations.</li>
              <li>Attend follow-up appointments where necessary.</li>
              <li>Inform us if symptoms worsen or new symptoms develop.</li>
            </ul>
            <p className="leading-relaxed">Failure to provide complete or accurate information may affect the quality of care and treatment outcomes.</p>

            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">6. Custom Insoles & Orthotics</h2>
            <p className="leading-relaxed">
              Custom insoles and orthotic devices are designed based on Foot assessment, Computerised gait analysis, Clinical findings, and Individual patient requirements. Please note: Custom devices are personalised medical solutions, Adaptation periods may vary from person to person, Treatment outcomes cannot be guaranteed, and Follow-up consultations may be recommended to optimise fit and comfort.
            </p>

            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">7. Custom Footwear</h2>
            <p className="leading-relaxed">
              Custom footwear recommendations are based on individual foot conditions and clinical assessments. Patients are advised that: The suitability of footwear depends on clinical findings, Comfort and adaptation may vary, and Regular follow-up may be required in certain cases.
            </p>

            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">8. Intellectual Property</h2>
            <p className="leading-relaxed">
              All content available on this website, including but not limited to Text, Graphics, Logos, Images, Videos, Icons, Website design, and Educational content is the property of PodiaXpert unless otherwise stated. No content may be copied, reproduced, modified or distributed without prior written permission.
            </p>

            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">9. Third-Party Links</h2>
            <p className="leading-relaxed">
              Our website may contain links to third-party websites for informational purposes. PodiaXpert does not control or endorse these websites and is not responsible for Their content, Privacy practices, Accuracy of information, or Services offered. Users access third-party websites at their own discretion.
            </p>

            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">10. Limitation of Liability</h2>
            <p className="leading-relaxed">
              While we strive to provide accurate information and quality healthcare services, PodiaXpert shall not be held liable for Temporary website interruptions, Technical errors, Inaccuracies or omissions on the website, Loss arising from reliance on website content, or Treatment outcomes that vary due to individual patient circumstances. Nothing in these Terms excludes any rights available under applicable Indian laws.
            </p>

            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">11. Changes to These Terms</h2>
            <p className="leading-relaxed">
              We may update these Terms & Conditions from time to time. Any modifications will be posted on this page along with the revised effective date. Continued use of our website or services after such changes constitutes acceptance of the revised Terms.
            </p>

            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">12. Contact Us</h2>
            <p className="leading-relaxed">If you have any questions regarding these Terms & Conditions, please contact us.</p>
            <div className="bg-gray-50 p-6 rounded-xl mt-4">
              <p><strong>PodiaXpert – Advanced Foot Clinic, Custom Insoles & Mobility Solutions</strong></p>
              <p>📍 Kolkata, West Bengal</p>
              <p>📞 Phone: +91 9830098300</p>
              <p>📧 Email: hello@podiaxpert.com</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
