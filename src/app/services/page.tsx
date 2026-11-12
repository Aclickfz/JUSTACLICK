import type { Metadata } from "next";
import Link from "next/link";
import {
  CheckCircle2,
  Cog,
  Factory,
  Globe,
  PencilRuler,
  Search,
  ShieldCheck,
} from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { ContactForm } from "@/components/contact-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Services",
  description:
    "End-to-end home furnishing solutions – from exclusive designs to global delivery.",
};

const services = [
  {
    badge: "Design",
    icon: PencilRuler,
    title: "In-House Product Design",
    description:
      "Our creative team designs unique, market-ready home furnishing products tailored to your specific needs and target audience.",
    items: [
      "Custom design development",
      "Market research and trends",
      "3D modeling and prototyping",
      "Design optimization",
    ],
  },
  {
    badge: "Sourcing",
    icon: Search,
    title: "Sourcing & Procurement",
    description:
      "We source high-quality materials and components from verified suppliers worldwide, ensuring the best value and quality.",
    items: [
      "Global supplier network",
      "Quality verification",
      "Cost optimization",
      "Supply chain management",
    ],
  },
  {
    badge: "Production",
    icon: Factory,
    title: "Manufacturing & Production",
    description:
      "Complete production management with state-of-the-art facilities and skilled craftsmen ensuring quality and efficiency.",
    items: [
      "Production planning",
      "Quality control",
      "Timeline management",
      "Capacity optimization",
    ],
  },
  {
    badge: "Quality",
    icon: ShieldCheck,
    title: "Quality Assurance & Auditing",
    description:
      "Rigorous quality checks and auditing processes to ensure every product meets our high standards.",
    items: [
      "Multi-stage quality checks",
      "Compliance verification",
      "Performance testing",
      "Documentation and certification",
    ],
  },
  {
    badge: "Custom",
    icon: Cog,
    title: "Customization & Tailored Solutions",
    description:
      "Flexible customization options to meet your specific requirements and market demands.",
    items: [
      "Custom specifications",
      "Brand integration",
      "Size and color options",
      "Special requirements",
    ],
  },
  {
    badge: "Shipping",
    icon: Globe,
    title: "Global Shipping & Logistics",
    description:
      "Worldwide shipping and logistics services to deliver your products anywhere in the world safely and on time.",
    items: [
      "International shipping",
      "Customs clearance",
      "Tracking and monitoring",
      "Insurance coverage",
    ],
  },
];

const process = [
  {
    title: "Consultation & Planning",
    description: "We understand your needs and create a detailed project plan.",
  },
  {
    title: "Design & Development",
    description: "Our team creates custom designs and prototypes.",
  },
  {
    title: "Production & Quality",
    description: "Manufacturing with strict quality control processes.",
  },
  {
    title: "Delivery & Support",
    description: "Global shipping and ongoing customer support.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="What We Do"
        title="Our Services"
        description="End-to-end home furnishing solutions – from exclusive designs to global delivery."
        imageUrl="https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=2000&q=80"
      />

      <section className="relative overflow-hidden py-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,oklch(0.58 0.11 195 / 0.08),transparent_40%)]" />
        <div className="section-shell relative">
          <SectionHeading
            title="Our"
            accent="Services"
            description="Six integrated capabilities that take your product from first sketch to final delivery."
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Card
                key={service.title}
                className="h-full border-border/70 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <CardHeader className="gap-3">
                  <div className="flex size-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand to-brand text-white shadow-md">
                    <service.icon className="size-6" />
                  </div>
                  <Badge className="w-fit bg-brand/15 text-brand hover:bg-brand/15">
                    {service.badge}
                  </Badge>
                  <CardTitle className="font-heading text-xl uppercase">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{service.description}</p>
                  <ul className="mt-4 space-y-2">
                    {service.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2 text-sm text-foreground"
                      >
                        <CheckCircle2 className="size-4 shrink-0 text-brand" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-mist/80 py-20">
        <div className="section-shell">
          <SectionHeading
            title="Our"
            accent="Process"
            description="How we bring your vision to life"
          />
          <ol className="relative mx-auto max-w-4xl space-y-8 before:absolute before:left-5 before:top-0 before:h-full before:w-0.5 before:bg-brand/30 md:before:left-1/2 md:before:-translate-x-1/2">
            {process.map((step, index) => (
              <li
                key={step.title}
                className="relative flex items-start gap-4 md:grid md:grid-cols-[1fr_2.5rem_1fr] md:items-center md:gap-6"
              >
                <div className="relative z-10 flex size-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand to-brand font-bold text-white shadow-lg md:col-start-2 md:row-start-1">
                  {index + 1}
                </div>
                <div
                  className={cn(
                    "flex-1 md:row-start-1",
                    index % 2 === 0 ? "md:col-start-1 md:text-right" : "md:col-start-3"
                  )}
                >
                  <StepCard step={step} index={index} />
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-ink py-20">
        <div className="section-shell text-center">
          <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl">
            Ready to Get Started?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/70">
            Let us help you transform your home furnishing business with our
            comprehensive services.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="#contact"
              className={cn(
                buttonVariants({ size: "lg" }),
                "h-11 bg-white px-6 text-brand hover:bg-brand/10"
              )}
            >
              Request a Quote
            </Link>
            <Link
              href="/portfolio"
              className={cn(
                buttonVariants({ size: "lg", variant: "outline" }),
                "h-11 border-white/60 bg-transparent px-6 text-white hover:bg-white hover:text-brand"
              )}
            >
              Explore Our Designs
            </Link>
            <Link
              href="/suppliers"
              className={cn(
                buttonVariants({ size: "lg", variant: "outline" }),
                "h-11 border-white/60 bg-transparent px-6 text-white hover:bg-white hover:text-brand"
              )}
            >
              Become a Supplier
            </Link>
          </div>
        </div>
      </section>

      <div id="contact">
        <ContactForm />
      </div>
    </>
  );
}

function StepCard({
  step,
  index,
}: {
  step: { title: string; description: string };
  index: number;
}) {
  return (
    <Card className="border-border/70 shadow-md">
      <CardContent>
        <h3 className="font-heading text-lg font-semibold">
          {index + 1}. {step.title}
        </h3>
        <p className="mt-1 text-muted-foreground">{step.description}</p>
      </CardContent>
    </Card>
  );
}
