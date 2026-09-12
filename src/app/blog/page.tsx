import type { Metadata } from "next";
import { BlogPage } from "@/components/blog/BlogPage";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Blog — Direct Impact Development Network",
  description:
    "Stories, updates, and reports from the work of Direct Impact Development Network.",
};

export default function BlogIndexPage() {
  return <BlogPage />;
}
