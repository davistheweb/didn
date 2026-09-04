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
}
