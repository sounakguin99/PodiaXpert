import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ChevronRight } from 'lucide-react';

import { urlFor } from "@/sanity/image";

// Default fallback data just in case
const defaultDoctors = [
  {
    name: 'Dr. A. Sharma',
    qualifications: 'DPM, MS (Orthopedics)',
    role: 'Chief Podiatrist',
    experience: '15+ Years',
    details: 'Dr. Sharma is a senior podiatric surgeon specialising in complex foot reconstructions, sports-related injuries, and advanced surgical interventions. He leads the clinical team at PodiaXpert.',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=600'
  },
  {
    name: 'Dr. S. Roy',
    qualifications: 'DPM, Diabetic Foot Expert',
    role: 'Diabetic Foot Specialist',
    experience: '10+ Years',
    details: 'Dr. Roy specialises in diabetic wound care, peripheral neuropathy management, and complication prevention. She works closely with patients to design effective pressure-offloading solutions.',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=600'
  },
  {
    name: 'Dr. P. Das',
    qualifications: 'BPT, Sports Rehab',
    role: 'Orthotics Expert',
    experience: '8+ Years',
    details: 'Dr. Das is an expert in biomechanics, computerized gait analysis, and custom orthotics fabrication. He focuses on correcting postural imbalances, flat feet, and sports-related foot strain.',
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=600'
  }
];

export default function Doctors({ hideHeader = false, data }: { hideHeader?: boolean, data?: any }) {
  const doctorsList = data?.doctors || defaultDoctors;

  return (
    <section id="doctors" className={`py-20 ${hideHeader ? 'bg-slate-50 pt-8' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {!hideHeader && (
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-red-600 font-bold text-sm tracking-wider uppercase mb-3 block">
              {data?.tagline || "Meet Our Doctors"}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {data?.heading || "Experienced Professionals Committed to Your Foot Health"}
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              {data?.description || "Our team combines clinical expertise with a patient-first approach to deliver high-quality foot care and mobility solutions. Whether you need treatment for a painful condition or preventive care for long-term foot health, you're in experienced hands."}
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {doctorsList.map((doctor: any, index: number) => (
            <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-100 group flex flex-col transition-all hover:shadow-xl">
              <div className="relative h-80 w-full overflow-hidden bg-slate-100 flex items-center justify-center">
                {doctor.image ? (
                  <Image 
                    src={doctor.image?.asset ? urlFor(doctor.image).url() : doctor.image}
                    alt={doctor.name || "Doctor"}
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <span className="text-gray-400 font-medium">No Image Available</span>
                )}
                <div className="absolute top-4 right-4 bg-white text-gray-900 text-xs font-bold px-3 py-1.5 rounded-md shadow-sm">
                  {doctor.experience}
                </div>
              </div>
              <div className="p-8 text-left flex-grow flex flex-col">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{doctor.name}</h3>
                <p className="text-red-600 text-sm font-bold mb-1">{doctor.qualifications}</p>
                <p className="text-gray-500 text-sm mb-6 font-medium">{doctor.role}</p>
                
                <p className="text-gray-600 text-sm leading-relaxed mb-8 flex-grow">
                  {doctor.details}
                </p>

                <Link
                  href="/book-appointment"
                  className="w-full mt-auto bg-slate-50 text-gray-900 font-bold py-3.5 rounded-xl hover:bg-slate-100 transition shadow-sm border border-slate-100 flex items-center justify-center gap-2 group-hover:bg-slate-100"
                >
                  Book Appointment <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
