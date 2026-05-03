import Link from 'next/link';
import { Activity, ChevronRight } from 'lucide-react';

const problems = [
  {
    title: 'Heel Pain',
    description: 'Click to read detailed information regarding causes, symptoms, and the...',
    theme: 'red'
  },
  {
    title: 'Plantar Fasciitis',
    description: 'Click to read detailed information regarding causes, symptoms, and the...',
    theme: 'red'
  },
  {
    title: 'Flat Feet',
    description: 'Click to read detailed information regarding causes, symptoms, and the...',
    theme: 'green'
  },
  {
    title: 'Corns & Calluses',
    description: 'Click to read detailed information regarding causes, symptoms, and the...',
    theme: 'red'
  },
  {
    title: 'Diabetic Foot',
    description: 'Click to read detailed information regarding causes, symptoms, and the...',
    theme: 'red'
  }
];

export default function ProblemsGrid() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {problems.map((problem, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition duration-300 flex flex-col h-full ${
                problem.theme === 'green' 
                  ? 'border border-emerald-400 shadow-[0_8px_30px_rgba(52,211,153,0.12)]' 
                  : 'border border-gray-100 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)]'
              }`}
            >
              <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center mb-6">
                <Activity className="w-6 h-6 text-red-600" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{problem.title}</h3>
              <p className="text-gray-500 mb-8 leading-relaxed text-sm">
                {problem.description}
              </p>

              <div className="mt-auto">
                <Link 
                  href={`/problems`} 
                  className={`inline-flex items-center font-bold transition group ${
                    problem.theme === 'green' ? 'text-emerald-500 hover:text-emerald-600' : 'text-red-600 hover:text-red-700'
                  }`}
                >
                  <span className="mr-1">Read Details</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl p-12 text-center shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Don't see your problem listed?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            We treat a wide variety of foot and ankle conditions. If you're experiencing any pain or discomfort, schedule a consultation for a proper diagnosis.
          </p>
          <Link 
            href="/book" 
            className="inline-block bg-red-600 text-white font-bold px-8 py-4 rounded-lg hover:bg-red-700 transition shadow-lg"
          >
            Book Free Consultation
          </Link>
        </div>
      </div>
    </section>
  );
}
