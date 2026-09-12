import { z } from "zod";

export const paginationMetaSchema = z.object({
  current_page: z.number(),
  last_page: z.number(),
  per_page: z.number(),
  total: z.number(),
  from: z.number().nullish(),
  to: z.number().nullish(),
  path: z.string(),
  first_page_url: z.string().nullish(),
  last_page_url: z.string().nullish(),
  next_page_url: z.string().nullish(),
  prev_page_url: z.string().nullish(),
});

export type PaginationMeta = z.infer<typeof paginationMetaSchema>;

const apiEnvelopeSchema = <T extends z.ZodTypeAny>(dataSchema: T) =>
  z.object({
    success: z.boolean(),
    message: z.string().nullish(),
    data: dataSchema,
    meta: paginationMetaSchema.nullish(),
  });

const postAuthorSchema = z
  .object({
    id: z.number(),
    name: z.string(),
  })
  .nullish();

const blogPostSchema = z.object({
  id: z.number(),
  title: z.string(),
  slug: z.string(),
  category: z.string().nullish(),
  excerpt: z.string().nullish(),
  content: z.string(),
  cover_image_id: z.number().nullish(),
  image: z.string().nullish(),
  date: z.string().nullish(),
  published_at: z.string().nullish(),
  status: z.string(),
  author: postAuthorSchema,
  created_at: z.string(),
  updated_at: z.string(),
});

export type BlogPost = z.infer<typeof blogPostSchema>;

const eventItemSchema = z.object({
  id: z.number(),
  title: z.string(),
  slug: z.string(),
  description: z.string().nullish(),
  content: z.string().nullish(),
  type: z.enum(["conference", "campaign", "training", "webinar"]),
  location: z.string().nullish(),
  start_date: z.string(),
  end_date: z.string().nullish(),
  featured_image_id: z.number().nullish(),
  image: z.string().nullish(),
  status: z.enum(["upcoming", "past"]),
  is_published: z.boolean(),
  created_at: z.string(),
  updated_at: z.string(),
});

export type Event = z.infer<typeof eventItemSchema>;

export type EventStatusFilter = Event["status"] | "all";
export type EventTypeFilter = Event["type"] | "all";

export interface ListParams {
  page?: number;
  perPage?: number;
  category?: string;
  search?: string;
  sortBy?: "published_at" | "created_at" | "title";
  sortDir?: "asc" | "desc";
}

export interface EventListParams {
  page?: number;
  perPage?: number;
  status?: Event["status"];
  type?: Event["type"];
}

export const postsListSchema = apiEnvelopeSchema(z.array(blogPostSchema));
export const postEnvelopeSchema = apiEnvelopeSchema(blogPostSchema);
export const eventsListSchema = apiEnvelopeSchema(z.array(eventItemSchema));
export const eventEnvelopeSchema = apiEnvelopeSchema(eventItemSchema);
