import Link from 'next/link';
import { Activity, CheckCircle2, ChevronRight } from 'lucide-react';

import { servicesData } from '../../data/services';

export default function ServicesGrid() {
  return (
    <section className="pb-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <div 
              key={service.slug} 
              className="bg-white rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition duration-300 border border-gray-100 flex flex-col h-full group"
            >
              <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-blue-100 transition-colors">
                <Activity className="w-7 h-7 text-blue-600" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-8 leading-relaxed line-clamp-3">
                {service.description}
              </p>
              
              <div className="space-y-3 mb-10">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                  <span className="text-sm font-medium text-gray-700">Expert Diagnosis</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                  <span className="text-sm font-medium text-gray-700">Personalized Plan</span>
                </div>
              </div>

              <div className="mt-auto flex flex-col gap-3">
                <Link 
                  href={`/services/${service.slug}`} 
                  className="inline-flex items-center text-blue-600 font-bold hover:text-blue-700 transition group/link text-left"
                >
                  <span className="mr-1 leading-snug">Read Details</span>
                  <ChevronRight className="w-5 h-5 group-hover/link:translate-x-1 transition-transform flex-shrink-0" />
                </Link>
                <Link 
                  href="/book" 
                  className="inline-flex items-center text-gray-500 font-medium hover:text-gray-700 transition group/book text-left"
                >
                  <span className="mr-1 leading-snug text-sm">Book Service</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
