"use client";

import { useEffect, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { workflowStages } from "@/data/seed-data";
import { SectionHeading } from "@/components/section-heading";
import { homeContent } from "@/content/home";

export function WorkflowTabs() {
  const [stage, setStage] = useState("0");

  useEffect(() => {
    const id = setInterval(() => {
      setStage((prev) => String((Number(prev) + 1) % workflowStages.length));
    }, 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="workflow" className="relative overflow-hidden py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_left,rgba(220,38,38,0.06),transparent_40%)]" />
      <div className="section-shell relative">
        <SectionHeading
          title="Supply Chain"
          accent="Workflow"
          description={homeContent.workflow.description}
        />

        <Tabs value={stage} onValueChange={(v) => setStage(v ?? "0")}>
          <TabsList className="mb-8 flex h-auto w-full flex-wrap justify-start gap-2 bg-transparent p-0">
            {workflowStages.map((item, index) => (
              <TabsTrigger
                key={item.name}
                value={String(index)}
                className="rounded-full border border-border bg-white px-3 py-1.5 text-xs data-active:border-red-500 data-active:bg-red-50 data-active:text-red-900 sm:text-sm"
              >
                {String(index + 1).padStart(2, "0")} · {item.name}
              </TabsTrigger>
            ))}
          </TabsList>

          {workflowStages.map((item, index) => (
            <TabsContent key={item.name} value={String(index)}>
              <Card className="overflow-hidden border-border/70 shadow-lg">
                <CardContent className="grid gap-8 p-6 md:grid-cols-[160px_1fr] md:p-10">
                  <div>
                    <Badge className="bg-red-100 text-red-800 hover:bg-red-100">
                      Stage
                    </Badge>
                    <p className="font-heading mt-3 text-5xl font-bold text-red-600">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                  </div>
                  <div>
                    <h3 className="font-heading text-2xl font-bold tracking-tight sm:text-3xl">
                      {item.title}
                    </h3>
                    <div className="mt-3 h-1 w-16 rounded-full bg-gradient-to-r from-red-500 to-red-700" />
                    <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
                      {item.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
