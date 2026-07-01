import { Users } from "lucide-react";
import type { BlogPost } from "./blog-types";

export const softwareForOwnersAdminsOperatorsPost: BlogPost = {
  slug: "designing-software-for-owners-admins-operators",
  icon: Users,
  category: "Teams",
  title: "Designing software for owners, admins, and operators",
  description:
    "Business software needs different levels of access for the people who create, approve, and monitor work.",
  readTime: "4 min read",
  publishedAt: "2026-06-21",
  author: "Facturance Product Team",
  content: [
    {
      type: "paragraph",
      text: "ERP software serves people with different responsibilities. Owners want visibility, admins need control, and operators need fast workflows that do not expose unnecessary risk.",
    },
    {
      type: "heading",
      text: "Design around job responsibilities",
    },
    {
      type: "paragraph",
      text: "A workflow that feels simple for an operator may need extra review for a manager. A dashboard that helps an owner may overwhelm someone entering stock movements. Good product design respects those differences.",
    },
    {
      type: "list",
      items: [
        "Give operators focused screens for repeated actions.",
        "Give admins clear controls for users, roles, and settings.",
        "Give owners reporting and audit visibility without forcing them into operational details.",
      ],
    },
    {
      type: "heading",
      text: "Access should match accountability",
    },
    {
      type: "paragraph",
      text: "The product should make sensitive actions traceable. Approvals, discounts, deletions, exports, and permission changes all need a clear actor and timestamp.",
    },
    {
      type: "callout",
      title: "Team design",
      text: "The best business tools reduce friction while keeping responsibility visible.",
    },
  ],
};
