"use client";

import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function ContactFormSection() {
  return (
    <section className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Left Column: Get In Touch */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-10">Get In Touch</h2>
            
            <div className="space-y-8 mb-12">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center flex-shrink-0 mt-1 shadow-sm">
                  <MapPin className="w-5 h-5 text-red-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg mb-1">Clinic Location</h3>
                  <p className="text-gray-600 leading-relaxed">Sector V, Salt Lake City, Kolkata, West Bengal 700091</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-emerald-50 flex items-center justify-center flex-shrink-0 mt-1 shadow-sm">
                  <Phone className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg mb-1">Call Us</h3>
                  <p className="text-gray-600 mb-1">+91 98765 43210</p>
                  <p className="text-gray-500 text-sm font-medium">Available for emergency calls.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0 mt-1 shadow-sm">
                  <Mail className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg mb-1">Email</h3>
                  <p className="text-gray-600">hello@podiaxpert.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0 mt-1 shadow-sm">
                  <Clock className="w-5 h-5 text-gray-700" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg mb-1">Working Hours</h3>
                  <p className="text-gray-600 mb-1">Mon-Sat: 9:00 AM - 8:00 PM</p>
                  <p className="text-red-600 text-sm font-bold">Sunday Closed</p>
                </div>
              </div>
            </div>

            {/* Need Immediate Help Card */}
            <div className="bg-[#111827] rounded-2xl p-8 md:p-10 text-center text-white shadow-xl relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-3">Need Immediate Help?</h3>
                <p className="text-gray-400 mb-8 font-medium">Our support team is ready to answer your call.</p>
                <button className="bg-red-600 text-white font-bold py-3.5 px-8 rounded-lg hover:bg-red-700 transition-colors shadow-lg">
                  Call Us Now
                </button>
              </div>
              <div className="absolute top-0 right-0 -mt-8 -mr-8 w-32 h-32 bg-red-600 opacity-20 rounded-full blur-2xl"></div>
              <div className="absolute bottom-0 left-0 -mb-8 -ml-8 w-32 h-32 bg-emerald-600 opacity-20 rounded-full blur-2xl"></div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="relative">
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-100 h-full">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">Send us a Message</h2>
              
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition bg-slate-50"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number *</label>
                  <input 
                    type="tel" 
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition bg-slate-50"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition bg-slate-50"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Your Message *</label>
                  <textarea 
                    rows={4}
                    placeholder="How can we help you?"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition bg-slate-50 resize-none"
                  ></textarea>
                </div>

                <button className="w-full bg-emerald-500 text-white font-bold text-lg py-4 rounded-xl hover:bg-emerald-600 transition shadow-md mt-4">
                  Send Message
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
