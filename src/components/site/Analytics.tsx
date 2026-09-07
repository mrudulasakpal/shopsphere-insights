import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { IndianRupee, Receipt, Users, TrendingUp } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { CountUp } from "./CountUp";

const kpis = [
  { label: "Total Sales", value: 12.5, prefix: "₹", suffix: "M", decimals: 1, icon: IndianRupee, delta: "+18.6%" },
  { label: "Total Orders", value: 25480, icon: Receipt, delta: "+12.4%" },
  { label: "Total Customers", value: 8920, icon: Users, delta: "+9.1%" },
  { label: "Average Order Value", value: 4905, prefix: "₹", icon: TrendingUp, delta: "+4.8%" },
];

const monthly = [
  { month: "Jan", sales: 1.2 },
  { month: "Feb", sales: 1.5 },
  { month: "Mar", sales: 1.3 },
  { month: "Apr", sales: 1.8 },
  { month: "May", sales: 2.1 },
  { month: "Jun", sales: 2.4 },
];

const byCategory = [
  { name: "Electronics", value: 38 },
  { name: "Fashion", value: 24 },
  { name: "Home & Furniture", value: 16 },
  { name: "Beauty", value: 12 },
  { name: "Sports", value: 10 },
];

const byRegion = [
  { city: "Mumbai", sales: 2.9 },
  { city: "Delhi", sales: 2.4 },
  { city: "Bangalore", sales: 2.6 },
  { city: "Hyderabad", sales: 1.7 },
  { city: "Pune", sales: 1.5 },
  { city: "Chennai", sales: 1.4 },
];

const payments = [
  { method: "UPI", share: 42 },
  { method: "Credit Card", share: 21 },
  { method: "Debit Card", share: 16 },
  { method: "Cash on Delivery", share: 13 },
  { method: "Net Banking", share: 8 },
];

const pieColors = [
  "var(--chart-1)",
  "var(--chart-2)",
  "var(--chart-3)",
  "var(--chart-4)",
  "var(--chart-5)",
];

const tooltipStyle = {
  borderRadius: 12,
  border: "1px solid var(--border)",
  background: "var(--card)",
  color: "var(--foreground)",
  fontSize: 12,
  boxShadow: "var(--shadow-card)",
};

function Panel({ title, hint, children }: { title: string; hint: string; children: React.ReactNode }) {
  return (
    <div className="rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-card)]">
      <div className="mb-5">
        <h3 className="text-base font-semibold">{title}</h3>
        <p className="text-xs text-muted-foreground">{hint}</p>
      </div>
      <div className="h-64 w-full">{children}</div>
    </div>
  );
}

export function Analytics() {
  return (
    <section id="analytics" className="scroll-mt-20 bg-[image:var(--gradient-soft)] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="OLAP Dashboard"
          title="E-Commerce Sales Analytics"
          subtitle="Aggregated measures from FACT_SALES sliced across date, category, region and payment dimensions."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {kpis.map((k) => (
            <div
              key={k.label}
              className="rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-card)] transition-transform hover:-translate-y-1"
            >
              <div className="flex items-center justify-between">
                <span className="grid size-10 place-items-center rounded-2xl bg-accent text-accent-foreground">
                  <k.icon className="size-5" />
                </span>
                <span className="rounded-full bg-chart-5/15 px-2.5 py-1 text-[11px] font-semibold text-chart-5">
                  {k.delta}
                </span>
              </div>
              <p className="mt-5 text-2xl font-semibold tracking-tight">
                <CountUp value={k.value} prefix={k.prefix} suffix={k.suffix} decimals={k.decimals ?? 0} />
              </p>
              <p className="text-sm text-muted-foreground">{k.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <Panel title="Sales by Month" hint="Revenue in ₹ millions (Jan – Jun)">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={monthly} margin={{ left: -20, right: 8, top: 8 }}>
                <defs>
                  <linearGradient id="salesFill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="var(--chart-1)" stopOpacity={0.35} />
                    <stop offset="100%" stopColor="var(--chart-1)" stopOpacity={0.02} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" vertical={false} />
                <XAxis dataKey="month" tickLine={false} axisLine={false} fontSize={12} stroke="var(--muted-foreground)" />
                <YAxis tickLine={false} axisLine={false} fontSize={12} stroke="var(--muted-foreground)" />
                <Tooltip contentStyle={tooltipStyle} formatter={(v: number) => [`₹${v}M`, "Sales"]} />
                <Area type="monotone" dataKey="sales" stroke="var(--chart-1)" strokeWidth={3} fill="url(#salesFill)" />
              </AreaChart>
            </ResponsiveContainer>
          </Panel>

          <Panel title="Sales by Category" hint="Revenue contribution share (%)">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={byCategory}
                  dataKey="value"
                  nameKey="name"
                  innerRadius={58}
                  outerRadius={92}
                  paddingAngle={3}
                  stroke="var(--card)"
                  strokeWidth={2}
                >
                  {byCategory.map((entry, i) => (
                    <Cell key={entry.name} fill={pieColors[i % pieColors.length]} />
                  ))}
                </Pie>
                <Tooltip contentStyle={tooltipStyle} formatter={(v: number, n) => [`${v}%`, n as string]} />
              </PieChart>
            </ResponsiveContainer>
            <div className="mt-2 flex flex-wrap justify-center gap-x-4 gap-y-1.5">
              {byCategory.map((c, i) => (
                <span key={c.name} className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <span className="size-2.5 rounded-full" style={{ background: pieColors[i] }} />
                  {c.name}
                </span>
              ))}
            </div>
          </Panel>

          <Panel title="Sales by Region" hint="City-wise revenue in ₹ millions">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={byRegion} margin={{ left: -20, right: 8, top: 8 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" vertical={false} />
                <XAxis dataKey="city" tickLine={false} axisLine={false} fontSize={11} stroke="var(--muted-foreground)" />
                <YAxis tickLine={false} axisLine={false} fontSize={12} stroke="var(--muted-foreground)" />
                <Tooltip cursor={{ fill: "var(--muted)" }} contentStyle={tooltipStyle} formatter={(v: number) => [`₹${v}M`, "Sales"]} />
                <Bar dataKey="sales" radius={[8, 8, 0, 0]} fill="var(--chart-1)" />
              </BarChart>
            </ResponsiveContainer>
          </Panel>

          <Panel title="Payment Method Analysis" hint="Share of transactions (%)">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={payments} layout="vertical" margin={{ left: 40, right: 16 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" horizontal={false} />
                <XAxis type="number" tickLine={false} axisLine={false} fontSize={12} stroke="var(--muted-foreground)" />
                <YAxis
                  type="category"
                  dataKey="method"
                  tickLine={false}
                  axisLine={false}
                  width={110}
                  fontSize={11}
                  stroke="var(--muted-foreground)"
                />
                <Tooltip cursor={{ fill: "var(--muted)" }} contentStyle={tooltipStyle} formatter={(v: number) => [`${v}%`, "Share"]} />
                <Bar dataKey="share" radius={[0, 8, 8, 0]} fill="var(--chart-2)" barSize={18} />
              </BarChart>
            </ResponsiveContainer>
          </Panel>
        </div>
      </div>
    </section>
  );
}
