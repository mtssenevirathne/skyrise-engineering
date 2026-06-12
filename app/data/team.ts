export interface TeamMember {
  slug: string;
  name: string;
  position: string;
  image: string;
  experience: string;
  description: string;
}

export const team: TeamMember[] = [
  {
    slug: "subadra",
    name: "Egodahettiarachchige Don Subadra",
    position: "Founder & Senior Civil Engineering Consultant",
    image: "/team/placeholder1.jpeg",
    experience: "36+ Years",
    description:
      "Retired Civil Engineer with over 36 years of service at the National Water Supply & Drainage Board of Sri Lanka. Extensive experience in water supply infrastructure, treatment plants and large-scale civil engineering projects.",
  },

  {
    slug: "krishan-tharanga",
    name: "Egoda Hettiarachchige Krishan Tharanga",
    position: "Director - Engineering Operations",
    image: "/team/placeholder2.jpeg",
    experience: "8+ Years",
    description:
      "Civil Engineering professional specializing in water supply infrastructure, reinforced concrete structures, road construction and project supervision.",
  },

  {
    slug: "sachith-tharanga",
    name: "Egodahettiarachchige Sachith Tharanga",
    position: "Project Engineer",
    image: "/team/placeholder3.jpeg",
    experience: "3+ Years",
    description:
      "Civil Engineering professional experienced in infrastructure development, project supervision and quality assurance.",
  },

  {
    slug: "sasini-subodha",
    name: "Egoda Hettiarachchige Dona Sasini Subodha",
    position: "Director - Technology & Business Systems",
    image: "/team/placeholder4.jpeg",
    experience: "1+ Years",
    description:
      "Computer Science graduate specializing in AI, software development, business intelligence and enterprise systems.",
  },
];