import { notFound } from 'next/navigation';
import Navbar from '../../../components/global/Navbar';
import Footer from '../../../components/global/Footer';
import Link from 'next/link';
import { ArrowLeft, Activity } from 'lucide-react';
import { problemsData } from '../../../data/problems';

interface ProblemPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Generate static params for all problems at build time
export function generateStaticParams() {
  return problemsData.map((problem) => ({
    slug: problem.slug,
  }));
}

export default async function ProblemDetail({ params }: ProblemPageProps) {
  const { slug } = await params;
  const problem = problemsData.find((p) => p.slug === slug);

  if (!problem) {
    notFound();
  }

  return (
    <main className="min-h-screen flex flex-col font-sans bg-slate-50">
      <Navbar />
      
      <div className="flex-grow max-w-4xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12">
        <Link href="/problems" className="inline-flex items-center text-gray-500 hover:text-red-600 transition mb-8 group">
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to all problems
        </Link>
        
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 mb-12">
          <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center mb-8">
            <Activity className="w-8 h-8 text-red-600" />
          </div>
          
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-8 leading-tight">
            {problem.title}
          </h1>
          
          <div className="prose prose-lg prose-red max-w-none text-gray-600">
            {problem.content.map((paragraph, index) => {
              if (paragraph.length < 50 && !paragraph.includes('.') && index !== 0) {
                return (
                  <h3 key={index} className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                    {paragraph}
                  </h3>
                );
              }
              if (paragraph.startsWith('✔')) {
                return (
                  <li key={index} className="ml-4 mb-2 text-gray-700 font-medium">
                    {paragraph.replace('✔', '').trim()}
                  </li>
                );
              }
              return (
                <p key={index} className="mb-6 leading-relaxed">
                  {paragraph}
                </p>
              );
            })}
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-10 sm:p-12 text-center text-white shadow-xl mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Experiencing {problem.title}?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-lg leading-relaxed">
            Don't let foot pain hold you back. Get a professional diagnosis and a customized treatment plan.
          </p>
          <Link 
            href="/book" 
            className="inline-block bg-white text-gray-900 font-bold px-8 py-4 rounded-xl hover:bg-gray-50 hover:scale-105 transition duration-300 shadow-lg"
          >
            Book Your Free Consultation
          </Link>
        </div>
      </div>

      <Footer />
    </main>
  );
}
