import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Categories } from "@/components/site/Categories";
import { Products } from "@/components/site/Products";
import { Analytics } from "@/components/site/Analytics";
import { Warehouse } from "@/components/site/Warehouse";
import { Insights } from "@/components/site/Insights";
import { Pipeline } from "@/components/site/Pipeline";
import { About } from "@/components/site/About";
import { Footer } from "@/components/site/Footer";

const title = "ShopSphere Analytics — E-Commerce Sales Data Warehouse";
const description =
  "A Data Warehouse & Data Mining project: e-commerce sales analytics, star schema, ETL pipeline and business insights.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen scroll-smooth bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <Categories />
        <Products />
        <Analytics />
        <Warehouse />
        <Insights />
        <Pipeline />
        <About />
      </main>
      <Footer />
    </div>
  );
}
