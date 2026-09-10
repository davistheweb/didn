import { GraduationCap, Leaf, Scale, UsersRound } from "lucide-react";

const navItems: INavItems[] = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "About Us",
    link: "#",
    dropdownItems: [
      {
        title: "Teams",
        link: "/teams",
      },

      { title: "What We Do", link: "/what-we-do" },
      { title: "Our Impact", link: "our-impact" },
    ],
  },
  {
    title: "Programs",
    link: "/programs",
  },
  { title: "Gallery", link: "/gallery" },
  // { title: "Blog", link: "/blog" },
];

const focusAreas: IFocusAreas[] = [
  {
    title: "Community Development",
    description:
      "Building stronger communities through opportunities, local initiatives, and sustainable solutions.",
    icon: UsersRound,
  },
  {
    title: "Environmental Sustainability",
    description:
      "Promoting responsible practices that protect our environment and support a sustainable future.",
    icon: Leaf,
  },
  {
    title: "Human Rights",
    description:
      "Promoting dignity, equality, inclusion, and awareness of fundamental human rights.",
    icon: Scale,
  },

  {
    title: "Leadership & Youth Development",
    description:
      "Equipping young people with the skills, confidence, and leadership opportunities to create change.",
    icon: GraduationCap,
  },
];

export { navItems, focusAreas };
