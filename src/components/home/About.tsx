import Image from "next/image";
import {
  Activity,
  ClipboardCheck,
  Layers,
  Search,
  HeartHandshake,
  MapPin,
} from "lucide-react";

import { CustomPortableText } from '@/components/sanity/CustomPortableText';
import { urlFor } from "@/sanity/image";
import React from 'react';

const IconMap: Record<string, React.ElementType> = {
  Activity,
  ClipboardCheck,
  Layers,
  Search,
  HeartHandshake,
  MapPin,
};

export default function About({ data }: { data: any }) {
  if (!data) return null;
  const { about, whyChoose } = data;

  return (
    <>
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Subsection 1: Welcome to PodiaXpert */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-20">
          {/* Left Image (5 Cols) */}
          <div className="lg:col-span-5 relative h-[380px] sm:h-[480px] w-full rounded-3xl overflow-hidden shadow-xl border border-gray-200">
            <Image
              src={about?.image?.asset ? urlFor(about.image).url() : "/Home/home 1.jpeg"}
              alt="Modern Clinic Interior"
              fill
              className="object-cover"
            />
          </div>

          {/* Right Content (7 Cols) */}
          <div className="lg:col-span-7">
            <span className="text-red-600 font-bold text-sm tracking-wider uppercase mb-3 block">
              {about?.tagline}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              {about?.heading}
            </h2>
            <div className="text-gray-600 text-lg space-y-6 leading-relaxed">
              {about?.content && <CustomPortableText value={about.content} />}
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
              {whyChoose?.tagline}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {whyChoose?.heading}
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto">
              {whyChoose?.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChoose?.features?.map((feature: any, idx: number) => {
              const IconComponent = IconMap[feature.icon] || Activity;
              return (
              <div
                key={idx}
                className="bg-white rounded-3xl p-8 border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(220,38,38,0.08)] hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-red-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="w-6 h-6 text-red-500" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            )})}
          </div>
        </div>
      </section>
    </>
  );
}
