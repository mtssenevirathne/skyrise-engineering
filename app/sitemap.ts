import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://skyrise-engineering.vercel.app",
      lastModified: new Date(),
    },

    {
      url: "https://skyrise-engineering.vercel.app/projects",
      lastModified: new Date(),
    },

    {
      url: "https://skyrise-engineering.vercel.app/services/civil-engineering",
      lastModified: new Date(),
    },

    {
      url: "https://skyrise-engineering.vercel.app/services/construction",
      lastModified: new Date(),
    },

    {
      url: "https://skyrise-engineering.vercel.app/services/electrical-electronic",
      lastModified: new Date(),
    },

    {
      url: "https://skyrise-engineering.vercel.app/services/property-development",
      lastModified: new Date(),
    },

    {
      url: "https://skyrise-engineering.vercel.app/services/land-reclamation",
      lastModified: new Date(),
    },
  ];
}