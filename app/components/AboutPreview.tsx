// components/AboutPreview.tsx

import Link from "next/link";

export default function AboutPreview() {
  return (
    <section className="py-16 px-6 md:px-20 bg-white text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">Quality Packaging Since 2000</h2>
      <p className="text-gray-600 max-w-3xl mx-auto mb-6">
        Bhagwati Packing specializes in high-quality wooden packaging solutions including pallet collars, crates, pinewood boxes, and pallets. With over 20 years of expertise, we serve diverse industries with reliable, export-grade products.
      </p>
      <Link href="/about">
        <button className="text-yellow-600 font-medium hover:underline">Learn More About Us →</button>
      </Link>
    </section>
  );
}