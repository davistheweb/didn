import type React from "react";
import { poppinsFont, rubikFont } from "@/lib/font";
import { Headline } from "../ui/Headline";

export const ProgramsIntro: React.FC = () => {
  return (
    <section className="flex w-full flex-col gap-6 px-8 py-15 lg:flex-row lg:items-end lg:justify-between lg:py-20">
      <Headline heading="02 / Our Work" title="Where We Focus Our Efforts" />

      <div
        className="flex max-w-xl flex-col gap-4"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <p
          className={`${rubikFont.className} text-[15px] leading-relaxed text-gray-600`}
        >
          DIDN{"'"}s work is centered around four interconnected areas that help
          communities become more resilient, inclusive, and sustainable.
        </p>
        <p
          className={`${poppinsFont.className} text-sm leading-relaxed text-gray-500`}
        >
          Every initiative starts with real needs, takes its lead from the
          community, and connects to the wider systems that shape everyday life.
        </p>
      </div>
    </section>
  );
};
