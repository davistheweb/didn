"use client";

import { nunitoFont, poppinsFont, rubikFont } from "@/lib/font";
import React from "react";

export const ImpactStats: React.FC<
  {
    hasBorder: boolean;
  } & TImpactStatsProps
> = ({ hasBorder = false, label, value, suffix, desc }) => {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-1 pr-5 ${
        hasBorder ? "md:border-r-2 md:border-r-gray-300" : ""
      }`}
    >
      <h1 className={`text-2xl font-bold ${nunitoFont.className}`}>
        {value} {suffix}
      </h1>

      <p className={`text-[15px] ${rubikFont.className}`}>{label}</p>

      <span
        className={`w-67.5 text-center text-xs text-gray-600 ${poppinsFont.className}`}
      >
        {desc}
      </span>
    </div>
  );
};
