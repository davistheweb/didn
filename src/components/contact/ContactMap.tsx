import { ArrowUpRight, MapPin } from "lucide-react";
import type React from "react";
import { Headline } from "@/components/ui/Headline";
import { officeLocation } from "@/data/contact";
import { nunitoFont, poppinsFont, rubikFont } from "@/lib/font";

export const ContactMap: React.FC = () => {
  return (
    <section className="flex w-full flex-col gap-10 border-t border-gray-200 bg-[#f4f7fa] px-8 py-15 lg:py-20">
      <div data-aos="fade-up">
        <Headline heading="03 / Our Location" title="Find Us" />
      </div>

      <div className="flex w-full flex-col gap-4">
        <div
          className="w-full overflow-hidden rounded-md border border-gray-200 bg-white shadow-sm"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <iframe
            title="Direct Impact Development Network location map"
            src={officeLocation.embedUrl}
            className="h-96 w-full md:h-130"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <div
          className="flex flex-col justify-between gap-4 bg-white p-6 sm:flex-row sm:items-center"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="flex items-start gap-3">
            <span className="bg-custom-blue/10 text-custom-blue mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full">
              <MapPin size={16} />
            </span>
            <div className="flex flex-col gap-1">
              <span
                className={`${nunitoFont.className} text-lg font-bold text-[#0b2f66]`}
              >
                {officeLocation.title}
              </span>
              <p
                className={`${poppinsFont.className} text-sm leading-relaxed text-gray-500`}
              >
                {officeLocation.line1}, {officeLocation.line2}
              </p>
            </div>
          </div>

          <a
            href={officeLocation.directionHref}
            target="_blank"
            rel="noopener noreferrer"
            className={`${rubikFont.className} flex w-fit items-center gap-2 rounded-md bg-custom-blue px-6 py-3 font-medium text-white transition-colors duration-200 hover:bg-[#0a428c]`}
          >
            Open in Google Maps <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
