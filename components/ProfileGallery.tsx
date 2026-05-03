import { readdir } from "node:fs/promises";
import path from "node:path";
import Image from "next/image";
import { person } from "@/lib/site-content";

async function galleryImages(): Promise<string[]> {
  try {
    const dir = path.join(process.cwd(), "public", "images");
    const files = await readdir(dir, { withFileTypes: true });
    return files
      .filter((entry) => entry.isFile())
      .map((entry) => entry.name)
      .filter((name) => /\.(png|jpe?g|webp|gif)$/i.test(name))
      .map((name) => `/images/${name}`)
      .slice(0, 8);
  } catch {
    return [];
  }
}

export async function ProfileGallery() {
  const images = await galleryImages();

  return (
    <section className="scroll-mt-20 border-b border-border-muted bg-surface-soft py-14 sm:py-20" aria-labelledby="gallery-heading">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 id="gallery-heading" className="font-serif text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
          Profile & Gallery
        </h2>
        <p className="mt-3 max-w-2xl text-muted">
          Add optional photos to <code className="rounded bg-background px-1 py-0.5">public/images</code> and they show up automatically.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <article className="rounded-2xl border border-accent-soft bg-background p-3 shadow-[0_0_24px_rgba(167,139,250,0.14)]">
            <div className="overflow-hidden rounded-xl border border-border-muted">
              <Image
                src={person.profileImagePath}
                alt={`${person.shortName} portrait`}
                width={700}
                height={700}
                className="h-auto w-full object-cover transition duration-300 hover:scale-[1.03]"
              />
            </div>
          </article>

          {images.map((src) => (
            <article
              key={src}
              className="overflow-hidden rounded-2xl border border-border-muted bg-background shadow-[0_0_20px_rgba(34,211,238,0.08)]"
            >
              <Image
                src={src}
                alt="Portfolio gallery image"
                width={700}
                height={700}
                className="h-full w-full object-cover transition duration-300 hover:scale-[1.04] hover:brightness-110"
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
