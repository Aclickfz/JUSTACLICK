import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, Leaf, Landmark, Users } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "ESG Strategy",
  description:
    "We responsibly manage our environmental, social and governance performance and work with partners to further the sustainability of supply chains and communities.",
};

const pillars = [
  {
    icon: Leaf,
    title: "Environmental",
    description:
      "Protecting our planet through sustainable practices, renewable energy, and waste reduction initiatives.",
  },
  {
    icon: Users,
    title: "Social",
    description:
      "Supporting our people, communities, and supply chain partners through fair practices and community engagement.",
  },
  {
    icon: Landmark,
    title: "Governance",
    description:
      "Maintaining the highest standards of ethics, transparency, and accountability in all our operations.",
  },
];

const environmental = [
  {
    title: "Renewable Energy",
    description:
      "100% renewable energy in our manufacturing facilities and offices worldwide.",
    stat: "100%",
    statLabel: "Renewable Energy Usage",
  },
  {
    title: "Waste Reduction",
    description:
      "Zero waste to landfill across all our operations through comprehensive recycling programs.",
    stat: "0%",
    statLabel: "Waste to Landfill",
  },
  {
    title: "Carbon Neutral",
    description:
      "Carbon neutral operations through emission reduction and offset programs.",
    stat: "-25%",
    statLabel: "Carbon Footprint Reduction",
  },
];

const labor = [
  "Living wage compliance across all suppliers",
  "Zero tolerance for child labor",
  "Safe working conditions audits",
  "Gender equality and diversity programs",
];

const socialStats = [
  { value: "50,000+", label: "Workers in Our Supply Chain" },
  { value: "100%", label: "Supplier Code Compliance" },
  { value: "25", label: "Countries with Local Programs" },
  { value: "$2M+", label: "Community Investment" },
];

const governance = [
  {
    title: "Ethics & Compliance",
    description:
      "Comprehensive ethics training and compliance programs for all employees.",
  },
  {
    title: "Transparency",
    description:
      "Regular reporting on ESG performance and supply chain practices.",
  },
  {
    title: "Whistleblowing Policy",
    description: "Safe and confidential reporting channels for ethical concerns.",
  },
  {
    title: "Performance Tracking",
    description: "Regular monitoring and improvement of ESG metrics.",
  },
];

const esgNews = [
  {
    date: "Dec 15, 2024",
    title: "Carbon Neutral Manufacturing Achieved",
    description:
      "Just A Click achieves carbon neutral status across all manufacturing facilities.",
  },
  {
    date: "Nov 28, 2024",
    title: "Supplier Diversity Program Launch",
    description:
      "New program to increase supplier diversity and support minority-owned businesses.",
  },
  {
    date: "Oct 12, 2024",
    title: "ESG Report 2024 Published",
    description:
      "Comprehensive ESG report showcasing our sustainability achievements and goals.",
  },
];

export default function EsgPage() {
  return (
    <>
      <PageHero
        eyebrow="Sustainability"
        title="ESG Strategy"
        description="We responsibly manage our environmental, social and governance performance and work with our customers, suppliers and industry partners to further the sustainability of supply chains and communities across our ecosystem."
        imageUrl="https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=2000&q=80"
      />

      <section className="py-20">
        <div className="section-shell">
          <SectionHeading
            title="Our ESG"
            accent="Commitment"
            description="At Just A Click, we believe that sustainable business practices are not just good for the planet and society, but also essential for long-term business success."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {pillars.map((pillar) => (
              <Card
                key={pillar.title}
                className="border-border/70 text-center transition-all hover:-translate-y-1 hover:shadow-xl"
              >
                <CardHeader className="items-center">
                  <div className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand to-brand text-white shadow-md">
                    <pillar.icon className="size-7" />
                  </div>
                  <CardTitle className="mt-2 font-heading text-xl font-bold">
                    {pillar.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{pillar.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-mist/80 py-20">
        <div className="section-shell">
          <SectionHeading
            title="Protecting Our"
            accent="Planet"
            description="Environmental initiatives that make a real difference"
          />
          <div className="grid gap-6 md:grid-cols-3">
            {environmental.map((item) => (
              <Card key={item.title} className="border-border/70">
                <CardContent className="space-y-3">
                  <h3 className="font-heading text-xl font-bold">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground">{item.description}</p>
                  <div className="rounded-none border border-brand/20 bg-brand/10 p-4 text-center">
                    <p className="text-gradient font-heading text-4xl font-bold">
                      {item.stat}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {item.statLabel}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="section-shell">
          <SectionHeading
            title="People in the"
            accent="Supply Chain"
            description="Supporting our people and communities"
          />
          <div className="grid items-start gap-8 lg:grid-cols-2">
            <Card className="border-border/70">
              <CardHeader>
                <Badge className="w-fit bg-brand/15 text-brand hover:bg-brand/15">
                  Social
                </Badge>
                <CardTitle className="font-heading text-2xl font-bold">
                  Fair Labor Practices
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We ensure fair wages, safe working conditions, and respect for
                  human rights throughout our supply chain. Our comprehensive
                  supplier code of conduct sets the highest standards for
                  ethical business practices.
                </p>
                <ul className="mt-5 space-y-3">
                  {labor.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-brand" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            <div className="grid grid-cols-2 gap-4">
              {socialStats.map((stat) => (
                <Card key={stat.label} className="border-border/70 text-center">
                  <CardContent className="space-y-1 py-4">
                    <p className="text-gradient font-heading text-3xl font-bold">
                      {stat.value}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {stat.label}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-mist/80 py-20">
        <div className="section-shell">
          <SectionHeading
            title="A Responsible"
            accent="Citizen"
            description="Transparent governance and ethical business practices"
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {governance.map((item) => (
              <Card key={item.title} className="border-border/70">
                <CardContent className="space-y-2">
                  <h3 className="font-heading text-lg font-bold">
                    {item.title}
                  </h3>
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
            title="ESG"
            accent="News"
            description="Latest updates on our sustainability initiatives"
          />
          <div className="grid gap-6 md:grid-cols-3">
            {esgNews.map((item) => (
              <Card
                key={item.title}
                className="border-border/70 transition-all hover:shadow-lg"
              >
                <CardContent className="space-y-2">
                  <p className="text-sm font-medium text-brand">
                    {item.date}
                  </p>
                  <h3 className="font-heading text-lg font-bold">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
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
            Join Our Sustainability Journey
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/70">
            Together, we can create a more sustainable future for home
            furnishing and global supply chains.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/investors"
              className={cn(
                buttonVariants({ size: "lg" }),
                "h-11 bg-white px-6 text-brand hover:bg-brand/10"
              )}
            >
              Download ESG Report
            </Link>
            <Link
              href="/suppliers"
              className={cn(
                buttonVariants({ size: "lg", variant: "outline" }),
                "h-11 border-white/60 bg-transparent px-6 text-white hover:bg-white hover:text-brand"
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
