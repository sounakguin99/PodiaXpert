import Image from 'next/image';

export default function FootwearGenderSelection() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 min-h-[400px]">
      {/* Women */}
      <div className="relative group cursor-pointer overflow-hidden">
        <Image 
          src="https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&q=80&w=800"
          alt="Women's Orthopedic Footwear"
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-red-900/40 group-hover:bg-red-900/50 transition-colors flex flex-col items-center justify-center text-white p-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 uppercase tracking-tighter">Women's Collection</h2>
          <button className="bg-white text-red-900 font-bold px-8 py-3 rounded-full hover:bg-red-50 transition">View More</button>
        </div>
      </div>

      {/* Men */}
      <div className="relative group cursor-pointer overflow-hidden">
        <Image 
          src="https://images.unsplash.com/photo-1531310197839-ccf54634509e?auto=format&fit=crop&q=80&w=800"
          alt="Men's Orthopedic Footwear"
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-blue-900/40 group-hover:bg-blue-900/50 transition-colors flex flex-col items-center justify-center text-white p-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 uppercase tracking-tighter">Men's Collection</h2>
          <button className="bg-white text-blue-900 font-bold px-8 py-3 rounded-full hover:bg-blue-50 transition">View More</button>
        </div>
      </div>
    </section>
  );
}
