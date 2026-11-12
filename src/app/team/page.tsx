import type { Metadata } from "next";
import Link from "next/link";
import { Quote } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { ContactForm } from "@/components/contact-form";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Our Experts",
  description:
    "Every project is backed by a skilled team across design, sourcing, production, quality, and delivery.",
};

const departments = [
  {
    title: "Design & Product Development",
    subtitle: "Creative minds bringing innovative home furnishing solutions to life",
    lead: "Sarah Chen",
    role: "Head of Design & Product Development",
    quote:
      "We don't just design furniture, we create experiences that transform how people live and work in their spaces.",
    teamTitle: "Our Design Team",
    teamBody:
      "Our design team combines creativity with functionality, ensuring every product meets both aesthetic and practical needs. From concept to final product, we bring innovative solutions to the home furnishing industry.",
    stats: [
      { value: "15+", label: "Designers" },
      { value: "500+", label: "Products Designed" },
      { value: "25+", label: "Awards Won" },
      { value: "10+", label: "Years Experience" },
    ],
  },
  {
    title: "Sourcing & Procurement",
    subtitle: "Global network experts ensuring quality materials and reliable suppliers",
    lead: "Michael Rodriguez",
    role: "Head of Sourcing & Procurement",
    quote:
      "We build lasting relationships with suppliers who share our commitment to quality, sustainability, and ethical practices.",
    teamTitle: "Our Sourcing Team",
    teamBody:
      "Our sourcing team maintains relationships with over 5,000 suppliers worldwide, ensuring we have access to the best materials and manufacturing capabilities while maintaining our high standards for quality and sustainability.",
    stats: [
      { value: "5,000+", label: "Global Suppliers" },
      { value: "50+", label: "Countries" },
      { value: "99.5%", label: "Quality Score" },
      { value: "15+", label: "Years Experience" },
    ],
  },
  {
    title: "Manufacturing & Production Management",
    subtitle: "Production experts ensuring efficient and quality manufacturing processes",
    lead: "Emma Thompson",
    role: "Head of Manufacturing & Production",
    quote:
      "Precision in production is not just about quality, it's about delivering excellence that exceeds expectations every time.",
    teamTitle: "Our Production Team",
    teamBody:
      "Our manufacturing team oversees production across multiple facilities, ensuring consistent quality, timely delivery, and adherence to the highest standards of craftsmanship and efficiency.",
    stats: [
      { value: "25+", label: "Production Facilities" },
      { value: "10M+", label: "Products Manufactured" },
      { value: "99.8%", label: "On-Time Delivery" },
      { value: "20+", label: "Years Experience" },
    ],
  },
  {
    title: "Quality Assurance & Auditing",
    subtitle: "Quality experts ensuring every product meets our highest standards",
    lead: "David Kim",
    role: "Head of Quality Assurance & Auditing",
    quote:
      "Quality is not an act, it is a habit. We ensure every product that leaves our facilities meets the highest standards of excellence.",
    teamTitle: "Our Quality Team",
    teamBody:
      "Our quality assurance team implements rigorous testing and auditing processes across all stages of production, ensuring that every product meets our stringent quality standards and customer expectations.",
    stats: [
      { value: "30+", label: "Quality Inspectors" },
      { value: "100%", label: "Quality Check Rate" },
      { value: "0.1%", label: "Defect Rate" },
      { value: "18+", label: "Years Experience" },
    ],
  },
  {
    title: "Logistics & Delivery",
    subtitle: "Global logistics experts ensuring products reach customers worldwide",
    lead: "Lisa Wang",
    role: "Head of Logistics & Delivery",
    quote:
      "We don't just deliver products, we deliver promises. Every package represents our commitment to excellence and customer satisfaction.",
    teamTitle: "Our Logistics Team",
    teamBody:
      "Our logistics team manages the complex process of getting products from our facilities to customers worldwide, ensuring timely delivery, proper handling, and customer satisfaction at every step.",
    stats: [
      { value: "50+", label: "Countries Served" },
      { value: "99.5%", label: "On-Time Delivery" },
      { value: "24/7", label: "Tracking Support" },
      { value: "12+", label: "Years Experience" },
    ],
  },
];

function initials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("");
}

export default function TeamPage() {
  return (
    <>
      <PageHero
        eyebrow="Our People"
        title="Meet Our Experts"
        description="Every project is backed by a skilled team across design, sourcing, production, quality, and delivery."
        imageUrl="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2000&q=80"
      />

      {departments.map((dept, index) => (
        <section
          key={dept.title}
          className={cn("py-20", index % 2 === 1 && "bg-mist/80")}
        >
          <div className="section-shell">
            <SectionHeading
              title={dept.title}
              description={dept.subtitle}
            />
            <div className="grid items-stretch gap-6 lg:grid-cols-2">
              <Card className="border-border/70">
                <CardContent className="flex h-full flex-col gap-5">
                  <div className="flex items-center gap-4">
                    <Avatar className="size-16">
                      <AvatarFallback className="bg-gradient-to-br from-brand to-brand font-heading text-lg font-bold text-white">
                        {initials(dept.lead)}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-heading text-xl font-bold">
                        {dept.lead}
                      </h3>
                      <p className="text-sm font-semibold text-brand">
                        {dept.role}
                      </p>
                    </div>
                  </div>
                  <Quote className="size-7 text-brand/50" />
                  <p className="text-lg italic text-foreground">
                    &ldquo;{dept.quote}&rdquo;
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border/70">
                <CardContent className="space-y-5">
                  <h3 className="font-heading text-xl font-bold">
                    {dept.teamTitle}
                  </h3>
                  <p className="text-muted-foreground">{dept.teamBody}</p>
                  <div className="grid grid-cols-2 gap-4">
                    {dept.stats.map((stat) => (
                      <div
                        key={stat.label}
                        className="rounded-none border border-brand/20 bg-brand/10 p-4 text-center"
                      >
                        <p className="text-gradient font-heading text-2xl font-bold">
                          {stat.value}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {stat.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      ))}

      <section className="bg-ink py-20">
        <div className="section-shell text-center">
          <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl">
            Ready to Work with Our Experts?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/70">
            Our dedicated team of experts is ready to help you bring your home
            furnishing vision to life.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/about"
              className={cn(
                buttonVariants({ size: "lg" }),
                "h-11 bg-white px-6 text-brand hover:bg-brand/10"
              )}
            >
              Meet Our Full Team
            </Link>
            <Link
              href="#contact"
              className={cn(
                buttonVariants({ size: "lg", variant: "outline" }),
                "h-11 border-white/60 bg-transparent px-6 text-white hover:bg-white hover:text-brand"
              )}
            >
              Request a Quote
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
