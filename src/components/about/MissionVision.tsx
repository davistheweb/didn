import { Quote } from "lucide-react";
import type React from "react";
import { nunitoFont, poppinsFont, rubikFont } from "@/lib/font";

export const MissionVision: React.FC = () => {
  return (
    <section className="flex w-full flex-col bg-custom-blue px-8 py-16 lg:py-24">
      <div className="flex flex-col gap-5">
        <div className="flex items-center gap-3" data-aos="fade-up">
          <span className="h-2 w-2 rounded-full bg-custom-green" />
          <span
            className={`${nunitoFont.className} text-sm font-semibold tracking-widest text-white/70 uppercase`}
          >
            / Our Purpose
          </span>
        </div>

        <div className="mt-6 grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div
            className="flex flex-col gap-5 border-t-2 border-white/25 pt-7"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <span
              className={`${nunitoFont.className} text-xs font-bold tracking-widest text-white/70 uppercase`}
            >
              Our Mission
            </span>
            <p
              className={`${rubikFont.className} text-base leading-relaxed text-white/90 md:text-lg`}
            >
              Direct Impact Development Network exists to design, implement, and
              support innovative, community-driven initiatives that address
              pressing social, economic, environmental, and health challenges.
            </p>
            <p
              className={`${poppinsFont.className} text-sm leading-relaxed text-white/70`}
            >
              Through strategic partnerships, advocacy, capacity building,
              technology, and sustainable interventions, we empower individuals
              and communities to achieve measurable improvements in their
              quality of life and contribute meaningfully to the attainment of
              the Sustainable Development Goals (SDGs).
            </p>
          </div>

          <div
            className="flex flex-col gap-5 border-t-2 border-white/25 pt-7"
            data-aos="fade-up"
            data-aos-delay="250"
          >
            <span
              className={`${nunitoFont.className} text-xs font-bold tracking-widest text-white/70 uppercase`}
            >
              Our Vision
            </span>
            <p
              className={`${rubikFont.className} text-base leading-relaxed text-white/90 md:text-lg`}
            >
              To build a world where every individual and community has
              equitable access to opportunities, resources, and support systems
              that enable sustainable development, social inclusion, and lasting
              prosperity.
            </p>
            <span className="block border-t border-white/10 pt-5" />
          </div>
        </div>

        <div
          className="relative mx-auto mt-8 flex max-w-4xl flex-col items-center gap-5 border-t border-white/20 pt-12 text-center"
          data-aos="fade-up"
          data-aos-delay="350"
        >
          <Quote size={30} className="text-custom-green" />
          <p
            className={`${rubikFont.className} text-lg leading-relaxed text-white md:text-2xl`}
          >
            “Our development philosophy moves beyond promises and intentions to
            tangible, measurable, and sustainable outcomes that directly improve
            lives and strengthen communities.”
          </p>
        </div>
      </div>
    </section>
  );
};
