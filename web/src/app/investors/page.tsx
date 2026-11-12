import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, Download, Mail, MapPin, Phone } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Investors",
  description:
    "Financial information, annual reports, and investor resources for Just A Click stakeholders.",
};

const overview = [
  { value: "$2.5B", label: "Market Cap", note: "As of Dec 2024" },
  { value: "$850M", label: "Annual Revenue", note: "2024 Projected" },
  { value: "15.2%", label: "Revenue Growth", note: "YoY Growth" },
  { value: "$45.2", label: "Stock Price", note: "Current Trading" },
];

const story = [
  "Consistent revenue growth over 5 years",
  "Strong market position in home furnishing",
  "ESG leadership and sustainability focus",
  "Digital transformation and innovation",
];

const keyMetrics = [
  { label: "Gross Margin", value: "42.3%" },
  { label: "Operating Margin", value: "18.7%" },
  { label: "Net Margin", value: "12.4%" },
  { label: "ROE", value: "24.8%" },
  { label: "Debt-to-Equity", value: "0.35" },
];

const reports = [
  {
    title: "Annual Report 2024",
    description:
      "Comprehensive report covering financial performance, strategic initiatives, and future outlook.",
    format: "PDF",
    size: "2.4 MB",
  },
  {
    title: "Annual Report 2023",
    description:
      "Previous year's performance and strategic achievements in home furnishing innovation.",
    format: "PDF",
    size: "2.1 MB",
  },
  {
    title: "ESG Report 2024",
    description:
      "Environmental, Social, and Governance performance and sustainability initiatives.",
    format: "PDF",
    size: "1.8 MB",
  },
];

const quarterly = [
  { title: "Q3 2024 Earnings", detail: "Released Nov 15, 2024" },
  { title: "Q2 2024 Earnings", detail: "Released Aug 10, 2024" },
  { title: "Q1 2024 Earnings", detail: "Released May 8, 2024" },
];

const calls = [
  { title: "Q3 2024 Earnings Call", detail: "Nov 15, 2024 • 2:00 PM EST" },
  { title: "Q2 2024 Earnings Call", detail: "Aug 10, 2024 • 2:00 PM EST" },
  { title: "Q1 2024 Earnings Call", detail: "May 8, 2024 • 2:00 PM EST" },
];

const stock = [
  { value: "$45.20", label: "Current Price", note: "+2.3%" },
  { value: "$42.10", label: "52-Week Low", note: "Mar 15, 2024" },
  { value: "$48.50", label: "52-Week High", note: "Nov 20, 2024" },
  { value: "2.1M", label: "Volume", note: "Avg Daily" },
];

const exchangeInfo = [
  ["Exchange", "New York Stock Exchange (NYSE)"],
  ["Ticker Symbol", "JAC"],
  ["Sector", "Consumer Discretionary"],
  ["Industry", "Home Furnishing"],
];

const tradingMetrics = [
  ["Market Cap", "$2.5B"],
  ["P/E Ratio", "18.4"],
  ["Dividend Yield", "2.1%"],
  ["Beta", "1.2"],
];

export default function InvestorsPage() {
  return (
    <>
      <PageHero
        eyebrow="Investor Relations"
        title="Investors"
        description="Financial information, annual reports, and investor resources for Just A Click stakeholders."
        imageUrl="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=2000&q=80"
      />

      <section className="py-20">
        <div className="section-shell">
          <SectionHeading
            title="Investor"
            accent="Overview"
            description="Building value through sustainable growth and innovation"
          />
          <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
            {overview.map((item) => (
              <Card
                key={item.label}
                className="border-border/70 text-center transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <CardContent className="space-y-1 py-2">
                  <p className="text-gradient font-heading text-4xl font-bold">
                    {item.value}
                  </p>
                  <p className="font-semibold">{item.label}</p>
                  <p className="text-sm text-muted-foreground">{item.note}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 grid items-start gap-8 lg:grid-cols-2">
            <Card className="border-border/70">
              <CardHeader>
                <CardTitle className="font-heading text-2xl font-bold">
                  Our Investment Story
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Just A Click has demonstrated consistent growth and
                  profitability through our innovative approach to home
                  furnishing supply chains. We&apos;ve built a sustainable
                  business model that creates value for all stakeholders.
                </p>
                <ul className="mt-5 space-y-3">
                  {story.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-red-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            <Card className="border-border/70">
              <CardHeader>
                <CardTitle className="font-heading text-2xl font-bold">
                  Key Financial Metrics
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableBody>
                    {keyMetrics.map((metric) => (
                      <TableRow key={metric.label}>
                        <TableCell className="py-3 text-muted-foreground">
                          {metric.label}
                        </TableCell>
                        <TableCell className="py-3 text-right font-heading text-lg font-bold text-red-700">
                          {metric.value}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="bg-zinc-50 py-20">
        <div className="section-shell">
          <SectionHeading
            title="Annual"
            accent="Reports"
            description="Comprehensive financial and operational reports"
          />
          <Card className="border-border/70 shadow-md">
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Report</TableHead>
                    <TableHead className="hidden md:table-cell">
                      Description
                    </TableHead>
                    <TableHead>Format</TableHead>
                    <TableHead className="text-right">Download</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {reports.map((report) => (
                    <TableRow key={report.title}>
                      <TableCell className="py-4 font-semibold">
                        {report.title}
                      </TableCell>
                      <TableCell className="hidden max-w-md whitespace-normal py-4 text-muted-foreground md:table-cell">
                        {report.description}
                      </TableCell>
                      <TableCell className="py-4">
                        <Badge variant="secondary">
                          {report.format} • {report.size}
                        </Badge>
                      </TableCell>
                      <TableCell className="py-4 text-right">
                        <Link
                          href="#"
                          className={cn(
                            buttonVariants({ size: "sm" }),
                            "bg-gradient-to-r from-red-500 to-red-600 text-white hover:from-red-600 hover:to-red-700"
                          )}
                        >
                          <Download className="size-3.5" />
                          Download
                        </Link>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-20">
        <div className="section-shell">
          <SectionHeading
            title="Financial"
            accent="Information"
            description="Quarterly results, earnings calls, and financial statements"
          />
          <div className="grid gap-6 lg:grid-cols-2">
            <Card className="border-border/70">
              <CardHeader>
                <CardTitle className="font-heading text-xl font-bold">
                  Quarterly Results
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableBody>
                    {quarterly.map((row) => (
                      <TableRow key={row.title}>
                        <TableCell className="py-3 font-semibold">
                          {row.title}
                        </TableCell>
                        <TableCell className="py-3 text-muted-foreground">
                          {row.detail}
                        </TableCell>
                        <TableCell className="py-3 text-right font-semibold text-red-700">
                          View →
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
            <Card className="border-border/70">
              <CardHeader>
                <CardTitle className="font-heading text-xl font-bold">
                  Earnings Calls
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableBody>
                    {calls.map((row) => (
                      <TableRow key={row.title}>
                        <TableCell className="py-3 font-semibold">
                          {row.title}
                        </TableCell>
                        <TableCell className="py-3 text-muted-foreground">
                          {row.detail}
                        </TableCell>
                        <TableCell className="py-3 text-right font-semibold text-red-700">
                          Listen →
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="bg-zinc-50 py-20">
        <div className="section-shell">
          <SectionHeading
            title="Stock"
            accent="Information"
            description="Current stock performance and trading information"
          />
          <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
            {stock.map((item) => (
              <Card key={item.label} className="border-border/70 text-center">
                <CardContent className="space-y-1 py-2">
                  <p className="text-gradient font-heading text-3xl font-bold">
                    {item.value}
                  </p>
                  <p className="font-semibold">{item.label}</p>
                  <p className="text-sm text-muted-foreground">{item.note}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <Card className="border-border/70">
              <CardHeader>
                <CardTitle className="font-heading text-xl font-bold">
                  Exchange Information
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableBody>
                    {exchangeInfo.map(([label, value]) => (
                      <TableRow key={label}>
                        <TableCell className="py-3 text-muted-foreground">
                          {label}:
                        </TableCell>
                        <TableCell className="py-3 text-right font-semibold">
                          {value}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
            <Card className="border-border/70">
              <CardHeader>
                <CardTitle className="font-heading text-xl font-bold">
                  Key Metrics
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableBody>
                    {tradingMetrics.map(([label, value]) => (
                      <TableRow key={label}>
                        <TableCell className="py-3 text-muted-foreground">
                          {label}:
                        </TableCell>
                        <TableCell className="py-3 text-right font-semibold">
                          {value}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-red-600 to-red-800 py-20 text-white">
        <div className="section-shell text-center">
          <h2 className="font-heading text-3xl font-bold sm:text-4xl">
            Investor Relations
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-red-100">
            For investor inquiries, financial information requests, or to
            schedule a meeting with our investor relations team.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="flex flex-col items-center gap-2">
              <Mail className="size-6" />
              <p className="font-semibold">Email</p>
              <p className="text-red-100">investors@justaclick.com</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Phone className="size-6" />
              <p className="font-semibold">Phone</p>
              <p className="text-red-100">+1 (555) 123-4567</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <MapPin className="size-6" />
              <p className="font-semibold">Address</p>
              <p className="text-red-100">123 Business Ave, Suite 100</p>
            </div>
          </div>
          <a
            href="mailto:investors@justaclick.com"
            className={cn(
              buttonVariants({ size: "lg" }),
              "mt-10 h-11 bg-white px-6 text-red-700 hover:bg-red-50"
            )}
          >
            Contact Investor Relations
          </a>
        </div>
      </section>
    </>
  );
}
