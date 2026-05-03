import Navbar from '@/components/global/Navbar';
import Footer from '@/components/global/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { blogPosts } from '@/lib/blogData';

// Generate static params for all blog posts
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen flex flex-col font-sans">
      <Navbar />
      
      <article className="flex-grow bg-white pt-20 pb-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <Link href="/blogs" className="inline-flex items-center text-red-600 font-medium hover:text-red-700 transition mb-8">
            &larr; Back to all articles
          </Link>

          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-emerald-100 text-emerald-700 text-xs font-bold px-3 py-1 rounded-full">
                {post.category}
              </span>
              <span className="text-gray-500 text-sm font-medium">
                {post.date}
              </span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight leading-tight">
              {post.title}
            </h1>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center font-bold text-gray-500 border border-gray-200">
                {post.author.charAt(4)}
              </div>
              <div>
                <p className="text-sm font-bold text-gray-900">{post.author}</p>
                <p className="text-xs text-gray-500">Podiatry Expert</p>
              </div>
            </div>
          </div>

        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <div className="relative h-[400px] md:h-[500px] w-full rounded-3xl overflow-hidden shadow-xl">
            <Image 
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg prose-red max-w-none text-gray-700 leading-relaxed prose-headings:font-bold prose-headings:text-gray-900 prose-a:text-red-600 hover:prose-a:text-red-700">
            {post.content.split('\n').map((paragraph, index) => {
              if (paragraph.startsWith('### ')) {
                return <h3 key={index} className="text-2xl mt-8 mb-4">{paragraph.replace('### ', '')}</h3>;
              } else if (paragraph.trim() === '') {
                return null;
              } else if (paragraph.startsWith('- ')) {
                 return <li key={index} className="ml-4 list-disc">{paragraph.replace('- ', '').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')}</li>
              } else if (paragraph.match(/^\d+\. /)) {
                 return <li key={index} className="ml-4 list-decimal">{paragraph.replace(/^\d+\. /, '').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')}</li>
              }
              return (
                <p key={index} className="mb-6" dangerouslySetInnerHTML={{ __html: paragraph.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
              );
            })}
          </div>
          
          <div className="mt-16 pt-8 border-t border-gray-200">
            <div className="bg-slate-50 rounded-2xl p-8 text-center border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Need personalized care?</h3>
              <p className="text-gray-600 mb-6 max-w-md mx-auto">Our experts are here to help you get back on your feet. Schedule a consultation today.</p>
              <Link href="/book" className="inline-block bg-red-600 text-white font-bold px-8 py-3 rounded-xl hover:bg-red-700 transition shadow-md">
                Book an Appointment
              </Link>
            </div>
          </div>
        </div>

      </article>

      <Footer />
    </main>
  );
}
