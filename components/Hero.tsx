import Image from "next/image";
import { person } from "@/lib/site-content";
import { ResumeViewer } from "@/components/ResumeViewer";

export function Hero() {
  return (
    <section
      id="top"
      className="relative scroll-mt-20 border-b border-border-muted pb-14 pt-10 sm:pb-16 sm:pt-14"
      aria-labelledby="hero-heading"
    >
      <div className="relative mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-accent-soft bg-accent-muted px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-accent">
            <span className="h-2 w-2 rounded-full bg-cyan-400" aria-hidden />
            System Header
          </p>
          <h1
            id="hero-heading"
            className="mt-5 max-w-3xl font-serif text-[clamp(2rem,5vw,3.25rem)] font-semibold leading-tight tracking-tight text-accent"
          >
            {person.name}
          </h1>
          <p className="mt-3 max-w-2xl text-lg font-medium text-foreground sm:text-xl">{person.title}</p>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">{person.tagline}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            <span className="rounded-md border border-accent/40 bg-surface-soft px-3 py-1 text-sm text-foreground">
              {person.workAuthorization}
            </span>
            <span className="rounded-md border border-cyan-400/40 bg-cyan-400/10 px-3 py-1 text-sm text-cyan-300">
              Location: {person.location}
            </span>
          </div>
          <p className="mt-4 inline-flex max-w-fit rounded-md border border-cyan-500/35 bg-cyan-500/10 px-3 py-1 text-sm font-medium text-cyan-300 sm:text-base">
            SLA Experience: 99.9% systems
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-lg bg-accent px-5 py-3 text-center text-sm font-semibold text-background shadow-sm shadow-accent/30 transition hover:bg-accent-hover hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              View Projects
            </a>
            <a
              href={person.githubUrl}
              target="_blank"
              className="inline-flex items-center justify-center rounded-lg border border-accent/40 bg-surface-soft px-5 py-3 text-center text-sm font-semibold text-foreground transition hover:border-accent-hover hover:text-accent-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              rel="noopener noreferrer me"
            >
              GitHub
            </a>
            <ResumeViewer buttonLabel="View Resume" />
          </div>
        </div>

        <div className="rounded-2xl border border-border-strong bg-surface-soft p-4 shadow-[0_0_32px_rgba(167,139,250,0.12)]">
          <p className="mb-3 text-xs uppercase tracking-[0.18em] text-muted">System Status: Operational</p>
          <div className="overflow-hidden rounded-xl border border-accent-soft">
            <Image
              src={person.profileImagePath}
              alt={`${person.shortName} profile photo`}
              width={520}
              height={520}
              className="h-auto w-full object-cover"
              priority
            />
          </div>
          {/* <p className="mt-3 text-sm text-muted">Active profile stream for hiring pipeline and collaboration.</p> */}
        </div>
      </div>
    </section>
  );
}
