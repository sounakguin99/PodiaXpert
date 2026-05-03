"use client";

import { Calendar, Clock, ShieldCheck, UserCheck, Phone, MessageCircle } from 'lucide-react';

export default function BookingContent() {
  return (
    <section className="pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-10">
          
          {/* LEFT SIDE: Text and Info Cards (Requested explicitly by user) */}
          <div className="w-full lg:w-[40%] flex flex-col gap-6 order-2 lg:order-1">
            
            {/* Why Book With Us Card */}
            <div className="bg-white rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 h-full">
              <h3 className="text-xl font-bold text-gray-900 mb-8">Why Book With Us?</h3>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="mt-1">
                    <Clock className="w-6 h-6 text-emerald-500" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Same Day Appointment</h4>
                    <p className="text-sm text-gray-500">Available for urgent cases.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="mt-1">
                    <ShieldCheck className="w-6 h-6 text-emerald-500" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">100% Confidential</h4>
                    <p className="text-sm text-gray-500">Your data is safe with us.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="mt-1">
                    <UserCheck className="w-6 h-6 text-emerald-500" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Expert Specialists</h4>
                    <p className="text-sm text-gray-500">Top-rated podiatrists in Kolkata.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Need Immediate Help Card */}
            <div className="bg-[#111827] rounded-2xl p-8 text-white shadow-xl">
              <h3 className="text-xl font-bold mb-2">Need Immediate Help?</h3>
              <p className="text-gray-400 text-sm mb-8">Skip the form and contact us directly.</p>
              
              <div className="space-y-4">
                <button className="w-full bg-white text-gray-900 font-bold py-3.5 rounded-xl flex items-center justify-center gap-2 hover:bg-gray-100 transition shadow-sm border border-gray-200">
                  <Phone className="w-5 h-5" /> Call Now
                </button>
                <button className="w-full bg-[#25D366] text-white font-bold py-3.5 rounded-xl flex items-center justify-center gap-2 hover:bg-[#20b858] transition shadow-sm">
                  <MessageCircle className="w-5 h-5" /> Book via WhatsApp
                </button>
              </div>
            </div>

          </div>

          {/* RIGHT SIDE: Form (Requested explicitly by user) */}
          <div className="w-full lg:w-[60%] order-1 lg:order-2">
            <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border-t-4 border-t-red-600 overflow-hidden h-full">
              <div className="p-8 md:p-10">
                <div className="flex items-center gap-3 mb-8">
                  <Calendar className="w-7 h-7 text-red-600" />
                  <h2 className="text-2xl font-bold text-gray-900">Schedule a Visit</h2>
                </div>
                
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
                      <input 
                        type="text" 
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition bg-slate-50"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number *</label>
                      <input 
                        type="tel" 
                        placeholder="+91 XXXXX XXXXX"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition bg-slate-50"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                      <input 
                        type="email" 
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition bg-slate-50"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Preferred Date *</label>
                      <input 
                        type="date" 
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition bg-slate-50 text-gray-600"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">What is the main problem? *</label>
                    <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition bg-slate-50 text-gray-600 appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23131313%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E')] bg-[length:12px_12px] bg-no-repeat bg-[position:right_1.2rem_center]">
                      <option value="">-- Choose an option --</option>
                      <option value="heel-pain">Heel Pain</option>
                      <option value="plantar-fasciitis">Plantar Fasciitis</option>
                      <option value="flat-foot">Flat Foot</option>
                      <option value="diabetic-foot">Diabetic Foot</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Any additional message or symptoms?</label>
                    <textarea 
                      rows={4}
                      placeholder="Tell us briefly about your pain or issue..."
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition bg-slate-50 resize-none"
                    ></textarea>
                  </div>

                  <button className="w-full bg-emerald-500 text-white font-bold text-lg py-4 rounded-xl hover:bg-emerald-600 transition shadow-md mt-4">
                    Confirm Booking
                  </button>
                </form>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
