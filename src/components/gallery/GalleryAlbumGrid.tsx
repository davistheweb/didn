import type React from "react";
import { galleryAlbums } from "@/data/gallery";
import { rubikFont } from "@/lib/font";
import { Headline } from "../ui/Headline";
import { GalleryAlbumCard } from "./GalleryAlbumCard";

const cardLayout = (index: number): string => {
  if (index === 0) {
    return "row-span-2 md:col-span-2 md:row-span-2";
  }
  return "md:col-span-2 md:row-span-2 lg:col-span-1";
};

export const GalleryAlbumGrid: React.FC = () => {
  return (
    <section
      id="albums"
      className="flex w-full flex-col items-start gap-8 px-8 py-15 lg:py-20"
    >
      <div data-aos="fade-up">
        <Headline heading="/ GALLERY ALBUMS" title="A Look Into Our Work" />
      </div>

      <p
        className={`${rubikFont.className} max-w-2xl text-[15px] text-gray-600`}
        data-aos="fade-up"
        data-aos-delay="100"
      >
        Browse our galleries — each album captures a different event, program,
        or initiative delivered across the communities we serve.
      </p>

      {galleryAlbums.length > 0 ? (
        <div className="grid w-full grid-flow-dense grid-cols-1 gap-6 auto-rows-[260px] md:grid-cols-2 md:auto-rows-[240px] lg:grid-cols-3">
          {galleryAlbums.map((album, index) => (
            <div
              key={index}
              className={`h-full ${cardLayout(index)}`}
              data-aos="fade-up"
              data-aos-delay={index * 120}
            >
              <GalleryAlbumCard album={album} index={index} />
            </div>
          ))}
        </div>
      ) : (
        <p
          className={`${rubikFont.className} w-full py-16 text-center text-gray-500`}
        >
          Albums are being prepared. Check back soon.
        </p>
      )}
    </section>
  );
};
