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
  localized: {
    en: {
      category: "Product updates",
      title: "What we are building next for Facturance",
      description:
        "Notes on dashboards, APIs, desktop synchronization, mobile workflows, and international expansion.",
      readTime: "3 min read",
      author: "Facturance Team",
      content: [
        {
          type: "paragraph",
          text: "Facturance is being shaped as an international business platform with SaaS, desktop, and future mobile experiences. The next product work focuses on the foundations that make that ambition reliable.",
        },
        { type: "heading", text: "The next platform priorities" },
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
        { type: "heading", text: "International readiness matters" },
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
    },
    fr: {
      category: "Actualités produit",
      title: "Ce que nous construisons ensuite pour Facturance",
      description:
        "Notes sur les tableaux de bord, API, synchronisation desktop, workflows mobiles et expansion internationale.",
      readTime: "3 min de lecture",
      author: "Équipe Facturance",
      content: [
        {
          type: "paragraph",
          text: "Facturance est façonné comme une plateforme métier internationale avec des expériences SaaS, desktop et futures mobiles. Le prochain travail produit se concentre sur les fondations qui rendent cette ambition fiable.",
        },
        { type: "heading", text: "Les prochaines priorités de la plateforme" },
        {
          type: "paragraph",
          text: "Nous priorisons une architecture qui prend en charge l'isolation des entreprises, l'accès par rôles, la synchronisation desktop, la validation réutilisable et l'internationalisation avant d'ajouter des workflows plus avancés.",
        },
        {
          type: "list",
          items: [
            "Une base plus solide pour le tableau de bord client.",
            "Un espace admin dédié aux opérations de plateforme.",
            "Des API qui gardent les données client et admin séparées.",
            "Des packages partagés pour permissions, validation, traductions et règles métier.",
          ],
        },
        { type: "heading", text: "La préparation internationale compte" },
        {
          type: "paragraph",
          text: "Factures, devises, règles fiscales, formats de date, langues et fuseaux horaires influencent tous la façon dont un logiciel métier se ressent en opérations réelles. La plateforme doit être prête tôt pour cette complexité.",
        },
        {
          type: "callout",
          title: "Vision long terme",
          text: "Facturance est conçu pour évoluer délibérément : fondations sécurisées d'abord, workflows soignés ensuite, puis expansion seulement lorsque l'architecture peut la soutenir.",
        },
      ],
    },
    de: {
      category: "Produktupdates",
      title: "Was wir als Nächstes für Facturance bauen",
      description:
        "Notizen zu Dashboards, APIs, Desktop-Synchronisierung, mobilen Workflows und internationaler Expansion.",
      readTime: "3 Min. Lesezeit",
      author: "Facturance Team",
      content: [
        {
          type: "paragraph",
          text: "Facturance wird als internationale Business-Plattform mit SaaS-, Desktop- und künftigen mobilen Erfahrungen gestaltet. Die nächste Produktarbeit konzentriert sich auf Grundlagen, die diese Ambition zuverlässig machen.",
        },
        { type: "heading", text: "Die nächsten Plattformprioritäten" },
        {
          type: "paragraph",
          text: "Wir priorisieren Architektur für Unternehmensisolation, rollenbasierten Zugriff, Desktop-Sync, wiederverwendbare Validierung und Internationalisierung, bevor fortgeschrittenere Workflows hinzukommen.",
        },
        {
          type: "list",
          items: [
            "Eine stärkere Grundlage für das Client-Dashboard.",
            "Ein dedizierter Admin-Bereich für Plattformbetrieb.",
            "APIs, die Client- und Admin-Daten getrennt halten.",
            "Gemeinsame Pakete für Berechtigungen, Validierung, Übersetzungen und Geschäftsregeln.",
          ],
        },
        { type: "heading", text: "Internationale Bereitschaft zählt" },
        {
          type: "paragraph",
          text: "Rechnungen, Währungen, Steuerregeln, Datumsformate, Sprachen und Zeitzonen beeinflussen, wie sich Business-Software im echten Betrieb anfühlt. Die Plattform sollte früh für diese Komplexität bereit sein.",
        },
        {
          type: "callout",
          title: "Langfristiger Fokus",
          text: "Facturance ist darauf ausgelegt, bewusst zu wachsen: zuerst sichere Grundlagen, dann polierte Workflows und Expansion erst, wenn die Architektur sie tragen kann.",
        },
      ],
    },
    ar: {
      category: "تحديثات المنتج",
      title: "ما الذي نبنيه بعد ذلك لـ Facturance",
      description:
        "ملاحظات حول لوحات التحكم وواجهات API ومزامنة سطح المكتب وسير العمل الجوال والتوسع الدولي.",
      readTime: "قراءة 3 دقائق",
      author: "فريق Facturance",
      content: [
        {
          type: "paragraph",
          text: "يتم تشكيل Facturance كمنصة أعمال دولية مع تجارب SaaS وسطح مكتب وتجارب جوال مستقبلية. يركز العمل القادم على الأسس التي تجعل هذا الطموح موثوقًا.",
        },
        { type: "heading", text: "أولويات المنصة التالية" },
        {
          type: "paragraph",
          text: "نعطي الأولوية لبنية تدعم عزل الشركات والوصول القائم على الأدوار ومزامنة سطح المكتب والتحقق القابل لإعادة الاستخدام والتدويل قبل إضافة سير عمل أكثر تقدمًا.",
        },
        {
          type: "list",
          items: [
            "أساس أقوى للوحة تحكم العملاء.",
            "منطقة إدارة مخصصة لعمليات المنصة.",
            "واجهات API تحافظ على فصل بيانات العميل والإدارة.",
            "حزم مشتركة للصلاحيات والتحقق والترجمات وقواعد الأعمال.",
          ],
        },
        { type: "heading", text: "الجاهزية الدولية مهمة" },
        {
          type: "paragraph",
          text: "الفواتير والعملات وقواعد الضرائب وتنسيقات التاريخ واللغات والمناطق الزمنية تؤثر جميعها على إحساس برمجيات الأعمال في العمليات الواقعية. يجب أن تكون المنصة جاهزة لهذا التعقيد مبكرًا.",
        },
        {
          type: "callout",
          title: "تركيز طويل المدى",
          text: "صُمم Facturance ليتطور بتأنٍ: أسس آمنة أولًا، ثم سير عمل مصقول، ثم توسع عندما تستطيع البنية دعمه.",
        },
      ],
    },
  },
};
