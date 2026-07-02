import {
  Cloud,
  FileText,
  MonitorDown,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";

export const categories: { icon: LucideIcon }[] = [
  { icon: Cloud },
  { icon: FileText },
  { icon: ShieldCheck },
  { icon: MonitorDown },
];

export {
  blogPosts,
  featuredPost,
  getAllBlogPosts,
  getBlogPostBySlug,
  getLocalizedBlogPostBySlug,
  getLocalizedBlogPosts,
  localizeBlogPost,
} from "./articles";

export type { BlogContentBlock, BlogPost, LocalizedBlogPost } from "./articles";
