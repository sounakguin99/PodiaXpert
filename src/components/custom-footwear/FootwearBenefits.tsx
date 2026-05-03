import { Footprints, Heart, ShieldCheck, Zap } from 'lucide-react';

const benefits = [
  {
    icon: <Footprints className="w-8 h-8 text-red-600" />,
    title: "Anatomical Arch Support",
    description: "Designed to mirror the natural contour of your foot for maximum stability."
  },
  {
    icon: <Heart className="w-8 h-8 text-red-600" />,
    title: "Medical Grade Comfort",
    description: "Specifically engineered for patients with Plantar Fasciitis and flat feet."
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-red-600" />,
    title: "Posture Alignment",
    description: "Corrects over-pronation and helps align your knees and lower back."
  },
  {
    icon: <Zap className="w-8 h-8 text-red-600" />,
    title: "Shock Absorption",
    description: "High-density cushioning that reduces impact on your heels and joints."
  }
];

export default function FootwearBenefits() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            Why Our Footwear is the Best?
          </h2>
          <div className="w-20 h-1.5 bg-red-600 mx-auto rounded-full mb-8"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-medium leading-relaxed">
            Every pair is a result of podiatric science combined with modern ergonomic design.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center mb-6">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 tracking-tight">{benefit.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed font-medium">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
