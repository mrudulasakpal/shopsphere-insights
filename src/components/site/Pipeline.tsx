import {
  Users,
  Store,
  Receipt,
  DatabaseZap,
  Cog,
  Warehouse as WarehouseIcon,
  LayoutGrid,
  Lightbulb,
  ChevronDown,
  Download,
  Wand2,
  UploadCloud,
} from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const flow = [
  { icon: Users, label: "Customers" },
  { icon: Store, label: "Online Store" },
  { icon: Receipt, label: "Orders & Transactions" },
  { icon: DatabaseZap, label: "Data Collection" },
  { icon: Cog, label: "ETL Process" },
  { icon: WarehouseIcon, label: "E-Commerce Data Warehouse" },
  { icon: LayoutGrid, label: "OLAP / Data Analysis" },
  { icon: Lightbulb, label: "Business Intelligence & Insights" },
];

const etl = [
  {
    step: "01",
    title: "Extract",
    icon: Download,
    text: "Collect sales, customer, product, store and payment data from different sources.",
  },
  {
    step: "02",
    title: "Transform",
    icon: Wand2,
    text: "Clean, validate and transform the collected data into a consistent format.",
  },
  {
    step: "03",
    title: "Load",
    icon: UploadCloud,
    text: "Load the processed data into the centralized E-Commerce Data Warehouse.",
  },
];

export function Pipeline() {
  return (
    <>
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="End to End"
            title="From Shopping Cart to Business Intelligence"
            subtitle="How everyday e-commerce activity becomes analytical insight."
          />
          <div className="mx-auto mt-12 grid max-w-3xl gap-0">
            {flow.map((f, i) => (
              <div key={f.label}>
                <div className="flex items-center gap-4 rounded-2xl border border-border bg-card px-5 py-4 shadow-[var(--shadow-card)] transition-all hover:-translate-y-0.5 hover:shadow-[var(--shadow-lift)]">
                  <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-[image:var(--gradient-primary)] text-primary-foreground">
                    <f.icon className="size-5" />
                  </span>
                  <span className="text-sm font-semibold sm:text-base">{f.label}</span>
                  <span className="ml-auto font-mono text-xs text-muted-foreground">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                {i < flow.length - 1 && (
                  <div className="flex justify-center py-1.5">
                    <ChevronDown className="size-5 text-primary/60" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[image:var(--gradient-soft)] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="Data Staging"
            title="ETL Pipeline"
            subtitle="Three stages move raw operational data into the analytical model."
          />
          <div className="relative mt-12 grid gap-6 lg:grid-cols-3">
            <div className="pointer-events-none absolute left-0 right-0 top-16 hidden h-0.5 bg-[image:var(--gradient-primary)] opacity-30 lg:block" />
            {etl.map((e) => (
              <div
                key={e.step}
                className="relative rounded-3xl border border-border bg-card p-7 shadow-[var(--shadow-card)] transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-lift)]"
              >
                <div className="flex items-center justify-between">
                  <span className="grid size-12 place-items-center rounded-2xl bg-[image:var(--gradient-primary)] text-primary-foreground">
                    <e.icon className="size-6" />
                  </span>
                  <span className="font-mono text-3xl font-semibold text-muted-foreground/35">{e.step}</span>
                </div>
                <h3 className="mt-5 text-xl font-semibold">{e.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{e.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
