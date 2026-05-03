import Link from "next/link";
import { person } from "@/lib/site-content";

export function Hero() {
  return (
    <section
      id="top"
      className="relative scroll-mt-20 border-b border-border-muted bg-gradient-to-b from-slate-50 via-cyan-50/40 to-slate-50 pb-16 pt-12 sm:pb-24 sm:pt-20"
      aria-labelledby="hero-heading"
    >
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent-strong">
          Portfolio
        </p>
        <h1 id="hero-heading" className="mt-3 max-w-3xl font-serif text-[clamp(2rem,5vw,3.25rem)] font-semibold leading-tight tracking-tight text-foreground">
          {person.name}
        </h1>
        <p className="mt-3 max-w-2xl text-lg font-medium text-muted sm:text-xl">
          {person.title}
        </p>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
          {person.tagline}
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <Link
            href="#projects"
            className="inline-flex items-center justify-center rounded-lg bg-accent px-5 py-3 text-center text-sm font-semibold text-white shadow-sm transition hover:bg-accent-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            View projects
          </Link>
          <a
            href={person.githubUrl}
            className="inline-flex items-center justify-center rounded-lg border border-border-strong bg-background px-5 py-3 text-center text-sm font-semibold text-foreground transition hover:border-accent hover:text-accent-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            rel="noopener noreferrer me"
          >
            GitHub
          </a>
          <Link
            href={person.resumePath}
            className="inline-flex items-center justify-center rounded-lg border border-border-muted bg-surface-muted px-5 py-3 text-center text-sm font-semibold text-foreground transition hover:border-accent hover:text-accent-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            Resume
          </Link>
        </div>
      </div>
    </section>
  );
}
