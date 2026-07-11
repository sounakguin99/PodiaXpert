export default function AboutHero({ data }: { data?: any }) {
  return (
    <section className="bg-slate-50 pt-24 pb-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
          {data?.heading || "PodiaXpert – Advanced Foot Clinic, Custom Insoles & Mobility Solutions"}
        </h1>
        <p className="text-lg md:text-xl text-emerald-600 font-semibold">
          {data?.tagline || "Helping Kolkata Walk with Comfort, Confidence and Care."}
        </p>
      </div>
    </section>
  );
}
