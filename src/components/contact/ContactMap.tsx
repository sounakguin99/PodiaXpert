export default function ContactMap() {
  return (
    <div className="w-full h-[400px] md:h-[500px] relative">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1m3!1d117925.33439927702!2d88.34735275!3d22.5354064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02771346ae015d%3A0xb51bcbd5755106fb!2sSector%20V%2C%20Bidhannagar%2C%20Kolkata%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="grayscale opacity-90 contrast-125"
      ></iframe>
    </div>
  );
}
