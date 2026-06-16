export function SectionHeading({ eyebrow, title, sub }: { eyebrow?: string; title: string; sub?: string }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      {eyebrow && <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">{eyebrow}</p>}
      <h2 className="mt-3 font-display text-4xl font-bold text-primary md:text-5xl">{title}</h2>
      <div className="mx-auto mt-4 h-[2px] w-16 bg-gold" />
      {sub && <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">{sub}</p>}
    </div>
  );
}
