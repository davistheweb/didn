import { CalendarDays, MapPin } from "lucide-react";
import Link from "next/link";
import type React from "react";
import { eventDateLabel, eventTypeLabel } from "@/lib/event-info";
import { nunitoFont, rubikFont } from "@/lib/font";
import type { Event } from "@/services/api-types";
import { ApiImage } from "../ui/ApiImage";

interface EventCardProps {
  event: Event;
}

export const EventCard: React.FC<EventCardProps> = ({ event }) => {
  const href = `/events/${event.slug}`;
  const isUpcoming = event.status === "upcoming";

  return (
    <article className="group flex h-full w-full flex-col overflow-hidden rounded-md border border-gray-200 bg-white transition-shadow duration-300 hover:shadow-lg">
      <Link href={href} className="relative block h-56 w-full overflow-hidden">
        <ApiImage src={event.image} alt={event.title} />

        <span
          className={`absolute top-4 left-4 rounded-full px-3 py-1 text-xs font-semibold tracking-wide uppercase ${
            isUpcoming
              ? "bg-custom-green text-white"
              : "bg-gray-200 text-gray-700"
          }`}
        >
          {event.status}
        </span>

        <span className="absolute top-4 right-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold tracking-wide text-[#0b2f66] uppercase">
          {eventTypeLabel(event.type)}
        </span>
      </Link>

      <div className="flex flex-1 flex-col justify-between px-5 pt-5">
        <Link href={href} className="group/title">
          <h3
            className={`${nunitoFont.className} mb-3 text-lg leading-snug font-extrabold text-[#1a1a1a] uppercase transition-colors duration-200 group-hover/title:text-custom-blue`}
          >
            {event.title}
          </h3>
        </Link>

        {event.description && (
          <p
            className={`${rubikFont.className} mb-4 text-sm leading-relaxed text-gray-600 line-clamp-3`}
          >
            {event.description}
          </p>
        )}

        <Link
          href={href}
          className="mb-4 text-sm font-semibold text-custom-green transition-colors duration-200 hover:text-[#123f2b]"
        >
          VIEW DETAILS »
        </Link>
      </div>

      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 border-t border-gray-200 px-5 py-3">
        <span className="flex items-center gap-1.5 text-sm text-gray-500">
          <CalendarDays size={14} className="text-custom-blue" />
          {eventDateLabel(event)}
        </span>
        {event.location && (
          <span className="flex items-center gap-1.5 text-sm text-gray-500">
            <MapPin size={14} className="text-custom-blue" />
            {event.location}
          </span>
        )}
      </div>
    </article>
  );
};
