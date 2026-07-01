import { MonitorDown } from "lucide-react";
import type { BlogPost } from "./blog-types";

export const offlineDesktopWorkflowsPost: BlogPost = {
  slug: "why-offline-desktop-workflows-still-matter-for-erp-teams",
  icon: MonitorDown,
  category: "Desktop sync",
  title: "Why offline desktop workflows still matter for ERP teams",
  description:
    "Modern SaaS is powerful, but some teams still need reliable desktop continuity when internet access is unstable.",
  readTime: "5 min read",
  publishedAt: "2026-06-12",
  author: "Facturance Engineering",
  content: [
    {
      type: "paragraph",
      text: "Cloud software is the right source of truth for modern ERP systems, but not every business workflow can pause when a connection drops. Retail counters, warehouses, accountants, and field teams often need to keep working during network interruptions.",
    },
    {
      type: "heading",
      text: "Offline mode is a product feature, not a fallback",
    },
    {
      type: "paragraph",
      text: "A serious desktop experience should make offline behavior understandable. Users need to know what is saved locally, what is waiting to sync, and whether a record has been accepted by the cloud source of truth.",
    },
    {
      type: "list",
      items: [
        "Use a local SQLite cache for desktop continuity.",
        "Queue writes locally with clear sync states.",
        "Reconcile changes against the cloud database when connectivity returns.",
        "Make conflicts visible instead of silently overwriting business data.",
      ],
    },
    {
      type: "heading",
      text: "Design the sync lifecycle early",
    },
    {
      type: "paragraph",
      text: "Synchronization touches identity, permissions, timestamps, validation, conflict handling, and user trust. Treating it as a core architecture concern prevents fragile edge cases from spreading through the product.",
    },
    {
      type: "callout",
      title: "Desktop rule",
      text: "Offline workflows should feel intentional, traceable, and reversible. The user should always understand what has synced and what still needs attention.",
    },
  ],
};
