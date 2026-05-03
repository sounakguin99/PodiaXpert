"use client";

import { CheckCircle2 } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative pt-10 pb-10 overflow-hidden">
      {/* Background Pattern/Image */}
      <div className="absolute inset-0 z-0 opacity-80">
        <Image
          src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=2000"
          alt="Clinic Background"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <p className="text-black font-semibold tracking-wider text-sm mb-4 uppercase">
              Expert in Podiatry
            </p>
            <h1 className="text-4xl text-black md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Expert Foot Care
              <br />
              <span className="text-red-600">in Kolkata</span>
            </h1>
            <p className="text-black text-lg mb-8 max-w-lg">
              Relief from Heel Pain, Plantar Fasciitis & Foot Problems.
            </p>

            <ul className="space-y-4 mb-10 text-black">
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 " />
                <span className=" font-medium">
                  Advanced Diagnosis
                </span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 " />
                <span className=" font-medium">
                  Custom Insoles
                </span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 " />
                <span className=" font-medium">
                  Experienced Specialists
                </span>
              </li>
            </ul>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-red-600 text-white px-8 py-3.5 rounded-md font-medium hover:bg-red-700 transition shadow-lg text-center">
                Book Free Consultation
              </button>
              <button className="bg-white text-gray-900 border border-gray-200 px-8 py-3.5 rounded-md font-medium hover:bg-gray-50 transition shadow-sm text-center">
                View All Services
              </button>
            </div>
          </div>

          {/* Right Form Card */}
          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full mx-auto lg:ml-auto border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Request an Appointment
            </h2>
            <p className="text-gray-500 text-sm mb-6">
              Fill out the form below and we'll get back to you shortly.
            </p>

            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full px-4 py-2.5 rounded-md border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition bg-slate-50"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="+91 98765 43210"
                  className="w-full px-4 py-2.5 rounded-md border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition bg-slate-50"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Select Service
                </label>
                <select className="w-full px-4 py-2.5 rounded-md border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition bg-slate-50 text-gray-700">
                  <option>Choose an option...</option>
                  <option>Heel Pain Treatment</option>
                  <option>Plantar Fasciitis</option>
                  <option>Diabetic Foot Care</option>
                  <option>Other / General Checkup</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Preferred Date
                </label>
                <input
                  type="date"
                  className="w-full px-4 py-2.5 rounded-md border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition bg-slate-50 text-gray-700"
                />
              </div>

              <button className="w-full bg-emerald-600 text-white font-medium py-3 rounded-md hover:bg-emerald-700 transition shadow-md mt-2">
                Book Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
