import { Boxes, ShieldCheck, Gauge, TrendingUp, HeartHandshake, Target } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const objectives = [
  { icon: Boxes, title: "Centralize E-Commerce Data", text: "Bring product, customer, store and payment data into one model." },
  { icon: ShieldCheck, title: "Improve Data Quality", text: "Clean and validate records during the transformation stage." },
  { icon: Gauge, title: "Enable Fast Analysis", text: "Pre-aggregated facts make reporting queries quick." },
  { icon: TrendingUp, title: "Identify Sales Trends", text: "Track monthly, seasonal and regional revenue movement." },
  { icon: HeartHandshake, title: "Understand Customer Behavior", text: "Study buying patterns across age, gender and city." },
  { icon: Target, title: "Support Business Decisions", text: "Turn analysis into practical business actions." },
];

const concepts = [
  "Data Warehousing",
  "Star Schema",
  "Fact & Dimension Tables",
  "ETL",
  "OLAP",
  "Data Mining",
  "Business Intelligence",
  "E-Commerce Analytics",
];

export function About() {
  return (
    <>
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading eyebrow="Scope" title="Project Objectives" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {objectives.map((o) => (
              <div
                key={o.title}
                className="rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-card)] transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-lift)]"
              >
                <span className="grid size-11 place-items-center rounded-2xl bg-accent text-accent-foreground">
                  <o.icon className="size-5" />
                </span>
                <h3 className="mt-4 text-base font-semibold">{o.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{o.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="scroll-mt-20 bg-muted/50 py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading align="left" eyebrow="Academic Project" title="About This Project" />
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              This project demonstrates how a Data Warehouse can be used to organize and analyze
              large volumes of e-commerce data. The system integrates product, customer, date, store
              and payment information into a centralized analytical model, enabling businesses to
              identify trends and make data-driven decisions.
            </p>
            <p className="mt-4 text-sm text-muted-foreground">
              All figures shown across this site are sample data used for demonstration purposes.
            </p>
          </div>
          <div className="rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-card)]">
            <h3 className="text-lg font-semibold">Technology &amp; Concepts Used</h3>
            <div className="mt-5 flex flex-wrap gap-2.5">
              {concepts.map((c) => (
                <span
                  key={c}
                  className="rounded-full border border-border bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
