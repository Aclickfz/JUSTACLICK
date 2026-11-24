import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  title: string;
  accent?: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  eyebrow?: string;
};

export function SectionHeading({
  title,
  accent,
  description,
  align = "left",
  className,
  eyebrow,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl",
        "mb-10 sm:mb-12",
        className
      )}
    >
      {eyebrow ? (
        <p
          className={cn(
            "mb-3 text-xs font-semibold tracking-[0.2em] text-brand uppercase",
            align === "center" && "mx-auto"
          )}
        >
          {eyebrow}
        </p>
      ) : (
        <div
          className={cn(
            "mb-4 h-0.5 w-12 bg-brand",
            align === "center" && "mx-auto"
          )}
        />
      )}
      <h2 className="font-heading text-3xl font-bold tracking-tight text-ink sm:text-4xl lg:text-[2.65rem] lg:leading-[1.15]">
        {title}{" "}
        {accent ? <span className="text-gradient">{accent}</span> : null}
      </h2>
      {description ? (
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
