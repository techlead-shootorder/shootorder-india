"use client";

import { useState } from "react";
import Image from "next/image";

const images = [
  { id: 1, src: "/images/Gallery-images/life-1.webp", alt: "Office Life 1" },
  { id: 2, src: "/images/Gallery-images/life-2.webp", alt: "Office Life 2" },
  { id: 3, src: "/images/Gallery-images/life-3.webp", alt: "Office Life 3" },
  { id: 4, src: "/images/Gallery-images/life-4.webp", alt: "Office Life 4" },
  { id: 5, src: "/images/Gallery-images/life-5.webp", alt: "Office Life 4" },
  { id: 6, src: "/images/Gallery-images/life-6.webp", alt: "Office Life 4" },
  { id: 7, src: "/images/Gallery-images/life-7.webp", alt: "Office Life 4" },
  { id: 8, src: "/images/Gallery-images/life-8.webp", alt: "Office Life 4" },
  { id: 9, src: "/images/Gallery-images/life-9.webp", alt: "Office Life 4" },
  { id: 10, src: "/images/Gallery-images/life-10.webp", alt: "Office Life 4" }
];

export default function LifeGallerySlider() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  return (
    <div className="relative w-full h-[420px] overflow-hidden rounded-2xl shadow-lg">
      {/* Slides */}
      <div
        className="flex h-full transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((img) => (
          <div key={img.id} className="relative min-w-full h-full">
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover"
              priority={img.id === 1}
            />
          </div>
        ))}
      </div>

      {/* Controls */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-black transition"
      >
        ❮
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-black transition"
      >
        ❯
      </button>
    </div>
  );
}
