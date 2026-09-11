import type React from "react";
import { blogs } from "@/data";
import { nunitoFont, rubikFont } from "@/lib/font";
import { BlogCard } from "../ui/Blogcard";
import { Headline } from "../ui/Headline";

export const BlogSection: React.FC = () => {
  return (
    <section className="flex w-full flex-col items-start gap-8 px-8 py-15">
      <div>
        <Headline heading="/ FROM DIDN" title="Stories From the Work" />
      </div>

      <div className="flex w-full flex-col items-center justify-center gap-4">
        <h1
          className={`w-full text-center text-xl font-medium md:text-3xl ${nunitoFont.className}`}
        >
          Blogs
        </h1>

        <p className={`${rubikFont.className} text-center md:w-137.5`}>
          Stay connected with the latest updates, stories, events, and
          activities from Direct Impact Development Network
        </p>
      </div>

      <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog, _i) => (
          <BlogCard key={_i} blog={blog} />
        ))}
      </div>
    </section>
  );
};
