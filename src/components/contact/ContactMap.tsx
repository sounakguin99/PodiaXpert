export default function ContactMap() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
      <div className="w-full h-[400px] md:h-[500px] relative rounded-3xl overflow-hidden shadow-lg border border-gray-100">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3685.7220085355384!2d88.3967749!3d22.5146109!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02713664ad543b%3A0xe6dcd7e80beeb1a5!2sPodiaXpert%20-%20Advanced%20Foot%20Clinic%2C%20Custom%20Insoles%20%26%20Mobility%20Solutions!5e0!3m2!1sen!2sin!4v1783047451074!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
        ></iframe>
      </div>
    </div>
  );
}
