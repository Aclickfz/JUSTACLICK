import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { ContactForm } from "@/components/contact-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { getFeaturedProducts, getProductCategories } from "@/lib/data";
import type { IProduct, IProductCategory } from "@/models/Product";

export const metadata: Metadata = {
  title: "Products",
  description:
    "From furniture and lighting to decor and textiles — crafted for buyers, wholesalers, and vendors.",
};

const gradient =
  "bg-gradient-to-r from-red-500 to-red-600 text-white hover:from-red-600 hover:to-red-700";

export default async function ProductsPage() {
  const [categoryDocs, productDocs] = await Promise.all([
    getProductCategories(),
    getFeaturedProducts(),
  ]);
  const categories = categoryDocs as IProductCategory[];
  const products = productDocs as IProduct[];

  return (
    <>
      <PageHero
        eyebrow="Catalog"
        title="Our Products"
        description="From furniture and lighting to decor and textiles — crafted for buyers, wholesalers, and vendors."
        imageUrl="https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=2000&q=80"
      />

      <section className="relative overflow-hidden py-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(220,38,38,0.06),transparent_40%)]" />
        <div className="section-shell relative">
          <SectionHeading
            title="Product"
            accent="Categories"
            description="Explore eight categories built for every space and every business model."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((category) => (
              <Card
                key={category.slug}
                className="group h-full border-border/70 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={category.imageUrl}
                    alt={category.name}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <Badge className="w-fit bg-red-100 text-red-800 hover:bg-red-100">
                    {category.badge}
                  </Badge>
                  <CardTitle className="font-heading text-lg font-bold">
                    {category.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-1 flex-col">
                  <p className="text-sm text-muted-foreground">
                    {category.description}
                  </p>
                  <ul className="mt-3 space-y-1.5">
                    {category.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2 text-sm"
                      >
                        <CheckCircle2 className="size-3.5 shrink-0 text-red-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="#contact"
                    className={cn(
                      buttonVariants({ variant: "outline", size: "sm" }),
                      "mt-5 w-fit border-red-200 text-red-700 hover:bg-red-50"
                    )}
                  >
                    {category.cta}
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-zinc-50 py-20">
        <div className="section-shell">
          <SectionHeading
            title="Featured"
            accent="Products"
            description="Discover our most popular and trending items"
          />
          <div className="grid gap-6 md:grid-cols-3">
            {products.map((product) => (
              <Card
                key={product.slug}
                className="group border-border/70 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={product.imageUrl}
                    alt={product.name}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <Badge className="absolute left-3 top-3 bg-red-600 text-white hover:bg-red-600">
                    Featured
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle className="font-heading text-xl font-bold">
                    {product.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{product.description}</p>
                  <div className="mt-5 flex items-center justify-between">
                    <span className="font-heading text-2xl font-bold text-red-700">
                      ${product.price.toLocaleString("en-US")}
                    </span>
                    <Link
                      href="#contact"
                      className={cn(buttonVariants({ size: "lg" }), gradient)}
                    >
                      Add to Cart
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-red-600 to-red-800 py-20">
        <div className="section-shell text-center">
          <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl">
            Ready to Explore Our Products?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-red-100">
            Browse our extensive collection and find the perfect pieces for your
            home or business.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="#contact"
              className={cn(
                buttonVariants({ size: "lg" }),
                "h-11 bg-white px-6 text-red-700 hover:bg-red-50"
              )}
            >
              View Full Collection
            </Link>
            <Link
              href="#contact"
              className={cn(
                buttonVariants({ size: "lg", variant: "outline" }),
                "h-11 border-white/60 bg-transparent px-6 text-white hover:bg-white hover:text-red-700"
              )}
            >
              Request Custom Quote
            </Link>
            <Link
              href="/suppliers"
              className={cn(
                buttonVariants({ size: "lg", variant: "outline" }),
                "h-11 border-white/60 bg-transparent px-6 text-white hover:bg-white hover:text-red-700"
              )}
            >
              Partner with Us
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
