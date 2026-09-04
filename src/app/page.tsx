import { AboutUs } from "@/components/landing/AboutUs";
import { Hero } from "@/components/landing/Hero";

export default function HomePage() {
  return (
    <div className="h-full w-full overflow-x-hidden">
      <Hero />
      <AboutUs />
    </div>
  );
}
