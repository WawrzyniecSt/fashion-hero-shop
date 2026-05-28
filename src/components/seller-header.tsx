"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { User, Settings, LogOut, ChevronDown } from "lucide-react"
import { useState, useRef, useEffect } from "react"

const navLinks = [
  { label: "Panel", href: "/seller" },
  { label: "Produkty", href: "/seller/produkty" },
  { label: "Zamówienia", href: "/seller/zamowienia" },
  { label: "Faktury", href: "/seller/faktury" },
  { label: "Nowość - Analytics", href: "/seller/upgrade" },
]

export function SellerHeader() {
  const pathname = usePathname()
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <header className="border-b border-border bg-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="text-xl font-semibold tracking-tight">
          Allbirds<span className="text-muted-foreground"> / Seller App</span>
        </Link>
        <nav className="hidden gap-8 text-sm md:flex items-center">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "font-semibold border-b-2 transition-opacity hover:opacity-60",
                pathname === link.href
                  ? "border-primary"
                  : "border-transparent"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="relative" ref={dropdownRef}>
          <button
            className="hidden md:flex items-center gap-2 outline-none bg-muted/60 border border-border rounded-lg px-3 py-1.5 hover:bg-muted transition-colors"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            <img
              src="/images/seller/lorenzo-stefano-logo.png"
              alt="Lorenzo Stefano"
              className="h-8 w-auto rounded-sm bg-white"
              width={32}
              height={32}
            />
            <span className="text-sm font-semibold">Lorenzo Stefano</span>
            <ChevronDown className="h-4 w-4 text-muted-foreground" />
          </button>
          {dropdownOpen && (
            <div className="absolute right-0 top-full mt-2 w-48 rounded-lg border border-border bg-white py-1 shadow-lg z-50">
              <button
                className="flex w-full items-center gap-2 px-4 py-2 text-sm hover:bg-muted transition-colors"
                onClick={() => setDropdownOpen(false)}
              >
                <User className="h-4 w-4" />
                Mój profil
              </button>
              <button
                className="flex w-full items-center gap-2 px-4 py-2 text-sm hover:bg-muted transition-colors"
                onClick={() => setDropdownOpen(false)}
              >
                <Settings className="h-4 w-4" />
                Ustawienia
              </button>
              <div className="my-1 border-t border-border" />
              <button
                className="flex w-full items-center gap-2 px-4 py-2 text-sm hover:bg-muted transition-colors"
                onClick={() => setDropdownOpen(false)}
              >
                <LogOut className="h-4 w-4" />
                Wyloguj się
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
