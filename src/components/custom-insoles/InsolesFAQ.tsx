"use client";

import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    question: "How long does the 3D scanning process take?",
    answer: "The scanning itself takes less than 5 minutes. We use high-precision 3D scanners to capture thousands of data points of your foot structure."
  },
  {
    question: "Which shoes can I use these insoles with?",
    answer: "Our insoles are designed to be slim yet supportive. They fit perfectly in sneakers, formal shoes, and even some types of boots. We recommend removing the original factory insole before inserting ours."
  },
  {
    question: "How long do custom 3D printed insoles last?",
    answer: "Unlike foam store-bought insoles that collapse in months, our 3D printed semi-rigid shells are built to last 2-3 years while maintaining their structural integrity."
  },
  {
    question: "Will these help with my back pain?",
    answer: "Yes. Many back and knee issues stem from poor foot alignment (over-pronation or flat feet). By stabilizing your foundation, our insoles help align your entire skeletal structure."
  }
];

export default function InsolesFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600">
            Everything you need to know about our custom orthotics.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-100 rounded-2xl overflow-hidden shadow-sm">
              <button 
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 transition-colors"
              >
                <span className="font-bold text-gray-900">{faq.question}</span>
                {openIndex === index ? <ChevronUp className="w-5 h-5 text-blue-600" /> : <ChevronDown className="w-5 h-5 text-gray-400" />}
              </button>
              {openIndex === index && (
                <div className="p-6 pt-0 text-gray-600 leading-relaxed bg-white">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
