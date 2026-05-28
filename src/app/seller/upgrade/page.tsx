"use client"

import Link from "next/link"
import { SellerHeader } from "@/components/seller-header"
import { PLANS } from "@/lib/seller-plans"
import { LESSONS } from "@/lib/seller-lessons"
import { Check, BarChart3, MousePointerClick, Video, TrendingUp, Users, Eye, Play, ArrowRight } from "lucide-react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export default function UpgradePage() {
  return (
    <>
      <SellerHeader />

      {/* Hero */}
      <section className="border-b border-border bg-cream">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-2 md:items-center md:py-28">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Premium Analytics — dla Sellerów
            </p>
            <h1 className="mt-6 text-5xl font-semibold leading-[1.05] md:text-6xl">
              Zobacz co robią klienci na Twojej stronie.
            </h1>
            <p className="mt-6 max-w-md text-lg text-muted-foreground">
              Korzystaj ze specjalnego panelu dla Sellerów, aby odkryć gdzie Twoja oferta ma
              potencjał na rozwój.
            </p>
            <a
              href="#plans"
              className="mt-8 inline-block bg-primary px-8 py-4 text-xs font-semibold uppercase tracking-wider text-primary-foreground hover:opacity-90"
            >
              Wybierz plan
            </a>
          </div>
          <div className="border border-border bg-white shadow-sm">
            <img
              src="/images/seller/dashboard-preview.jpg"
              alt="Podgląd panelu analitycznego Allbirds"
              width={1600}
              height={1024}
              className="h-auto w-full"
            />
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="mb-12 max-w-2xl text-center mx-auto">
          <h2 className="text-3xl font-semibold md:text-4xl">Co zobaczysz w panelu analitycznym?</h2>
          <p className="mt-3 text-muted-foreground">
            Narzędzia, które pomogą Ci zrozumieć zachowanie klientów i zwiększyć sprzedaż.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              icon: MousePointerClick,
              title: "Heatmapy kliknięć",
              desc: "Wizualizacja, gdzie użytkownicy klikają najczęściej. Zoptymalizuj układ produktów.",
            },
            {
              icon: Video,
              title: "Nagrania sesji",
              desc: "Odtwarzaj sesje klientów, aby zobaczyć jak poruszają się po sklepie.",
            },
            {
              icon: TrendingUp,
              title: "Predykcja zwrotów",
              desc: "Algorytm wskazuje produkty z najwyższym ryzykiem zwrotu.",
            },
            {
              icon: BarChart3,
              title: "Porównuj ceny",
              desc: "Dostosowuj ceny swoich produktów do tego co proponuje konkurencja",
            },
            {
              icon: Users,
              title: "Segmentacja klientów",
              desc: "Grupuj klientów według zachowań, lokalizacji i wartości koszyka.",
            },
            {
              icon: Eye,
              title: "Raporty w czasie rzeczywistym",
              desc: "Aktualne dane o ruchu, przychodach i najpopularniejszych produktach.",
            },
          ].map((feature) => (
            <div
              key={feature.title}
              className="border border-border bg-white p-8 transition hover:border-primary/40 hover:shadow-sm"
            >
              <feature.icon className="h-8 w-8 text-primary" />
              <h3 className="mt-5 text-lg font-semibold">{feature.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>

        {/* Quick guide lessons carousel */}
        <div className="mt-20">
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                Quick guide lessons
              </p>
              <h3 className="mt-3 text-2xl font-semibold md:text-3xl">
                Zobacz jak działa panel
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Krótkie nagrania pokazujące krok po kroku, co możesz ustawić i przeanalizować.
              </p>
            </div>
            <Link
              href="/seller/lessons"
              className="inline-flex items-center gap-2 self-start text-xs font-semibold uppercase tracking-wider text-primary hover:opacity-80 sm:self-end"
            >
              Zobacz wszystkie
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <Carousel opts={{ align: "start" }} className="w-full">
            <CarouselContent className="-ml-4">
              {LESSONS.map((lesson) => (
                <CarouselItem
                  key={lesson.id}
                  className="pl-4 sm:basis-1/2 lg:basis-1/3"
                >
                  <div className="group flex h-full flex-col border border-border bg-white transition hover:border-primary/40 hover:shadow-sm">
                    <div className="relative aspect-video overflow-hidden bg-muted">
                      <img
                        src={lesson.thumbnail}
                        alt={lesson.title}
                        width={800}
                        height={512}
                        loading="lazy"
                        className="h-full w-full object-cover transition group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/90 shadow-md transition group-hover:scale-110">
                          <Play className="h-6 w-6 translate-x-0.5 fill-primary text-primary" />
                        </div>
                      </div>
                      <div className="absolute bottom-3 right-3 bg-white/90 px-2 py-1 text-[11px] font-medium tabular-nums">
                        {lesson.duration}
                      </div>
                      <div className="absolute left-3 top-3 bg-primary px-2 py-1 text-[10px] font-semibold uppercase tracking-wider text-primary-foreground">
                        {lesson.category}
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <h4 className="text-base font-semibold">{lesson.title}</h4>
                      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                        {lesson.description}
                      </p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
      </section>

      {/* Impact */}
      <section className="border-t border-border bg-cream">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-[40px] pb-0">
          <div className="mb-12 max-w-2xl text-center mx-auto">
            <h2 className="text-3xl font-semibold md:text-4xl">Analityka, która zwiększa sprzedaż</h2>
            <p className="mt-3 text-muted-foreground">
              Sprzedawcy korzystający z naszego panelu odnotowują realne wyniki. Oto przykłady.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                metric: "+34%",
                label: "wyższa konwersja",
                story: "Sklep 'ModaMęska' zidentyfikował przez heatmapę, że 40% użytkowników klika w nieaktywny przycisk filtra. Po naprawie konwersja wzrosła o 34% w ciągu miesiąca.",
              },
              {
                metric: "-28%",
                label: "mniej zwrotów",
                story: "Sprzedawca 'UrbanStyle' użył predykcji zwrotów, aby oznaczyć produkty z najwyższym ryzykiem. Dzięki lepszemu opisowi i zdjęciom zmniejszył zwroty o 28%.",
              },
              {
                metric: "+52%",
                label: "większy koszyk",
                story: "Butik 'Lorenza' dzięki segmentacji klientów przygotował spersonalizowane rekomendacje. Średnia wartość koszyka wzrosła o 52% w kwartale.",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="border border-border bg-white p-8 text-center transition hover:border-primary/40 hover:shadow-sm"
              >
                <div className="text-5xl font-semibold text-primary">{item.metric}</div>
                <div className="mt-2 text-sm font-medium uppercase tracking-wider text-muted-foreground">{item.label}</div>
                <p className="mt-5 text-sm text-muted-foreground leading-relaxed">{item.story}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:py-28 pt-0 pb-0">
        <div className="mb-12 max-w-2xl text-center mx-auto">
          <h2 className="text-3xl font-semibold md:text-4xl">Co mówią sprzedawcy?</h2>
          <p className="mt-3 text-muted-foreground">
            Dołącz do tysięcy sellerów, którzy rozwijają swoje sklepy dzięki analityce.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              photo: "/images/seller/seller-1.jpg",
              name: "Marek Kowalski",
              store: "ModaMęska.pl",
              quote: "Dzięki heatmapom odkryliśmy, że filtr rozmiarów nie działał na mobile. Po naprawie konwersja wzrosła o 34%. To było jak znalezienie ukrytego przełącznika.",
              result: "+34% konwersji",
            },
            {
              photo: "/images/seller/seller-2.jpg",
              name: "Anna Nowak",
              store: "UrbanStyle",
              quote: "Predykcja zwrotów kompletnie zmieniła nasze podejście. Wiemy teraz, które produkty wymagają lepszego opisu. Zwroty spadły o 28% w dwa miesiące.",
              result: "-28% zwrotów",
            },
            {
              photo: "/images/seller/seller-3.jpg",
              name: "Piotr Zieliński",
              store: "Butik Lorenza",
              quote: "Segmentacja klientów pozwoliła nam tworzyć spersonalizowane oferty. Średni koszyk wzrósł o 52%, a klienci wracają częściej.",
              result: "+52% wartości koszyka",
            },
          ].map((t) => (
            <div
              key={t.name}
              className="flex flex-col border border-border bg-white p-8 transition hover:border-primary/40 hover:shadow-sm"
            >
              <div className="flex items-center gap-4">
                <img
                  src={t.photo}
                  alt={t.name}
                  width={56}
                  height={56}
                  loading="lazy"
                  className="h-14 w-14 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold">{t.name}</div>
                  <div className="text-sm text-muted-foreground">{t.store}</div>
                </div>
              </div>
              <p className="mt-5 flex-1 text-sm leading-relaxed text-muted-foreground">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-6 inline-block self-start bg-primary/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
                {t.result}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Plans */}
      <section id="plans" className="mx-auto max-w-7xl px-6 py-20 md:py-28 pt-0">
        <div className="mb-12 max-w-2xl text-center mx-auto">
          <h2 className="text-3xl font-semibold md:text-4xl">Wybierz swój plan</h2>
          <p className="mt-3 text-muted-foreground">
            Trzy poziomy. Zacznij od podstaw, skaluj kiedy potrzebujesz więcej.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {PLANS.map((plan) => (
            <div
              key={plan.id}
              className={`flex flex-col border p-8 ${
                plan.highlighted
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-white"
              }`}
            >
              {plan.highlighted && (
                <span className="mb-4 inline-block self-start bg-primary-foreground px-2 py-1 text-[10px] font-semibold uppercase tracking-wider text-primary">
                  Najpopularniejszy
                </span>
              )}
              <h3 className="text-2xl font-semibold">{plan.name}</h3>
              <p
                className={`mt-1 text-sm ${
                  plan.highlighted ? "opacity-80" : "text-muted-foreground"
                }`}
              >
                {plan.tagline}
              </p>
              <div className="mt-6 flex items-baseline gap-1">
                <span className="text-4xl font-semibold">{plan.price}</span>
                <span className="text-sm">PLN / mies.</span>
              </div>

              <ul className="mt-8 flex-1 space-y-3 text-sm">
                {plan.features.map((f) => (
                  <li key={f} className="flex gap-3">
                    <Check className="mt-0.5 h-4 w-4 shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <Link
                href={`/seller/success?plan=${plan.id}`}
                className={`mt-8 inline-block px-6 py-3 text-center text-xs font-semibold uppercase tracking-wider transition ${
                  plan.highlighted
                    ? "bg-primary-foreground text-primary hover:opacity-90"
                    : "bg-primary text-primary-foreground hover:opacity-90"
                }`}
              >
                Wybierz {plan.name}
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-10 text-xs text-muted-foreground md:flex-row">
          <span>&copy; Allbirds Analytics</span>
          <Link href="/seller" className="hover:text-foreground">Wróć do panelu</Link>
        </div>
      </footer>
    </>
  )
}
