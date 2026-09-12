"use client";

import { Newspaper } from "lucide-react";
import type React from "react";
import { usePosts } from "@/hooks/usePosts";
import { nunitoFont, poppinsFont, rubikFont } from "@/lib/font";
import { ReachOutSection } from "../landing/ReachOutSection";
import { CardGridSkeleton, EmptyState, ErrorState } from "../ui/AsyncStates";
import { Headline } from "../ui/Headline";
import { BlogPostCard } from "./BlogPostCard";

export const BlogPage: React.FC = () => {
  const { data, isLoading, isError, refetch } = usePosts({
    page: 1,
    perPage: 12,
    sortBy: "published_at",
    sortDir: "desc",
  });

  const posts = data?.posts ?? [];
  const isEmpty = !isLoading && !isError && posts.length === 0;

  return (
    <main className="w-full overflow-x-clip">
      <section className="relative flex w-full overflow-hidden bg-[#0b2f66]">
        <div className="flex w-full flex-col gap-6 px-8 pt-28 pb-14 md:pt-36 lg:pt-44 lg:pb-20">
          <div className="flex items-center gap-3" data-aos="fade-up">
            <Newspaper size={18} className="text-custom-green" />
            <span
              className={`${nunitoFont.className} text-sm font-semibold tracking-widest text-white/70 uppercase`}
            >
              01 / Blog
            </span>
          </div>

          <h1
            className={`${nunitoFont.className} max-w-4xl text-3xl leading-tight font-bold text-white md:text-5xl`}
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Stories From the Work
          </h1>

          <div
            className="flex flex-col gap-4 md:max-w-2xl"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <p
              className={`${rubikFont.className} text-base leading-relaxed text-white/85 md:text-lg`}
            >
              Updates, stories, and reports from Direct Impact Development
              Network.
            </p>
            <p
              className={`${poppinsFont.className} text-sm leading-relaxed text-white/70 md:text-base`}
            >
              Stay connected with the latest news, insights, and activities from
              our programs and communities.
            </p>
          </div>
        </div>
      </section>

      <section
        id="posts"
        className="flex w-full flex-col items-start gap-8 px-8 py-15 lg:py-20"
      >
        <div className="w-full">
          <Headline heading="/ FROM DIDN" title="Latest Stories" />
        </div>

        {isLoading ? (
          <CardGridSkeleton count={3} />
        ) : isError ? (
          <ErrorState
            message="We couldn't reach the server to load the posts."
            onRetry={refetch}
          />
        ) : isEmpty ? (
          <EmptyState
            icon={Newspaper}
            title="No posts yet"
            description="We haven't published any posts yet. Check back soon for news and stories from our work."
          />
        ) : (
          <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <div key={post.id} className="h-full">
                <BlogPostCard post={post} />
              </div>
            ))}
          </div>
        )}
      </section>

      <ReachOutSection />
    </main>
  );
};
