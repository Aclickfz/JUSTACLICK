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
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur">
      <p className="font-heading text-4xl font-bold text-white sm:text-5xl">
        {count}
        {suffix}
      </p>
      <p className="mt-2 text-sm text-red-100/80">{label}</p>
    </div>
  );
}

export function StatsCounters() {
  return (
    <section className="relative overflow-hidden bg-zinc-950 py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(220,38,38,0.2),transparent_55%)]" />
      <div className="section-shell relative grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {homeContent.stats.map((stat) => (
          <StatCard key={stat.label} {...stat} />
        ))}
      </div>
    </section>
  );
}
