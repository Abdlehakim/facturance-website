import { hero } from "./hero";
import { billingToggle } from "./billing-toggle";
import { labels } from "./labels";
import { cta } from "./cta";

export const pricing = {
  badge: hero.badge,
  title: hero.title,
  titleHighlight: hero.titleHighlight,
  description: hero.description,
  payMonthly: billingToggle.payMonthly,
  payYearly: billingToggle.payYearly,
  saveUpTo: billingToggle.saveUpTo,
  billingToggleAria: billingToggle.billingToggleAria,
  monthSuffix: labels.monthSuffix,
  customPrice: labels.customPrice,
  billedYearly: labels.billedYearly,
  tailoredToNeeds: labels.tailoredToNeeds,
  mostPopular: labels.mostPopular,
  future: labels.future,
  faqTitle: labels.faqTitle,
  ctaTitle: cta.ctaTitle,
  ctaDescription: cta.ctaDescription,
  ctaPrimary: cta.ctaPrimary,
  ctaSecondary: cta.ctaSecondary,
  ctaChecks: cta.ctaChecks,
  ctaImageAlt: cta.ctaImageAlt,
};
