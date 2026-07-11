export default function WhyBookUs({ data }: { data?: any }) {
  const features = data?.features || [
    {
      title: "Expert Foot & Mobility Assessment",
      desc: "A thorough clinical examination of your lower limbs to diagnose the root cause of discomfort.",
      icon: "🩺"
    },
    {
      title: "Computerised Gait Analysis",
      desc: "Precise walking posture and force-plate pressure mapping to detect biomechanical imbalances.",
      icon: "🏃‍♂️"
    },
    {
      title: "Custom Insoles & Orthotics",
      desc: "Individually 3D-designed and crafted orthotics tailored to your specific feet shape.",
      icon: "👟"
    },
    {
      title: "Custom Footwear Solutions",
      desc: "Comfortable, medically supportive shoes designed to reduce joint strain and friction.",
      icon: "👡"
    },
    {
      title: "Personalised Treatment Plans",
      desc: "Custom rehabilitation, stretches, and care routines optimized for your daily lifestyle.",
      icon: "📝"
    },
    {
      title: "Patient-Centred Care",
      desc: "A warm, patient-first environment focused on your comfort and long-term recovery.",
      icon: "❤️"
    }
  ];

  return (
    <section className="py-20 bg-slate-50 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            {data?.heading || "Why Book an Appointment with Us?"}
          </h2>
          <p className="text-lg text-gray-600">
            {data?.description || "We provide state-of-the-art foot diagnostics and customized orthotics designed to relieve your foot pain and restore natural mobility."}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((item: any, idx: number) => (
            <div 
              key={idx} 
              className="bg-white rounded-3xl p-8 border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.02)] text-left hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-red-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 text-3xl">
                {item.icon}
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors">
                {item.title}
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-3xl p-8 md:p-10 shadow-lg border border-gray-100 text-center max-w-4xl mx-auto relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{data?.bannerTitle || "Your Journey to Pain-Free Walking Starts Here"}</h3>
            <p className="font-semibold text-red-600 text-lg md:text-xl">
              {data?.bannerSubtitle || "PodiaXpert – Advanced Foot Clinic, Custom Insoles & Mobility Solutions"}
            </p>
          </div>
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-red-50 rounded-full blur-3xl opacity-50"></div>
          <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-red-50 rounded-full blur-3xl opacity-50"></div>
        </div>
      </div>
    </section>
  );
}
