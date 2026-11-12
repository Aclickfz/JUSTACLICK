import type { Metadata } from "next";
import Link from "next/link";
import {
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
  title: "We Manage, You Grow",
  description:
    "Let's remove your production & design burdens from concept to delivery. Every detail is managed by us — you focus on your growth.",
};

const services = [
  {
    badge: "Design",
    icon: PencilRuler,
    title: "In-House Product Design",
    description:
      "Creative and innovative designs tailored to your specific needs and market demands.",
  },
  {
    badge: "Sourcing",
    icon: Search,
    title: "Sourcing & Procurement",
    description:
      "Expert sourcing of materials and components from verified suppliers worldwide.",
  },
  {
    badge: "Production",
    icon: Factory,
    title: "Manufacturing & Production",
    description:
      "Complete production management with quality control and timeline adherence.",
  },
  {
    badge: "Quality",
    icon: ShieldCheck,
    title: "Quality Assurance",
    description:
      "Rigorous quality checks and auditing to ensure the highest standards.",
  },
  {
    badge: "Custom",
    icon: Cog,
    title: "Customization",
    description:
      "Tailored solutions and custom modifications to meet your specific requirements.",
  },
  {
    badge: "Shipping",
    icon: Globe,
    title: "Global Shipping",
    description:
      "Worldwide logistics and delivery services to reach your customers anywhere.",
  },
];

export default function WeManageYouGrowPage() {
  return (
    <>
      <PageHero
        eyebrow="Partnership"
        title="We Manage, You Grow"
        description="Let's remove your production & design burdens from concept to delivery. Every detail is managed by us—you focus on your growth."
        imageUrl="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=2000&q=80"
      />

      <section className="relative overflow-hidden py-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(220,38,38,0.06),transparent_40%)]" />
        <div className="section-shell relative">
          <SectionHeading
            title="Six Ways We"
            accent="Carry the Load"
            description="From the first sketch to the final delivery, our teams handle the heavy lifting."
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Card
                key={service.title}
                className="h-full border-border/70 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <CardHeader className="gap-3">
                  <div className="flex size-12 items-center justify-center rounded-xl bg-gradient-to-br from-red-500 to-red-700 text-white shadow-md">
                    <service.icon className="size-6" />
                  </div>
                  <Badge className="w-fit bg-red-100 text-red-800 hover:bg-red-100">
                    {service.badge}
                  </Badge>
                  <CardTitle className="font-heading text-xl font-bold uppercase">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="#contact"
              className={cn(
                buttonVariants({ size: "lg" }),
                "h-11 bg-gradient-to-r from-red-500 to-red-600 px-6 text-white hover:from-red-600 hover:to-red-700"
              )}
            >
              Request a Quote
            </Link>
            <Link
              href="/portfolio"
              className={cn(
                buttonVariants({ size: "lg", variant: "outline" }),
                "h-11 border-red-200 px-6 text-red-700 hover:bg-red-50"
              )}
            >
              Explore Our Designs
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
