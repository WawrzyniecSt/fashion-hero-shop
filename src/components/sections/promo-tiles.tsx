import Link from "next/link";
import Image from "next/image";

const promos = [
  {
    title: "Spring Travel Essentials",
    image: "/images/allbirds/promo-spring-travel.jpg",
    links: [
      { label: "Shop Men", href: "/collections/mens" },
      { label: "Shop Women", href: "/collections/womens" },
    ],
  },
  {
    title: "New Arrivals",
    image: "/images/allbirds/promo-new-arrivals.jpg",
    links: [
      { label: "Shop Men", href: "/collections/mens" },
      { label: "Shop Woman", href: "/collections/womens" },
    ],
  },
  {
    title: "Fresh Colors For Spring",
    image: "/images/allbirds/promo-fresh-colors.jpg",
    links: [
      { label: "Shop Men", href: "/collections/mens" },
      { label: "Shop Woman", href: "/collections/womens" },
    ],
  },
];

export function PromoTiles() {
  return (
    <section className="py-12 md:py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
        {promos.map((promo) => (
          <div
            key={promo.title}
            className="relative overflow-hidden group"
            style={{ aspectRatio: "9 / 16" }}
          >
            <Image
              src={promo.image}
              alt={promo.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/25 group-hover:bg-black/35 transition-colors duration-300" />

            <div className="absolute bottom-0 left-0 right-0 p-8 z-10 text-center">
              <h3 className="text-lg md:text-xl font-normal text-white mb-4 tracking-wide">
                {promo.title}
              </h3>
              <div className="flex gap-3 justify-center flex-wrap">
                {promo.links.map((link, i) => (
                  <Link
                    key={i}
                    href={link.href}
                    className="inline-flex items-center justify-center px-5 py-2 text-[11px] font-medium uppercase tracking-[0.6px] text-white border border-white rounded-full hover:bg-white hover:text-[#1a1a1a] transition-all duration-200"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
