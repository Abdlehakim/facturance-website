"use client";

import { useSitePreferences } from "@/components/layout/site-preferences-provider";
import { BillingToggle } from "@/components/pricing/BillingToggle";
import { useTranslation } from "@/i18n/useTranslation";

export function PricingHero() {
  const { billingCycle, setBillingCycle } = useSitePreferences();
  const { t } = useTranslation();

  return (
    <section className="px-4 py-4 text-center sm:px-6 sm:pb-10 sm:pt-12 lg:pb-12 xl:px-0">
      <div className="mx-auto max-w-4xl">
        <p className="inline-flex items-center rounded-full bg-brand-soft px-5 py-1.5 text-caption font-extrabold uppercase tracking-normal text-brand-primary">
          {t.pricing.badge}
        </p>

        <h1 className="mx-auto mt-5 max-w-4xl text-[clamp(2.35rem,9vw,3.5rem)] font-extrabold leading-[1.08] tracking-normal text-text-strong sm:mt-6">
          {t.pricing.title}{" "}
          <span className="text-brand-primary">{t.pricing.titleHighlight}</span>
        </h1>

        <p className="mx-auto my-5 max-w-150 text-base font-medium leading-7 text-text-muted sm:mt-6 sm:text-body-lg sm:leading-8">
          {t.pricing.description}
        </p>

        <BillingToggle value={billingCycle} onChange={setBillingCycle} />
      </div>
    </section>
  );
}
