import { AboutUs } from "@/components/landing/AboutUs";
import { BlogSection } from "@/components/landing/Blogsection";
import { Hero } from "@/components/landing/Hero";
import { ReachOutSection } from "@/components/landing/ReachOutSection";
import { WhatWeDo } from "@/components/landing/WhatWeDo";

export default function HomePage() {
  return (
    <main className="w-full overflow-x-clip">
      <Hero />
      <AboutUs />
      <WhatWeDo />
      <BlogSection />
      <ReachOutSection />
    </main>
  );
}
