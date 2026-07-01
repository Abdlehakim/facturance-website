"use client";

import { useSitePreferences } from "@/components/layout/site-preferences-provider";
import { BillingToggle } from "@/components/pricing/BillingToggle";

export function PricingHero() {
  const { billingCycle, setBillingCycle } = useSitePreferences();

  return (
    <section className="px-6 pb-1 pt-4 text-center">
      <div className="mx-auto max-w-3xl">
        <p className="inline-flex items-center rounded-full bg-[#e8f6f3] px-3 py-0.5 text-[11px] font-bold tracking-wide text-[#007f6d]">
          PRICING
        </p>
        <h1 className="mt-2 text-[32px] font-extrabold leading-[1.12] tracking-tight text-[#071827] sm:text-[34px]">
          Simple pricing. Powerful platform.
        </h1>
        <p className="mx-auto mt-2 max-w-[390px] text-[13.5px] leading-[18px] text-[#506070]">
          Choose the plan that fits your business today, and scale seamlessly
          as your needs grow.
        </p>
        <BillingToggle value={billingCycle} onChange={setBillingCycle} />
      </div>
    </section>
  );
}
