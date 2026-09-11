import type { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import Link from "next/link";
import type React from "react";
import { DIDNLogo } from "@/assets";

export const Logo: React.FC<{ defaultImage?: StaticImport }> = ({
  defaultImage = DIDNLogo,
}) => (
  <div>
    <Link href="/" className="flex items-center gap-2 md:gap-4">
      <Image
        src={defaultImage}
        alt="logo"
        draggable={false}
        width={200}
        height={200}
      />
    </Link>
  </div>
);
