"use client";

import Link from "next/link";
import {
  BriefcaseBusiness,
  Building2,
  ChartColumnIncreasing,
  Check,
  Rocket,
  type LucideIcon,
} from "lucide-react";
import { IconBadge } from "@/components/ui/IconBadge";
import { pricingPlans, type PricingPlan } from "@/data/pricing-plans";
import {
  formatPrice,
  getBillingPrice,
  type BillingCycle,
  type CurrencyCode,
} from "@/lib/currency";
import { useSitePreferences } from "@/components/layout/site-preferences-provider";

type PricingCardProps = {
  plan: PricingPlan;
  billingCycle: BillingCycle;
  currency: CurrencyCode;
};

const planIcons: Record<PricingPlan["icon"], LucideIcon> = {
  rocket: Rocket,
  briefcase: BriefcaseBusiness,
  chart: ChartColumnIncreasing,
  building: Building2,
};

function CheckIcon() {
  return (
    <span className="mt-[2px] grid h-[10px] w-[10px] shrink-0 place-items-center rounded-full bg-[#007f6d] text-white">
      <Check size={7} strokeWidth={3} aria-hidden="true" />
    </span>
  );
}

export function PricingCard({
  plan,
  billingCycle,
  currency,
}: PricingCardProps) {
  const isCustom = plan.customPrice || !plan.baseMonthlyPrice;
  const baseMonthlyPrice = plan.baseMonthlyPrice ?? 0;
  const price = isCustom
    ? "Custom"
    : formatPrice(getBillingPrice(baseMonthlyPrice, billingCycle), currency);

  return (
    <article
      className={`relative flex min-h-[410px] flex-col rounded-2xl border px-6 py-4 shadow-[0_18px_45px_rgba(15,23,42,0.06)] xl:h-[410px] ${
        plan.popular
          ? "border-[#007f6d] bg-gradient-to-b from-[#f3fffb] to-white shadow-[0_22px_55px_rgba(0,127,109,0.16)]"
          : "border-[#dce7e5] bg-white"
      }`}
    >
      {plan.popular ? (
        <span className="absolute -top-[7px] left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-gradient-to-r from-[#008f7a] to-[#006b5b] px-6 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white">
          Most popular
        </span>
      ) : null}

      <IconBadge icon={planIcons[plan.icon]} size="md" className="mx-auto mb-1" />

      <h2 className="text-center text-[17px] font-bold text-[#071827]">
        {plan.name}
      </h2>
      <p className="mt-1 min-h-7 text-center text-[11.5px] leading-[15px] text-[#506070]">
        {plan.description}
      </p>

      <div className="mt-1 text-center">
        <div className="flex items-end justify-center gap-1">
          <span
            className={`font-extrabold text-[#007f6d] ${
              isCustom ? "text-[25px]" : "text-[26px]"
            }`}
          >
            {price}
          </span>
          {isCustom ? null : (
            <span className="mb-0.5 text-[10.5px] text-[#506070]">/ month</span>
          )}
        </div>
        {isCustom ? (
          <p className="mt-1 text-[11px] text-[#506070]">Tailored to your needs</p>
        ) : billingCycle === "yearly" ? (
          <p className="mt-1 text-[11px] text-[#506070]">Billed yearly</p>
        ) : null}
      </div>

      <div className="my-1.5 border-t border-[#e6eeec]" />

      <ul className="space-y-0.5 text-[10.5px] leading-[13px]">
        {plan.features.map((feature) => (
          <li key={feature} className="flex gap-1.5">
            <CheckIcon />
            <span className="text-[#071827]">{feature}</span>
          </li>
        ))}
      </ul>

      <div className="mt-auto pt-2">
        <Link
          href={plan.href}
          className={`inline-flex h-7 w-full items-center justify-center rounded-md text-[13px] font-semibold transition ${
            plan.popular
              ? "bg-gradient-to-r from-[#008f7a] to-[#006b5b] text-white shadow-[0_10px_25px_rgba(0,127,109,0.25)]"
              : "border border-[#007f6d] text-[#007f6d] hover:bg-[#e8f6f3]"
          }`}
        >
          {plan.cta}
        </Link>
        <p className="mt-1 text-center text-[10px] text-[#64748b]">{plan.note}</p>
      </div>
    </article>
  );
}

export function PricingCardsGrid() {
  const { billingCycle, currency } = useSitePreferences();

  return (
    <section className="mx-auto grid max-w-[1070px] grid-cols-1 items-stretch gap-4 px-6 md:grid-cols-2 xl:grid-cols-4 xl:px-0">
      {pricingPlans.map((plan) => (
        <PricingCard
          key={plan.id}
          plan={plan}
          billingCycle={billingCycle}
          currency={currency}
        />
      ))}
    </section>
  );
}
