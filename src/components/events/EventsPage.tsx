"use client";

import { ArrowDown, CalendarDays, CalendarX2 } from "lucide-react";
import type React from "react";
import { useState } from "react";
import { useEvents } from "@/hooks/useEvents";
import { nunitoFont, poppinsFont, rubikFont } from "@/lib/font";
import type {
  Event,
  EventStatusFilter,
  EventTypeFilter,
} from "@/services/api-types";
import { ReachOutSection } from "../landing/ReachOutSection";
import { CardGridSkeleton, EmptyState, ErrorState } from "../ui/AsyncStates";
import { Headline } from "../ui/Headline";
import { EventCard } from "./EventCard";

const EVENT_TYPES: EventTypeFilter[] = [
  "all",
  "conference",
  "campaign",
  "training",
  "webinar",
];

const STATUS_TABS: { label: string; value: EventStatusFilter }[] = [
  { label: "All Events", value: "all" },
  { label: "Upcoming", value: "upcoming" },
  { label: "Past", value: "past" },
];

const EVENT_TYPE_LABELS: Record<Exclude<EventTypeFilter, "all">, string> = {
  conference: "Conference",
  campaign: "Campaign",
  training: "Training",
  webinar: "Webinar",
};

interface FilterChipProps {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}

const FilterChip: React.FC<FilterChipProps> = ({
  active,
  onClick,
  children,
}) => (
  <button
    type="button"
    onClick={onClick}
    className={`${rubikFont.className} rounded-full border px-5 py-2 text-sm font-medium transition-colors duration-200 ${
      active
        ? "border-custom-green bg-custom-green text-white"
        : "border-gray-300 bg-white text-gray-600 hover:border-custom-blue hover:text-custom-blue"
    }`}
  >
    {children}
  </button>
);

export const EventsPage: React.FC = () => {
  const [status, setStatus] = useState<EventStatusFilter>("all");
  const [type, setType] = useState<EventTypeFilter>("all");
  const [page, setPage] = useState(1);

  const { data, isLoading, isError, refetch, isFetching } = useEvents({
    page,
    perPage: 6,
    status: status === "all" ? undefined : status,
    type: type === "all" ? undefined : type,
  });

  const events = data?.events ?? [];
  const isEmpty = !isLoading && !isError && events.length === 0;
  const hasNextPage = Boolean(data?.pagination?.next_page_url);

  const changeStatus = (next: EventStatusFilter) => {
    setStatus(next);
    setPage(1);
  };

  const changeType = (next: EventTypeFilter) => {
    setType(next);
    setPage(1);
  };

  const filtersActive = status !== "all" || type !== "all";
  const emptyTitle = filtersActive
    ? "No events match your filters"
    : "No events yet";
  const emptyDescription = filtersActive
    ? "Try changing the status or type filter to see more events."
    : "We're planning our next events. Check back soon for upcoming activities.";

  return (
    <main className="w-full overflow-x-clip">
      <section className="relative flex w-full overflow-hidden bg-[#0b2f66]">
        <div className="grid w-full px-8 pt-28 pb-16 md:pt-36 lg:pt-44 lg:pb-24">
          <div className="flex flex-col gap-6 lg:max-w-3xl">
            <div className="flex items-center gap-3" data-aos="fade-up">
              <CalendarDays size={18} className="text-custom-green" />
              <span
                className={`${nunitoFont.className} text-sm font-semibold tracking-widest text-white/70 uppercase`}
              >
                01 / Events
              </span>
            </div>

            <h1
              className={`${nunitoFont.className} text-3xl leading-tight font-bold text-white md:text-5xl`}
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Events &amp; Campaigns
            </h1>

            <div
              className="flex flex-col gap-4 md:max-w-2xl"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <p
                className={`${rubikFont.className} text-base leading-relaxed text-white/85 md:text-lg`}
              >
                Conferences, campaigns, training, and webinars from Direct
                Impact Development Network.
              </p>
              <p
                className={`${poppinsFont.className} text-sm leading-relaxed text-white/70 md:text-base`}
              >
                Join us to learn, connect, and take part in the work happening
                in our communities.
              </p>
            </div>

            <a
              href="#events"
              className={`${rubikFont.className} flex w-fit items-center gap-2 rounded-lg bg-custom-green px-8 py-4 font-medium text-white transition-opacity duration-200 hover:opacity-90`}
              data-aos="fade-up"
              data-aos-delay="300"
            >
              Explore Events <ArrowDown size={18} />
            </a>
          </div>
        </div>
      </section>

      <section
        id="events"
        className="flex w-full flex-col items-start gap-8 px-8 py-15 lg:py-20"
      >
        <div className="w-full">
          <Headline heading="/ FROM DIDN" title="Upcoming & Past Events" />
        </div>

        <div className="flex w-full flex-col gap-4">
          <div className="flex flex-wrap items-center gap-2">
            {STATUS_TABS.map((tab) => (
              <FilterChip
                key={tab.value}
                active={status === tab.value}
                onClick={() => changeStatus(tab.value)}
              >
                {tab.label}
              </FilterChip>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {EVENT_TYPES.map((eventType) => (
              <FilterChip
                key={eventType}
                active={type === eventType}
                onClick={() => changeType(eventType)}
              >
                {eventType === "all"
                  ? "All Types"
                  : EVENT_TYPE_LABELS[eventType]}
              </FilterChip>
            ))}
          </div>
        </div>

        {isLoading ? (
          <CardGridSkeleton count={3} />
        ) : isError ? (
          <ErrorState
            message="We couldn't load the events from the server."
            onRetry={refetch}
          />
        ) : isEmpty ? (
          <EmptyState
            icon={CalendarX2}
            title={emptyTitle}
            description={emptyDescription}
          />
        ) : (
          <>
            <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {events.map((event: Event) => (
                <div key={event.id} className="h-full">
                  <EventCard event={event} />
                </div>
              ))}
            </div>

            {hasNextPage && (
              <div className="flex w-full justify-center">
                <button
                  type="button"
                  onClick={() => setPage((current) => current + 1)}
                  disabled={isFetching}
                  className={`${rubikFont.className} flex items-center gap-2 rounded-lg border border-custom-blue px-8 py-3 font-medium text-custom-blue transition-colors duration-200 hover:bg-custom-blue hover:text-white disabled:opacity-60`}
                >
                  {isFetching ? "Loading…" : "Load More Events"}
                </button>
              </div>
            )}
          </>
        )}
      </section>

      <ReachOutSection />
    </main>
  );
};
