import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { ContactForm } from "@/components/contact-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Supply Chain Innovation",
  description:
    "Customized, end-to-end supply chain and logistics solutions for brands and retailers with unrivaled flexibility and scalability.",
};

const journey = [
  {
    title: "Retail",
    description:
      "The supply chain journey follows the creation and movement of goods around the world. That journey begins and ends with the consumer.",
  },
  {
    title: "Design",
    description:
      "From concept to design brief, the design process translates trends into products that meet the needs of today's demanding consumer.",
  },
  {
    title: "Sourcing",
    description:
      "Finding the right materials and factories that share our commitment to quality, compliance and sustainability is a fundamental activity.",
  },
  {
    title: "Production",
    description:
      "Merchandisers, designers, quality engineers and product development experts work with factories to ensure products meet the requirements.",
  },
  {
    title: "Logistics",
    description:
      "Logistics solutions start from the moment the product leaves the factory to the time it reaches the hands of a happy shopper.",
  },
  {
    title: "Analytics",
    description:
      "Data-driven insights and analytics to optimize every step of the supply chain process.",
  },
];

const platformFeatures = [
  {
    title: "Real-time Visibility",
    description:
      "Track products and orders in real-time across the entire supply chain.",
  },
  {
    title: "Data-Driven Insights",
    description:
      "Capture data-driven insights to enhance productivity and decision making.",
  },
  {
    title: "Disruption Management",
    description: "Stay ahead of disruptions at retail with predictive analytics.",
  },
];

const solutions = [
  {
    title: "Materials Platform",
    description:
      "Comprehensive materials sourcing and management platform with real-time availability and pricing.",
    items: [
      "Global supplier network",
      "Real-time pricing",
      "Quality certifications",
      "Sustainability tracking",
    ],
  },
  {
    title: "3D Design Platform",
    description:
      "Advanced 3D design and prototyping tools for rapid product development and visualization.",
    items: [
      "3D modeling tools",
      "Virtual prototyping",
      "Collaborative design",
      "AR/VR integration",
    ],
  },
  {
    title: "Vendor Platform",
    description:
      "Comprehensive vendor management system for supplier onboarding, performance tracking, and collaboration.",
    items: [
      "Supplier onboarding",
      "Performance tracking",
      "Quality management",
      "Payment processing",
    ],
  },
  {
    title: "Production Platform",
    description:
      "End-to-end production management with real-time monitoring and quality control.",
    items: [
      "Production planning",
      "Quality control",
      "Real-time monitoring",
      "Compliance tracking",
    ],
  },
  {
    title: "Logistics Platform",
    description:
      "Advanced logistics and shipping management with global tracking and optimization.",
    items: [
      "Global shipping",
      "Route optimization",
      "Tracking & monitoring",
      "Customs clearance",
    ],
  },
  {
    title: "Analytics Platform",
    description:
      "Comprehensive analytics and reporting tools for data-driven decision making.",
    items: [
      "Performance analytics",
      "Predictive insights",
      "Custom reporting",
      "Business intelligence",
    ],
  },
];

const impact = [
  { value: "10M+", label: "Products Delivered Annually" },
  { value: "5,000+", label: "Global Suppliers" },
  { value: "50+", label: "Countries Served" },
  { value: "99.5%", label: "On-Time Delivery" },
];

export default function InnovationPage() {
  return (
    <>
      <PageHero
        eyebrow="Innovation"
        title="Supply Chain Innovation"
        description="We convene the global supply chain creating customized, end-to-end supply chain and logistics solutions for brands and retailers. What sets us apart is our high degree of flexibility and scalability which is unrivaled in our industry."
        imageUrl="https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=2000&q=80"
      />

      <section className="py-20">
        <div className="section-shell">
          <SectionHeading
            title="We are creating the"
            accent="supply chain of the future"
            description="Traditional supply chain management is undergoing massive change driven by disruptive technologies in the retail industry. At Just A Click, we're changing the game and landscape of our industry with innovative services and solutions."
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {journey.map((step, index) => (
              <Card
                key={step.title}
                className="border-border/70 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <CardHeader>
                  <div className="flex size-10 items-center justify-center rounded-full bg-gradient-to-br from-brand to-brand font-heading font-bold text-white">
                    {index + 1}
                  </div>
                  <CardTitle className="mt-2 font-heading text-xl font-bold">
                    {step.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-mist/80 py-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,oklch(0.58 0.11 195 / 0.1),transparent_45%)]" />
        <div className="section-shell relative">
          <SectionHeading
            title="The Just A Click"
            accent="Digital Platform"
            description="Our goal is to fully digitalize each step of the global supply chain so that data can flow seamlessly, providing end-to-end visibility for our customers, suppliers and other stakeholders."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {platformFeatures.map((feature) => (
              <Card key={feature.title} className="border-border/70">
                <CardContent className="space-y-2">
                  <h3 className="font-heading text-lg font-bold">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="mx-auto mt-10 max-w-3xl border-brand/20 shadow-lg">
            <CardContent className="space-y-6 text-center">
              <h3 className="font-heading text-2xl font-bold">
                Speed Improvement
              </h3>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <p className="font-heading text-4xl font-bold text-zinc-500">
                    40
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Weeks (Traditional)
                  </p>
                </div>
                <div>
                  <p className="text-gradient font-heading text-4xl font-bold">
                    21
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Weeks (With Digital)
                  </p>
                </div>
                <div>
                  <p className="text-gradient font-heading text-4xl font-bold">
                    47%
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Faster Product Development
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-20">
        <div className="section-shell">
          <SectionHeading
            title="Supply Chain"
            accent="Solutions"
            description="Our supply chain solutions are all about helping our customers and suppliers deliver speed, efficiency and profitability."
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {solutions.map((solution) => (
              <Card
                key={solution.title}
                className="h-full border-border/70 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <CardHeader>
                  <Badge className="w-fit bg-brand/15 text-brand hover:bg-brand/15">
                    Platform
                  </Badge>
                  <CardTitle className="font-heading text-xl font-bold">
                    {solution.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    {solution.description}
                  </p>
                  <ul className="mt-4 space-y-2">
                    {solution.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2 text-sm"
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

      <section className="bg-ink py-20 text-white">
        <div className="section-shell text-center">
          <h2 className="font-heading text-3xl font-bold sm:text-4xl">
            Our Business Impact
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/70">
            Millions of consumer goods pass through Just A Click&apos;s supply
            chain every year
          </p>
          <div className="mt-10 grid grid-cols-2 gap-6 md:grid-cols-4">
            {impact.map((stat) => (
              <div key={stat.label}>
                <p className="font-heading text-4xl font-bold">{stat.value}</p>
                <p className="mt-1 text-white/70">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="section-shell text-center">
          <SectionHeading
            title="Ready to Transform Your"
            accent="Supply Chain?"
            description="Join thousands of brands and retailers who trust Just A Click for their supply chain needs."
          />
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/services"
              className={cn(
                buttonVariants({ size: "lg" }),
                "btn-brand"
              )}
            >
              Explore Solutions
            </Link>
            <Link
              href="#contact"
              className={cn(
                buttonVariants({ size: "lg", variant: "outline" }),
                "border-brand/30 text-brand hover:bg-brand/10"
              )}
            >
              Request Demo
            </Link>
            <Link
              href="/suppliers"
              className={cn(
                buttonVariants({ size: "lg", variant: "outline" }),
                "border-brand/30 text-brand hover:bg-brand/10"
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
