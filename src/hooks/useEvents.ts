"use client";

import { keepPreviousData, useQuery } from "@tanstack/react-query";
import type { EventListParams } from "@/services/api-types";
import { fetchEvents } from "@/services/events";

export const useEvents = (params: EventListParams = {}) =>
  useQuery({
    queryKey: ["events", params],
    queryFn: () => fetchEvents(params),
    placeholderData: keepPreviousData,
    staleTime: 60_000,
  });
