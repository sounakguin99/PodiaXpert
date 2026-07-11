"use client";

import {
  Calendar,
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  Mail,
  CheckCircle2,
} from "lucide-react";
import { useState } from "react";

export default function BookingContent({ data }: { data?: any }) {
  const contactInfo = data?.contactInfo || {};
  const whyBookUs = data?.whyBookUs || {};
  const bottomBanner = data?.bottomBanner || {};

  const location = contactInfo.location || "Block BA47, 1929, Rajdanga Main Road, Sarat Park, Naskarhat, East Kolkata Twp, Kolkata, West Bengal 700107";
  const workingHours = contactInfo.workingHours || "Mon - Sat: 11:00 AM - 7:00 PM \nSunday: Closed (by prior appointment)";
  const emailAddress = contactInfo.emailAddress || "support@podiaxpert.com";
  const phone = contactInfo.phone || "+919230374058";
  const whatsapp = contactInfo.whatsapp || "+919230374058";
  
  const phoneClean = phone.replace(/[^0-9+]/g, '');
  const whatsappClean = whatsapp.replace(/[^0-9]/g, '');

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    service: "",
    symptoms: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, source: "Dedicated Booking Page" }),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", phone: "", email: "", date: "", service: "", symptoms: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  const features = whyBookUs.features || [
    {
      title: "Expert Foot & Mobility Assessment",
      desc: "A thorough clinical examination of your lower limbs to diagnose the root cause of discomfort.",
      icon: "🩺",
    },
    {
      title: "Computerised Gait Analysis",
      desc: "Precise walking posture and force-plate pressure mapping to detect biomechanical imbalances.",
      icon: "🏃‍♂️",
    },
    {
      title: "Custom Insoles & Orthotics",
      desc: "Individually 3D-designed and crafted orthotics tailored to your specific feet shape.",
      icon: "👟",
    },
    {
      title: "Custom Footwear Solutions",
      desc: "Comfortable, medically supportive shoes designed to reduce joint strain and friction.",
      icon: "👡",
    },
    {
      title: "Personalised Treatment Plans",
      desc: "Custom rehabilitation, stretches, and care routines optimized for your daily lifestyle.",
      icon: "📝",
    },
    {
      title: "Patient-Centred Care",
      desc: "A warm, patient-first environment focused on your comfort and long-term recovery.",
      icon: "❤️",
    },
  ];

  return (
    <>
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-10">
            {/* LEFT SIDE: Clinic Info and Support Cards */}
            <div className="w-full lg:w-[40%] flex flex-col gap-6 order-2 lg:order-1">
              {/* Clinic Details Card */}
              <div className="bg-white rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 flex-grow flex flex-col justify-center">
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  Clinic Details
                </h3>
                <div className="space-y-6">
                  <div className="flex gap-4 items-start text-left">
                    <MapPin className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 text-sm">
                        Our Location
                      </h4>
                      <p className="text-gray-600 text-sm leading-relaxed mt-1">
                        {location}
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start text-left">
                    <Clock className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 text-sm">
                        Working Hours
                      </h4>
                      <p className="text-gray-600 text-sm leading-relaxed mt-1 whitespace-pre-line">
                        {workingHours}
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start text-left">
                    <Mail className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 text-sm">
                        Email Address
                      </h4>
                      <p className="text-gray-600 text-sm leading-relaxed mt-1">
                        {emailAddress}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Need Immediate Help Card */}
              <div className="bg-[#111827] rounded-2xl p-8 text-white shadow-xl">
                <h3 className="text-xl font-bold mb-2">
                  Need Immediate Assistance?
                </h3>
                <p className="text-gray-400 text-sm mb-6">
                  Skip the form and contact us directly.
                </p>

                <div className="space-y-4">
                  <a
                    href={`tel:${phoneClean}`}
                    className="w-full bg-white text-gray-900 font-bold py-3.5 rounded-xl flex items-center justify-center gap-2 hover:bg-gray-100 transition shadow-sm border border-gray-200"
                  >
                    <Phone className="w-5 h-5" /> Call Now
                  </a>
                  <a
                    href={`https://wa.me/${whatsappClean}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-[#25D366] text-white font-bold py-3.5 rounded-xl flex items-center justify-center gap-2 hover:bg-[#20b858] transition shadow-sm"
                  >
                    <svg
                      className="w-5 h-5 fill-current"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.625 1.451 5.437.002 9.861-4.416 9.863-9.848.001-2.63-1.019-5.101-2.875-6.958-1.857-1.858-4.331-2.88-6.957-2.882-5.442 0-9.866 4.418-9.868 9.851-.001 1.882.475 3.43 1.416 4.861L1.68 22.3l4.967-1.301zM17.486 15c-.287-.144-1.695-.837-1.957-.933-.263-.096-.454-.144-.645.144-.191.288-.741.933-.908 1.124-.167.192-.334.216-.621.072-2.31-1.013-3.864-2.264-5.127-4.434-.287-.492.287-.457.82-1.52.096-.192.048-.361-.024-.505-.072-.144-.645-1.554-.885-2.13-.234-.56-.472-.482-.645-.491-.167-.008-.358-.01-.55-.01s-.502.072-.765.361c-.263.288-1.004.981-1.004 2.39s1.028 2.766 1.171 2.959c.143.192 2.025 3.093 4.906 4.335.685.296 1.22.473 1.637.605.69.219 1.319.188 1.815.114.553-.083 1.695-.693 1.933-1.361.238-.668.238-1.241.167-1.36-.072-.12-.263-.191-.55-.335z" />
                    </svg>{" "}
                    Book via WhatsApp
                  </a>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE: Form */}
            <div className="w-full lg:w-[60%] order-1 lg:order-2">
              <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border-t-4 border-t-red-600 overflow-hidden h-full">
                <div className="p-8 md:p-10 h-full">
                  <div className="flex items-center gap-3 mb-8">
                    <Calendar className="w-7 h-7 text-red-600" />
                    <h2 className="text-2xl font-bold text-gray-900">
                      Appointment Form
                    </h2>
                  </div>

                  {status === "success" ? (
                    <div className="bg-green-50 text-green-800 p-8 rounded-xl border border-green-200 text-center flex flex-col items-center justify-center h-[70%]">
                      <CheckCircle2 className="w-16 h-16 text-green-500 mb-4" />
                      <h3 className="text-2xl font-bold mb-3">Request Sent!</h3>
                      <p className="text-lg">Thank you. We will contact you shortly to confirm your appointment.</p>
                      <button onClick={() => setStatus("idle")} className="mt-8 text-green-700 font-semibold hover:underline">Book another appointment</button>
                    </div>
                  ) : (
                    <form
                      className="space-y-6"
                      onSubmit={handleSubmit}
                    >
                      {status === "error" && (
                        <div className="bg-red-50 text-red-600 p-4 rounded-lg text-sm border border-red-100">
                          Failed to send request. Please try again later or contact us directly.
                        </div>
                      )}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({...formData, name: e.target.value})}
                            placeholder="John Doe"
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition bg-slate-50"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Mobile Number *
                          </label>
                          <input
                            type="tel"
                            required
                            value={formData.phone}
                            onChange={(e) => setFormData({...formData, phone: e.target.value})}
                            placeholder="+91 92303 74058"
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition bg-slate-50"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Email Address (Optional)
                          </label>
                          <input
                            type="email"
                            value={formData.email}
                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                            placeholder="john@example.com"
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition bg-slate-50"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Preferred Appointment Date *
                          </label>
                          <input
                            type="date"
                            required
                            value={formData.date}
                            onChange={(e) => setFormData({...formData, date: e.target.value})}
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition bg-slate-50 text-gray-600"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          What brings you to PodiaXpert? *
                        </label>
                        <select 
                          required
                          value={formData.service}
                          onChange={(e) => setFormData({...formData, service: e.target.value})}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition bg-slate-50 text-gray-600 appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23131313%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E')] bg-[length:12px_12px] bg-no-repeat bg-[position:right_1.2rem_center]">
                          <option value="">-- Choose an option --</option>
                          <option value="heel-pain">Heel Pain</option>
                          <option value="plantar-fasciitis">
                            Plantar Fasciitis
                          </option>
                          <option value="flat-feet">Flat Feet</option>
                          <option value="diabetic-foot">
                            Diabetic Foot Problems
                          </option>
                          <option value="corns-calluses">Corns & Calluses</option>
                          <option value="ankle-pain">Ankle Pain</option>
                          <option value="achilles-tendinitis">
                            Achilles Tendinitis
                          </option>
                          <option value="metatarsalgia">Metatarsalgia</option>
                          <option value="custom-insoles">Custom Insoles</option>
                          <option value="custom-footwear">Custom Footwear</option>
                          <option value="general-foot-assessment">
                            General Foot Assessment
                          </option>
                          <option value="other">Other</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Describe Your Symptoms
                        </label>
                        <textarea
                          rows={4}
                          value={formData.symptoms}
                          onChange={(e) => setFormData({...formData, symptoms: e.target.value})}
                          placeholder="Tell us briefly about your pain or issue..."
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition bg-slate-50 resize-none"
                        ></textarea>
                      </div>

                      <button 
                        disabled={status === "loading"}
                        className="w-full bg-red-600 text-white font-bold text-lg py-4 rounded-xl hover:bg-red-700 transition shadow-md mt-4 disabled:opacity-70"
                      >
                        {status === "loading" ? "Sending..." : "Book Appointment"}
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dedicated "Why Book an Appointment with Us" Section */}
      <section className="py-20 bg-slate-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {whyBookUs.heading || "Why Book an Appointment with Us?"}
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              {whyBookUs.description || "We provide state-of-the-art foot diagnostics and customized orthotics designed to relieve your foot pain and restore natural mobility."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((item: any, idx: number) => (
              <div
                key={idx}
                className="bg-white rounded-3xl p-8 border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.02)] text-left hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-red-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 text-3xl">
                  {item.icon}
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors">
                  {item.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Banner */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-50 rounded-3xl p-8 md:p-12 border border-gray-100 text-center max-w-4xl mx-auto relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {bottomBanner.title || "Your Journey to Pain-Free Walking Starts Here"}
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                {bottomBanner.description || "At PodiaXpert, we are committed to helping you move comfortably and confidently with specialised foot care, custom insoles and mobility solutions."}
              </p>
              <p className="font-bold text-red-600 text-base">
                {bottomBanner.subtitle || "PodiaXpert – Advanced Foot Clinic, Custom Insoles & Mobility Solutions"}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
