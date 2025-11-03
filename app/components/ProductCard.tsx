"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

interface ProductCardProps {
  title: string;
  description: string;
  imageUrl: string;
}

export default function ProductCard({
  title,
  description,
  imageUrl,
}: ProductCardProps) {
  const router = useRouter();

  const handleInquireClick = () => {
    // Store product name in sessionStorage
    sessionStorage.setItem("selectedProduct", title);
    // Navigate to contact page
    router.push("/contact");
  };

  return (
    <div className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col h-full">
      <div className="relative w-full h-64 overflow-hidden">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-yellow-600 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-grow">
          {description}
        </p>
        <button
          onClick={handleInquireClick}
          className="w-full py-3 bg-yellow-500 text-black font-semibold rounded-lg hover:bg-yellow-600 transform hover:scale-105 transition-all duration-200 shadow-md hover:shadow-lg mt-auto"
        >
          Inquire Now
        </button>
      </div>
    </div>
  );
}