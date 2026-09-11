import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type React from "react";
import { nunitoFont, poppinsFont, rubikFont } from "@/lib/font";

interface MemberHeroProps {
  member: ITeamMember;
}

export const MemberHero: React.FC<MemberHeroProps> = ({ member }) => {
  return (
    <section className="relative flex w-full overflow-hidden bg-[#0b2f66]">
      <div className="grid w-full px-8 pt-28 pb-16 md:pt-36 lg:grid-cols-12 lg:pt-40 lg:pb-24">
        <div className="flex flex-col justify-center gap-6 lg:col-span-7 lg:pr-14">
          <Link
            href="/teams"
            className={`${rubikFont.className} flex w-fit cursor-pointer items-center gap-2 text-sm font-medium text-white/70 transition-colors duration-200 hover:text-white`}
            data-aos="fade-up"
          >
            <ArrowLeft size={16} /> Teams
          </Link>

          <div
            className="flex items-center gap-3"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <span className="h-2 w-2 rounded-full bg-custom-green" />
            <span
              className={`${nunitoFont.className} text-sm font-semibold tracking-widest text-white/70 uppercase`}
            >
              Leadership Profile
            </span>
          </div>

          <h1
            className={`${nunitoFont.className} text-3xl leading-tight font-bold text-white md:text-5xl`}
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {member.name}
          </h1>

          <span
            className={`${rubikFont.className} w-fit rounded-full bg-custom-green px-5 py-2 text-sm font-medium text-white`}
            data-aos="fade-up"
            data-aos-delay="300"
          >
            {member.role}
          </span>

          <div
            className="flex flex-wrap gap-2"
            data-aos="fade-up"
            data-aos-delay="350"
          >
            {member.tags.map((tag) => (
              <span
                key={tag}
                className={`${poppinsFont.className} rounded-full border border-white/25 px-3 py-1 text-xs text-white/85`}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div
          className="relative hidden lg:col-span-5 lg:block"
          data-aos="fade-left"
          data-aos-delay="250"
        >
          <div className="relative aspect-[3/4] w-full">
            <div className="absolute -top-5 -left-5 h-full w-full border-2 border-[#45a113]/50" />
            <Image
              src={member.photo}
              alt={member.name}
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover object-top"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};
