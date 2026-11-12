"use client";

import { useEffect, useState } from "react";
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
}: {
  label: string;
  value: number;
  suffix: string;
}) {
  const [active, setActive] = useState(false);
  const count = useCountUp(value, active);

  useEffect(() => {
    setActive(true);
  }, []);

  return (
    <div className="border-b border-white/10 pb-6 sm:border-b-0 sm:border-r sm:pb-0 sm:pr-6 last:border-0">
      <p className="font-heading text-4xl font-bold tracking-tight text-white sm:text-5xl">
        {count}
        <span className="text-brand">{suffix}</span>
      </p>
      <p className="mt-2 text-sm tracking-wide text-white/55">{label}</p>
    </div>
  );
}

export function StatsCounters() {
  return (
    <section className="relative overflow-hidden bg-ink py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,oklch(0.58_0.11_195_/_0.18),transparent_45%)]" />
      <div className="section-shell relative grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {homeContent.stats.map((stat) => (
          <StatCard key={stat.label} {...stat} />
        ))}
      </div>
    </section>
  );
}
