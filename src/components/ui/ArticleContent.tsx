"use client";

import DOMPurify from "dompurify";
import type React from "react";
import { useMemo } from "react";

interface ArticleContentProps {
  html: string;
  className?: string;
}

let sanitizer: ReturnType<typeof DOMPurify> | null = null;

function getSanitizer(): ReturnType<typeof DOMPurify> | null {
  if (sanitizer === null && typeof window !== "undefined") {
    sanitizer = DOMPurify(window);
  }
  return sanitizer;
}

export const ArticleContent: React.FC<ArticleContentProps> = ({
  html,
  className,
}) => {
  const clean = useMemo(() => getSanitizer()?.sanitize(html) ?? html, [html]);

  if (!clean) return null;

  return (
    <div
      className={`article-content ${className ?? ""}`}
      // biome-ignore lint/security/noDangerouslySetInnerHtml: sanitized with DOMPurify before rendering
      dangerouslySetInnerHTML={{ __html: clean }}
    />
  );
};
