import type React from "react";
import { coreValues } from "@/data/about";
import { nunitoFont, poppinsFont } from "@/lib/font";
import { Headline } from "../ui/Headline";

export const CoreValues: React.FC = () => {
  return (
    <section className="flex w-full flex-col items-start gap-5 px-8 py-15 lg:py-20">
      <Headline heading="/ Our Values" title="What Guides Our Work" />

      <div className="mt-6 grid w-full border-t border-gray-200 md:grid-cols-2 lg:grid-cols-3">
        {coreValues.map((value, _i) => (
          <div
            key={value.title}
            className="group flex flex-col gap-4 border-b border-gray-200 py-10 pr-8"
          >
            <span
              className={`${nunitoFont.className} text-4xl font-bold text-gray-200 transition-colors duration-300 group-hover:text-custom-green`}
            >
              {String(_i + 1).padStart(2, "0")}
            </span>
            <h3
              className={`${nunitoFont.className} text-xl font-bold text-gray-900`}
            >
              {value.title}
            </h3>
            <p
              className={`${poppinsFont.className} text-sm leading-relaxed text-gray-600`}
            >
              {value.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
