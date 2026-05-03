import Link from "next/link";
import { projects } from "@/lib/site-content";

export function Projects() {
  return (
    <section
      id="projects"
      className="scroll-mt-20 border-b border-border-muted bg-background py-14 sm:py-20"
      aria-labelledby="projects-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 id="projects-heading" className="font-serif text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
          Projects
        </h2>
        <p className="mt-3 max-w-2xl text-muted">
          Backend, tooling, and ML prototypes. Use <em className="not-italic">More detail</em> to surface
          longer write-ups whenever you attach metrics, papers, demos, or compliance notes recruiters
          should see.
        </p>

        <ul className="mt-10 grid gap-6 sm:grid-cols-2">
          {projects.map((project) => (
            <li key={project.id}>
              <article className="flex h-full flex-col rounded-2xl border border-border-muted bg-surface-soft p-6 shadow-sm transition hover:border-accent-soft hover:shadow-md">
                <div className="flex flex-wrap items-baseline gap-2">
                  <h3 className="text-lg font-semibold text-foreground">{project.title}</h3>
                  {project.kind ? (
                    <span className="text-xs font-medium uppercase tracking-wide text-accent-strong">
                      {project.kind}
                    </span>
                  ) : null}
                </div>

                <ul className="mt-4 flex list-disc flex-col gap-2 pl-4 text-sm leading-relaxed text-muted">
                  {project.summary.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>

                {project.extended?.length ? (
                  <details className="mt-5 rounded-lg border border-border-muted bg-background p-4 text-sm text-muted [&_summary::-webkit-details-marker]:hidden [&_summary::marker]:content-none">
                    <summary className="cursor-pointer select-none font-medium text-accent-strong outline-none transition hover:text-accent focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background">
                      More detail
                    </summary>
                    <ul className="mt-3 flex list-disc flex-col gap-2 pl-4">
                      {project.extended.map((line) => (
                        <li key={line}>{line}</li>
                      ))}
                    </ul>
                  </details>
                ) : null}

                {project.tags?.length ? (
                  <div className="mt-5 flex flex-wrap gap-2" aria-label="Technologies">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-border-muted bg-background px-2.5 py-0.5 text-xs font-medium text-muted"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                ) : null}

                <div className="mt-6 flex flex-wrap gap-3 border-t border-border-muted pt-5">
                  {project.links.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      prefetch={false}
                      className="inline-flex items-center gap-1.5 rounded-lg border border-border-strong bg-background px-3 py-2 text-sm font-semibold text-foreground transition hover:border-accent hover:text-accent-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                    >
                      {link.label}
                      <span aria-hidden className="-mt-px text-muted">
                        ↗
                      </span>
                    </Link>
                  ))}
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
