"use client";

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const defaultFaqs = [
  {
    question: "Do I need to see a specialist for foot pain?",
    answer: "If foot pain is affecting your daily activities, mobility, or quality of life, it's best to get it assessed by a foot care specialist."
  },
  {
    question: "Can custom insoles help with heel pain?",
    answer: "Yes. Custom insoles can help reduce pressure on painful areas, improve support, and address underlying biomechanical issues."
  },
  {
    question: "What happens during a foot assessment?",
    answer: "We evaluate your symptoms, foot structure, walking pattern, posture, and pressure distribution to understand the cause of your discomfort."
  },
  {
    question: "Do you provide care for diabetic patients?",
    answer: "Yes. We offer diabetic foot assessments and footwear solutions designed to reduce the risk of complications."
  },
  {
    question: "How can I book an appointment?",
    answer: "You can call us, send a WhatsApp message, or use our online appointment form."
  }
];

export default function FAQ({ data }: { data?: any }) {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const toggleFAQ = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  const faqs = data?.faqs || defaultFaqs;

  return (
    <section className="py-20 bg-white border-t border-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <span className="text-red-600 font-bold text-sm tracking-wider uppercase mb-3 block">
            {data?.tagline || "FAQ"}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            {data?.heading || "Frequently Asked Questions"}
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq: { question: string, answer: string }, idx: number) => {
            const isOpen = openIdx === idx;
            return (
              <div 
                key={idx}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left font-bold text-gray-900 text-lg hover:bg-slate-50 transition-colors"
                >
                  <span>{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform duration-300 flex-shrink-0 ${isOpen ? 'rotate-180 text-red-600' : ''}`} />
                </button>
                
                <div 
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen ? 'max-h-[300px] border-t border-gray-50' : 'max-h-0'
                  }`}
                >
                  <p className="px-6 py-5 text-gray-600 leading-relaxed text-base">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
