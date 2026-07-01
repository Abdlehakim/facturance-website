import type { LucideIcon } from "lucide-react";

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
};
