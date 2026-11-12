import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { HomeHero } from "@/components/home-hero";
import { WorkflowTabs } from "@/components/workflow-tabs";
import { StatsCounters } from "@/components/stats-counters";
import { ContactForm } from "@/components/contact-form";
import { SectionHeading } from "@/components/section-heading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { homeContent } from "@/content/home";
import { productCategories } from "@/data/seed-data";

export default function HomePage() {
  return (
    <>
      <HomeHero />

      <section className="relative overflow-hidden py-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(220,38,38,0.06),transparent_40%)]" />
        <div className="section-shell relative">
          <SectionHeading
            title="Our"
            accent="Strategy for Excellence"
            description={homeContent.strategy.description}
          />
          <div className="grid gap-6 md:grid-cols-2">
            {homeContent.strategy.cards.map((card) => (
              <Link key={card.href} href={card.href} className="group">
                <Card className="h-full border-border/70 transition-all duration-300 hover:-translate-y-1 hover:border-red-200 hover:shadow-xl">
                  <CardHeader>
                    <Badge className="w-fit bg-red-100 text-red-800 hover:bg-red-100">
                      Strategy
                    </Badge>
                    <CardTitle className="font-heading text-2xl">
                      {card.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {card.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2 text-muted-foreground"
                        >
                          <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-red-500" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-red-700 group-hover:gap-3">
                      Learn More <ArrowRight className="size-4" />
                    </span>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <WorkflowTabs />

      <section className="bg-zinc-50 py-20">
        <div className="section-shell">
          <SectionHeading
            title="Categories"
            accent="We Serve"
            description="From furniture and lighting to decor and textiles — crafted for buyers, wholesalers, and vendors."
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {productCategories.slice(0, 8).map((category) => (
              <Card
                key={category.slug}
                className="border-border/70 transition-all hover:-translate-y-0.5 hover:shadow-md"
              >
                <CardContent className="p-5">
                  <Badge variant="secondary">{category.badge}</Badge>
                  <h3 className="font-heading mt-3 text-lg font-bold">
                    {category.name}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {category.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/products"
              className={cn(
                buttonVariants({ size: "lg" }),
                "bg-gradient-to-r from-red-500 to-red-600 text-white"
              )}
            >
              Explore Products
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="section-shell">
          <SectionHeading
            title="Why"
            accent="only Us"
            description="Consistency, accountability, and collaboration guide every project from concept to launch."
          />
          <div className="grid gap-4 md:grid-cols-2">
            {homeContent.whyUs.points.map((point) => (
              <div
                key={point}
                className="flex items-start gap-3 rounded-2xl border border-border bg-white p-5 shadow-sm"
              >
                <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-red-600" />
                <p className="text-base font-medium text-foreground">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <StatsCounters />

      <section id="start" className="py-20">
        <div className="section-shell text-center">
          <SectionHeading
            title="Ready to"
            accent="Grow Together?"
            description="Sign in as a buyer or vendor and start building with Just A Click."
          />
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/login"
              className={cn(
                buttonVariants({ size: "lg" }),
                "bg-gradient-to-r from-red-500 to-red-600 text-white"
              )}
            >
              Buyer / Vendor Login
            </Link>
            <Link
              href="/signup"
              className={cn(
                buttonVariants({ size: "lg", variant: "outline" }),
                "border-red-200"
              )}
            >
              Create Account
            </Link>
          </div>
        </div>
      </section>

      <ContactForm />
    </>
  );
}
