import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

export type FeatureItem = {
  number: string;
  title: string;
  description: string;
  href?: string;
};

export function FeatureStrip({
  items,
  className,
}: {
  items: FeatureItem[];
  className?: string;
}) {
  return (
    <section className={cn("border-y border-border bg-card", className)}>
      <div className="section-shell grid divide-y divide-border md:grid-cols-3 md:divide-x md:divide-y-0">
        {items.map((item) => {
          const inner = (
            <>
              <p className="font-heading text-sm font-bold tracking-[0.14em] text-brand">
                {item.number}
              </p>
              <h3 className="font-heading mt-3 text-xl font-bold text-ink sm:text-2xl">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                {item.description}
              </p>
              {item.href ? (
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-ink transition-all group-hover:gap-2.5 group-hover:text-brand">
                  Learn more <ArrowUpRight className="size-4" />
                </span>
              ) : null}
            </>
          );

          return item.href ? (
            <Link
              key={item.number}
              href={item.href}
              className="group block px-6 py-10 transition-colors hover:bg-mist/80 sm:px-8 sm:py-12"
            >
              {inner}
            </Link>
          ) : (
            <div key={item.number} className="px-6 py-10 sm:px-8 sm:py-12">
              {inner}
            </div>
          );
        })}
      </div>
    </section>
  );
}
