import type { Metadata } from "next";
import { GalleryAlbumGrid } from "@/components/gallery/GalleryAlbumGrid";
import { GalleryHero } from "@/components/gallery/GalleryHero";
import { ReachOutSection } from "@/components/landing/ReachOutSection";

export const metadata: Metadata = {
  title: "Gallery — Direct Impact Development Network",
  description:
    "A visual collection of DIDN's events, programs, community activities, campaigns, and moments of impact.",
};

export default function GalleryPage() {
  return (
    <main className="w-full overflow-x-clip">
      <GalleryHero />
      <GalleryAlbumGrid />
      <ReachOutSection />
    </main>
  );
}
