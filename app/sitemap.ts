import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://skyriseengineering.lk",
      lastModified: new Date(),
    },

    {
      url: "https://skyriseengineering.lk/projects",
      lastModified: new Date(),
    },

    {
      url: "https://skyriseengineering.lk/services/civil-engineering",
      lastModified: new Date(),
    },

    {
      url: "https://skyriseengineering.lk/services/construction",
      lastModified: new Date(),
    },

    {
      url: "https://skyriseengineering.lk/services/electrical-electronic",
      lastModified: new Date(),
    },

    {
      url: "https://skyriseengineering.lk/services/property-development",
      lastModified: new Date(),
    },

    {
      url: "https://skyriseengineering.lk/services/land-reclamation",
      lastModified: new Date(),
    },
  ];
}