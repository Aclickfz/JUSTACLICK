import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

export type ServiceCardItem = {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
};

export function IconServiceGrid({
  items,
  className,
}: {
  items: ServiceCardItem[];
  className?: string;
}) {
  return (
    <div
      className={cn(
        "grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
        className
      )}
    >
      {items.map((item) => {
        const Icon = item.icon;
        return (
          <Link
            key={item.href + item.title}
            href={item.href}
            className="group flex flex-col rounded-[1.25rem] border border-border bg-card p-7 shadow-[0_8px_30px_rgba(34,49,64,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-brand/25 hover:shadow-[0_16px_40px_rgba(5,20,35,0.08)] sm:p-8"
          >
            <span className="inline-flex size-12 items-center justify-center rounded-full bg-mist text-brand transition-colors group-hover:bg-brand group-hover:text-white">
              <Icon className="size-5" />
            </span>
            <h3 className="font-heading mt-5 text-xl font-bold text-ink">
              {item.title}
            </h3>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
              {item.description}
            </p>
            <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand">
              View more
              <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </Link>
        );
      })}
    </div>
  );
}
