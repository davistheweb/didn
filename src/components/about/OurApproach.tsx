import type React from "react";
import { approachStages } from "@/data/about";
import { nunitoFont, poppinsFont, rubikFont } from "@/lib/font";
import { Headline } from "../ui/Headline";

export const OurApproach: React.FC = () => {
  return (
    <section className="flex w-full flex-col  gap-5 px-8 py-8 lg:py-10">
      <Headline
        heading="/ Our Approach"
        title="We Listen. We Collaborate. We Act."
      />

      <div className="mt-1 flex flex-col items-center gap-1.5 pt-2 text-center">
        <p
          className={`${rubikFont.className} text-[15px] leading-relaxed text-gray-700`}
        >
          We believe sustainable development should be community-driven.
        </p>
        <p
          className={`${poppinsFont.className} max-w-2xl text-sm leading-relaxed text-gray-500`}
        >
          Our approach brings together communities, partners, institutions, and
          other stakeholders to understand challenges, develop practical
          solutions, and work toward measurable outcomes.
        </p>
      </div>

      <div className="relative mt-10 w-full">
        <div className="absolute top-6 right-0 left-0 hidden h-px bg-gray-300 md:block" />
        <div className="absolute top-6 bottom-6 left-6 w-px bg-gray-300 md:hidden" />

        <div className="grid gap-10 md:grid-cols-4 md:gap-6 lg:gap-10">
          {approachStages.map((stage, _i) => (
            <div
              key={stage.title}
              className="relative flex gap-5 md:flex-col md:gap-5"
            >
              <span
                className={`${nunitoFont.className} z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-custom-green bg-white text-sm font-bold text-custom-green`}
              >
                {String(_i + 1).padStart(2, "0")}
              </span>
              <div className="flex flex-col gap-2 pt-1 md:pr-8">
                <h4
                  className={`${nunitoFont.className} text-lg font-bold text-gray-900`}
                >
                  {stage.title}
                </h4>
                <p
                  className={`${poppinsFont.className} text-sm leading-relaxed text-gray-600`}
                >
                  {stage.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
