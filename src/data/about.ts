import {
  AmbIrohFaithful,
  ONikelTreasureEkwii,
  OzumbaChimbuoyim,
  PrinceEberechukwuUmelo,
  WidowAidLogo,
  WorldClimateSchoolLogo,
} from "@/assets";

const storyParagraphs: string[] = [
  "Direct Impact Development Network was established with a commitment to move beyond promises and intentions toward tangible, measurable, and sustainable outcomes that improve lives and strengthen communities.",
  "Our work is rooted in the belief that lasting development happens when people and communities are actively involved in shaping the solutions that affect them.",
  "Through partnerships, advocacy, capacity building, technology, and sustainable interventions, DIDN works to address pressing challenges and create pathways toward greater opportunity, inclusion, and prosperity.",
];

const areasOfWork: string[] = [
  "Health & Wellbeing",
  "Education",
  "Women & Girls Empowerment",
  "Youth Development",
  "Climate Action",
  "Human Rights & Advocacy",
  "Economic Empowerment",
  "Community Development",
  "Digital Inclusion",
  "Humanitarian Response",
];

const coreValues: IAboutValue[] = [
  {
    title: "Integrity",
    description:
      "We act with honesty, transparency, accountability, and responsibility in everything we do.",
  },
  {
    title: "Inclusion",
    description:
      "We believe everyone deserves an opportunity to participate, contribute, and benefit from development.",
  },
  {
    title: "Collaboration",
    description:
      "We work with communities, institutions, organizations, and partners because meaningful change is stronger when we work together.",
  },
  {
    title: "Innovation",
    description:
      "We embrace new ideas, technology, and practical approaches to address complex challenges.",
  },
  {
    title: "Sustainability",
    description:
      "We seek solutions that create lasting benefits for people, communities, and the environment.",
  },
  {
    title: "Impact",
    description:
      "We focus on meaningful outcomes that can be seen, measured, and sustained.",
  },
];

const aboutGoals: IAboutGoal[] = [
  {
    title: "Empower Communities",
    description:
      "Support communities in identifying challenges, developing solutions, and creating opportunities for sustainable growth.",
  },
  {
    title: "Promote Social Inclusion",
    description:
      "Advance equality, dignity, participation, and access to opportunities for individuals and communities.",
  },
  {
    title: "Develop Young Leaders",
    description:
      "Equip young people with knowledge, skills, confidence, and opportunities to contribute meaningfully to society.",
  },
  {
    title: "Protect the Environment",
    description:
      "Promote climate action, environmental awareness, and sustainable practices.",
  },
  {
    title: "Advance Human Rights",
    description:
      "Support awareness, advocacy, inclusion, and initiatives that promote dignity and fundamental rights.",
  },
  {
    title: "Strengthen Partnerships",
    description:
      "Build meaningful relationships with organizations, institutions, communities, and other stakeholders to expand the reach and effectiveness of our work.",
  },
];

const aboutFocusAreas: IAboutFocusArea[] = [
  {
    title: "Health & Wellbeing",
    description:
      "Supporting initiatives that promote healthier lives and improve access to health-related opportunities and resources.",
  },
  {
    title: "Education",
    description:
      "Creating opportunities for learning, knowledge development, and improved access to education.",
  },
  {
    title: "Women & Girls Empowerment",
    description:
      "Supporting women and girls through opportunities, capacity building, inclusion, and empowerment initiatives.",
  },
  {
    title: "Youth Development",
    description:
      "Equipping young people with skills, knowledge, leadership opportunities, and platforms to participate in positive change.",
  },
  {
    title: "Climate Action",
    description:
      "Promoting environmental responsibility, climate awareness, and sustainable solutions.",
  },
  {
    title: "Human Rights & Advocacy",
    description:
      "Promoting dignity, equality, inclusion, awareness, and advocacy around fundamental human rights.",
  },
  {
    title: "Economic Empowerment",
    description:
      "Supporting individuals and communities with opportunities that can strengthen economic participation and resilience.",
  },
  {
    title: "Community Development",
    description:
      "Working alongside communities to identify needs, develop practical solutions, and strengthen local capacity.",
  },
  {
    title: "Digital Inclusion",
    description:
      "Using technology and digital opportunities to help bridge gaps in access, knowledge, and participation.",
  },
  {
    title: "Humanitarian Response",
    description:
      "Supporting communities and individuals affected by social, economic, environmental, or humanitarian challenges.",
  },
];

const approachStages: IAboutApproachStage[] = [
  {
    title: "Listen",
    description:
      "We seek to understand the needs, experiences, and priorities of the communities we serve.",
  },
  {
    title: "Collaborate",
    description:
      "We build partnerships and involve relevant stakeholders in developing meaningful solutions.",
  },
  {
    title: "Act",
    description:
      "We turn ideas into practical initiatives designed to address real challenges.",
  },
  {
    title: "Measure",
    description:
      "We focus on outcomes and continuously learn from our work to improve future interventions.",
  },
];

const aboutImpactStats: IAboutImpactStat[] = [
  { value: 1500, suffix: "+", label: "People Benefited" },
  { value: 25, label: "Volunteers" },
  { value: 15, suffix: "+", label: "Communities Reached" },
  { value: 5, suffix: "+", label: "Projects Completed" },
];

const sdgs: ISdgAlignment[] = [
  { id: 3, title: "Good Health & Well-being", color: "#4C9F38" },
  { id: 4, title: "Quality Education", color: "#C5192D" },
  { id: 5, title: "Gender Equality", color: "#FF3A21" },
  { id: 8, title: "Decent Work & Economic Growth", color: "#A21942" },
  { id: 10, title: "Reduced Inequalities", color: "#DD1367" },
  { id: 13, title: "Climate Action", color: "#3F7E44" },
  { id: 16, title: "Peace, Justice & Strong Institutions", color: "#00689D" },
  { id: 17, title: "Partnerships for the Goals", color: "#19486A" },
];

const orgStructure: IOrgStructureLevel[] = [
  { title: "Board / Advisory" },
  { title: "Executive Leadership" },
  { title: "Programs & Operations" },
  { title: "Project Teams" },
  { title: "Communities & Beneficiaries" },
];

const teamPreview: IAboutMember[] = [
  {
    name: "Amb. Iroh Faithful",
    position: "Founder & Director",
    photo: AmbIrohFaithful,
  },
  {
    name: "Prince Eberechukwu Umelo",
    position: "Director of Administration",
    photo: PrinceEberechukwuUmelo,
  },
  {
    name: "Ozumba Chimbuoyim",
    position: "Public Relations & Communications",
    photo: OzumbaChimbuoyim,
  },
  {
    name: "O’Nikel Treasure Ekwii (PhD)",
    position: "Director of Partnerships",
    photo: ONikelTreasureEkwii,
  },
];

const boardMembers: IAboutMember[] = [
  {
    name: "[Board Member]",
    position: "[Position]",
    bio: "Short biography to be provided by DIDN.",
  },
  {
    name: "[Board Member]",
    position: "[Position]",
    bio: "Short biography to be provided by DIDN.",
  },
  {
    name: "[Advisory Member]",
    position: "[Position]",
    bio: "Short biography to be provided by DIDN.",
  },
];

const partners: IPartner[] = [
  {
    name: "Widow Aid Foundation",
    logo: WidowAidLogo,
  },
  {
    name: "World Climate School",
    logo: WorldClimateSchoolLogo,
  },
];

export {
  aboutFocusAreas,
  aboutGoals,
  aboutImpactStats,
  approachStages,
  areasOfWork,
  boardMembers,
  coreValues,
  orgStructure,
  partners,
  sdgs,
  storyParagraphs,
  teamPreview,
};
