import heroImg from "@/assets/hero.jpg";
import { ArrowRight, LineChart, Package, Users, IndianRupee, Smile } from "lucide-react";
import { CountUp } from "./CountUp";

const floats = [
  { icon: Package, value: 10, suffix: "K+", label: "Products", pos: "left-2 top-8 sm:-left-6" },
  { icon: Users, value: 25, suffix: "K+", label: "Customers", pos: "right-2 top-24 sm:-right-6" },
  { icon: IndianRupee, value: 12.5, suffix: "M", prefix: "₹", label: "Sales", pos: "bottom-24 left-2 sm:-left-8" },
  { icon: Smile, value: 85, suffix: "%", label: "Satisfaction", pos: "bottom-6 right-2 sm:-right-4" },
];

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-[image:var(--gradient-soft)]">
      <div className="pointer-events-none absolute -left-32 -top-32 size-96 rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 top-40 size-96 rounded-full bg-primary-glow/10 blur-3xl" />

      <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:py-24">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3.5 py-1.5 text-xs font-medium text-muted-foreground shadow-[var(--shadow-card)]">
            <LineChart className="size-3.5 text-primary" />
            Data Warehouse &amp; Data Mining Project
          </span>
          <h1 className="mt-5 text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
            E-Commerce Sales{" "}
            <span className="bg-[image:var(--gradient-primary)] bg-clip-text text-transparent">
              Data Warehouse
            </span>
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Transforming e-commerce sales data into meaningful business insights using Data
            Warehousing and Analytics.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#products"
              className="group inline-flex items-center gap-2 rounded-full bg-[image:var(--gradient-primary)] px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-card)] transition-all hover:shadow-[var(--shadow-lift)]"
            >
              Explore Products
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#analytics"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              View Analytics
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-[var(--shadow-lift)]">
            <img
              src={heroImg}
              alt="Online shopping on a laptop with an e-commerce sales dashboard, shopping bags and products"
              width={1200}
              height={912}
              className="h-full w-full object-cover"
            />
          </div>
          {floats.map((f) => (
            <div
              key={f.label}
              className={`absolute ${f.pos} flex items-center gap-2.5 rounded-2xl border border-border bg-card/95 px-3.5 py-2.5 shadow-[var(--shadow-card)] backdrop-blur animate-in fade-in slide-in-from-bottom-2`}
            >
              <span className="grid size-8 place-items-center rounded-xl bg-accent text-accent-foreground">
                <f.icon className="size-4" />
              </span>
              <span className="leading-tight">
                <span className="block text-sm font-semibold">
                  <CountUp value={f.value} prefix={f.prefix} suffix={f.suffix} decimals={f.value % 1 ? 1 : 0} />
                </span>
                <span className="block text-[11px] text-muted-foreground">{f.label}</span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
