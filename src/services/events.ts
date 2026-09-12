import axios from "axios";
import { apiClient, normalizeApiError } from "./api";
import {
  type Event,
  type EventListParams,
  eventEnvelopeSchema,
  eventsListSchema,
  type PaginationMeta,
} from "./api-types";

export interface EventsResponse {
  events: Event[];
  pagination: PaginationMeta | null;
}

export const fetchEvents = async (
  params: EventListParams = {},
): Promise<EventsResponse> => {
  const { page, perPage, status, type } = params;

  try {
    const { data } = await apiClient.get("/events", {
      params: {
        page,
        per_page: perPage,
        status: status || undefined,
        type: type || undefined,
      },
    });

    const parsed = eventsListSchema.parse(data);
    return { events: parsed.data, pagination: parsed.meta ?? null };
  } catch (error) {
    throw normalizeApiError(error, "We couldn't load the events right now.");
  }
};

export const fetchEvent = async (slug: string): Promise<Event | null> => {
  try {
    const { data } = await apiClient.get(`/events/${encodeURIComponent(slug)}`);
    const parsed = eventEnvelopeSchema.parse(data);
    return parsed.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response?.status === 404) {
      return null;
    }
    throw normalizeApiError(error, "We couldn't load this event right now.");
  }
};
