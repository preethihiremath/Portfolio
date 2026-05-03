import Link from "next/link";
import { person } from "@/lib/site-content";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border-muted bg-surface-soft py-8 text-center text-xs text-muted sm:text-sm">
      <p className="mx-auto max-w-6xl px-4">
        © {year}{" "}
        <Link href="#top" className="font-medium text-foreground hover:text-accent-strong">
          {person.name}
        </Link>
        {" · "}Software engineer · MSc Computer Science (Intelligent Systems).
      </p>
    </footer>
  );
}
