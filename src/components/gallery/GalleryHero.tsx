import { ArrowDown, Camera } from "lucide-react";
import Image from "next/image";
import type React from "react";
import { galleryAlbums } from "@/data/gallery";
import { nunitoFont, poppinsFont, rubikFont } from "@/lib/font";

const coverImages = galleryAlbums.map((album) => album.coverImage);

export const GalleryHero: React.FC = () => {
  const [coverA, coverB] = coverImages;

  return (
    <section className="relative flex w-full overflow-hidden bg-[#0b2f66]">
      <div className="grid w-full px-8 pt-28 pb-16 md:pt-36 lg:grid-cols-12 lg:pt-44 lg:pb-24">
        <div className="flex flex-col justify-center gap-6 lg:col-span-7 lg:pr-14">
          <div className="flex items-center gap-3" data-aos="fade-up">
            <Camera size={18} className="text-custom-green" />
            <span
              className={`${nunitoFont.className} text-sm font-semibold tracking-widest text-white/70 uppercase`}
            >
              01 / Gallery
            </span>
          </div>

          <h1
            className={`${nunitoFont.className} text-3xl leading-tight font-bold text-white md:text-5xl`}
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Moments That Matter.
          </h1>

          <div
            className="flex flex-col gap-4 md:max-w-2xl"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <p
              className={`${rubikFont.className} text-base leading-relaxed text-white/85 md:text-lg`}
            >
              A visual collection of DIDN{"'"}s events, programs, community
              activities, campaigns, and moments of impact.
            </p>
            <p
              className={`${poppinsFont.className} text-sm leading-relaxed text-white/70 md:text-base`}
            >
              Every album tells the story of people, change, and hope — explore
              our work through the moments that shaped it.
            </p>
          </div>

          <a
            href="#albums"
            className={`${rubikFont.className} flex w-fit cursor-pointer items-center gap-2 rounded-lg bg-custom-green px-8 py-4 font-medium text-white transition-opacity duration-200 hover:opacity-90`}
            data-aos="fade-up"
            data-aos-delay="300"
          >
            Explore the Albums <ArrowDown size={18} />
          </a>
        </div>

        <div
          className="relative hidden lg:col-span-5 lg:block"
          data-aos="fade-left"
          data-aos-delay="250"
        >
          <div className="relative aspect-[3/4] w-full">
            <div className="absolute -top-5 -left-5 h-full w-full border-2 border-[#45a113]/50" />
            <Image
              src={coverA.src}
              alt={coverA.alt}
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
              priority
            />
          </div>

          {coverB && (
            <div className="absolute -right-6 -bottom-10 hidden w-44 border-4 border-white shadow-2xl xl:block">
              <Image
                src={coverB.src}
                alt={coverB.alt}
                width={400}
                height={300}
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
          )}

          <div className="absolute bottom-8 left-0 rounded-sm bg-custom-green px-5 py-3">
            <span
              className={`${nunitoFont.className} text-xs font-bold tracking-widest text-white uppercase`}
            >
              DIDN · Moments of impact
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
