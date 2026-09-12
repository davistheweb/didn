import { format } from "date-fns";
import type { Event } from "@/services/api-types";

const EVENT_TYPE_LABELS: Record<Event["type"], string> = {
  conference: "Conference",
  campaign: "Campaign",
  training: "Training",
  webinar: "Webinar",
};

export const eventTypeLabel = (type: Event["type"]): string =>
  EVENT_TYPE_LABELS[type];

export const eventDateLabel = (
  event: Pick<Event, "start_date" | "end_date">,
): string => {
  const start = new Date(event.start_date);
  const end = event.end_date ? new Date(event.end_date) : null;

  if (!end) return format(start, "MMM d, yyyy");

  const sameYear = start.getFullYear() === end.getFullYear();
  const sameMonth = start.getMonth() === end.getMonth();

  if (sameYear && sameMonth) {
    return `${format(start, "MMM d")} – ${format(end, "d, yyyy")}`;
  }
  if (sameYear) {
    return `${format(start, "MMM d")} – ${format(end, "MMM d, yyyy")}`;
  }
  return `${format(start, "MMM d, yyyy")} – ${format(end, "MMM d, yyyy")}`;
};
