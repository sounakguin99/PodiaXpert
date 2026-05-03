"use client";

import { useState } from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const problemsData = [
  {
    title: "HEEL PAIN",
    desc: "Heel pain is a common condition often caused by plantar fasciitis or Achilles tendonitis. We offer advanced diagnostic and treatment options.",
    image: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "PLANTAR FASCIITIS",
    desc: "Inflammation of the thick band of tissue that runs across the bottom of your foot. Our custom orthotics and physical therapy can provide lasting relief.",
    image: "https://images.unsplash.com/photo-1608222351212-18fe0ec7b13b?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "FLAT FOOT",
    desc: "A condition where the arches on the inside of your feet are flattened. We provide specialized footwear and custom insoles to improve foot biomechanics.",
    image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "CORNS & CALLUSES",
    desc: "Thick, hardened layers of skin that develop when your skin tries to protect itself against friction and pressure. We safely remove them and address the root cause.",
    image: "https://images.unsplash.com/photo-1544117519-31a4b719223d?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "DIABETIC FOOT",
    desc: "Comprehensive diabetic foot care to prevent complications. We offer regular screening, nail care, and specialized offloading footwear.",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "BUNIONS",
    desc: "A bony bump that forms on the joint at the base of your big toe. From conservative management to surgical options, we help you walk pain-free.",
    image: "https://images.unsplash.com/photo-1536063211352-0b94219f6212?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "SPORTS INJURIES",
    desc: "Whether you're a professional athlete or a weekend warrior, we treat ankle sprains, stress fractures, and tendon issues to get you back in the game.",
    image: "https://images.unsplash.com/photo-1571008887538-b36bb32f4571?auto=format&fit=crop&q=80&w=800"
  }
];

export default function Problems() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-red-600 font-semibold text-sm tracking-wider uppercase mb-3">
          What Are You Suffering From?
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
          Common Foot Problems We Treat
        </h2>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto mb-16">
          {problemsData.map((problem, index) => (
            <button 
              key={index} 
              onClick={() => setActiveTab(index)}
              className={`font-semibold text-sm px-6 py-3 rounded-full shadow-sm border transition-all duration-300 ${
                activeTab === index 
                  ? 'bg-emerald-600 text-white border-emerald-600 shadow-md scale-105' 
                  : 'bg-white text-gray-800 border-slate-200 hover:border-emerald-500 hover:text-emerald-600'
              }`}
            >
              {problem.title}
            </button>
          ))}
        </div>

        {/* Active Content Display */}
        <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100 flex flex-col md:flex-row text-left transition-all duration-500">
          <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              {problemsData[activeTab].title}
            </h3>
            <div className="w-16 h-1 bg-red-600 mb-6 rounded-full"></div>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              {problemsData[activeTab].desc}
            </p>
            <button className="inline-flex items-center text-emerald-600 font-bold hover:text-emerald-700 transition w-fit group">
              Learn more about this treatment 
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          
          <div className="md:w-1/2 relative min-h-[300px] md:min-h-[400px]">
            <Image 
              key={activeTab} // Forces image to re-render with animation if needed
              src={problemsData[activeTab].image}
              alt={problemsData[activeTab].title}
              fill
              className="object-cover animate-in fade-in duration-500"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
