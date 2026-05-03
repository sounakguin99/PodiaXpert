export default function CTA() {
  return (
    <section className="bg-red-600 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
          Stop Living with Foot Pain
        </h2>
        <p className="text-red-100 text-lg mb-10 max-w-2xl mx-auto">
          Get the expert care you deserve and get back on your feet today.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-red-600 px-8 py-4 rounded-md font-bold text-lg hover:bg-slate-100 transition shadow-lg">
            Book Appointment
          </button>
          <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-white/10 transition">
            Call +91 98765 43210
          </button>
        </div>
      </div>
    </section>
  );
}
