export interface Project {
  slug: string;
  title: string;
  category: string;
  year: string;
  image: string;
  description: string;
}

export const projects: Project[] = [
  {
    slug: "luxury-apartment-wattala",
    title: "Luxury Apartment - Wattala",
    category: "Construction",
    year: "2010",
    image: "/projects/pro1.jpeg",
    description:
      "2-story luxury apartment construction project completed in Wattala.",
  },

  {
    slug: "semi-luxury-apartment-borella",
    title: "Semi Luxury Apartment - Borella",
    category: "Construction",
    year: "2008",
    image: "/projects/pro2.jpeg",
    description:
      "3-story semi luxury apartment construction project in Borella.",
  },

  {
    slug: "semi-luxury-apartment-kadawatha",
    title: "Semi Luxury Apartment - Kadawatha",
    category: "Construction",
    year: "2011",
    image: "/projects/pro3.jpeg",
    description:
      "3-story residential apartment construction project.",
  },

  {
    slug: "semi-luxury-apartment-jaela",
    title: "Semi Luxury Apartment - Ja-Ela",
    category: "Construction",
    year: "2012",
    image: "/projects/pro4.jpeg",
    description:
      "Multi-storey apartment development project.",
  },

  {
    slug: "luxury-apartment-bambalapitiya",
    title: "Luxury Apartment - Bambalapitiya",
    category: "Construction",
    year: "2015",
    image: "/projects/pro5.jpeg",
    description:
      "Luxury apartment construction project in Bambalapitiya.",
  },
];