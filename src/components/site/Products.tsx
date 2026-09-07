import headphones from "@/assets/p-headphones.jpg";
import watch from "@/assets/p-watch.jpg";
import keyboard from "@/assets/p-keyboard.jpg";
import shoes from "@/assets/p-shoes.jpg";
import backpack from "@/assets/p-backpack.jpg";
import phone from "@/assets/p-phone.jpg";
import tv from "@/assets/p-tv.jpg";
import tracker from "@/assets/p-tracker.jpg";
import { ShoppingCart, Star } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const products = [
  { name: "Premium Wireless Headphones", category: "Electronics", price: "₹2,499", rating: 4.6, img: headphones },
  { name: "Smart Watch Pro", category: "Electronics", price: "₹4,999", rating: 4.7, img: watch },
  { name: "Wireless Keyboard", category: "Electronics", price: "₹1,799", rating: 4.3, img: keyboard },
  { name: "Running Shoes", category: "Sports", price: "₹3,299", rating: 4.5, img: shoes },
  { name: "Designer Backpack", category: "Accessories", price: "₹2,199", rating: 4.4, img: backpack },
  { name: "Smartphone X12", category: "Electronics", price: "₹24,999", rating: 4.8, img: phone },
  { name: "Smart LED TV", category: "Electronics", price: "₹39,999", rating: 4.6, img: tv },
  { name: "Fitness Tracker", category: "Sports", price: "₹2,999", rating: 4.2, img: tracker },
];

export function Products() {
  return (
    <section id="products" className="scroll-mt-20 bg-muted/50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Catalogue"
          title="Featured Products"
          subtitle="Sample rows from DIM_PRODUCT, rendered as a real storefront grid."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p) => (
            <article
              key={p.name}
              className="group flex flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-lift)]"
            >
              <div className="aspect-square overflow-hidden bg-background p-4">
                <img
                  src={p.img}
                  alt={p.name}
                  loading="lazy"
                  width={700}
                  height={700}
                  className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="flex flex-1 flex-col gap-2 border-t border-border p-5">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-primary">
                  {p.category}
                </span>
                <h3 className="text-sm font-semibold leading-snug">{p.name}</h3>
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Star className="size-3.5 fill-chart-4 text-chart-4" />
                  {p.rating.toFixed(1)}
                </div>
                <div className="mt-auto flex items-center justify-between gap-3 pt-3">
                  <span className="text-lg font-semibold">{p.price}</span>
                  <button className="inline-flex items-center gap-1.5 rounded-full bg-[image:var(--gradient-primary)] px-3.5 py-2 text-xs font-semibold text-primary-foreground opacity-90 transition-opacity hover:opacity-100">
                    <ShoppingCart className="size-3.5" /> Add
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
