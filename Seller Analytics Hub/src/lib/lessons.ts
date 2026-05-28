import lessonHeatmaps from "@/assets/lesson-heatmaps.jpg";
import lessonSessions from "@/assets/lesson-sessions.jpg";
import lessonReturns from "@/assets/lesson-returns.jpg";
import lessonPrices from "@/assets/lesson-prices.jpg";
import lessonSegments from "@/assets/lesson-segments.jpg";
import lessonRealtime from "@/assets/lesson-realtime.jpg";
import lessonSetup from "@/assets/lesson-setup.jpg";
import lessonExport from "@/assets/lesson-export.jpg";

export type Lesson = {
  id: string;
  title: string;
  description: string;
  duration: string;
  category: string;
  thumbnail: string;
};

export const LESSONS: Lesson[] = [
  {
    id: "heatmaps-intro",
    title: "Jak czytać heatmapy",
    description: "Naucz się interpretować mapy kliknięć i scrollowania na stronach produktowych.",
    duration: "3:24",
    category: "Heatmapy",
    thumbnail: lessonHeatmaps,
  },
  {
    id: "session-recordings",
    title: "Odtwarzanie nagrań sesji",
    description: "Filtruj sesje po urządzeniu, czasie i akcjach, aby znaleźć problemy w UX.",
    duration: "4:10",
    category: "Nagrania sesji",
    thumbnail: lessonSessions,
  },
  {
    id: "return-prediction",
    title: "Ustawianie predykcji zwrotów",
    description: "Skonfiguruj alerty dla produktów z wysokim ryzykiem zwrotu.",
    duration: "2:55",
    category: "Predykcja",
    thumbnail: lessonReturns,
  },
  {
    id: "price-compare",
    title: "Porównywanie cen z konkurencją",
    description: "Monitoruj ceny rywali i dostosowuj swoje oferty automatycznie.",
    duration: "5:02",
    category: "Ceny",
    thumbnail: lessonPrices,
  },
  {
    id: "segments",
    title: "Tworzenie segmentów klientów",
    description: "Grupuj klientów według zachowań i wartości koszyka.",
    duration: "3:48",
    category: "Segmentacja",
    thumbnail: lessonSegments,
  },
  {
    id: "realtime-reports",
    title: "Raporty w czasie rzeczywistym",
    description: "Skonfiguruj dashboard z najważniejszymi metrykami sprzedażowymi.",
    duration: "4:33",
    category: "Raporty",
    thumbnail: lessonRealtime,
  },
  {
    id: "first-setup",
    title: "Pierwsza konfiguracja panelu",
    description: "Krok po kroku jak uruchomić Premium Analytics w swoim sklepie.",
    duration: "6:15",
    category: "Start",
    thumbnail: lessonSetup,
  },
  {
    id: "export-data",
    title: "Eksport danych do CSV",
    description: "Pobieraj raporty i integruj dane z innymi narzędziami.",
    duration: "2:18",
    category: "Integracje",
    thumbnail: lessonExport,
  },
];
