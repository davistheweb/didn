import type React from "react";
import { boardMembers } from "@/data/about";
import { rubikFont } from "@/lib/font";
import { Headline } from "../ui/Headline";
import { MemberCard } from "./MemberCard";

export const BoardAdvisory: React.FC = () => {
  return (
    <section className="flex w-full flex-col items-start gap-5 px-8 py-15 lg:py-20">
      <Headline heading="13 / Leadership & Guidance" title="Board & Advisory" />

      <p
        className={`${rubikFont.className} max-w-3xl pt-1 text-[15px] leading-relaxed text-gray-600`}
      >
        Our Board of Trustees and Advisory members provide leadership, guidance,
        expertise, and oversight that support DIDN's mission and long-term
        direction.
      </p>

      <div className="mt-8 grid w-full gap-8 md:grid-cols-2 lg:grid-cols-3">
        {boardMembers.map((member, _i) => (
          <MemberCard key={_i} member={member} />
        ))}
      </div>
    </section>
  );
};
