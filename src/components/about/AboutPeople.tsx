import { ArrowRight } from "lucide-react";
import Link from "next/link";
import type React from "react";
import { teamPreview } from "@/data/about";
import { poppinsFont, rubikFont } from "@/lib/font";
import { Headline } from "../ui/Headline";
import { MemberCard } from "./MemberCard";

export const AboutPeople: React.FC = () => {
  return (
    <section className="flex w-full flex-col items-start gap-5 px-8 py-15 lg:py-20">
      <div data-aos="fade-up">
        <Headline
          heading="/ Our People"
          title="The People Behind the Mission"
        />
      </div>

      <p
        className={`${poppinsFont.className} max-w-3xl pt-1 text-sm leading-relaxed text-gray-600`}
        data-aos="fade-up"
        data-aos-delay="100"
      >
        Meaningful change is driven by people who are committed to serving
        communities, creating opportunities, and turning ideas into action.
      </p>

      <div className="mt-8 grid w-full gap-8 md:grid-cols-2 lg:grid-cols-3">
        {teamPreview.map((member, _i) => (
          <div
            key={_i}
            className="h-full"
            data-aos="fade-up"
            data-aos-delay={_i * 100}
          >
            <MemberCard member={member} showBio={false} />
          </div>
        ))}
      </div>

      <Link
        href="/teams"
        className={`${rubikFont.className} mt-6 flex items-center gap-2 font-semibold text-custom-green transition-colors duration-200 hover:text-[#123f2b]`}
        data-aos="fade-up"
        data-aos-delay="200"
      >
        Meet the Full Team
        <ArrowRight size={18} />
      </Link>
    </section>
  );
};
