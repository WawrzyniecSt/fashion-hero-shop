export type Plan = {
  id: "starter" | "growth" | "scale";
  name: string;
  price: number;
  tagline: string;
  features: string[];
  highlighted?: boolean;
};

export const PLANS: Plan[] = [
  {
    id: "starter",
    name: "Starter",
    price: 499,
    tagline: "Pierwsze insighty o klientach.",
    features: [
      "Heatmapa stron produktowych",
      "Ścieżka klienta (ostatnie 30 dni)",
      "Top 5 przyczyn zwrotów",
    ],
  },
  {
    id: "growth",
    name: "Growth",
    price: 999,
    tagline: "Zrozum zachowanie i segmentuj.",
    highlighted: true,
    features: [
      "Wszystko ze Starter",
      "Nagrania sesji użytkowników",
      "Segmentacja klientów",
      "Alerty o nagłym wzroście zwrotów",
    ],
  },
  {
    id: "scale",
    name: "Scale",
    price: 1999,
    tagline: "Predykcja i pełna integracja.",
    features: [
      "Wszystko z Growth",
      "Predykcja zwrotów (AI)",
      "Export danych przez API",
      "1× konsultacja z analitykiem / mies.",
    ],
  },
];

export const getPlan = (id: string) => PLANS.find((p) => p.id === id);
