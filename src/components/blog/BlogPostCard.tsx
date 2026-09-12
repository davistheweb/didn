import type React from "react";
import { resolveAssetUrl } from "@/services/api";
import type { BlogPost } from "@/services/api-types";
import { BlogCard } from "../ui/Blogcard";

interface BlogPostCardProps {
  post: BlogPost;
}

export const BlogPostCard: React.FC<BlogPostCardProps> = ({ post }) => (
  <BlogCard
    blog={{
      title: post.title,
      category: post.category ?? "News",
      image: resolveAssetUrl(post.image),
      date: post.date ?? "—",
      href: `/blog/${post.slug}`,
    }}
  />
);
