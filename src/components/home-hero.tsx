"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { homeContent } from "@/content/home";

const SLIDE_MS = 6500;

export function HomeHero() {
  const { hero, heroSlides } = homeContent;
  const slides = heroSlides?.length
    ? heroSlides
    : [
        {
          titleBefore: hero.titleBefore,
          titleAccent: hero.titleAccent,
          subtitle: hero.subtitle,
          imageUrl:
            "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=2400&q=80",
          imageAlt: "Global supply chain warehouse operations",
        },
      ];
  const [index, setIndex] = useState(0);
  const slide = slides[index];

  useEffect(() => {
    if (slides.length < 2) return;
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, SLIDE_MS);
    return () => clearInterval(id);
  }, [slides.length]);

  return (
    <section className="relative isolate flex min-h-[100svh] items-end overflow-hidden pb-16 pt-10 sm:items-center sm:pb-0 sm:pt-20">
      <AnimatePresence mode="wait">
        <motion.div
          key={slide.imageUrl}
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9 }}
          className="absolute inset-0"
        >
          <Image
            src={slide.imageUrl}
            alt={slide.imageAlt}
            fill
            priority={index === 0}
            className="object-cover object-center"
            sizes="100vw"
          />
        </motion.div>
      </AnimatePresence>
      <div className="hero-overlay absolute inset-0" />

      <div className="section-shell relative z-10 w-full py-10 sm:py-20">
        <motion.p
          key={`eyebrow-${index}`}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="mb-5 text-xs font-semibold tracking-[0.22em] text-white/70 uppercase sm:text-sm"
        >
          Just A Click
        </motion.p>
        <AnimatePresence mode="wait">
          <motion.h1
            key={`title-${index}`}
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.55 }}
            className="font-heading max-w-4xl text-4xl font-bold leading-[1.08] text-white sm:text-6xl lg:text-[4.25rem]"
          >
            {slide.titleBefore} {slide.titleAccent}
          </motion.h1>
        </AnimatePresence>
        <motion.p
          key={`sub-${index}`}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.08 }}
          className="mt-6 max-w-xl text-base text-white/75 sm:text-xl"
        >
          {slide.subtitle}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.16 }}
          className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
        >
          <Link
            href="#start"
            className={cn(
              buttonVariants({ size: "lg" }),
              "h-12 w-full rounded-full bg-white px-8 text-base font-semibold text-navy-deep hover:bg-white/90 sm:w-auto"
            )}
          >
            {hero.primaryCta}
          </Link>
          <Link
            href="#workflow"
            className={cn(
              buttonVariants({ size: "lg", variant: "outline" }),
              "h-12 w-full rounded-full border-white/50 bg-transparent px-8 text-base font-semibold text-white hover:bg-white hover:text-navy-deep sm:w-auto"
            )}
          >
            {hero.secondaryCta}
          </Link>
        </motion.div>

        {slides.length > 1 ? (
          <div className="mt-10 flex items-center gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => setIndex(i)}
                className={cn(
                  "h-1.5 rounded-full transition-all",
                  i === index
                    ? "w-8 bg-white"
                    : "w-4 bg-white/35 hover:bg-white/55"
                )}
              />
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}
