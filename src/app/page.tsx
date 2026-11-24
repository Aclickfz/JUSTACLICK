import type { Metadata } from "next";
import Link from "next/link";
import {
  Armchair,
  Lamp,
  Paintbrush,
  Trees,
  Shirt,
  Sparkles,
  Package,
  Wrench,
} from "lucide-react";
import { HomeHero } from "@/components/home-hero";
import { StatsCounters } from "@/components/stats-counters";
import { ContactForm } from "@/components/contact-form";
import { SupplyChainGlobe } from "@/components/supply-chain-globe";
import { SectionHeading } from "@/components/section-heading";
import { FeatureStrip } from "@/components/finanzia/feature-strip";
import { AboutSplit } from "@/components/finanzia/about-split";
import { IconServiceGrid } from "@/components/finanzia/icon-service-grid";
import { IndustryTiles } from "@/components/finanzia/industry-tiles";
import { ProcessSteps } from "@/components/finanzia/process-steps";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { homeContent } from "@/content/home";
import { productCategories, workflowStages } from "@/data/seed-data";

export const metadata: Metadata = {
  title: {
    absolute: "Just A Click | Home Furnishing Supply Chain & Manufacturing",
  },
  description:
    "Just A Click designs, manufactures, and delivers home furnishings worldwide. End-to-end supply chain for buyers, wholesalers, vendors, and brands.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Just A Click | Home Furnishing Supply Chain & Manufacturing",
    description:
      "Design, manufacture, and deliver worldwide with a supply chain built for growth.",
    url: "/",
  },
};

const categoryIcons = [
  Armchair,
  Lamp,
  Paintbrush,
  Trees,
  Shirt,
  Sparkles,
  Package,
  Wrench,
] as const;

export default function HomePage() {
  const serviceItems = productCategories.slice(0, 6).map((category, index) => ({
    title: category.badge,
    description: category.description,
    href: `/products#${category.slug}`,
    icon: categoryIcons[index] ?? Package,
  }));

  const industryItems = productCategories.slice(0, 8).map((category) => ({
    name: category.badge,
    href: `/products#${category.slug}`,
    imageUrl: category.imageUrl,
  }));

  return (
    <>
      <HomeHero />

      <FeatureStrip items={homeContent.pillars} />

      <AboutSplit
        title="Our"
        accent="Strategy for Excellence"
        description={homeContent.strategy.description}
        cards={homeContent.strategy.cards}
      />

      <SupplyChainGlobe />

      <section className="py-20 sm:py-24">
        <div className="section-shell">
          <div className="mb-2 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              title="Categories"
              accent="We Serve"
              description="From furniture and lighting to decor and textiles — crafted for buyers, wholesalers, and vendors."
              className="mb-0 md:mb-0"
            />
            <Link
              href="/products"
              className={cn(
                buttonVariants({ size: "lg" }),
                "btn-brand shrink-0 self-start"
              )}
            >
              Explore Products
            </Link>
          </div>
          <div className="mt-10">
            <IconServiceGrid items={serviceItems} />
          </div>
        </div>
      </section>

      <section className="bg-mist/70 py-20 sm:py-24">
        <div className="section-shell">
          <SectionHeading
            title="Markets"
            accent="& Collections"
            description="Explore the categories buyers and partners trust Just A Click to deliver."
          />
          <IndustryTiles items={industryItems} />
        </div>
      </section>

      <StatsCounters />

      <ProcessSteps
        title="Supply Chain"
        accent="Workflow"
        description={homeContent.workflow.description}
        steps={workflowStages}
      />

      <section className="py-20 sm:py-24">
        <div className="section-shell grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <SectionHeading
            title="Why"
            accent="only Us"
            description="Consistency, accountability, and collaboration guide every project from concept to launch."
            className="mb-0"
          />
          <div className="grid gap-3 sm:grid-cols-2">
            {homeContent.whyUs.points.map((point, index) => (
              <div
                key={point}
                className="rounded-lg border border-border bg-card p-5 shadow-[0_8px_24px_rgba(34,49,64,0.04)] transition-colors hover:border-brand/40"
              >
                <p className="font-heading text-sm font-bold text-brand">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <p className="mt-3 text-base font-medium leading-snug text-ink">
                  {point}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="start" className="scroll-mt-28 pb-8 pt-4 sm:pb-12">
        <div className="section-shell">
          <div className="relative overflow-hidden rounded-lg border border-border bg-ink px-6 py-14 text-center sm:px-12">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgb(5_20_35_/_0.35),transparent_45%)]" />
            <div className="relative">
              <p className="text-xs font-semibold tracking-[0.2em] text-white/55 uppercase">
                Grow with us
              </p>
              <h2 className="font-heading mt-3 text-3xl font-bold text-white sm:text-5xl">
                Ready to Grow Together?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-white/60">
                Sign in as a buyer or vendor and start building with Just A
                Click.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link
                  href="/login"
                  className={cn(
                    buttonVariants({ size: "lg" }),
                    "h-12 w-full rounded-full bg-white px-8 text-navy-deep hover:bg-white/90 sm:w-auto"
                  )}
                >
                  Buyer / Vendor Login
                </Link>
                <Link
                  href="/signup"
                  className={cn(
                    buttonVariants({ size: "lg", variant: "outline" }),
                    "h-12 w-full rounded-full border-white/40 bg-transparent px-8 text-white hover:bg-white hover:text-navy-deep sm:w-auto"
                  )}
                >
                  Create Account
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactForm />
    </>
  );
}
