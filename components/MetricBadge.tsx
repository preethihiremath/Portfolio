import type { ReactNode } from "react";

type MetricBadgeProps = {
  children: ReactNode;
};

/** Inline emphasis for KPIs—keeps numbers scannable without loud UI. */
export function MetricBadge({ children }: MetricBadgeProps) {
  return (
    <span className="mx-0.5 inline rounded-md bg-accent-muted px-1.5 py-0.5 font-semibold tabular-nums text-accent-strong">
      {children}
    </span>
  );
}
