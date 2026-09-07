import { BarChart3 } from "lucide-react";

const links = [
  { label: "Home", id: "home" },
  { label: "Products", id: "products" },
  { label: "Analytics", id: "analytics" },
  { label: "Data Warehouse", id: "warehouse" },
  { label: "About", id: "about" },
];

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-14 sm:px-6 md:grid-cols-2 md:items-center">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="grid size-9 place-items-center rounded-xl bg-[image:var(--gradient-primary)] text-primary-foreground">
              <BarChart3 className="size-5" />
            </span>
            <span className="text-lg font-semibold">ShopSphere Analytics</span>
          </div>
          <p className="mt-3 text-sm opacity-70">E-Commerce Sales Data Warehouse &amp; Analytics</p>
        </div>
        <ul className="flex flex-wrap gap-x-6 gap-y-2 md:justify-end">
          {links.map((l) => (
            <li key={l.id}>
              <a href={`#${l.id}`} className="text-sm opacity-75 transition-opacity hover:opacity-100">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="border-t border-background/15">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-6 text-xs opacity-65 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <span>Academic Project — Data Warehouse &amp; Data Mining</span>
          <span>© {new Date().getFullYear()} ShopSphere Analytics. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
