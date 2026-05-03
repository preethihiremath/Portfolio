import { person } from "@/lib/site-content";
import { ResumeViewer } from "@/components/ResumeViewer";

export function ResumeSection() {
  return (
    <section className="scroll-mt-20 border-b border-border-muted bg-background py-14 sm:py-20" aria-labelledby="resume-heading">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 id="resume-heading" className="font-serif text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
          Resume
        </h2>
        <p className="mt-3 max-w-2xl text-muted">
          Open the themed preview modal or directly download the latest PDF.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <ResumeViewer buttonLabel="View Resume" />
          <a
            href={person.resumePath}
            download
            className="inline-flex items-center justify-center rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-background transition hover:bg-accent-hover hover:text-white"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}
