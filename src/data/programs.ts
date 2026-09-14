import type { StaticImageData } from "next/image";
import { BackgroundImage, MeetingAboutImage } from "@/assets";
import groupImage from "@/assets/groupimage.jpg";
import { getGalleryAlbum } from "@/data/gallery";

const CLIMATE_CHANGE_SLUG =
  "presentation-of-imo-state-policy-on-climate-change-june-2025";
const GIRL_CHILD_SLUG = "girl-child-empowerment-summit-2025";
const FIGHT_INEQUALITY_SLUG = "fight-inequality";

const albumCover = (slug: string): StaticImageData =>
  getGalleryAlbum(slug)?.coverImage.src ?? BackgroundImage;

const climateAlbum = getGalleryAlbum(CLIMATE_CHANGE_SLUG);
const girlChildAlbum = getGalleryAlbum(GIRL_CHILD_SLUG);
const fightInequalityAlbum = getGalleryAlbum(FIGHT_INEQUALITY_SLUG);

const programs: IProgram[] = [
  {
    id: "community-development",
    number: "01",
    title: "Community Development",
    description:
      "Building stronger communities through opportunities, local initiatives, and sustainable solutions.",
    areas: [
      "Education",
      "Health & Wellbeing",
      "Economic Empowerment",
      "Skills Acquisition",
      "Digital Inclusion",
      "Humanitarian Intervention",
    ],
    image: MeetingAboutImage,
    imageAlt: "DIDN team and community members in a meeting",
  },
  {
    id: "environmental-sustainability",
    number: "02",
    title: "Environmental Sustainability",
    description:
      "Promoting responsible practices that protect our environment, strengthen climate awareness, and support a sustainable future.",
    areas: ["Climate Action", "Environmental Awareness", "Advocacy & Policy"],
    image: albumCover(CLIMATE_CHANGE_SLUG),
    imageAlt:
      "Presentation of the Imo State Policy on Climate Change, June 2025",
    featuredProject: {
      title: "Presentation of Imo State Policy on Climate Change, June 2025",
      description: climateAlbum?.description,
      gallerySlug: CLIMATE_CHANGE_SLUG,
    },
  },
  {
    id: "human-rights",
    number: "03",
    title: "Human Rights",
    description:
      "Promoting dignity, equality, inclusion, awareness, and advocacy around fundamental human rights.",
    areas: [
      "Human Rights Advocacy",
      "Social Inclusion",
      "Women & Girls Empowerment",
      "Advocacy & Policy",
    ],
    image: groupImage,
    imageAlt: "DIDN community members gathered together",
  },
  {
    id: "leadership-youth-development",
    number: "04",
    title: "Leadership & Youth Development",
    description:
      "Equipping young people with skills, knowledge, leadership opportunities, and platforms to participate in positive change.",
    areas: [
      "Youth Development",
      "Leadership Development",
      "Capacity Building",
      "Women & Girls Empowerment",
    ],
    image: albumCover(GIRL_CHILD_SLUG),
    imageAlt: "Young women and girls at the Girl Child Empowerment Summit 2025",
    featuredProject: {
      title: "Girl Child Empowerment Summit 2025",
      description: girlChildAlbum?.description,
      gallerySlug: GIRL_CHILD_SLUG,
    },
  },
  {
    id: "fight-inequality",
    number: "05",
    title: "Fight Inequality",
    description:
      "Raising awareness and sparking conversations on inequality in our communities through sensitization campaigns, outreach programs, and grassroots advocacy.",
    areas: [
      "Inequality Awareness",
      "Social Justice",
      "Community Sensitization",
      "Advocacy & Policy",
    ],
    image: albumCover(FIGHT_INEQUALITY_SLUG),
    imageAlt:
      "Fight Inequality sensitization outreach at Imo State University Campus, Owerri",
    featuredProject: {
      title: "Fight Inequality — Imo State University Outreach",
      description: fightInequalityAlbum?.description,
      gallerySlug: FIGHT_INEQUALITY_SLUG,
    },
  },
];

export { programs };
