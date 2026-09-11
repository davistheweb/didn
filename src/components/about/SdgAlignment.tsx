import type React from "react";
import { sdgs } from "@/data/about";
import { nunitoFont, rubikFont } from "@/lib/font";
import { Headline } from "../ui/Headline";

export const SdgAlignment: React.FC = () => {
  return (
    <section className="flex w-full flex-col items-start gap-5 px-8 py-15 lg:py-20">
      <Headline
        heading="/ SDG Alignment"
        title="Contributing to Sustainable Development"
      />

      <p
        className={`${rubikFont.className} max-w-4xl pt-2 text-[15px] leading-relaxed text-gray-600`}
      >
        DIDN's work contributes to the broader Sustainable Development Goals by
        addressing interconnected challenges across health, education, equality,
        environment, economic opportunity, communities, and partnerships.
      </p>

      <div className="mt-6 grid w-full gap-x-12 md:grid-cols-2">
        {sdgs.map((sdg) => (
          <div
            key={sdg.id}
            className="flex items-center gap-5 border-b border-gray-200 py-4"
          >
            <span
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm"
              style={{ backgroundColor: sdg.color }}
            >
              <span
                className={`${nunitoFont.className} text-xs font-bold text-white`}
              >
                {sdg.id}
              </span>
            </span>
            <div className="flex flex-col gap-0.5">
              <span
                className={`${nunitoFont.className} text-[11px] font-bold tracking-widest text-gray-400 uppercase`}
              >
                SDG {sdg.id}
              </span>
              <span
                className={`${rubikFont.className} text-[15px] text-gray-800`}
              >
                {sdg.title}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
