import heroImg from "@/assets/hero-v2.jpg";
import { ArrowRight, ArrowUpRight, Package, Users, IndianRupee, Smile } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CountUp } from "./CountUp";

const stats = [
  { icon: Package, value: 10, suffix: "K+", label: "Products" },
  { icon: Users, value: 25, suffix: "K+", label: "Customers" },
  { icon: IndianRupee, value: 12.5, suffix: "M", prefix: "₹", label: "Sales" },
  { icon: Smile, value: 85, suffix: "%", label: "Satisfaction" },
];

export function Hero() {
  return (
    <section id="home" className="relative isolate min-h-[540px] scroll-mt-16 overflow-hidden bg-hero text-hero-foreground sm:min-h-[600px]">
      <img
        src={heroImg}
        alt="E-commerce storefront and sales chart on a laptop beside shopping products"
        width={1920}
        height={1080}
        fetchPriority="high"
        className="absolute inset-0 -z-20 h-full w-full object-cover object-[67%_center]"
      />
      <div className="absolute inset-0 -z-10 bg-[image:var(--hero-overlay)]" />

      <div className="mx-auto flex min-h-[540px] max-w-7xl flex-col justify-between px-5 pb-7 pt-16 sm:min-h-[600px] sm:px-8 sm:pb-10 sm:pt-24 lg:px-10">
        <div className="max-w-[610px]">
          <span className="inline-flex items-center gap-2 border-l-2 border-hero-accent pl-3 text-[11px] font-semibold uppercase text-hero-foreground/80 sm:text-xs">
            Data Warehouse &amp; Data Mining Project <span className="text-hero-accent">/ v2</span>
          </span>
          <h1 className="mt-6 text-4xl font-semibold leading-[1.08] sm:text-5xl lg:text-6xl">
            E-Commerce Sales <span className="text-hero-accent">Data Warehouse.</span>
          </h1>
          <p className="mt-5 max-w-lg text-sm leading-relaxed text-hero-foreground/85 sm:text-lg">
            Transforming e-commerce sales data into meaningful business insights using Data
            Warehousing and Analytics.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg" className="h-11 rounded-sm bg-hero-accent px-5 text-hero-accent-foreground hover:bg-hero-accent/90">
              <a href="#products">Explore Products <ArrowRight /></a>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-11 rounded-sm border-hero-foreground/50 bg-transparent px-5 text-hero-foreground hover:bg-hero-foreground/10 hover:text-hero-foreground">
              <a href="#analytics">View Analytics <ArrowUpRight /></a>
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-y-4 border-t border-hero-foreground/30 pt-5 sm:grid-cols-4 sm:gap-5">
          {stats.map((f) => (
            <div
              key={f.label}
              className="flex min-w-0 items-center gap-2.5"
            >
              <span className="grid size-8 shrink-0 place-items-center border border-hero-foreground/25 text-hero-accent sm:size-9">
                <f.icon className="size-4" aria-hidden="true" />
              </span>
              <span className="leading-tight">
                <span className="block text-base font-semibold sm:text-lg">
                  <CountUp value={f.value} prefix={f.prefix} suffix={f.suffix} decimals={f.value % 1 ? 1 : 0} />
                </span>
                <span className="block text-[11px] text-hero-foreground/75">{f.label}</span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
