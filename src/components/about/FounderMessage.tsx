import { Quote, User } from "lucide-react";
import type React from "react";
import { nunitoFont, poppinsFont, rubikFont } from "@/lib/font";
import { Headline } from "../ui/Headline";
import Image from "next/image";
import { AmbIrohFaithful } from "@/assets";

export const FounderMessage: React.FC = () => {
  return (
    <section className="flex w-full flex-col bg-[#f4f7fa] px-8 py-15 lg:py-20">
      <Headline
        heading="10 / Founder's Message"
        title="A Message From Our Founder"
      />

      <div className="mt-10 grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <div className="relative aspect-[3/4] w-full overflow-hidden rounded-md border border-gray-200 bg-white">
            <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-gray-50">
              <Image
                src={AmbIrohFaithful}
                alt="founder"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center gap-8 lg:col-span-8">
          <div className="border-custom-green flex flex-col gap-5 border-l-2 pl-6 md:pl-8">
            <Quote
              size={28}
              className="text-custom-green"
            />
            <p
              className={`${rubikFont.className} text-lg leading-relaxed text-gray-700 md:text-xl`}
            >
              Driven by impact, building systems that deliver humanitarian
              support, equity, and sustainability.
            </p>
          </div>

          <div className="flex flex-col gap-1.5 pl-6 md:pl-8">
            <h3
              className={`${nunitoFont.className} text-xl font-bold text-gray-900`}
            >
              Amb. Iroh Faithful
            </h3>
            <span
              className={`${rubikFont.className} text-custom-green text-sm`}
            >
              Founder & Director, Direct Impact Development Network
            </span>
          </div>
        </div>
      </div>
    </section>
  );;;;
};
