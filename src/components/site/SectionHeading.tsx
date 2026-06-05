interface Props {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export function SectionHeading({ eyebrow, title, description, align = "center" }: Props) {
  return (
    <div className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      <span className="gold-divider">
        <span className="gold-divider-line" />
        {eyebrow}
        {align === "center" && <span className="gold-divider-line" />}
      </span>
      <h2 className="font-serif mt-6 text-4xl sm:text-5xl lg:text-6xl leading-[1.1] tracking-tight text-foreground">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-base sm:text-lg text-muted-foreground leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}