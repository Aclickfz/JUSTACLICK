"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { homeContent } from "@/content/home";

export function HomeHero() {
  const { hero } = homeContent;

  return (
    <section className="relative isolate flex min-h-[100svh] items-end overflow-hidden pb-16 pt-28 sm:items-center sm:pb-0 sm:pt-32">
      <Image
        src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=2400&q=80"
        alt="Global supply chain warehouse operations"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
      <div className="hero-overlay absolute inset-0" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent sm:hidden" />

      <div className="section-shell relative z-10 w-full py-10 sm:py-20">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="mb-5 text-xs font-semibold tracking-[0.22em] text-brand uppercase sm:text-sm"
        >
          Just A Click
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="font-heading max-w-4xl text-4xl font-bold leading-[1.05] text-white sm:text-6xl lg:text-7xl"
        >
          {hero.titleBefore}{" "}
          <span className="text-gradient">{hero.titleAccent}</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.18 }}
          className="mt-6 max-w-xl text-base text-white/75 sm:text-xl"
        >
          {hero.subtitle}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.3 }}
          className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
        >
          <Link
            href="#start"
            className={cn(
              buttonVariants({ size: "lg" }),
              "btn-brand h-12 px-8 text-base font-semibold"
            )}
          >
            {hero.primaryCta}
          </Link>
          <Link
            href="#workflow"
            className={cn(
              buttonVariants({ size: "lg", variant: "outline" }),
              "h-12 border-white/35 bg-transparent px-8 text-base font-semibold text-white hover:bg-white hover:text-ink"
            )}
          >
            {hero.secondaryCta}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
