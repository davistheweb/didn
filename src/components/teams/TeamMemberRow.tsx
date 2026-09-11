import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type React from "react";
import { nunitoFont, poppinsFont, rubikFont } from "@/lib/font";

interface TeamMemberRowProps {
  member: ITeamMember;
  index: number;
}

export const TeamMemberRow: React.FC<TeamMemberRowProps> = ({
  member,
  index,
}) => {
  const isReversed = index % 2 === 1;

  return (
    <article className="grid gap-8 border-t border-gray-200 py-14 lg:grid-cols-2 lg:items-center lg:gap-16 lg:py-20">
      <div className={`relative w-full ${isReversed ? "lg:order-2" : ""}`}>
        <div className="relative mx-auto aspect-[3/4] w-full max-w-sm lg:max-w-none">
          <div
            className={`absolute ${isReversed ? "-top-5 -right-5" : "-top-5 -left-5"} h-full w-full border-2 border-[#45a113]/50`}
          />
          <Image
            src={member.photo}
            alt={member.name}
            fill
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="rounded-sm object-cover object-top"
          />
        </div>
      </div>

      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-1">
          <span
            className={`${rubikFont.className} text-sm font-medium text-custom-green`}
          >
            {String(index + 1).padStart(2, "0")} — {member.role}
          </span>
          <h2
            className={`${nunitoFont.className} text-2xl leading-snug font-bold text-gray-900 md:text-3xl`}
          >
            {member.name}
          </h2>
        </div>

        <p
          className={`${poppinsFont.className} text-sm leading-relaxed text-gray-600 md:text-[15px]`}
        >
          {member.bio[0]}
        </p>

        <div className="flex flex-wrap gap-2">
          {member.tags.map((tag) => (
            <span
              key={tag}
              className={`${rubikFont.className} rounded-full border border-gray-200 px-3 py-1 text-xs text-gray-600`}
            >
              {tag}
            </span>
          ))}
        </div>

        <Link
          href={`/teams/${member.slug}`}
          className={`${rubikFont.className} flex w-fit items-center gap-2 font-semibold text-custom-green transition-colors duration-200 hover:text-[#123f2b]`}
        >
          Read Full Profile <ArrowRight size={18} />
        </Link>
      </div>
    </article>
  );
};
