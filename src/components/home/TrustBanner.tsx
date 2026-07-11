import { Award, Microscope, Heart } from 'lucide-react';
import React from 'react';

// Define a map of icons to avoid dynamic import complexity for now
const IconMap: Record<string, React.ElementType> = {
  Award,
  Microscope,
  Heart
};

export default function TrustBanner({ data }: { data: any }) {
  if (!data) return null;

  return (
    <div className="bg-[#1a1f1c] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-center text-xl font-medium mb-10">
          {data.title}
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-gray-800">
          
          {data.stats?.map((stat: any, index: number) => {
            const IconComponent = IconMap[stat.icon] || Award; // Fallback to Award if icon not found
            return (
              <div key={index} className="flex flex-col items-center px-4 pt-6 md:pt-0">
                <div className="w-12 h-12 rounded-full border border-emerald-500/30 flex items-center justify-center mb-4">
                  <IconComponent className="w-6 h-6 text-emerald-500" />
                </div>
                <h4 className="text-lg font-semibold mb-2">{stat.title}</h4>
                <p className="text-gray-400 text-sm">{stat.description}</p>
              </div>
            );
          })}

        </div>
      </div>
    </div>
  );
}
