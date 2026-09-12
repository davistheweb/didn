import { ArrowDown } from "lucide-react";
import Image from "next/image";
import type React from "react";
import { BackgroundImage } from "@/assets";
import { nunitoFont, poppinsFont, rubikFont } from "@/lib/font";

export const ProgramsHero: React.FC = () => {
  return (
    <section className="relative flex w-full overflow-hidden bg-[#0b2f66]">
      <div className="grid w-full px-8 pt-28 pb-16 md:pt-36 lg:grid-cols-12 lg:pt-44 lg:pb-24">
        <div className="flex flex-col justify-center gap-6 lg:col-span-7 lg:pr-14">
          <div className="flex items-center gap-3" data-aos="fade-up">
            <span className="h-2 w-2 rounded-full bg-custom-green" />
            <span
              className={`${nunitoFont.className} text-sm font-semibold tracking-widest text-white/70 uppercase`}
            >
              01 / Programs
            </span>
          </div>

          <h1
            className={`${nunitoFont.className} text-3xl leading-tight font-bold text-white md:text-5xl`}
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Creating Change Through Action
          </h1>

          <div
            className="flex flex-col gap-4 md:max-w-2xl"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <p
              className={`${rubikFont.className} text-base leading-relaxed text-white/85 md:text-lg`}
            >
              DIDN develops and supports initiatives that respond to social,
              economic, environmental, health, and community challenges.
            </p>
            <p
              className={`${poppinsFont.className} text-sm leading-relaxed text-white/70 md:text-base`}
            >
              We listen to communities, work with partners, and turn ideas into
              practical action — thoughtfully, respectfully, and one step at a
              time.
            </p>
          </div>

          <a
            href="#programs"
            className={`${rubikFont.className} flex w-fit cursor-pointer items-center gap-2 rounded-lg bg-custom-green px-8 py-4 font-medium text-white transition-opacity duration-200 hover:opacity-90`}
            data-aos="fade-up"
            data-aos-delay="300"
          >
            Explore Our Programs <ArrowDown size={18} />
          </a>
        </div>

        <div
          className="relative hidden lg:col-span-5 lg:block"
          data-aos="fade-left"
          data-aos-delay="250"
        >
          <div className="relative aspect-[3/4] w-full">
            <div className="absolute -top-5 -left-5 h-full w-full border-2 border-[#45a113]/50" />
            <Image
              src={BackgroundImage}
              alt="Direct Impact Development Network community program"
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
              priority
            />
          </div>

          <div className="absolute bottom-8 left-0 rounded-sm bg-custom-green px-5 py-3">
            <span
              className={`${nunitoFont.className} text-xs font-bold tracking-widest text-white uppercase`}
            >
              Programs · Community-driven
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
