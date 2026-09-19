"use client";

import { ArrowRight, Newspaper } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type React from "react";
import { usePosts } from "@/hooks/usePosts";
import { nunitoFont, rubikFont } from "@/lib/font";
import { resolveAssetUrl } from "@/services/api";
import { CardGridSkeleton } from "../ui/AsyncStates";
import { Headline } from "../ui/Headline";

export const BlogSection: React.FC = () => {
  const { data, isLoading, isError } = usePosts({
    page: 1,
    perPage: 3,
    sortBy: "published_at",
    sortDir: "desc",
  });

  const posts = data?.posts ?? [];

  return (
    <section className="flex w-full flex-col items-start gap-16 md:gap-8 px-8 py-15 lg:py-20">
      <div data-aos="fade-up">
        <Headline heading="/ BLOG & STORIES" title="LATEST FROM DIDN" />
      </div>

      <div className="flex w-full flex-col items-center justify-center gap-4">
        <h2
          className={`w-full text-center text-xl font-medium md:text-3xl ${nunitoFont.className}`}
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Stories, Insights & Impact
        </h2>

        <p
          className={`${rubikFont.className} max-w-2xl text-center text-[15px] leading-relaxed text-gray-600`}
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Discover updates, stories, insights, and activities from Direct Impact
          Development Network — amplifying the voices and milestones that drive
          our mission forward.
        </p>
      </div>

      {isLoading ? (
        <CardGridSkeleton count={3} />
      ) : isError ? (
        <div
          className="flex w-full flex-col items-center justify-center gap-3 rounded-md border border-dashed border-gray-300 px-8 py-12 text-center"
          data-aos="fade-up"
        >
          <p className={`${rubikFont.className} text-sm text-gray-600`}>
            We couldn&apos;t load the latest posts right now. Please check back
            soon.
          </p>
        </div>
      ) : posts.length === 0 ? (
        <div
          className="flex w-full flex-col items-center justify-center gap-3 rounded-md border border-dashed border-gray-300 px-8 py-12 text-center"
          data-aos="fade-up"
        >
          <Newspaper size={36} className="text-custom-green" />
          <p className={`${rubikFont.className} text-sm text-gray-600`}>
            No posts yet. Check back soon for news from our work.
          </p>
        </div>
      ) : (
        <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, i) => {
            const image = resolveAssetUrl(post.image);
            return (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-lg border border-gray-200 bg-white transition-shadow duration-300 hover:shadow-lg"
                data-aos="fade-up"
                data-aos-delay={100 + i * 100}
              >
                <div className="relative h-56 w-full overflow-hidden">
                  {image ? (
                    <Image
                      src={image}
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-[#0b2f66]">
                      <Newspaper size={48} className="text-white/25" />
                    </div>
                  )}

                  <span className="absolute top-4 right-4 rounded-full bg-custom-green px-3 py-1 text-xs font-semibold tracking-wide text-white uppercase">
                    {post.category ?? "News"}
                  </span>
                </div>

                <div className="flex flex-1 flex-col justify-between px-5 pt-5 pb-4">
                  <div className="mb-4">
                    <h3
                      className={`${rubikFont.className} mb-3 text-lg leading-snug font-extrabold text-[#1a1a1a] uppercase`}
                    >
                      {post.title}
                    </h3>
                    {post.excerpt && (
                      <p
                        className={`${rubikFont.className} line-clamp-2 text-sm leading-relaxed text-gray-600`}
                      >
                        {post.excerpt}
                      </p>
                    )}
                  </div>

                  <span className="text-sm font-semibold text-custom-green transition-colors duration-200 group-hover:text-[#123f2b]">
                    Read Article <span className="ml-1">&rarr;</span>
                  </span>
                </div>

                <div className="border-t border-gray-200 px-5 py-3">
                  <span className="text-sm text-gray-500">
                    {post.date ?? "—"}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      )}

      {posts.length > 0 && (
        <div className="w-full pt-4" data-aos="fade-up" data-aos-delay="400">
          <Link
            href="/blog"
            className={`${rubikFont.className} mx-auto flex w-fit items-center gap-2 rounded-xl bg-[#0b2f66] px-8 py-4.5 text-sm font-semibold text-white transition-opacity duration-200 hover:opacity-90`}
          >
            View All Articles
            <ArrowRight size={16} />
          </Link>
        </div>
      )}
    </section>
  );
};
