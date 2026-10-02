import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const staging = process.env.NEXT_PUBLIC_STAGING !== "false";
  return staging
    ? { rules: { userAgent: "*", disallow: "/" } }
    : { rules: { userAgent: "*", allow: "/" }, sitemap: `${process.env.NEXT_PUBLIC_SITE_URL}/sitemap.xml` };
}
