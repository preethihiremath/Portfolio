"use client";

import type { TouchEventHandler } from "react";
import { useMemo, useState } from "react";
import { experienceTimeline } from "@/lib/site-content";

export function Experience() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const current = experienceTimeline[activeIndex];
  const progressPercent = useMemo(
    () => ((activeIndex + 1) / experienceTimeline.length) * 100,
    [activeIndex],
  );

  const next = () => setActiveIndex((prev) => (prev + 1) % experienceTimeline.length);
  const prev = () => setActiveIndex((prev) => (prev - 1 + experienceTimeline.length) % experienceTimeline.length);

  const onTouchStart: TouchEventHandler<HTMLDivElement> = (event) => {
    setTouchStartX(event.changedTouches[0]?.clientX ?? null);
  };

  const onTouchEnd: TouchEventHandler<HTMLDivElement> = (event) => {
    if (touchStartX == null) return;
    const delta = event.changedTouches[0].clientX - touchStartX;
    if (delta > 40) prev();
    if (delta < -40) next();
    setTouchStartX(null);
  };

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
        <p className="mt-3 max-w-2xl text-muted">
          Swipe or use controls to navigate timeline cards.
        </p>

        <div className="mt-8 h-2 w-full overflow-hidden rounded-full bg-background">
          <div
            className="h-full rounded-full bg-gradient-to-r from-accent to-cyan-400 transition-all duration-300"
            style={{ width: `${progressPercent}%` }}
          />
        </div>

        <div
          className="mt-6 rounded-2xl border border-accent-soft bg-background p-6 shadow-[0_0_30px_rgba(167,139,250,0.12)] sm:p-8"
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <div className="flex items-center justify-between gap-3">
            <span className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-cyan-300">
              {activeIndex + 1} / {experienceTimeline.length}
            </span>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={prev}
                className="rounded-md border border-border-strong bg-surface-soft px-3 py-1.5 text-sm text-foreground transition hover:border-accent-hover hover:text-accent-hover"
              >
                Prev
              </button>
              <button
                type="button"
                onClick={next}
                className="rounded-md bg-accent px-3 py-1.5 text-sm font-semibold text-background transition hover:bg-accent-hover hover:text-white"
              >
                Next
              </button>
            </div>
          </div>

          <article className="mt-5 animate-in fade-in duration-300">
            <h3 className="text-xl font-semibold text-accent">{current.company}</h3>
            <p className="mt-1 text-base font-medium text-foreground">{current.role}</p>
            <p className="mt-1 text-sm text-muted">{current.period}</p>
            <ul className="mt-5 space-y-3 text-sm leading-relaxed text-muted sm:text-base">
              {current.points.map((point) => (
                <li key={point} className="flex gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-accent" aria-hidden />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </article>
          <ul className="mt-6 flex flex-wrap gap-2">
            {experienceTimeline.map((item, index) => (
              <li key={item.period}>
                <button
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`rounded-md border px-2.5 py-1 text-xs transition ${
                    activeIndex === index
                      ? "border-accent bg-accent-muted text-accent"
                      : "border-border-muted bg-surface-soft text-muted hover:border-accent-soft"
                  }`}
                >
                  {item.period}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
