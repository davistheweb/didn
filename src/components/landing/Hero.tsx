import { rubikFont } from "@/lib/font";
import Link from "next/link";
import React from "react";

export const Hero: React.FC = () => {
  return (
    <section className="hero-background flex h-170 w-full items-center px-8 pt-25">
      <div className="flex w-full flex-col gap-5 p-0">
        <div className="flex flex-col gap-3">
          <h1
            className={`text-6xl text-white ${rubikFont.className} font-bold`}
          >
            DIRECT IMPACT <br /> DEVELOPMENT NETWORK
          </h1>
          <p className="text-xl text-white">
            Empowering Communities. Shaping a Better Future.
          </p>
        </div>
        <div className="flex gap-4">
          <Link
            href="#"
            className="bg-custom-green flex items-center rounded-lg px-8 pt-[17.5px] pb-4.5 text-white"
          >
            Get Involved
          </Link>
          <Link
            href="#"
            className="flex px-8 pt-[17.5px] pb-4.5 text-white rounded-lg bg-custom-blue"
          >
            Explore Our Work
          </Link>
        </div>
      </div>
    </section>
  );
};
