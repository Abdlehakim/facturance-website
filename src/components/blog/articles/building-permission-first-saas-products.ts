import { LockKeyhole } from "lucide-react";
import type { BlogPost } from "./blog-types";

export const permissionFirstSaasPost: BlogPost = {
  slug: "building-permission-first-saas-products",
  icon: LockKeyhole,
  category: "Security",
  title: "Building permission-first SaaS products",
  description:
    "Why role boundaries, auditability, and least-privilege access should be designed early.",
  readTime: "4 min read",
  publishedAt: "2026-06-14",
  author: "Facturance Security Team",
  content: [
    {
      type: "paragraph",
      text: "Permissions are often treated as a layer added after the main product works. For business software, that creates risk. A permission-first SaaS product defines who can do what before sensitive workflows become hard to untangle.",
    },
    {
      type: "heading",
      text: "Roles are only the beginning",
    },
    {
      type: "paragraph",
      text: "RBAC gives teams understandable role templates, but real products also need permission checks around specific actions, records, company memberships, and administrative boundaries.",
    },
    {
      type: "list",
      items: [
        "Separate platform users from company users.",
        "Validate company membership on every business request.",
        "Use least-privilege defaults for new roles and new features.",
        "Log sensitive actions in an audit trail.",
      ],
    },
    {
      type: "heading",
      text: "Make authorization consistent",
    },
    {
      type: "paragraph",
      text: "Authorization should not be duplicated differently in every feature. Shared permission rules make the product easier to test and help future apps, APIs, and desktop sync use the same security language.",
    },
    {
      type: "callout",
      title: "Security habit",
      text: "Never rely on the frontend to enforce access. The backend must validate identity, company context, and permission intent for every protected action.",
    },
  ],
};
