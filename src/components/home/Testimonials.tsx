"use client";

import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { useRef, useEffect } from 'react';

const reviews = [
  {
    name: "Raja Chatterjee",
    text: "Having Foot pain from last 6 months.. Visited there taken there services and amazingly After uses there Customized Footwear my Pain was Gone within 2 weeks.. without medicine they solve my issues.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150"
  },
  {
    name: "Debaditya Chatterjee",
    text: "I used to face severe problems with flat foot, ranging from pain in my feet, to some deformity while standing. Thereby, I adopted the services of PodiaXpert. Very good service. I have been using their customised shoes for about 6 months now, and it has helped significantly improve my feet. Highly recommend it!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150"
  },
  {
    name: "tanaya moitra",
    text: "This Foot Clinic offers specialized foot care services with a strong focus on hygiene, comfort, and effective treatment. The clinic is well-maintained, and the staff are attentive, ensuring patients feel at ease throughout the process. Their approach combines professional expertise with personalized care, making it suitable for both routine foot maintenance and specific concerns. Overall, it is a reliable choice for quality foot care and customer satisfaction.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150"
  },
  {
    name: "Buddhapriya Roy",
    text: "Excellent Clinic and all staffs are Professional. I am very helpful . Thank you",
    rating: 5,
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150"
  }
];

const displayReviews = [...reviews, ...reviews, ...reviews];

export default function Testimonials() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const isPausedRef = useRef(false);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container && container.children.length > 0) {
      setTimeout(() => {
        const cardWidth = container.children[0].clientWidth;
        const gap = 24;
        const singleSetWidth = (cardWidth + gap) * reviews.length;
        container.scrollLeft = singleSetWidth;
      }, 100);
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (isPausedRef.current || !scrollContainerRef.current) return;
      
      const container = scrollContainerRef.current;
      if (container.children.length === 0) return;

      const cardWidth = container.children[0].clientWidth;
      const gap = 24; // 1.5rem (gap-6)
      const scrollAmount = cardWidth + gap;
      const singleSetWidth = scrollAmount * reviews.length;
      
      if (container.scrollLeft > singleSetWidth * 1.5) {
        container.scrollLeft -= singleSetWidth;
      } else if (container.scrollLeft < singleSetWidth * 0.5) {
        container.scrollLeft += singleSetWidth;
      }
      
      requestAnimationFrame(() => {
        container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      });
    }, 4000); // 4 seconds interval

    return () => clearInterval(interval);
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current && scrollContainerRef.current.children.length > 0) {
      const container = scrollContainerRef.current;
      const cardWidth = container.children[0].clientWidth;
      const gap = 24;
      const scrollAmount = cardWidth + gap;
      const singleSetWidth = scrollAmount * reviews.length;
      
      if (container.scrollLeft > singleSetWidth * 1.5) {
        container.scrollLeft -= singleSetWidth;
      } else if (container.scrollLeft < singleSetWidth * 0.5) {
        container.scrollLeft += singleSetWidth;
      }
      
      requestAnimationFrame(() => {
        container.scrollBy({
          left: direction === 'left' ? -scrollAmount : scrollAmount,
          behavior: 'smooth'
        });
      });
    }
  };

  return (
    <section id="testimonials" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-red-600 font-bold text-sm tracking-wider uppercase mb-3 block">
            Patient Experiences
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            What Our Patients Say
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Helping people walk comfortably again is what motivates us every day. Our patients trust us for professional care, personalised attention, and practical solutions that make a real difference in their lives.
          </p>
        </div>

        <div 
          className="relative group px-0 lg:px-16"
          onMouseEnter={() => isPausedRef.current = true}
          onMouseLeave={() => isPausedRef.current = false}
          onTouchStart={() => isPausedRef.current = true}
          onTouchEnd={() => isPausedRef.current = false}
        >
          {/* Left Arrow (Desktop Only) */}
          <button 
            onClick={() => scroll('left')}
            className="hidden md:flex absolute left-0 lg:left-2 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg items-center justify-center text-gray-600 hover:text-red-600 hover:bg-red-50 transition z-10 border border-gray-100 opacity-0 group-hover:opacity-100"
            aria-label="Previous testimonials"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Slider Track */}
          <div 
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-8 pt-2 px-2 -mx-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          >
            {displayReviews.map((review, index) => (
              <div 
                key={index} 
                className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] flex-shrink-0 snap-center bg-slate-50 rounded-2xl p-6 lg:p-8 border border-slate-100 shadow-sm flex flex-col hover:shadow-md transition-shadow"
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

          {/* Right Arrow (Desktop Only) */}
          <button 
            onClick={() => scroll('right')}
            className="hidden md:flex absolute right-0 lg:right-2 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg items-center justify-center text-gray-600 hover:text-red-600 hover:bg-red-50 transition z-10 border border-gray-100 opacity-0 group-hover:opacity-100"
            aria-label="Next testimonials"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

      </div>
    </section>
  );
}
