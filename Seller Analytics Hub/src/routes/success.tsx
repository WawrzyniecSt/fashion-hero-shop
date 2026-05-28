import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { getPlan } from "@/lib/plans";
import { Check, Mail } from "lucide-react";

type Search = { plan?: string; email?: string };

export const Route = createFileRoute("/success")({
  validateSearch: (s: Record<string, unknown>): Search => ({
    plan: typeof s.plan === "string" ? s.plan : undefined,
    email: typeof s.email === "string" ? s.email : undefined,
  }),
  head: () => ({ meta: [{ title: "Dziękujemy — FashionHero Analytics" }] }),
  component: SuccessPage,
});

function SuccessPage() {
  const { plan: planId, email } = Route.useSearch();
  const plan = getPlan(planId ?? "growth");

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
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
            to="/"
            className="bg-primary px-8 py-3 text-xs font-semibold uppercase tracking-wider text-primary-foreground hover:opacity-90"
          >
            Przejdź do panelu
          </Link>
          <Link
            to="/upgrade"
            className="border border-border px-8 py-3 text-xs font-semibold uppercase tracking-wider hover:bg-muted"
          >
            Zobacz plany
          </Link>
        </div>
      </main>
    </div>
  );
}
