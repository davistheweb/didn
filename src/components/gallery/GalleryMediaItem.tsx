import { Play } from "lucide-react";
import Image from "next/image";
import type React from "react";

interface GalleryMediaItemProps {
  media: GalleryMedia;
  index: number;
  onOpen: (index: number) => void;
}

export const GalleryMediaItem: React.FC<GalleryMediaItemProps> = ({
  media,
  index,
  onOpen,
}) => {
  const isVideo = media.type === "video";

  return (
    <button
      type="button"
      onClick={() => onOpen(index)}
      aria-label={
        isVideo
          ? `Play ${media.title ?? `video ${index + 1}`}`
          : `Open ${media.alt} in a lightbox`
      }
      className="group relative block h-full w-full cursor-pointer overflow-hidden rounded-lg bg-gray-900 focus-visible:ring-4 focus-visible:ring-custom-blue focus-visible:ring-offset-2"
    >
      {isVideo ? (
        media.thumbnail ? (
          <Image
            src={media.thumbnail}
            alt={media.title ?? `DIDN video ${index + 1}`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
          />
        ) : (
          <div className="absolute inset-0 bg-black" />
        )
      ) : (
        <Image
          src={media.src}
          alt={media.alt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
        />
      )}

      <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/25" />

      {isVideo && (
        <span className="absolute inset-0 flex items-center justify-center">
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-custom-green/90 text-white shadow-lg transition-transform duration-300 group-hover:scale-110">
            <Play size={22} className="ml-0.5" />
          </span>
        </span>
      )}
    </button>
  );
};
