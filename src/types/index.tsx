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
}
