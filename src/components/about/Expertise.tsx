export default function Expertise() {
  const steps = [
    {
      number: "1",
      title: "Advanced Diagnostics",
      desc: "Using the latest imaging and gait analysis technology to pinpoint the exact cause of pain.",
      color: "text-red-500"
    },
    {
      number: "2",
      title: "Targeted Therapy",
      desc: "Non-surgical treatments including shockwave therapy, customized rehab, and medication.",
      color: "text-emerald-500"
    },
    {
      number: "3",
      title: "Custom Orthotics",
      desc: "3D printed, custom-molded insoles designed specifically for your unique foot structure.",
      color: "text-blue-500"
    }
  ];

  return (
    <section className="bg-[#1a1a1a] py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-emerald-500 font-bold tracking-wider text-sm uppercase mb-4">
          Our Expertise
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-16">
          Comprehensive Foot Care
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-[#2a2a2a] flex items-center justify-center mb-6 shadow-inner border border-gray-800">
                <span className={`text-xl font-bold ${step.color}`}>{step.number}</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
              <p className="text-gray-400 leading-relaxed text-sm max-w-sm">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
