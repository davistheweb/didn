import { ArrowDown } from "lucide-react";
import Link from "next/link";
import type React from "react";
import { teamMembers } from "@/data/teams";
import { nunitoFont, poppinsFont } from "@/lib/font";

export const TeamsHero: React.FC = () => {
  return (
    <section className="relative flex w-full overflow-hidden bg-[#0b2f66]">
      <div className="flex w-full flex-col gap-10 px-8 pt-28 pb-16 md:pt-36 lg:flex-row lg:items-end lg:justify-between lg:pt-44 lg:pb-24">
        <div className="flex flex-col gap-6 lg:max-w-3xl">
          <div className="flex items-center gap-3" data-aos="fade-up">
            <span className="h-2 w-2 rounded-full bg-custom-green" />
            <span
              className={`${nunitoFont.className} text-sm font-semibold tracking-widest text-white/70 uppercase`}
            >
              01 / Our Team
            </span>
          </div>

          <h1
            className={`${nunitoFont.className} text-3xl leading-tight font-bold text-white md:text-5xl`}
            data-aos="fade-up"
            data-aos-delay="100"
          >
            The People Behind the Mission
          </h1>

          <div
            className="flex flex-col gap-3"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <p
              className={`${poppinsFont.className} text-sm leading-relaxed text-white/85 md:text-base`}
            >
              Meaningful change is driven by people who are committed to serving
              communities, creating opportunities, and turning ideas into
              action.
            </p>
            <p
              className={`${poppinsFont.className} text-sm leading-relaxed text-white/65`}
            >
              Meet the leadership behind Direct Impact Development Network.
            </p>
          </div>

          <a
            href="#team"
            className={`${poppinsFont.className} flex w-fit cursor-pointer items-center gap-2 rounded-lg bg-custom-green px-8 py-4 font-medium text-white transition-opacity duration-200 hover:opacity-90`}
            data-aos="fade-up"
            data-aos-delay="300"
          >
            Meet the Team <ArrowDown size={18} />
          </a>
        </div>

        <div
          className="flex flex-col gap-4 border-l-2 border-[#45a113]/50 pl-6 lg:max-w-72"
          data-aos="fade-left"
          data-aos-delay="250"
        >
          <span
            className={`${nunitoFont.className} text-xs font-bold tracking-widest text-white/60 uppercase`}
          >
            Leadership & Team
          </span>
          {teamMembers.map((member) => (
            <Link
              key={member.slug}
              href={`/teams/${member.slug}`}
              className="group flex flex-col gap-0.5"
            >
              <span
                className={`${nunitoFont.className} text-base font-bold text-white transition-colors duration-200 group-hover:text-[#a9d18f]`}
              >
                {member.name}
              </span>
              <span
                className={`${poppinsFont.className} text-xs text-white/60`}
              >
                {member.role}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
