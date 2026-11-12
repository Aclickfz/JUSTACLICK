import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getNewsPosts, getPressReleases } from "@/lib/data";
import type { INewsPost, IPressRelease } from "@/models/News";
import { NewsletterForm } from "./newsletter-form";
import { NewsGrid } from "./news-grid";

export const metadata: Metadata = {
  title: "News",
  description:
    "Stay updated with the latest developments in home furnishing, supply chain innovation, and sustainability initiatives.",
};

function formatDate(date: Date | string) {
  return new Date(date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export default async function NewsPage() {
  const [postDocs, releaseDocs] = await Promise.all([
    getNewsPosts(),
    getPressReleases(),
  ]);
  const posts = postDocs as INewsPost[];
  const releases = releaseDocs as IPressRelease[];

  const featured = posts.filter((p) => p.featured);
  const featuredPosts = featured.length ? featured : posts.slice(0, 2);
  const featuredSlugs = new Set(featuredPosts.map((p) => p.slug));
  const otherPosts = posts.filter((p) => !featuredSlugs.has(p.slug));
  const categories = Array.from(new Set(posts.map((p) => p.category)));

  return (
    <>
      <PageHero
        eyebrow="Newsroom"
        title="Latest News"
        description="Stay updated with the latest developments in home furnishing, supply chain innovation, and sustainability initiatives."
        imageUrl="https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=2000&q=80"
      />

      <section className="py-20">
        <div className="section-shell">
          <SectionHeading
            title="Featured"
            accent="News"
            description="Latest updates and announcements from Just A Click"
          />
          <div className="grid gap-6 lg:grid-cols-2">
            {featuredPosts.map((post) => (
              <Card
                key={post.slug}
                className="group h-full border-border/70 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={post.coverImage}
                    alt={post.title}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <Badge className="bg-red-100 text-red-800 hover:bg-red-100">
                      {post.category}
                    </Badge>
                    {formatDate(post.publishedAt)}
                  </div>
                  <CardTitle className="font-heading text-2xl font-bold">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{post.excerpt}</p>
                  <span className="mt-4 inline-block text-sm font-semibold text-red-700">
                    Read More →
                  </span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-zinc-50 py-20">
        <div className="section-shell">
          <SectionHeading
            title="News"
            accent="Categories"
            description="Browse news by category"
          />
          <NewsGrid
            categories={categories}
            posts={otherPosts.map((post) => ({
              slug: post.slug,
              title: post.title,
              excerpt: post.excerpt,
              category: post.category,
              coverImage: post.coverImage,
              publishedAt: new Date(post.publishedAt).toISOString(),
            }))}
          />
        </div>
      </section>

      <section className="py-20">
        <div className="section-shell">
          <SectionHeading
            title="Press"
            accent="Releases"
            description="Official announcements and press releases"
          />
          <div className="mx-auto grid max-w-4xl gap-4">
            {releases.map((release) => (
              <Card
                key={release.slug}
                className="border-border/70 transition-all hover:shadow-md"
              >
                <CardContent className="space-y-2">
                  <p className="text-sm font-medium text-red-700">
                    {formatDate(release.publishedAt)}
                  </p>
                  <h3 className="font-heading text-lg font-bold">
                    {release.title}
                  </h3>
                  <p className="text-muted-foreground">{release.excerpt}</p>
                  <Link
                    href="/media"
                    className="inline-block text-sm font-semibold text-red-700 hover:underline"
                  >
                    Read Full Release →
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-red-600 to-red-800 py-20">
        <div className="section-shell text-center">
          <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl">
            Stay Updated
          </h2>
          <p className="mx-auto mb-8 mt-4 max-w-2xl text-lg text-red-100">
            Subscribe to our newsletter for the latest news, insights, and
            updates from Just A Click.
          </p>
          <NewsletterForm />
        </div>
      </section>
    </>
  );
}
