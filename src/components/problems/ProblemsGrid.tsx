import Link from "next/link";
import { ChevronRight } from "lucide-react";

import { problemsData } from "../../data/problems";

// Map each problem slug to its primary card image
const cardImages: Record<string, string> = {
  "achilles-tendinitis": "/Achilles Tendinitis/Achilles Tendinitis 1.jpg",
  "ankle-pain": "/Ankle Pain/Ankle Pain 1.jpg",
  bunions: "/Bunions/Bunions 1.jpg",
  "calcaneal-spur-or-heel-spur": "/Calcaneal Spur/Heel spur.jpg",
  "corns-and-calluses": "/Foot Assessment/foot scan.jpg", // Fallback for corns
  "diabetic-neuropathy": "/Diabetic Neuropathy/Diabetic Neuropathy 2.jpg",
  "flat-feet": "/Flat Feet/Flat feet.jpg",
  "heel-pain": "/Heel pain/Heel pain.jpg",
  "ingrown-toenail": "/Ingrown Toenail/ingrown toenail.jpg",
  metatarsalgia: "/Metatarsalgia/Metatarsalgia.jpg",
  "plantar-fasciitis": "/Plantar Fasciitis/plantar-fasciitis.jpg",
};

// Expanded descriptions to fill out cards professionally
const expandedDescriptions: Record<string, string> = {
  "achilles-tendinitis":
    "Experiencing pain or stiffness at the back of your heel? Learn about the causes of Achilles Tendinitis, its common symptoms like swelling or morning stiffness, and how customized orthotics and therapy can help you recover.",
  "ankle-pain":
    "Ankle pain can arise from sprains, injuries, or chronic instability. Read about the symptoms of ankle pain, its underlying causes, and our specialized gait analysis and support solutions designed to get you back on your feet.",
  bunions:
    "A painful, bony bump at the base of your big toe can cause significant discomfort. Read about how bunions develop, how they affect foot alignment, and discover our custom footwear and orthotic solutions to relieve pressure.",
  "calcaneal-spur-or-heel-spur":
    "Sharp heel pain can make your first steps in the morning painful. Learn about calcaneal (heel) spurs, how they are diagnosed using computerized gait analysis, and how customized insoles provide long-term relief.",
  "corns-and-calluses":
    "Hardened layers of skin caused by friction and pressure can make walking painful. Understand why corns and calluses develop, and explore our professional care and custom pressure-relieving insoles.",
  "diabetic-neuropathy":
    "Nerve damage from diabetes can lead to numbness, tingling, or pain in your feet. Discover the signs of diabetic neuropathy, the importance of regular screening, and our specialized footcare solutions.",
  "flat-feet":
    "Low or fallen arches can lead to pain in your feet, ankles, knees, and back. Learn how flat feet affect your alignment and how our custom-designed orthotics can restore balance and walking comfort.",
  "heel-pain":
    "Heel pain is a very common condition that affects daily activities. Discover the multiple causes of heel pain, when to seek professional help, and how customized insoles and proper footwear bring long-term relief.",
  "ingrown-toenail":
    "Pain, redness, and swelling around your toenail can indicate an ingrown toenail. Learn about the causes of this painful condition, preventive care tips, and professional treatment options for lasting relief.",
  metatarsalgia:
    "Pain and inflammation in the ball of your foot can restrict your mobility. Understand the symptoms of metatarsalgia, its common causes like improper footwear, and how custom cushioning orthotics can help.",
  "plantar-fasciitis":
    "A sharp stabbing pain in your heel, especially during your first steps in the morning, is a classic sign of plantar fasciitis. Learn how it develops and how custom orthotics can relieve strain and pain.",
};

export default function ProblemsGrid() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {problemsData.map((problem) => {
            const imageUrl =
              cardImages[problem.slug] || "/Foot Assessment/foot scan.jpg";
            const description =
              expandedDescriptions[problem.slug] || problem.description;
            return (
              <div
                key={problem.slug}
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
                    {description}
                  </p>

                  <div className="mt-auto">
                    <Link
                      href={`/problems/${problem.slug}`}
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
