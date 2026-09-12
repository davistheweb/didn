import { ArrowRight, Camera } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type React from "react";
import { nunitoFont, poppinsFont, rubikFont } from "@/lib/font";

interface ProgramSectionProps {
  program: IProgram;
  index: number;
}

export const ProgramSection: React.FC<ProgramSectionProps> = ({
  program,
  index,
}) => {
  const isReversed = index % 2 === 1;

  return (
    <div className="grid w-full items-center gap-10 px-8 py-15 lg:grid-cols-12 lg:gap-14 lg:py-20">
      <div
        className={`lg:col-span-5 ${isReversed ? "lg:order-2" : ""}`}
        data-aos="fade-right"
      >
        <div className="group relative aspect-[4/3] w-full overflow-hidden rounded-lg">
          <div
            className={`absolute z-10 -top-4 border-2 border-[#45a113]/50 ${isReversed ? "-right-4" : "-left-4"} h-full w-full rounded-lg`}
          />
          <Image
            src={program.image}
            alt={program.imageAlt}
            fill
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="rounded-lg object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
          />
          <span
            className={`${nunitoFont.className} absolute top-5 z-10 text-4xl font-bold text-white/30 select-none md:text-5xl ${isReversed ? "right-6" : "left-6"}`}
            aria-hidden="true"
          >
            {program.number}
          </span>
          <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-black/30 to-transparent" />
        </div>
      </div>

      <div
        className={`flex w-full flex-col gap-6 lg:col-span-7 ${isReversed ? "lg:order-1" : ""}`}
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <div className="flex items-center gap-3">
          <span className="h-2 w-2 rounded-full bg-custom-green" />
          <span
            className={`${nunitoFont.className} text-sm font-semibold tracking-widest text-custom-green uppercase`}
          >
            {program.number} / {program.title}
          </span>
        </div>

        <h2
          className={`${nunitoFont.className} text-2xl leading-tight font-bold text-gray-900 md:text-4xl`}
        >
          {program.title}
        </h2>

        <p
          className={`${rubikFont.className} max-w-2xl text-[15px] leading-relaxed text-gray-600`}
        >
          {program.description}
        </p>

        <ul className="mt-2 w-full lg:max-w-xl">
          {program.areas.map((area, areaIndex) => (
            <li
              key={area}
              className="flex items-baseline gap-4 border-b border-gray-200 py-4"
              data-aos="fade-up"
              data-aos-delay={areaIndex * 50}
            >
              <span
                className={`${nunitoFont.className} shrink-0 text-xs font-bold text-gray-400`}
              >
                {String(areaIndex + 1).padStart(2, "0")}
              </span>
              <span
                className={`${poppinsFont.className} text-sm font-medium text-gray-800`}
              >
                {area}
              </span>
            </li>
          ))}
        </ul>

        {program.featuredProject && (
          <Link
            href={`/gallery/${program.featuredProject.gallerySlug}`}
            className="group flex w-full flex-col gap-3 bg-[#0b2f66] p-6 md:p-8"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            <span
              className={`${nunitoFont.className} flex items-center gap-2 text-xs font-bold tracking-widest text-custom-green uppercase`}
            >
              <Camera size={14} /> Featured Activity
            </span>
            <span
              className={`${nunitoFont.className} text-lg leading-snug font-bold text-white md:text-xl`}
            >
              {program.featuredProject.title}
            </span>
            {program.featuredProject.description && (
              <span
                className={`${poppinsFont.className} text-sm leading-relaxed text-white/75`}
              >
                {program.featuredProject.description}
              </span>
            )}
            <span
              className={`${rubikFont.className} mt-1 flex w-fit items-center gap-2 text-sm font-semibold text-white`}
            >
              <span className="text-custom-green">View Gallery</span>
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1.5"
              />
            </span>
          </Link>
        )}
      </div>
    </div>
  );
};
