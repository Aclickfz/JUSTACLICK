import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { ContactForm } from "@/components/contact-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "We aspire to deliver value in global supply chains by living our values around people, partners and planet.",
};

const values = [
  {
    title: "Humility",
    description:
      "We approach every challenge with humility and respect for all stakeholders.",
  },
  {
    title: "Entrepreneurship",
    description:
      "We embrace innovation and take calculated risks to drive positive change.",
  },
  {
    title: "Family",
    description:
      "We treat our team, partners, and community as an extended family.",
  },
];

const history = [
  {
    year: "2010",
    title: "The Beginning",
    description:
      "Just A Click was founded with a vision to revolutionize home furnishing supply chains through innovative design and manufacturing solutions.",
  },
  {
    year: "2015",
    title: "Global Expansion",
    description:
      "Expanded operations to 15 countries, establishing our first international manufacturing facilities and supplier networks.",
  },
  {
    year: "2018",
    title: "Digital Transformation",
    description:
      "Launched our digital platform, revolutionizing supply chain management with real-time visibility and analytics.",
  },
  {
    year: "2020",
    title: "Sustainability Leadership",
    description:
      "Achieved carbon neutral operations and launched comprehensive ESG initiatives across our global supply chain.",
  },
  {
    year: "2024",
    title: "Today",
    description:
      "Leading global supply chain solutions with 50+ countries served, 5,000+ suppliers, and millions of products delivered annually.",
  },
];

const governance = [
  {
    title: "Our Leadership",
    description:
      "Experienced leadership team with diverse backgrounds in supply chain, manufacturing, and technology.",
    href: "/team",
    cta: "Meet Our Team →",
  },
  {
    title: "Ethics & Compliance",
    description:
      "Comprehensive ethics and compliance programs ensuring the highest standards of business conduct.",
    href: "/esg",
    cta: "Learn More →",
  },
  {
    title: "Performance & Reporting",
    description:
      "Regular performance monitoring and transparent reporting to all stakeholders.",
    href: "/investors",
    cta: "View Reports →",
  },
];

const reach = [
  { value: "50+", label: "Countries Served" },
  { value: "5,000+", label: "Global Suppliers" },
  { value: "2,500+", label: "Team Members" },
  { value: "25", label: "Years of Experience" },
];

const leaders = [
  {
    name: "Sarah Johnson",
    role: "Chief Executive Officer",
    bio: "20+ years in supply chain management and global operations",
  },
  {
    name: "Michael Chen",
    role: "Chief Technology Officer",
    bio: "Leading digital transformation and innovation initiatives",
  },
  {
    name: "Emma Rodriguez",
    role: "Chief Sustainability Officer",
    bio: "Driving ESG initiatives and sustainable business practices",
  },
];

function initials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("");
}

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Who We Are"
        title="About Just A Click"
        description="We aspire to deliver value in global supply chains by living our values around people, partners and planet."
        imageUrl="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=2000&q=80"
      />

      <section className="py-20">
        <div className="section-shell">
          <SectionHeading
            title="Our"
            accent="Purpose"
            description="At Just A Click, value has tangible meaning and we strive to deliver value to our stakeholders with each and every interaction. We live by our values of humility, entrepreneurship and family, as they form the basis of our culture, our brand and our strategy."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {values.map((value) => (
              <Card
                key={value.title}
                className="border-border/70 text-center transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <CardHeader>
                  <CardTitle className="font-heading text-xl font-bold uppercase text-red-700">
                    {value.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <p className="mx-auto mt-10 max-w-3xl text-center text-muted-foreground">
            We are putting purpose at the core of what we do at Just A Click to
            make a difference along the supply chain. We know we cannot do this
            alone and are using our convening power to enable collaboration and
            partnerships to make positive impacts that are scalable and
            sustainable.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/purpose"
              className={cn(
                buttonVariants({ size: "lg" }),
                "bg-gradient-to-r from-red-500 to-red-600 text-white hover:from-red-600 hover:to-red-700"
              )}
            >
              Our Purpose
            </Link>
            <Link
              href="/commitment"
              className={cn(
                buttonVariants({ size: "lg", variant: "outline" }),
                "border-red-200 text-red-700 hover:bg-red-50"
              )}
            >
              Our Values
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-zinc-50 py-20">
        <div className="section-shell">
          <SectionHeading
            title="Our"
            accent="History"
            description="From startup to global leader in home furnishing supply chains"
          />
          <ol className="relative mx-auto max-w-3xl space-y-8 border-l-2 border-red-200 pl-8">
            {history.map((event) => (
              <li key={event.year} className="relative">
                <span className="absolute -left-[2.6rem] top-1 flex size-5 items-center justify-center rounded-full bg-gradient-to-br from-red-500 to-red-700 ring-4 ring-white" />
                <Card className="border-border/70">
                  <CardContent>
                    <p className="text-gradient font-heading text-2xl font-bold">
                      {event.year}
                    </p>
                    <h3 className="font-heading text-lg font-semibold">
                      {event.title}
                    </h3>
                    <p className="mt-1 text-muted-foreground">
                      {event.description}
                    </p>
                  </CardContent>
                </Card>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-20">
        <div className="section-shell">
          <SectionHeading
            title="Our"
            accent="Governance"
            description="We are committed to the principles of good corporate governance which emphasize transparency, accountability and independence"
          />
          <div className="grid gap-6 md:grid-cols-3">
            {governance.map((item) => (
              <Card key={item.title} className="border-border/70">
                <CardHeader>
                  <CardTitle className="font-heading text-xl font-bold">
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.description}</p>
                  <Link
                    href={item.href}
                    className="mt-4 inline-block text-sm font-semibold text-red-700 hover:underline"
                  >
                    {item.cta}
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-red-600 to-red-800 py-20 text-white">
        <div className="section-shell text-center">
          <h2 className="font-heading text-3xl font-bold sm:text-4xl">
            Our Reach
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-red-100">
            We operate one of the most extensive global supply chain networks in
            the world
          </p>
          <div className="mt-10 grid grid-cols-2 gap-6 md:grid-cols-4">
            {reach.map((stat) => (
              <div key={stat.label}>
                <p className="font-heading text-4xl font-bold">{stat.value}</p>
                <p className="mt-1 text-red-100">{stat.label}</p>
              </div>
            ))}
          </div>
          <p className="mx-auto mt-10 max-w-3xl text-red-50">
            Leveraging our convening power, we bring together diverse players in
            the supply chain to enact change for the benefit of our industry.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="section-shell">
          <SectionHeading
            title="Our Leadership"
            accent="Team"
            description="Meet the leaders driving innovation and excellence at Just A Click"
          />
          <div className="grid gap-6 md:grid-cols-3">
            {leaders.map((leader) => (
              <Card
                key={leader.name}
                className="border-border/70 text-center transition-all hover:shadow-lg"
              >
                <CardContent className="space-y-3 pt-2">
                  <Avatar className="mx-auto size-20">
                    <AvatarFallback className="bg-gradient-to-br from-red-500 to-red-700 font-heading text-xl font-bold text-white">
                      {initials(leader.name)}
                    </AvatarFallback>
                  </Avatar>
                  <h3 className="font-heading text-lg font-bold">
                    {leader.name}
                  </h3>
                  <p className="text-sm font-semibold text-red-700">
                    {leader.role}
                  </p>
                  <p className="text-sm text-muted-foreground">{leader.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/team"
              className={cn(
                buttonVariants({ size: "lg", variant: "outline" }),
                "border-red-200 text-red-700 hover:bg-red-50"
              )}
            >
              Meet Our Full Team
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-zinc-50 py-20">
        <div className="section-shell text-center">
          <SectionHeading
            title="Join Our"
            accent="Journey"
            description="Be part of the future of home furnishing supply chains. Together, we can create positive impact for people, partners, and planet."
          />
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/suppliers"
              className={cn(
                buttonVariants({ size: "lg" }),
                "bg-gradient-to-r from-red-500 to-red-600 text-white hover:from-red-600 hover:to-red-700"
              )}
            >
              Partner with Us
            </Link>
            <Link
              href="/careers"
              className={cn(
                buttonVariants({ size: "lg", variant: "outline" }),
                "border-red-200 text-red-700 hover:bg-red-50"
              )}
            >
              View Careers
            </Link>
            <Link
              href="#contact"
              className={cn(
                buttonVariants({ size: "lg", variant: "outline" }),
                "border-red-200 text-red-700 hover:bg-red-50"
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
