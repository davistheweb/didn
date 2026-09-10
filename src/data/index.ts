import { ArticleImg1, ArticleImg2, ArticleImg3 } from "@/assets";
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

const articles: IArticle[] = [
  {
    title: "Leveraging Technology for Crime Prevention in Bayelsa Communities",
    category: "Legal Services",
    image: ArticleImg1,
    date: "August 9, 2026",
    href: "/research-policy-citizen-action/leveraging-technology-for-crime-prevention-in-bayelsa-communities",
  },
  {
    title:
      "What Happened at the 3rd Africa High-Level Civil Society AML/CFT Conference 2026?",
    category: "Defending the Civic Space",
    image: ArticleImg2,
    date: "August 9, 2026",
    href: "/research-policy-citizen-action/what-happened-at-the-3rd-africa-high-level-civil-society-aml-cft-conference-2026",
  },
  {
    title:
      "How the PCPS Project Is Improving Safety and Resilience in Bayelsa Communities",
    category: "Defending the Civic Space",
    image: ArticleImg3,
    date: "August 8, 2026",
    href: "/research-policy-citizen-action/how-the-pcps-project-is-improving-safety-and-resilience-in-bayelsa-communities",
  },
];

export { navItems, focusAreas, articles };
