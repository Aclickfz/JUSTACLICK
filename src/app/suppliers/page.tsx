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
  title: "Suppliers",
  description:
    "Partner with Just A Click and become part of our global supply chain network.",
};

const overview = [
  { title: "Global Network", description: "5,000+ suppliers across 50+ countries" },
  { title: "Long-term Partnerships", description: "Average partnership duration of 8+ years" },
  { title: "Quality Standards", description: "99.5% quality compliance rate" },
  { title: "Sustainability", description: "100% ESG compliance requirement" },
];

const whyPartner = [
  "Stable, long-term business relationships",
  "Support for capacity building and development",
  "Access to global markets and customers",
  "Collaboration on sustainability initiatives",
];

const benefits = [
  { label: "Payment Terms", value: "30-60 days" },
  { label: "Minimum Order", value: "Flexible" },
  { label: "Quality Support", value: "24/7" },
  { label: "Training Programs", value: "Free" },
];

const policies = [
  {
    title: "Code of Conduct",
    description:
      "All suppliers must adhere to our comprehensive code of conduct covering labor practices, environmental standards, and business ethics.",
  },
  {
    title: "Environmental Standards",
    description:
      "Suppliers must demonstrate commitment to environmental protection, waste reduction, and sustainable manufacturing practices.",
  },
  {
    title: "Labor Standards",
    description:
      "We require suppliers to maintain fair labor practices, provide safe working conditions, and respect human rights.",
  },
];

const compliance = [
  { title: "Quality Certification", description: "ISO 9001:2015 quality management system certification required." },
  { title: "Environmental Certification", description: "ISO 14001:2015 environmental management system certification preferred." },
  { title: "Social Compliance", description: "SA8000 or equivalent social accountability certification required." },
  { title: "Security Standards", description: "C-TPAT or equivalent supply chain security certification required." },
];

const onboarding = [
  { title: "Initial Application", description: "Submit your company information and capabilities through our online portal." },
  { title: "Capability Assessment", description: "Our team evaluates your manufacturing capabilities, quality systems, and capacity." },
  { title: "Compliance Review", description: "Verification of certifications, policies, and compliance with our standards." },
  { title: "Site Audit", description: "On-site inspection of facilities, processes, and quality systems." },
  { title: "Partnership Agreement", description: "Final approval and signing of supplier partnership agreement." },
];

const resources = [
  { title: "Supplier Handbook", description: "Comprehensive guide covering policies, procedures, and best practices.", cta: "Download" },
  { title: "Training Programs", description: "Online and on-site training programs for quality, sustainability, and compliance.", cta: "Learn More" },
  { title: "Supplier Portal", description: "Online platform for orders, payments, and communication.", cta: "Access Portal" },
  { title: "Performance Dashboard", description: "Track your performance metrics and improvement opportunities.", cta: "View Dashboard" },
  { title: "Support Center", description: "24/7 support for technical issues, questions, and assistance.", cta: "Contact Support" },
  { title: "Supplier Community", description: "Connect with other suppliers, share best practices, and collaborate.", cta: "Join Community" },
];

export default function SuppliersPage() {
  return (
    <>
      <PageHero
        eyebrow="Partner Network"
        title="Suppliers"
        description="Partner with Just A Click and become part of our global supply chain network. We work with suppliers who share our commitment to quality, sustainability, and ethical practices."
        imageUrl="https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=2000&q=80"
      />

      <section className="py-20">
        <div className="section-shell">
          <SectionHeading
            title="Supplier"
            accent="Overview"
            description="Join our network of trusted suppliers worldwide"
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {overview.map((item) => (
              <Card
                key={item.title}
                className="border-border/70 text-center transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <CardContent className="space-y-2">
                  <h3 className="font-heading text-lg font-bold text-brand">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 grid items-start gap-8 lg:grid-cols-2">
            <Card className="border-border/70">
              <CardHeader>
                <CardTitle className="font-heading text-2xl font-bold">
                  Why Partner with Just A Click?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  As a Just A Click supplier, you&apos;ll benefit from our global
                  reach, stable demand, and commitment to long-term
                  partnerships. We provide support for capacity building,
                  quality improvement, and sustainable business practices.
                </p>
                <ul className="mt-5 space-y-3">
                  {whyPartner.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-brand" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            <Card className="border-border/70">
              <CardHeader>
                <CardTitle className="font-heading text-2xl font-bold">
                  Supplier Benefits
                </CardTitle>
              </CardHeader>
              <CardContent className="grid grid-cols-2 gap-4">
                {benefits.map((benefit) => (
                  <div
                    key={benefit.label}
                    className="rounded-none border border-brand/20 bg-brand/10 p-4 text-center"
                  >
                    <p className="text-gradient font-heading text-2xl font-bold">
                      {benefit.value}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {benefit.label}
                    </p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="bg-mist/80 py-20">
        <div className="section-shell">
          <SectionHeading
            title="Supply Chain"
            accent="Policy"
            description="Our commitment to ethical and sustainable supply chain practices"
          />
          <p className="mx-auto mb-10 max-w-4xl text-center text-muted-foreground">
            Just A Click is committed to maintaining the highest standards of
            ethical conduct, environmental responsibility, and social
            accountability throughout our supply chain. Our policies ensure that
            all suppliers meet our rigorous standards for quality,
            sustainability, and ethical practices.
          </p>
          <div className="grid gap-6 md:grid-cols-3">
            {policies.map((policy) => (
              <Card key={policy.title} className="border-border/70">
                <CardContent className="space-y-2">
                  <h3 className="font-heading text-lg font-bold">
                    {policy.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {policy.description}
                  </p>
                  <Link
                    href="#"
                    className="inline-block text-sm font-semibold text-brand hover:underline"
                  >
                    Download PDF →
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
          <h3 className="mb-6 mt-14 text-center font-heading text-2xl font-bold">
            Compliance Requirements
          </h3>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {compliance.map((item) => (
              <Card key={item.title} className="border-border/70">
                <CardContent className="space-y-2">
                  <h4 className="font-heading font-bold">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="section-shell">
          <SectionHeading
            title="Supplier Onboarding"
            accent="Process"
            description="How to become a Just A Click supplier"
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
            {onboarding.map((step, index) => (
              <Card
                key={step.title}
                className="border-border/70 text-center transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <CardContent className="space-y-3">
                  <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-gradient-to-br from-brand to-brand font-heading text-lg font-bold text-white">
                    {index + 1}
                  </div>
                  <Badge className="bg-brand/15 text-brand hover:bg-brand/15">
                    Step {index + 1}
                  </Badge>
                  <h3 className="font-heading font-bold">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-mist/80 py-20">
        <div className="section-shell">
          <SectionHeading
            title="Supplier"
            accent="Resources"
            description="Tools and resources to help you succeed as a Just A Click supplier"
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {resources.map((resource) => (
              <Card
                key={resource.title}
                className="border-border/70 transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <CardContent className="space-y-3">
                  <h3 className="font-heading text-lg font-bold">
                    {resource.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {resource.description}
                  </p>
                  <Link
                    href="#contact"
                    className={cn(
                      buttonVariants({ variant: "outline", size: "sm" }),
                      "border-brand/30 text-brand hover:bg-brand/10"
                    )}
                  >
                    {resource.cta}
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink py-20">
        <div className="section-shell text-center">
          <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl">
            Ready to Become a Supplier?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/70">
            Join our global network of trusted suppliers and help us deliver
            exceptional home furnishing solutions worldwide.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/signup"
              className={cn(
                buttonVariants({ size: "lg" }),
                "h-11 bg-white px-6 text-brand hover:bg-brand/10"
              )}
            >
              Apply Now
            </Link>
            <Link
              href="#contact"
              className={cn(
                buttonVariants({ size: "lg", variant: "outline" }),
                "h-11 border-white/60 bg-transparent px-6 text-white hover:bg-white hover:text-brand"
              )}
            >
              Contact Us
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
