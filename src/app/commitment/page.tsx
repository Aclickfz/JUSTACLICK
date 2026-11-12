import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { ContactForm } from "@/components/contact-form";
import { Card, CardContent } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Our Commitment",
  description:
    "Complete peace of mind through design excellence, consistent quality production, and smooth global logistics.",
};

const commitments = [
  {
    title: "Transparency, Trustworthy and Customer Friendly",
    body: (
      <>
        We always keep things{" "}
        <strong className="text-brand">clear and simple</strong>. No hidden
        surprises, no complicated processes — just honest communication and a
        friendly approach. You can rely on us to be{" "}
        <strong className="text-brand">trustworthy</strong> at every step,
        making it easy to work together.
      </>
    ),
  },
  {
    title: "Maintain Quality and Service",
    body: (
      <>
        Excellence drives every decision and action. From sourcing to delivery,
        the highest standards of quality and service are maintained, ensuring
        every product reflects precision, care, and attention to detail.
        Consistency is never compromised, because your satisfaction is the
        ultimate benchmark.
      </>
    ),
  },
  {
    title: "Custom Solutions",
    body: (
      <>
        Every client has{" "}
        <strong className="text-brand">unique needs and visions</strong>, and
        our solutions are{" "}
        <strong className="text-brand">fully tailored</strong> to match those
        requirements. Whether it&apos;s a specific design, functionality, or
        experience, we deliver results that align seamlessly with your goals,
        turning ideas into reality.
      </>
    ),
  },
  {
    title: "Environmental Commitment",
    body: (
      <>
        Sustainable and eco-friendly practices guide every operation. From
        sourcing to production, we minimize environmental impact while
        delivering premium quality. Protecting the planet is a responsibility we
        embrace as part of our promise to future generations.
      </>
    ),
  },
];

export default function CommitmentPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Promise"
        title="Our Commitment"
        description="Our commitment is to provide complete peace of mind through design excellence, consistent quality production, and smooth global logistics."
        imageUrl="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=2000&q=80"
      />

      <section className="relative overflow-hidden py-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,oklch(0.58 0.11 195 / 0.08),transparent_40%)]" />
        <div className="section-shell relative">
          <SectionHeading
            title="Four Promises,"
            accent="One Standard"
            description="Everything we do is anchored in these commitments to our clients, partners, and planet."
          />
          <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
            {commitments.map((item, index) => (
              <Card
                key={item.title}
                className="h-full border-border/70 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <CardContent className="space-y-4">
                  <div className="flex size-12 items-center justify-center rounded-full bg-gradient-to-br from-brand to-brand font-heading text-xl font-bold text-white shadow-md">
                    {index + 1}
                  </div>
                  <h3 className="font-heading text-xl font-bold">
                    {item.title}
                  </h3>
                  <p className="leading-relaxed text-muted-foreground">
                    {item.body}
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
            Ready to Experience Our Commitment?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/70">
            Partner with us and discover how our commitments translate into
            exceptional results for your business.
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
