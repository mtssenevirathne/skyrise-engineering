export interface Service {
  title: string;
  image: string;
  description: string;
  features: string[];
}

export const services: Record<string, Service> = {
  "civil-engineering": {
    title: "Civil Engineering Works",
    image: "/services/civil-new.jpg",
    description:
      "Professional civil engineering solutions including roads, drainage systems, foundations, structural design and infrastructure development.",

    features: [
      "Structural Engineering",
      "Road Construction",
      "Drainage Systems",
      "Infrastructure Development",
      "Site Planning",
      "Project Supervision",
    ],
  },

  construction: {
    title: "Construction Works",
    image: "/services/construtions-new.jpg",
    description:
      "Residential, commercial and industrial construction projects delivered with quality and precision.",

    features: [
      "Residential Buildings",
      "Commercial Buildings",
      "Industrial Projects",
      "Renovations",
      "Project Management",
      "Turnkey Solutions",
    ],
  },

  "electrical-electronic": {
    title: "Electrical & Electronic Engineering",
    image: "/services/electrical.jpg",
    description:
      "Electrical installations, automation systems, CCTV solutions and power distribution services for residential, commercial and industrial sectors.",

    features: [
      "Electrical Installations",
      "Power Distribution",
      "CCTV Systems",
      "Automation Systems",
      "Maintenance Services",
      "Electronic Solutions",
    ],
  },

  "property-development": {
    title: "Property Development & Sales",
    image: "/services/property-new.jpg",
    description:
      "Property development solutions, land sales and investment opportunities designed to maximize value and long-term growth.",

    features: [
      "Property Development",
      "Land Sales",
      "Real Estate Consulting",
      "Investment Opportunities",
      "Property Marketing",
      "Project Planning",
    ],
  },

  "land-reclamation": {
    title: "Land Reclamation Works",
    image: "/services/land-new.jpg",
    description:
      "Land filling, site preparation, excavation and development solutions for residential, commercial and industrial projects.",

    features: [
      "Land Filling",
      "Site Preparation",
      "Earth Works",
      "Ground Improvement",
      "Excavation",
      "Land Development",
    ],
  },
};