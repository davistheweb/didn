import { ChevronDown } from "lucide-react";
import type React from "react";
import { orgStructure } from "@/data/about";
import { nunitoFont, poppinsFont, rubikFont } from "@/lib/font";
import { Headline } from "../ui/Headline";

export const OrganizationalStructure: React.FC = () => {
  return (
    <section className="flex w-full flex-col items-start gap-5 bg-[#f4f7fa] px-8 py-15 lg:py-20">
      <Headline heading="/ Our Structure" title="How We Work" />

      <p
        className={`${rubikFont.className} max-w-3xl pt-1 text-[15px] leading-relaxed text-gray-600`}
      >
        DIDN brings together leadership, staff, volunteers, partners, and other
        stakeholders to support the organization's programs and initiatives.
      </p>

      <div className="mt-10 flex w-full justify-center">
        <div className="flex w-full max-w-150 flex-col items-center">
          {orgStructure.map((level, _i) => (
            <div
              key={level.title}
              className="flex w-full flex-col items-center"
            >
              <div className="flex w-full items-center justify-center rounded-sm border border-gray-200 bg-white px-6 py-5">
                <span
                  className={`${nunitoFont.className} text-base font-bold tracking-wide text-gray-900 uppercase`}
                >
                  {level.title}
                </span>
              </div>

              {_i < orgStructure.length - 1 && (
                <div className="flex flex-col items-center py-4">
                  <span className="h-8 w-px bg-gray-300" />
                  <ChevronDown
                    size={20}
                    className="text-custom-green"
                    strokeWidth={2.5}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      {/* 
      <p
        className={`${poppinsFont.className} mx-auto mt-4 text-xs text-gray-400`}
      >
        Placeholder structure — to be updated with DIDN's official
        organizational chart.
      </p> */}
    </section>
  );
};
