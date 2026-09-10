import { AboutUs } from "@/components/landing/AboutUs";
import { Hero } from "@/components/landing/Hero";
import { WhatWeDo } from "@/components/landing/WhatWeDo";

export default function HomePage() {
  return (
    <main className="h-full w-full overflow-x-hidden">
      <Hero />
      <AboutUs />
      {/* <WhatWeDo /> */}
    </main>
  );
}
