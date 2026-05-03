import type { Metadata } from "next";
import type { ReactNode } from "react";
import { IBM_Plex_Sans, Literata } from "next/font/google";
import "./globals.css";
import { person } from "@/lib/site-content";

const ibmSans = IBM_Plex_Sans({
  variable: "--font-ibm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const literata = Literata({
  variable: "--font-literata",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

function siteUrl(): string {
  return (
    process.env.NEXT_PUBLIC_SITE_URL ??
    (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000")
  );
}

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl()),
  title: {
    default: `${person.name} · Software Engineer`,
    template: `%s · ${person.name}`,
  },
  description: `${person.title}. ${person.tagline}`,
  keywords: [
    "Preethi Vijaykumar Hiremath",
    "Software Engineer",
    "Backend",
    "Machine Learning",
    "Java",
    "Spring Boot",
    "Distributed systems",
    "Deutsche Bank",
    "Germany",
  ],
  authors: [{ name: person.name, url: siteUrl() }],
  creator: person.name,
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "/",
    siteName: person.name,
    title: `${person.name} · ${person.title}`,
    description: person.tagline,
  },
  twitter: {
    card: "summary_large_image",
    title: `${person.name} · Software Engineer`,
    description: person.tagline,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: { canonical: "/" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: person.name,
  jobTitle: "Software Engineer",
  url: siteUrl(),
  email: person.email,
  alumniOf: { "@type": "Organization", name: "Deutsche Bank" },
  sameAs: [person.linkedinUrl, person.githubUrl],
  knowsAbout: [
    "Backend development",
    "Machine learning",
    "Distributed systems",
    "Java",
    "Python",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className={`${ibmSans.variable} ${literata.variable} h-full`}>
      <body className="min-h-full antialiased bg-background text-foreground">
        <a
          href="#main-content"
          className="fixed left-4 top-4 z-[100] -translate-y-16 rounded-md bg-foreground px-3 py-2 text-sm font-medium text-background opacity-0 shadow-md transition-[opacity,transform] duration-150 focus-visible:translate-y-0 focus-visible:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        >
          Skip to main content
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
