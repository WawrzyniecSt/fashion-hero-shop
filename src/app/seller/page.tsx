"use client"

import Link from "next/link"
import { SellerHeader } from "@/components/seller-header"
import { ArrowRight, BarChart3 } from "lucide-react"
import { useState } from "react"

const ALL_SIZES = ["XS", "S", "M", "L", "XL", "XXL", "XXXL"] as const

type Product = {
  id: string
  name: string
  category: string
  image: string
  available: string[]
  views: number
  price: string
}

const PRODUCTS: Product[] = [
  { id: "1", name: "Tempo Trainer — Red", category: "Obuwie sportowe", image: "https://fashionhero.aiproductheroes.pl/_next/image?url=%2Fimages%2Fproducts%2Fproduct-7.jpg&w=640&q=75", available: ["S", "M", "L", "XL"], views: 4821, price: "359 zł" },
  { id: "2", name: "Tempo Trainer — Sage", category: "Obuwie sportowe", image: "https://fashionhero.aiproductheroes.pl/_next/image?url=%2Fimages%2Fproducts%2Fproduct-3.jpg&w=640&q=75", available: ["XS", "S", "M", "L"], views: 3210, price: "359 zł" },
  { id: "3", name: "Basic Runner — Black", category: "Obuwie sportowe", image: "https://fashionhero.aiproductheroes.pl/_next/image?url=%2Fimages%2Fproducts%2Fproduct-1.jpg&w=640&q=75", available: ["M", "L", "XL", "XXL"], views: 1987, price: "79 zł" },
  { id: "4", name: "Drop Tee — Black", category: "Koszulki", image: "https://fashionhero.aiproductheroes.pl/_next/image?url=%2Fimages%2Fproducts%2Fproduct-17.jpg&w=640&q=75", available: ["XS", "S", "M", "L", "XL", "XXL"], views: 6542, price: "49 zł" },
  { id: "5", name: "Drop Runner W — Pink", category: "Obuwie sportowe", image: "https://fashionhero.aiproductheroes.pl/_next/image?url=%2Fimages%2Fproducts%2Fproduct-12.jpg&w=640&q=75", available: ["XS", "S", "M"], views: 2103, price: "79 zł" },
  { id: "6", name: "Drop Slide — Black", category: "Obuwie", image: "https://fashionhero.aiproductheroes.pl/_next/image?url=%2Fimages%2Fproducts%2Fproduct-16.jpg&w=640&q=75", available: ["S", "M", "L", "XL"], views: 1432, price: "49 zł" },
  { id: "7", name: "Drop Hoodie — Black", category: "Bluzy", image: "https://fashionhero.aiproductheroes.pl/_next/image?url=%2Fimages%2Fproducts%2Fproduct-20.jpg&w=640&q=75", available: ["S", "M", "L", "XL", "XXL", "XXXL"], views: 5321, price: "89 zł" },
  { id: "8", name: "Urban Jacket — Olive", category: "Kurtki", image: "https://fashionhero.aiproductheroes.pl/_next/image?url=%2Fimages%2Fproducts%2Fproduct-5.jpg&w=640&q=75", available: ["M", "L", "XL"], views: 2890, price: "249 zł" },
  { id: "9", name: "Classic Jeans — Indigo", category: "Spodnie", image: "https://fashionhero.aiproductheroes.pl/_next/image?url=%2Fimages%2Fproducts%2Fproduct-9.jpg&w=640&q=75", available: ["S", "M", "L", "XL", "XXL"], views: 3765, price: "159 zł" },
  { id: "10", name: "Knit Beanie — Grey", category: "Akcesoria", image: "https://fashionhero.aiproductheroes.pl/_next/image?url=%2Fimages%2Fproducts%2Fproduct-14.jpg&w=640&q=75", available: ["S", "M", "L"], views: 980, price: "39 zł" },
]

function ProductsTable() {
  const [perPage, setPerPage] = useState(10)
  const [page, setPage] = useState(1)
  const total = 329
  const totalPages = Math.max(1, Math.ceil(total / perPage))
  const visible = PRODUCTS.slice(0, perPage)

  return (
    <section className="mt-12">
      <div className="flex items-baseline justify-between border-b border-border pb-4">
        <h2 className="text-2xl font-semibold">Moje produkty</h2>
        <p className="text-sm text-muted-foreground">{total} aktywnych</p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="border-b border-border text-left text-xs uppercase tracking-wider text-muted-foreground">
              <th className="py-3 pr-4 font-medium">Produkt</th>
              <th className="py-3 pr-4 font-medium">Nazwa</th>
              <th className="py-3 pr-4 font-medium">Kategoria</th>
              <th className="py-3 pr-4 font-medium">Dostępne rozmiary</th>
              <th className="py-3 pr-4 font-medium">Wyświetlenia</th>
              <th className="py-3 pr-4 font-medium text-right">Cena</th>
            </tr>
          </thead>
          <tbody>
            {visible.map((p) => (
              <tr key={p.id} className="border-b border-border align-middle">
                <td className="py-4 pr-4">
                  <img src={p.image} alt={p.name} className="h-14 w-14 rounded-sm border border-border object-cover" loading="lazy" />
                </td>
                <td className="py-4 pr-4 font-medium">{p.name}</td>
                <td className="py-4 pr-4 text-muted-foreground">{p.category}</td>
                <td className="py-4 pr-4">
                  <div className="flex flex-wrap gap-1">
                    {ALL_SIZES.map((s) => {
                      const on = p.available.includes(s)
                      return (
                        <span
                          key={s}
                          className={
                            "inline-flex h-7 min-w-7 items-center justify-center rounded-sm border px-2 text-xs " +
                            (on
                              ? "border-border bg-white text-foreground"
                              : "border-border/60 bg-muted text-muted-foreground/50 line-through")
                          }
                        >
                          {s}
                        </span>
                      )
                    })}
                  </div>
                </td>
                <td className="py-4 pr-4 tabular-nums text-muted-foreground">{p.views.toLocaleString("pl-PL")}</td>
                <td className="py-4 pr-4 text-right font-semibold tabular-nums">{p.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-6 flex flex-col items-center justify-between gap-4 border-t border-border pt-4 sm:flex-row">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <span>Pokaż</span>
          <select
            value={perPage}
            onChange={(e) => {
              setPerPage(Number(e.target.value))
              setPage(1)
            }}
            className="border border-border bg-white px-2 py-1 text-sm"
          >
            {[10, 25, 50, 100].map((n) => (
              <option key={n} value={n}>{n}</option>
            ))}
          </select>
          <span>produktów na stronę</span>
        </div>

        <div className="flex items-center gap-2 text-sm">
          <button
            onClick={() => setPage((p: number) => Math.max(1, p - 1))}
            disabled={page === 1}
            className="border border-border bg-white px-3 py-1 disabled:opacity-40"
          >
            Poprzednia
          </button>
          <span className="text-muted-foreground">
            Strona {page} z {totalPages}
          </span>
          <button
            onClick={() => setPage((p: number) => Math.min(totalPages, p + 1))}
            disabled={page === totalPages}
            className="border border-border bg-white px-3 py-1 disabled:opacity-40"
          >
            Następna
          </button>
        </div>
      </div>
    </section>
  )
}

export default function SellerPanel() {
  return (
    <>
      <SellerHeader />

      <Link
        href="/seller/upgrade"
        className="group flex items-center justify-center gap-3 bg-primary px-6 py-3 text-primary-foreground transition hover:opacity-95"
      >
        <BarChart3 className="h-4 w-4" />
        <span className="text-sm font-medium">
          Nowość: Premium Analytics dla Sellerów — zobacz, co robią Twoi klienci.
        </span>
        <span className="flex items-center gap-1 text-xs font-semibold uppercase tracking-wider">
          Sprawdź <ArrowRight className="h-3 w-3 transition group-hover:translate-x-0.5" />
        </span>
      </Link>

      <div className="mx-auto max-w-7xl px-6 pt-12">
        <h1 className="text-3xl font-semibold">Witaj z powrotem</h1>
        <p className="mt-2 text-muted-foreground">Twój panel sprzedawcy — przegląd ostatnich 30 dni.</p>
      </div>

      <main className="mx-auto max-w-7xl px-6 py-12">
        <div className="mb-10 border border-border bg-cream p-10 text-center rounded-sm">
          <p className="text-sm uppercase tracking-wider text-muted-foreground">CHCESZ ROZWIJAĆ SWÓJ SKLEP?</p>
          <h2 className="mt-3 text-2xl font-semibold">Odblokuj pełną analitykę swojego sklepu i zyskuj więcej!</h2>
          <Link
            href="/seller/upgrade"
            className="mt-6 inline-block bg-primary px-8 py-3 text-xs font-semibold uppercase tracking-wider text-primary-foreground hover:opacity-90"
          >
            Zobacz plany
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {[
            { label: "Zamówienia", value: "142" },
            { label: "Przychód", value: "18 420 zł" },
            { label: "Return rate", value: "21%" },
          ].map((s) => (
            <div key={s.label} className="border border-border bg-white p-6">
              <div className="text-xs uppercase tracking-wider text-muted-foreground">{s.label}</div>
              <div className="mt-3 text-3xl font-semibold">{s.value}</div>
            </div>
          ))}
        </div>

        <ProductsTable />
      </main>
    </>
  )
}
