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
    <section className="relative isolate flex min-h-screen items-center overflow-hidden pt-20">
      <Image
        src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=2000&q=80"
        alt="Global supply chain warehouse operations"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="hero-overlay absolute inset-0" />
      <div className="section-shell relative z-10 py-16 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="font-heading mx-auto max-w-5xl text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
        >
          {hero.titleBefore}{" "}
          <span className="bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
            {hero.titleAccent}
          </span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mx-auto mt-6 max-w-3xl text-lg font-medium text-red-100 sm:text-xl md:text-2xl"
        >
          {hero.subtitle}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.28 }}
          className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4"
        >
          <Link
            href="#start"
            className={cn(
              buttonVariants({ size: "lg" }),
              "bg-gradient-to-r from-red-500 to-red-600 px-8 text-base font-bold text-white shadow-2xl hover:from-red-600 hover:to-red-700"
            )}
          >
            {hero.primaryCta}
          </Link>
          <Link
            href="#workflow"
            className={cn(
              buttonVariants({ size: "lg", variant: "outline" }),
              "border-white/80 bg-white/10 px-8 text-base font-bold text-white backdrop-blur hover:bg-white hover:text-red-900"
            )}
          >
            {hero.secondaryCta}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
