"use client";

import { CheckCircle2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative pt-16 pb-16 overflow-hidden bg-slate-900 text-white min-h-[600px] flex items-center">
      {/* Background Pattern/Image with overlay */}
      <div className="absolute inset-0 z-0 opacity-90">
        <Image
          src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=2000"
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
              PodiaXpert – Advanced Foot Clinic, Custom Insoles & Mobility
              Solutions
            </span>
            <h1 className="text-4xl font-bold leading-tight mb-6 text-white">
              Get Expert Foot Care, Custom Insoles & Mobility Solutions{" "}
              <span className="text-red-500">in Kolkata</span>
            </h1>
            <div className="text-slate-300 text-lg mb-8 max-w-2xl space-y-4 leading-relaxed">
              <p>
                Whether you're dealing with heel pain, plantar fasciitis, flat
                feet, diabetic foot concerns, ankle pain, or walking discomfort,
                PodiaXpert is here to help.
              </p>
              <p>
                Our specialists provide comprehensive foot assessments, custom
                insoles and footwear, and personalised treatment plans to help
                you move comfortably and confidently again.
              </p>
            </div>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 text-slate-200">
              {[
                "Foot Pain Treatment",
                "Custom Insoles",
                "Custom Footwear",
                "Gait Analysis",
                "Diabetic Foot Care",
              ].map((item, idx) => (
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

              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition bg-slate-50 text-gray-950 placeholder-gray-400"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="+91 92303 74058"
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition bg-slate-50 text-gray-950 placeholder-gray-400"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                    Select Service
                  </label>
                  <select className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition bg-slate-50 text-gray-700">
                    <option>Choose an option...</option>
                    <option>Heel Pain Treatment</option>
                    <option>Plantar Fasciitis</option>
                    <option>Diabetic Foot Care</option>
                    <option>Custom Insoles</option>
                    <option>Custom Footwear</option>
                    <option>Gait Analysis</option>
                    <option>Other / General Checkup</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition bg-slate-50 text-gray-600"
                  />
                </div>

                <button className="w-full bg-red-600 text-white font-bold py-3.5 rounded-xl hover:bg-red-700 transition shadow-md mt-2">
                  Book Appointment
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
