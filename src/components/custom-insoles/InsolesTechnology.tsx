import Image from 'next/image';

const layers = [
  {
    title: "1. Premium Top Layer",
    description: "Anti-microbial, sweat-wicking fabric that keeps your feet dry and odor-free throughout the day."
  },
  {
    title: "2. Comfort Cushioning",
    description: "High-density medical-grade foam that absorbs shock and provides immediate comfort."
  },
  {
    title: "3. 3D Printed Semi-Rigid Shell",
    description: "The core of our technology. Precisely engineered 3D printed nylon shell that matches your unique arch height."
  },
  {
    title: "4. Stabilization Base",
    description: "Ensures the insole remains perfectly positioned within your shoe while providing lateral stability."
  }
];

export default function InsolesTechnology() {
  return (
    <section className="py-24 bg-[#111827] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative h-[400px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl">
            <Image 
              src="https://images.unsplash.com/photo-1562183241-b937e95585b6?auto=format&fit=crop&q=80&w=800"
              alt="3D Printed Insole Technology"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-8">
              <h3 className="text-2xl font-bold mb-2">Multilayer Engineering</h3>
              <p className="text-gray-300 text-sm">Every layer is designed for a specific biomechanical purpose.</p>
            </div>
          </div>
          
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Built with Precision 3D Technology
            </h2>
            <div className="space-y-10">
              {layers.map((layer, index) => (
                <div key={index} className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center font-bold text-xl">
                    {index + 1}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">{layer.title}</h4>
                    <p className="text-gray-400 leading-relaxed">
                      {layer.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
