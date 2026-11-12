import type { Metadata } from "next";
import Link from "next/link";
import {
  Award,
  Globe,
  Lightbulb,
  MapPin,
  Scale,
  TrendingUp,
  Users,
  Briefcase,
} from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { getJobOpenings } from "@/lib/data";
import type { IJobOpening } from "@/models/Career";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join our team and help shape the future of home furnishing. Explore open roles at Just A Click.",
};

const perks = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Work on cutting-edge projects that shape the future of home furnishing and supply chain management.",
  },
  {
    icon: Globe,
    title: "Global Impact",
    description:
      "Make a difference in communities worldwide through sustainable business practices and ethical supply chains.",
  },
  {
    icon: Users,
    title: "Collaborative Culture",
    description:
      "Join a diverse, inclusive team that values collaboration, creativity, and mutual respect.",
  },
  {
    icon: TrendingUp,
    title: "Growth Opportunities",
    description:
      "Continuous learning and development opportunities to advance your career and skills.",
  },
  {
    icon: Scale,
    title: "Work-Life Balance",
    description:
      "Flexible work arrangements and comprehensive benefits to support your well-being.",
  },
  {
    icon: Award,
    title: "Recognition",
    description:
      "Your contributions are valued and recognized through competitive compensation and advancement opportunities.",
  },
];

const benefits = [
  {
    title: "Health & Wellness",
    items: [
      "Comprehensive health insurance",
      "Dental and vision coverage",
      "Mental health support",
      "Wellness programs",
    ],
  },
  {
    title: "Learning & Development",
    items: [
      "Professional development budget",
      "Conference attendance",
      "Online learning platforms",
      "Mentorship programs",
    ],
  },
  {
    title: "Work-Life Balance",
    items: [
      "Flexible work arrangements",
      "Remote work options",
      "Generous PTO",
      "Family leave policies",
    ],
  },
  {
    title: "Financial Benefits",
    items: [
      "Competitive salary",
      "Performance bonuses",
      "Stock options",
      "Retirement planning",
    ],
  },
  {
    title: "Team & Culture",
    items: [
      "Team building events",
      "Company retreats",
      "Diversity & inclusion",
      "Employee recognition",
    ],
  },
  {
    title: "Global Opportunities",
    items: [
      "International assignments",
      "Cross-cultural teams",
      "Global projects",
      "Language learning",
    ],
  },
];

const process = [
  {
    title: "Apply Online",
    description:
      "Submit your application through our careers portal with your resume and cover letter.",
  },
  {
    title: "Initial Review",
    description:
      "Our HR team reviews your application and qualifications for the role.",
  },
  {
    title: "Interviews",
    description:
      "Meet with our team through video or in-person interviews to discuss the role.",
  },
  {
    title: "Offer & Onboarding",
    description:
      "Receive your offer and join our team with a comprehensive onboarding process.",
  },
];

export default async function CareersPage() {
  const jobs = (await getJobOpenings()) as IJobOpening[];

  return (
    <>
      <PageHero
        eyebrow="Join Us"
        title="Careers"
        description="Join our team and help shape the future of home furnishing. We're looking for passionate individuals who share our commitment to excellence, innovation, and sustainability."
        imageUrl="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=2000&q=80"
      />

      <section className="py-20">
        <div className="section-shell">
          <SectionHeading
            title="Why Work"
            accent="With Us?"
            description="Discover what makes Just A Click a great place to work"
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {perks.map((perk) => (
              <Card
                key={perk.title}
                className="border-border/70 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <CardHeader>
                  <div className="flex size-12 items-center justify-center rounded-xl bg-gradient-to-br from-red-500 to-red-700 text-white shadow-md">
                    <perk.icon className="size-6" />
                  </div>
                  <CardTitle className="mt-2 font-heading text-xl font-bold">
                    {perk.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{perk.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="openings" className="scroll-mt-24 bg-zinc-50 py-20">
        <div className="section-shell">
          <SectionHeading
            title="Current"
            accent="Openings"
            description="Explore opportunities to join our team"
          />
          <div className="mx-auto grid max-w-4xl gap-5">
            {jobs.map((job) => (
              <Card
                key={job.slug}
                className="border-border/70 transition-all hover:shadow-lg"
              >
                <CardContent className="space-y-3">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <h3 className="font-heading text-xl font-bold">
                        {job.title}
                      </h3>
                      <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <MapPin className="size-3.5 text-red-500" />
                          {job.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Briefcase className="size-3.5 text-red-500" />
                          {job.type}
                        </span>
                        <span>{job.postedLabel}</span>
                      </div>
                    </div>
                    <Link
                      href="/#contact"
                      className={cn(
                        buttonVariants({ size: "lg" }),
                        "bg-gradient-to-r from-red-500 to-red-600 text-white hover:from-red-600 hover:to-red-700"
                      )}
                    >
                      Apply Now
                    </Link>
                  </div>
                  <p className="text-muted-foreground">{job.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {job.tags.map((tag) => (
                      <Badge
                        key={tag}
                        className="bg-red-100 text-red-800 hover:bg-red-100"
                      >
                        {tag}
                      </Badge>
                    ))}
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
            title="Benefits &"
            accent="Perks"
            description="Comprehensive benefits package designed to support your well-being and success"
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((group) => (
              <Card key={group.title} className="border-border/70">
                <CardHeader>
                  <CardTitle className="font-heading text-lg font-bold">
                    {group.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {group.items.map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <span className="size-1.5 rounded-full bg-red-500" />
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

      <section className="bg-zinc-50 py-20">
        <div className="section-shell">
          <SectionHeading
            title="Application"
            accent="Process"
            description="How to join our team"
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {process.map((step, index) => (
              <Card
                key={step.title}
                className="border-border/70 text-center transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <CardContent className="space-y-3">
                  <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-gradient-to-br from-red-500 to-red-700 font-heading text-lg font-bold text-white">
                    {index + 1}
                  </div>
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

      <section className="bg-gradient-to-br from-red-600 to-red-800 py-20">
        <div className="section-shell text-center">
          <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl">
            Ready to Join Our Team?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-red-100">
            Explore our current openings and find the perfect role to advance
            your career with Just A Click.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="#openings"
              className={cn(
                buttonVariants({ size: "lg" }),
                "h-11 bg-white px-6 text-red-700 hover:bg-red-50"
              )}
            >
              View All Jobs
            </Link>
            <Link
              href="/#contact"
              className={cn(
                buttonVariants({ size: "lg", variant: "outline" }),
                "h-11 border-white/60 bg-transparent px-6 text-white hover:bg-white hover:text-red-700"
              )}
            >
              Contact HR
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
