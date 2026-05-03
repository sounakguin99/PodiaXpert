import Image from 'next/image';
import Link from 'next/link';

export default function FootwearHero() {
  return (
    <section className="bg-white py-24 lg:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-block bg-red-50 text-red-600 text-xs font-bold px-3 py-1 rounded-md uppercase tracking-widest mb-6">
              Orthopedic Collection
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-gray-900 leading-[1.1] mb-8">
              Orthopedic <br />
              <span className="text-red-600">Arch Support</span> <br />
              Slippers
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-lg leading-relaxed font-medium">
              Customized footwear designed to provide superior arch support and comfort for every step you take.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/book" 
                className="inline-block bg-red-600 text-white font-bold px-10 py-4 rounded-xl hover:bg-red-700 transition shadow-xl shadow-red-600/20 text-center"
              >
                Shop Now
              </Link>
            </div>
          </div>
          <div className="relative h-[300px] md:h-[450px] w-full rounded-[2.5rem] overflow-hidden bg-slate-50 border border-slate-100 flex items-center justify-center p-12">
            <Image 
              src="https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&q=80&w=800"
              alt="Orthopedic Slippers"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
