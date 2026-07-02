"use client";

import { useSitePreferences } from "@/components/layout/site-preferences-provider";
import { BillingToggle } from "@/components/pricing/BillingToggle";

export function PricingHero() {
  const { billingCycle, setBillingCycle } = useSitePreferences();

  return (
    <section className="px-6 pb-17.5 pt-12 text-center xl:px-0">
      <div className="mx-auto max-w-4xl">
        <p className="inline-flex items-center rounded-full bg-brand-soft px-5 py-1.5 text-caption font-extrabold uppercase tracking-normal text-brand-primary">
          Pricing
        </p>

        <h1 className="mx-auto mt-6 max-w-4xl text-page-title font-extrabold leading-[1.08] tracking-normal text-text-strong sm:text-page-title-lg">
          Simple pricing.{" "}
          <span className="text-brand-primary">Powerful platform.</span>
        </h1>

        <p className="mx-auto mt-6 max-w-165 text-body-lg font-medium leading-8 text-text-muted">
          Choose the plan that fits your business today, and scale seamlessly as
          your needs grow.
        </p>

        <BillingToggle value={billingCycle} onChange={setBillingCycle} />
      </div>
    </section>
  );
}