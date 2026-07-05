import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Activity } from "lucide-react";
import { problemsData } from "../../../data/problems";

interface ProblemPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: ProblemPageProps): Promise<Metadata> {
  const { slug } = await params;
  const problem = problemsData.find((p) => p.slug === slug);
  if (!problem) return {};

  const description = problem.description.length > 160
    ? problem.description.substring(0, 157) + "..."
    : problem.description;

  return {
    title: `${problem.title} Treatment in Kolkata`,
    description,
    keywords: [
      problem.title.toLowerCase(),
      `${problem.title.toLowerCase()} treatment`,
      `${problem.title.toLowerCase()} treatment Kolkata`,
      "foot clinic Kolkata",
      "podiatrist Kolkata",
      "PodiaXpert",
    ],
    alternates: {
      canonical: `https://www.podiaxpert.com/problems/${slug}`,
    },
    openGraph: {
      title: `${problem.title} Treatment – PodiaXpert Kolkata`,
      description,
      url: `https://www.podiaxpert.com/problems/${slug}`,
      type: "article",
    },
  };
}

// Generate static params for all problems at build time
export function generateStaticParams() {
  return problemsData.map((problem) => ({
    slug: problem.slug,
  }));
}

function renderTextWithBold(text: string) {
  if (!text) return "";
  const parts = text.split("**");
  return parts.map((part, index) => {
    if (index % 2 === 1) {
      return (
        <strong key={index} className="font-bold text-gray-900">
          {part}
        </strong>
      );
    }
    return part;
  });
}

const problemImages: Record<string, string[]> = {
  "achilles-tendinitis": [
    "/Achilles Tendinitis/Achilles Tendinitis 1.jpg",
    "/Achilles Tendinitis/Achilles Tendinitis 2.jpg"
  ],
  "ankle-pain": [
    "/Ankle Pain/Ankle Pain 1.jpg",
    "/Ankle Pain/Ankle Pain.jpg"
  ],
  "bunions": [
    "/Bunions/Bunions 1.jpg",
    "/Bunions/Bunions 2.jpg"
  ],
  "calcaneal-spur-or-heel-spur": [
    "/Calcaneal Spur/Heel spur 2.png",
    "/Calcaneal Spur/Heel spur.jpg"
  ],
  "diabetic-neuropathy": [
    "/Diabetic Neuropathy/Diabetic Neuropathy 2.jpg",
    "/Diabetic Neuropathy/Diabetic Neuropathy1.jpg"
  ],
  "flat-feet": [
    "/Flat Feet/Flat feet 1.jpg",
    "/Flat Feet/Flat feet.jpg"
  ],
  "heel-pain": [
    "/Heel pain/Heel pain 1.jpg",
    "/Heel pain/Heel pain.jpg"
  ],
  "ingrown-toenail": [
    "/Ingrown Toenail/ingrown toenail 2.jpg",
    "/Ingrown Toenail/ingrown toenail.jpg"
  ],
  "metatarsalgia": [
    "/Metatarsalgia/Metatarsalgia.jpg",
    "/Metatarsalgia/Metatarsalgia1.jpg"
  ],
  "plantar-fasciitis": [
    "/Plantar Fasciitis/plantar-fasciitis 2.png",
    "/Plantar Fasciitis/plantar-fasciitis.jpg"
  ]
};

export default async function ProblemDetail({ params }: ProblemPageProps) {
  const { slug } = await params;
  const problem = problemsData.find((p) => p.slug === slug);

  if (!problem) {
    notFound();
  }

  const images = problemImages[slug] || [];
  
  // Find images already present in content
  const existingImages = new Set<string>();
  problem.content.forEach((paragraph) => {
    if (paragraph.startsWith("[IMAGE]:")) {
      const imgPath = paragraph.replace("[IMAGE]:", "").trim();
      existingImages.add(imgPath);
    }
  });

  // Filter out images that are already present in content
  const imagesToInsert = images.filter((img) => !existingImages.has(img));

  const contentToRender: string[] = [];
  const interval = imagesToInsert.length > 0
    ? Math.max(3, Math.floor(problem.content.length / (imagesToInsert.length + 1)))
    : 0;

  let imageInsertedCount = 0;

  problem.content.forEach((paragraph, idx) => {
    contentToRender.push(paragraph);
    
    // Only insert between paragraphs (not at the very end or start), and at intervals
    if (
      imagesToInsert.length > 0 &&
      imageInsertedCount < imagesToInsert.length &&
      idx > 0 &&
      idx < problem.content.length - 2 &&
      (idx + 1) % interval === 0
    ) {
      contentToRender.push(`[IMAGE]:${imagesToInsert[imageInsertedCount]}`);
      imageInsertedCount++;
    }
  });

  // Append any remaining images at the end just in case
  while (imageInsertedCount < imagesToInsert.length) {
    contentToRender.push(`[IMAGE]:${imagesToInsert[imageInsertedCount]}`);
    imageInsertedCount++;
  }

  return (
    <main className="min-h-screen flex flex-col font-sans bg-slate-50">
      <div className="flex-grow max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12">
        <Link
          href="/problems"
          className="inline-flex items-center text-gray-500 hover:text-red-600 transition mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to all problems
        </Link>

        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 mb-12">
          

          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-8 leading-tight">
            {problem.title}
          </h1>

          <div className="prose prose-lg prose-red max-w-none text-gray-600">
            {contentToRender.map((paragraph, index) => {
              if (paragraph.startsWith("[IMAGE]:")) {
                const imagePath = paragraph.replace("[IMAGE]:", "").trim();
                return (
                  <div
                    key={index}
                    className="my-8 w-full flex justify-center bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100 p-2"
                  >
                    <img
                      src={imagePath}
                      alt={problem.title}
                      className="w-full h-auto object-cover rounded-xl"
                    />
                  </div>
                );
              }

              // Handle list items starting with - or *
              if (paragraph.startsWith("- ") || paragraph.startsWith("* ")) {
                const textContent = paragraph.substring(2);
                return (
                  <li key={index} className="ml-6 mb-2 list-disc text-gray-700">
                    {renderTextWithBold(textContent)}
                  </li>
                );
              }

              // Handle list items starting with checkmarks
              if (paragraph.startsWith("✔") || paragraph.startsWith("✓")) {
                const char = paragraph.startsWith("✔") ? "✔" : "✓";
                return (
                  <li
                    key={index}
                    className="ml-4 mb-2 text-gray-700 font-medium list-none flex items-start"
                  >
                    <span className="text-red-600 mr-2 font-bold">{char}</span>
                    <span>
                      {renderTextWithBold(paragraph.replace(char, "").trim())}
                    </span>
                  </li>
                );
              }

              // Handle section headers
              const cleanText = paragraph.replace(/^\*\*(.*)\*\*$/, "$1");
              if (
                cleanText.length < 60 &&
                !cleanText.includes(".") &&
                index !== 0
              ) {
                return (
                  <h3
                    key={index}
                    className="text-2xl font-bold text-gray-900 mt-8 mb-4"
                  >
                    {renderTextWithBold(cleanText)}
                  </h3>
                );
              }

              return (
                <p key={index} className="mb-6 leading-relaxed">
                  {renderTextWithBold(paragraph)}
                </p>
              );
            })}
          </div>
        </div>

        {/* CTA Section */}
        <div className="w-4xl mx-auto bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-10 sm:p-12 text-center text-white shadow-xl mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Experiencing {problem.title}?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-lg leading-relaxed">
            Don&apos;t let foot pain hold you back. Get a professional diagnosis
            and a customized treatment plan.
          </p>
          <Link
            href="/book-appointment"
            className="inline-block bg-white text-gray-900 font-bold px-8 py-4 rounded-xl hover:bg-gray-50 hover:scale-105 transition duration-300 shadow-lg"
          >
            Book Your Free Consultation
          </Link>
        </div>
      </div>
    </main>
  );
}
