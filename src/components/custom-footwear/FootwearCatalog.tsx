import Image from 'next/image';
import Link from 'next/link';

const products = [
  {
    name: "Classic Ortho-Sandal",
    price: "From ₹2,499",
    image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&q=80&w=400",
    color: "Brown Leather"
  },
  {
    name: "Active Support Slider",
    price: "From ₹1,999",
    image: "https://images.unsplash.com/photo-1531310197839-ccf54634509e?auto=format&fit=crop&q=80&w=400",
    color: "Midnight Blue"
  },
  {
    name: "Medical Comfort Clog",
    price: "From ₹2,999",
    image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&q=80&w=400",
    color: "Soft Gray"
  }
];

export default function FootwearCatalog() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
              Featured Models
            </h2>
            <p className="text-lg text-gray-500 font-medium max-w-xl">
              A glimpse into our most popular medical-grade footwear designs.
            </p>
          </div>
          <Link href="/book" className="text-red-600 font-bold border-b-2 border-red-600 pb-1 hover:text-red-700 transition">
            Book Appointment to See All Models &rarr;
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {products.map((product, index) => (
            <div key={index} className="group bg-white rounded-[2rem] overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div className="relative h-64 bg-slate-100 p-8 flex items-center justify-center overflow-hidden">
                <Image 
                  src={product.image} 
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-8">
                <div className="text-xs font-bold text-red-600 uppercase tracking-widest mb-2">{product.color}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                <p className="text-gray-500 font-bold mb-6">{product.price}</p>
                <Link href="/book" className="block text-center bg-gray-900 text-white font-bold py-3 rounded-xl hover:bg-black transition">
                  Check Fit
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
