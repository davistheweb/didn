const navItems: INavItems[] = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "About Us",
    link: "#",
    dropdownItems: [
      {
        title: "Teams",
        link: "/teams",
      },

      { title: "What We Do", link: "/what-we-do" },
      { title: "Our Impact", link: "our-impact" },
    ],
  },
  {
    title: "Programs",
    link: "/programs",
  },
  { title: "Gallery", link: "/gallery" },
  // { title: "Blog", link: "/blog" },
];

export { navItems };
