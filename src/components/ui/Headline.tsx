import { nunitoFont, poppinsFont, rubikFont } from "@/lib/font";
import React from "react";

export const Headline: React.FC<{
  heading: string;
  title?: string;
}> = ({ heading, title }) => {
  return (
    <div className="relative flex gap-4">
      <div className="headline-ui" />
      <div className="flex flex-col gap-4">
        <span
          className={`${nunitoFont.className} text-custom-green text-[14px]`}
        >
          {heading}
        </span>
        <span className={`${rubikFont.className} text-[18px] font-medium`}>
          {title}
        </span>
      </div>
    </div>
  );
};
