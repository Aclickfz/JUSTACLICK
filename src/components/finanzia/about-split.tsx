import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";

export type AboutCard = {
  href: string;
  title: string;
  items: string[];
};

export function AboutSplit({
  title,
  accent,
  description,
  cards,
}: {
  title: string;
  accent?: string;
  description: string;
  cards: AboutCard[];
}) {
  return (
    <section className="py-20 sm:py-24">
      <div className="section-shell">
        <SectionHeading
          title={title}
          accent={accent}
          description={description}
        />
        <div className="grid gap-6 lg:grid-cols-2">
          {cards.map((card) => (
            <Link
              key={card.href}
              href={card.href}
              className="group rounded-lg border border-border bg-card p-8 shadow-[0_8px_30px_rgba(34,49,64,0.04)] transition-all duration-300 hover:-translate-y-0.5 hover:border-brand/30 hover:shadow-[0_16px_40px_rgba(34,49,64,0.08)] sm:p-10"
            >
              <p className="text-xs font-semibold tracking-[0.18em] text-brand uppercase">
                Strategy
              </p>
              <h3 className="font-heading mt-3 text-2xl font-bold text-ink">
                {card.title}
              </h3>
              <ul className="mt-6 space-y-3">
                {card.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-muted-foreground"
                  >
                    <Check className="mt-0.5 size-4 shrink-0 text-brand" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-ink transition-all group-hover:gap-3 group-hover:text-brand">
                Learn More <ArrowUpRight className="size-4" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
