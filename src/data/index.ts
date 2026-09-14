import { GraduationCap, Leaf, Scale, UsersRound } from "lucide-react";
import Facebook from "@/components/icons/Facebook";
import Instagram from "@/components/icons/Instagram";
import Tiktok from "@/components/icons/Tiktok";
import X from "@/components/icons/X";
import Youtube from "@/components/icons/Youtube";

const navItems: INavItems[] = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "About Us",
    link: "/about",
    dropdownItems: [
      {
        title: "Teams",
        link: "/teams",
      },
    ],
  },
  {
    title: "Blog",
    link: "/blog",
  },
  {
    title: "Programs",
    link: "/programs",
  },
  {
    title: "Events",
    link: "/events",
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

const socialLinks: ISocialLink[] = [
  {
    label: "Facebook",
    href: "https://facebook.com/didnetwork",
    icon: Facebook,
  },
  {
    label: "Instagram",
    href: "#",
    icon: Instagram,
  },
  {
    label: "X",
    href: "#",
    icon: X,
  },
  {
    label: "YouTube",
    href: "#",
    icon: Youtube,
  },
  {
    label: "Tiktok",
    href: "#",
    icon: Tiktok,
  },
];

const footerColumns: IFooterColumn[] = [
  {
    title: "Explore",
    groups: [
      {
        links: [
          { label: "Home", href: "/" },
          { label: "About Us", href: "/about" },
          { label: "Teams", href: "/teams" },
          { label: "Programs", href: "/programs" },
          { label: "Blog", href: "/blog" },
          { label: "Events", href: "/events" },
          { label: "Gallery", href: "/gallery" },
        ],
      },
    ],
  },
  {
    title: "Get Involved",
    groups: [
      {
        links: [{ label: "Contact Us", href: "/contact" }],
      },
    ],
  },
  {
    title: "Contact",
    groups: [
      {
        links: [
          {
            label: "directimpactnetwork@gmail.com",
            href: "mailto:directimpactnetwork@gmail.com",
          },
          { label: "info@didn.org", href: "mailto:info@didn.org" },
          { label: "+234 901 879 7128", href: "tel:+2349018797128" },
          {
            label: "Plot 127 Ihechuwa Street, MCC Owerri, Imo State, Nigeria",
            href: "https://maps.google.com/?q=Plot+127+Ihechuwa+Street,+MCC+Owerri,+Imo+State,+Nigeria",
          },
        ],
      },
    ],
  },
];

const legalLinks: IFooterLink[] = [
  { label: "Privacy Policy", href: "/compliance/privacy-policy" },
  { label: "Terms and condition", href: "/compliance/terms-and-condition" },
  { label: "Legal", href: "/legal" },
];

export { focusAreas, footerColumns, legalLinks, navItems, socialLinks };
