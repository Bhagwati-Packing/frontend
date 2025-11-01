import AboutHero from "../components/AboutHero";
import AboutSection from "../components/AboutSection";
import Image from "next/image";

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      
      {/* Section 1: Text on left, no image */}
      <AboutSection
        title="Our Story"
        content="Founded in 2000, Bhagwati Packing is a trusted name in the packaging industry, specializing in the manufacturing of high-quality pallet collars, pinewood boxes, pallets, crates, and all types of export packaging materials."
      />
      
      {/* Section 2: Image on right, text on left */}
      <section className="py-16 px-6 md:px-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
            <div className="md:w-1/2">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight">
                Experience & Expertise
              </h2>
              <p className="text-gray-700 text-lg md:text-xl leading-relaxed font-light">
                With over two decades of experience, we have built a strong reputation for delivering durable, reliable, and customized packaging solutions that meet international standards. Our products cater to diverse sectors, including industrial manufacturing, automotive, pharmaceuticals, food and beverages, logistics, and more.
              </p>
            </div>
            <div className="md:w-1/2">
              <div className="relative h-64 md:h-96 w-full">
                <Image 
                  src="/image/about.jpg" 
                  alt="Experience & Expertise" 
                  fill
                  className="object-cover rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-300" 
                  quality={90}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Section 3: Image on left, text on right */}
      <section className="py-16 px-6 md:px-20 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row-reverse items-center gap-12 md:gap-16">
            <div className="md:w-1/2">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight">
                Our Commitment
              </h2>
              <p className="text-gray-700 text-lg md:text-xl leading-relaxed font-light">
                At Bhagwati Packing, our commitment to quality, innovation, and customer satisfaction drives everything we do — ensuring that every shipment we deliver adds value, protection, and efficiency to our clients' supply chains.
              </p>
            </div>
            <div className="md:w-1/2">
              <div className="relative h-64 md:h-96 w-full">
                <Image 
                  src="/image/about2.jpg" 
                  alt="Our Commitment" 
                  fill
                  className="object-cover rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-300" 
                  quality={90}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}