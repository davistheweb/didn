import type React from "react";
import { aboutFocusAreas } from "@/data/about";
import { nunitoFont, poppinsFont, rubikFont } from "@/lib/font";
import { Headline } from "../ui/Headline";

export const OurFocus: React.FC = () => {
  return (
    <section className="flex w-full flex-col items-start gap-5 px-8 py-15 lg:py-20">
      <div data-aos="fade-up">
        <Headline heading="/ Our Focus" title="Where We Create Change" />
      </div>

      <p
        className={`${rubikFont.className} pt-2 text-[15px] leading-relaxed text-gray-600`}
        data-aos="fade-up"
        data-aos-delay="100"
      >
        An overview of the major intervention areas where DIDN designs,
        implements, and supports initiatives alongside communities.
      </p>

      <div className="mt-6 grid w-full gap-x-14 lg:grid-cols-2">
        {aboutFocusAreas.map((area, _i) => (
          <div
            key={area.title}
            className="flex gap-5 border-b border-gray-200 py-5"
            data-aos="fade-up"
            data-aos-delay={_i * 75}
          >
            <span
              className={`${nunitoFont.className} shrink-0 text-sm font-bold text-custom-green`}
            >
              {String(_i + 1).padStart(2, "0")}
            </span>
            <div className="flex flex-col gap-1.5">
              <h4
                className={`${nunitoFont.className} text-base font-bold text-gray-900`}
              >
                {area.title}
              </h4>
              <p
                className={`${poppinsFont.className} text-sm leading-relaxed text-gray-500`}
              >
                {area.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
