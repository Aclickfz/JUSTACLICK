import Image from "next/image";
import { Badge } from "@/components/ui/badge";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description: string;
  imageUrl: string;
  imageAlt?: string;
};

export function PageHero({
  eyebrow,
  title,
  description,
  imageUrl,
  imageAlt = "",
}: PageHeroProps) {
  return (
    <section className="relative isolate flex min-h-[52vh] items-end overflow-hidden pt-24">
      <Image
        src={imageUrl}
        alt={imageAlt || title}
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="hero-overlay absolute inset-0" />
      <div className="section-shell relative z-10 w-full pb-14 pt-20">
        {eyebrow ? (
          <Badge className="mb-4 bg-white/15 text-white backdrop-blur">
            {eyebrow}
          </Badge>
        ) : null}
        <h1 className="font-heading max-w-4xl text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        <p className="mt-4 max-w-2xl text-base text-red-50/90 sm:text-lg">
          {description}
        </p>
      </div>
    </section>
  );
}
