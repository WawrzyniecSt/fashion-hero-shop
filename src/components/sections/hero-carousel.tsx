"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";

const slides = [
  {
    subtitle: "All New Dasher NZ Collection",
    title: "Wildly Comfortable. Super Natural.",
    image: "/images/allbirds/hero-dasher-nz.jpg",
    ctaLinks: [
      { label: "Shop Men", href: "/collections/mens" },
      { label: "Shop Women", href: "/collections/womens" },
    ],
  },
  {
    subtitle: "All New Dasher NZ Collection",
    title: "Wildly Comfortable. Super Natural.",
    image: "/images/allbirds/hero-dasher-nz-2.jpg",
    ctaLinks: [
      { label: "Shop Men", href: "/collections/mens" },
      { label: "Shop Women", href: "/collections/womens" },
    ],
  },
];

export function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [playing, setPlaying] = useState(true);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  useEffect(() => {
    if (!playing) return;
    const id = setInterval(next, 5000);
    return () => clearInterval(id);
  }, [playing, next]);

  const slide = slides[current];

  return (
    <section className="relative w-full overflow-hidden bg-black">
      <div className="relative w-full" style={{ aspectRatio: "16 / 7" }}>
        <Image
          src={slide.image}
          alt={slide.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/25" />
      </div>

      <div className="absolute inset-0 flex flex-col justify-end px-8 md:px-16 lg:px-24 pb-12 md:pb-20">
        <p className="text-[11px] font-medium uppercase tracking-[0.8px] text-white/70 mb-3">
          {slide.subtitle}
        </p>
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-normal text-white mb-8 leading-tight tracking-[-0.01em]">
          {slide.title}
        </h1>
        <div className="flex gap-3">
          {slide.ctaLinks.map((link) => (
            <Link
              key={link.href + link.label}
              href={link.href}
              className="inline-flex items-center justify-center px-6 py-2.5 text-[12px] font-medium uppercase tracking-[0.6px] text-white border border-white rounded-full hover:bg-white hover:text-[#1a1a1a] transition-all duration-200"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2 h-2 rounded-full transition-colors ${
              i === current ? "bg-white" : "bg-white/40"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
        <button
          onClick={() => setPlaying((p) => !p)}
          className="ml-2 text-white/60 hover:text-white text-xs"
          aria-label={playing ? "Pause" : "Play"}
        >
          {playing ? "❚❚" : "▶"}
        </button>
      </div>
    </section>
  );
}
