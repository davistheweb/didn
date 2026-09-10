import { focusAreas } from "@/data";
import { nunitoFont, rubikFont } from "@/lib/font";
import React from "react";
import { Headline } from "../ui/Headline";

export const WhatWeDo: React.FC = () => {
  return (
    <section className="flex w-full flex-col items-start gap-5 px-8 py-15">
      <div>
        <Headline
          heading="/ WHAT WE DO"
          title="Focus Areas"
        />
      </div>

      <div className="flex w-full flex-col items-center justify-center gap-4">
        <h1
          className={`w-full text-center text-xl font-medium md:text-3xl ${nunitoFont.className}`}
        >
          Building stronger communities, <br /> one area at a time.
        </h1>

        <p className={`${rubikFont.className} text-center md:w-137.5`}>
          We focus on practical solutions that create opportunities, protect
          communities and the environment, and empower people to lead change.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {focusAreas.map((area, _i) => (
          <div
            key={_i}
            className="group relative overflow-hidden rounded-lg border border-[#2f73a333] bg-[#2fa33733]/80 backdrop-blur-lg"
          >
            {" "}
            <div className="absolute inset-0 bg-linear-to-r from-blue-500/10 to-blue-500/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <div className="relative p-8">
              <div className="mb-6 flex items-center justify-between">
                <span className="transform text-3xl transition-transform duration-300 group-hover:scale-110">
                  <area.icon
                    className="text-custom-blue h-8 w-8"
                    strokeWidth={1.5}
                  />
                </span>
                <div className="bg-custom-blue h-px w-16 opacity-50" />
              </div>

              <h3 className="mb-4 text-xl font-bold tracking-wide">
                {area.title}
              </h3>

              <p className="text-sm leading-relaxed">{area.description}</p>
            </div>
            <div className="h-0.5 w-full scale-x-0 transform bg-linear-to-r from-blue-500/50 to-blue-500/50 transition-transform duration-500 group-hover:scale-x-100" />
          </div>
        ))}
      </div>
    </section>
  );;;;;;
};
