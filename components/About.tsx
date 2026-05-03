import { summary } from "@/lib/site-content";

export function About() {
  return (
    <section
      id="about"
      className="scroll-mt-20 border-b border-border-muted bg-background py-14 sm:py-20"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 id="about-heading" className="font-serif text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
          About
        </h2>
        <p className="mt-6 max-w-4xl text-base leading-relaxed text-muted sm:text-lg">{summary}</p>
      </div>
    </section>
  );
}
