import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { client } from "@/sanity/client";
import { defineQuery, type SanityDocument } from "next-sanity";
import imageUrlBuilder from '@sanity/image-url';

const builder = imageUrlBuilder(client);
function urlFor(source: any) {
  return builder.image(source);
}

const SERVICES_QUERY = defineQuery(
  `*[_type == "service" && defined(slug.current)] | order(title asc)`
);

const options = { next: { revalidate: 30 } };

// Map each service slug to its primary card image fallback
const cardImages: Record<string, string> = {
  "custom-footwear": "/Custom Footwear/Custom Footwear.png",
  "custom-insoles": "/Custom Insoles/Custom Insoles 1.png",
  "diabetic-foot-care": "/Diabetic Footcare/Diabetic Foot.jpg",
  "foot-assessment": "/Foot Assessment/foot scan.jpg",
  "gait-analysis": "/Gait Analysis/Gait Analysis.jpg",
};

export default async function ServicesGrid() {
  const services = await client.fetch<SanityDocument[]>(SERVICES_QUERY, {}, options);

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const imageUrl = service.image
              ? urlFor(service.image).url()
              : (cardImages[service.slug.current] || "/Foot Assessment/foot scan.jpg");
              
            return (
              <div
                key={service.slug.current}
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
                    {service.description}
                  </p>

                  <div className="mt-auto">
                    <Link
                      href={`/services/${service.slug.current}`}
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
