"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const largeProducts = [
  {
    name: "Canvas Cruiser",
    color: "Burnt Olive (Natural White Sole)",
    price: "$75",
    image: "/images/allbirds/prod-cruiser-canvas-olive.png",
    links: [
      { label: "Shop Men", href: "/collections/mens" },
      { label: "Shop Women", href: "/collections/womens" },
    ],
  },
  {
    name: "Cruiser Slip On Canvas",
    color: "Deep Navy Stripes (Blizzard Sole)",
    price: "$75",
    image: "/images/allbirds/prod-cruiser-slip-navy.png",
    links: [],
  },
  {
    name: "Dasher NZ",
    color: "Seagrass (Parchment Sole)",
    price: "$135",
    image: "/images/allbirds/prod-dasher-nz-seagrass.png",
    links: [],
  },
  {
    name: "Canvas Cruiser",
    color: "Auburn (Warm White Sole)",
    price: "$75",
    image: "/images/allbirds/prod-cruiser-canvas-auburn.png",
    links: [],
  },
  {
    name: "Cruiser Jersey",
    color: "Light Grey/Anthracite (Blizzard Sole)",
    price: "$110",
    image: "/images/allbirds/prod-cruiser-jersey.png",
    links: [],
  },
  {
    name: "Canvas Cruiser",
    color: "Chestnut (Natural White Sole)",
    price: "$75",
    image: "/images/allbirds/prod-cruiser-canvas-chestnut.png",
    links: [],
  },
  {
    name: "Allbirds Flip Flop",
    color: "Mid Yellow",
    price: "$35",
    image: "/images/allbirds/prod-flip-flop-yellow.png",
    links: [],
  },
  {
    name: "Dasher NZ Relay",
    color: "Seagrass (Parchment Sole)",
    price: "$145",
    image: "/images/allbirds/prod-dasher-nz-relay.png",
    links: [],
  },
  {
    name: "Varsity Jersey",
    color: "Light Grey/Syrah (Blizzard Sole)",
    price: "$100",
    image: "/images/allbirds/prod-varsity-jersey.png",
    links: [],
  },
  {
    name: "Breezer Mary Jane",
    color: "Dusty Pink (Dusty Pink Sole)",
    price: "$115",
    image: "/images/allbirds/prod-breezer-mary-jane.png",
    links: [],
  },
];

const smallProducts = [
  {
    name: "Canvas Runner NZ",
    color: "Deep Navy Stripes",
    price: "$100",
    image: "/images/allbirds/prod-runner-nz-canvas.png",
    badge: "New Color",
  },
  {
    name: "Tree Glider",
    color: "Burlwood",
    price: "$140",
    image: "/images/allbirds/prod-tree-glider.png",
    badge: "New Color",
  },
  {
    name: "Canvas Cruiser",
    color: "Sea Spray",
    price: "$75",
    image: "/images/allbirds/prod-cruiser-sea-spray.png",
    badge: null,
  },
  {
    name: "Breezer Mary Jane",
    color: "Dusty Pink",
    price: "$115",
    image: "/images/allbirds/prod-breezer-mary-jane.png",
    badge: "New Color",
  },
  {
    name: "Dasher NZ",
    color: "Seagrass",
    price: "$135",
    image: "/images/allbirds/prod-dasher-nz-seagrass.png",
    badge: "New Color",
  },
  {
    name: "Cruiser Slip On Terry",
    color: "Ochre/Warm White",
    price: "$110",
    image: "/images/allbirds/prod-cruiser-slip-terry.png",
    badge: "NEW",
  },
  {
    name: "Canvas Cruiser",
    color: "Stormy Lilac",
    price: "$75",
    image: "/images/allbirds/prod-cruiser-stormy-lilac.png",
    badge: null,
  },
];

function ProductScrollCarousel({
  items,
  large = false,
}: {
  items: typeof largeProducts | typeof smallProducts;
  large?: boolean;
}) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -400 : 400,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative group/carousel">
      <button
        onClick={() => scroll("left")}
        className="absolute left-2 top-1/3 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md opacity-0 group-hover/carousel:opacity-100 transition-opacity hidden md:flex"
        aria-label="Scroll left"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>

      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth px-4 md:px-8 lg:px-16"
      >
        {items.map((product, i) => (
          <Link
            key={product.name + i}
            href="/collections/all"
            className={`flex-shrink-0 group ${large ? "min-w-[280px] md:min-w-[340px]" : "min-w-[200px] md:min-w-[240px]"}`}
          >
            <div className={`relative overflow-hidden bg-[#f5f4f1] ${large ? "aspect-square" : "aspect-square"}`}>
              <Image
                src={product.image}
                alt={`${product.name} - ${product.color}`}
                fill
                className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
              />
              {"badge" in product && product.badge && (
                <span className="absolute top-3 left-3 bg-[#1a1a1a] text-white text-[9px] font-semibold uppercase tracking-[0.8px] px-2 py-1">
                  {product.badge}
                </span>
              )}
            </div>
            <div className="pt-3">
              <h4 className={`font-normal text-[#1a1a1a] ${large ? "text-sm" : "text-sm"}`}>
                {product.name}
              </h4>
              <p className="text-xs text-[#6b6b6b] mt-0.5">{product.color}</p>
              <p className="text-sm font-normal text-[#1a1a1a] mt-1">{product.price}</p>
            </div>
          </Link>
        ))}
      </div>

      <button
        onClick={() => scroll("right")}
        className="absolute right-2 top-1/3 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md opacity-0 group-hover/carousel:opacity-100 transition-opacity hidden md:flex"
        aria-label="Scroll right"
      >
        <ChevronRight className="h-5 w-5" />
      </button>
    </div>
  );
}

export function ProductCarousel() {
  return (
    <section className="py-12 md:py-16">
      <div className="px-4 md:px-8 lg:px-16 mb-6">
        <p className="text-[11px] font-medium uppercase tracking-[0.8px] text-[#6b6b6b] mb-1">
          New Arrivals
        </p>
      </div>

      <ProductScrollCarousel items={largeProducts} large />

      <div className="px-4 md:px-8 lg:px-16 mt-6 flex items-center justify-between">
        <div>
          <h3 className="text-lg md:text-xl font-normal text-[#1a1a1a]">
            Canvas Cruiser
          </h3>
          <p className="text-sm text-[#6b6b6b]">
            Burnt Olive (Natural White Sole) — $75
          </p>
        </div>
        <div className="flex gap-3">
          <Link
            href="/collections/mens"
            className="text-[11px] font-medium uppercase tracking-[0.6px] text-[#1a1a1a] underline underline-offset-4 hover:opacity-60"
          >
            Shop Men
          </Link>
          <Link
            href="/collections/womens"
            className="text-[11px] font-medium uppercase tracking-[0.6px] text-[#1a1a1a] underline underline-offset-4 hover:opacity-60"
          >
            Shop Women
          </Link>
        </div>
      </div>

      <div className="mt-16 px-4 md:px-8 lg:px-16 mb-6">
        <p className="text-[11px] font-medium uppercase tracking-[0.8px] text-[#6b6b6b] mb-1">
          New Arrivals
        </p>
      </div>

      <ProductScrollCarousel items={smallProducts} />
    </section>
  );
}
