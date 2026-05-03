import { ScanLine, MousePointer2, Settings, Truck } from 'lucide-react';

const steps = [
  {
    icon: <ScanLine className="w-8 h-8 text-white" />,
    title: "1. Visit Clinic",
    description: "Get a professional assessment and 3D scan of your feet."
  },
  {
    icon: <MousePointer2 className="w-8 h-8 text-white" />,
    title: "2. Choose Model",
    description: "Select from our wide range of orthopedic styles and colors."
  },
  {
    icon: <Settings className="w-8 h-8 text-white" />,
    title: "3. Customize",
    description: "Our lab fabricates the footwear with your unique arch profile."
  },
  {
    icon: <Truck className="w-8 h-8 text-white" />,
    title: "4. Home Delivery",
    description: "Receive your custom footwear at your doorstep within 7-10 days."
  }
];

export default function FootwearSteps() {
  return (
    <section className="py-24 bg-[#0f172a] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight text-white">
            Simple 4-Step Process
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto font-medium">
            Custom orthotics shouldn't be complicated. We've simplified it for you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mb-6 z-10">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 tracking-tight">{step.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {step.description}
              </p>
              {index < 3 && (
                <div className="hidden md:block absolute top-8 left-1/2 w-full h-[2px] bg-white/10 -z-0"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
