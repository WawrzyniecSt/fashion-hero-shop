import { Link } from "@tanstack/react-router";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import logoImg from "@/assets/lorenzo-stefano-logo.png";
import { User, Settings, LogOut, ChevronDown } from "lucide-react";

export function SiteHeader() {
  return (
    <header className="border-b border-border bg-background">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link to="/" className="text-xl font-semibold tracking-tight">
          FashionHero<span className="text-muted-foreground"> / Seller App</span>
        </Link>
        <nav className="hidden gap-8 text-sm md:flex items-center">
          <Link to="/" activeProps={{ className: "hover:opacity-60 font-semibold border-b-2 border-primary" }} className="hover:opacity-60 font-semibold border-b-2 border-transparent">Panel</Link>
          <Link to="/produkty" activeProps={{ className: "hover:opacity-60 font-semibold border-b-2 border-primary" }} className="hover:opacity-60 font-semibold border-b-2 border-transparent">Produkty</Link>
          <Link to="/zamowienia" activeProps={{ className: "hover:opacity-60 font-semibold border-b-2 border-primary" }} className="hover:opacity-60 font-semibold border-b-2 border-transparent">Zamówienia</Link>
          <Link to="/faktury" activeProps={{ className: "hover:opacity-60 font-semibold border-b-2 border-primary" }} className="hover:opacity-60 font-semibold border-b-2 border-transparent">Faktury</Link>
          <Link to="/upgrade" activeProps={{ className: "hover:opacity-60 font-semibold border-b-2 border-primary" }} className="hover:opacity-60 font-semibold border-b-2 border-transparent">Nowość - Analytics</Link>
        </nav>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="hidden md:flex items-center gap-2 outline-none bg-muted/60 border border-border rounded-lg px-3 py-1.5 hover:bg-muted transition-colors">
              <img
                src={logoImg}
                alt="Lorenzo Stefano"
                className="h-8 w-auto rounded-sm bg-white"
                width={512}
                height={512}
              />
              <span className="text-sm font-semibold">Lorenzo Stefano</span>
              <ChevronDown className="h-4 w-4 text-muted-foreground" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>
              <User className="mr-2 h-4 w-4" />
              Mój profil
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Settings className="mr-2 h-4 w-4" />
              Ustawienia
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <LogOut className="mr-2 h-4 w-4" />
              Wyloguj się
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
