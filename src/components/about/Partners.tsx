import { ArrowRight, Building2 } from "lucide-react";
import Link from "next/link";
import type React from "react";
import { partnerSlotCount } from "@/data/about";
import { poppinsFont, rubikFont } from "@/lib/font";
import { Headline } from "../ui/Headline";

export const Partners: React.FC = () => {
  return (
    <section className="flex w-full flex-col items-start gap-5 bg-[#f4f7fa] px-8 py-15 lg:py-20">
      <Headline heading="/ Our Partners" title="Stronger Together" />

      <p
        className={`${rubikFont.className} max-w-3xl pt-1 text-[15px] leading-relaxed text-gray-600`}
      >
        We believe meaningful and sustainable change is achieved through
        collaboration. DIDN works with communities, institutions, organizations,
        and partners who share a commitment to creating positive social impact.
      </p>

      <div className="mt-8 grid w-full grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
        {Array.from({ length: partnerSlotCount }, (_, _i) => (
          <div
            key={_i}
            className="flex aspect-[2/1] items-center justify-center gap-2 rounded-md border border-gray-200 bg-white"
          >
            <Building2 size={20} className="text-gray-300" strokeWidth={1.5} />
            <span
              className={`${poppinsFont.className} text-xs font-medium tracking-widest text-gray-300 uppercase`}
            >
              Partner
            </span>
          </div>
        ))}
      </div>

      <Link
        href="/contact"
        className={`${rubikFont.className} mt-5 flex items-center gap-2 font-semibold text-custom-green transition-colors duration-200 hover:text-[#123f2b]`}
      >
        Become a Partner
        <ArrowRight size={18} />
      </Link>
    </section>
  );
};
