"use client";

import { CheckCircle2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/sanity/image";
import { useState } from "react";

export default function Hero({ data }: { data: any }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    date: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, source: "Hero Section Form" }),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", phone: "", service: "", date: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <section className="relative pt-16 pb-16 overflow-hidden bg-slate-900 text-white min-h-[600px] flex items-center">
      {/* Background Pattern/Image with overlay */}
      <div className="absolute inset-0 z-0 opacity-90">
        <Image
          src={data?.backgroundImage ? urlFor(data.backgroundImage).url() : "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=2000"}
          alt="Clinic Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-slate-950/60" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Content (7 Cols) */}
          <div className="lg:col-span-7">
            <span className="inline-block bg-red-600/10 border border-red-500/30 text-red-400 font-semibold tracking-wider text-xs px-3 py-1.5 rounded-full mb-6 uppercase">
              {data?.tagline}
            </span>
            <h1 className="text-4xl font-bold leading-tight mb-6 text-white">
              {data?.heading?.replace(data?.highlightText, '')}
              <span className="text-red-500">{data?.highlightText}</span>
            </h1>
            <div className="text-slate-300 text-lg mb-8 max-w-2xl space-y-4 leading-relaxed whitespace-pre-line">
              <p>{data?.description}</p>
            </div>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 text-slate-200">
              {(data?.features || []).map((item: string, idx: number) => (
                <li key={idx} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0" />
                  <span className="font-semibold text-sm">{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/book-appointment"
                className="bg-red-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-red-700 transition shadow-lg text-center"
              >
                Book Appointment
              </Link>
              <Link
                href="/services"
                className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-xl font-bold hover:bg-white/20 transition shadow-sm text-center"
              >
                View All Services
              </Link>
            </div>
          </div>

          {/* Right Form Card (5 Cols) */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-md w-full mx-auto lg:ml-auto border border-gray-100 text-gray-900">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Book Your Appointment Today
              </h2>
              <p className="text-gray-500 text-sm mb-6">
                Fill out the form below and we'll get back to you shortly.
              </p>

              {status === "success" ? (
                <div className="bg-green-50 text-green-800 p-6 rounded-xl border border-green-200 text-center">
                  <CheckCircle2 className="w-12 h-12 text-green-500 mx-auto mb-3" />
                  <h3 className="text-lg font-bold mb-2">Request Sent!</h3>
                  <p className="text-sm">Thank you. We will contact you shortly to confirm your appointment.</p>
                  <button onClick={() => setStatus("idle")} className="mt-4 text-green-700 font-semibold text-sm hover:underline">Book another</button>
                </div>
              ) : (
                <form className="space-y-5" onSubmit={handleSubmit}>
                  {status === "error" && (
                    <div className="bg-red-50 text-red-600 p-3 rounded-lg text-sm border border-red-100">
                      Failed to send request. Please try again or call us.
                    </div>
                  )}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition bg-slate-50 text-gray-950 placeholder-gray-400"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 92303 74058"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition bg-slate-50 text-gray-950 placeholder-gray-400"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">
                      Select Service *
                    </label>
                    <select 
                      required
                      value={formData.service}
                      onChange={(e) => setFormData({...formData, service: e.target.value})}
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition bg-slate-50 text-gray-700"
                    >
                      <option value="">Choose an option...</option>
                      <option value="Heel Pain Treatment">Heel Pain Treatment</option>
                      <option value="Plantar Fasciitis">Plantar Fasciitis</option>
                      <option value="Diabetic Foot Care">Diabetic Foot Care</option>
                      <option value="Custom Insoles">Custom Insoles</option>
                      <option value="Custom Footwear">Custom Footwear</option>
                      <option value="Gait Analysis">Gait Analysis</option>
                      <option value="Other / General Checkup">Other / General Checkup</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">
                      Preferred Date *
                    </label>
                    <input
                      type="date"
                      required
                      value={formData.date}
                      onChange={(e) => setFormData({...formData, date: e.target.value})}
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition bg-slate-50 text-gray-600"
                    />
                  </div>

                  <button 
                    disabled={status === "loading"}
                    className="w-full bg-red-600 text-white font-bold py-3.5 rounded-xl hover:bg-red-700 transition shadow-md mt-2 disabled:opacity-70"
                  >
                    {status === "loading" ? "Sending..." : "Book Appointment"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
