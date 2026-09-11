import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import type React from "react";
import { nunitoFont, poppinsFont, rubikFont } from "@/lib/font";
import { Headline } from "../ui/Headline";

interface MemberProfileProps {
  member: ITeamMember;
  nextMember?: ITeamMember;
  prevMember?: ITeamMember;
}

export const MemberProfile: React.FC<MemberProfileProps> = ({
  member,
  nextMember,
  prevMember,
}) => {
  return (
    <section className="flex w-full flex-col gap-12 px-8 py-15 lg:py-24">
      <div className="grid gap-12 lg:grid-cols-12">
        <div className="flex flex-col gap-8 lg:col-span-8 lg:pr-10">
          <div data-aos="fade-up">
            <Headline heading="Profile" title={member.name} />
          </div>

          <div
            className="flex flex-col gap-6"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            {member.bio.map((paragraph, _i) => (
              <p
                key={_i}
                className={`${
                  _i === 0
                    ? "text-lg text-gray-900 md:text-xl"
                    : "text-base text-gray-600 md:text-[17px]"
                } ${rubikFont.className} leading-relaxed`}
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        <aside
          className="flex flex-col gap-6 lg:col-span-4"
          data-aos="fade-left"
          data-aos-delay="150"
        >
          <div className="flex flex-col gap-4 rounded-md border border-gray-200 bg-[#f4f7fa] p-6">
            <div className="flex flex-col gap-1">
              <span
                className={`${nunitoFont.className} text-xs font-bold tracking-widest text-gray-400 uppercase`}
              >
                Position
              </span>
              <span
                className={`${rubikFont.className} text-base font-semibold text-gray-900`}
              >
                {member.role}
              </span>
            </div>

            <div className="flex flex-col gap-2">
              <span
                className={`${nunitoFont.className} text-xs font-bold tracking-widest text-gray-400 uppercase`}
              >
                Areas of Focus
              </span>
              <div className="flex flex-wrap gap-2">
                {member.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`${rubikFont.className} rounded-full border border-gray-200 bg-white px-3 py-1 text-xs text-gray-600`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <Link
            href="/teams"
            className={`${rubikFont.className} flex w-fit items-center gap-2 font-semibold text-custom-green transition-colors duration-200 hover:text-[#123f2b]`}
          >
            <ArrowLeft size={16} /> View All Team
          </Link>
        </aside>
      </div>

      {(prevMember?.slug || nextMember?.slug) && (
        <div
          className="flex flex-col items-stretch justify-between gap-4 border-t border-gray-200 pt-8 sm:flex-row"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {prevMember ? (
            <Link
              href={`/teams/${prevMember.slug}`}
              className="group flex flex-1 flex-col gap-1 rounded-md border border-gray-200 p-5 transition-colors duration-200 hover:border-[#45a113]/50"
            >
              <span
                className={`${poppinsFont.className} flex items-center gap-2 text-xs text-gray-400`}
              >
                <ArrowLeft size={14} /> Previous
              </span>
              <span
                className={`${nunitoFont.className} text-base font-bold text-gray-900 group-hover:text-custom-green`}
              >
                {prevMember.name}
              </span>
            </Link>
          ) : (
            <span className="hidden flex-1 sm:block" />
          )}

          {nextMember && (
            <Link
              href={`/teams/${nextMember.slug}`}
              className="group flex flex-1 flex-col gap-1 rounded-md border border-gray-200 p-5 text-right transition-colors duration-200 hover:border-[#45a113]/50"
            >
              <span
                className={`${poppinsFont.className} flex items-center justify-end gap-2 text-xs text-gray-400`}
              >
                Next <ArrowRight size={14} />
              </span>
              <span
                className={`${nunitoFont.className} text-base font-bold text-gray-900 group-hover:text-custom-green`}
              >
                {nextMember.name}
              </span>
            </Link>
          )}
        </div>
      )}
    </section>
  );
};
