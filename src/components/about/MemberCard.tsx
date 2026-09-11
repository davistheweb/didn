import type React from "react";
import { User } from "lucide-react";
import { nunitoFont, poppinsFont, rubikFont } from "@/lib/font";
import Image from "next/image";

interface MemberCardProps {
  member: IAboutMember;
  showBio?: boolean;
}

export const MemberCard: React.FC<MemberCardProps> = ({
  member,
  showBio = true,
}) => {
  const { name, position, bio, photo } = member;

  return (
    <div className="group flex h-fit w-full flex-col overflow-hidden rounded-md border border-gray-200 bg-white transition-shadow duration-300 hover:shadow-lg">
      <div className="relative aspect-[3/4] w-full overflow-hidden bg-gray-50">
        {photo ? (
          <Image
            src={photo}
            alt={name}
            fill
            sizes="(min-width: 1024px) 30vw, (min-width: 768px) 50vw, 100vw"
            className="object-cover object-top"
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center gap-2">
            <User size={44} className="text-gray-300" strokeWidth={1} />
            <span
              className={`${poppinsFont.className} text-xs text-gray-400`}
            >
              Photo pending
            </span>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-1.5 p-6">
        <h3
          className={`${nunitoFont.className} text-lg leading-snug font-bold text-gray-900`}
        >
          {name}
        </h3>
        <span className={`${rubikFont.className} text-sm text-custom-green`}>
          {position}
        </span>
        {showBio && bio && (
          <p
            className={`${poppinsFont.className} mt-2 text-xs leading-relaxed text-gray-500`}
          >
            {bio}
          </p>
        )}
      </div>
    </div>
  );
};