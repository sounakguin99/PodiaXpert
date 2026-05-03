import Image from "next/image";
import Link from "next/link";

export default function InsolesHero() {
  return (
    <section className="bg-[#111827] py-20 lg:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Customized Insoles with Arch Support
            </h1>
            <p className="text-xl text-gray-400 mb-8 max-w-lg leading-relaxed">
              3D Printed Shoe Inserts engineered for your unique foot structure.
              Relieve pain and correct your posture starting today.
            </p>
            <Link
              href="/book"
              className="inline-block bg-blue-600 text-white font-bold px-8 py-4 rounded-lg hover:bg-blue-700 transition shadow-lg"
            >
              Book 3D Foot Scan
            </Link>
          </div>
          <div className="relative h-[300px] md:h-[400px] w-full rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=800"
              alt="Custom 3D Printed Insoles"
              fill
              className="object-cover opacity-90"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
