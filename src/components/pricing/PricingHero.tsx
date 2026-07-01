"use client";

import { useSitePreferences } from "@/components/layout/site-preferences-provider";
import { BillingToggle } from "@/components/pricing/BillingToggle";

export function PricingHero() {
  const { billingCycle, setBillingCycle } = useSitePreferences();

  return (
    <section className="px-6 pb-17.5 pt-12 text-center xl:px-0">
      <div className="mx-auto max-w-4xl">
        <p className="inline-flex items-center rounded-full bg-[#e8f6f3] px-5 py-1.5 text-[12px] font-extrabold uppercase tracking-[0.12em] text-[#007f6d]">
          Pricing
        </p>

        <h1 className="mx-auto mt-6 max-w-4xl text-[46px] font-extrabold leading-[1.08] tracking-[-0.045em] text-[#071827] sm:text-[56px]">
          Simple pricing.{" "}
          <span className="text-[#007f6d]">Powerful platform.</span>
        </h1>

        <p className="mx-auto mt-6 max-w-165 text-[17px] font-medium leading-8 text-[#506070]">
          Choose the plan that fits your business today, and scale seamlessly as
          your needs grow.
        </p>

        <BillingToggle value={billingCycle} onChange={setBillingCycle} />
      </div>
    </section>
  );
}