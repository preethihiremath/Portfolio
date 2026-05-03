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
        <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted sm:text-lg">
          Software Engineer with 2 years of experience at Deutsche Bank building microservices,
          real-time data systems, and high-availability infrastructure. Currently pursuing MSc
          Computer Science (Intelligent Systems) in Germany, focusing on machine learning and
          scalable systems.
        </p>
      </div>
    </section>
  );
}
