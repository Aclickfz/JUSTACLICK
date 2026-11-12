import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { ContactForm } from "@/components/contact-form";
import { Card, CardContent } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Our Purpose",
  description:
    "We aspire to deliver value in global supply chains by living our values around people, partners and planet.",
};

const values = [
  {
    title: "We Value Humility",
    body: (
      <>
        Humility means staying grounded no matter how much we achieve. We listen
        carefully, learn continuously, and{" "}
        <strong className="text-brand">
          put our clients and their needs first
        </strong>
        . By keeping humility at our core, we ensure every interaction is
        respectful, thoughtful, and focused on building{" "}
        <strong className="text-brand">long-lasting relationships</strong>.
      </>
    ),
  },
  {
    title: "We Value Entrepreneurship",
    body: (
      <>
        Entrepreneurship drives our innovation, creativity, and proactive
        approach. We constantly explore new ideas, trends, and solutions to help
        our clients grow. This mindset ensures we are agile, solution-oriented,
        and always ready to turn challenges into opportunities.
      </>
    ),
  },
  {
    title: "We Value Family",
    body: (
      <>
        Family is about{" "}
        <strong className="text-brand">trust, care, and support</strong>. We
        treat our clients, partners, and team like family, nurturing
        relationships built on respect and loyalty. This value ensures that{" "}
        <strong className="text-brand">collaboration</strong> feels personal,
        warm, and dependable, creating a sense of belonging in everything we do.
      </>
    ),
  },
];

export default function PurposePage() {
  return (
    <>
      <PageHero
        eyebrow="Who We Are"
        title="Our Purpose"
        description="We aspire to deliver value in global supply chains by living our values around people, partners and planet."
        imageUrl="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=2000&q=80"
      />

      <section className="relative overflow-hidden py-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,oklch(0.58 0.11 195 / 0.08),transparent_40%)]" />
        <div className="section-shell relative">
          <SectionHeading
            title="Our"
            accent="Values"
            description="Our values of humility, entrepreneurship, and family guide everything we do. They shape how we serve our clients, innovate for growth, and build meaningful relationships. These core principles ensure we stay grounded, remain agile, and create a collaborative environment where trust and respect thrive."
          />
          <div className="grid gap-6 lg:grid-cols-3">
            {values.map((value, index) => (
              <Card
                key={value.title}
                className="h-full border-border/70 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <CardContent className="space-y-4">
                  <div className="flex size-12 items-center justify-center rounded-full bg-gradient-to-br from-brand to-brand font-heading text-xl font-bold text-white shadow-md">
                    {index + 1}
                  </div>
                  <h3 className="font-heading text-xl font-bold">
                    {value.title}
                  </h3>
                  <p className="leading-relaxed text-muted-foreground">
                    {value.body}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink py-20">
        <div className="section-shell text-center">
          <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl">
            Ready to Partner with Us?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/70">
            Join us in creating sustainable value across global supply chains.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="#contact"
              className={cn(
                buttonVariants({ size: "lg" }),
                "h-11 bg-white px-6 text-brand hover:bg-brand/10"
              )}
            >
              Get in Touch
            </Link>
            <Link
              href="/about"
              className={cn(
                buttonVariants({ size: "lg", variant: "outline" }),
                "h-11 border-white/60 bg-transparent px-6 text-white hover:bg-white hover:text-brand"
              )}
            >
              Learn More About Us
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
