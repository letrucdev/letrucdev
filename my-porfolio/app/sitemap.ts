import type { MetadataRoute } from "next";
import { profile } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = profile.siteUrl;
  const lastModified = new Date();

  return [
    {
      url: `${base}/`,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
