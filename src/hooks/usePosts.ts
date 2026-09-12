"use client";

import { keepPreviousData, useQuery } from "@tanstack/react-query";
import type { ListParams } from "@/services/api-types";
import { fetchPosts } from "@/services/posts";

export const usePosts = (params: ListParams = {}) =>
  useQuery({
    queryKey: ["posts", params],
    queryFn: () => fetchPosts(params),
    placeholderData: keepPreviousData,
    staleTime: 60_000,
  });
