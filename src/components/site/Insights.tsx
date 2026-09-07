import { SectionHeading } from "./SectionHeading";

const insights = [
  { emoji: "📈", title: "Top-Selling Category", text: "Electronics generates the highest revenue across all regions." },
  { emoji: "👥", title: "Customer Behavior", text: "Returning customers contribute significantly to total sales." },
  { emoji: "💳", title: "Payment Preference", text: "UPI is one of the most frequently used payment methods." },
  { emoji: "🌍", title: "Regional Performance", text: "Mumbai and Bangalore show strong sales performance." },
  { emoji: "📅", title: "Seasonal Trends", text: "Sales increase during major shopping seasons and festivals." },
  { emoji: "🛍️", title: "Product Performance", text: "A small number of products contribute a large portion of revenue." },
];

export function Insights() {
  return (
    <section className="bg-muted/50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Data Mining"
          title="Business Insights"
          subtitle="Patterns discovered by mining the warehouse's historical sales data."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {insights.map((i) => (
            <div
              key={i.title}
              className="rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-card)] transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-lift)]"
            >
              <span className="grid size-11 place-items-center rounded-2xl bg-accent text-xl">{i.emoji}</span>
              <h3 className="mt-4 text-base font-semibold">{i.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{i.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
