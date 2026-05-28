import Link from "next/link";
import Image from "next/image";

const spotlights = [
  {
    image: "/images/allbirds/feature-varsity-airy-w.jpg",
    label: "NATURALLY EASY",
    name: "Women's Varsity Airy",
    price: "$120",
    color: "Auburn",
    tagline: "Classic sport style, reimagined to feel lighter, cooler, and wildly comfortable. A total breeze from the first step.",
    href: "/collections/womens",
  },
  {
    image: "/images/allbirds/feature-varsity-airy-m.jpg",
    label: "LIGHT ON YOUR FEET",
    name: "Men's Varsity Airy",
    price: "$120",
    color: "Mid Yellow",
    tagline: "Breathable tree-fiber uppers keep things cool and easy—because your new everyday MVP is made to move.",
    href: "/collections/mens",
  },
];

export function FeatureStory() {
  return (
    <section className="py-12 md:py-16">
      <h2 className="text-2xl md:text-4xl font-normal text-[#1a1a1a] text-center mb-8 md:mb-12 tracking-[-0.01em]">
        Your Easy, Breezy MVP
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
        {spotlights.map((item) => (
          <div
            key={item.name}
            className="relative overflow-hidden group"
            style={{ aspectRatio: "2 / 3" }}
          >
            <Image
              src={item.image}
              alt={item.name}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 z-10">
              <p className="text-[10px] font-semibold uppercase tracking-[1px] text-white/70 mb-2">
                {item.label}
              </p>
              <h3 className="text-xl md:text-2xl font-normal text-white mb-1">{item.name}</h3>
              <p className="text-sm text-white mb-4">{item.price} — {item.color}</p>
              <p className="text-sm text-white/80 mb-6 max-w-xs leading-relaxed">{item.tagline}</p>
              <Link
                href={item.href}
                className="inline-flex items-center justify-center px-6 py-2.5 text-[11px] font-semibold uppercase tracking-[0.8px] text-[#1a1a1a] bg-white rounded-full hover:bg-white/90 transition-all duration-200"
              >
                Shop Now
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
