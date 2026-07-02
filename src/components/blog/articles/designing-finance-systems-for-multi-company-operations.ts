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
  localized: {
    en: {
      category: "Architecture",
      title: "Designing finance systems for multi-company operations",
      description:
        "A practical look at company isolation, shared users, permissions, and document ownership.",
      readTime: "6 min read",
      author: "Facturance Product Team",
      content: [
        {
          type: "paragraph",
          text: "Finance software becomes difficult to scale when company boundaries are added late. A multi-company platform needs to treat company context as a first-class part of every workflow, from invoices and inventory to approvals and audit history.",
        },
        { type: "heading", text: "Start with company isolation" },
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
        { type: "heading", text: "Permissions should follow the workflow" },
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
    },
    fr: {
      category: "Architecture",
      title:
        "Concevoir des systèmes financiers pour des opérations multi-entreprises",
      description:
        "Un regard pratique sur l'isolation des entreprises, les utilisateurs partagés, les permissions et la propriété des documents.",
      readTime: "6 min de lecture",
      author: "Équipe produit Facturance",
      content: [
        {
          type: "paragraph",
          text: "Un logiciel financier devient difficile à faire évoluer lorsque les frontières entre entreprises sont ajoutées trop tard. Une plateforme multi-entreprise doit traiter le contexte d'entreprise comme une partie essentielle de chaque workflow, des factures et du stock aux validations et à l'historique d'audit.",
        },
        { type: "heading", text: "Commencer par l'isolation des entreprises" },
        {
          type: "paragraph",
          text: "Chaque enregistrement métier doit appartenir à une entreprise. Cela inclut les documents, clients, produits, paramètres, rapports et historiques opérationnels. Cette règle donne au produit un modèle de sécurité clair et rend le reporting prévisible lorsque les clients évoluent vers plusieurs branches ou entités juridiques.",
        },
        {
          type: "list",
          items: [
            "Exiger le contexte d'entreprise avant de lire ou écrire des données métier.",
            "Séparer les données d'administration de la plateforme des enregistrements appartenant à une entreprise.",
            "Concevoir explicitement les utilisateurs partagés et les adhésions plutôt que de supposer qu'un utilisateur appartient toujours à une seule entreprise.",
          ],
        },
        { type: "heading", text: "Les permissions doivent suivre le workflow" },
        {
          type: "paragraph",
          text: "Les rôles sont utiles, mais le produit doit aussi comprendre l'action effectuée. Créer une facture, approuver une remise, consulter des rapports financiers et gérer les paramètres d'entreprise sont des permissions différentes, même lorsqu'elles se trouvent dans le même tableau de bord.",
        },
        {
          type: "callout",
          title: "Principe produit",
          text: "Une plateforme financière inspire davantage confiance lorsque la propriété des données, les permissions et les pistes d'audit sont visibles dans l'architecture dès le départ.",
        },
      ],
    },
    de: {
      category: "Architektur",
      title:
        "Finanzsysteme für Abläufe mit mehreren Unternehmen entwerfen",
      description:
        "Ein praktischer Blick auf Unternehmensisolation, gemeinsame Benutzer, Berechtigungen und Dokumenteigentum.",
      readTime: "6 Min. Lesezeit",
      author: "Facturance Produktteam",
      content: [
        {
          type: "paragraph",
          text: "Finanzsoftware lässt sich schwer skalieren, wenn Unternehmensgrenzen erst spät ergänzt werden. Eine Multi-Company-Plattform muss den Unternehmenskontext als festen Bestandteil jedes Workflows behandeln, von Rechnungen und Inventar bis zu Freigaben und Audit-Historie.",
        },
        { type: "heading", text: "Mit Unternehmensisolation beginnen" },
        {
          type: "paragraph",
          text: "Jeder Geschäftsdatensatz sollte zu einem Unternehmen gehören. Dazu zählen Dokumente, Kunden, Produkte, Einstellungen, Berichte und operative Historie. Diese Regel schafft ein klares Sicherheitsmodell und hält Reporting vorhersehbar, wenn Kunden in mehrere Niederlassungen oder Rechtseinheiten wachsen.",
        },
        {
          type: "list",
          items: [
            "Unternehmenskontext vor jedem Lesen oder Schreiben von Geschäftsdaten verlangen.",
            "Plattform-Administrationsdaten von unternehmenseigenen Datensätzen trennen.",
            "Gemeinsame Benutzer und Mitgliedschaften explizit modellieren, statt anzunehmen, dass ein Benutzer dauerhaft zu nur einem Unternehmen gehört.",
          ],
        },
        { type: "heading", text: "Berechtigungen sollten dem Workflow folgen" },
        {
          type: "paragraph",
          text: "Rollen sind nützlich, aber das Produkt sollte auch die konkrete Aktion verstehen. Eine Rechnung erstellen, einen Rabatt freigeben, Finanzberichte ansehen und Unternehmenseinstellungen verwalten sind unterschiedliche Berechtigungen, auch wenn sie im selben Dashboard stattfinden.",
        },
        {
          type: "callout",
          title: "Produktprinzip",
          text: "Eine Finanzplattform ist vertrauenswürdiger, wenn Dateneigentum, Berechtigungen und Audit-Spuren von Anfang an in der Architektur sichtbar sind.",
        },
      ],
    },
    ar: {
      category: "البنية",
      title: "تصميم أنظمة مالية لعمليات متعددة الشركات",
      description:
        "نظرة عملية على عزل الشركات والمستخدمين المشتركين والصلاحيات وملكية المستندات.",
      readTime: "قراءة 6 دقائق",
      author: "فريق منتج Facturance",
      content: [
        {
          type: "paragraph",
          text: "تصبح البرمجيات المالية صعبة التوسع عندما تُضاف حدود الشركات في وقت متأخر. تحتاج المنصة متعددة الشركات إلى التعامل مع سياق الشركة كجزء أساسي من كل سير عمل، من الفواتير والمخزون إلى الموافقات وسجل التدقيق.",
        },
        { type: "heading", text: "ابدأ بعزل الشركات" },
        {
          type: "paragraph",
          text: "يجب أن ينتمي كل سجل تجاري إلى شركة. يشمل ذلك المستندات والعملاء والمنتجات والإعدادات والتقارير والسجل التشغيلي. تمنح هذه القاعدة المنتج نموذج أمان واضحًا وتجعل التقارير قابلة للتوقع عند توسع العملاء إلى فروع أو كيانات قانونية متعددة.",
        },
        {
          type: "list",
          items: [
            "اشترط سياق الشركة قبل قراءة بيانات الأعمال أو كتابتها.",
            "افصل بيانات إدارة المنصة عن السجلات المملوكة للشركات.",
            "صمّم المستخدمين المشتركين والعضويات بوضوح بدل افتراض أن المستخدم ينتمي إلى شركة واحدة دائمًا.",
          ],
        },
        { type: "heading", text: "يجب أن تتبع الصلاحيات سير العمل" },
        {
          type: "paragraph",
          text: "الأدوار مفيدة، لكن يجب أن يفهم المنتج أيضًا الإجراء الذي يتم تنفيذه. إنشاء فاتورة أو اعتماد خصم أو عرض التقارير المالية أو إدارة إعدادات الشركة هي صلاحيات مختلفة حتى لو حدثت داخل لوحة التحكم نفسها.",
        },
        {
          type: "callout",
          title: "مبدأ المنتج",
          text: "تصبح المنصة المالية أسهل في الوثوق عندما تكون ملكية البيانات والصلاحيات وسجلات التدقيق واضحة في البنية منذ البداية.",
        },
      ],
    },
  },
};
