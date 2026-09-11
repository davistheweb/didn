import { AmbIrohFaithful, PrinceEberechukwuUmelo } from "@/assets";

const teamMembers: ITeamMember[] = [
  {
    slug: "amb-iroh-faithful",
    name: "Amb. Iroh Faithful",
    role: "Founder & Director",
    photo: AmbIrohFaithful,
    tags: ["Architecture", "Environment", "Humanitarian", "Climate Policy"],
    bio: [
      "Amb. Iroh Faithful is an Architect, Environmentalist, Humanitarian and Climate Policy Advocate.",
      "He is the founder of Direct Impact Development Network and Widow Aid Foundation. He serves as National Coordinator, Extinction Rebellion Nigeria; Country Coordinator, Architects Climate Action Network; Country Representative, World Climate School; and Co-Facilitator, Fight Inequality Alliance Nigeria.",
      "He has contributed to climate policy including the Imo State Climate Act 2025, led climate and humanitarian projects, trained citizens on climate action. He is a regular delegate to the UN Climate Change Conferences (COP), where he champions African voices in global climate negotiations. His work focuses on sustainable buildings, climate justice, and direct support for vulnerable communities.",
      "Driven by impact, he builds systems that deliver humanitarian support, equity, and sustainability.",
    ],
  },
  {
    slug: "prince-eberechukwu-umelo",
    name: "Prince Eberechukwu Umelo",
    role: "Director of Administration",
    photo: PrinceEberechukwuUmelo,
    tags: ["Public Affairs", "Youth Development", "Community Development"],
    bio: [
      "Prince Eberechukwu Umelo is a public affairs professional and youth development advocate with expertise in administration, program coordination, stakeholder engagement, and community development.",
      "As Director of Administration at Direct Impact Development Network, he supports effective organizational management and drives initiatives that advance youth empowerment, sustainable development, climate action, and community impact.",
      "Prince Umelo is currently appointed as the Special Adviser on Youth Development to the Member Representing Nkwerre State Constituency in the Imo State House of Assembly. He is proudly Jewish.",
    ],
  },
];

const getTeamMemberBySlug = (slug: string): ITeamMember | undefined =>
  teamMembers.find((member) => member.slug === slug);

export { getTeamMemberBySlug, teamMembers };