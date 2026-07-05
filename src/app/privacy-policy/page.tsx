import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Read PodiaXpert's privacy policy. Learn how we collect, use and protect your personal data when you use our foot clinic services in Kolkata.",
  alternates: {
    canonical: "https://www.podiaxpert.com/privacy-policy",
  },
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen flex flex-col font-sans">
      <section className="bg-white pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-lg md:text-xl text-gray-600 font-medium max-w-2xl mx-auto leading-relaxed">
            How we protect and manage your personal data at PodiaXpert.
          </p>
        </div>
      </section>

      <div className="flex-grow bg-slate-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-white p-10 md:p-16 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100">
          <div className="prose prose-slate max-w-none text-gray-600 space-y-6">
            <p className="text-sm font-medium text-gray-400">Last updated: {new Date().toLocaleDateString()}</p>
            
            <p className="leading-relaxed">
              At <strong>PodiaXpert – Advanced Foot Clinic, Custom Insoles & Mobility Solutions</strong>, we value your privacy and are committed to protecting your personal information.
              This Privacy Policy explains how we collect, use, store and protect information when you visit our website, book an appointment or interact with our clinic.
              By using our website or services, you agree to the practices described in this policy.
            </p>

            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">1. Information We Collect</h2>
            <p className="leading-relaxed">Depending on how you interact with us, we may collect the following information:</p>
            
            <h3 className="text-lg font-bold text-gray-800 mt-6 mb-2">Personal Information</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Full Name</li>
              <li>Mobile Number</li>
              <li>Email Address</li>
              <li>Age</li>
              <li>Gender</li>
              <li>Address</li>
            </ul>

            <h3 className="text-lg font-bold text-gray-800 mt-6 mb-2">Medical Information</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Medical history</li>
              <li>Existing health conditions</li>
              <li>Diabetes status</li>
              <li>Current medications</li>
              <li>Allergies</li>
              <li>Previous surgeries or injuries</li>
              <li>Symptoms related to foot or mobility problems</li>
            </ul>

            <h3 className="text-lg font-bold text-gray-800 mt-6 mb-2">Appointment Information</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Appointment date and time</li>
              <li>Treatment records</li>
              <li>Clinical notes</li>
              <li>Custom insole or footwear prescriptions</li>
            </ul>

            <h3 className="text-lg font-bold text-gray-800 mt-6 mb-2">Website Usage Information</h3>
            <p className="leading-relaxed">When you visit our website, we may automatically collect:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>IP address</li>
              <li>Browser type</li>
              <li>Device information</li>
              <li>Pages visited</li>
              <li>Date and time of access</li>
              <li>Cookies and analytics data</li>
            </ul>

            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">2. Why We Collect Your Information</h2>
            <p className="leading-relaxed">We collect information to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Schedule appointments</li>
              <li>Provide foot care services</li>
              <li>Maintain medical records</li>
              <li>Conduct foot assessments and gait analysis</li>
              <li>Design custom insoles or footwear</li>
              <li>Communicate regarding appointments</li>
              <li>Improve our services</li>
              <li>Comply with legal and regulatory requirements</li>
            </ul>
            <p>We collect only the information necessary to provide safe and effective healthcare services.</p>

            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">3. Medical Records & Confidentiality</h2>
            <p className="leading-relaxed">Your medical information is treated as strictly confidential.</p>
            <p className="leading-relaxed">We maintain patient records securely and restrict access only to authorised personnel involved in your care.</p>
            <p className="leading-relaxed">Your information will not be shared with third parties except:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>With your consent</li>
              <li>When required by law</li>
              <li>For medical emergencies</li>
              <li>When necessary to provide healthcare services</li>
            </ul>

            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">4. Cookies & Website Analytics</h2>
            <p className="leading-relaxed">Our website may use cookies and analytics tools to understand how visitors interact with our website.</p>
            <p className="leading-relaxed">Cookies help us:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Improve website performance</li>
              <li>Understand visitor behaviour</li>
              <li>Enhance user experience</li>
              <li>Analyse website traffic</li>
            </ul>
            <p className="leading-relaxed">You may disable cookies through your browser settings, although some website features may not function properly.</p>

            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">5. Data Security</h2>
            <p className="leading-relaxed">Protecting your information is extremely important to us.</p>
            <p className="leading-relaxed">We take reasonable technical and organisational measures to safeguard your information against:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Unauthorised access</li>
              <li>Misuse</li>
              <li>Loss</li>
              <li>Alteration</li>
              <li>Disclosure</li>
            </ul>
            <p className="leading-relaxed">While we strive to protect your data, no online system can guarantee absolute security.</p>

            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">6. Third-Party Services</h2>
            <p className="leading-relaxed">Our website may use trusted third-party services such as:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Website analytics tools</li>
              <li>Appointment booking platforms</li>
              <li>Email communication services</li>
              <li>Payment gateways (if applicable)</li>
            </ul>
            <p className="leading-relaxed">These service providers may have their own privacy policies, and we encourage you to review them separately.</p>

            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">7. Your Rights</h2>
            <p className="leading-relaxed">You may request to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Access your personal information</li>
              <li>Correct inaccurate information</li>
              <li>Update contact details</li>
              <li>Withdraw consent where applicable</li>
            </ul>
            <p className="leading-relaxed">Requests may be made by contacting us directly.</p>

            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">8. Children's Privacy</h2>
            <p className="leading-relaxed">Our services are not intended to collect personal information from children without parental or guardian consent.</p>
            <p className="leading-relaxed">If you believe that a child has provided personal information to us without appropriate consent, please contact us so that we can take necessary action.</p>

            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">9. Changes to This Privacy Policy</h2>
            <p className="leading-relaxed">We may update this Privacy Policy from time to time.</p>
            <p className="leading-relaxed">Changes will be published on this page along with the updated effective date. We encourage you to review this page periodically.</p>

            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">10. Contact Us</h2>
            <p className="leading-relaxed">If you have questions regarding this Privacy Policy or the way we handle your information, please contact us.</p>
            <div className="bg-gray-50 p-6 rounded-xl mt-4 space-y-2">
              <p><strong>PodiaXpert – Advanced Foot Clinic, Custom Insoles & Mobility Solutions</strong></p>
              <p>📍 Block BA47, 1929, Rajdanga Main Road, Sarat Park, Naskarhat, East Kolkata Twp, Kolkata, West Bengal 700107</p>
              <p>📞 Phone: +91 92303 74058 (Available for emergency calls)</p>
              <p>📧 Email: support@podiaxpert.com</p>
              <p>🌐 Website: www.podiaxpert.com</p>
            </div>
            <p className="mt-6 leading-relaxed font-semibold text-gray-800">
              Thank you for trusting PodiaXpert with your foot health and mobility needs.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
