// components/Hero.tsx
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const images = [
  "/image/hero1.jpg",
  "/image/hero2.jpg",
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length),
      5000
    );
    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="relative h-[90vh] w-full overflow-hidden bg-gray-900">
      {/* Background Images */}
      <div className="absolute inset-0">
        {images.map((img, idx) => (
          <div
            key={img}
            className={`absolute inset-0 transition-all duration-700 ease-in-out ${
              idx === currentIndex 
                ? "opacity-100 scale-100" 
                : "opacity-0 scale-105"
            }`}
          >
            <Image 
              src={img} 
              alt={`Hero slide ${idx + 1}`}
              fill 
              className="object-cover"
              priority={idx === 0}
              quality={90}
            />
          </div>
        ))}
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            BHAGWATI PACKING
          </h1>
          <p className="text-xl md:text-3xl text-gray-200 mb-8 font-light">
            Total Packaging Solution
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/products">
              <button className="px-8 py-4 bg-yellow-500 text-black font-semibold rounded-lg shadow-lg hover:bg-yellow-600 transform hover:scale-105 transition-all duration-200">
                Explore Products
              </button>
            </Link>
            <Link href="/contact">
              <button className="px-8 py-4 border-2 border-yellow-500 text-yellow-500 font-semibold rounded-lg hover:bg-yellow-500 hover:text-black transform hover:scale-105 transition-all duration-200">
                Request a Quote
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full backdrop-blur-sm transition-all duration-200"
        aria-label="Previous slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full backdrop-blur-sm transition-all duration-200"
        aria-label="Next slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goToSlide(idx)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              idx === currentIndex 
                ? "bg-yellow-500 scale-125" 
                : "bg-white/50 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}