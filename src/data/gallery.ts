import type { StaticImageData } from "next/image";
import fightInequalityVideo from "@/assets/gallery/Fight Inequality/IMG_5680.mp4";
import { galleryAlbumTitles, galleryMedia } from "@/generated/gallery-media";

interface GalleryAlbumOverrides {
  title?: string;
  description?: string;
  coverIndex?: number;
}

const albumOverrides: Record<string, GalleryAlbumOverrides> = {
  "girl-child-empowerment-summit-2025": {
    description:
      "A powerful gathering where girls came together to learn, share, and grow — celebrating the empowerment of the next generation of female leaders.",
    coverIndex: 2,
  },
  "presentation-of-imo-state-policy-on-climate-change-june-2025": {
    description:
      "Highlights from the presentation of the Imo State Policy on Climate Change — a milestone in the state's commitment to environmental sustainability.",
  },
  "fight-inequality": {
    description:
      'The "Fight Inequality" sensitization outreach at Imo State University Campus, Owerri — raising awareness and sparking conversations on inequality in our communities.',
  },
};

const galleryVideoOverrides: Record<string, { src: string; title?: string }> = {
  "fight-inequality": {
    src: fightInequalityVideo,
    title: "Fight Inequality — sensitization outreach",
  },
};

const buildImageMedia = (
  title: string,
  images: StaticImageData[],
): GalleryMedia[] =>
  images.map((src, index) => ({
    type: "image",
    src,
    alt: `${title} — photo ${index + 1} of ${images.length}`,
  }));

const buildAlbum = (slug: string): GalleryAlbum => {
  const overrides = albumOverrides[slug] ?? {};
  const title = overrides.title ?? galleryAlbumTitles[slug];
  const images = galleryMedia[slug] as StaticImageData[];
  const coverSource = images[overrides.coverIndex ?? 0];
  const video = galleryVideoOverrides[slug];
  const media: GalleryMedia[] = [
    ...buildImageMedia(title, images),
    ...(video
      ? [
          {
            type: "video" as const,
            src: video.src,
            title: video.title,
            thumbnail: coverSource,
          },
        ]
      : []),
  ];

  return {
    slug,
    title,
    description: overrides.description,
    media,
    coverImage: {
      type: "image",
      src: coverSource,
      alt: `${title} — cover photo`,
    },
  };
};

export const galleryAlbums: GalleryAlbum[] = Object.keys(galleryMedia)
  .map(buildAlbum)
  .filter((album) => album.media.length > 0);

export const getGalleryAlbum = (slug: string): GalleryAlbum | undefined =>
  galleryAlbums.find((album) => album.slug === slug);

export const getGalleryAlbumPath = (album: GalleryAlbum): string =>
  `/gallery/${album.slug}`;
