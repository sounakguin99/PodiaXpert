import { ScanLine, Smartphone, Settings2, PackageCheck } from "lucide-react";

const steps = [
  {
    icon: <ScanLine className="w-8 h-8 text-blue-600" />,
    title: "1. Scan",
    description: "Visit our clinic for a comprehensive 3D foot scan.",
  },
  {
    icon: <Settings2 className="w-8 h-8 text-blue-600" />,
    title: "2. Design",
    description:
      "Our podiatrists design a custom insole based on your unique biomechanics.",
  },
  {
    icon: <Smartphone className="w-8 h-8 text-blue-600" />,
    title: "3. 3D Print",
    description:
      "Precision 3D printing ensures a perfect fit down to the millimeter.",
  },
  {
    icon: <PackageCheck className="w-8 h-8 text-blue-600" />,
    title: "4. Fit & Walk",
    description:
      "Receive your insoles, fit them in your shoes, and walk pain-free.",
  },
];

export default function InsolesSteps() {
  return (
    <section className="py-24 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Easy Customized Inner Soles in just 4 steps
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our state-of-the-art process ensures your custom orthotics are
            perfectly tailored to you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition text-center relative flex flex-col items-center"
            >
              <div className="w-20 h-20 rounded-full bg-blue-50 flex items-center justify-center mb-6">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {step.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
