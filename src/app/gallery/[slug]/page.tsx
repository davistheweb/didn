import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { GalleryAlbumHeader } from "@/components/gallery/GalleryAlbumHeader";
import { GalleryAlbumView } from "@/components/gallery/GalleryAlbumView";
import { ReachOutSection } from "@/components/landing/ReachOutSection";
import { galleryAlbums, getGalleryAlbum } from "@/data/gallery";

interface GalleryAlbumPageProps {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return galleryAlbums.map((album) => ({ slug: album.slug }));
}

export async function generateMetadata({
  params,
}: GalleryAlbumPageProps): Promise<Metadata> {
  const { slug } = await params;
  const album = getGalleryAlbum(slug);

  if (!album) {
    return {
      title: "Album not found — Direct Impact Development Network",
    };
  }

  return {
    title: `${album.title} — Direct Impact Development Network`,
    description: album.description,
  };
}

export default async function GalleryAlbumPage({
  params,
}: GalleryAlbumPageProps) {
  const { slug } = await params;
  const album = getGalleryAlbum(slug);

  if (!album) {
    notFound();
  }

  return (
    <main className="w-full overflow-x-clip">
      <GalleryAlbumHeader album={album} />
      <section className="flex w-full flex-col items-start gap-8 px-8 py-15 lg:py-20">
        <GalleryAlbumView media={album.media} title={album.title} />
      </section>
      <ReachOutSection />
    </main>
  );
}
