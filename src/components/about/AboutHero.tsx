import { ArrowDown } from "lucide-react";
import Image from "next/image";
import type React from "react";
import HeroImage from "@/assets/IMG_0727.jpg";
import { nunitoFont, poppinsFont, rubikFont } from "@/lib/font";

export const AboutHero: React.FC = () => {
  return (
    <section className="relative flex w-full overflow-hidden bg-[#0b2f66]">
      <div className="grid w-full px-8 pt-28 pb-16 md:pt-36 lg:grid-cols-12 lg:pt-44 lg:pb-24">
        <div className="flex flex-col justify-center gap-6 lg:col-span-7 lg:pr-14">
          {/* <div className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-custom-green" />
            <span
              className={`${nunitoFont.className} text-sm font-semibold tracking-widest text-white/70 uppercase`}
            >
              01 / About Us
            </span>
          </div> */}

          <h1
            className={`${nunitoFont.className} text-3xl leading-tight font-bold text-white md:text-5xl`}
          >
            Building a Better Future, Together.
          </h1>

          <div className="flex flex-col gap-4 md:max-w-2xl">
            <p
              className={`${rubikFont.className} text-base leading-relaxed text-white/85 md:text-lg`}
            >
              Direct Impact Development Network (DIDN) is a non-governmental and
              non-profit organization committed to creating meaningful,
              sustainable change across communities.
            </p>
            <p
              className={`${poppinsFont.className} text-sm leading-relaxed text-white/70 md:text-base`}
            >
              We design, implement, and support community-driven initiatives
              that address social, economic, environmental, and health
              challenges while creating opportunities for individuals and
              communities to thrive.
            </p>
          </div>

          <a
            href="#our-story"
            className={`${rubikFont.className} flex w-fit cursor-pointer items-center gap-2 rounded-lg bg-custom-green px-8 py-4 font-medium text-white transition-opacity duration-200 hover:opacity-90`}
          >
            Get to Know Us <ArrowDown size={18} />
          </a>
        </div>

        <div className="relative hidden lg:col-span-5 lg:block">
          <div className="relative aspect-[3/4] w-full">
            <div className="absolute -top-5 -left-5 h-full w-full border-2 border-[#45a113]/50" />
            <Image
              src={HeroImage}
              alt="Direct Impact Development Network at work in the community"
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
              Non-profit · Community-driven
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
