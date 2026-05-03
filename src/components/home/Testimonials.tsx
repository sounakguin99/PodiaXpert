"use client";

import { Star } from 'lucide-react';
import Image from 'next/image';

const reviews = [
  {
    name: "Rahul M.",
    text: "The heel pain treatment I received from Dr. Sharma was excellent. The custom orthotics completely solved my issue within a week!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150"
  },
  {
    name: "Priya Das",
    text: "After suffering from plantar fasciitis for years, I finally found relief. The staff is so caring and the diagnosis was incredibly precise.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150"
  },
  {
    name: "Amit S.",
    text: "I travelled from Salt Lake for diabetic foot care and it was worth it. The doctors are highly knowledgeable and patient-focused.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150"
  },
  {
    name: "Sneha K.",
    text: "I was struggling with chronic foot pain, and the team here provided excellent care. My custom orthotics changed my life.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150"
  },
  {
    name: "Vikram R.",
    text: "Highly professional and skilled podiatrists. I got my bunion surgery done here, and the recovery was much faster than I expected.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=150"
  },
  {
    name: "Anjali B.",
    text: "The clinic is spotless and uses the latest technology. My sports injury healed beautifully thanks to their targeted physical therapy.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150"
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-red-600 font-semibold text-sm tracking-wider uppercase mb-3">
            Patient Feedback
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            What Our Patients Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div 
              key={index} 
              className="bg-slate-50 rounded-2xl p-6 lg:p-8 border border-slate-100 shadow-sm flex flex-col hover:shadow-md transition-shadow"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-600 mb-8 italic leading-relaxed flex-grow">
                "{review.text}"
              </p>
              <div className="flex items-center gap-4 mt-auto">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-emerald-100 shadow-sm">
                  <Image 
                    src={review.image} 
                    alt={review.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="font-bold text-gray-900 text-sm">
                    {review.name}
                  </div>
                  <div className="text-xs text-gray-500 font-medium">Patient</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="bg-white text-red-600 border-2 border-red-100 px-8 py-3 rounded-lg font-bold hover:bg-red-50 hover:border-red-200 transition shadow-sm">
            View All Reviews
          </button>
        </div>
      </div>
    </section>
  );
}
