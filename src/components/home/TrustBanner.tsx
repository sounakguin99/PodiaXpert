import { Award, Microscope, Heart } from 'lucide-react';

export default function TrustBanner() {
  return (
    <div className="bg-[#1a1f1c] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-center text-xl font-medium mb-10">
          Trusted by 1000+ Patients in Kolkata
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-gray-800">
          
          <div className="flex flex-col items-center px-4 pt-6 md:pt-0">
            <div className="w-12 h-12 rounded-full border border-emerald-500/30 flex items-center justify-center mb-4">
              <Award className="w-6 h-6 text-emerald-500" />
            </div>
            <h4 className="text-lg font-semibold mb-2">Certified Doctors</h4>
            <p className="text-gray-400 text-sm">Expert podiatrists with extensive training</p>
          </div>

          <div className="flex flex-col items-center px-4 pt-6 md:pt-0">
            <div className="w-12 h-12 rounded-full border border-emerald-500/30 flex items-center justify-center mb-4">
              <Microscope className="w-6 h-6 text-emerald-500" />
            </div>
            <h4 className="text-lg font-semibold mb-2">Advanced Equipment</h4>
            <p className="text-gray-400 text-sm">Modern diagnostics and 3D scanning</p>
          </div>

          <div className="flex flex-col items-center px-4 pt-6 md:pt-0">
            <div className="w-12 h-12 rounded-full border border-emerald-500/30 flex items-center justify-center mb-4">
              <Heart className="w-6 h-6 text-emerald-500" />
            </div>
            <h4 className="text-lg font-semibold mb-2">Personalized Care</h4>
            <p className="text-gray-400 text-sm">Custom treatment plans for faster recovery</p>
          </div>

        </div>
      </div>
    </div>
  );
}
