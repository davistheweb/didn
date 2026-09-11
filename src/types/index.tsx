import { LucideIcon } from "lucide-react";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { ComponentType, SVGProps } from "react";

declare global {
  type IconType = ComponentType<
    SVGProps<SVGSVGElement> & {
      size?: number;
    }
  >;
  interface INavItems {
    title: string;
    link: string;
    dropdownItems?: {
      title: string;
      link: string;
    }[];
  }

  interface IImpactStats {
    beneficiaries: number;
    volunteers: number;
    communityReached: number;
    projectCompleted: number;
  }

  type TImpactStatsProps = {
    value: number;
    label: string;
    suffix?: string;
    desc: string;
  };

  interface IImpactStatsValues {
    value: number;
    label: string;
    suffix?: string;
    desc: string;
  }

  interface IFocusAreas {
    title: string;
    description: string;
    icon: LucideIcon;
  }

  interface IArticle {
    title: string;
    category: string;
    image: StaticImport;
    date: string;
    href: string;
  }

  interface IFooterLink {
    label: string;
    href: string;
  }

  interface IFooterColumnGroup {
    heading?: string;
    links: IFooterLink[];
  }

  interface IFooterColumn {
    title: string;
    groups: IFooterColumnGroup[];
  }

  interface ISocialLink {
    label: string;
    href: string;
    icon: React.ComponentType<SVGProps<SVGSVGElement>>;
  }

  interface IAboutValue {
    title: string;
    description: string;
  }

  interface IAboutGoal {
    title: string;
    description: string;
  }

  interface IAboutFocusArea {
    title: string;
    description: string;
  }

  interface IAboutApproachStage {
    title: string;
    description: string;
  }

  interface IAboutImpactStat {
    value: number;
    suffix?: string;
    label: string;
  }

  interface ISdgAlignment {
    id: number;
    title: string;
    color: string;
  }

  interface IOrgStructureLevel {
    title: string;
    description?: string;
  }

  interface IAboutMember {
    name: string;
    position: string;
    bio?: string;
    photo?: StaticImport;
  }

  interface ITeamMember {
    slug: string;
    name: string;
    role: string;
    photo: StaticImport;
    bio: string[];
    tags: string[];
  }
}
