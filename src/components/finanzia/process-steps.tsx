"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { SectionHeading } from "@/components/section-heading";

export type ProcessStep = {
  name: string;
  title: string;
  description: string;
};

export function ProcessSteps({
  title,
  accent,
  description,
  steps,
  id = "workflow",
}: {
  title: string;
  accent?: string;
  description?: string;
  steps: ProcessStep[];
  id?: string;
}) {
  const [active, setActive] = useState(0);
  const current = steps[active] ?? steps[0];

  return (
    <section id={id} className="relative overflow-hidden bg-mist/60 py-20 sm:py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgb(34_49_64_/_0.06),transparent_45%)]" />
      <div className="section-shell relative">
        <SectionHeading
          title={title}
          accent={accent}
          description={description}
        />

        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <ol className="space-y-2">
            {steps.map((step, index) => {
              const isActive = index === active;
              return (
                <li key={step.name}>
                  <button
                    type="button"
                    onClick={() => setActive(index)}
                    className={cn(
                      "flex w-full items-start gap-4 rounded-lg border px-4 py-4 text-left transition-all sm:px-5",
                      isActive
                        ? "border-brand bg-card shadow-[0_10px_30px_rgba(34,49,64,0.1)]"
                        : "border-transparent bg-transparent hover:border-border hover:bg-card/70"
                    )}
                  >
                    <span
                      className={cn(
                        "font-heading mt-0.5 text-sm font-bold tracking-[0.12em]",
                        isActive ? "text-brand" : "text-muted-foreground"
                      )}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="min-w-0">
                      <span
                        className={cn(
                          "font-heading block text-base font-bold sm:text-lg",
                          isActive ? "text-ink" : "text-ink/80"
                        )}
                      >
                        {step.title}
                      </span>
                    </span>
                  </button>
                </li>
              );
            })}
          </ol>

          <div className="rounded-lg border border-border bg-card p-7 shadow-[0_12px_40px_rgba(34,49,64,0.06)] sm:p-10">
            <p className="text-xs font-semibold tracking-[0.18em] text-brand uppercase">
              Step {String(active + 1).padStart(2, "0")}
            </p>
            <h3 className="font-heading mt-3 text-2xl font-bold text-ink sm:text-3xl">
              {current.title}
            </h3>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              {current.description}
            </p>
          </div>
        </div>

        {/* Mobile quick chips */}
        <div className="mt-8 flex gap-2 overflow-x-auto pb-1 lg:hidden">
          {steps.map((step, index) => (
            <button
              key={step.name}
              type="button"
              onClick={() => setActive(index)}
              className={cn(
                "shrink-0 rounded-full border px-3 py-1.5 text-xs font-semibold tracking-wide uppercase",
                index === active
                  ? "border-brand bg-brand text-white"
                  : "border-border bg-card text-muted-foreground"
              )}
            >
              {String(index + 1).padStart(2, "0")}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
