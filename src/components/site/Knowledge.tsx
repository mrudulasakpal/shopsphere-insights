import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Line,
  LineChart,
  PolarAngleAxis,
  PolarGrid,
  Radar,
  RadarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { Database, Layers, Boxes, Brain, Gauge, MapPin } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { CountUp } from "./CountUp";

const tooltipStyle = {
  borderRadius: 12,
  border: "1px solid var(--border)",
  background: "var(--card)",
  color: "var(--foreground)",
  fontSize: 12,
  boxShadow: "var(--shadow-card)",
};

const concepts = [
  {
    icon: Database,
    title: "What is a Data Warehouse?",
    text: "A subject-oriented, integrated, time-variant and non-volatile collection of data built for analysis, not for day-to-day transactions.",
    stat: "4 core properties",
  },
  {
    icon: Layers,
    title: "Fact vs Dimension",
    text: "The fact table stores measurable numbers (quantity, sales amount); dimension tables store descriptive context (product, customer, date, store, payment).",
    stat: "1 fact · 5 dimensions",
  },
  {
    icon: Boxes,
    title: "Granularity",
    text: "Our grain is one row per product per order line — the lowest level that still answers every business question by rolling up.",
    stat: "Order-line grain",
  },
  {
    icon: Brain,
    title: "Data Mining",
    text: "Patterns are mined from warehouse history: market-basket association, customer segmentation (RFM) and churn prediction.",
    stat: "3 techniques applied",
  },
];

const oltpVsOlap = [
  { metric: "Query complexity", OLTP: 30, OLAP: 92 },
  { metric: "Historical depth", OLTP: 25, OLAP: 95 },
  { metric: "Write frequency", OLTP: 95, OLAP: 20 },
  { metric: "Rows per query", OLTP: 15, OLAP: 90 },
  { metric: "Normalization", OLTP: 90, OLAP: 35 },
  { metric: "Response speed", OLTP: 88, OLAP: 70 },
];

const dataQuality = [
  { label: "Completeness", value: 98 },
  { label: "Accuracy", value: 96 },
  { label: "Consistency", value: 94 },
  { label: "Timeliness", value: 91 },
];

const etlSplit = [
  { stage: "Extract", pct: 25 },
  { stage: "Cleanse", pct: 18 },
  { stage: "Transform", pct: 34 },
  { stage: "Load", pct: 15 },
  { stage: "Validate", pct: 8 },
];

const growth = [
  { year: "2021", gb: 120, rows: 1.2 },
  { year: "2022", gb: 260, rows: 2.8 },
  { year: "2023", gb: 480, rows: 5.1 },
  { year: "2024", gb: 790, rows: 8.4 },
  { year: "2025", gb: 1180, rows: 12.9 },
];

const regions = [
  { city: "Delhi", share: 19, x: 40, y: 27 },
  { city: "Mumbai", share: 23, x: 27, y: 57 },
  { city: "Pune", share: 12, x: 31, y: 62 },
  { city: "Hyderabad", share: 13, x: 42, y: 66 },
  { city: "Bangalore", share: 21, x: 39, y: 78 },
  { city: "Chennai", share: 12, x: 47, y: 81 },
];

const chartColors = [
  "var(--chart-1)",
  "var(--chart-2)",
  "var(--chart-3)",
  "var(--chart-4)",
  "var(--chart-5)",
];

function Panel({
  title,
  hint,
  children,
  className = "",
}: {
  title: string;
  hint: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-card)] ${className}`}
    >
      <div className="mb-5">
        <h3 className="text-base font-semibold">{title}</h3>
        <p className="text-xs text-muted-foreground">{hint}</p>
      </div>
      {children}
    </div>
  );
}

function Ring({ label, value }: { label: string; value: number }) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div
        className="grid size-24 place-items-center rounded-full"
        style={{
          background: `conic-gradient(var(--chart-1) ${value * 3.6}deg, var(--muted) 0deg)`,
        }}
      >
        <div className="grid size-[74px] place-items-center rounded-full bg-card text-sm font-semibold">
          <CountUp value={value} suffix="%" />
        </div>
      </div>
      <span className="text-xs text-muted-foreground">{label}</span>
    </div>
  );
}

export function Knowledge() {
  return (
    <section id="knowledge" className="scroll-mt-20 bg-muted/50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Learn the concepts"
          title="Understanding the Data Warehouse"
          subtitle="The theory behind the project, explained visually — architecture properties, OLTP vs OLAP, data quality scores, ETL effort split, warehouse growth and a regional sales map."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {concepts.map((c) => (
            <div
              key={c.title}
              className="rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-card)] transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-lift)]"
            >
              <span className="grid size-10 place-items-center rounded-2xl bg-accent text-accent-foreground">
                <c.icon className="size-5" />
              </span>
              <h3 className="mt-4 text-[15px] font-semibold">{c.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.text}</p>
              <p className="mt-4 text-xs font-semibold text-primary">{c.stat}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <Panel title="OLTP vs OLAP" hint="Relative profile of a transaction system vs the warehouse (0–100)">
            <div className="h-72 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart data={oltpVsOlap} outerRadius="72%">
                  <PolarGrid stroke="var(--border)" />
                  <PolarAngleAxis dataKey="metric" fontSize={11} stroke="var(--muted-foreground)" />
                  <Radar name="OLTP" dataKey="OLTP" stroke="var(--chart-2)" fill="var(--chart-2)" fillOpacity={0.25} />
                  <Radar name="OLAP" dataKey="OLAP" stroke="var(--chart-1)" fill="var(--chart-1)" fillOpacity={0.3} />
                  <Legend iconType="circle" wrapperStyle={{ fontSize: 12 }} />
                  <Tooltip contentStyle={tooltipStyle} />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </Panel>

          <Panel title="Regional Sales Map" hint="Share of total warehouse revenue by city (%)">
            <div className="grid gap-6 sm:grid-cols-[1fr_auto] sm:items-center">
              <div className="relative mx-auto aspect-[4/5] w-full max-w-[240px]">
                <svg viewBox="0 0 100 100" className="size-full">
                  <path
                    d="M32 10 L46 8 L54 14 L64 12 L70 20 L64 30 L70 38 L66 50 L58 62 L52 78 L46 92 L40 84 L34 70 L26 60 L20 46 L24 32 L28 20 Z"
                    fill="var(--muted)"
                    stroke="var(--border)"
                    strokeWidth="1"
                  />
                </svg>
                {regions.map((r, i) => (
                  <span
                    key={r.city}
                    className="group absolute -translate-x-1/2 -translate-y-1/2"
                    style={{ left: `${r.x}%`, top: `${r.y}%` }}
                  >
                    <span
                      className="block rounded-full opacity-80 transition-transform group-hover:scale-125"
                      style={{
                        width: r.share + 6,
                        height: r.share + 6,
                        background: chartColors[i % chartColors.length],
                      }}
                    />
                  </span>
                ))}
              </div>
              <ul className="grid gap-2">
                {regions.map((r, i) => (
                  <li key={r.city} className="flex items-center gap-2 text-sm">
                    <MapPin className="size-3.5" style={{ color: chartColors[i % chartColors.length] }} />
                    <span className="w-24 text-muted-foreground">{r.city}</span>
                    <span className="h-1.5 w-16 overflow-hidden rounded-full bg-muted">
                      <span
                        className="block h-full rounded-full"
                        style={{ width: `${(r.share / 23) * 100}%`, background: chartColors[i % chartColors.length] }}
                      />
                    </span>
                    <span className="font-semibold">{r.share}%</span>
                  </li>
                ))}
              </ul>
            </div>
          </Panel>

          <Panel title="Data Quality Scorecard" hint="Percentage of records passing each quality check after ETL">
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
              {dataQuality.map((d) => (
                <Ring key={d.label} label={d.label} value={d.value} />
              ))}
            </div>
            <p className="mt-6 flex items-center gap-2 text-xs text-muted-foreground">
              <Gauge className="size-4 text-primary" />
              Overall warehouse data quality index: <strong className="text-foreground">94.8%</strong>
            </p>
          </Panel>

          <Panel title="Where ETL Effort Goes" hint="Share of total pipeline processing time (%)">
            <div className="h-64 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={etlSplit} margin={{ left: -20, right: 8, top: 8 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" vertical={false} />
                  <XAxis dataKey="stage" tickLine={false} axisLine={false} fontSize={11} stroke="var(--muted-foreground)" />
                  <YAxis tickLine={false} axisLine={false} fontSize={12} stroke="var(--muted-foreground)" unit="%" />
                  <Tooltip cursor={{ fill: "var(--muted)" }} contentStyle={tooltipStyle} formatter={(v: number) => [`${v}%`, "Time"]} />
                  <Bar dataKey="pct" radius={[8, 8, 0, 0]}>
                    {etlSplit.map((e, i) => (
                      <Cell key={e.stage} fill={chartColors[i % chartColors.length]} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </Panel>

          <Panel className="lg:col-span-2" title="Warehouse Growth" hint="Stored volume (GB) and fact rows (millions) loaded per year">
            <div className="h-64 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={growth} margin={{ left: -18, right: 8, top: 8 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" vertical={false} />
                  <XAxis dataKey="year" tickLine={false} axisLine={false} fontSize={12} stroke="var(--muted-foreground)" />
                  <YAxis yAxisId="l" tickLine={false} axisLine={false} fontSize={12} stroke="var(--muted-foreground)" />
                  <YAxis yAxisId="r" orientation="right" tickLine={false} axisLine={false} fontSize={12} stroke="var(--muted-foreground)" />
                  <Tooltip contentStyle={tooltipStyle} />
                  <Legend iconType="circle" wrapperStyle={{ fontSize: 12 }} />
                  <Line yAxisId="l" type="monotone" name="Storage (GB)" dataKey="gb" stroke="var(--chart-1)" strokeWidth={3} dot={{ r: 3 }} />
                  <Line yAxisId="r" type="monotone" name="Fact rows (M)" dataKey="rows" stroke="var(--chart-3)" strokeWidth={3} dot={{ r: 3 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </Panel>
        </div>
      </div>
    </section>
  );
}
