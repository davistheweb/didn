import type { Metadata } from "next";
import { AboutImpact } from "@/components/about/AboutImpact";
import { ReachOutSection } from "@/components/landing/ReachOutSection";
import { ApproachSection } from "@/components/programs/ApproachSection";
import { ProgramsFocusAreas } from "@/components/programs/ProgramsFocusAreas";
import { ProgramsHero } from "@/components/programs/ProgramsHero";
import { ProgramsIntro } from "@/components/programs/ProgramsIntro";

export const metadata: Metadata = {
  title: "Programs — Direct Impact Development Network",
  description:
    "Explore DIDN's programs — community development, environmental sustainability, human rights, and leadership & youth development.",
};

export default function ProgramsPage() {
  return (
    <main className="w-full scroll-smooth overflow-x-clip">
      <ProgramsHero />
      <ProgramsIntro />
      <ProgramsFocusAreas />
      <ApproachSection />
      <AboutImpact />
      <ReachOutSection />
    </main>
  );
}
