import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { getPortfolioItems } from "@/lib/data";
import type { IPortfolioItem } from "@/models/Portfolio";
import { PortfolioGrid, type PortfolioGridItem } from "./portfolio-grid";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "From in-house designs to custom wholesale projects, see how we bring ideas to life globally.",
};

const featuredStats = [
  { value: "50+", label: "Properties Renovated" },
  { value: "5,000+", label: "Rooms Furnished" },
  { value: "15", label: "Countries Served" },
  { value: "6", label: "Months Timeline" },
];

export default async function PortfolioPage() {
  const docs = (await getPortfolioItems()) as IPortfolioItem[];
  // Serialize to plain objects so Mongo documents can cross the client boundary.
  const items: PortfolioGridItem[] = docs.map((doc) => ({
    slug: String(doc.slug),
    title: String(doc.title),
    description: String(doc.description),
    category: String(doc.category),
    year: String(doc.year ?? "2024"),
    imageUrl: String(doc.imageUrl),
  }));

  return (
    <>
      <PageHero
        eyebrow="Our Work"
        title="Our Portfolio"
        description="From in-house designs to custom wholesale projects, see how we bring ideas to life globally."
        imageUrl="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=2000&q=80"
      />

      <section className="py-20">
        <div className="section-shell">
          <SectionHeading
            title="Selected"
            accent="Projects"
            description="Filter by category to explore furniture, lighting, decor, textiles, and custom programs."
          />
          <PortfolioGrid items={items} />
        </div>
      </section>

      <section className="relative overflow-hidden bg-zinc-50 py-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(220,38,38,0.08),transparent_45%)]" />
        <div className="section-shell relative">
          <SectionHeading
            title="Featured"
            accent="Project"
            description="A closer look at one of our most successful projects"
          />
          <Card className="overflow-hidden border-border/70 shadow-lg lg:flex-row">
            <div className="relative min-h-72 lg:w-1/2">
              <Image
                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1400&q=80"
                alt="Global hotel chain renovation"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <CardContent className="space-y-5 p-6 sm:p-10 lg:w-1/2">
              <Badge className="bg-red-100 text-red-800 hover:bg-red-100">
                Case Study
              </Badge>
              <h3 className="font-heading text-2xl font-bold sm:text-3xl">
                Global Hotel Chain Renovation
              </h3>
              <p className="text-muted-foreground">
                We partnered with a major international hotel chain to
                completely renovate 50+ properties across 15 countries. Our team
                designed, manufactured, and delivered custom furniture,
                lighting, and decor for over 5,000 rooms.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {featuredStats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-xl border border-red-100 bg-red-50/60 p-4"
                  >
                    <p className="text-gradient font-heading text-3xl font-bold">
                      {stat.value}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
              <Link
                href="/services"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "bg-gradient-to-r from-red-500 to-red-600 text-white hover:from-red-600 hover:to-red-700"
                )}
              >
                View Case Study
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="bg-gradient-to-br from-red-600 to-red-800 py-20">
        <div className="section-shell text-center">
          <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl">
            Ready to Start Your Project?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-red-100">
            Let us help you create something extraordinary. From concept to
            completion, we&apos;re here to bring your vision to life.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/products"
              className={cn(
                buttonVariants({ size: "lg" }),
                "h-11 bg-white px-6 text-red-700 hover:bg-red-50"
              )}
            >
              View Full Portfolio
            </Link>
            <Link
              href="/services#contact"
              className={cn(
                buttonVariants({ size: "lg", variant: "outline" }),
                "h-11 border-white/60 bg-transparent px-6 text-white hover:bg-white hover:text-red-700"
              )}
            >
              Request a Quote
            </Link>
            <Link
              href="/suppliers"
              className={cn(
                buttonVariants({ size: "lg", variant: "outline" }),
                "h-11 border-white/60 bg-transparent px-6 text-white hover:bg-white hover:text-red-700"
              )}
            >
              Partner with Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
