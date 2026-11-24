"use client";

import { useEffect, useRef, useState } from "react";
import { homeContent } from "@/content/home";

function useCountUp(target: number, active: boolean) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!active) return;
    let frame = 0;
    const steps = 40;
    const id = setInterval(() => {
      frame += 1;
      setValue(Math.round((target * frame) / steps));
      if (frame >= steps) clearInterval(id);
    }, 30);
    return () => clearInterval(id);
  }, [target, active]);
  return value;
}

function StatCard({
  label,
  value,
  suffix,
  active,
}: {
  label: string;
  value: number;
  suffix: string;
  active: boolean;
}) {
  const count = useCountUp(value, active);

  return (
    <div className="rounded-lg border border-white/10 bg-white/5 p-6 backdrop-blur-sm sm:p-7">
      <p className="font-heading text-4xl font-bold tracking-tight text-white sm:text-5xl">
        {count}
        <span className="text-white/70">{suffix}</span>
      </p>
      <p className="mt-2 text-sm tracking-wide text-white/55">{label}</p>
    </div>
  );
}

export function StatsCounters() {
  const ref = useRef<HTMLElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-ink py-16 sm:py-20"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgb(5_20_35_/_0.25),transparent_45%)]" />
      <div className="section-shell relative">
        <div className="mb-10 max-w-2xl">
          <p className="text-xs font-semibold tracking-[0.2em] text-white/55 uppercase">
            By the numbers
          </p>
          <h2 className="font-heading mt-3 text-3xl font-bold text-white sm:text-4xl">
            Results that build long lasting relations
          </h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {homeContent.stats.map((stat) => (
            <StatCard key={stat.label} {...stat} active={active} />
          ))}
        </div>
      </div>
    </section>
  );
}
