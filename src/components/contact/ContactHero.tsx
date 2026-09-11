import { ArrowDown } from "lucide-react";
import Image from "next/image";
import type React from "react";
import HeroImage from "@/assets/IMG_0783.jpg";
import { nunitoFont, poppinsFont, rubikFont } from "@/lib/font";

export const ContactHero: React.FC = () => {
  return (
    <section className="relative flex w-full overflow-hidden bg-[#0b2f66]">
      <div className="grid w-full px-8 pt-28 pb-16 md:pt-36 lg:grid-cols-12 lg:pt-44 lg:pb-24">
        <div className="flex flex-col justify-center gap-6 lg:col-span-7 lg:pr-14">
          <h1
            className={`${nunitoFont.className} text-3xl leading-tight font-bold text-white md:text-5xl`}
            data-aos="fade-up"
          >
            We'd Love to Hear From You.
          </h1>

          <div
            className="flex flex-col gap-4 md:max-w-2xl"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            <p
              className={`${rubikFont.className} text-base leading-relaxed text-white/85 md:text-lg`}
            >
              Whether you want to partner with us, volunteer your time, support
              an initiative, or learn more about our work, the DIDN team is
              ready to connect with you.
            </p>
            <p
              className={`${poppinsFont.className} text-sm leading-relaxed text-white/70 md:text-base`}
            >
              Reach out through the form below or directly by phone, email, or
              in person — we'd love to hear from you.
            </p>
          </div>

          <a
            href="#get-in-touch"
            className={`${rubikFont.className} flex w-fit cursor-pointer items-center gap-2 rounded-lg bg-custom-green px-8 py-4 font-medium text-white transition-opacity duration-200 hover:opacity-90`}
            data-aos="fade-up"
            data-aos-delay="250"
          >
            Get In Touch <ArrowDown size={18} />
          </a>
        </div>

        <div
          className="relative hidden lg:col-span-5 lg:block"
          data-aos="fade-left"
          data-aos-delay="200"
        >
          <div className="relative aspect-[3/4] w-full">
            <div className="absolute -top-5 -left-5 h-full w-full border-2 border-[#45a113]/50" />
            <Image
              src={HeroImage}
              alt="Direct Impact Development Network in the community"
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
              priority
            />
          </div>

          <div className="absolute bottom-8 left-0 rounded-sm bg-custom-green px-5 py-3">
            <span
              className={`${nunitoFont.className} text-xs font-bold tracking-widest text-white uppercase`}
            >
              DIDN · Open to conversations
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
