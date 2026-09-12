"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useRef } from "react";

interface GalleryLightboxProps {
  media: GalleryMedia[];
  index: number;
  label: string;
  onClose: () => void;
  onNavigate: (nextIndex: number) => void;
}

const wrapAround = (index: number, length: number): number =>
  (index + length) % length;

export const GalleryLightbox: React.FC<GalleryLightboxProps> = ({
  media,
  index,
  label,
  onClose,
  onNavigate,
}) => {
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const activeItem = media[index];

  const goTo = useCallback(
    (direction: number) => {
      onNavigate(wrapAround(index + direction, media.length));
    },
    [index, media.length, onNavigate],
  );

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      } else if (event.key === "ArrowRight") {
        goTo(1);
      } else if (event.key === "ArrowLeft") {
        goTo(-1);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [goTo, onClose]);

  const onDialogKeyDown = (event: React.KeyboardEvent) => {
    if (event.key !== "Tab") return;

    const focusables = [
      closeButtonRef.current,
      document.getElementById("gallery-lightbox-prev"),
      document.getElementById("gallery-lightbox-next"),
    ].filter(Boolean) as HTMLElement[];

    const first = focusables[0];
    const last = focusables[focusables.length - 1];

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last?.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first?.focus();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-100 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm md:p-8"
      role="dialog"
      aria-modal="true"
      aria-label={`${label} — image viewer`}
      onClick={onClose}
      onKeyDown={onDialogKeyDown}
    >
      <button
        ref={closeButtonRef}
        type="button"
        onClick={onClose}
        aria-label="Close image viewer"
        className="absolute top-4 right-4 z-10 flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white transition-colors duration-200 hover:bg-white/25 focus-visible:ring-4 focus-visible:ring-white/60 md:top-6 md:right-6"
      >
        <X size={22} />
      </button>

      <button
        id="gallery-lightbox-prev"
        type="button"
        onClick={(event) => {
          event.stopPropagation();
          goTo(-1);
        }}
        aria-label="Previous image"
        className="absolute top-1/2 left-3 z-10 flex h-12 w-12 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white transition-colors duration-200 hover:bg-white/25 focus-visible:ring-4 focus-visible:ring-white/60 md:left-6"
      >
        <ChevronLeft size={26} />
      </button>

      <button
        id="gallery-lightbox-next"
        type="button"
        onClick={(event) => {
          event.stopPropagation();
          goTo(1);
        }}
        aria-label="Next image"
        className="absolute top-1/2 right-3 z-10 flex h-12 w-12 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white transition-colors duration-200 hover:bg-white/25 focus-visible:ring-4 focus-visible:ring-white/60 md:right-6"
      >
        <ChevronRight size={26} />
      </button>

      <AnimatePresence mode="wait">
        <motion.figure
          key={index}
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.2 }}
          className="flex h-full w-full max-w-5xl items-center justify-center"
          onClick={(event) => event.stopPropagation()}
        >
          {activeItem.type === "image" ? (
            <div className="relative h-full w-full">
              <Image
                src={activeItem.src}
                alt={activeItem.alt}
                fill
                sizes={
                  activeItem.alt ? "(min-width: 1024px) 80vw, 95vw" : "80vw"
                }
                className="object-contain"
                priority
              />
            </div>
          ) : (
            <video
              src={activeItem.src}
              poster={activeItem.thumbnail?.src}
              controls
              autoPlay
              loop
              className="max-h-full max-w-full"
            >
              <track kind="captions" srcLang="en" label="English captions" />
            </video>
          )}
        </motion.figure>
      </AnimatePresence>

      <div
        className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 items-center gap-3 rounded-full bg-white/10 px-5 py-2 text-sm font-medium text-white md:bottom-6"
        aria-live="polite"
      >
        <span>
          {index + 1} / {media.length}
        </span>
        <span className="text-white/40">·</span>
        <span className="text-white/60">
          {activeItem.type === "video" ? "video" : "photo"}
        </span>
      </div>
    </motion.div>
  );
};
