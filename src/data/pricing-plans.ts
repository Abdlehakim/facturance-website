import type { LanguageCode } from "@/components/layout/site-preferences-provider";

export type PricingPlanIcon = "rocket" | "briefcase" | "chart" | "building";

export type PricingFeature = {
  text: string;
  subText?: string;
  badge?: string;
};

export type PricingPlan = {
  id: string;
  name: string;
  description: string;
  features: PricingFeature[];
  cta: string;
  href: string;
  note: string;
  icon: PricingPlanIcon;
  baseMonthlyPrice?: number;
  customPrice?: boolean;
  popular?: boolean;
};

export type PricingBenefit = {
  title: string;
  description: string;
};

export type PricingFaq = {
  question: string;
  answer: string;
};

type PricingContent = {
  plans: PricingPlan[];
  benefits: PricingBenefit[];
  faqs: PricingFaq[];
};

export const pricingContentByLanguage: Record<LanguageCode, PricingContent> = {
  en: {
    plans: [
      {
        id: "starter",
        name: "Starter",
        baseMonthlyPrice: 15,
        description: "For freelancers and small teams.",
        icon: "rocket",
        features: [
          { text: "1 company" },
          { text: "2 users" },
          { text: "Unlimited invoices" },
          { text: "Quotes" },
          { text: "Customers" },
          { text: "Products" },
          { text: "Desktop + Web access" },
          { text: "Automatic sync" },
          { text: "3 GB storage" },
          { text: "Email support" },
        ],
        cta: "Start free",
        href: "/register",
        note: "No credit card required",
      },
      {
        id: "professional",
        name: "Professional",
        baseMonthlyPrice: 29,
        description: "For growing businesses.",
        icon: "briefcase",
        popular: true,
        features: [
          { text: "1 company" },
          { text: "10 users" },
          { text: "Inventory" },
          { text: "Purchases" },
          { text: "Reports" },
          { text: "Multiple warehouses", badge: "Future" },
          { text: "API access" },
          { text: "Desktop + Web access" },
          { text: "Automatic sync" },
          { text: "25 GB storage" },
          { text: "Priority email support" },
        ],
        cta: "Start free",
        href: "/register",
        note: "No credit card required",
      },
      {
        id: "business",
        name: "Business",
        baseMonthlyPrice: 59,
        description: "For advanced teams.",
        icon: "chart",
        features: [
          { text: "3 companies" },
          { text: "25 users included" },
          { text: "100 GB storage" },
          { text: "Multiple branches" },
          { text: "Advanced permissions" },
          { text: "Audit logs" },
          { text: "Custom branding" },
          { text: "Priority support" },
          { text: "Desktop + Web access" },
          { text: "Automatic sync" },
          { text: "Fair use backups" },
        ],
        cta: "Start free",
        href: "/register",
        note: "Extra users and storage available",
      },
      {
        id: "enterprise",
        name: "Enterprise",
        customPrice: true,
        description: "For large organizations.",
        icon: "building",
        features: [
          { text: "Custom companies and users" },
          { text: "Dedicated infrastructure option" },
          { text: "Custom storage package" },
          { text: "SLA" },
          { text: "SSO" },
          { text: "Custom modules" },
          { text: "Private API" },
          { text: "Training" },
          { text: "Dedicated support" },
        ],
        cta: "Contact sales",
        href: "/contact",
        note: "Custom plans start from €149/month",
      },
    ],
    benefits: [
      {
        title: "Secure & Reliable",
        description:
          "Your data is encrypted and backed up daily to keep your business safe.",
      },
      {
        title: "Access Anywhere",
        description: "Use Facturance on web or desktop, anytime, anywhere.",
      },
      {
        title: "Always in Sync",
        description: "Automatic real-time sync across all your devices.",
      },
      {
        title: "Priority Support",
        description: "Get help when you need it from our expert team.",
      },
      {
        title: "Built to Scale",
        description: "From startups to enterprises, we grow with your business.",
      },
    ],
    faqs: [
      {
        question: "Can I change plans later?",
        answer:
          "Yes. You can upgrade or downgrade your plan as your business grows.",
      },
      {
        question: "Is there a free trial?",
        answer: "Yes. You can start free without a credit card.",
      },
      {
        question: "What happens if I exceed storage limits?",
        answer:
          "We notify you before any storage limit affects your workspace. You can upgrade your plan or add extra storage.",
      },
      {
        question: "What payment methods do you accept?",
        answer:
          "We plan to support card payments, bank transfer, and local payment options.",
      },
      {
        question: "Can I upgrade or downgrade anytime?",
        answer: "Yes. Plan changes can be managed from your account settings.",
      },
      {
        question: "Is my data secure?",
        answer:
          "Yes. Facturance is designed with encrypted access, audit logs, backups, and role-based permissions.",
      },
    ],
  },
  fr: {
    plans: [
      {
        id: "starter",
        name: "Essentiel",
        baseMonthlyPrice: 15,
        description: "Pour freelances et petites équipes.",
        icon: "rocket",
        features: [
          { text: "1 entreprise" },
          { text: "2 utilisateurs" },
          { text: "Factures illimitées" },
          { text: "Devis" },
          { text: "Clients" },
          { text: "Produits" },
          { text: "Accès desktop + web" },
          { text: "Synchronisation automatique" },
          { text: "3 Go de stockage" },
          { text: "Support par e-mail" },
        ],
        cta: "Démarrer gratuitement",
        href: "/register",
        note: "Aucune carte bancaire requise",
      },
      {
        id: "professional",
        name: "Professionnel",
        baseMonthlyPrice: 29,
        description: "Pour les entreprises en croissance.",
        icon: "briefcase",
        popular: true,
        features: [
          { text: "1 entreprise" },
          { text: "10 utilisateurs" },
          { text: "Stock" },
          { text: "Achats" },
          { text: "Rapports" },
          { text: "Entrepôts multiples", badge: "À venir" },
          { text: "Accès API" },
          { text: "Accès desktop + web" },
          { text: "Synchronisation automatique" },
          { text: "25 Go de stockage" },
          { text: "Support e-mail prioritaire" },
        ],
        cta: "Démarrer gratuitement",
        href: "/register",
        note: "Aucune carte bancaire requise",
      },
      {
        id: "business",
        name: "Avancé",
        baseMonthlyPrice: 59,
        description: "Pour les équipes avancées.",
        icon: "chart",
        features: [
          { text: "3 entreprises" },
          { text: "25 utilisateurs inclus" },
          { text: "100 Go de stockage" },
          { text: "Succursales multiples" },
          { text: "Permissions avancées" },
          { text: "Journaux d'audit" },
          { text: "Marque personnalisée" },
          { text: "Support prioritaire" },
          { text: "Accès desktop + web" },
          { text: "Synchronisation automatique" },
          { text: "Sauvegardes en usage équitable" },
        ],
        cta: "Démarrer gratuitement",
        href: "/register",
        note: "Utilisateurs et stockage supplémentaires disponibles",
      },
      {
        id: "enterprise",
        name: "Entreprise",
        customPrice: true,
        description: "Pour les grandes organisations.",
        icon: "building",
        features: [
          { text: "Entreprises et utilisateurs personnalisés" },
          { text: "Option d'infrastructure dédiée" },
          { text: "Pack de stockage personnalisé" },
          { text: "SLA" },
          { text: "SSO" },
          { text: "Modules personnalisés" },
          { text: "API privée" },
          { text: "Formation" },
          { text: "Support dédié" },
        ],
        cta: "Contacter l'équipe commerciale",
        href: "/contact",
        note: "Les forfaits personnalisés commencent à 149 €/mois",
      },
    ],
    benefits: [
      {
        title: "Sécurisé et fiable",
        description:
          "Vos données sont chiffrées et sauvegardées chaque jour pour protéger votre activité.",
      },
      {
        title: "Accès partout",
        description:
          "Utilisez Facturance sur le web ou desktop, à tout moment.",
      },
      {
        title: "Toujours synchronisé",
        description:
          "Synchronisation automatique en temps réel sur tous vos appareils.",
      },
      {
        title: "Support prioritaire",
        description:
          "Obtenez l'aide de notre équipe experte quand vous en avez besoin.",
      },
      {
        title: "Conçu pour évoluer",
        description:
          "Des startups aux grandes entreprises, nous évoluons avec votre activité.",
      },
    ],
    faqs: [
      {
        question: "Puis-je changer de forfait plus tard ?",
        answer:
          "Oui. Vous pouvez passer à un forfait supérieur ou inférieur lorsque votre entreprise évolue.",
      },
      {
        question: "Existe-t-il un essai gratuit ?",
        answer: "Oui. Vous pouvez commencer gratuitement sans carte bancaire.",
      },
      {
        question: "Que se passe-t-il si je dépasse les limites de stockage ?",
        answer:
          "Nous vous prévenons avant qu'une limite de stockage n'affecte votre espace de travail. Vous pouvez changer de forfait ou ajouter du stockage.",
      },
      {
        question: "Quels moyens de paiement acceptez-vous ?",
        answer:
          "Nous prévoyons de prendre en charge les paiements par carte, le virement bancaire et des options de paiement locales.",
      },
      {
        question: "Puis-je monter ou descendre en gamme à tout moment ?",
        answer:
          "Oui. Les changements de forfait pourront être gérés depuis les paramètres de votre compte.",
      },
      {
        question: "Mes données sont-elles sécurisées ?",
        answer:
          "Oui. Facturance est conçu avec un accès chiffré, des journaux d'audit, des sauvegardes et des permissions par rôle.",
      },
    ],
  },
  de: {
    plans: [
      {
        id: "starter",
        name: "Einstieg",
        baseMonthlyPrice: 15,
        description: "Für Freelancer und kleine Teams.",
        icon: "rocket",
        features: [
          { text: "1 Unternehmen" },
          { text: "2 Benutzer" },
          { text: "Unbegrenzte Rechnungen" },
          { text: "Angebote" },
          { text: "Kunden" },
          { text: "Produkte" },
          { text: "Desktop- und Webzugang" },
          { text: "Automatische Synchronisierung" },
          { text: "3 GB Speicher" },
          { text: "E-Mail-Support" },
        ],
        cta: "Kostenlos starten",
        href: "/register",
        note: "Keine Kreditkarte erforderlich",
      },
      {
        id: "professional",
        name: "Professionell",
        baseMonthlyPrice: 29,
        description: "Für wachsende Unternehmen.",
        icon: "briefcase",
        popular: true,
        features: [
          { text: "1 Unternehmen" },
          { text: "10 Benutzer" },
          { text: "Inventar" },
          { text: "Einkäufe" },
          { text: "Berichte" },
          { text: "Mehrere Lager", badge: "Demnächst" },
          { text: "API-Zugriff" },
          { text: "Desktop- und Webzugang" },
          { text: "Automatische Synchronisierung" },
          { text: "25 GB Speicher" },
          { text: "Priorisierter E-Mail-Support" },
        ],
        cta: "Kostenlos starten",
        href: "/register",
        note: "Keine Kreditkarte erforderlich",
      },
      {
        id: "business",
        name: "Business",
        baseMonthlyPrice: 59,
        description: "Für fortgeschrittene Teams.",
        icon: "chart",
        features: [
          { text: "3 Unternehmen" },
          { text: "25 Benutzer inklusive" },
          { text: "100 GB Speicher" },
          { text: "Mehrere Niederlassungen" },
          { text: "Erweiterte Berechtigungen" },
          { text: "Audit-Protokolle" },
          { text: "Individuelles Branding" },
          { text: "Priorisierter Support" },
          { text: "Desktop- und Webzugang" },
          { text: "Automatische Synchronisierung" },
          { text: "Backups nach Fair-Use" },
        ],
        cta: "Kostenlos starten",
        href: "/register",
        note: "Zusätzliche Benutzer und Speicher verfügbar",
      },
      {
        id: "enterprise",
        name: "Enterprise",
        customPrice: true,
        description: "Für große Organisationen.",
        icon: "building",
        features: [
          { text: "Individuelle Unternehmen und Benutzer" },
          { text: "Option für dedizierte Infrastruktur" },
          { text: "Individuelles Speicherpaket" },
          { text: "SLA" },
          { text: "SSO" },
          { text: "Individuelle Module" },
          { text: "Private API" },
          { text: "Schulung" },
          { text: "Dedizierter Support" },
        ],
        cta: "Vertrieb kontaktieren",
        href: "/contact",
        note: "Individuelle Pläne ab 149 €/Monat",
      },
    ],
    benefits: [
      {
        title: "Sicher und zuverlässig",
        description:
          "Ihre Daten werden verschlüsselt und täglich gesichert, damit Ihr Unternehmen geschützt bleibt.",
      },
      {
        title: "Überall verfügbar",
        description:
          "Nutzen Sie Facturance im Web oder auf dem Desktop, jederzeit und überall.",
      },
      {
        title: "Immer synchron",
        description:
          "Automatische Echtzeit-Synchronisierung auf all Ihren Geräten.",
      },
      {
        title: "Priorisierter Support",
        description:
          "Erhalten Sie Hilfe von unserem Expertenteam, wenn Sie sie brauchen.",
      },
      {
        title: "Für Wachstum gebaut",
        description:
          "Vom Startup bis zum Enterprise wächst Facturance mit Ihrem Unternehmen.",
      },
    ],
    faqs: [
      {
        question: "Kann ich später den Tarif wechseln?",
        answer:
          "Ja. Sie können Ihren Tarif upgraden oder downgraden, wenn Ihr Unternehmen wächst.",
      },
      {
        question: "Gibt es eine kostenlose Testphase?",
        answer:
          "Ja. Sie können kostenlos starten, ohne eine Kreditkarte anzugeben.",
      },
      {
        question: "Was passiert, wenn ich Speicherlimits überschreite?",
        answer:
          "Wir informieren Sie, bevor ein Speicherlimit Ihren Arbeitsbereich beeinflusst. Sie können den Tarif wechseln oder zusätzlichen Speicher hinzufügen.",
      },
      {
        question: "Welche Zahlungsmethoden akzeptieren Sie?",
        answer:
          "Wir planen Kartenzahlungen, Banküberweisung und lokale Zahlungsoptionen zu unterstützen.",
      },
      {
        question: "Kann ich jederzeit upgraden oder downgraden?",
        answer:
          "Ja. Tarifänderungen können in den Kontoeinstellungen verwaltet werden.",
      },
      {
        question: "Sind meine Daten sicher?",
        answer:
          "Ja. Facturance ist mit verschlüsseltem Zugriff, Audit-Protokollen, Backups und rollenbasierten Berechtigungen konzipiert.",
      },
    ],
  },
  ar: {
    plans: [
      {
        id: "starter",
        name: "البداية",
        baseMonthlyPrice: 15,
        description: "للمستقلين والفرق الصغيرة.",
        icon: "rocket",
        features: [
          { text: "شركة واحدة" },
          { text: "مستخدمان" },
          { text: "فواتير غير محدودة" },
          { text: "عروض أسعار" },
          { text: "العملاء" },
          { text: "المنتجات" },
          { text: "الوصول عبر سطح المكتب والويب" },
          { text: "مزامنة تلقائية" },
          { text: "مساحة تخزين 3 GB" },
          { text: "دعم عبر البريد الإلكتروني" },
        ],
        cta: "ابدأ مجانًا",
        href: "/register",
        note: "لا حاجة إلى بطاقة ائتمان",
      },
      {
        id: "professional",
        name: "الاحترافي",
        baseMonthlyPrice: 29,
        description: "للشركات في مرحلة النمو.",
        icon: "briefcase",
        popular: true,
        features: [
          { text: "شركة واحدة" },
          { text: "10 مستخدمين" },
          { text: "المخزون" },
          { text: "المشتريات" },
          { text: "التقارير" },
          { text: "مستودعات متعددة", badge: "قريبًا" },
          { text: "الوصول إلى API" },
          { text: "الوصول عبر سطح المكتب والويب" },
          { text: "مزامنة تلقائية" },
          { text: "مساحة تخزين 25 GB" },
          { text: "دعم بريد إلكتروني بأولوية" },
        ],
        cta: "ابدأ مجانًا",
        href: "/register",
        note: "لا حاجة إلى بطاقة ائتمان",
      },
      {
        id: "business",
        name: "الأعمال",
        baseMonthlyPrice: 59,
        description: "للفرق المتقدمة.",
        icon: "chart",
        features: [
          { text: "3 شركات" },
          { text: "25 مستخدمًا مشمولًا" },
          { text: "مساحة تخزين 100 GB" },
          { text: "فروع متعددة" },
          { text: "صلاحيات متقدمة" },
          { text: "سجلات التدقيق" },
          { text: "هوية بصرية مخصصة" },
          { text: "دعم بأولوية" },
          { text: "الوصول عبر سطح المكتب والويب" },
          { text: "مزامنة تلقائية" },
          { text: "نسخ احتياطي بسياسة استخدام عادل" },
        ],
        cta: "ابدأ مجانًا",
        href: "/register",
        note: "يتوفر مستخدمون ومساحة تخزين إضافية",
      },
      {
        id: "enterprise",
        name: "المؤسسات",
        customPrice: true,
        description: "للمؤسسات الكبيرة.",
        icon: "building",
        features: [
          { text: "شركات ومستخدمون حسب الطلب" },
          { text: "خيار بنية تحتية مخصصة" },
          { text: "باقة تخزين مخصصة" },
          { text: "SLA" },
          { text: "SSO" },
          { text: "وحدات مخصصة" },
          { text: "API خاص" },
          { text: "تدريب" },
          { text: "دعم مخصص" },
        ],
        cta: "تواصل مع المبيعات",
        href: "/contact",
        note: "تبدأ الخطط المخصصة من 149 €/شهر",
      },
    ],
    benefits: [
      {
        title: "آمن وموثوق",
        description:
          "بياناتك مشفرة ويتم نسخها احتياطيًا يوميًا للحفاظ على أمان عملك.",
      },
      {
        title: "وصول من أي مكان",
        description:
          "استخدم Facturance عبر الويب أو سطح المكتب في أي وقت ومن أي مكان.",
      },
      {
        title: "مزامنة دائمة",
        description: "مزامنة تلقائية فورية عبر جميع أجهزتك.",
      },
      {
        title: "دعم بأولوية",
        description: "احصل على المساعدة عند الحاجة من فريقنا المتخصص.",
      },
      {
        title: "مصمم للتوسع",
        description: "من الشركات الناشئة إلى المؤسسات، ننمو مع عملك.",
      },
    ],
    faqs: [
      {
        question: "هل يمكنني تغيير الخطة لاحقًا؟",
        answer:
          "نعم. يمكنك الترقية أو الرجوع إلى خطة أقل حسب نمو عملك.",
      },
      {
        question: "هل توجد تجربة مجانية؟",
        answer: "نعم. يمكنك البدء مجانًا دون بطاقة ائتمان.",
      },
      {
        question: "ماذا يحدث إذا تجاوزت حدود التخزين؟",
        answer:
          "سننبهك قبل أن يؤثر أي حد للتخزين على مساحة عملك. يمكنك ترقية خطتك أو إضافة مساحة تخزين إضافية.",
      },
      {
        question: "ما طرق الدفع التي تقبلونها؟",
        answer:
          "نخطط لدعم الدفع بالبطاقات والتحويل البنكي وخيارات الدفع المحلية.",
      },
      {
        question: "هل يمكنني الترقية أو الرجوع إلى خطة أقل في أي وقت؟",
        answer: "نعم. يمكن إدارة تغييرات الخطة من إعدادات حسابك.",
      },
      {
        question: "هل بياناتي آمنة؟",
        answer:
          "نعم. صُمم Facturance مع وصول مشفر وسجلات تدقيق ونسخ احتياطي وصلاحيات مبنية على الأدوار.",
      },
    ],
  },
};

export function getPricingPlans(language: LanguageCode) {
  return pricingContentByLanguage[language].plans;
}

export function getPricingBenefits(language: LanguageCode) {
  return pricingContentByLanguage[language].benefits;
}

export function getPricingFaqs(language: LanguageCode) {
  return pricingContentByLanguage[language].faqs;
}
