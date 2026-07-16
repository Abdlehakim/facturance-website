export type TextPair = {
  title: string;
  description: string;
};

export type BadgeText = {
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
      phoneCountryLabel: string;
      phoneCountryPlaceholder: string;
      phoneNumberLabel: string;
      phoneNumberPlaceholder: string;
      passwordLabel: string;
      passwordPlaceholder: string;
      rememberPhoneLabel: string;
      button: string;
      signingIn: string;
      success: string;
      error: string;
      signedInAs: string;
      tokenType: string;
      helperText: string;
      registerLink: string;
    };
    register: {
      badge: string;
      title: string;
      description: string;
      fullNameLabel: string;
      fullNamePlaceholder: string;
      companyLabel: string;
      companyPlaceholder: string;
      emailLabel: string;
      emailPlaceholder: string;
      phoneCountryLabel: string;
      phoneCountryPlaceholder: string;
      phoneNumberLabel: string;
      phoneNumberPlaceholder: string;
      passwordLabel: string;
      passwordPlaceholder: string;
      confirmPasswordLabel: string;
      confirmPasswordPlaceholder: string;
      showPassword: string;
      hidePassword: string;
      passwordMismatch: string;
      button: string;
      selectedPlan: string;
      creatingAccount: string;
      success: string;
      error: string;
      nextDestination: string;
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
