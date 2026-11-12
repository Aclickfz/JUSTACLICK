"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Pause, Play } from "lucide-react";
import { workflowStages } from "@/data/seed-data";
import { SectionHeading } from "@/components/section-heading";
import { homeContent } from "@/content/home";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const STAGE_MS = 4200;
const SIZE = 420;
const CX = SIZE / 2;
const CY = SIZE / 2;
const RADIUS = 148;

function polar(angleDeg: number, radius = RADIUS) {
  const rad = ((angleDeg - 90) * Math.PI) / 180;
  return {
    x: CX + radius * Math.cos(rad),
    y: CY + radius * Math.sin(rad),
  };
}

function arcPath(fromDeg: number, toDeg: number, radius = RADIUS) {
  const start = polar(fromDeg, radius);
  const end = polar(toDeg, radius);
  const delta = ((toDeg - fromDeg + 360) % 360) || 360;
  const largeArc = delta > 180 ? 1 : 0;
  return `M ${start.x} ${start.y} A ${radius} ${radius} 0 ${largeArc} 1 ${end.x} ${end.y}`;
}

export function WorkflowTabs() {
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(true);
  const count = workflowStages.length;
  const step = 360 / count;

  const nodes = useMemo(
    () =>
      workflowStages.map((stage, index) => {
        const angle = index * step;
        const point = polar(angle);
        const labelPoint = polar(angle, RADIUS + 46);
        return { ...stage, index, angle, ...point, labelX: labelPoint.x, labelY: labelPoint.y };
      }),
    [count, step]
  );

  useEffect(() => {
    if (!playing) return;
    const id = setInterval(() => {
      setActive((prev) => (prev + 1) % count);
    }, STAGE_MS);
    return () => clearInterval(id);
  }, [playing, count]);

  const current = workflowStages[active];
  const progressEnd = ((active + 1) % count) * step || 360;

  return (
    <section id="workflow" className="relative overflow-hidden py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_40%,oklch(0.58_0.11_195_/_0.08),transparent_50%)]" />
      <div className="section-shell relative">
        <div className="mb-4 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            title="Supply Chain"
            accent="Workflow"
            description={homeContent.workflow.description}
          />
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() => setPlaying((p) => !p)}
            className="mb-12 h-9 shrink-0 gap-2 border-brand/30 text-brand hover:bg-brand/10"
          >
            {playing ? <Pause className="size-3.5" /> : <Play className="size-3.5" />}
            {playing ? "Pause cycle" : "Play cycle"}
          </Button>
        </div>

        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          {/* Live cycle ring */}
          <div className="relative mx-auto w-full max-w-[460px]">
            <div className="absolute inset-[18%] rounded-full border border-dashed border-brand/25" />
            <div className="absolute inset-[28%] rounded-full bg-gradient-to-br from-brand/10 via-transparent to-mist" />

            <svg
              viewBox={`0 0 ${SIZE} ${SIZE}`}
              className="relative z-10 h-auto w-full"
              role="img"
              aria-label="Supply chain workflow cycle"
            >
              <circle
                cx={CX}
                cy={CY}
                r={RADIUS}
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="text-border"
              />

              {/* Completed path through cycle */}
              <motion.path
                key={`arc-${active}`}
                d={arcPath(0, progressEnd)}
                fill="none"
                stroke="url(#cycleStroke)"
                strokeWidth="3.5"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0.4 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 0.85, ease: "easeInOut" }}
              />

              <defs>
                <linearGradient id="cycleStroke" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#fb923c" />
                  <stop offset="100%" stopColor="#f97316" />
                </linearGradient>
                <filter id="nodeGlow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {nodes.map((node) => {
                const isActive = node.index === active;
                const isDone = node.index < active;
                return (
                  <g key={node.name}>
                    <motion.circle
                      cx={node.x}
                      cy={node.y}
                      r={isActive ? 16 : 11}
                      onClick={() => {
                        setActive(node.index);
                        setPlaying(false);
                      }}
                      className="cursor-pointer"
                      fill={isActive || isDone ? "#f97316" : "#ffffff"}
                      stroke={isActive || isDone ? "#f97316" : "#d8dee8"}
                      strokeWidth={isActive ? 3 : 2}
                      filter={isActive ? "url(#nodeGlow)" : undefined}
                      animate={{
                        scale: isActive ? [1, 1.12, 1] : 1,
                      }}
                      transition={{
                        duration: 1.6,
                        repeat: isActive ? Infinity : 0,
                        ease: "easeInOut",
                      }}
                    />
                    {isActive ? (
                      <circle
                        cx={node.x}
                        cy={node.y}
                        r="5"
                        fill="white"
                        className="pointer-events-none"
                      />
                    ) : null}
                    <text
                      x={node.labelX}
                      y={node.labelY}
                      textAnchor="middle"
                      dominantBaseline="middle"
                      className="pointer-events-none select-none"
                      style={{
                        fontSize: 10,
                        fontWeight: 700,
                        letterSpacing: "0.04em",
                        fill: isActive
                          ? "oklch(0.2 0.02 250)"
                          : "oklch(0.5 0.02 250)",
                      }}
                    >
                      {String(node.index + 1).padStart(2, "0")}
                    </text>
                  </g>
                );
              })}

              {/* Center label */}
              <text
                x={CX}
                y={CY - 8}
                textAnchor="middle"
                className="fill-current text-muted-foreground"
                style={{ fontSize: 11, letterSpacing: "0.2em" }}
              >
                LIVE CYCLE
              </text>
              <text
                x={CX}
                y={CY + 16}
                textAnchor="middle"
                style={{
                  fontSize: 28,
                  fontWeight: 800,
                  fill: "#f97316",
                }}
              >
                {String(active + 1).padStart(2, "0")}
                <tspan style={{ fill: "#64748b", fontSize: 16 }}>
                  /{String(count).padStart(2, "0")}
                </tspan>
              </text>
            </svg>

            {/* Mobile stage chips under ring */}
            <div className="mt-4 flex flex-wrap justify-center gap-2 lg:hidden">
              {workflowStages.map((stage, index) => (
                <button
                  key={stage.name}
                  type="button"
                  onClick={() => {
                    setActive(index);
                    setPlaying(false);
                  }}
                  className={cn(
                    "border px-2.5 py-1 text-[11px] font-semibold tracking-wide transition-colors",
                    index === active
                      ? "border-brand bg-brand text-brand-foreground"
                      : "border-border bg-card text-muted-foreground hover:border-brand/40"
                  )}
                >
                  {String(index + 1).padStart(2, "0")}
                </button>
              ))}
            </div>
          </div>

          {/* Active node content */}
          <div className="relative min-h-[320px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.title}
                initial={{ opacity: 0, x: 28, filter: "blur(6px)" }}
                animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, x: -18, filter: "blur(4px)" }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="surface-panel relative overflow-hidden p-7 sm:p-9"
              >
                <div className="absolute left-0 top-0 h-full w-1 bg-brand" />
                <div className="flex items-center justify-between gap-4">
                  <p className="text-xs font-semibold tracking-[0.2em] text-brand uppercase">
                    Stage {String(active + 1).padStart(2, "0")}
                  </p>
                  <div className="h-1.5 w-28 overflow-hidden bg-mist">
                    <motion.div
                      key={`bar-${active}-${playing}`}
                      className="h-full bg-brand"
                      initial={{ width: "0%" }}
                      animate={{ width: playing ? "100%" : "0%" }}
                      transition={{
                        duration: playing ? STAGE_MS / 1000 : 0,
                        ease: "linear",
                      }}
                    />
                  </div>
                </div>

                <h3 className="font-heading mt-5 text-2xl font-bold tracking-tight text-ink sm:text-3xl">
                  {current.title}
                </h3>
                <div className="mt-4 h-px w-14 bg-brand" />
                <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
                  {current.description}
                </p>

                <div className="mt-8 hidden gap-2 lg:flex">
                  {workflowStages.map((stage, index) => (
                    <button
                      key={stage.name}
                      type="button"
                      title={stage.title}
                      onClick={() => {
                        setActive(index);
                        setPlaying(false);
                      }}
                      className={cn(
                        "h-2 flex-1 transition-colors",
                        index === active
                          ? "bg-brand"
                          : index < active
                            ? "bg-brand/40"
                            : "bg-border hover:bg-brand/30"
                      )}
                    />
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
