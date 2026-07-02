import type { LanguageCode } from "@/components/layout/site-preferences-provider";

type TextPair = {
  title: string;
  description: string;
};

type BadgeText = {
  badge: string;
  title: string;
  description: string;
};

export type TranslationDictionary = {
  common: {
    home: string;
    pricing: string;
    blog: string;
    contact: string;
    login: string;
    register: string;
    startFree: string;
    createAccount: string;
    viewPricing: string;
    bookDemo: string;
    email: string;
    whatsapp: string;
    phone: string;
    website: string;
    sendEmail: string;
    sendMessage: string;
    contactSupport: string;
    learnMore: string;
  };
  topBar: {
    annualBillingPrefix: string;
    annualBillingDiscount: string;
    annualBillingSuffix: string;
    preferences: string;
    chooseLanguage: string;
    chooseCurrency: string;
    closePreferencesMenu: string;
    close: string;
    selectLanguage: string;
    selectCurrency: string;
  };
  nav: {
    home: string;
    pricing: string;
    blog: string;
    contact: string;
    login: string;
    startFree: string;
    primaryNavigation: string;
    openNavigation: string;
    closeNavigation: string;
    mobileNavigation: string;
    homeAria: string;
  };
  footer: {
    description: string;
    product: string;
    company: string;
    needHelp: string;
    needHelpDescription: string;
    rights: string;
    secondaryLinks: string;
  };
  home: {
    hero: {
      badge: string;
      title: string;
      description: string;
      primaryCta: string;
      secondaryCta: string;
      imageAlt: string;
      stats: Array<{ label: string; value: string }>;
      trustItems: string[];
    };
    trustBar: {
      items: TextPair[];
    };
    platform: {
      badge: string;
      title: string;
      description: string;
      growthBadge: string;
      growthTitle: string;
      foundationPoints: string[];
      modules: Array<TextPair & { label: string }>;
      architectureBadge: string;
      architectureTitle: string;
      architectureItems: string[];
    };
    workflow: {
      badge: string;
      title: string;
      description: string;
      cardTitle: string;
      cardDescription: string;
      steps: TextPair[];
    };
    cta: {
      imageAlt: string;
      badge: string;
      title: string;
      highlight: string;
      description: string;
      button: string;
      checks: string[];
      featureCards: TextPair[];
    };
  };
  contact: {
    hero: BadgeText & {
      whatsappButton: string;
      emailButton: string;
    };
    methods: Array<{ label: string; description: string }>;
    details: BadgeText;
    quickInfo: Array<{ label: string; value: string }>;
    form: {
      badge: string;
      title: string;
      description: string;
      labels: {
        name: string;
        email: string;
        phone: string;
        company: string;
        topic: string;
        message: string;
      };
      placeholders: {
        name: string;
        email: string;
        phone: string;
        company: string;
        topic: string;
        message: string;
      };
      topicOptions: Array<{ value: string; label: string }>;
      submit: string;
      visualNote: string;
    };
    support: {
      badge: string;
      title: string;
      discussionBadge: string;
      topics: string[];
      trustCards: TextPair[];
    };
    bottomCta: {
      badge: string;
      title: string;
      description: string;
      whatsapp: string;
      email: string;
    };
  };
  blog: {
    hero: BadgeText & {
      featured: string;
      readArticle: string;
    };
    categories: {
      items: string[];
    };
    posts: {
      badge: string;
      title: string;
      suggestTopic: string;
      read: string;
    };
    principles: BadgeText & {
      items: string[];
    };
    cta: {
      badge: string;
      title: string;
      description: string;
      button: string;
    };
    detail: {
      backToBlog: string;
      moreArticlesBadge: string;
      moreArticlesTitle: string;
      moreArticlesButton: string;
      read: string;
      ctaBadge: string;
      ctaTitle: string;
      ctaDescription: string;
      ctaPrimary: string;
      ctaSecondary: string;
      notFoundTitle: string;
    };
  };
  auth: {
    login: {
      badge: string;
      title: string;
      description: string;
      emailLabel: string;
      emailPlaceholder: string;
      passwordLabel: string;
      passwordPlaceholder: string;
      button: string;
      helperText: string;
      registerLink: string;
    };
    register: {
      badge: string;
      title: string;
      description: string;
      companyLabel: string;
      companyPlaceholder: string;
      emailLabel: string;
      emailPlaceholder: string;
      passwordLabel: string;
      passwordPlaceholder: string;
      button: string;
      helperText: string;
      loginLink: string;
    };
  };
  pricing: {
    badge: string;
    title: string;
    titleHighlight: string;
    description: string;
    payMonthly: string;
    payYearly: string;
    saveUpTo: string;
    monthSuffix: string;
    customPrice: string;
    billedYearly: string;
    billingToggleAria: string;
    tailoredToNeeds: string;
    mostPopular: string;
    future: string;
    faqTitle: string;
    ctaTitle: string;
    ctaDescription: string;
    ctaPrimary: string;
    ctaSecondary: string;
    ctaChecks: string[];
    ctaImageAlt: string;
  };
};

export const translations: Record<LanguageCode, TranslationDictionary> = {
  en: {
    common: {
      home: "Home",
      pricing: "Pricing",
      blog: "Blog",
      contact: "Contact",
      login: "Login",
      register: "Register",
      startFree: "Start free",
      createAccount: "Create account",
      viewPricing: "View pricing",
      bookDemo: "Book a demo",
      email: "Email",
      whatsapp: "WhatsApp",
      phone: "Phone",
      website: "Website",
      sendEmail: "Send email",
      sendMessage: "Send message",
      contactSupport: "Contact support",
      learnMore: "Learn more",
    },
    topBar: {
      annualBillingPrefix: "Save up to",
      annualBillingDiscount: "20%",
      annualBillingSuffix: "with annual billing",
      preferences: "Preferences",
      chooseLanguage: "Choose language",
      chooseCurrency: "Choose currency",
      closePreferencesMenu: "Close preferences menu",
      close: "Close",
      selectLanguage: "Select language",
      selectCurrency: "Select currency",
    },
    nav: {
      home: "Home",
      pricing: "Pricing",
      blog: "Blog",
      contact: "Contact",
      login: "Login",
      startFree: "Start free",
      primaryNavigation: "Primary navigation",
      openNavigation: "Open navigation menu",
      closeNavigation: "Close navigation menu",
      mobileNavigation: "Mobile navigation",
      homeAria: "Facturance home",
    },
    footer: {
      description:
        "A modern ERP and invoicing platform for multi-company teams, international operations, and offline-ready desktop workflows.",
      product: "Product",
      company: "Company",
      needHelp: "Need help?",
      needHelpDescription:
        "Have a question about pricing, onboarding, or Facturance features? Contact us anytime.",
      rights: "All rights reserved.",
      secondaryLinks: "Footer links",
    },
    home: {
      hero: {
        badge: "SaaS, desktop, and mobile ready",
        title: "Run your business from one clean finance platform.",
        description:
          "Facturance helps teams manage invoices, companies, roles, inventory, payments, and offline desktop workflows with a modern cloud-ready foundation.",
        primaryCta: "Create account",
        secondaryCta: "View pricing",
        imageAlt: "Facturance dashboard preview",
        stats: [
          { label: "Companies", value: "Multi" },
          { label: "Documents", value: "12+" },
          { label: "Mode", value: "Cloud +" },
        ],
        trustItems: ["No credit card required", "Setup in minutes"],
      },
      trustBar: {
        items: [
          {
            title: "Multi-company",
            description: "Separate companies, users, settings, and documents.",
          },
          {
            title: "RBAC ready",
            description: "Permission-first structure for controlled access.",
          },
          {
            title: "Offline desktop",
            description: "Desktop continuity when the network is unreliable.",
          },
          {
            title: "Internationalized",
            description: "Prepared for currencies, languages, and markets.",
          },
        ],
      },
      platform: {
        badge: "Platform foundation",
        title: "Built for a serious multi-company ERP future.",
        description:
          "Start with invoicing and grow toward cloud dashboards, desktop synchronization, inventory, payments, admin controls, and future mobile workflows.",
        growthBadge: "Growth-ready",
        growthTitle: "One platform, many workflows",
        foundationPoints: [
          "Cloud source of truth",
          "Offline desktop continuity",
          "Permission-first architecture",
        ],
        modules: [
          {
            label: "Documents",
            title: "Invoices and quotes",
            description:
              "Create invoices, quotes, delivery notes, orders, and purchase documents.",
          },
          {
            label: "Inventory",
            title: "Inventory operations",
            description:
              "Track articles, stock movements, warehouses, purchases, and sales impact.",
          },
          {
            label: "Finance",
            title: "Payments and treasury",
            description:
              "Follow payments, customer balances, due amounts, and cash movement.",
          },
          {
            label: "Data",
            title: "Cloud business data",
            description:
              "Centralize company, user, invoice, audit, and sync data securely.",
          },
          {
            label: "Teams",
            title: "Team collaboration",
            description:
              "Invite users, assign roles, and separate company-level responsibilities.",
          },
          {
            label: "Devices",
            title: "Web, desktop, and mobile",
            description:
              "Start with web, then extend to desktop sync and future mobile apps.",
          },
        ],
        architectureBadge: "Architecture direction",
        architectureTitle:
          "From invoicing software to complete business platform.",
        architectureItems: ["Cloud core", "Secure access", "Multi-device"],
      },
      workflow: {
        badge: "Operating model",
        title: "A simple path from setup to synchronized operations.",
        description:
          "Facturance is structured so public website, dashboards, APIs, desktop, mobile, sync, and shared business rules can grow cleanly.",
        cardTitle: "Designed to grow step by step",
        cardDescription:
          "Start simple, then add advanced dashboards, APIs, desktop synchronization, and mobile workflows without rebuilding the foundation.",
        steps: [
          {
            title: "Create companies and invite teams",
            description:
              "Start with a clean company structure and invite the people who need access.",
          },
          {
            title: "Assign roles and permissions",
            description:
              "Control what each user can view, create, edit, approve, or manage.",
          },
          {
            title: "Issue invoices and manage operations",
            description:
              "Run daily invoicing, customers, products, payments, and inventory workflows.",
          },
          {
            title: "Sync desktop work back to the cloud",
            description:
              "Keep offline desktop operations connected to the central business platform.",
          },
        ],
      },
      cta: {
        imageAlt: "Facturance dashboard preview on desktop and mobile",
        badge: "Ready for launch",
        title: "Start shaping your finance platform with",
        highlight: "Facturance.",
        description:
          "Launch with a premium public website now, then grow into dashboards, APIs, desktop sync, and mobile workflows with a stable foundation.",
        button: "Talk to us",
        checks: ["No credit card required", "Setup in minutes", "Built to scale"],
        featureCards: [
          {
            title: "Secure by design",
            description: "Enterprise-grade security for your business data.",
          },
          {
            title: "Cloud & offline ready",
            description: "Work online or offline. We keep everything in sync.",
          },
          {
            title: "Built for growth",
            description:
              "From startups to large teams, Facturance grows with you.",
          },
          {
            title: "Modern & fast",
            description:
              "A fast, reliable, and intuitive experience for your team.",
          },
        ],
      },
    },
    contact: {
      hero: {
        badge: "Contact Facturance",
        title: "Build your finance platform with a clear path.",
        description:
          "Tell us what you are planning and the Facturance team will help you evaluate the right starting point for your business, platform, or workflow.",
        whatsappButton: "WhatsApp us",
        emailButton: "Send email",
      },
      methods: [
        {
          label: "Email",
          description: "For product questions, demos, and partnerships.",
        },
        {
          label: "WhatsApp",
          description: "Fast contact for direct discussion and follow-up.",
        },
        {
          label: "Phone",
          description: "Call us for urgent business inquiries.",
        },
        {
          label: "Website",
          description: "Explore the product, pricing, and platform direction.",
        },
      ],
      details: {
        badge: "Contact details",
        title: "Choose the fastest way to reach us.",
        description:
          "Whether you need a demo, pricing clarification, technical planning, or support, use the channel that fits your request.",
      },
      quickInfo: [
        { label: "Region", value: "International" },
        { label: "Response time", value: "Usually within 24 hours" },
        {
          label: "Focus",
          value: "SaaS, desktop sync, and business operations",
        },
        {
          label: "Availability",
          value: "Product demos and technical discussions",
        },
      ],
      form: {
        badge: "Send a message",
        title: "Tell us about your project.",
        description:
          "Share your business need, current workflow, and what you want to build with Facturance.",
        labels: {
          name: "Name",
          email: "Email",
          phone: "Phone / WhatsApp",
          company: "Company",
          topic: "What do you need?",
          message: "Message",
        },
        placeholders: {
          name: "Your name",
          email: "you@example.com",
          phone: "+216 ...",
          company: "Company name",
          topic: "Select a topic",
          message: "Tell us about your project, current workflow, or question...",
        },
        topicOptions: [
          { value: "demo", label: "Product demo" },
          { value: "pricing", label: "Pricing question" },
          { value: "support", label: "Support" },
          { value: "migration", label: "Desktop to cloud migration" },
          { value: "partnership", label: "Partnership" },
          { value: "other", label: "Other" },
        ],
        submit: "Send message",
        visualNote:
          "The form is ready visually. Connect it later to your email, backend API, or CRM.",
      },
      support: {
        badge: "We can help with",
        title: "Product, support, and platform questions.",
        discussionBadge: "Clear technical discussion",
        topics: [
          "SaaS platform planning",
          "Desktop to cloud migration",
          "Multi-company architecture",
          "Pricing and subscription setup",
          "Business workflow automation",
          "Cloud, offline, and sync strategy",
        ],
        trustCards: [
          {
            title: "Secure discussion",
            description:
              "Your business needs and product plans stay confidential.",
          },
          {
            title: "Clear guidance",
            description:
              "We help you identify the right starting point before scaling.",
          },
          {
            title: "Product support",
            description:
              "Ask about setup, features, roadmap, or technical direction.",
          },
        ],
      },
      bottomCta: {
        badge: "Need faster help?",
        title: "Talk directly with the Facturance team.",
        description:
          "Use WhatsApp for fast contact, or email us with project details if your request needs deeper review.",
        whatsapp: "WhatsApp",
        email: "Email",
      },
    },
    blog: {
      hero: {
        badge: "Facturance blog",
        title: "Notes on building modern business software.",
        description:
          "Product thinking, architecture notes, finance platform ideas, and updates from the Facturance team.",
        featured: "Featured",
        readArticle: "Read article",
      },
      categories: {
        items: [
          "SaaS architecture",
          "Finance workflows",
          "Permissions",
          "Offline desktop",
        ],
      },
      posts: {
        badge: "Latest articles",
        title: "Product, architecture, and operations.",
        suggestTopic: "Suggest a topic",
        read: "Read",
      },
      principles: {
        badge: "Editorial principles",
        title: "Practical notes for serious business software.",
        description:
          "The blog focuses on technical clarity, product decisions, and real operational needs behind modern finance platforms.",
        items: [
          "Build reliable business workflows before adding complexity.",
          "Keep permissions, audit, and company data separation clear.",
          "Design for web, desktop, sync, and mobile from the beginning.",
        ],
      },
      cta: {
        badge: "Stay updated",
        title: "Follow the evolution of Facturance.",
        description:
          "Product updates, architecture notes, and business software ideas for teams building reliable finance operations.",
        button: "Contact us",
      },
      detail: {
        backToBlog: "Back to blog",
        moreArticlesBadge: "More articles",
        moreArticlesTitle: "Keep exploring Facturance thinking.",
        moreArticlesButton: "Back to blog",
        read: "Read",
        ctaBadge: "Build with clarity",
        ctaTitle: "Want to shape better finance operations?",
        ctaDescription:
          "Talk with the Facturance team about SaaS, desktop sync, permissions, and international business workflows.",
        ctaPrimary: "Contact us",
        ctaSecondary: "View pricing",
        notFoundTitle: "Article not found | Facturance",
      },
    },
    auth: {
      login: {
        badge: "Welcome back",
        title: "Login to Facturance",
        description: "Access your Facturance workspace.",
        emailLabel: "Email",
        emailPlaceholder: "you@example.com",
        passwordLabel: "Password",
        passwordPlaceholder: "Your password",
        button: "Login",
        helperText: "New to Facturance?",
        registerLink: "Create an account",
      },
      register: {
        badge: "Get started",
        title: "Create your Facturance account",
        description: "Set up your company workspace.",
        companyLabel: "Company name",
        companyPlaceholder: "Company name",
        emailLabel: "Work email",
        emailPlaceholder: "you@company.com",
        passwordLabel: "Password",
        passwordPlaceholder: "Create a password",
        button: "Create account",
        helperText: "Already registered?",
        loginLink: "Login",
      },
    },
    pricing: {
      badge: "Pricing",
      title: "Simple pricing.",
      titleHighlight: "Powerful platform.",
      description:
        "Choose the plan that fits your business today, and scale seamlessly as your needs grow.",
      payMonthly: "Pay monthly",
      payYearly: "Pay yearly",
      saveUpTo: "Save up to 20%",
      monthSuffix: "/ month",
      customPrice: "Custom",
      billedYearly: "Billed yearly",
      billingToggleAria: "Toggle yearly billing",
      tailoredToNeeds: "Tailored to your needs",
      mostPopular: "Most popular",
      future: "Future",
      faqTitle: "Frequently asked questions",
      ctaTitle: "Ready to simplify your business?",
      ctaDescription:
        "Join thousands of businesses using Facturance to manage invoices, inventory, and more.",
      ctaPrimary: "Start free",
      ctaSecondary: "Book a demo",
      ctaChecks: ["No credit card required", "Setup in minutes"],
      ctaImageAlt: "Facturance dashboard on laptop and phone",
    },
  },
  fr: {
    common: {
      home: "Accueil",
      pricing: "Tarifs",
      blog: "Blog",
      contact: "Contact",
      login: "Connexion",
      register: "Inscription",
      startFree: "Démarrer gratuitement",
      createAccount: "Créer un compte",
      viewPricing: "Voir les tarifs",
      bookDemo: "Réserver une démo",
      email: "E-mail",
      whatsapp: "WhatsApp",
      phone: "Téléphone",
      website: "Site web",
      sendEmail: "Envoyer un e-mail",
      sendMessage: "Envoyer le message",
      contactSupport: "Contacter le support",
      learnMore: "En savoir plus",
    },
    topBar: {
      annualBillingPrefix: "Économisez jusqu'à",
      annualBillingDiscount: "20 %",
      annualBillingSuffix: "avec la facturation annuelle",
      preferences: "Préférences",
      chooseLanguage: "Choisir la langue",
      chooseCurrency: "Choisir la devise",
      closePreferencesMenu: "Fermer le menu des préférences",
      close: "Fermer",
      selectLanguage: "Sélectionner la langue",
      selectCurrency: "Sélectionner la devise",
    },
    nav: {
      home: "Accueil",
      pricing: "Tarifs",
      blog: "Blog",
      contact: "Contact",
      login: "Connexion",
      startFree: "Démarrer gratuitement",
      primaryNavigation: "Navigation principale",
      openNavigation: "Ouvrir le menu de navigation",
      closeNavigation: "Fermer le menu de navigation",
      mobileNavigation: "Navigation mobile",
      homeAria: "Accueil Facturance",
    },
    footer: {
      description:
        "Une plateforme ERP et de facturation moderne pour les équipes multi-entreprises, les opérations internationales et les flux de travail desktop hors ligne.",
      product: "Produit",
      company: "Entreprise",
      needHelp: "Besoin d'aide ?",
      needHelpDescription:
        "Une question sur les tarifs, l'intégration ou les fonctionnalités de Facturance ? Contactez-nous à tout moment.",
      rights: "Tous droits réservés.",
      secondaryLinks: "Liens du pied de page",
    },
    home: {
      hero: {
        badge: "Prêt pour SaaS, desktop et mobile",
        title: "Gérez votre activité depuis une plateforme financière claire.",
        description:
          "Facturance aide les équipes à gérer factures, entreprises, rôles, stock, paiements et workflows desktop hors ligne avec une base cloud moderne.",
        primaryCta: "Créer un compte",
        secondaryCta: "Voir les tarifs",
        imageAlt: "Aperçu du tableau de bord Facturance",
        stats: [
          { label: "Entreprises", value: "Multi" },
          { label: "Documents", value: "12+" },
          { label: "Mode", value: "Cloud +" },
        ],
        trustItems: [
          "Aucune carte bancaire requise",
          "Configuration en quelques minutes",
        ],
      },
      trustBar: {
        items: [
          {
            title: "Multi-entreprise",
            description:
              "Entreprises, utilisateurs, paramètres et documents séparés.",
          },
          {
            title: "RBAC prêt",
            description:
              "Structure centrée sur les permissions pour un accès maîtrisé.",
          },
          {
            title: "Desktop hors ligne",
            description:
              "Continuité desktop lorsque le réseau est instable.",
          },
          {
            title: "Internationalisé",
            description: "Préparé pour devises, langues et marchés.",
          },
        ],
      },
      platform: {
        badge: "Fondation plateforme",
        title: "Conçu pour un futur ERP multi-entreprise sérieux.",
        description:
          "Commencez par la facturation puis évoluez vers tableaux de bord cloud, synchronisation desktop, stock, paiements, contrôles admin et futurs workflows mobiles.",
        growthBadge: "Prêt pour la croissance",
        growthTitle: "Une plateforme, de nombreux workflows",
        foundationPoints: [
          "Source de vérité cloud",
          "Continuité desktop hors ligne",
          "Architecture centrée sur les permissions",
        ],
        modules: [
          {
            label: "Documents",
            title: "Factures et devis",
            description:
              "Créez factures, devis, bons de livraison, commandes et documents d'achat.",
          },
          {
            label: "Stock",
            title: "Opérations de stock",
            description:
              "Suivez articles, mouvements de stock, entrepôts, achats et impact des ventes.",
          },
          {
            label: "Finance",
            title: "Paiements et trésorerie",
            description:
              "Suivez paiements, soldes clients, montants dus et mouvements de caisse.",
          },
          {
            label: "Données",
            title: "Données métier cloud",
            description:
              "Centralisez entreprises, utilisateurs, factures, audits et synchronisation en sécurité.",
          },
          {
            label: "Équipes",
            title: "Collaboration d'équipe",
            description:
              "Invitez des utilisateurs, attribuez des rôles et séparez les responsabilités par entreprise.",
          },
          {
            label: "Appareils",
            title: "Web, desktop et mobile",
            description:
              "Commencez avec le web, puis étendez vers la synchronisation desktop et les futures apps mobiles.",
          },
        ],
        architectureBadge: "Direction architecture",
        architectureTitle:
          "Du logiciel de facturation à une plateforme métier complète.",
        architectureItems: ["Noyau cloud", "Accès sécurisé", "Multi-appareil"],
      },
      workflow: {
        badge: "Modèle opérationnel",
        title:
          "Un chemin simple de la configuration aux opérations synchronisées.",
        description:
          "Facturance est structuré pour faire évoluer proprement site public, tableaux de bord, API, desktop, mobile, synchronisation et règles métier partagées.",
        cardTitle: "Conçu pour grandir étape par étape",
        cardDescription:
          "Commencez simplement, puis ajoutez tableaux de bord avancés, API, synchronisation desktop et workflows mobiles sans reconstruire la base.",
        steps: [
          {
            title: "Créez des entreprises et invitez les équipes",
            description:
              "Commencez avec une structure d'entreprise claire et invitez les personnes qui ont besoin d'un accès.",
          },
          {
            title: "Attribuez rôles et permissions",
            description:
              "Contrôlez ce que chaque utilisateur peut voir, créer, modifier, approuver ou gérer.",
          },
          {
            title: "Émettez des factures et gérez les opérations",
            description:
              "Pilotez la facturation quotidienne, les clients, produits, paiements et workflows de stock.",
          },
          {
            title: "Synchronisez le travail desktop vers le cloud",
            description:
              "Gardez les opérations desktop hors ligne connectées à la plateforme métier centrale.",
          },
        ],
      },
      cta: {
        imageAlt: "Aperçu du tableau de bord Facturance sur desktop et mobile",
        badge: "Prêt pour le lancement",
        title: "Commencez à façonner votre plateforme financière avec",
        highlight: "Facturance.",
        description:
          "Lancez maintenant un site public premium, puis évoluez vers tableaux de bord, API, synchronisation desktop et workflows mobiles sur une base stable.",
        button: "Parlez-nous",
        checks: [
          "Aucune carte bancaire requise",
          "Configuration en quelques minutes",
          "Conçu pour évoluer",
        ],
        featureCards: [
          {
            title: "Sécurisé par conception",
            description:
              "Sécurité de niveau entreprise pour vos données métier.",
          },
          {
            title: "Prêt pour cloud et hors ligne",
            description:
              "Travaillez en ligne ou hors ligne. Nous gardons tout synchronisé.",
          },
          {
            title: "Conçu pour la croissance",
            description:
              "Des startups aux grandes équipes, Facturance grandit avec vous.",
          },
          {
            title: "Moderne et rapide",
            description:
              "Une expérience rapide, fiable et intuitive pour votre équipe.",
          },
        ],
      },
    },
    contact: {
      hero: {
        badge: "Contactez Facturance",
        title: "Construisez votre plateforme financière avec une trajectoire claire.",
        description:
          "Expliquez-nous ce que vous préparez et l'équipe Facturance vous aidera à évaluer le meilleur point de départ pour votre entreprise, plateforme ou workflow.",
        whatsappButton: "Nous écrire sur WhatsApp",
        emailButton: "Envoyer un e-mail",
      },
      methods: [
        {
          label: "E-mail",
          description:
            "Pour les questions produit, les démos et les partenariats.",
        },
        {
          label: "WhatsApp",
          description: "Contact rapide pour échange direct et suivi.",
        },
        {
          label: "Téléphone",
          description: "Appelez-nous pour les demandes commerciales urgentes.",
        },
        {
          label: "Site web",
          description:
            "Explorez le produit, les tarifs et la direction de la plateforme.",
        },
      ],
      details: {
        badge: "Coordonnées",
        title: "Choisissez le moyen le plus rapide pour nous joindre.",
        description:
          "Pour une démo, une clarification tarifaire, une planification technique ou du support, utilisez le canal adapté à votre demande.",
      },
      quickInfo: [
        { label: "Région", value: "International" },
        { label: "Délai de réponse", value: "Généralement sous 24 heures" },
        {
          label: "Focus",
          value: "SaaS, synchronisation desktop et opérations métier",
        },
        {
          label: "Disponibilité",
          value: "Démos produit et discussions techniques",
        },
      ],
      form: {
        badge: "Envoyer un message",
        title: "Parlez-nous de votre projet.",
        description:
          "Partagez votre besoin métier, votre workflow actuel et ce que vous souhaitez construire avec Facturance.",
        labels: {
          name: "Nom",
          email: "E-mail",
          phone: "Téléphone / WhatsApp",
          company: "Entreprise",
          topic: "De quoi avez-vous besoin ?",
          message: "Message",
        },
        placeholders: {
          name: "Votre nom",
          email: "vous@exemple.com",
          phone: "+216 ...",
          company: "Nom de l'entreprise",
          topic: "Sélectionner un sujet",
          message: "Décrivez votre projet, workflow actuel ou question...",
        },
        topicOptions: [
          { value: "demo", label: "Démo produit" },
          { value: "pricing", label: "Question tarifaire" },
          { value: "support", label: "Support" },
          { value: "migration", label: "Migration desktop vers cloud" },
          { value: "partnership", label: "Partenariat" },
          { value: "other", label: "Autre" },
        ],
        submit: "Envoyer le message",
        visualNote:
          "Le formulaire est prêt visuellement. Connectez-le plus tard à votre e-mail, API backend ou CRM.",
      },
      support: {
        badge: "Nous pouvons aider avec",
        title: "Questions produit, support et plateforme.",
        discussionBadge: "Discussion technique claire",
        topics: [
          "Planification de plateforme SaaS",
          "Migration desktop vers cloud",
          "Architecture multi-entreprise",
          "Configuration des tarifs et abonnements",
          "Automatisation des workflows métier",
          "Stratégie cloud, hors ligne et synchronisation",
        ],
        trustCards: [
          {
            title: "Discussion sécurisée",
            description:
              "Vos besoins métier et plans produit restent confidentiels.",
          },
          {
            title: "Conseils clairs",
            description:
              "Nous vous aidons à identifier le bon point de départ avant de passer à l'échelle.",
          },
          {
            title: "Support produit",
            description:
              "Posez vos questions sur la configuration, les fonctionnalités, la feuille de route ou la direction technique.",
          },
        ],
      },
      bottomCta: {
        badge: "Besoin d'aide plus rapide ?",
        title: "Parlez directement avec l'équipe Facturance.",
        description:
          "Utilisez WhatsApp pour un contact rapide, ou envoyez-nous un e-mail avec les détails du projet si votre demande nécessite une analyse plus approfondie.",
        whatsapp: "WhatsApp",
        email: "E-mail",
      },
    },
    blog: {
      hero: {
        badge: "Blog Facturance",
        title: "Notes sur la construction de logiciels métier modernes.",
        description:
          "Réflexions produit, notes d'architecture, idées de plateforme financière et actualités de l'équipe Facturance.",
        featured: "À la une",
        readArticle: "Lire l'article",
      },
      categories: {
        items: [
          "Architecture SaaS",
          "Workflows financiers",
          "Permissions",
          "Desktop hors ligne",
        ],
      },
      posts: {
        badge: "Derniers articles",
        title: "Produit, architecture et opérations.",
        suggestTopic: "Suggérer un sujet",
        read: "Lire",
      },
      principles: {
        badge: "Principes éditoriaux",
        title: "Des notes pratiques pour des logiciels métier sérieux.",
        description:
          "Le blog se concentre sur la clarté technique, les décisions produit et les besoins opérationnels réels derrière les plateformes financières modernes.",
        items: [
          "Construire des workflows métier fiables avant d'ajouter de la complexité.",
          "Garder permissions, audit et séparation des données d'entreprise clairs.",
          "Concevoir dès le départ pour le web, le desktop, la synchronisation et le mobile.",
        ],
      },
      cta: {
        badge: "Restez informé",
        title: "Suivez l'évolution de Facturance.",
        description:
          "Actualités produit, notes d'architecture et idées de logiciels métier pour les équipes qui construisent des opérations financières fiables.",
        button: "Contactez-nous",
      },
      detail: {
        backToBlog: "Retour au blog",
        moreArticlesBadge: "Plus d'articles",
        moreArticlesTitle: "Continuez à explorer les idées Facturance.",
        moreArticlesButton: "Retour au blog",
        read: "Lire",
        ctaBadge: "Construire avec clarté",
        ctaTitle: "Vous voulez améliorer vos opérations financières ?",
        ctaDescription:
          "Échangez avec l'équipe Facturance sur le SaaS, la synchronisation desktop, les permissions et les workflows métier internationaux.",
        ctaPrimary: "Contactez-nous",
        ctaSecondary: "Voir les tarifs",
        notFoundTitle: "Article introuvable | Facturance",
      },
    },
    auth: {
      login: {
        badge: "Bon retour",
        title: "Connexion à Facturance",
        description: "Accédez à votre espace de travail Facturance.",
        emailLabel: "E-mail",
        emailPlaceholder: "vous@exemple.com",
        passwordLabel: "Mot de passe",
        passwordPlaceholder: "Votre mot de passe",
        button: "Connexion",
        helperText: "Nouveau sur Facturance ?",
        registerLink: "Créer un compte",
      },
      register: {
        badge: "Commencer",
        title: "Créez votre compte Facturance",
        description: "Configurez l'espace de travail de votre entreprise.",
        companyLabel: "Nom de l'entreprise",
        companyPlaceholder: "Nom de l'entreprise",
        emailLabel: "E-mail professionnel",
        emailPlaceholder: "vous@entreprise.com",
        passwordLabel: "Mot de passe",
        passwordPlaceholder: "Créer un mot de passe",
        button: "Créer un compte",
        helperText: "Déjà inscrit ?",
        loginLink: "Connexion",
      },
    },
    pricing: {
      badge: "Tarifs",
      title: "Tarifs simples.",
      titleHighlight: "Plateforme puissante.",
      description:
        "Choisissez l'offre adaptée à votre entreprise aujourd'hui, et évoluez facilement à mesure que vos besoins grandissent.",
      payMonthly: "Paiement mensuel",
      payYearly: "Paiement annuel",
      saveUpTo: "Économisez jusqu'à 20 %",
      monthSuffix: "/ mois",
      customPrice: "Sur mesure",
      billedYearly: "Facturé annuellement",
      billingToggleAria: "Basculer vers la facturation annuelle",
      tailoredToNeeds: "Adapté à vos besoins",
      mostPopular: "Le plus populaire",
      future: "À venir",
      faqTitle: "Questions fréquentes",
      ctaTitle: "Prêt à simplifier votre activité ?",
      ctaDescription:
        "Rejoignez des milliers d'entreprises qui utilisent Facturance pour gérer leurs factures, leur stock et bien plus.",
      ctaPrimary: "Démarrer gratuitement",
      ctaSecondary: "Réserver une démo",
      ctaChecks: [
        "Aucune carte bancaire requise",
        "Configuration en quelques minutes",
      ],
      ctaImageAlt:
        "Tableau de bord Facturance sur ordinateur portable et téléphone",
    },
  },
  de: {
    common: {
      home: "Startseite",
      pricing: "Preise",
      blog: "Blog",
      contact: "Kontakt",
      login: "Anmelden",
      register: "Registrieren",
      startFree: "Kostenlos starten",
      createAccount: "Konto erstellen",
      viewPricing: "Preise ansehen",
      bookDemo: "Demo buchen",
      email: "E-Mail",
      whatsapp: "WhatsApp",
      phone: "Telefon",
      website: "Website",
      sendEmail: "E-Mail senden",
      sendMessage: "Nachricht senden",
      contactSupport: "Support kontaktieren",
      learnMore: "Mehr erfahren",
    },
    topBar: {
      annualBillingPrefix: "Sparen Sie bis zu",
      annualBillingDiscount: "20 %",
      annualBillingSuffix: "mit jährlicher Abrechnung",
      preferences: "Einstellungen",
      chooseLanguage: "Sprache wählen",
      chooseCurrency: "Währung wählen",
      closePreferencesMenu: "Einstellungsmenü schließen",
      close: "Schließen",
      selectLanguage: "Sprache auswählen",
      selectCurrency: "Währung auswählen",
    },
    nav: {
      home: "Startseite",
      pricing: "Preise",
      blog: "Blog",
      contact: "Kontakt",
      login: "Anmelden",
      startFree: "Kostenlos starten",
      primaryNavigation: "Hauptnavigation",
      openNavigation: "Navigationsmenü öffnen",
      closeNavigation: "Navigationsmenü schließen",
      mobileNavigation: "Mobile Navigation",
      homeAria: "Facturance Startseite",
    },
    footer: {
      description:
        "Eine moderne ERP- und Rechnungsplattform für Teams mit mehreren Unternehmen, internationale Abläufe und offlinefähige Desktop-Workflows.",
      product: "Produkt",
      company: "Unternehmen",
      needHelp: "Benötigen Sie Hilfe?",
      needHelpDescription:
        "Haben Sie Fragen zu Preisen, Onboarding oder Facturance-Funktionen? Kontaktieren Sie uns jederzeit.",
      rights: "Alle Rechte vorbehalten.",
      secondaryLinks: "Footer-Links",
    },
    home: {
      hero: {
        badge: "Bereit für SaaS, Desktop und Mobile",
        title:
          "Führen Sie Ihr Unternehmen auf einer klaren Finanzplattform.",
        description:
          "Facturance hilft Teams, Rechnungen, Unternehmen, Rollen, Inventar, Zahlungen und offlinefähige Desktop-Workflows auf einer modernen Cloud-Basis zu verwalten.",
        primaryCta: "Konto erstellen",
        secondaryCta: "Preise ansehen",
        imageAlt: "Vorschau des Facturance Dashboards",
        stats: [
          { label: "Unternehmen", value: "Multi" },
          { label: "Dokumente", value: "12+" },
          { label: "Modus", value: "Cloud +" },
        ],
        trustItems: [
          "Keine Kreditkarte erforderlich",
          "In wenigen Minuten eingerichtet",
        ],
      },
      trustBar: {
        items: [
          {
            title: "Mehrere Unternehmen",
            description:
              "Getrennte Unternehmen, Benutzer, Einstellungen und Dokumente.",
          },
          {
            title: "RBAC-bereit",
            description:
              "Berechtigungsorientierte Struktur für kontrollierten Zugriff.",
          },
          {
            title: "Offline-Desktop",
            description:
              "Desktop-Kontinuität, wenn das Netzwerk unzuverlässig ist.",
          },
          {
            title: "Internationalisiert",
            description: "Vorbereitet für Währungen, Sprachen und Märkte.",
          },
        ],
      },
      platform: {
        badge: "Plattformbasis",
        title: "Gebaut für eine ernsthafte Multi-Company-ERP-Zukunft.",
        description:
          "Starten Sie mit Rechnungsstellung und wachsen Sie hin zu Cloud-Dashboards, Desktop-Synchronisierung, Inventar, Zahlungen, Admin-Kontrollen und zukünftigen mobilen Workflows.",
        growthBadge: "Wachstumsbereit",
        growthTitle: "Eine Plattform, viele Workflows",
        foundationPoints: [
          "Cloud als Quelle der Wahrheit",
          "Offline-Desktop-Kontinuität",
          "Berechtigungsorientierte Architektur",
        ],
        modules: [
          {
            label: "Dokumente",
            title: "Rechnungen und Angebote",
            description:
              "Erstellen Sie Rechnungen, Angebote, Lieferscheine, Bestellungen und Einkaufsdokumente.",
          },
          {
            label: "Inventar",
            title: "Inventarprozesse",
            description:
              "Verfolgen Sie Artikel, Lagerbewegungen, Lagerorte, Einkäufe und Verkaufsauswirkungen.",
          },
          {
            label: "Finanzen",
            title: "Zahlungen und Treasury",
            description:
              "Verfolgen Sie Zahlungen, Kundensalden, offene Beträge und Geldbewegungen.",
          },
          {
            label: "Daten",
            title: "Cloud-Geschäftsdaten",
            description:
              "Zentralisieren Sie Unternehmen, Benutzer, Rechnungen, Audits und Sync-Daten sicher.",
          },
          {
            label: "Teams",
            title: "Teamzusammenarbeit",
            description:
              "Laden Sie Benutzer ein, weisen Sie Rollen zu und trennen Sie Verantwortlichkeiten auf Unternehmensebene.",
          },
          {
            label: "Geräte",
            title: "Web, Desktop und Mobile",
            description:
              "Beginnen Sie mit Web und erweitern Sie später um Desktop-Sync und mobile Apps.",
          },
        ],
        architectureBadge: "Architekturrichtung",
        architectureTitle:
          "Von Rechnungssoftware zur vollständigen Geschäftsplattform.",
        architectureItems: ["Cloud-Kern", "Sicherer Zugriff", "Multi-Gerät"],
      },
      workflow: {
        badge: "Betriebsmodell",
        title:
          "Ein einfacher Weg von der Einrichtung zu synchronisierten Abläufen.",
        description:
          "Facturance ist so strukturiert, dass Website, Dashboards, APIs, Desktop, Mobile, Sync und gemeinsame Geschäftsregeln sauber wachsen können.",
        cardTitle: "Schrittweise für Wachstum entwickelt",
        cardDescription:
          "Starten Sie einfach und ergänzen Sie später fortgeschrittene Dashboards, APIs, Desktop-Synchronisierung und mobile Workflows, ohne die Basis neu aufzubauen.",
        steps: [
          {
            title: "Unternehmen erstellen und Teams einladen",
            description:
              "Starten Sie mit einer klaren Unternehmensstruktur und laden Sie die Personen ein, die Zugriff benötigen.",
          },
          {
            title: "Rollen und Berechtigungen zuweisen",
            description:
              "Steuern Sie, was jeder Benutzer sehen, erstellen, bearbeiten, genehmigen oder verwalten kann.",
          },
          {
            title: "Rechnungen ausstellen und Abläufe verwalten",
            description:
              "Führen Sie tägliche Rechnungsstellung, Kunden, Produkte, Zahlungen und Inventar-Workflows.",
          },
          {
            title: "Desktop-Arbeit zurück in die Cloud synchronisieren",
            description:
              "Verbinden Sie Offline-Desktop-Abläufe mit der zentralen Geschäftsplattform.",
          },
        ],
      },
      cta: {
        imageAlt: "Facturance Dashboard-Vorschau auf Desktop und Mobile",
        badge: "Bereit für den Start",
        title: "Gestalten Sie Ihre Finanzplattform mit",
        highlight: "Facturance.",
        description:
          "Starten Sie jetzt mit einer hochwertigen öffentlichen Website und wachsen Sie auf stabiler Basis zu Dashboards, APIs, Desktop-Sync und mobilen Workflows.",
        button: "Sprechen Sie mit uns",
        checks: [
          "Keine Kreditkarte erforderlich",
          "In wenigen Minuten eingerichtet",
          "Für Wachstum gebaut",
        ],
        featureCards: [
          {
            title: "Sicher konzipiert",
            description:
              "Sicherheit auf Unternehmensniveau für Ihre Geschäftsdaten.",
          },
          {
            title: "Cloud- und offlinebereit",
            description:
              "Arbeiten Sie online oder offline. Wir halten alles synchron.",
          },
          {
            title: "Für Wachstum gebaut",
            description:
              "Vom Startup bis zu großen Teams wächst Facturance mit Ihnen.",
          },
          {
            title: "Modern und schnell",
            description:
              "Eine schnelle, zuverlässige und intuitive Erfahrung für Ihr Team.",
          },
        ],
      },
    },
    contact: {
      hero: {
        badge: "Facturance kontaktieren",
        title: "Bauen Sie Ihre Finanzplattform mit einem klaren Weg.",
        description:
          "Erzählen Sie uns, was Sie planen, und das Facturance Team hilft Ihnen, den richtigen Startpunkt für Ihr Unternehmen, Ihre Plattform oder Ihren Workflow zu bewerten.",
        whatsappButton: "WhatsApp schreiben",
        emailButton: "E-Mail senden",
      },
      methods: [
        {
          label: "E-Mail",
          description:
            "Für Produktfragen, Demos und Partnerschaften.",
        },
        {
          label: "WhatsApp",
          description:
            "Schneller Kontakt für direkte Gespräche und Nachverfolgung.",
        },
        {
          label: "Telefon",
          description: "Rufen Sie uns bei dringenden Geschäftsanfragen an.",
        },
        {
          label: "Website",
          description:
            "Entdecken Sie Produkt, Preise und Plattformrichtung.",
        },
      ],
      details: {
        badge: "Kontaktdaten",
        title: "Wählen Sie den schnellsten Weg zu uns.",
        description:
          "Ob Demo, Preisfrage, technische Planung oder Support: Nutzen Sie den Kanal, der zu Ihrer Anfrage passt.",
      },
      quickInfo: [
        { label: "Region", value: "International" },
        { label: "Antwortzeit", value: "In der Regel innerhalb von 24 Stunden" },
        {
          label: "Fokus",
          value: "SaaS, Desktop-Sync und Geschäftsabläufe",
        },
        {
          label: "Verfügbarkeit",
          value: "Produktdemos und technische Gespräche",
        },
      ],
      form: {
        badge: "Nachricht senden",
        title: "Erzählen Sie uns von Ihrem Projekt.",
        description:
          "Teilen Sie Ihren Geschäftsbedarf, Ihren aktuellen Workflow und was Sie mit Facturance aufbauen möchten.",
        labels: {
          name: "Name",
          email: "E-Mail",
          phone: "Telefon / WhatsApp",
          company: "Unternehmen",
          topic: "Was benötigen Sie?",
          message: "Nachricht",
        },
        placeholders: {
          name: "Ihr Name",
          email: "sie@beispiel.com",
          phone: "+216 ...",
          company: "Unternehmensname",
          topic: "Thema auswählen",
          message:
            "Beschreiben Sie Ihr Projekt, Ihren aktuellen Workflow oder Ihre Frage...",
        },
        topicOptions: [
          { value: "demo", label: "Produktdemo" },
          { value: "pricing", label: "Preisfrage" },
          { value: "support", label: "Support" },
          { value: "migration", label: "Desktop-zu-Cloud-Migration" },
          { value: "partnership", label: "Partnerschaft" },
          { value: "other", label: "Sonstiges" },
        ],
        submit: "Nachricht senden",
        visualNote:
          "Das Formular ist visuell bereit. Verbinden Sie es später mit Ihrer E-Mail, Backend-API oder Ihrem CRM.",
      },
      support: {
        badge: "Wir können helfen bei",
        title: "Produkt-, Support- und Plattformfragen.",
        discussionBadge: "Klares technisches Gespräch",
        topics: [
          "SaaS-Plattformplanung",
          "Desktop-zu-Cloud-Migration",
          "Multi-Company-Architektur",
          "Preis- und Abonnement-Einrichtung",
          "Automatisierung von Geschäftsworkflows",
          "Cloud-, Offline- und Sync-Strategie",
        ],
        trustCards: [
          {
            title: "Sicheres Gespräch",
            description:
              "Ihre Geschäftsanforderungen und Produktpläne bleiben vertraulich.",
          },
          {
            title: "Klare Orientierung",
            description:
              "Wir helfen Ihnen, den richtigen Startpunkt vor der Skalierung zu finden.",
          },
          {
            title: "Produktsupport",
            description:
              "Fragen Sie zu Einrichtung, Funktionen, Roadmap oder technischer Richtung.",
          },
        ],
      },
      bottomCta: {
        badge: "Brauchen Sie schneller Hilfe?",
        title: "Sprechen Sie direkt mit dem Facturance Team.",
        description:
          "Nutzen Sie WhatsApp für schnellen Kontakt oder senden Sie uns Projektdetails per E-Mail, wenn Ihre Anfrage eine tiefere Prüfung benötigt.",
        whatsapp: "WhatsApp",
        email: "E-Mail",
      },
    },
    blog: {
      hero: {
        badge: "Facturance Blog",
        title: "Notizen zum Aufbau moderner Business-Software.",
        description:
          "Produktdenken, Architekturnotizen, Ideen für Finanzplattformen und Updates vom Facturance Team.",
        featured: "Empfohlen",
        readArticle: "Artikel lesen",
      },
      categories: {
        items: [
          "SaaS-Architektur",
          "Finanz-Workflows",
          "Berechtigungen",
          "Offline-Desktop",
        ],
      },
      posts: {
        badge: "Neueste Artikel",
        title: "Produkt, Architektur und Betrieb.",
        suggestTopic: "Thema vorschlagen",
        read: "Lesen",
      },
      principles: {
        badge: "Redaktionelle Prinzipien",
        title: "Praktische Notizen für ernsthafte Business-Software.",
        description:
          "Der Blog konzentriert sich auf technische Klarheit, Produktentscheidungen und reale operative Anforderungen moderner Finanzplattformen.",
        items: [
          "Zuverlässige Geschäftsworkflows bauen, bevor Komplexität ergänzt wird.",
          "Berechtigungen, Audit und Unternehmensdatentrennung klar halten.",
          "Von Anfang an für Web, Desktop, Sync und Mobile entwerfen.",
        ],
      },
      cta: {
        badge: "Aktuell bleiben",
        title: "Verfolgen Sie die Entwicklung von Facturance.",
        description:
          "Produktupdates, Architekturnotizen und Ideen für Business-Software für Teams, die zuverlässige Finanzabläufe bauen.",
        button: "Kontakt aufnehmen",
      },
      detail: {
        backToBlog: "Zurück zum Blog",
        moreArticlesBadge: "Weitere Artikel",
        moreArticlesTitle: "Entdecken Sie weitere Facturance Gedanken.",
        moreArticlesButton: "Zurück zum Blog",
        read: "Lesen",
        ctaBadge: "Mit Klarheit bauen",
        ctaTitle: "Möchten Sie bessere Finanzabläufe gestalten?",
        ctaDescription:
          "Sprechen Sie mit dem Facturance Team über SaaS, Desktop-Sync, Berechtigungen und internationale Geschäftsworkflows.",
        ctaPrimary: "Kontakt aufnehmen",
        ctaSecondary: "Preise ansehen",
        notFoundTitle: "Artikel nicht gefunden | Facturance",
      },
    },
    auth: {
      login: {
        badge: "Willkommen zurück",
        title: "Bei Facturance anmelden",
        description: "Öffnen Sie Ihren Facturance Arbeitsbereich.",
        emailLabel: "E-Mail",
        emailPlaceholder: "sie@beispiel.com",
        passwordLabel: "Passwort",
        passwordPlaceholder: "Ihr Passwort",
        button: "Anmelden",
        helperText: "Neu bei Facturance?",
        registerLink: "Konto erstellen",
      },
      register: {
        badge: "Loslegen",
        title: "Erstellen Sie Ihr Facturance Konto",
        description: "Richten Sie den Arbeitsbereich Ihres Unternehmens ein.",
        companyLabel: "Unternehmensname",
        companyPlaceholder: "Unternehmensname",
        emailLabel: "Geschäftliche E-Mail",
        emailPlaceholder: "sie@unternehmen.com",
        passwordLabel: "Passwort",
        passwordPlaceholder: "Passwort erstellen",
        button: "Konto erstellen",
        helperText: "Bereits registriert?",
        loginLink: "Anmelden",
      },
    },
    pricing: {
      badge: "Preise",
      title: "Einfache Preise.",
      titleHighlight: "Leistungsstarke Plattform.",
      description:
        "Wählen Sie den Tarif, der heute zu Ihrem Unternehmen passt und mit Ihren Anforderungen wächst.",
      payMonthly: "Monatlich zahlen",
      payYearly: "Jährlich zahlen",
      saveUpTo: "Bis zu 20 % sparen",
      monthSuffix: "/ Monat",
      customPrice: "Individuell",
      billedYearly: "Jährlich abgerechnet",
      billingToggleAria: "Jährliche Abrechnung umschalten",
      tailoredToNeeds: "Auf Ihre Anforderungen zugeschnitten",
      mostPopular: "Am beliebtesten",
      future: "Demnächst",
      faqTitle: "Häufig gestellte Fragen",
      ctaTitle: "Bereit, Ihr Unternehmen zu vereinfachen?",
      ctaDescription:
        "Schließen Sie sich tausenden Unternehmen an, die Facturance für Rechnungen, Inventar und mehr nutzen.",
      ctaPrimary: "Kostenlos starten",
      ctaSecondary: "Demo buchen",
      ctaChecks: [
        "Keine Kreditkarte erforderlich",
        "In wenigen Minuten eingerichtet",
      ],
      ctaImageAlt: "Facturance Dashboard auf Laptop und Smartphone",
    },
  },
  ar: {
    common: {
      home: "الرئيسية",
      pricing: "الأسعار",
      blog: "المدونة",
      contact: "تواصل معنا",
      login: "تسجيل الدخول",
      register: "إنشاء حساب",
      startFree: "ابدأ مجانًا",
      createAccount: "إنشاء حساب",
      viewPricing: "عرض الأسعار",
      bookDemo: "احجز عرضًا توضيحيًا",
      email: "البريد الإلكتروني",
      whatsapp: "WhatsApp",
      phone: "الهاتف",
      website: "الموقع الإلكتروني",
      sendEmail: "إرسال بريد إلكتروني",
      sendMessage: "إرسال الرسالة",
      contactSupport: "تواصل مع الدعم",
      learnMore: "اعرف المزيد",
    },
    topBar: {
      annualBillingPrefix: "وفّر حتى",
      annualBillingDiscount: "20%",
      annualBillingSuffix: "مع الفوترة السنوية",
      preferences: "التفضيلات",
      chooseLanguage: "اختر اللغة",
      chooseCurrency: "اختر العملة",
      closePreferencesMenu: "إغلاق قائمة التفضيلات",
      close: "إغلاق",
      selectLanguage: "اختيار اللغة",
      selectCurrency: "اختيار العملة",
    },
    nav: {
      home: "الرئيسية",
      pricing: "الأسعار",
      blog: "المدونة",
      contact: "تواصل معنا",
      login: "تسجيل الدخول",
      startFree: "ابدأ مجانًا",
      primaryNavigation: "التنقل الرئيسي",
      openNavigation: "فتح قائمة التنقل",
      closeNavigation: "إغلاق قائمة التنقل",
      mobileNavigation: "قائمة الجوال",
      homeAria: "الصفحة الرئيسية لـ Facturance",
    },
    footer: {
      description:
        "منصة حديثة لتخطيط موارد المؤسسة والفوترة، مصممة للفرق متعددة الشركات والعمليات الدولية وسير العمل المكتبي الجاهز للعمل دون اتصال.",
      product: "المنتج",
      company: "الشركة",
      needHelp: "هل تحتاج إلى مساعدة؟",
      needHelpDescription:
        "هل لديك سؤال حول الأسعار أو الإعداد أو ميزات Facturance؟ تواصل معنا في أي وقت.",
      rights: "جميع الحقوق محفوظة.",
      secondaryLinks: "روابط التذييل",
    },
    home: {
      hero: {
        badge: "جاهز لـ SaaS وسطح المكتب والجوال",
        title: "أدِر عملك من منصة مالية واضحة واحدة.",
        description:
          "يساعد Facturance الفرق على إدارة الفواتير والشركات والأدوار والمخزون والمدفوعات وسير العمل المكتبي دون اتصال عبر أساس حديث جاهز للسحابة.",
        primaryCta: "إنشاء حساب",
        secondaryCta: "عرض الأسعار",
        imageAlt: "معاينة لوحة تحكم Facturance",
        stats: [
          { label: "الشركات", value: "متعدد" },
          { label: "المستندات", value: "+12" },
          { label: "الوضع", value: "Cloud +" },
        ],
        trustItems: ["لا حاجة إلى بطاقة ائتمان", "إعداد خلال دقائق"],
      },
      trustBar: {
        items: [
          {
            title: "متعدد الشركات",
            description:
              "فصل الشركات والمستخدمين والإعدادات والمستندات.",
          },
          {
            title: "جاهز لـ RBAC",
            description: "هيكل قائم على الصلاحيات للوصول المنضبط.",
          },
          {
            title: "سطح مكتب دون اتصال",
            description: "استمرارية العمل المكتبي عند عدم استقرار الشبكة.",
          },
          {
            title: "جاهز دوليًا",
            description: "مهيأ للعملات واللغات والأسواق.",
          },
        ],
      },
      platform: {
        badge: "أساس المنصة",
        title: "مصمم لمستقبل ERP جاد متعدد الشركات.",
        description:
          "ابدأ بالفوترة ثم توسع نحو لوحات تحكم سحابية ومزامنة سطح المكتب والمخزون والمدفوعات وضوابط الإدارة وسير العمل الجوال مستقبلًا.",
        growthBadge: "جاهز للنمو",
        growthTitle: "منصة واحدة، وسير عمل متعدد",
        foundationPoints: [
          "مصدر حقيقة سحابي",
          "استمرارية سطح المكتب دون اتصال",
          "بنية قائمة على الصلاحيات أولًا",
        ],
        modules: [
          {
            label: "المستندات",
            title: "الفواتير وعروض الأسعار",
            description:
              "أنشئ الفواتير وعروض الأسعار ومذكرات التسليم والطلبات ومستندات الشراء.",
          },
          {
            label: "المخزون",
            title: "عمليات المخزون",
            description:
              "تتبع الأصناف وحركات المخزون والمستودعات والمشتريات وتأثير المبيعات.",
          },
          {
            label: "المالية",
            title: "المدفوعات والخزينة",
            description:
              "تابع المدفوعات وأرصدة العملاء والمبالغ المستحقة وحركة النقد.",
          },
          {
            label: "البيانات",
            title: "بيانات أعمال سحابية",
            description:
              "مركزة بيانات الشركات والمستخدمين والفواتير والتدقيق والمزامنة بأمان.",
          },
          {
            label: "الفرق",
            title: "تعاون الفريق",
            description:
              "ادعُ المستخدمين وعيّن الأدوار وافصل المسؤوليات على مستوى الشركة.",
          },
          {
            label: "الأجهزة",
            title: "الويب وسطح المكتب والجوال",
            description:
              "ابدأ بالويب، ثم وسّع إلى مزامنة سطح المكتب وتطبيقات الجوال المستقبلية.",
          },
        ],
        architectureBadge: "اتجاه البنية",
        architectureTitle: "من برنامج فوترة إلى منصة أعمال متكاملة.",
        architectureItems: ["نواة سحابية", "وصول آمن", "متعدد الأجهزة"],
      },
      workflow: {
        badge: "نموذج التشغيل",
        title: "مسار بسيط من الإعداد إلى العمليات المتزامنة.",
        description:
          "تمت هيكلة Facturance كي تنمو واجهة الموقع ولوحات التحكم وواجهات API وسطح المكتب والجوال والمزامنة وقواعد الأعمال المشتركة بشكل منظم.",
        cardTitle: "مصمم للنمو خطوة بخطوة",
        cardDescription:
          "ابدأ ببساطة، ثم أضف لوحات تحكم متقدمة وواجهات API ومزامنة سطح المكتب وسير العمل الجوال دون إعادة بناء الأساس.",
        steps: [
          {
            title: "أنشئ الشركات وادعُ الفرق",
            description:
              "ابدأ بهيكل شركة واضح وادعُ الأشخاص الذين يحتاجون إلى الوصول.",
          },
          {
            title: "عيّن الأدوار والصلاحيات",
            description:
              "تحكم فيما يمكن لكل مستخدم عرضه أو إنشاؤه أو تعديله أو اعتماده أو إدارته.",
          },
          {
            title: "أصدر الفواتير وأدِر العمليات",
            description:
              "شغّل الفوترة اليومية والعملاء والمنتجات والمدفوعات وسير عمل المخزون.",
          },
          {
            title: "زامن عمل سطح المكتب مع السحابة",
            description:
              "أبقِ عمليات سطح المكتب دون اتصال مرتبطة بمنصة الأعمال المركزية.",
          },
        ],
      },
      cta: {
        imageAlt: "معاينة لوحة تحكم Facturance على سطح المكتب والجوال",
        badge: "جاهز للإطلاق",
        title: "ابدأ بتشكيل منصتك المالية مع",
        highlight: "Facturance.",
        description:
          "أطلق موقعًا عامًا مميزًا الآن، ثم توسع إلى لوحات التحكم وواجهات API ومزامنة سطح المكتب وسير العمل الجوال على أساس مستقر.",
        button: "تواصل معنا",
        checks: ["لا حاجة إلى بطاقة ائتمان", "إعداد خلال دقائق", "مصمم للتوسع"],
        featureCards: [
          {
            title: "آمن من التصميم",
            description: "أمان بمستوى المؤسسات لبيانات عملك.",
          },
          {
            title: "جاهز للسحابة ودون اتصال",
            description: "اعمل عبر الإنترنت أو دون اتصال. نحافظ على مزامنة كل شيء.",
          },
          {
            title: "مصمم للنمو",
            description: "من الشركات الناشئة إلى الفرق الكبيرة، ينمو Facturance معك.",
          },
          {
            title: "حديث وسريع",
            description: "تجربة سريعة وموثوقة وبديهية لفريقك.",
          },
        ],
      },
    },
    contact: {
      hero: {
        badge: "تواصل مع Facturance",
        title: "ابنِ منصتك المالية بمسار واضح.",
        description:
          "أخبرنا بما تخطط له وسيساعدك فريق Facturance على تقييم نقطة البداية المناسبة لعملك أو منصتك أو سير عملك.",
        whatsappButton: "راسلنا على WhatsApp",
        emailButton: "إرسال بريد إلكتروني",
      },
      methods: [
        {
          label: "البريد الإلكتروني",
          description: "لأسئلة المنتج والعروض التوضيحية والشراكات.",
        },
        {
          label: "WhatsApp",
          description: "تواصل سريع للنقاش المباشر والمتابعة.",
        },
        {
          label: "الهاتف",
          description: "اتصل بنا للاستفسارات التجارية العاجلة.",
        },
        {
          label: "الموقع الإلكتروني",
          description: "استكشف المنتج والأسعار واتجاه المنصة.",
        },
      ],
      details: {
        badge: "تفاصيل التواصل",
        title: "اختر أسرع طريقة للوصول إلينا.",
        description:
          "سواء كنت تحتاج إلى عرض توضيحي أو توضيح للأسعار أو تخطيط تقني أو دعم، استخدم القناة الأنسب لطلبك.",
      },
      quickInfo: [
        { label: "النطاق", value: "دولي" },
        { label: "وقت الرد", value: "عادة خلال 24 ساعة" },
        {
          label: "التركيز",
          value: "SaaS ومزامنة سطح المكتب وعمليات الأعمال",
        },
        {
          label: "التوفر",
          value: "عروض المنتج والنقاشات التقنية",
        },
      ],
      form: {
        badge: "إرسال رسالة",
        title: "أخبرنا عن مشروعك.",
        description:
          "شارك حاجتك التجارية وسير عملك الحالي وما تريد بناءه باستخدام Facturance.",
        labels: {
          name: "الاسم",
          email: "البريد الإلكتروني",
          phone: "الهاتف / WhatsApp",
          company: "الشركة",
          topic: "ما الذي تحتاجه؟",
          message: "الرسالة",
        },
        placeholders: {
          name: "اسمك",
          email: "you@example.com",
          phone: "+216 ...",
          company: "اسم الشركة",
          topic: "اختر موضوعًا",
          message: "أخبرنا عن مشروعك أو سير عملك الحالي أو سؤالك...",
        },
        topicOptions: [
          { value: "demo", label: "عرض توضيحي للمنتج" },
          { value: "pricing", label: "سؤال حول الأسعار" },
          { value: "support", label: "الدعم" },
          { value: "migration", label: "الانتقال من سطح المكتب إلى السحابة" },
          { value: "partnership", label: "شراكة" },
          { value: "other", label: "أخرى" },
        ],
        submit: "إرسال الرسالة",
        visualNote:
          "النموذج جاهز بصريًا. اربطه لاحقًا ببريدك الإلكتروني أو API خلفي أو CRM.",
      },
      support: {
        badge: "يمكننا المساعدة في",
        title: "أسئلة المنتج والدعم والمنصة.",
        discussionBadge: "نقاش تقني واضح",
        topics: [
          "تخطيط منصة SaaS",
          "الانتقال من سطح المكتب إلى السحابة",
          "بنية متعددة الشركات",
          "إعداد الأسعار والاشتراكات",
          "أتمتة سير العمل التجاري",
          "استراتيجية السحابة ودون اتصال والمزامنة",
        ],
        trustCards: [
          {
            title: "نقاش آمن",
            description: "تبقى احتياجات عملك وخطط المنتج سرية.",
          },
          {
            title: "إرشاد واضح",
            description:
              "نساعدك على تحديد نقطة البداية المناسبة قبل التوسع.",
          },
          {
            title: "دعم المنتج",
            description:
              "اسأل عن الإعداد أو الميزات أو خارطة الطريق أو الاتجاه التقني.",
          },
        ],
      },
      bottomCta: {
        badge: "هل تحتاج إلى مساعدة أسرع؟",
        title: "تحدث مباشرة مع فريق Facturance.",
        description:
          "استخدم WhatsApp للتواصل السريع، أو أرسل لنا تفاصيل المشروع عبر البريد الإلكتروني إذا كان طلبك يحتاج إلى مراجعة أعمق.",
        whatsapp: "WhatsApp",
        email: "البريد الإلكتروني",
      },
    },
    blog: {
      hero: {
        badge: "مدونة Facturance",
        title: "ملاحظات حول بناء برمجيات أعمال حديثة.",
        description:
          "أفكار منتج وملاحظات بنية وأفكار لمنصات مالية وتحديثات من فريق Facturance.",
        featured: "مميز",
        readArticle: "اقرأ المقال",
      },
      categories: {
        items: ["بنية SaaS", "سير العمل المالي", "الصلاحيات", "سطح مكتب دون اتصال"],
      },
      posts: {
        badge: "أحدث المقالات",
        title: "المنتج والبنية والعمليات.",
        suggestTopic: "اقترح موضوعًا",
        read: "اقرأ",
      },
      principles: {
        badge: "مبادئ التحرير",
        title: "ملاحظات عملية لبرمجيات أعمال جادة.",
        description:
          "تركز المدونة على الوضوح التقني وقرارات المنتج والاحتياجات التشغيلية الحقيقية خلف المنصات المالية الحديثة.",
        items: [
          "ابنِ سير عمل موثوقًا قبل إضافة التعقيد.",
          "حافظ على وضوح الصلاحيات والتدقيق وفصل بيانات الشركات.",
          "صمّم للويب وسطح المكتب والمزامنة والجوال منذ البداية.",
        ],
      },
      cta: {
        badge: "ابقَ على اطلاع",
        title: "تابع تطور Facturance.",
        description:
          "تحديثات المنتج وملاحظات البنية وأفكار برمجيات الأعمال للفرق التي تبني عمليات مالية موثوقة.",
        button: "تواصل معنا",
      },
      detail: {
        backToBlog: "العودة إلى المدونة",
        moreArticlesBadge: "مقالات أخرى",
        moreArticlesTitle: "واصل استكشاف أفكار Facturance.",
        moreArticlesButton: "العودة إلى المدونة",
        read: "اقرأ",
        ctaBadge: "ابنِ بوضوح",
        ctaTitle: "هل تريد تشكيل عمليات مالية أفضل؟",
        ctaDescription:
          "تحدث مع فريق Facturance حول SaaS ومزامنة سطح المكتب والصلاحيات وسير العمل التجاري الدولي.",
        ctaPrimary: "تواصل معنا",
        ctaSecondary: "عرض الأسعار",
        notFoundTitle: "المقال غير موجود | Facturance",
      },
    },
    auth: {
      login: {
        badge: "مرحبًا بعودتك",
        title: "تسجيل الدخول إلى Facturance",
        description: "ادخل إلى مساحة عملك في Facturance.",
        emailLabel: "البريد الإلكتروني",
        emailPlaceholder: "you@example.com",
        passwordLabel: "كلمة المرور",
        passwordPlaceholder: "كلمة المرور",
        button: "تسجيل الدخول",
        helperText: "جديد على Facturance؟",
        registerLink: "إنشاء حساب",
      },
      register: {
        badge: "ابدأ الآن",
        title: "أنشئ حسابك في Facturance",
        description: "قم بإعداد مساحة عمل شركتك.",
        companyLabel: "اسم الشركة",
        companyPlaceholder: "اسم الشركة",
        emailLabel: "البريد الإلكتروني للعمل",
        emailPlaceholder: "you@company.com",
        passwordLabel: "كلمة المرور",
        passwordPlaceholder: "أنشئ كلمة مرور",
        button: "إنشاء حساب",
        helperText: "مسجل بالفعل؟",
        loginLink: "تسجيل الدخول",
      },
    },
    pricing: {
      badge: "الأسعار",
      title: "أسعار بسيطة.",
      titleHighlight: "منصة قوية.",
      description:
        "اختر الخطة المناسبة لعملك اليوم، وتوسع بسلاسة مع نمو احتياجاتك.",
      payMonthly: "ادفع شهريًا",
      payYearly: "ادفع سنويًا",
      saveUpTo: "وفّر حتى 20%",
      monthSuffix: "/ شهر",
      customPrice: "مخصص",
      billedYearly: "تتم الفوترة سنويًا",
      billingToggleAria: "تبديل الفوترة السنوية",
      tailoredToNeeds: "مصممة حسب احتياجاتك",
      mostPopular: "الأكثر شيوعًا",
      future: "قريبًا",
      faqTitle: "الأسئلة الشائعة",
      ctaTitle: "هل أنت جاهز لتبسيط عملك؟",
      ctaDescription:
        "انضم إلى آلاف الشركات التي تستخدم Facturance لإدارة الفواتير والمخزون والمزيد.",
      ctaPrimary: "ابدأ مجانًا",
      ctaSecondary: "احجز عرضًا توضيحيًا",
      ctaChecks: ["لا حاجة إلى بطاقة ائتمان", "إعداد خلال دقائق"],
      ctaImageAlt: "لوحة تحكم Facturance على حاسوب محمول وهاتف",
    },
  },
};
