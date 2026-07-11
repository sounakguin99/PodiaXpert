import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { client } from '@/sanity/client';
import { defineQuery, type SanityDocument } from 'next-sanity';
import { CustomPortableText } from '@/components/sanity/CustomPortableText';

const PROBLEM_QUERY = defineQuery(
  `*[_type == "problem" && slug.current == $slug][0]`
);

const PROBLEMS_QUERY = defineQuery(
  `*[_type == "problem" && defined(slug.current)]{ "slug": slug.current }`
);

const options = { next: { revalidate: 30 } };

interface ProblemPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: ProblemPageProps): Promise<Metadata> {
  const { slug } = await params;
  const problem = await client.fetch<SanityDocument | null>(PROBLEM_QUERY, { slug }, options);
  if (!problem) return {};

  const description = problem.description?.length > 160
    ? problem.description.substring(0, 157) + "..."
    : problem.description;

  return {
    title: `${problem.title} Treatment in Kolkata`,
    description,
    keywords: [
      problem.title?.toLowerCase() || "",
      `${problem.title?.toLowerCase()} treatment`,
      `${problem.title?.toLowerCase()} treatment Kolkata`,
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

export async function generateStaticParams() {
  const problems = await client.fetch<SanityDocument[]>(PROBLEMS_QUERY, {}, options);
  return problems.map((problem) => ({
    slug: problem.slug,
  }));
}

export default async function ProblemDetail({ params }: ProblemPageProps) {
  const { slug } = await params;
  const problem = await client.fetch<SanityDocument | null>(PROBLEM_QUERY, { slug }, options);

  if (!problem) {
    notFound();
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

          <div className="prose prose-lg prose-red max-w-none">
            {problem.content && <CustomPortableText value={problem.content} />}
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
