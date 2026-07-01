import { permissionFirstSaasPost } from "./building-permission-first-saas-products";
import { cloudDataSourceOfTruthPost } from "./cloud-data-source-of-truth";
import { designingFinanceSystemsPost } from "./designing-finance-systems-for-multi-company-operations";
import { softwareForOwnersAdminsOperatorsPost } from "./designing-software-for-owners-admins-operators";
import { facturanceRoadmapPost } from "./what-we-are-building-next-for-facturance";
import { offlineDesktopWorkflowsPost } from "./why-offline-desktop-workflows-still-matter-for-erp-teams";
import type { BlogPost } from "./blog-types";

export const blogPosts: BlogPost[] = [
  designingFinanceSystemsPost,
  offlineDesktopWorkflowsPost,
  permissionFirstSaasPost,
  cloudDataSourceOfTruthPost,
  softwareForOwnersAdminsOperatorsPost,
  facturanceRoadmapPost,
];

export const featuredPost = designingFinanceSystemsPost;

export function getAllBlogPosts() {
  return blogPosts;
}

export function getBlogPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

export type { BlogContentBlock, BlogPost } from "./blog-types";
