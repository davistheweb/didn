import { ArrowRight, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type React from "react";
import CTABackgroundImage from "@/assets/IMG_0777.jpg";
import { nunitoFont, poppinsFont, rubikFont } from "@/lib/font";

export const AboutCTA: React.FC = () => {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={CTABackgroundImage}
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-[#45a113]/95" />
      </div>

      <div className="relative flex w-full flex-col items-center px-8 py-16 lg:py-24">
        <div className="flex flex-col items-center gap-5 text-center">
          <div className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-white" />
            <span
              className={`${nunitoFont.className} text-sm font-semibold tracking-widest text-white/70 uppercase`}
            >
              / Get Involved
            </span>
          </div>

          <h2
            className={`${nunitoFont.className} text-2xl leading-tight font-bold text-white md:text-4xl`}
          >
            Let's Create Impact Together
          </h2>

          <p
            className={`${poppinsFont.className} max-w-2xl text-sm leading-relaxed text-white/90 md:text-base`}
          >
            Whether you're looking to collaborate, volunteer, support an
            initiative, or learn more about our work, we invite you to connect
            with Direct Impact Development Network.
          </p>

          <div className="flex flex-col gap-4 pt-2 sm:flex-row">
            <Link
              href="/contact"
              className={`${rubikFont.className} flex items-center gap-2 rounded-lg bg-custom-blue px-8 py-4 font-medium text-white transition-colors duration-200 hover:bg-[#0a428c]`}
            >
              Get Involved <ArrowRight size={18} />
            </Link>
            <Link
              href="/contact"
              className={`${rubikFont.className} flex items-center gap-2 rounded-lg border border-white px-8 py-4 font-medium text-white transition-colors duration-200 hover:bg-white/10`}
            >
              Contact Us <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
