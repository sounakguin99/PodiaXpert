import Link from 'next/link';

export default function ServicesCTA() {
  return (
    <section className="pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-12 text-center shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Ready to Step Without Pain?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Schedule your consultation today and discover the right treatment for your feet.
          </p>
          <Link 
            href="/book" 
            className="inline-block bg-red-600 text-white font-bold px-8 py-4 rounded-lg hover:bg-red-700 transition shadow-lg"
          >
            Book Appointment
          </Link>
        </div>
      </div>
    </section>
  );
}
