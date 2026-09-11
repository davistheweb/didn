import { ReachOutSection } from "@/components/landing/ReachOutSection";
import { TeamMembersSection } from "@/components/teams/TeamMembersSection";
import { TeamsHero } from "@/components/teams/TeamsHero";

export default function TeamsPage() {
  return (
    <main className="w-full overflow-x-clip">
      <TeamsHero />
      <TeamMembersSection />
      <ReachOutSection />
    </main>
  );
}
