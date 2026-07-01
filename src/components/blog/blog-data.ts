import {
  Cloud,
  FileText,
  MonitorDown,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";

export const categories: { label: string; icon: LucideIcon }[] = [
  { label: "SaaS architecture", icon: Cloud },
  { label: "Finance workflows", icon: FileText },
  { label: "Permissions", icon: ShieldCheck },
  { label: "Offline desktop", icon: MonitorDown },
];

export const principles = [
  "Build reliable business workflows before adding complexity.",
  "Keep permissions, audit, and company data separation clear.",
  "Design for web, desktop, sync, and mobile from the beginning.",
];

export {
  blogPosts,
  featuredPost,
  getAllBlogPosts,
  getBlogPostBySlug,
} from "./articles";

export type { BlogContentBlock, BlogPost } from "./articles";
