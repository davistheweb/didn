"use client";

import { ArrowLeft, CalendarDays, Newspaper, UserRound } from "lucide-react";
import Link from "next/link";
import type React from "react";
import { usePost } from "@/hooks/usePost";
import { nunitoFont, poppinsFont, rubikFont } from "@/lib/font";
import type { BlogPost } from "@/services/api-types";
import { ApiImage } from "../ui/ApiImage";
import { ArticleContent } from "../ui/ArticleContent";

interface PostPageProps {
  slug: string;
  initialPost: BlogPost;
}

export const PostPage: React.FC<PostPageProps> = ({ slug, initialPost }) => {
  const { data } = usePost(slug, { initialData: initialPost });
  const post = data ?? initialPost;

  return (
    <main className="w-full overflow-x-clip">
      <section className="relative flex w-full overflow-hidden bg-[#0b2f66]">
        <div className="flex w-full flex-col gap-6 px-8 pt-28 pb-14 md:pt-36 lg:pt-44 lg:pb-20">
          <Link
            href="/blog"
            className="flex w-fit items-center gap-2 text-sm font-medium text-white/70 transition-colors duration-200 hover:text-white"
          >
            <ArrowLeft size={16} />
            Back to Blog
          </Link>

          <div className="flex flex-wrap items-center gap-3">
            {post.category && (
              <span
                className={`${rubikFont.className} rounded-full bg-custom-green px-4 py-1.5 text-xs font-semibold tracking-wide text-white uppercase`}
              >
                {post.category}
              </span>
            )}
            {post.date && (
              <span className="flex items-center gap-2 text-sm text-white/75">
                <CalendarDays size={14} />
                {post.date}
              </span>
            )}
          </div>

          <h1
            className={`${nunitoFont.className} max-w-4xl text-2xl leading-tight font-bold text-white md:text-4xl lg:text-5xl`}
          >
            {post.title}
          </h1>

          {post.author?.name && (
            <span className="flex items-center gap-2 text-sm text-white/70">
              <UserRound size={14} className="text-custom-green" />
              By {post.author.name}
            </span>
          )}
        </div>
      </section>

      <section className="flex w-full flex-col gap-8 px-8 py-15 lg:py-20">
        <div className="mx-auto w-full max-w-3xl">
          {post.image && (
            <div className="relative mb-10 aspect-[16/9] w-full overflow-hidden rounded-md">
              <ApiImage src={post.image} alt={post.title} priority />
            </div>
          )}

          <div className="flex items-center gap-3 pb-8">
            <Newspaper size={16} className="text-custom-green" />
            <span
              className={`${nunitoFont.className} text-sm font-semibold tracking-widest text-gray-500 uppercase`}
            >
              From DIDN
            </span>
          </div>

          <ArticleContent
            html={post.content}
            className={`${poppinsFont.className} max-w-none`}
          />
        </div>
      </section>
    </main>
  );
};
