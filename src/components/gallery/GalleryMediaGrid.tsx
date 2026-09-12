import type React from "react";
import { GalleryMediaItem } from "./GalleryMediaItem";

interface GalleryMediaGridProps {
  media: GalleryMedia[];
  onOpen: (index: number) => void;
}

const tileLayout = (index: number): string => {
  if (index === 0) return "md:col-span-2 md:row-span-2";
  const cycle = index % 6;
  if (cycle === 1) return "md:row-span-2";
  if (cycle === 4) return "md:col-span-2";
  return "";
};

export const GalleryMediaGrid: React.FC<GalleryMediaGridProps> = ({
  media,
  onOpen,
}) => {
  return (
    <div className="grid w-full grid-flow-dense grid-cols-1 gap-4 auto-rows-[170px] sm:auto-rows-[200px] md:grid-cols-3 md:auto-rows-[140px] lg:auto-rows-[160px]">
      {media.map((item, index) => (
        <div
          key={item.type === "image" ? item.src.src : item.src}
          className={`h-full ${tileLayout(index)}`}
          data-aos="fade-up"
          data-aos-delay={(index % 6) * 50}
        >
          <GalleryMediaItem media={item} index={index} onOpen={onOpen} />
        </div>
      ))}
    </div>
  );
};
