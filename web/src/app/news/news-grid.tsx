"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export type NewsGridItem = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  coverImage: string;
  publishedAt: string;
};

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export function NewsGrid({
  posts,
  categories,
}: {
  posts: NewsGridItem[];
  categories: string[];
}) {
  const [active, setActive] = useState("all");
  const visible = useMemo(
    () =>
      active === "all" ? posts : posts.filter((p) => p.category === active),
    [active, posts]
  );

  return (
    <div>
      <div className="mb-10 flex flex-wrap justify-center gap-2">
        <Button
          type="button"
          variant={active === "all" ? "default" : "outline"}
          onClick={() => setActive("all")}
          className={cn(
            "h-9 rounded-full px-4",
            active === "all"
              ? "bg-gradient-to-r from-red-500 to-red-600 text-white"
              : "border-red-200 text-red-700 hover:bg-red-50"
          )}
        >
          All News
        </Button>
        {categories.map((category) => (
          <Button
            key={category}
            type="button"
            variant={active === category ? "default" : "outline"}
            onClick={() => setActive(category)}
            className={cn(
              "h-9 rounded-full px-4",
              active === category
                ? "bg-gradient-to-r from-red-500 to-red-600 text-white"
                : "border-red-200 text-red-700 hover:bg-red-50"
            )}
          >
            {category}
          </Button>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {visible.map((post) => (
          <Card
            key={post.slug}
            className="group h-full border-border/70 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="relative aspect-[16/10] overflow-hidden">
              <Image
                src={post.coverImage}
                alt={post.title}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <CardContent className="space-y-2">
              <p className="text-sm text-muted-foreground">
                {formatDate(post.publishedAt)} •{" "}
                <span className="font-medium text-red-700">{post.category}</span>
              </p>
              <h3 className="font-heading text-lg font-bold">{post.title}</h3>
              <p className="text-sm text-muted-foreground">{post.excerpt}</p>
              <span className="inline-block text-sm font-semibold text-red-700">
                Read More →
              </span>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
