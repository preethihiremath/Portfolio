import { skillLevels } from "@/lib/site-content";

export function Skills() {
  const size = 420;
  const center = size / 2;
  const maxRadius = 145;
  const ringCount = 5;
  const axisCount = skillLevels.length;

  const toPoint = (index: number, value: number) => {
    const angle = (-Math.PI / 2) + (index * (Math.PI * 2)) / axisCount;
    const radius = (value / 5) * maxRadius;
    return {
      x: center + radius * Math.cos(angle),
      y: center + radius * Math.sin(angle),
    };
  };

  const polygonPoints = skillLevels
    .map((skill, index) => {
      const point = toPoint(index, skill.level);
      return `${point.x},${point.y}`;
    })
    .join(" ");

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
        {/* <p className="mt-3 max-w-2xl text-muted">
          Radar view of production readiness across backend, cloud, and ML capabilities.
        </p> */}

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-2xl border border-accent-soft bg-background p-4 shadow-[0_0_30px_rgba(167,139,250,0.14)] sm:p-6">
            <svg
              viewBox={`0 0 ${size} ${size}`}
              className="mx-auto h-full w-full max-w-[440px]"
              role="img"
              aria-label="Radar chart of skill proficiency levels"
            >
              {Array.from({ length: ringCount }).map((_, ringIndex) => {
                const ring = ringIndex + 1;
                const ringPoints = skillLevels
                  .map((_, axisIndex) => {
                    const p = toPoint(axisIndex, ring);
                    return `${p.x},${p.y}`;
                  })
                  .join(" ");
                return (
                  <polygon
                    key={`ring-${ring}`}
                    points={ringPoints}
                    fill="none"
                    stroke="rgba(167,139,250,0.22)"
                    strokeWidth="1"
                  />
                );
              })}
              {skillLevels.map((_, axisIndex) => {
                const end = toPoint(axisIndex, 5);
                return (
                  <line
                    key={`axis-${axisIndex}`}
                    x1={center}
                    y1={center}
                    x2={end.x}
                    y2={end.y}
                    stroke="rgba(34,211,238,0.25)"
                    strokeWidth="1"
                  />
                );
              })}
              <polygon
                points={polygonPoints}
                fill="rgba(167,139,250,0.22)"
                stroke="#f472b6"
                strokeWidth="2"
              />
              {skillLevels.map((skill, axisIndex) => {
                const p = toPoint(axisIndex, skill.level);
                const label = toPoint(axisIndex, 5.9);
                return (
                  <g key={skill.name}>
                    <circle cx={p.x} cy={p.y} r="4" fill="#22d3ee" />
                    <text
                      x={label.x}
                      y={label.y}
                      textAnchor={label.x < center - 8 ? "end" : label.x > center + 8 ? "start" : "middle"}
                      dominantBaseline="middle"
                      fill="#e5e7eb"
                      fontSize="11"
                    >
                      {skill.name}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>
          <div className="rounded-2xl border border-border-strong bg-background p-6">
            <p className="text-xs uppercase tracking-[0.2em] text-accent">Legend</p>
            <ul className="mt-4 space-y-3">
              {skillLevels.map((skill) => (
                <li key={skill.name} className="flex items-center justify-between gap-3 rounded-lg bg-surface-soft px-3 py-2">
                  <span className="text-sm text-foreground">{skill.name}</span>
                  <span className="text-xs font-semibold uppercase tracking-wide text-cyan-300">{skill.label}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
