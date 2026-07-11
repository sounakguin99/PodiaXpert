export default function CTA({ data }: { data?: any }) {
  return (
    <section className="bg-red-600 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
          {data?.heading || "Ready to Take the First Step Towards Pain-Free Walking?"}
        </h2>
        <p className="text-red-100 text-lg mb-10 max-w-2xl mx-auto">
          {data?.description || "Whether you're struggling with heel pain, plantar fasciitis, flat feet, diabetic foot concerns, or general foot discomfort, we're here to help."}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="/book-appointment"
            className="bg-white text-red-600 px-8 py-4 rounded-md font-bold text-lg hover:bg-slate-100 transition shadow-lg inline-block"
          >
            {data?.primaryButtonText || "Book Your Appointment"}
          </a>
          <a 
            href={`tel:${data?.phoneNumber?.replace(/\s/g, '') || "+919230374058"}`}
            className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-white/10 transition inline-block"
          >
            Call {data?.phoneNumber || "+91 92303 74058"}
          </a>
        </div>
      </div>
    </section>
  );
}
