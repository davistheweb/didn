"use client";

import { useQuery } from "@tanstack/react-query";
import type { BlogPost } from "@/services/api-types";
import { fetchPost } from "@/services/posts";

interface UsePostOptions {
  initialData?: BlogPost | null;
}

export const usePost = (slug: string, options: UsePostOptions = {}) =>
  useQuery({
    queryKey: ["post", slug],
    queryFn: () => fetchPost(slug),
    enabled: Boolean(slug),
    initialData: options.initialData ?? undefined,
    staleTime: 5 * 60_000,
  });
