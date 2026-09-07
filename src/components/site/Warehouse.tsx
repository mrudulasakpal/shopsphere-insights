import { Database, Package, Users, CalendarDays, Store, CreditCard } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const fact = {
  name: "FACT_SALES",
  fields: ["Sales_ID", "Product_ID", "Customer_ID", "Date_ID", "Store_ID", "Payment_ID", "Quantity", "Sales_Amount"],
};

const dims = [
  { name: "DIM_PRODUCT", icon: Package, fields: ["Product_ID", "Product_Name", "Category", "Brand", "Price"] },
  { name: "DIM_CUSTOMER", icon: Users, fields: ["Customer_ID", "Customer_Name", "Gender", "Age", "City"] },
  { name: "DIM_DATE", icon: CalendarDays, fields: ["Date_ID", "Date", "Month", "Quarter", "Year"] },
  { name: "DIM_STORE", icon: Store, fields: ["Store_ID", "Store_Name", "Location", "Region"] },
  { name: "DIM_PAYMENT", icon: CreditCard, fields: ["Payment_ID", "Payment_Method", "Payment_Status"] },
];

function Table({
  title,
  fields,
  icon: Icon,
  highlight = false,
}: {
  title: string;
  fields: string[];
  icon: React.ElementType;
  highlight?: boolean;
}) {
  return (
    <div
      className={`w-full rounded-2xl border shadow-[var(--shadow-card)] transition-transform hover:-translate-y-1 ${
        highlight ? "border-primary/40 bg-card ring-4 ring-primary/10" : "border-border bg-card"
      }`}
    >
      <div
        className={`flex items-center gap-2 rounded-t-2xl px-4 py-3 text-sm font-semibold ${
          highlight
            ? "bg-[image:var(--gradient-primary)] text-primary-foreground"
            : "bg-accent text-accent-foreground"
        }`}
      >
        <Icon className="size-4" />
        {title}
      </div>
      <ul className="divide-y divide-border px-4 py-1">
        {fields.map((f, i) => (
          <li key={f} className="py-1.5 font-mono text-[12px] text-muted-foreground">
            {i === 0 || (highlight && i <= 5) ? (
              <span className="font-semibold text-foreground">{f}</span>
            ) : (
              f
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Warehouse() {
  return (
    <section id="warehouse" className="scroll-mt-20 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Star Schema"
          title="Our Data Warehouse"
          subtitle="The E-Commerce Data Warehouse integrates sales information from different business dimensions to support reporting, analysis and decision-making."
        />

        <div className="relative mt-14 grid items-center gap-6 lg:grid-cols-3">
          <div className="grid gap-6">
            <Table {...dims[0]} />
            <Table {...dims[1]} />
          </div>

          <div className="relative flex flex-col items-center gap-4">
            <div className="hidden lg:block">
              <div className="pointer-events-none absolute inset-0 -z-10">
                <div className="absolute left-1/2 top-1/2 size-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-2xl" />
              </div>
            </div>
            <span className="inline-flex items-center gap-2 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">
              <Database className="size-3.5" /> Fact Table
            </span>
            <Table title={fact.name} fields={fact.fields} icon={Database} highlight />
            <p className="text-center text-xs text-muted-foreground">
              Foreign keys link FACT_SALES to all five dimension tables
            </p>
          </div>

          <div className="grid gap-6">
            <Table {...dims[2]} />
            <Table {...dims[3]} />
            <Table {...dims[4]} />
          </div>
        </div>
      </div>
    </section>
  );
}
