import electronics from "@/assets/cat-electronics.jpg";
import fashion from "@/assets/cat-fashion.jpg";
import home from "@/assets/cat-home.jpg";
import beauty from "@/assets/cat-beauty.jpg";
import sports from "@/assets/cat-sports.jpg";
import accessories from "@/assets/cat-accessories.jpg";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const categories = [
  { name: "Electronics", img: electronics, count: "2,450 products" },
  { name: "Fashion", img: fashion, count: "3,120 products" },
  { name: "Home & Furniture", img: home, count: "1,280 products" },
  { name: "Beauty", img: beauty, count: "1,640 products" },
  { name: "Sports", img: sports, count: "980 products" },
  { name: "Accessories", img: accessories, count: "1,530 products" },
];

export function Categories() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
      <SectionHeading
        eyebrow="Storefront"
        title="Shop by Category"
        subtitle="Product dimensions of the warehouse, presented the way customers browse them."
      />
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((c) => (
          <article
            key={c.name}
            className="group overflow-hidden rounded-3xl border border-border bg-card shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-lift)]"
          >
            <div className="aspect-[4/3] overflow-hidden bg-muted">
              <img
                src={c.img}
                alt={`${c.name} category products`}
                loading="lazy"
                width={800}
                height={600}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="flex items-center justify-between gap-4 p-5">
              <div>
                <h3 className="text-base font-semibold">{c.name}</h3>
                <p className="text-sm text-muted-foreground">{c.count}</p>
              </div>
              <button className="inline-flex items-center gap-1.5 rounded-full border border-border px-4 py-2 text-sm font-medium transition-colors group-hover:bg-[image:var(--gradient-primary)] group-hover:text-primary-foreground">
                Explore <ArrowUpRight className="size-4" />
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
