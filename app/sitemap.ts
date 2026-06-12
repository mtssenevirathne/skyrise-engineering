import { MetadataRoute } from "next";
import { projects } from "./data/projects";
import { team } from "./data/team";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://skyriseengineering.lk";

  const projectUrls: MetadataRoute.Sitemap = projects.map(
    (project) => ({
      url: `${baseUrl}/projects/${project.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    })
  );

  const teamUrls: MetadataRoute.Sitemap = team.map(
    (member) => ({
      url: `${baseUrl}/team/${member.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    })
  );

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },

    {
      url: `${baseUrl}/projects`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },

    {
      url: `${baseUrl}/services/civil-engineering`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },

    {
      url: `${baseUrl}/services/construction`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },

    {
      url: `${baseUrl}/services/electrical-electronic`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },

    {
      url: `${baseUrl}/services/property-development`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },

    {
      url: `${baseUrl}/services/land-reclamation`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },

    ...projectUrls,
    ...teamUrls,
  ];
}