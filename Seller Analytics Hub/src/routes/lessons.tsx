import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { LESSONS } from "@/lib/lessons";
import { Play } from "lucide-react";

export const Route = createFileRoute("/lessons")({
  head: () => ({
    meta: [
      { title: "Quick guide lessons — FashionHero Analytics" },
      {
        name: "description",
        content:
          "Wszystkie nagrania pokazujące jak skonfigurować i korzystać z panelu Premium Analytics.",
      },
      { property: "og:title", content: "Quick guide lessons — FashionHero" },
      {
        property: "og:description",
        content: "Biblioteka krótkich nagrań o panelu analitycznym dla Sellerów.",
      },
    ],
  }),
  component: LessonsPage,
});

function LessonsPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <section className="border-b border-border bg-cream">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            Quick guide lessons
          </p>
          <h1 className="mt-4 text-4xl font-semibold leading-[1.05] md:text-5xl">
            Naucz się panelu w kilka minut
          </h1>
          <p className="mt-4 max-w-xl text-lg text-muted-foreground">
            Krótkie nagrania krok po kroku pokazujące jak skonfigurować i wykorzystać każdą
            funkcję Premium Analytics.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {LESSONS.map((lesson) => (
            <LessonCard key={lesson.id} lesson={lesson} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/upgrade"
            className="inline-block border border-border px-6 py-3 text-xs font-semibold uppercase tracking-wider hover:bg-muted"
          >
            Wróć do planów
          </Link>
        </div>
      </section>
    </div>
  );
}

function LessonCard({ lesson }: { lesson: (typeof LESSONS)[number] }) {
  return (
    <div className="group flex flex-col border border-border bg-card transition hover:border-primary/40 hover:shadow-sm">
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
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-background/90 shadow-md transition group-hover:scale-110">
            <Play className="h-6 w-6 translate-x-0.5 fill-primary text-primary" />
          </div>
        </div>
        <div className="absolute bottom-3 right-3 bg-background/90 px-2 py-1 text-[11px] font-medium tabular-nums">
          {lesson.duration}
        </div>
        <div className="absolute left-3 top-3 bg-primary px-2 py-1 text-[10px] font-semibold uppercase tracking-wider text-primary-foreground">
          {lesson.category}
        </div>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-base font-semibold">{lesson.title}</h3>
        <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{lesson.description}</p>
      </div>
    </div>
  );
}
