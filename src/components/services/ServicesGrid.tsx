import Link from 'next/link';
import { Activity, CheckCircle2, ChevronRight } from 'lucide-react';

const services = [
  {
    title: 'Heel Pain Treatment',
    description: 'Advanced solutions for chronic heel pain and discomfort.',
    linkText: 'Book Treatment'
  },
  {
    title: 'Plantar Fasciitis',
    description: 'Specialized care to relieve tissue inflammation and arch pain.',
    linkText: 'Book Treatment'
  },
  {
    title: 'Custom Insoles',
    description: '3D printed insoles customized for your foot structure.',
    linkText: 'Learn about Boyner Clinic Insoles'
  },
  {
    title: 'Diabetic Foot Care',
    description: 'Preventative and curative care for diabetic foot complications.',
    linkText: 'Book Treatment'
  },
  {
    title: 'Flat Feet Correction',
    description: 'Therapy and orthotics to support fallen arches.',
    linkText: 'Book Treatment'
  },
  {
    title: 'Sports Injury',
    description: 'Rapid recovery treatments for athletes and active individuals.',
    linkText: 'Book Treatment'
  }
];

export default function ServicesGrid() {
  return (
    <section className="pb-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition duration-300 border border-gray-100 flex flex-col h-full"
            >
              <div className="w-14 h-14 bg-red-50 rounded-2xl flex items-center justify-center mb-8">
                <Activity className="w-7 h-7 text-red-600" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                {service.description}
              </p>
              
              <div className="space-y-3 mb-10">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                  <span className="text-sm font-medium text-gray-700">Advanced Diagnosis</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                  <span className="text-sm font-medium text-gray-700">Personalized Plan</span>
                </div>
              </div>

              <div className="mt-auto">
                <Link 
                  href="/book" 
                  className="inline-flex items-center text-red-600 font-bold hover:text-red-700 transition group text-left"
                >
                  <span className="mr-1 leading-snug">{service.linkText}</span>
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform flex-shrink-0" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
