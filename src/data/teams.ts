import {
  AmbIrohFaithful,
  ONikelTreasureEkwii,
  OzumbaChimbuoyim,
  PrinceEberechukwuUmelo,
} from "@/assets";

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
  {
    slug: "ozumba-chimbuoyim",
    name: "Ozumba Chimbuoyim",
    role: "Public Relations & Communications",
    photo: OzumbaChimbuoyim,
    tags: [
      "Public Relations",
      "Mental Health",
      "Human Rights",
      "Public Speaking",
    ],
    bio: [
      "Ozumba Chimbuoyim is a multi-talented Nigerian from and based in the South-Eastern region. He is a Public Servant, Event Planner, Public Relations Specialist, and Public Speaker.",
      "His passion spans mental health advocacy, human rights, and politics. He holds a first degree in Psychology, a master's degree in Peace Studies and Conflict Resolution, and is on the verge of concluding a PhD in Peace Studies and Conflict Resolution.",
      "His major goal is to impact as many lives as he can.",
    ],
  },
  {
    slug: "onikel-treasure-ekwii",
    name: "O’Nikel Treasure Ekwii (PhD)",
    role: "Director of Partnerships",
    photo: ONikelTreasureEkwii,
    tags: [
      "Education",
      "Partnerships",
      "Leadership",
      "Sustainable Development",
    ],
    bio: [
      "O’Nikel Treasure Ekwii (PhD) is a seasoned educator with over 10 years of experience in the education sector. As the Director of Partnerships at Direct Impact Development Network, she brings a proven record of leading teams and establishing collaborative partnerships across industries.",
      "Before joining Direct Impact, she held leadership roles at Junior Chamber International, Nigeria South South and East; JCI Heartland City; and JCI Imo Elite, where she served as Director of Projects, President, and Local Organization Adviser, respectively. Through these roles, she built strong partnerships and value systems in communities, inspiring active citizenship and giving back to society.",
      "A firm believer in self-development, she is passionate about empowering individuals with the knowledge they need to excel and advocating for sustainable development. She is currently a Lecturer at Benjamin Uwajumogu (State) College of Education, Ihitte Uboma.",
    ],
  },
];

const getTeamMemberBySlug = (slug: string): ITeamMember | undefined =>
  teamMembers.find((member) => member.slug === slug);

export { getTeamMemberBySlug, teamMembers };
