import { ArrowLeft, Camera } from "lucide-react";
import Link from "next/link";
import type React from "react";
import { nunitoFont, poppinsFont, rubikFont } from "@/lib/font";

interface GalleryAlbumHeaderProps {
  album: GalleryAlbum;
}

const mediaCountLabel = (media: GalleryMedia[]): string => {
  const total = media.length;
  const videos = media.filter((item) => item.type === "video").length;

  if (videos > 0) {
    return `${total} Media`;
  }
  return `${total} ${total === 1 ? "Photo" : "Photos"}`;
};

export const GalleryAlbumHeader: React.FC<GalleryAlbumHeaderProps> = ({
  album,
}) => {
  return (
    <section className="relative flex w-full overflow-hidden bg-[#0b2f66]">
      <div className="flex w-full flex-col gap-6 px-8 pt-28 pb-14 md:pt-36 lg:pt-44 lg:pb-20">
        <Link
          href="/gallery"
          className="flex w-fit cursor-pointer items-center gap-2 text-sm font-medium text-white/70 transition-colors duration-200 hover:text-white"
          data-aos="fade-up"
        >
          <ArrowLeft size={16} />
          Back to Gallery
        </Link>

        <div
          className="flex items-center gap-3"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <Camera size={18} className="text-custom-green" />
          <span
            className={`${nunitoFont.className} text-sm font-semibold tracking-widest text-white/70 uppercase`}
          >
            02 / Album
          </span>
        </div>

        <h1
          className={`${nunitoFont.className} max-w-4xl text-2xl leading-tight font-bold text-white md:text-4xl lg:text-5xl`}
          data-aos="fade-up"
          data-aos-delay="150"
        >
          {album.title}
        </h1>

        {album.description && (
          <p
            className={`${poppinsFont.className} max-w-2xl text-sm leading-relaxed text-white/75 md:text-base`}
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {album.description}
          </p>
        )}

        <span
          className={`${rubikFont.className} flex w-fit items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white`}
          data-aos="fade-up"
          data-aos-delay="250"
        >
          {mediaCountLabel(album.media)}
        </span>
      </div>
    </section>
  );
};
