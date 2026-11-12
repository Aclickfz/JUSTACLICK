type SectionHeadingProps = {
  title: string;
  accent?: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  title,
  accent,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div
      className={
        align === "center"
          ? "mx-auto mb-12 max-w-3xl text-center"
          : "mb-12 max-w-3xl"
      }
    >
      <div
        className={
          align === "center"
            ? "mx-auto mb-4 h-px w-12 bg-brand"
            : "mb-4 h-px w-12 bg-brand"
        }
      />
      <h2 className="font-heading text-3xl font-bold tracking-tight text-ink sm:text-4xl lg:text-[2.75rem]">
        {title}{" "}
        {accent ? <span className="text-gradient">{accent}</span> : null}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
