// Custom Insoles Comparison Component
import { CheckCircle2, XCircle } from 'lucide-react';
import Link from 'next/link';

export default function InsolesComparison() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            PodiaXpert Features
          </h2>
          <p className="text-lg text-gray-600">
            See how our custom 3D printed insoles compare to off-the-shelf alternatives.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Standard Insoles */}
          <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm flex flex-col">
            <h3 className="text-2xl font-bold text-gray-900 mb-2 text-center">Standard Insoles</h3>
            <p className="text-gray-500 text-sm text-center mb-8">Store-bought foam or gel inserts</p>
            
            <ul className="space-y-4 mb-8 flex-grow">
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                <span className="text-gray-600">Basic soft cushioning</span>
              </li>
              <li className="flex items-center gap-3">
                <XCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                <span className="text-gray-600">No biomechanical correction</span>
              </li>
              <li className="flex items-center gap-3">
                <XCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                <span className="text-gray-600">Loses shape quickly (1-2 months)</span>
              </li>
              <li className="flex items-center gap-3">
                <XCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                <span className="text-gray-600">Generic arch profile</span>
              </li>
            </ul>
            
            <div className="text-center mt-auto pt-6">
              <button className="w-full bg-slate-100 text-slate-500 font-bold py-3 rounded-xl hover:bg-slate-200 transition">
                Generic Retail Fit
              </button>
            </div>
          </div>

          {/* PodiaXpert Custom Insoles */}
          <div className="bg-blue-600 rounded-3xl p-8 border border-blue-600 shadow-xl flex flex-col relative transform md:-translate-y-4">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-yellow-400 text-yellow-900 font-bold text-xs uppercase tracking-wider py-1 px-4 rounded-full">
              Recommended
            </div>
            <h3 className="text-2xl font-bold text-white mb-2 text-center mt-2">PodiaXpert Custom</h3>
            <p className="text-blue-100 text-sm text-center mb-8">Medical-grade 3D precision</p>
            
            <ul className="space-y-4 mb-8 flex-grow">
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-white flex-shrink-0" />
                <span className="text-white font-medium">Rigid, supportive base structure</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-white flex-shrink-0" />
                <span className="text-white font-medium">Corrects foot posture & alignment</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-white flex-shrink-0" />
                <span className="text-white font-medium">Lasts for years without deforming</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-white flex-shrink-0" />
                <span className="text-white font-medium">100% matched to your 3D foot scan</span>
              </li>
            </ul>
            
            <div className="text-center mt-auto pt-6">
              <Link href="/book" className="block w-full bg-white text-blue-600 font-bold py-3 rounded-xl hover:bg-gray-50 transition shadow-md">
                Get Your Custom Fit
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
