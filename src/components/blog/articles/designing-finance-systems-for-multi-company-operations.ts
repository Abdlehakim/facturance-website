import { Building2 } from "lucide-react";
import type { BlogPost } from "./blog-types";

export const designingFinanceSystemsPost: BlogPost = {
  slug: "designing-finance-systems-for-multi-company-operations",
  icon: Building2,
  category: "Architecture",
  title: "Designing finance systems for multi-company operations",
  description:
    "A practical look at company isolation, shared users, permissions, and document ownership.",
  readTime: "6 min read",
  publishedAt: "2026-06-10",
  author: "Facturance Product Team",
  content: [
    {
      type: "paragraph",
      text: "Finance software becomes difficult to scale when company boundaries are added late. A multi-company platform needs to treat company context as a first-class part of every workflow, from invoices and inventory to approvals and audit history.",
    },
    {
      type: "heading",
      text: "Start with company isolation",
    },
    {
      type: "paragraph",
      text: "Every business record should belong to a company. That includes documents, customers, products, settings, reports, and operational history. This rule gives the product a clear security model and keeps reporting predictable as customers grow into multiple branches or legal entities.",
    },
    {
      type: "list",
      items: [
        "Require company context before reading or writing business data.",
        "Keep platform administration data separate from company-owned records.",
        "Design shared users and memberships explicitly instead of assuming one user belongs to one company forever.",
      ],
    },
    {
      type: "heading",
      text: "Permissions should follow the workflow",
    },
    {
      type: "paragraph",
      text: "Roles are useful, but the product should also understand the action being performed. Creating an invoice, approving a discount, viewing financial reports, and managing company settings are different permissions even when they happen in the same dashboard.",
    },
    {
      type: "callout",
      title: "Product principle",
      text: "A finance platform is easier to trust when data ownership, permissions, and audit trails are visible in the architecture from the beginning.",
    },
  ],
};
