import Image from 'next/image';
import { Target, Heart, Award } from 'lucide-react';

export default function OurStory() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <div>
            <p className="text-red-600 font-bold tracking-wider text-sm uppercase mb-4">
              Our Story
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why We Started PodiaXpert
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              PodiaXpert was founded with a single mission: to bring advanced, specialized podiatry care to Kolkata. We recognized a significant gap in dedicated foot and ankle treatments, leaving many patients suffering from chronic pain without proper diagnosis or modern interventions.
            </p>
            <p className="text-gray-600 mb-10 leading-relaxed">
              Today, we combine international expertise with state-of-the-art technology like 3D scanning, custom orthotics, and advanced laser therapies to deliver treatments that are effective, personalized, and minimally invasive.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Mission Card */}
              <div className="bg-red-50 rounded-xl p-6 border border-red-100 transition-transform hover:-translate-y-1 duration-300">
                <Target className="w-8 h-8 text-red-600 mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">Our Mission</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  To enhance mobility and quality of life through expert foot care.
                </p>
              </div>
              
              {/* Vision Card */}
              <div className="bg-emerald-50 rounded-xl p-6 border border-emerald-100 transition-transform hover:-translate-y-1 duration-300">
                <Heart className="w-8 h-8 text-emerald-600 mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">Our Vision</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  To be the most trusted podiatry center in Eastern India.
                </p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative mt-8 lg:mt-0">
            <div className="relative h-[400px] md:h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
              <Image 
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1000"
                alt="PodiaXpert Clinic Interior"
                fill
                className="object-cover"
              />
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 md:-bottom-8 md:-left-8 bg-[#111827] text-white p-6 md:p-8 rounded-2xl shadow-xl w-40 md:w-48 z-10">
              <Award className="w-8 h-8 text-emerald-500 mb-3" />
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">15+</div>
              <div className="text-gray-400 text-xs md:text-sm font-medium">Years Experience</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
