import type { Metadata } from "next";
import Link from "next/link";
import {
  Download,
  FileText,
  Image as ImageIcon,
  Mail,
  Megaphone,
  Phone,
  Timer,
  Video,
} from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Media",
  description:
    "Press releases, media resources, and company announcements from Just A Click.",
};

const overview = [
  {
    icon: Megaphone,
    title: "Press Releases",
    description: "Official announcements and company news",
    cta: "View All",
    href: "#press",
  },
  {
    icon: ImageIcon,
    title: "Media Kit",
    description: "Logos, images, and company information",
    cta: "Download",
    href: "#media-kit",
  },
  {
    icon: Mail,
    title: "Media Contact",
    description: "Get in touch with our media team",
    cta: "Contact",
    href: "#contact",
  },
];

const releases = [
  {
    date: "Dec 15, 2024",
    title: "Just A Click Successfully Issues US$300M Bond for Refinancing",
    description:
      "Demonstrating financial strength amid global volatility, Just A Click has successfully issued a US$300 million bond to refinance existing debt and fund expansion initiatives. The bond issuance was oversubscribed by 2.3x, reflecting strong investor confidence in the company's growth prospects and sustainable business model.",
  },
  {
    date: "Nov 28, 2024",
    title: "Just A Click Acquires Orrsum to Accelerate Innovation",
    description:
      "Strategic acquisition expands global product expertise and accelerates innovation in sustainable home furnishing solutions across key markets. The acquisition brings together complementary capabilities in design, manufacturing, and digital solutions.",
  },
  {
    date: "Aug 16, 2024",
    title: "Fashion Tech Summit Showcases Sustainability as Key Competitive Advantage",
    description:
      "Hong Kong positioned as Global Supply Chain Hub with focus on sustainable practices. Just A Click leads industry discussion on ESG initiatives and digital transformation in home furnishing supply chains.",
  },
  {
    date: "Jun 19, 2024",
    title: "IFC Partners with Just A Click to Support SME Growth",
    description:
      "This partnership will increase access to affordable supply-chain finance for smaller enterprises in Asia and integrate greater digitalization in supply chain management. The initiative aims to support 1,000+ SMEs across the region.",
  },
];

const kit = [
  { icon: ImageIcon, title: "Company Logos", description: "High-resolution logos in various formats and color schemes.", format: "ZIP • 15.2 MB" },
  { icon: ImageIcon, title: "Product Images", description: "High-quality product photography and lifestyle images.", format: "ZIP • 45.8 MB" },
  { icon: ImageIcon, title: "Executive Photos", description: "Professional headshots of key executives and team members.", format: "ZIP • 8.3 MB" },
  { icon: FileText, title: "Company Fact Sheet", description: "Key company information, statistics, and achievements.", format: "PDF • 2.1 MB" },
  { icon: Video, title: "Video Assets", description: "Company videos, product demonstrations, and interviews.", format: "ZIP • 125.7 MB" },
  { icon: FileText, title: "Infographics", description: "Visual representations of company data and achievements.", format: "ZIP • 12.4 MB" },
];

const team = [
  { name: "Sarah Johnson", role: "Director of Media Relations", email: "sarah.johnson@justaclick.com" },
  { name: "Michael Chen", role: "Media Relations Manager", email: "michael.chen@justaclick.com" },
];

export default function MediaPage() {
  return (
    <>
      <PageHero
        eyebrow="Press & Media"
        title="Media"
        description="Press releases, media resources, and company announcements from Just A Click."
        imageUrl="https://images.unsplash.com/photo-1495020689067-958852a7765e?auto=format&fit=crop&w=2000&q=80"
      />

      <section className="py-20">
        <div className="section-shell">
          <SectionHeading
            title="Media"
            accent="Overview"
            description="Access our latest press releases, media kit, and company resources"
          />
          <div className="grid gap-6 md:grid-cols-3">
            {overview.map((item) => (
              <Card
                key={item.title}
                className="border-border/70 text-center transition-all hover:-translate-y-1 hover:shadow-xl"
              >
                <CardHeader className="items-center">
                  <div className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand to-brand text-white shadow-md">
                    <item.icon className="size-7" />
                  </div>
                  <CardTitle className="mt-2 font-heading text-xl font-bold">
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.description}</p>
                  <Link
                    href={item.href}
                    className={cn(
                      buttonVariants({ variant: "outline", size: "sm" }),
                      "mt-4 border-brand/30 text-brand hover:bg-brand/10"
                    )}
                  >
                    {item.cta}
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="press" className="scroll-mt-24 bg-mist/80 py-20">
        <div className="section-shell">
          <SectionHeading
            title="Press"
            accent="Releases"
            description="Latest company announcements and news"
          />
          <div className="mx-auto grid max-w-4xl gap-5">
            {releases.map((release) => (
              <Card
                key={release.title}
                className="border-border/70 transition-all hover:shadow-lg"
              >
                <CardContent className="space-y-3">
                  <p className="text-sm font-medium text-brand">
                    {release.date}
                  </p>
                  <h3 className="font-heading text-xl font-bold">
                    {release.title}
                  </h3>
                  <p className="text-muted-foreground">{release.description}</p>
                  <div className="flex flex-wrap gap-3 pt-1">
                    <Link
                      href="/news"
                      className={cn(
                        buttonVariants({ size: "sm" }),
                        "btn-brand"
                      )}
                    >
                      Read Full Release
                    </Link>
                    <Link
                      href="#"
                      className={cn(
                        buttonVariants({ variant: "outline", size: "sm" }),
                        "border-brand/30 text-brand hover:bg-brand/10"
                      )}
                    >
                      Download PDF
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="media-kit" className="scroll-mt-24 py-20">
        <div className="section-shell">
          <SectionHeading
            title="Media"
            accent="Kit"
            description="Download logos, images, and company information"
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {kit.map((item) => (
              <Card
                key={item.title}
                className="border-border/70 transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <CardContent className="space-y-3">
                  <div className="flex size-11 items-center justify-center rounded-xl bg-brand/15 text-brand">
                    <item.icon className="size-5" />
                  </div>
                  <h3 className="font-heading text-lg font-bold">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                  <div className="flex items-center justify-between pt-1">
                    <Badge variant="secondary">{item.format}</Badge>
                    <Link
                      href="#"
                      className={cn(
                        buttonVariants({ size: "sm" }),
                        "btn-brand"
                      )}
                    >
                      <Download className="size-3.5" />
                      Download
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="scroll-mt-24 bg-ink py-20 text-white"
      >
        <div className="section-shell">
          <div className="mb-10 text-center">
            <h2 className="font-heading text-3xl font-bold sm:text-4xl">
              Media Contact
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-white/70">
              Get in touch with our media relations team
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            <Card className="border-white/20 bg-white/10 text-white ring-white/20 backdrop-blur">
              <CardHeader>
                <CardTitle className="font-heading text-xl font-bold">
                  Press Inquiries
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="flex items-center gap-3">
                  <Mail className="size-5" /> press@justaclick.com
                </p>
                <p className="flex items-center gap-3">
                  <Phone className="size-5" /> +1 (555) 123-4567
                </p>
                <p className="flex items-center gap-3">
                  <Timer className="size-5" /> Response time: within 24 hours
                </p>
              </CardContent>
            </Card>
            <Card className="border-white/20 bg-white/10 text-white ring-white/20 backdrop-blur">
              <CardHeader>
                <CardTitle className="font-heading text-xl font-bold">
                  Media Relations Team
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {team.map((member) => (
                  <div key={member.email}>
                    <p className="font-semibold">{member.name}</p>
                    <p className="text-sm text-white/70">{member.role}</p>
                    <a
                      href={`mailto:${member.email}`}
                      className="text-sm underline underline-offset-4"
                    >
                      {member.email}
                    </a>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
          <div className="mt-10 text-center">
            <a
              href="mailto:press@justaclick.com"
              className={cn(
                buttonVariants({ size: "lg" }),
                "h-11 bg-white px-6 text-brand hover:bg-brand/10"
              )}
            >
              Contact Media Team
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
