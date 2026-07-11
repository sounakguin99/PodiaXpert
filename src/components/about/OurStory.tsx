import Image from 'next/image';
import { Award } from 'lucide-react';
import { CustomPortableText } from '@/components/sanity/CustomPortableText';
import { urlFor } from '@/sanity/image';

export default function OurStory({ data, whyChooseData }: { data?: any, whyChooseData?: any }) {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <div>
            <p className="text-red-600 font-bold tracking-wider text-sm uppercase mb-4">
              {data?.tagline || "Our Story"}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {data?.heading || "Who We Are"}
            </h2>
            {data?.content ? (
              <CustomPortableText value={data.content} />
            ) : (
              <>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  At PodiaXpert, we believe that healthy feet are the foundation of an active and fulfilling life. As a specialised foot clinic in Kolkata, our mission is to provide personalised, evidence-based foot care solutions that help people move comfortably and confidently.
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  We offer comprehensive assessment and treatment for a wide range of foot and ankle conditions, including heel pain, plantar fasciitis, flat feet, diabetic foot problems, corns and calluses, ankle pain, Achilles tendinitis and other mobility-related concerns. Our services also include advanced foot assessment, computerised gait analysis, custom insoles, orthotics and customised footwear solutions.
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  At the heart of PodiaXpert is a patient-first approach. We understand that every individual is different, which is why we focus on identifying the root cause of your discomfort and creating treatment plans tailored to your specific needs and lifestyle.
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Whether you are a working professional dealing with long hours on your feet, an athlete looking to improve performance, a senior citizen seeking better mobility, or someone living with diabetes, our team is committed to helping you achieve better foot health and improved quality of life.
                </p>
              </>
            )}
            
            <p className="text-emerald-800 font-semibold mb-0 leading-relaxed text-base border-l-4 border-emerald-500 pl-4 bg-emerald-50/50 py-3 rounded-r-xl">
              {data?.callout || "Our goal is simple – to help you walk pain-free, stay active and enjoy everyday life with confidence."}
            </p>
          </div>

          {/* Right Image */}
          <div className="relative mt-8 lg:mt-0">
            <div className="relative h-[450px] md:h-[550px] lg:h-[620px] w-full rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
              <Image 
                src={data?.image?.asset ? urlFor(data.image).url() : "/About Us/About Us.jpeg"}
                alt="About PodiaXpert"
                fill
                className="object-cover"
              />
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 md:-bottom-8 md:-left-8 bg-[#111827] text-white p-6 md:p-8 rounded-2xl shadow-xl w-40 md:w-48 z-10">
              <Award className="w-8 h-8 text-emerald-500 mb-3" />
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">15+</div>
              <div className="text-gray-400 text-xs md:text-sm font-medium">Years Experience</div>
            </div>
          </div>

        </div>

        {/* Why Choose PodiaXpert? Section */}
        <div className="mt-20 pt-20 border-t border-gray-100">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{whyChooseData?.heading || "Why Choose PodiaXpert?"}</h2>
            <p className="text-gray-600">{whyChooseData?.subheading || "We offer specialized care, state-of-the-art diagnostics, and personalized treatment plans to help you live a pain-free life."}</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {(whyChooseData?.features || [
              "Specialised Foot & Mobility Care",
              "Comprehensive Foot Assessment",
              "Computerised Gait Analysis",
              "Custom Insoles & Orthotics",
              "Custom Footwear Solutions",
              "Personalised Treatment Plans",
              "Patient-Centred Approach"
            ]).map((item: string, index: number) => (
              <div key={index} className="flex items-center gap-4 bg-slate-50 border border-slate-100 p-5 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                <div className="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600 flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <span className="font-semibold text-gray-800 text-sm leading-tight">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
