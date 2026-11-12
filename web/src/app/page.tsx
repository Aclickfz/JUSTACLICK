import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Check } from "lucide-react";
import { HomeHero } from "@/components/home-hero";
import { WorkflowTabs } from "@/components/workflow-tabs";
import { StatsCounters } from "@/components/stats-counters";
import { ContactForm } from "@/components/contact-form";
import { SupplyChainGlobe } from "@/components/supply-chain-globe";
import { SectionHeading } from "@/components/section-heading";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { homeContent } from "@/content/home";
import { productCategories } from "@/data/seed-data";

export default function HomePage() {
  return (
    <>
      <HomeHero />

      <SupplyChainGlobe />

      <section className="relative py-24">
        <div className="section-shell">
          <SectionHeading
            title="Our"
            accent="Strategy for Excellence"
            description={homeContent.strategy.description}
          />
          <div className="grid gap-px overflow-hidden border border-border bg-border md:grid-cols-2">
            {homeContent.strategy.cards.map((card) => (
              <Link
                key={card.href}
                href={card.href}
                className="group bg-card p-8 transition-colors hover:bg-mist sm:p-10"
              >
                <p className="text-xs font-semibold tracking-[0.18em] text-brand uppercase">
                  Strategy
                </p>
                <h3 className="font-heading mt-3 text-2xl font-bold text-ink">
                  {card.title}
                </h3>
                <ul className="mt-6 space-y-3">
                  {card.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-muted-foreground"
                    >
                      <Check className="mt-0.5 size-4 shrink-0 text-brand" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-ink transition-all group-hover:gap-3 group-hover:text-brand">
                  Learn More <ArrowUpRight className="size-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <WorkflowTabs />

      <section className="bg-mist/70 py-24">
        <div className="section-shell">
          <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              title="Categories"
              accent="We Serve"
              description="From furniture and lighting to decor and textiles — crafted for buyers, wholesalers, and vendors."
            />
            <Link
              href="/products"
              className={cn(
                buttonVariants({ size: "lg" }),
                "btn-brand shrink-0 self-start md:mb-12"
              )}
            >
              Explore Products
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {productCategories.slice(0, 8).map((category) => (
              <article
                key={category.slug}
                className="group relative overflow-hidden border border-border bg-card"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={category.imageUrl}
                    alt={category.name}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent" />
                  <p className="absolute bottom-3 left-3 text-xs font-semibold tracking-[0.16em] text-white uppercase">
                    {category.badge}
                  </p>
                </div>
                <div className="p-5">
                  <h3 className="font-heading text-lg font-bold text-ink">
                    {category.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {category.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="section-shell grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <SectionHeading
            title="Why"
            accent="only Us"
            description="Consistency, accountability, and collaboration guide every project from concept to launch."
          />
          <div className="grid gap-3 sm:grid-cols-2">
            {homeContent.whyUs.points.map((point, index) => (
              <div
                key={point}
                className="border border-border bg-card/80 p-5 transition-colors hover:border-brand/40"
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

      <StatsCounters />

      <section id="start" className="py-24">
        <div className="section-shell">
          <div className="relative overflow-hidden border border-border bg-ink px-6 py-14 text-center sm:px-12">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,oklch(0.58_0.11_195_/_0.25),transparent_45%)]" />
            <div className="relative">
              <h2 className="font-heading text-3xl font-bold text-white sm:text-5xl">
                Ready to <span className="text-gradient">Grow Together?</span>
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
                    "btn-brand h-12 px-8"
                  )}
                >
                  Buyer / Vendor Login
                </Link>
                <Link
                  href="/signup"
                  className={cn(
                    buttonVariants({ size: "lg", variant: "outline" }),
                    "h-12 border-white/25 bg-transparent px-8 text-white hover:bg-white hover:text-ink"
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
