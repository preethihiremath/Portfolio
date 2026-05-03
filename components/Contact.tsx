import { person } from "@/lib/site-content";

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 bg-background py-14 sm:py-20" aria-labelledby="contact-heading">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 id="contact-heading" className="font-serif text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
          Contact
        </h2>
        <p className="mt-3 max-w-xl text-muted">Open to software engineering roles and research collaborations.</p>

        <ul className="mt-10 flex flex-col gap-4 text-base font-medium">
          <li>
            <span className="text-sm font-semibold uppercase tracking-wide text-muted">Email</span>
            <br />
            <a
              className="text-accent-strong underline decoration-accent-soft underline-offset-4 transition hover:text-accent-hover"
              href={`mailto:${person.email}`}
            >
              {person.email}
            </a>
          </li>
          <li>
            <span className="text-sm font-semibold uppercase tracking-wide text-muted">LinkedIn</span>
            <br />
            <a
              href={person.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer me"
              className="break-all text-accent-strong underline decoration-accent-soft underline-offset-4 transition hover:text-accent-hover"
            >
              {person.linkedinUrl}
            </a>
          </li>
          <li>
            <span className="text-sm font-semibold uppercase tracking-wide text-muted">GitHub</span>
            <br />
            <a
              href={person.githubUrl}
              target="_blank"
              rel="noopener noreferrer me"
              className="text-accent-strong underline decoration-accent-soft underline-offset-4 transition hover:text-accent-hover"
            >
              github.com/preethihiremath
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

