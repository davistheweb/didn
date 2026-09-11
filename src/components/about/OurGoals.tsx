import type React from "react";
import { aboutGoals } from "@/data/about";
import { nunitoFont, rubikFont } from "@/lib/font";
import { Headline } from "../ui/Headline";

export const OurGoals: React.FC = () => {
  return (
    <section className="flex w-full flex-col items-start gap-5 bg-[#f4f7fa] px-8 py-15 lg:py-20">
      <Headline
        heading="/ Our Goals"
        title="Turning Commitment Into Action"
      />

      <div className="mt-8 w-full divide-y divide-gray-200 border-y border-gray-200">
        {aboutGoals.map((goal, _i) => (
          <div
            key={goal.title}
            className="grid gap-3 py-7 md:grid-cols-12 md:items-baseline md:gap-6"
          >
            <span
              className={`${nunitoFont.className} text-sm font-bold text-custom-green md:col-span-1`}
            >
              {String(_i + 1).padStart(2, "0")}
            </span>
            <h3
              className={`${nunitoFont.className} text-xl font-bold text-gray-900 md:col-span-4`}
            >
              {goal.title}
            </h3>
            <p
              className={`${rubikFont.className} text-[15px] leading-relaxed text-gray-600 md:col-span-7`}
            >
              {goal.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
