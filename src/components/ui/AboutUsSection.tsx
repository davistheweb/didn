"use client";

import { MeetingAboutImage } from "@/assets";
import { nunitoFont, poppinsFont, rubikFont } from "@/lib/font";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { Headline } from "./Headline";
import { ImpactStats } from "./ImpactStats";

export const AboutUsSection: React.FC = () => {
  const [stats, setStats] = useState<IImpactStats>({
    beneficiaries: 0,
    volunteers: 0,
    communityReached: 0,
    projectCompleted: 0,
  });

  const [hasStarted, setHasStarted] = useState(false);

  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.3,
      },
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasStarted) return;

    const targets: IImpactStats = {
      beneficiaries: 1500,
      volunteers: 25,
      communityReached: 15,
      projectCompleted: 5,
    };

    const interval = setInterval(() => {
      setStats((prev) => {
        const next = {
          beneficiaries: Math.min(
            prev.beneficiaries + 50,
            targets.beneficiaries,
          ),
          volunteers: Math.min(prev.volunteers + 1, targets.volunteers),
          communityReached: Math.min(
            prev.communityReached + 1,
            targets.communityReached,
          ),
          projectCompleted: Math.min(
            prev.projectCompleted + 1,
            targets.projectCompleted,
          ),
        };

        const finished = Object.keys(targets).every(
          (key) =>
            next[key as keyof IImpactStats] ===
            targets[key as keyof IImpactStats],
        );

        if (finished) {
          clearInterval(interval);
        }

        return next;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [hasStarted]);

  const impactStats: IImpactStatsValues[] = [
    {
      value: stats.beneficiaries,
      suffix: "+",
      label: "Number of beneficiaries",
      desc: "Creating positive change through community-focused initiatives.",
    },
    {
      value: stats.volunteers,
      label: "Volunteers",
      desc: "People giving their time and skills to drive meaningful change.",
    },
    {
      value: stats.communityReached,
      suffix: "+",
      label: "Communities Reached",
      desc: "Working alongside communities to create lasting impact.",
    },
    {
      value: stats.projectCompleted,
      suffix: "+",
      label: "Projects Completed",
      desc: "Turning ideas into practical solutions that make a difference.",
    },
  ];

  return (
    <section className="flex h-170 w-full flex-col items-start gap-5 px-8 pt-15">
      <div>
        <Headline heading="/ About Us /" title="WHO WE ARE" />
      </div>

      <h1
        className={`md:text-3xl text-center w-full text-xl font-medium ${nunitoFont.className}`}
      >
        Creating Impact Where It <br /> Matters Most.
      </h1>

      <div className="flex flex-col gap-10 pt-10 lg:flex-row">
        <div className="flex md:h-100 md:w-117.5">
          <Image
            src={MeetingAboutImage}
            alt="about image"
            className="rounded-md"
          />
        </div>

        <div className="space-y-3 px-5 md:max-w-187.5" ref={statsRef}>
          <div className="space-y-2">
            <p className={`${poppinsFont.className} text-[14px]`}>
              Direct Impact Development Network (DIDN) is a non-profit
              organization committed to creating sustainable solutions that
              empower people and strengthen communities.
            </p>
            <p className={`${poppinsFont.className} text-[14px]`}>
              We work alongside communities, institutions, and partners to
              address social challenges, promote inclusion, protect the
              environment, advance human rights, and equip young people with the
              skills and leadership needed to shape a better future.
            </p>
          </div>
          <Link
            href="/about"
            className={`flex w-fit cursor-pointer items-center  justify-center text-[13px] text-center gap-1 rounded-full bg-black p-2 text-white ${rubikFont.className}`}
          >
            Learn More{" "}
            <ArrowUpRight
              className={`bg-custom-green group/b rounded-full`}
              size={20}
              color="black"
            />
          </Link>
          <div className="grid md:grid-cols-2 gap-5">
            {impactStats.map(({ value, label, suffix, desc }, _i) => (
              <ImpactStats
                key={_i}
                value={value}
                label={label}
                desc={desc}
                suffix={suffix}
                hasBorder={_i !== 1 && _i !== 3}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
