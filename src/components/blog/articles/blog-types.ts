import type { LucideIcon } from "lucide-react";
import type { LanguageCode } from "@/components/layout/site-preferences-provider";

export type BlogContentBlock =
  | {
      type: "paragraph";
      text: string;
    }
  | {
      type: "heading";
      text: string;
    }
  | {
      type: "list";
      items: string[];
    }
  | {
      type: "callout";
      title: string;
      text: string;
    };

export type BlogPost = {
  slug: string;
  icon: LucideIcon;
  category: string;
  title: string;
  description: string;
  readTime: string;
  publishedAt: string;
  author: string;
  content: BlogContentBlock[];
  localized: Record<LanguageCode, LocalizedArticleContent>;
};

export type LocalizedArticleContent = {
  category: string;
  title: string;
  description: string;
  readTime: string;
  author: string;
  content: BlogContentBlock[];
};

export type LocalizedBlogPost = Omit<
  BlogPost,
  | "category"
  | "title"
  | "description"
  | "readTime"
  | "author"
  | "content"
  | "localized"
> &
  LocalizedArticleContent;
