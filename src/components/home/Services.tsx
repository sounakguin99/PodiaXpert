import { Footprints, Activity, Bone, Stethoscope, Scissors, TrendingUp, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    icon: <Activity className="w-6 h-6 text-red-500" />,
    title: 'Heel Pain Treatment',
    description: 'Advanced treatments to relieve heel pain and restore mobility.',
  },
  {
    icon: <Footprints className="w-6 h-6 text-red-500" />,
    title: 'Plantar Fasciitis',
    description: 'Specialized care for inflammation of the plantar fascia tissue.',
  },
  {
    icon: <Scissors className="w-6 h-6 text-red-500" />,
    title: 'Custom Insoles',
    description: '3D printed custom orthotics tailored for your exact foot structure.',
  },
  {
    icon: <Stethoscope className="w-6 h-6 text-red-500" />,
    title: 'Diabetic Foot Care',
    description: 'Preventative and wound care for diabetic foot complications.',
  },
  {
    icon: <Bone className="w-6 h-6 text-red-500" />,
    title: 'Flat Foot Correction',
    description: 'Non-surgical and orthotic support for flat arches.',
  },
  {
    icon: <TrendingUp className="w-6 h-6 text-red-500" />,
    title: 'Sports Injury',
    description: 'Rapid recovery treatments for athletic foot and ankle injuries.',
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-red-600 font-semibold text-sm tracking-wider uppercase mb-3">
            Our Services
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Comprehensive Foot Care Solutions
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-slate-50 rounded-xl p-8 hover:shadow-lg transition duration-300 border border-slate-100 group"
            >
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              <Link 
                href="#" 
                className="inline-flex items-center text-red-600 font-medium hover:text-red-700 transition"
              >
                Learn More <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
