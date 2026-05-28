"use client"

import { useSearchParams } from "next/navigation"
import { SellerHeader } from "@/components/seller-header"
import { getPlan } from "@/lib/seller-plans"
import { Check, Mail } from "lucide-react"
import Link from "next/link"
import { Suspense } from "react"

function SuccessContent() {
  const searchParams = useSearchParams()
  const planId = searchParams.get("plan") ?? "growth"
  const email = searchParams.get("email")
  const plan = getPlan(planId)

  return (
    <>
      <SellerHeader />
      <main className="mx-auto max-w-2xl px-6 py-24 text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center border border-primary bg-primary text-primary-foreground">
          <Check className="h-7 w-7" />
        </div>
        <h1 className="mt-8 text-4xl font-semibold leading-tight md:text-5xl">
          Dziękujemy za zakup.
        </h1>
        <p className="mt-4 text-muted-foreground">
          Twoja subskrypcja <span className="font-medium text-foreground">{plan?.name}</span> jest
          już aktywna. Możesz przejść do panelu i zacząć korzystać z analityki.
        </p>

        <div className="mt-10 flex items-center justify-center gap-3 border border-border bg-cream px-6 py-4 text-sm">
          <Mail className="h-4 w-4" />
          <span>
            Faktura została wysłana na{" "}
            <span className="font-medium">{email || "Twój adres e-mail"}</span>
          </span>
        </div>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/seller"
            className="bg-primary px-8 py-3 text-xs font-semibold uppercase tracking-wider text-primary-foreground hover:opacity-90"
          >
            Przejdź do panelu
          </Link>
          <Link
            href="/seller/upgrade"
            className="border border-border px-8 py-3 text-xs font-semibold uppercase tracking-wider hover:bg-muted"
          >
            Zobacz plany
          </Link>
        </div>
      </main>
    </>
  )
}

export default function SuccessPage() {
  return (
    <Suspense>
      <SuccessContent />
    </Suspense>
  )
}
