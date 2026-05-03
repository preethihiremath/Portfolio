import { skillGroups } from "@/lib/site-content";

export function Skills() {
  return (
    <section
      id="skills"
      className="scroll-mt-20 border-b border-border-muted bg-surface-soft py-14 sm:py-20"
      aria-labelledby="skills-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 id="skills-heading" className="font-serif text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
          Skills
        </h2>
        <p className="mt-3 max-w-xl text-muted">Stack distilled for backend, ML delivery, and platform work.</p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group) => (
            <div
              key={group.label}
              className="rounded-2xl border border-border-muted bg-background p-5 shadow-sm"
            >
              <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-strong">
                {group.label}
              </h3>
              <ul className="mt-4 flex flex-col gap-2">
                {group.items.map((item) => (
                  <li key={item} className="text-base font-medium text-foreground">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
