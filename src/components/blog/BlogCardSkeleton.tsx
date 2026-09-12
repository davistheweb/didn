import type React from "react";

export const BlogCardSkeleton: React.FC = () => (
  <article className="flex h-full w-full animate-pulse flex-col overflow-hidden rounded-md border border-gray-200 bg-white">
    <div className="h-56 w-full bg-gray-200" />
    <div className="flex flex-1 flex-col gap-3 px-5 pt-5">
      <div className="h-4 w-2/3 rounded bg-amber-100" />
      <div className="mt-2 h-5 w-full rounded bg-gray-200" />
      <div className="h-5 w-4/5 rounded bg-gray-200" />
    </div>
    <div className="border-t border-gray-100 px-5 py-3">
      <div className="h-4 w-28 rounded bg-gray-200" />
    </div>
  </article>
);
