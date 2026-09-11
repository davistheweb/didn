import { AboutCTA } from "@/components/about/AboutCTA";
import { ReachOutSection } from "@/components/landing/ReachOutSection";
import { TeamMembersSection } from "@/components/teams/TeamMembersSection";
import { TeamsHero } from "@/components/teams/TeamsHero";

export default function TeamsPage() {
  return (
    <main className="h-full w-full overflow-x-hidden">
      <TeamsHero />
      <TeamMembersSection />
      <ReachOutSection />
    </main>
  );
}
