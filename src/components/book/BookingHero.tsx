export default function BookingHero({ data }: { data?: any }) {
  return (
    <section className="bg-slate-50 pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
          {data?.heading || "Book an Appointment"}
        </h1>
        <h2 className="text-2xl md:text-3xl text-gray-800 font-semibold mb-6">
          {data?.subheading || "Take the First Step Towards Better Foot Health"}
        </h2>
        <p className="text-lg md:text-xl text-gray-600 font-medium max-w-3xl mx-auto leading-relaxed">
          {data?.description || "Experiencing heel pain, foot discomfort, flat feet, diabetic foot problems or difficulty while walking? Our specialists at PodiaXpert are here to help. Book an appointment for a comprehensive foot assessment and personalised care tailored to your needs."}
        </p>
      </div>
    </section>
  );
}
