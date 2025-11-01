// components/AboutPreview.tsx

import Link from "next/link";

export default function AboutPreview() {
  return (
    <section className="py-20 px-6 md:px-20 bg-white text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          Quality Packaging Since 2000
        </h2>
        <p className="text-gray-700 text-lg md:text-xl leading-relaxed font-light mb-8">
          Bhagwati Packing specializes in high-quality wooden packaging solutions including pallet collars, crates, pinewood boxes, and pallets. With over 20 years of expertise, we serve diverse industries with reliable, export-grade products.
        </p>
        <Link href="/about">
          <button className="px-8 py-4 bg-yellow-500 text-black font-semibold rounded-lg shadow-lg hover:bg-yellow-600 transform hover:scale-105 transition-all duration-200">
            Learn More About Us →
          </button>
        </Link>
      </div>
    </section>
  );
}