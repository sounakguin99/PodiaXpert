import Image from 'next/image';
import { CheckCircle2 } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Image */}
          <div className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl">
            <Image 
              src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=1000"
              alt="Modern Clinic Interior"
              fill
              className="object-cover"
            />
          </div>

          {/* Right Content */}
          <div>
            <p className="text-red-600 font-semibold text-sm tracking-wider uppercase mb-3">
              Why Choose Us
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Setting the Standard for Podiatry in Kolkata
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              PodiaXpert is Kolkata's premier podiatry clinic, dedicated to providing world-class foot and ankle care. We combine expertise with advanced technology to ensure the best outcomes for our patients.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-emerald-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-gray-900">Experienced Doctors</h4>
                  <p className="text-sm text-gray-500 mt-1">Highly qualified podiatrists</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-emerald-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-gray-900">Latest Technology</h4>
                  <p className="text-sm text-gray-500 mt-1">3D scanning & advanced diagnostics</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-emerald-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-gray-900">Affordable Treatment</h4>
                  <p className="text-sm text-gray-500 mt-1">Cost-effective solutions for all</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-emerald-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-gray-900">Personalized Care</h4>
                  <p className="text-sm text-gray-500 mt-1">Tailored treatment plans for you</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
