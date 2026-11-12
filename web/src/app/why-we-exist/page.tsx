import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, Quote } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { ContactForm } from "@/components/contact-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Why We Exist",
  description:
    "Driven by Excellence, Innovation & Trust. We empower buyers, wholesalers, and vendors with seamless, reliable, premium solutions.",
};

const differentiators = [
  {
    badge: "Solution",
    title: "End-to-End Solutions",
    description:
      "Complete service from concept to delivery, handling every aspect of your home furnishing needs under one roof.",
    items: [
      "Design conceptualization",
      "Material sourcing",
      "Production management",
      "Quality assurance",
      "Global delivery",
    ],
  },
  {
    badge: "Manufacturing",
    title: "Own Designs & Manufacturing",
    description:
      "In-house design capabilities and manufacturing facilities ensure quality control and innovation at every step.",
    items: [
      "Creative design team",
      "Modern manufacturing",
      "Quality control",
      "Innovation focus",
      "Custom solutions",
    ],
  },
  {
    badge: "Verified",
    title: "Verified Suppliers & Wholesale",
    description:
      "Trusted network of verified suppliers and wholesale partners ensuring consistent quality and competitive pricing.",
    items: [
      "Verified supplier network",
      "Quality certifications",
      "Competitive pricing",
      "Reliable partnerships",
      "Global reach",
    ],
  },
  {
    badge: "Custom",
    title: "Customization & Flexibility",
    description:
      "Tailored solutions and flexible approaches to meet your specific requirements and market demands.",
    items: [
      "Custom specifications",
      "Flexible production",
      "Brand integration",
      "Special requirements",
      "Adaptive solutions",
    ],
  },
  {
    badge: "Global",
    title: "Global Reach",
    description:
      "Worldwide delivery and support network ensuring your products reach customers anywhere in the world.",
    items: [
      "International shipping",
      "Local partnerships",
      "Global support",
      "Market expertise",
      "Cultural adaptation",
    ],
  },
  {
    badge: "Team",
    title: "Dedicated Team",
    description:
      "Expert professionals across design, production, quality, and delivery dedicated to your success.",
    items: [
      "Expert professionals",
      "Specialized skills",
      "Dedicated support",
      "Continuous training",
      "Customer focus",
    ],
  },
];

const values = [
  {
    title: "Excellence",
    description:
      "We strive for the highest quality in everything we do, from design to delivery.",
  },
  {
    title: "Innovation",
    description:
      "We continuously innovate to bring fresh ideas and solutions to the market.",
  },
  {
    title: "Trust",
    description:
      "We build lasting relationships based on trust, transparency, and reliability.",
  },
  {
    title: "Passion",
    description:
      "We are passionate about creating beautiful, functional home furnishing solutions.",
  },
];

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, HomeStyle Inc.",
    quote:
      "Just A Click transformed our product line with their innovative designs and reliable manufacturing. Our sales increased by 40% in just six months.",
  },
  {
    name: "Michael Chen",
    role: "Wholesale Director, Global Furnishings",
    quote:
      "Their end-to-end solution saved us months of work. From design to delivery, everything was handled professionally and on time.",
  },
  {
    name: "Emma Rodriguez",
    role: "Procurement Manager, Luxury Homes",
    quote:
      "The quality and attention to detail is exceptional. Our customers love the products, and we love working with Just A Click.",
  },
];

const stats = [
  { value: "500+", label: "Happy Clients" },
  { value: "50+", label: "Countries Served" },
  { value: "10K+", label: "Products Delivered" },
  { value: "99%", label: "Customer Satisfaction" },
];

export default function WhyWeExistPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Mission"
        title="Why We Exist"
        description="Driven by Excellence, Innovation & Trust. From design to delivery, we empower buyers, wholesalers, and vendors with seamless, reliable, premium solutions."
        imageUrl="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=2000&q=80"
      />

      <section className="py-16">
        <div className="section-shell">
          <p className="mx-auto max-w-4xl text-center font-heading text-2xl font-medium leading-relaxed text-foreground sm:text-3xl">
            We exist to bridge the gap between{" "}
            <span className="text-gradient">creative vision</span> and{" "}
            <span className="text-gradient">market reality</span>, providing
            comprehensive solutions that transform ideas into exceptional home
            furnishing products delivered worldwide.
          </p>
        </div>
      </section>

      <section className="relative overflow-hidden bg-zinc-50 py-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(220,38,38,0.07),transparent_45%)]" />
        <div className="section-shell relative">
          <SectionHeading
            title="What Sets Us"
            accent="Apart"
            description="Our unique approach to home furnishing excellence"
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {differentiators.map((item) => (
              <Card
                key={item.title}
                className="h-full border-border/70 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <CardHeader>
                  <Badge className="w-fit bg-red-100 text-red-800 hover:bg-red-100">
                    {item.badge}
                  </Badge>
                  <CardTitle className="font-heading text-xl uppercase">
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.description}</p>
                  <ul className="mt-4 space-y-2">
                    {item.items.map((li) => (
                      <li key={li} className="flex items-center gap-2 text-sm">
                        <CheckCircle2 className="size-4 shrink-0 text-red-500" />
                        {li}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="section-shell">
          <SectionHeading
            title="Our Core"
            accent="Values"
            description="The principles that guide everything we do"
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <Card
                key={value.title}
                className="border-border/70 text-center transition-all hover:shadow-lg"
              >
                <CardContent className="pt-2">
                  <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-gradient-to-br from-red-500 to-red-700 font-heading text-lg font-bold text-white">
                    {index + 1}
                  </div>
                  <h3 className="mt-4 font-heading text-lg font-bold uppercase">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-zinc-50 py-20">
        <div className="section-shell">
          <SectionHeading
            title="Trusted by Industry"
            accent="Leaders"
            description="Join thousands of satisfied customers worldwide"
          />
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <Card key={t.name} className="border-border/70">
                <CardContent className="space-y-4">
                  <Quote className="size-8 text-red-300" />
                  <p className="text-foreground">&ldquo;{t.quote}&rdquo;</p>
                  <div>
                    <p className="font-heading font-bold uppercase">{t.name}</p>
                    <p className="text-sm text-muted-foreground">{t.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-gradient font-heading text-4xl font-bold">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-red-600 to-red-800 py-20">
        <div className="section-shell text-center">
          <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl">
            Ready to Experience Excellence?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-red-100">
            Join thousands of satisfied customers who trust Just A Click for
            their home furnishing needs.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="#contact"
              className={cn(
                buttonVariants({ size: "lg" }),
                "h-11 bg-white px-6 text-red-700 hover:bg-red-50"
              )}
            >
              Request a Quote
            </Link>
            <Link
              href="/portfolio"
              className={cn(
                buttonVariants({ size: "lg", variant: "outline" }),
                "h-11 border-white/60 bg-transparent px-6 text-white hover:bg-white hover:text-red-700"
              )}
            >
              Explore Our Designs
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

      <div id="contact">
        <ContactForm />
      </div>
    </>
  );
}
