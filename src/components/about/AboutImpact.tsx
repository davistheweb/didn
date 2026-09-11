import Image from "next/image";
import type React from "react";
import ImpactImage from "@/assets/IMG_0749.jpg";
import { aboutImpactStats } from "@/data/about";
import { nunitoFont, rubikFont } from "@/lib/font";

export const AboutImpact: React.FC = () => {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={ImpactImage}
          alt="DIDN community impact"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#0b2f66]/85" />
      </div>

      <div className="relative flex w-full flex-col items-start gap-6 px-8 py-16 lg:py-24">
        <div className="flex items-center gap-3">
          <span className="h-2 w-2 rounded-full bg-custom-green" />
          <span
            className={`${nunitoFont.className} text-sm font-semibold tracking-widest text-white/70 uppercase`}
          >
            / Our Impact
          </span>
        </div>

        <h2
          className={`${nunitoFont.className} text-2xl leading-tight font-bold text-white md:text-4xl`}
        >
          Making a Difference Where It Matters
        </h2>

        <div className="mt-6 grid w-full grid-cols-2 gap-y-10 lg:grid-cols-4 lg:divide-x lg:divide-white/15">
          {aboutImpactStats.map((stat) => (
            <div key={stat.label} className="flex flex-col gap-2 lg:px-10">
              <span
                className={`${nunitoFont.className} text-4xl font-bold text-white md:text-5xl`}
              >
                {stat.value.toLocaleString("en-US")}
                {stat.suffix && (
                  <span className="text-custom-green">{stat.suffix}</span>
                )}
              </span>
              <span className={`${rubikFont.className} text-sm text-white/75`}>
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
