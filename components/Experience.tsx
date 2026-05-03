import { MetricBadge } from "@/components/MetricBadge";

export function Experience() {
  return (
    <section
      id="experience"
      className="scroll-mt-20 border-b border-border-muted bg-surface-soft py-14 sm:py-20"
      aria-labelledby="experience-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 id="experience-heading" className="font-serif text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
          Experience
        </h2>

        <article className="mt-10 rounded-2xl border border-border-muted bg-background p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
            <h3 className="text-lg font-semibold text-foreground">Deutsche Bank</h3>
            <span className="text-sm font-medium text-muted">Software Engineer</span>
          </div>

          <ul className="mt-6 flex list-none flex-col gap-4 text-base leading-relaxed text-muted marker:hidden">
            <li className="flex gap-3">
              <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-accent" aria-hidden />
              <span>
                Reduced memory usage by <MetricBadge>95%</MetricBadge> through microservices
                migration.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-accent" aria-hidden />
              <span>
                Built real-time Oracle AQ data synchronization spanning APAC, US, and EMEA regions.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-accent" aria-hidden />
              <span>
                Sustained <MetricBadge>99.9%+</MetricBadge> SLA with proactive monitoring via Geneos.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-accent" aria-hidden />
              <span>
                Led operating system migration from SUSE Linux to RHEL&nbsp;9, resolving toolchain gaps
                and stabilising delivery pipelines across teams.
              </span>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
}
