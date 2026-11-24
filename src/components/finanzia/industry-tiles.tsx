import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

export type IndustryTile = {
  name: string;
  href: string;
  imageUrl: string;
};

export function IndustryTiles({
  items,
  className,
}: {
  items: IndustryTile[];
  className?: string;
}) {
  return (
    <div
      className={cn(
        "grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
        className
      )}
    >
      {items.map((item) => (
        <Link
          key={item.href + item.name}
          href={item.href}
          className="group relative aspect-[4/3] overflow-hidden rounded-lg"
        >
          <Image
            src={item.imageUrl}
            alt={item.name}
            fill
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/90 via-navy/45 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-5">
            <p className="font-heading text-lg font-bold text-white">
              {item.name}
            </p>
            <span className="mt-1 block text-xs font-semibold tracking-[0.14em] text-white/80 uppercase opacity-0 transition-opacity group-hover:opacity-100">
              Explore
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}
