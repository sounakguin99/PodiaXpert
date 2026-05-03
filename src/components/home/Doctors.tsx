import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ChevronRight } from 'lucide-react';

const doctors = [
  {
    name: 'Dr. A. Sharma',
    qualifications: 'DPM, MS (Orthopedics)',
    role: 'Chief Podiatrist',
    experience: '15+ Years',
    expertise: ['Plantar Fasciitis', 'Sports Injuries', 'Surgical Podiatry'],
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=600'
  },
  {
    name: 'Dr. S. Roy',
    qualifications: 'DPM, Diabetic Foot Expert',
    role: 'Diabetic Foot Specialist',
    experience: '10+ Years',
    expertise: ['Diabetic Foot Care', 'Wound Healing', 'Neuropathy'],
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=600'
  },
  {
    name: 'Dr. P. Das',
    qualifications: 'BPT, Sports Rehab',
    role: 'Orthotics Expert',
    experience: '8+ Years',
    expertise: ['Custom Insoles', 'Flat Feet', 'Gait Analysis'],
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=600'
  }
];

export default function Doctors({ hideHeader = false }: { hideHeader?: boolean }) {
  return (
    <section id="doctors" className={`py-20 ${hideHeader ? 'bg-slate-50 pt-8' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {!hideHeader && (
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div>
              <p className="text-red-600 font-semibold text-sm tracking-wider uppercase mb-3">
                Our Experts
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Meet Our Doctors
              </h2>
            </div>
            <Link 
              href="/doctors" 
              className="inline-flex items-center text-emerald-600 font-medium hover:text-emerald-700 transition"
            >
              View All Doctors <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {doctors.map((doctor, index) => (
            <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-100 group flex flex-col transition-all hover:shadow-xl">
              <div className="relative h-80 w-full overflow-hidden bg-slate-100">
                <Image 
                  src={doctor.image}
                  alt={doctor.name}
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-white text-gray-900 text-xs font-bold px-3 py-1.5 rounded-md shadow-sm">
                  {doctor.experience}
                </div>
              </div>
              <div className="p-8 text-left flex-grow flex flex-col">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{doctor.name}</h3>
                <p className="text-red-600 text-sm font-bold mb-1">{doctor.qualifications}</p>
                <p className="text-gray-500 text-sm mb-6 font-medium">{doctor.role}</p>
                
                <div className="mb-8">
                  <p className="text-gray-900 font-bold text-xs tracking-wider uppercase mb-3">Expertise</p>
                  <div className="flex flex-wrap gap-2">
                    {doctor.expertise.map((item, i) => (
                      <span key={i} className="bg-slate-100 text-gray-600 text-xs font-medium px-3 py-1 rounded-full">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <button className="w-full mt-auto bg-slate-50 text-gray-900 font-bold py-3.5 rounded-xl hover:bg-slate-100 transition shadow-sm border border-slate-100 flex items-center justify-center gap-2 group-hover:bg-slate-100">
                  View Profile <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
