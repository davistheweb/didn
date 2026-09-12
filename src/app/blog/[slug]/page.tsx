import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PostPage } from "@/components/blog/PostPage";
import { ReachOutSection } from "@/components/landing/ReachOutSection";
import { cached } from "@/lib/server-cache";
import { resolveAssetUrl } from "@/services/api";
import type { BlogPost } from "@/services/api-types";
import { fetchPost } from "@/services/posts";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;

  try {
    const post = await cached(`post:${slug}`, () => fetchPost(slug));
    if (!post) {
      return { title: "Article not found — Direct Impact Development Network" };
    }

    const image = resolveAssetUrl(post.image);
    return {
      title: `${post.title} — Direct Impact Development Network`,
      description: post.excerpt ?? undefined,
      openGraph: image ? { images: [image] } : undefined,
    };
  } catch {
    return { title: "Article — Direct Impact Development Network" };
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;

  let post: BlogPost | null = null;
  try {
    post = await cached(`post:${slug}`, () => fetchPost(slug));
  } catch {
    post = null;
  }

  if (!post) {
    notFound();
  }

  return (
    <>
      <PostPage slug={slug} initialPost={post} />
      <ReachOutSection />
    </>
  );
}
