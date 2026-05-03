import type { MetadataRoute } from "next";

function baseUrl(): string {
  return (
    process.env.NEXT_PUBLIC_SITE_URL ??
    (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000")
  );
}

export default function robots(): MetadataRoute.Robots {
  const host = baseUrl().replace(/^https?:\/\//, "");
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${baseUrl()}/sitemap.xml`,
    host,
  };
}
