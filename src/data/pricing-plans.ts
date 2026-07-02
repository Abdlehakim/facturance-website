import type { LanguageCode } from "@/components/layout/site-preferences-provider";
import { plans as enPlans } from "@/i18n/en/pricing/plans";
import { benefits as enBenefits } from "@/i18n/en/pricing/benefits";
import { faqs as enFaqs } from "@/i18n/en/pricing/faq";
import { plans as frPlans } from "@/i18n/fr/pricing/plans";
import { benefits as frBenefits } from "@/i18n/fr/pricing/benefits";
import { faqs as frFaqs } from "@/i18n/fr/pricing/faq";
import { plans as dePlans } from "@/i18n/de/pricing/plans";
import { benefits as deBenefits } from "@/i18n/de/pricing/benefits";
import { faqs as deFaqs } from "@/i18n/de/pricing/faq";
import { plans as arPlans } from "@/i18n/ar/pricing/plans";
import { benefits as arBenefits } from "@/i18n/ar/pricing/benefits";
import { faqs as arFaqs } from "@/i18n/ar/pricing/faq";

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
  en: { plans: enPlans, benefits: enBenefits, faqs: enFaqs },
  fr: { plans: frPlans, benefits: frBenefits, faqs: frFaqs },
  de: { plans: dePlans, benefits: deBenefits, faqs: deFaqs },
  ar: { plans: arPlans, benefits: arBenefits, faqs: arFaqs },
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
