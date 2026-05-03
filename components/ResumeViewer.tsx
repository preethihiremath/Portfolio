"use client";

import { useState } from "react";
import { person } from "@/lib/site-content";

type ResumeViewerProps = {
  buttonLabel?: string;
};

export function ResumeViewer({ buttonLabel = "View Resume" }: ResumeViewerProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="inline-flex items-center justify-center rounded-lg border border-accent/40 bg-surface-soft px-5 py-3 text-center text-sm font-semibold text-foreground transition hover:border-accent-hover hover:text-accent-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      >
        {buttonLabel}
      </button>
      {open ? (
        <div className="fixed inset-0 z-[70] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm">
          <div className="max-h-[90vh] w-full max-w-5xl overflow-hidden rounded-2xl border border-accent-soft bg-background shadow-[0_0_40px_rgba(167,139,250,0.22)]">
            <div className="flex items-center justify-between border-b border-border-muted px-4 py-3">
              <h3 className="text-base font-semibold text-accent">Resume Viewer</h3>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded-md border border-border-strong bg-surface-soft px-3 py-1.5 text-sm text-foreground transition hover:border-accent-hover hover:text-accent-hover"
              >
                Close
              </button>
            </div>
            <div className="h-[76vh] bg-surface-soft p-3">
              <iframe
                src={person.resumePath}
                title="Resume PDF"
                className="h-full w-full rounded-lg border border-border-muted bg-background"
              />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
