import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Stethoscope } from 'lucide-react';
import { servicesData } from '../../../data/services';

interface ServicePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);
  if (!service) return {};

  const description = service.description.length > 160
    ? service.description.substring(0, 157) + "..."
    : service.description;

  return {
    title: `${service.title} – PodiaXpert Kolkata`,
    description,
    keywords: [
      service.title.toLowerCase(),
      `${service.title.toLowerCase()} Kolkata`,
      "foot clinic Kolkata",
      "podiatrist Kolkata",
      "PodiaXpert",
    ],
    alternates: {
      canonical: `https://www.podiaxpert.com/services/${slug}`,
    },
    openGraph: {
      title: `${service.title} – PodiaXpert Advanced Foot Clinic Kolkata`,
      description,
      url: `https://www.podiaxpert.com/services/${slug}`,
      type: "article",
    },
  };
}


export function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
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

const serviceImages: Record<string, string[]> = {
  "custom-footwear": [
    "/Custom Footwear/Custom Footwear 1.png",
    "/Custom Footwear/Custom Footwear 2.png",
    "/Custom Footwear/Custom Footwear.png"
  ],
  "custom-insoles": [
    "/Custom Insoles/Custom Insoles 1.png",
    "/Custom Insoles/Custom Insoles 2.png",
    "/Custom Insoles/Custom Insoles 3.jpeg"
  ],
  "diabetic-foot-care": [
    "/Diabetic Footcare/Diabetic Foot 2.jpg",
    "/Diabetic Footcare/Diabetic Foot.jpg"
  ],
  "foot-assessment": [
    "/Foot Assessment/foot scan 2.jpeg",
    "/Foot Assessment/foot scan 3.jpeg",
    "/Foot Assessment/foot scan 4.jpeg",
    "/Foot Assessment/foot scan 5.jpeg",
    "/Foot Assessment/foot scan.jpg"
  ],
  "gait-analysis": [
    "/Gait Analysis/Gait Analysis.jpg"
  ]
};

export default async function ServiceDetail({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const images = serviceImages[slug] || [];
  const contentToRender: string[] = [];
  const interval = images.length > 0
    ? Math.max(3, Math.floor(service.content.length / (images.length + 1)))
    : 0;

  let imageInsertedCount = 0;

  service.content.forEach((paragraph, idx) => {
    contentToRender.push(paragraph);
    
    // Only insert between paragraphs (not at the very end or start), and at intervals
    if (
      images.length > 0 &&
      imageInsertedCount < images.length &&
      idx > 0 &&
      idx < service.content.length - 2 &&
      (idx + 1) % interval === 0
    ) {
      contentToRender.push(`[IMAGE]:${images[imageInsertedCount]}`);
      imageInsertedCount++;
    }
  });

  // Append any remaining images at the end just in case
  while (imageInsertedCount < images.length) {
    contentToRender.push(`[IMAGE]:${images[imageInsertedCount]}`);
    imageInsertedCount++;
  }

  return (
    <main className="min-h-screen flex flex-col font-sans bg-slate-50">
      <div className="flex-grow max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12">
        <Link href="/services" className="inline-flex items-center text-gray-500 hover:text-red-600 transition mb-8 group">
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to all services
        </Link>
        
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 mb-12">
          
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-8 leading-tight">
            {service.title}
          </h1>
          
          <div className="prose prose-lg prose-blue max-w-none text-gray-600">
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
                      alt={service.title}
                      className="w-full h-auto object-cover rounded-xl"
                    />
                  </div>
                );
              }
              if (paragraph.startsWith("- ") || paragraph.startsWith("* ")) {
                const textContent = paragraph.substring(2);
                return (
                  <li key={index} className="ml-6 mb-2 list-disc text-gray-700">
                    {renderTextWithBold(textContent)}
                  </li>
                );
              }
              if (paragraph.startsWith("✔") || paragraph.startsWith("✓")) {
                const char = paragraph.startsWith("✔") ? "✔" : "✓";
                return (
                  <li key={index} className="ml-4 mb-2 text-gray-700 font-medium list-none flex items-start">
                    <span className="text-blue-600 mr-2 font-bold">{char}</span>
                    <span>{renderTextWithBold(paragraph.replace(char, "").trim())}</span>
                  </li>
                );
              }
              const cleanText = paragraph.replace(/^\*\*(.*)\*\*$/, "$1");
              if (cleanText.length < 60 && !cleanText.includes(".") && index !== 0) {
                return (
                  <h3 key={index} className="text-2xl font-bold text-gray-900 mt-8 mb-4">
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
            Interested in {service.title}?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-lg leading-relaxed">
            Our experts are ready to provide top-notch care and personalized solutions for you.
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
