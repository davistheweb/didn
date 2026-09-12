"use client";

import DOMPurify from "dompurify";
import type React from "react";
import { useMemo } from "react";

interface ArticleContentProps {
  html: string;
  className?: string;
}

export const ArticleContent: React.FC<ArticleContentProps> = ({
  html,
  className,
}) => {
  const clean = useMemo(() => DOMPurify.sanitize(html), [html]);

  if (!clean) return null;

  return (
    <div
      className={`article-content ${className ?? ""}`}
      // biome-ignore lint/security/noDangerouslySetInnerHtml: WYSIWYG HTML is sanitized with DOMPurify before rendering
      dangerouslySetInnerHTML={{ __html: clean }}
    />
  );
};
