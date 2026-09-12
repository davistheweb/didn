"use client";

import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { GalleryLightbox } from "./GalleryLightbox";
import { GalleryMediaGrid } from "./GalleryMediaGrid";

interface GalleryAlbumViewProps {
  media: GalleryMedia[];
  title: string;
}

export const GalleryAlbumView: React.FC<GalleryAlbumViewProps> = ({
  media,
  title,
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <>
      <GalleryMediaGrid media={media} onOpen={setOpenIndex} />

      <AnimatePresence>
        {openIndex !== null && (
          <GalleryLightbox
            media={media}
            index={openIndex}
            label={title}
            onClose={() => setOpenIndex(null)}
            onNavigate={setOpenIndex}
          />
        )}
      </AnimatePresence>
    </>
  );
};
