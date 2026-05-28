import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Seller Panel — Allbirds",
  description: "Panel sprzedawcy w Allbirds — analityka, heatmapy, predykcja zwrotów.",
}

export default function SellerLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-white">
      {children}
    </div>
  )
}
