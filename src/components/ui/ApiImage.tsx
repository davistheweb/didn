import { Images as ImagePlaceholder } from "lucide-react";
import Image from "next/image";
import type React from "react";
import { resolveAssetUrl } from "@/services/api";

interface ApiImageProps {
  src: string | null | undefined;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
}

export const ApiImage: React.FC<ApiImageProps> = ({
  src,
  alt,
  className,
  sizes,
  priority,
}) => {
  const resolved = resolveAssetUrl(src);

  if (!resolved) {
    return (
      <div
        className={`flex h-full w-full items-center justify-center bg-[#0b2f66] ${className ?? ""}`}
      >
        <ImagePlaceholder size={52} className="text-white/25" />
      </div>
    );
  }

  return (
    <Image
      src={resolved}
      alt={alt}
      fill
      sizes={
        sizes ?? "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      }
      className={`object-cover ${className ?? ""}`}
      priority={priority}
    />
  );
};
