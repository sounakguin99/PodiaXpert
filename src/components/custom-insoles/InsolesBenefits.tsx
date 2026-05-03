import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

export default function InsolesBenefits() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Benefit 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why PodiaXpert Clinic Insoles are the Best?
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Standard over-the-counter insoles only provide basic cushioning.
              Our 3D printed custom insoles are engineered perfectly for your
              unique biomechanics, providing rigid arch support where you need
              it most.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0" />
                <span className="text-gray-700 font-medium">
                  100% Customized to your 3D foot scan
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0" />
                <span className="text-gray-700 font-medium">
                  Durable 3D printed semi-rigid support structure
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0" />
                <span className="text-gray-700 font-medium">
                  Fits perfectly inside your existing shoes
                </span>
              </li>
            </ul>
          </div>
          <div className="order-1 lg:order-2 relative h-[350px] w-full rounded-3xl overflow-hidden shadow-lg border border-slate-100">
            <Image
              src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=800"
              alt="Custom Insoles Fit"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Benefit 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative h-[350px] w-full rounded-3xl overflow-hidden shadow-lg border border-blue-50">
            <Image
              src="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&q=80&w=800"
              alt="Posture Correction"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Arch Support Customized - Corrects your Posture
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Foot pain often originates from poor arch support causing your
              ankles, knees, and hips to misalign. Our custom orthotics
              stabilize your foundation.
            </p>
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-sm">
              <h4 className="font-bold text-gray-900 mb-2">
                Relieves Pain Associated With:
              </h4>
              <p className="text-gray-600 text-sm">
                Plantar Fasciitis, Flat Feet, Heel Spurs, Achilles Tendonitis,
                and general Knee & Back Pain.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
