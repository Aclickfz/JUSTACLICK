"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export type PortfolioGridItem = {
  slug: string;
  title: string;
  description: string;
  category: string;
  year: string;
  imageUrl: string;
};

const filters = [
  { value: "all", label: "All Projects" },
  { value: "furniture", label: "Furniture" },
  { value: "lighting", label: "Lighting" },
  { value: "decor", label: "Decor" },
  { value: "textiles", label: "Textiles" },
  { value: "custom", label: "Custom Projects" },
];

function labelFor(category: string) {
  return (
    filters.find((f) => f.value === category)?.label.replace(" Projects", "") ??
    category.charAt(0).toUpperCase() + category.slice(1)
  );
}

export function PortfolioGrid({ items }: { items: PortfolioGridItem[] }) {
  const [active, setActive] = useState("all");

  const visible = useMemo(
    () =>
      active === "all" ? items : items.filter((i) => i.category === active),
    [active, items]
  );

  return (
    <div>
      <div className="mb-10 flex flex-wrap justify-center gap-2">
        {filters.map((filter) => (
          <Button
            key={filter.value}
            type="button"
            variant={active === filter.value ? "default" : "outline"}
            onClick={() => setActive(filter.value)}
            className={cn(
              "h-9 rounded-full px-4",
              active === filter.value
                ? "btn-brand"
                : "border-brand/30 text-brand hover:bg-brand/10"
            )}
          >
            {filter.label}
          </Button>
        ))}
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((item) => (
          <Card
            key={item.slug}
            className="group h-full border-border/70 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={item.imageUrl}
                alt={item.title}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <CardContent className="space-y-3">
              <Badge className="bg-brand/15 text-brand hover:bg-brand/15">
                {labelFor(item.category)} • {item.year}
              </Badge>
              <h3 className="font-heading text-lg font-bold">{item.title}</h3>
              <p className="text-sm text-muted-foreground">
                {item.description}
              </p>
              <span className="inline-block text-sm font-semibold text-brand">
                View Details →
              </span>
            </CardContent>
          </Card>
        ))}
      </div>

      {visible.length === 0 ? (
        <p className="py-10 text-center text-muted-foreground">
          No projects in this category yet.
        </p>
      ) : null}
    </div>
  );
}
