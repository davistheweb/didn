import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type React from "react";
import { partners } from "@/data/about";
import { rubikFont } from "@/lib/font";
import { Headline } from "../ui/Headline";

export const Partners: React.FC = () => {
  return (
    <section className="flex w-full flex-col items-start gap-5 bg-[#f4f7fa] px-8 py-15 lg:py-20">
      <div data-aos="fade-up">
        <Headline heading="/ Our Partners" title="Stronger Together" />
      </div>

      <p
        className={`${rubikFont.className} max-w-3xl pt-1 text-[15px] leading-relaxed text-gray-600`}
        data-aos="fade-up"
        data-aos-delay="100"
      >
        We believe meaningful and sustainable change is achieved through
        collaboration. DIDN works with communities, institutions, organizations,
        and partners who share a commitment to creating positive social impact.
      </p>

      <div className="mt-8 flex w-full flex-wrap items-center justify-center gap-6">
        {partners.map((partner) => (
          <div
            key={partner.name}
            className="flex aspect-[2/1] w-[calc(50%-0.75rem)] items-center justify-center rounded-md border border-gray-200 bg-white p-4 transition-shadow duration-300 hover:shadow-md sm:w-56"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="relative h-full w-full">
              <Image
                src={partner.logo}
                alt={partner.name}
                fill
                sizes="(min-width: 640px) 224px, 100vw"
                className="object-contain"
              />
            </div>
          </div>
        ))}
      </div>

      <Link
        href="/contact"
        className={`${rubikFont.className} mt-5 flex items-center gap-2 font-semibold text-custom-green transition-colors duration-200 hover:text-[#123f2b]`}
        data-aos="fade-up"
        data-aos-delay="200"
      >
        Become a Partner
        <ArrowRight size={18} />
      </Link>
    </section>
  );
};
