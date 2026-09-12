"use client";

import { useQuery } from "@tanstack/react-query";
import type { Event } from "@/services/api-types";
import { fetchEvent } from "@/services/events";

interface UseEventOptions {
  initialData?: Event | null;
}

export const useEvent = (slug: string, options: UseEventOptions = {}) =>
  useQuery({
    queryKey: ["event", slug],
    queryFn: () => fetchEvent(slug),
    enabled: Boolean(slug),
    initialData: options.initialData ?? undefined,
    staleTime: 5 * 60_000,
  });
