import { Mail, Phone } from "lucide-react";
import type React from "react";
import { rubikFont } from "@/lib/font";

export const QuickContact: React.FC = () => (
  <div className="bg-custom-green hidden w-full items-center px-8 py-2 lg:flex">
    <li className="flex flex-col gap-1 text-white sm:flex-row sm:gap-5">
      <a
        href="tel:+2349018797128"
        className={`${rubikFont.className} flex items-center gap-2 text-[14px] font-medium`}
      >
        <Phone fill="white" size={14} /> +234 900 000 0000
      </a>
      <a
        href="mailto:directimpactnetwork@gmail.com"
        target="_blank"
        className={`${rubikFont.className} flex items-center gap-2 text-[14px] font-medium`}
        rel="noopener"
      >
        <Mail size={14} />
        contact@directimpactnetwork.org
      </a>
    </li>
  </div>
);
