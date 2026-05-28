import Link from "next/link";
import Image from "next/image";

const categories = [
  {
    title: "New Arrivals",
    image: "/images/allbirds/category-new-arrivals.jpg",
    links: [
      { label: "Shop Men", href: "/collections/mens" },
      { label: "Shop Women", href: "/collections/womens" },
    ],
  },
  {
    title: "Mens",
    image: "/images/allbirds/category-mens.jpg",
    links: [{ label: "Shop Men", href: "/collections/mens" }],
  },
  {
    title: "Womens",
    image: "/images/allbirds/category-womens.jpg",
    links: [{ label: "Shop Women", href: "/collections/womens" }],
  },
  {
    title: "Best Sellers",
    image: "/images/allbirds/category-bestsellers.jpg",
    links: [
      { label: "Shop Men", href: "/collections/mens" },
      { label: "Shop Woman", href: "/collections/womens" },
    ],
  },
];

export function CategoryRow() {
  return (
    <section className="px-0 md:px-0 lg:px-0 py-0">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-0">
        {categories.map((cat) => (
          <div
            key={cat.title}
            className="relative flex flex-col items-center justify-end overflow-hidden group"
            style={{ aspectRatio: "2 / 3" }}
          >
            <Image
              src={cat.image}
              alt={cat.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />
            <div className="relative z-10 text-center pb-6 md:pb-10 px-3">
              <h3 className="text-lg md:text-xl font-normal text-white mb-3 tracking-wide">
                {cat.title}
              </h3>
              <div className="flex gap-2 justify-center flex-wrap">
                {cat.links.map((link) => (
                  <Link
                    key={link.href + link.label}
                    href={link.href}
                    className="inline-flex items-center justify-center px-4 py-1.5 text-[10px] md:text-[11px] font-medium uppercase tracking-[0.6px] text-white border border-white rounded-full hover:bg-white hover:text-[#1a1a1a] transition-all duration-200"
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
