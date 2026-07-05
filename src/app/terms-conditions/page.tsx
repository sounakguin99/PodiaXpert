import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Read the terms and conditions for PodiaXpert's foot clinic services in Kolkata. Understand the rules and guidelines that apply when using our services.",
  alternates: {
    canonical: "https://www.podiaxpert.com/terms-conditions",
  },
};

export default function TermsPage() {
  return (
    <main className="min-h-screen flex flex-col font-sans">
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
              Welcome to <strong>PodiaXpert – Advanced Foot Clinic, Custom Insoles & Mobility Solutions</strong> ("PodiaXpert", "we", "our" or "us").
              These Terms & Conditions govern your use of our website, services, appointments and communications with us. By accessing this website or booking an appointment, you agree to these terms.
              If you do not agree with any part of these Terms, please refrain from using our website or services.
            </p>

            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">1. Website Usage</h2>
            <p className="leading-relaxed">
              The content available on this website is intended to provide general information about foot care, mobility solutions and services offered by PodiaXpert.
              You agree that:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>You will use this website only for lawful purposes.</li>
              <li>You will not attempt to disrupt, damage or interfere with the website or its security.</li>
              <li>You will not copy, reproduce or distribute website content without our written permission.</li>
            </ul>

            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">2. Medical Disclaimer</h2>
            <p className="leading-relaxed">
              The information provided on this website is for educational and informational purposes only.
              It is <strong>not</strong> intended to replace:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Professional medical advice</li>
              <li>Clinical examination</li>
              <li>Diagnosis</li>
              <li>Treatment by a qualified healthcare professional</li>
            </ul>
            <p className="leading-relaxed">
              Every patient is unique, and treatment outcomes may vary depending on the individual's medical condition, age, lifestyle and adherence to recommendations.
              If you are experiencing severe pain, infection, trauma or any medical emergency, please seek immediate medical attention.
            </p>

            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">3. Appointment Booking</h2>
            <p className="leading-relaxed">
              Appointments may be booked through:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Online appointment form</li>
              <li>Telephone</li>
              <li>WhatsApp</li>
              <li>Email</li>
              <li>In-person visit</li>
            </ul>
            <p className="leading-relaxed">
              Appointment requests are subject to availability and confirmation by our team.
              PodiaXpert reserves the right to reschedule or cancel appointments due to unforeseen circumstances.
            </p>

            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">4. Cancellation & Rescheduling Policy</h2>
            <p className="leading-relaxed">
              We understand that plans can change.
              If you need to cancel or reschedule your appointment, please inform us as early as possible.
              Repeated no-shows or last-minute cancellations may affect future appointment availability.
              PodiaXpert reserves the right to implement cancellation policies or fees if necessary.
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
              Custom insoles and orthotic devices are designed based on:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Foot assessment</li>
              <li>Computerised gait analysis</li>
              <li>Clinical findings</li>
              <li>Individual patient requirements</li>
            </ul>
            <p className="leading-relaxed">Please note:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Custom devices are personalised medical solutions.</li>
              <li>Adaptation periods may vary from person to person.</li>
              <li>Treatment outcomes cannot be guaranteed.</li>
              <li>Follow-up consultations may be recommended to optimise fit and comfort.</li>
            </ul>

            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">7. Custom Footwear</h2>
            <p className="leading-relaxed">
              Custom footwear recommendations are based on individual foot conditions and clinical assessments.
              Patients are advised that:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>The suitability of footwear depends on clinical findings.</li>
              <li>Comfort and adaptation may vary.</li>
              <li>Regular follow-up may be required in certain cases.</li>
            </ul>

            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">8. Intellectual Property</h2>
            <p className="leading-relaxed">
              All content available on this website, including but not limited to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Text</li>
              <li>Graphics</li>
              <li>Logos</li>
              <li>Images</li>
              <li>Videos</li>
              <li>Icons</li>
              <li>Website design</li>
              <li>Educational content</li>
            </ul>
            <p className="leading-relaxed">
              is the property of PodiaXpert unless otherwise stated.
              No content may be copied, reproduced, modified or distributed without prior written permission.
            </p>

            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">9. Third-Party Links</h2>
            <p className="leading-relaxed">
              Our website may contain links to third-party websites for informational purposes.
              PodiaXpert does not control or endorse these websites and is not responsible for:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Their content</li>
              <li>Privacy practices</li>
              <li>Accuracy of information</li>
              <li>Services offered</li>
            </ul>
            <p className="leading-relaxed">Users access third-party websites at their own discretion.</p>

            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">10. Limitation of Liability</h2>
            <p className="leading-relaxed">
              While we strive to provide accurate information and quality healthcare services, PodiaXpert shall not be held liable for:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Temporary website interruptions</li>
              <li>Technical errors</li>
              <li>Inaccuracies or omissions on the website</li>
              <li>Loss arising from reliance on website content</li>
              <li>Treatment outcomes that vary due to individual patient circumstances</li>
            </ul>
            <p className="leading-relaxed">Nothing in these Terms excludes any rights available under applicable Indian laws.</p>

            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">11. Changes to These Terms</h2>
            <p className="leading-relaxed">
              We may update these Terms & Conditions from time to time.
              Any modifications will be posted on this page along with the revised effective date.
              Continued use of our website or services after such changes constitutes acceptance of the revised Terms.
            </p>

            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">12. Contact Us</h2>
            <p className="leading-relaxed">If you have any questions regarding these Terms & Conditions, please contact us.</p>
            <div className="bg-gray-50 p-6 rounded-xl mt-4 space-y-2">
              <p><strong>PodiaXpert – Advanced Foot Clinic, Custom Insoles & Mobility Solutions</strong></p>
              <p>📍 Block BA47, 1929, Rajdanga Main Road, Sarat Park, Naskarhat, East Kolkata Twp, Kolkata, West Bengal 700107</p>
              <p>📞 Phone: +91 92303 74058 (Available for emergency calls)</p>
              <p>📧 Email: support@podiaxpert.com</p>
              <p>🌐 Website: www.podiaxpert.com</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
