import Link from "next/link";
import { ChevronRight } from "lucide-react";

import { servicesData } from "../../data/services";

// Map each service slug to its primary card image
const cardImages: Record<string, string> = {
  "custom-footwear": "/Custom Footwear/Custom Footwear.png",
  "custom-insoles": "/Custom Insoles/Custom Insoles 1.png",
  "diabetic-foot-care": "/Diabetic Footcare/Diabetic Foot.jpg",
  "foot-assessment": "/Foot Assessment/foot scan.jpg",
  "gait-analysis": "/Gait Analysis/Gait Analysis.jpg",
};

// Expanded descriptions to fill out cards professionally
const expandedDescriptions: Record<string, string> = {
  "custom-footwear":
    "Step into comfort with professionally designed footwear tailored to your unique foot shape. Our custom footwear reduces friction, offers exceptional arch support, and enhances everyday mobility.",
  "custom-insoles":
    "Realign your feet and relieve painful pressure points with custom-designed orthotics. Individually crafted after a comprehensive gait assessment, they are perfect for plantar fasciitis, heel pain, and flat feet.",
  "diabetic-foot-care":
    "Protect your feet from serious diabetic complications. We offer regular screenings, professional skin/nail assessments, and custom-made offloading insoles to minimize pressure points and ensure long-term foot health.",
  "foot-assessment":
    "Uncover the root cause of your foot, ankle, or heel pain. Our comprehensive non-invasive assessment includes a detailed physical examination and computerized gait analysis to recommend the right treatment.",
  "gait-analysis":
    "Discover how your body moves. Using state-of-the-art computerised gait analysis and force plate pressure mapping, we analyze weight distribution and identify posture imbalances to correct your walking pattern.",
};

export default function ServicesGrid() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => {
            const imageUrl =
              cardImages[service.slug] || "/Foot Assessment/foot scan.jpg";
            const description =
              expandedDescriptions[service.slug] || service.description;
            return (
              <div
                key={service.slug}
                className="bg-white rounded-3xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition duration-300 border border-gray-100 flex flex-col h-full group"
              >
                {/* Card Image */}
                <div className="relative w-full aspect-[16/10] overflow-hidden bg-slate-100 border-b border-gray-100">
                  <img
                    src={imageUrl}
                    alt={service.title}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-8 leading-relaxed text-sm line-clamp-4">
                    {description}
                  </p>

                  <div className="mt-auto">
                    <Link
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center text-red-600 font-bold hover:text-red-700 transition group/link text-left"
                    >
                      <span className="mr-1 leading-snug">Read More</span>
                      <ChevronRight className="w-5 h-5 group-hover/link:translate-x-1 transition-transform flex-shrink-0" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
