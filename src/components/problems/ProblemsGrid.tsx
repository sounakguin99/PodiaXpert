import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { client } from "@/sanity/client";
import { defineQuery, type SanityDocument } from "next-sanity";
import imageUrlBuilder from '@sanity/image-url';

const builder = imageUrlBuilder(client);
function urlFor(source: any) {
  return builder.image(source);
}

const PROBLEMS_QUERY = defineQuery(
  `*[_type == "problem" && defined(slug.current)] | order(title asc)`
);

const options = { next: { revalidate: 30 } };

// Fallback images until you upload them in Sanity!
const cardImages: Record<string, string> = {
  "achilles-tendinitis": "/Achilles Tendinitis/Achilles Tendinitis 1.jpg",
  "ankle-pain": "/Ankle Pain/Ankle Pain 1.jpg",
  bunions: "/Bunions/Bunions 1.jpg",
  "calcaneal-spur-or-heel-spur": "/Calcaneal Spur/Heel spur.jpg",
  "corns-and-calluses": "/Foot Assessment/foot scan.jpg",
  "diabetic-neuropathy": "/Diabetic Neuropathy/Diabetic Neuropathy 2.jpg",
  "flat-feet": "/Flat Feet/Flat feet.jpg",
  "heel-pain": "/Heel pain/Heel pain.jpg",
  "ingrown-toenail": "/Ingrown Toenail/ingrown toenail.jpg",
  metatarsalgia: "/Metatarsalgia/Metatarsalgia.jpg",
  "plantar-fasciitis": "/Plantar Fasciitis/plantar-fasciitis.jpg",
};

export default async function ProblemsGrid() {
  const problems = await client.fetch<SanityDocument[]>(PROBLEMS_QUERY, {}, options);

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {problems.map((problem) => {
            const imageUrl = problem.image 
              ? urlFor(problem.image).url() 
              : (cardImages[problem.slug.current] || "/Foot Assessment/foot scan.jpg");
            
            return (
              <div
                key={problem.slug.current}
                className="bg-white rounded-3xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition duration-300 flex flex-col h-full border border-gray-100 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] group"
              >
                {/* Card Image */}
                <div className="relative w-full aspect-[16/10] overflow-hidden bg-slate-100 border-b border-gray-100">
                  <img
                    src={imageUrl}
                    alt={problem.title}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {problem.title}
                  </h3>
                  <p className="text-gray-500 mb-8 leading-relaxed text-sm line-clamp-4">
                    {problem.description}
                  </p>

                  <div className="mt-auto">
                    <Link
                      href={`/problems/${problem.slug.current}`}
                      className="inline-flex items-center font-bold text-red-600 hover:text-red-700 transition"
                    >
                      <span className="mr-1">Read More</span>
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl p-12 text-center shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Don't see your problem listed?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            We treat a wide variety of foot and ankle conditions. If you're
            experiencing any pain or discomfort, schedule a consultation for a
            proper diagnosis.
          </p>
          <Link
            href="/book-appointment"
            className="inline-block bg-red-600 text-white font-bold px-8 py-4 rounded-lg hover:bg-red-700 transition shadow-lg"
          >
            Book Free Consultation
          </Link>
        </div>
      </div>
    </section>
  );
}
