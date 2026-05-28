export type Lesson = {
  id: string
  title: string
  description: string
  duration: string
  category: string
  thumbnail: string
}

export const LESSONS: Lesson[] = [
  {
    id: "heatmaps-intro",
    title: "Jak czytać heatmapy",
    description: "Naucz się interpretować mapy kliknięć i scrollowania na stronach produktowych.",
    duration: "3:24",
    category: "Heatmapy",
    thumbnail: "/images/seller/lesson-heatmaps.jpg",
  },
  {
    id: "session-recordings",
    title: "Odtwarzanie nagrań sesji",
    description: "Filtruj sesje po urządzeniu, czasie i akcjach, aby znaleźć problemy w UX.",
    duration: "4:10",
    category: "Nagrania sesji",
    thumbnail: "/images/seller/lesson-sessions.jpg",
  },
  {
    id: "return-prediction",
    title: "Ustawianie predykcji zwrotów",
    description: "Skonfiguruj alerty dla produktów z wysokim ryzykiem zwrotu.",
    duration: "2:55",
    category: "Predykcja",
    thumbnail: "/images/seller/lesson-returns.jpg",
  },
  {
    id: "price-compare",
    title: "Porównywanie cen z konkurencją",
    description: "Monitoruj ceny rywali i dostosowuj swoje oferty automatycznie.",
    duration: "5:02",
    category: "Ceny",
    thumbnail: "/images/seller/lesson-prices.jpg",
  },
  {
    id: "segments",
    title: "Tworzenie segmentów klientów",
    description: "Grupuj klientów według zachowań i wartości koszyka.",
    duration: "3:48",
    category: "Segmentacja",
    thumbnail: "/images/seller/lesson-segments.jpg",
  },
  {
    id: "realtime-reports",
    title: "Raporty w czasie rzeczywistym",
    description: "Skonfiguruj dashboard z najważniejszymi metrykami sprzedażowymi.",
    duration: "4:33",
    category: "Raporty",
    thumbnail: "/images/seller/lesson-realtime.jpg",
  },
  {
    id: "first-setup",
    title: "Pierwsza konfiguracja panelu",
    description: "Krok po kroku jak uruchomić Premium Analytics w swoim sklepie.",
    duration: "6:15",
    category: "Start",
    thumbnail: "/images/seller/lesson-setup.jpg",
  },
  {
    id: "export-data",
    title: "Eksport danych do CSV",
    description: "Pobieraj raporty i integruj dane z innymi narzędziami.",
    duration: "2:18",
    category: "Integracje",
    thumbnail: "/images/seller/lesson-export.jpg",
  },
]
