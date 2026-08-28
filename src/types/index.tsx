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
}
