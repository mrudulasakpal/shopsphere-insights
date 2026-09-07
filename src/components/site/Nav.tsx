import { Search, ShoppingCart, User, Menu, BarChart3 } from "lucide-react";
import { useState } from "react";

const links = [
  { label: "Home", id: "home" },
  { label: "Products", id: "products" },
  { label: "Analytics", id: "analytics" },
  { label: "Data Warehouse", id: "warehouse" },
  { label: "Learn DW", id: "knowledge" },
  { label: "About Project", id: "about" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6">
        <a href="#home" className="flex items-center gap-2.5">
          <span className="grid size-9 place-items-center rounded-xl bg-[image:var(--gradient-primary)] text-primary-foreground shadow-[var(--shadow-card)]">
            <BarChart3 className="size-5" />
          </span>
          <span className="leading-tight">
            <span className="block text-[15px] font-semibold tracking-tight">ShopSphere Analytics</span>
            <span className="hidden text-[11px] text-muted-foreground sm:block">
              E-Commerce Sales Data Warehouse
            </span>
          </span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                className="rounded-full px-3.5 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-1.5">
          <button aria-label="Search" className="grid size-9 place-items-center rounded-full text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground">
            <Search className="size-[18px]" />
          </button>
          <button aria-label="Cart" className="relative grid size-9 place-items-center rounded-full text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground">
            <ShoppingCart className="size-[18px]" />
            <span className="absolute -right-0.5 -top-0.5 grid size-4 place-items-center rounded-full bg-primary text-[10px] font-semibold text-primary-foreground">
              3
            </span>
          </button>
          <button aria-label="Profile" className="grid size-9 place-items-center rounded-full text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground">
            <User className="size-[18px]" />
          </button>
          <button
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
            className="grid size-9 place-items-center rounded-full text-muted-foreground transition-colors hover:bg-accent lg:hidden"
          >
            <Menu className="size-[18px]" />
          </button>
        </div>
      </nav>

      {open && (
        <ul className="grid gap-1 border-t border-border px-4 pb-4 pt-2 lg:hidden">
          {links.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-accent hover:text-accent-foreground"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
