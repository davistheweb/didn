import { ArrowRight, Camera } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type React from "react";
import { getGalleryAlbumPath } from "@/data/gallery";
import { nunitoFont, poppinsFont, rubikFont } from "@/lib/font";

interface GalleryAlbumCardProps {
  album: GalleryAlbum;
  index: number;
}

const mediaCountLabel = (media: GalleryMedia[]): string => {
  const total = media.length;
  const videos = media.filter((item) => item.type === "video").length;

  if (videos > 0) {
    return `${total} Media`;
  }
  return `${total} ${total === 1 ? "Photo" : "Photos"}`;
};

export const GalleryAlbumCard: React.FC<GalleryAlbumCardProps> = ({
  album,
  index,
}) => {
  const countLabel = mediaCountLabel(album.media);

  return (
    <Link
      href={getGalleryAlbumPath(album)}
      className="group relative block h-full w-full overflow-hidden rounded-lg bg-[#0b2f66] focus-visible:ring-4 focus-visible:ring-custom-blue focus-visible:ring-offset-2"
    >
      <div className="relative h-full w-full overflow-hidden">
        <Image
          src={album.coverImage.src}
          alt={album.coverImage.alt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10 transition-colors duration-500 group-hover:via-black/55" />

        <span
          className={`${nunitoFont.className} absolute top-5 left-6 text-4xl font-bold text-white/25 select-none md:text-5xl`}
          aria-hidden="true"
        >
          {String(index + 1).padStart(2, "0")}
        </span>

        <span className="absolute top-5 right-6 flex items-center gap-2 rounded-full bg-white/15 px-3 py-1.5 text-xs font-semibold text-white uppercase backdrop-blur-sm">
          <Camera size={14} className="text-custom-green" />
          {countLabel}
        </span>
      </div>

      <div className="absolute inset-x-0 bottom-0 flex flex-col gap-3 p-6 md:p-8">
        <h2
          className={`${nunitoFont.className} text-lg leading-snug font-bold text-white uppercase md:text-xl`}
        >
          {album.title}
        </h2>

        <p
          className={`${poppinsFont.className} text-xs leading-relaxed text-white/75 md:text-sm`}
        >
          {album.description ?? "Discover the moments behind this album."}
        </p>

        <span
          className={`${rubikFont.className} flex w-fit items-center gap-2 mt-1 text-sm font-semibold text-white transition-colors duration-300`}
        >
          <span className="text-custom-green">View Gallery</span>
          <ArrowRight
            size={16}
            className="transition-transform duration-300 group-hover:translate-x-1.5"
          />
        </span>
      </div>
    </Link>
  );
};
