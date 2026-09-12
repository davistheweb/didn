import { RefreshCw } from "lucide-react";
import type React from "react";
import { nunitoFont, rubikFont } from "@/lib/font";
import { BlogCardSkeleton } from "../blog/BlogCardSkeleton";

interface CardGridSkeletonProps {
  count?: number;
}

export const CardGridSkeleton: React.FC<CardGridSkeletonProps> = ({
  count = 3,
}) => {
  const keys = Array.from(
    { length: count },
    (_value, position) => `blog-card-skeleton-${position}`,
  );

  return (
    <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      {keys.map((key) => (
        <div key={key} className="h-full">
          <BlogCardSkeleton />
        </div>
      ))}
    </div>
  );
};

interface EmptyStateProps {
  title: string;
  description: string;
  icon: IconType;
}

export const EmptyState: React.FC<EmptyStateProps> = ({
  title,
  description,
  icon: Icon,
}) => (
  <div
    className="flex w-full flex-col items-center justify-center gap-3 rounded-md border border-dashed border-gray-300 px-8 py-14 text-center"
    data-aos="fade-up"
  >
    <Icon size={40} className="text-custom-green" />
    <h3 className={`${nunitoFont.className} text-lg font-bold text-[#1a1a1a]`}>
      {title}
    </h3>
    <p
      className={`${rubikFont.className} max-w-md text-sm leading-relaxed text-gray-600`}
    >
      {description}
    </p>
  </div>
);

interface ErrorStateProps {
  message: string;
  onRetry?: () => void;
}

export const ErrorState: React.FC<ErrorStateProps> = ({ message, onRetry }) => (
  <div
    className="flex w-full flex-col items-center justify-center gap-4 rounded-md border border-dashed border-gray-300 px-8 py-14 text-center"
    data-aos="fade-up"
  >
    <h3 className={`${nunitoFont.className} text-lg font-bold text-[#1a1a1a]`}>
      Something went wrong
    </h3>
    <p className={`${rubikFont.className} max-w-md text-sm text-gray-600`}>
      {message}
    </p>
    {onRetry && (
      <button
        type="button"
        onClick={onRetry}
        className={`${rubikFont.className} flex items-center gap-2 rounded-lg bg-custom-green px-6 py-3 font-medium text-white transition-opacity duration-200 hover:opacity-90`}
      >
        <RefreshCw size={16} />
        Try again
      </button>
    )}
  </div>
);
