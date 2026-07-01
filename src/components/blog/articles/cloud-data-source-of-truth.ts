import { Database } from "lucide-react";
import type { BlogPost } from "./blog-types";

export const cloudDataSourceOfTruthPost: BlogPost = {
  slug: "cloud-data-source-of-truth",
  icon: Database,
  category: "Data model",
  title: "How to think about cloud data as the source of truth",
  description:
    "A clean backend foundation helps invoices, users, companies, and sync flows grow without chaos.",
  readTime: "7 min read",
  publishedAt: "2026-06-18",
  author: "Facturance Engineering",
  content: [
    {
      type: "paragraph",
      text: "In a platform that supports web, desktop, mobile, and APIs, the cloud database must remain the source of truth. Local caches and client state are useful, but they should always reconcile back to the canonical backend model.",
    },
    {
      type: "heading",
      text: "Model the core business objects carefully",
    },
    {
      type: "paragraph",
      text: "Invoices, customers, products, users, companies, permissions, and audit records should have clear ownership and lifecycle rules. Good data modeling reduces ambiguity in reporting, sync, and future integrations.",
    },
    {
      type: "list",
      items: [
        "Use PostgreSQL for canonical cloud data.",
        "Use migrations for every schema change.",
        "Prefer soft deletion for business records that may appear in reports.",
        "Add audit fields consistently across important tables.",
      ],
    },
    {
      type: "heading",
      text: "Local data should be treated as a cache",
    },
    {
      type: "paragraph",
      text: "Desktop SQLite data should support offline work, not become a separate truth. Sync logic should preserve cloud validation, conflict handling, and version tracking.",
    },
    {
      type: "callout",
      title: "Architecture anchor",
      text: "When every client agrees that the cloud model is canonical, new apps can join the platform without inventing different business rules.",
    },
  ],
};
