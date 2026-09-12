"use client";

import { ArrowLeft, CalendarDays, MapPin, Tag } from "lucide-react";
import Link from "next/link";
import type React from "react";
import { useEvent } from "@/hooks/useEvent";
import { eventDateLabel, eventTypeLabel } from "@/lib/event-info";
import { nunitoFont, rubikFont } from "@/lib/font";
import type { Event } from "@/services/api-types";
import { ApiImage } from "../ui/ApiImage";
import { ArticleContent } from "../ui/ArticleContent";

interface EventPageProps {
  slug: string;
  initialEvent: Event;
}

export const EventPage: React.FC<EventPageProps> = ({ slug, initialEvent }) => {
  const { data } = useEvent(slug, { initialData: initialEvent });
  const event = data ?? initialEvent;
  const isUpcoming = event.status === "upcoming";

  return (
    <main className="w-full overflow-x-clip">
      <section className="relative flex w-full overflow-hidden bg-[#0b2f66]">
        <div className="flex w-full flex-col gap-6 px-8 pt-28 pb-14 md:pt-36 lg:pt-44 lg:pb-20">
          <Link
            href="/events"
            className="flex w-fit items-center gap-2 text-sm font-medium text-white/70 transition-colors duration-200 hover:text-white"
          >
            <ArrowLeft size={16} />
            Back to Events
          </Link>

          <div className="flex flex-wrap items-center gap-3">
            <span
              className={`${rubikFont.className} rounded-full px-4 py-1.5 text-xs font-semibold tracking-wide uppercase ${
                isUpcoming
                  ? "bg-custom-green text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              {event.status}
            </span>
            <span className="flex items-center gap-1.5 text-sm text-white/75">
              <Tag size={14} className="text-custom-green" />
              {eventTypeLabel(event.type)}
            </span>
          </div>

          <h1
            className={`${nunitoFont.className} max-w-4xl text-2xl leading-tight font-bold text-white md:text-4xl lg:text-5xl`}
          >
            {event.title}
          </h1>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-white/75">
            <span className="flex items-center gap-2">
              <CalendarDays size={15} />
              {eventDateLabel(event)}
            </span>
            {event.location && (
              <span className="flex items-center gap-2">
                <MapPin size={15} />
                {event.location}
              </span>
            )}
          </div>

          {event.description && (
            <p
              className={`${rubikFont.className} max-w-2xl text-base leading-relaxed text-white/85 md:text-lg`}
            >
              {event.description}
            </p>
          )}
        </div>
      </section>

      <section className="flex w-full flex-col gap-8 px-8 py-15 lg:py-20">
        <div className="mx-auto w-full max-w-3xl">
          {event.image && (
            <div className="relative mb-10 aspect-[16/9] w-full overflow-hidden rounded-md">
              <ApiImage src={event.image} alt={event.title} priority />
            </div>
          )}

          {event.content ? (
            <div className="mb-10">
              <ArticleContent html={event.content} className="max-w-none" />
            </div>
          ) : (
            event.description && (
              <p
                className={`${rubikFont.className} text-base leading-relaxed text-gray-700`}
              >
                {event.description}
              </p>
            )
          )}

          {isUpcoming && (
            <div className="rounded-md border border-custom-green/30 bg-custom-green/5 px-6 py-5">
              <h3
                className={`${nunitoFont.className} mb-1 text-lg font-bold text-[#1a1a1a]`}
              >
                Want to take part?
              </h3>
              <p
                className={`${rubikFont.className} text-sm leading-relaxed text-gray-600`}
              >
                Contact us to learn more about this event, register as a
                participant, or explore partnership opportunities.
              </p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
};
