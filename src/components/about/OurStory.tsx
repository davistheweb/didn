import Image from "next/image";
import type React from "react";
import StoryImage from "@/assets/IMG_0732.jpg";
import { areasOfWork, storyParagraphs } from "@/data/about";
import { nunitoFont, poppinsFont, rubikFont } from "@/lib/font";
import { Headline } from "../ui/Headline";

export const OurStory: React.FC = () => {
  return (
    <section
      id="our-story"
      className="flex w-full scroll-mt-28 flex-col gap-10 px-8 py-15 lg:py-20"
    >
      <div className="grid gap-12 lg:grid-cols-12">
        <div className="flex flex-col gap-6 lg:col-span-5">
          <div data-aos="fade-up">
            <Headline heading="/ Our Story" title="From Purpose to Impact" />
          </div>

          <div
            className="flex flex-col gap-4 pt-4"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            {storyParagraphs.map((paragraph, _i) => (
              <p
                key={_i}
                className={`${poppinsFont.className} text-[14px] leading-relaxed text-gray-700`}
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        <div className="lg:col-span-7">
          <div
            className="relative aspect-video w-full overflow-hidden rounded-md"
            data-aos="fade-left"
            data-aos-delay="150"
          >
            <Image
              src={StoryImage}
              alt="DIDN staff and community members working together"
              fill
              sizes="(min-width: 1024px) 55vw, 100vw"
              className="object-cover"
            />
          </div>

          <div className="mt-10 flex w-full flex-col">
            <div
              className="mb-2 flex items-center gap-4"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <span className="h-px w-10 bg-custom-blue" />
              <span
                className={`${nunitoFont.className} text-xs font-bold tracking-widest text-gray-400 uppercase`}
              >
                Areas of Work
              </span>
            </div>

            <div className="grid sm:grid-cols-2">
              {areasOfWork.map((area, _i) => (
                <div
                  key={area}
                  className="flex items-center gap-4 border-b border-gray-200 py-3.5"
                  data-aos="fade-up"
                  data-aos-delay={_i * 50}
                >
                  <span
                    className={`${nunitoFont.className} text-sm font-bold text-custom-green`}
                  >
                    {String(_i + 1).padStart(2, "0")}
                  </span>
                  <span
                    className={`${rubikFont.className} text-[15px] text-gray-800`}
                  >
                    {area}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
