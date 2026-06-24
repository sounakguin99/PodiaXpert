import { notFound } from 'next/navigation';
import Navbar from '../../../components/global/Navbar';
import Footer from '../../../components/global/Footer';
import Link from 'next/link';
import { ArrowLeft, Stethoscope } from 'lucide-react';
import { servicesData } from '../../../data/services';

interface ServicePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

export default async function ServiceDetail({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <main className="min-h-screen flex flex-col font-sans bg-slate-50">
      <Navbar />
      
      <div className="flex-grow max-w-4xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12">
        <Link href="/services" className="inline-flex items-center text-gray-500 hover:text-red-600 transition mb-8 group">
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to all services
        </Link>
        
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 mb-12">
          <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-8">
            <Stethoscope className="w-8 h-8 text-blue-600" />
          </div>
          
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-8 leading-tight">
            {service.title}
          </h1>
          
          <div className="prose prose-lg prose-blue max-w-none text-gray-600">
            {service.content.map((paragraph, index) => {
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
        <div className="bg-gradient-to-br from-blue-900 to-indigo-900 rounded-3xl p-10 sm:p-12 text-center text-white shadow-xl mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Interested in {service.title}?
          </h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto text-lg leading-relaxed">
            Our experts are ready to provide top-notch care and personalized solutions for you.
          </p>
          <Link 
            href="/book" 
            className="inline-block bg-white text-blue-900 font-bold px-8 py-4 rounded-xl hover:bg-gray-50 hover:scale-105 transition duration-300 shadow-lg"
          >
            Book An Appointment
          </Link>
        </div>
      </div>

      <Footer />
    </main>
  );
}
