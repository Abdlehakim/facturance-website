export type PricingPlanIcon = "rocket" | "briefcase" | "chart" | "building";

export type PricingPlan = {
  id: string;
  name: string;
  description: string;
  features: string[];
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

export const pricingPlans: PricingPlan[] = [
  {
    id: "starter",
    name: "Starter",
    baseMonthlyPrice: 9,
    description: "For freelancers and small teams.",
    icon: "rocket",
    features: [
      "1 company",
      "2 users",
      "Unlimited invoices",
      "Quotes",
      "Customers",
      "Products",
      "Desktop + Web access",
      "Automatic sync",
      "2 GB storage",
    ],
    cta: "Start free",
    href: "/register",
    note: "No credit card required",
  },
  {
    id: "professional",
    name: "Professional",
    baseMonthlyPrice: 19,
    description: "For growing businesses.",
    icon: "briefcase",
    popular: true,
    features: [
      "1 company",
      "10 users",
      "Inventory",
      "Purchases",
      "Reports",
      "Multiple warehouses",
      "API access",
      "Desktop + Web access",
      "Automatic sync",
      "20 GB storage",
    ],
    cta: "Start free",
    href: "/register",
    note: "No credit card required",
  },
  {
    id: "business",
    name: "Business",
    baseMonthlyPrice: 39,
    description: "For advanced teams.",
    icon: "chart",
    features: [
      "Unlimited users",
      "Unlimited storage with fair use",
      "Multiple branches",
      "Advanced permissions",
      "Audit logs",
      "Custom branding",
      "Priority support",
      "Desktop + Web access",
      "Automatic sync",
    ],
    cta: "Start free",
    href: "/register",
    note: "No credit card required",
  },
  {
    id: "enterprise",
    name: "Enterprise",
    customPrice: true,
    description: "For large organizations.",
    icon: "building",
    features: [
      "Dedicated infrastructure",
      "SLA",
      "SSO",
      "Custom modules",
      "Private API",
      "Training",
      "Dedicated support",
    ],
    cta: "Contact sales",
    href: "/contact",
    note: "We'll build the right plan for you",
  },
];

export const pricingBenefits: PricingBenefit[] = [
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
    description:
      "From startups to enterprises, we grow with your business.",
  },
];

export const pricingFaqs: PricingFaq[] = [
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
    answer: "We notify you before any limit affects your workspace.",
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
];
