import type React from "react";
import { teamMembers } from "@/data/teams";
import { Headline } from "../ui/Headline";
import { TeamMemberRow } from "./TeamMemberRow";

export const TeamMembersSection: React.FC = () => {
  return (
    <section
      id="team"
      className="flex w-full scroll-mt-24 flex-col gap-10 px-8 py-15 lg:py-20"
    >
      <div data-aos="fade-up">
        <Headline
          heading="02 / Leadership & Team"
          title="Meet the People Driving Our Work"
        />
      </div>

      <div className="flex w-full flex-col">
        {teamMembers.map((member, _i) => (
          <TeamMemberRow key={member.slug} member={member} index={_i} />
        ))}
      </div>
    </section>
  );
};
