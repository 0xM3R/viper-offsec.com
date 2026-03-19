import { MetadataRoute } from "next";
import { researchPosts } from "@/data/research";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://viper-offsec.com";

  const staticPages = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 1 },
    { url: `${baseUrl}/services`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${baseUrl}/reports`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.85 },
    { url: `${baseUrl}/research`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.8 },
    { url: `${baseUrl}/contact`, lastModified: new Date(), changeFrequency: "yearly" as const, priority: 0.7 },
    { url: `${baseUrl}/about`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.5 },
  ];

  const researchPages = researchPosts
    .filter((p) => p.published)
    .map((post) => ({
      url: `${baseUrl}/research/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    }));

  return [...staticPages, ...researchPages];
}
