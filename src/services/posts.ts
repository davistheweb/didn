import axios from "axios";
import { apiClient, normalizeApiError } from "./api";
import {
  type BlogPost,
  type ListParams,
  type PaginationMeta,
  postEnvelopeSchema,
  postsListSchema,
} from "./api-types";

export interface PostsResponse {
  posts: BlogPost[];
  pagination: PaginationMeta | null;
}

export const fetchPosts = async (
  params: ListParams = {},
): Promise<PostsResponse> => {
  const { page, perPage, category, search, sortBy, sortDir } = params;

  try {
    const { data } = await apiClient.get("/posts", {
      params: {
        page,
        per_page: perPage,
        category: category || undefined,
        search: search || undefined,
        sort_by: sortBy,
        sort_dir: sortDir,
      },
    });

    const parsed = postsListSchema.parse(data);
    return { posts: parsed.data, pagination: parsed.meta ?? null };
  } catch (error) {
    throw normalizeApiError(error, "We couldn't load the posts right now.");
  }
};

export const fetchPost = async (slug: string): Promise<BlogPost | null> => {
  try {
    const { data } = await apiClient.get(`/posts/${encodeURIComponent(slug)}`);
    const parsed = postEnvelopeSchema.parse(data);
    return parsed.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response?.status === 404) {
      return null;
    }
    throw normalizeApiError(error, "We couldn't load this post right now.");
  }
};
