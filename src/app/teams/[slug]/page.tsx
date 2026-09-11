import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AboutCTA } from "@/components/about/AboutCTA";
import { MemberHero } from "@/components/teams/MemberHero";
import { MemberProfile } from "@/components/teams/MemberProfile";
import { getTeamMemberBySlug, teamMembers } from "@/data/teams";
import { ReachOutSection } from "@/components/landing/ReachOutSection";

interface MemberPageProps {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return teamMembers.map((member) => ({ slug: member.slug }));
}

export async function generateMetadata({
  params,
}: MemberPageProps): Promise<Metadata> {
  const { slug } = await params;
  const member = getTeamMemberBySlug(slug);

  return {
    title: member
      ? `${member.name} — Direct Impact Development Network`
      : "Team — Direct Impact Development Network",
    description: member?.bio[0],
  };
}

export default async function MemberPage({ params }: MemberPageProps) {
  const { slug } = await params;
  const member = getTeamMemberBySlug(slug);

  if (!member) {
    notFound();
  }

  const index = teamMembers.findIndex((teamMember) => teamMember.slug === slug);
  const prevMember =
    teamMembers[(index - 1 + teamMembers.length) % teamMembers.length];
  const nextMember = teamMembers[(index + 1) % teamMembers.length];

  return (
    <main className="h-full w-full overflow-x-hidden">
      <MemberHero member={member} />
      <MemberProfile
        member={member}
        prevMember={prevMember}
        nextMember={nextMember}
      />
      <ReachOutSection />
    </main>
  );
}
