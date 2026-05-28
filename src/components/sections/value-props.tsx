const props = [
  {
    title: "Wear All Day Comfort",
    description:
      "Lightweight, bouncy, and wildly comfortable, Allbirds shoes make any outing feel effortless. Slip in, lace up, or slide them on and enjoy the comfy support.",
  },
  {
    title: "Sustainability In Every Step",
    description:
      "From materials to transport, we're working to reduce our carbon footprint to near zero. Holding ourselves accountable and striving for climate goals isn't a 30-year goal—it's now.",
  },
  {
    title: "Materials From The Earth",
    description:
      "We replace petroleum-based synthetics with natural alternatives wherever we can. Like using wool, tree fiber, and sugarcane. They're soft, breathable, and better for the planet—win, win, win.",
  },
];

export function ValueProps() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto text-center px-6">
        {props.map((prop) => (
          <div key={prop.title}>
            <h3 className="text-base md:text-lg font-normal text-[#1a1a1a] mb-3">{prop.title}</h3>
            <p className="text-sm text-[#6b6b6b] leading-relaxed">{prop.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
