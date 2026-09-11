import Image from "next/image";
import Link from "next/link";
import type React from "react";

interface BlogCardProps {
  blog: IBlog;
}

export const BlogCard: React.FC<BlogCardProps> = ({ blog }) => {
  const { title, category, image, date, href } = blog;

  return (
    <article className="group flex w-full flex-col overflow-hidden rounded-md border border-gray-200 bg-white transition-shadow duration-300 hover:shadow-lg">
      <div className="relative h-56 w-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        <span className="absolute top-4 right-4 rounded-full bg-custom-green px-3 py-1 text-xs font-semibold tracking-wide text-white uppercase">
          {category}
        </span>
      </div>

      <div className="flex flex-1 flex-col justify-between px-5 pt-5">
        <h3 className="mb-4 text-lg leading-snug font-extrabold text-[#1a1a1a] uppercase">
          {title}
        </h3>

        <Link
          href={href}
          className="mb-4 text-sm font-semibold text-custom-green transition-colors duration-200 hover:text-[#123f2b]"
        >
          READ MORE »
        </Link>
      </div>

      <div className="border-t border-gray-200 px-5 py-3">
        <span className="text-sm text-gray-500">{date}</span>
      </div>
    </article>
  );
};
