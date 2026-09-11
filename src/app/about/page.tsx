import { AboutCTA } from "@/components/about/AboutCTA";
import { AboutHero } from "@/components/about/AboutHero";
import { AboutImpact } from "@/components/about/AboutImpact";
import { AboutPeople } from "@/components/about/AboutPeople";
import { BoardAdvisory } from "@/components/about/BoardAdvisory";
import { CoreValues } from "@/components/about/CoreValues";
import { FounderMessage } from "@/components/about/FounderMessage";
import { MissionVision } from "@/components/about/MissionVision";
import { OrganizationalStructure } from "@/components/about/OrganizationalStructure";
import { OurApproach } from "@/components/about/OurApproach";
import { OurFocus } from "@/components/about/OurFocus";
import { OurGoals } from "@/components/about/OurGoals";
import { OurStory } from "@/components/about/OurStory";
import { Partners } from "@/components/about/Partners";
import { SdgAlignment } from "@/components/about/SdgAlignment";
import { ReachOutSection } from "@/components/landing/ReachOutSection";

export default function AboutPage() {
  return (
    <main className="h-full w-full scroll-smooth overflow-x-hidden">
      <AboutHero />
      <OurStory />
      <MissionVision />
      <CoreValues />
      <OurGoals />
      <OurFocus />
      <OurApproach />
      <AboutImpact />
      <SdgAlignment />
      <FounderMessage />
      <AboutPeople />
      <OrganizationalStructure />
      {/* <BoardAdvisory /> */}
      <Partners />
      <ReachOutSection />
    </main>
  );
}
