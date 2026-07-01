import { Newspaper } from "lucide-react";
import type { BlogPost } from "./blog-types";

export const facturanceRoadmapPost: BlogPost = {
  slug: "what-we-are-building-next-for-facturance",
  icon: Newspaper,
  category: "Product updates",
  title: "What we are building next for Facturance",
  description:
    "Notes on dashboards, APIs, desktop synchronization, mobile workflows, and international expansion.",
  readTime: "3 min read",
  publishedAt: "2026-06-24",
  author: "Facturance Team",
  content: [
    {
      type: "paragraph",
      text: "Facturance is being shaped as an international business platform with SaaS, desktop, and future mobile experiences. The next product work focuses on the foundations that make that ambition reliable.",
    },
    {
      type: "heading",
      text: "The next platform priorities",
    },
    {
      type: "paragraph",
      text: "We are prioritizing architecture that supports company isolation, role-based access, desktop sync, reusable validation, and internationalization before layering on more advanced workflows.",
    },
    {
      type: "list",
      items: [
        "A stronger client dashboard foundation.",
        "A dedicated admin area for platform operations.",
        "APIs that keep client and admin data separated.",
        "Shared packages for permissions, validation, translations, and business rules.",
      ],
    },
    {
      type: "heading",
      text: "International readiness matters",
    },
    {
      type: "paragraph",
      text: "Invoices, currencies, tax rules, date formats, languages, and time zones all influence how business software feels in real operations. The platform should be ready for that complexity early.",
    },
    {
      type: "callout",
      title: "Long-term focus",
      text: "Facturance is designed to evolve deliberately: secure foundations first, polished workflows next, and expansion only when the architecture can support it.",
    },
  ],
};
