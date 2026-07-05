import Image from "next/image";
import {
  Activity,
  ClipboardCheck,
  Layers,
  Search,
  HeartHandshake,
  MapPin,
} from "lucide-react";

export default function About() {
  return (
    <>
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Subsection 1: Welcome to PodiaXpert */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-20">
          {/* Left Image (5 Cols) */}
          <div className="lg:col-span-5 relative h-[380px] sm:h-[480px] w-full rounded-3xl overflow-hidden shadow-xl border border-gray-200">
            <Image
              src="/Home/home 1.jpeg"
              alt="Modern Clinic Interior"
              fill
              className="object-cover"
            />
          </div>

          {/* Right Content (7 Cols) */}
          <div className="lg:col-span-7">
            <span className="text-red-600 font-bold text-sm tracking-wider uppercase mb-3 block">
              Welcome to PodiaXpert
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              Specialised Foot Care for Better Mobility and Everyday Comfort
            </h2>
            <div className="text-gray-600 text-lg space-y-6 leading-relaxed">
              <p>
                Foot pain can affect every part of your day, from getting out of
                bed in the morning to walking, working, exercising, or spending
                time with family.
              </p>
              <p>
                At PodiaXpert, we focus on identifying the root cause of your
                discomfort and recommending the right solution for your needs.
                Whether your pain is recent or something you've been living with
                for years, our goal is to help you walk comfortably and improve
                your overall quality of life.
              </p>
              <p>
                From common foot conditions to customised support solutions, we
                offer comprehensive foot care under one roof.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Subsection 2: Why Choose PodiaXpert? */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-red-600 font-bold text-sm tracking-wider uppercase mb-3 block">
              Why Choose PodiaXpert?
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Dedicated Foot Care. Personalised Attention.
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto">
              Choosing the right foot clinic can make all the difference in your
              recovery. At PodiaXpert, we take the time to understand your
              concerns, assess your condition thoroughly, and recommend
              solutions that are tailored to your lifestyle and needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Specialised Focus",
                desc: "Dedicated entirely to foot health and mobility.",
                icon: <Activity className="w-6 h-6 text-red-500" />,
              },
              {
                title: "Personalised Treatment",
                desc: "Tailored recommendations for your unique lifestyle.",
                icon: <ClipboardCheck className="w-6 h-6 text-red-500" />,
              },
              {
                title: "Custom Solutions",
                desc: "Expertly crafted insoles and footwear for optimal support.",
                icon: <Layers className="w-6 h-6 text-red-500" />,
              },
              {
                title: "Advanced Assessments",
                desc: "Detailed gait analysis and comprehensive foot evaluations.",
                icon: <Search className="w-6 h-6 text-red-500" />,
              },
              {
                title: "Patient-Friendly",
                desc: "A compassionate approach focused on your comfort and recovery.",
                icon: <HeartHandshake className="w-6 h-6 text-red-500" />,
              },
              {
                title: "Convenient Location",
                desc: "Easily accessible clinic located in the heart of Kolkata.",
                icon: <MapPin className="w-6 h-6 text-red-500" />,
              },
            ].map((feature, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl p-8 border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(220,38,38,0.08)] hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-red-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
