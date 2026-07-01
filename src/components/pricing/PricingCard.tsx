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
    <span className="mt-0.5 grid h-4.5 w-4.5 shrink-0 place-items-center rounded-full bg-[#007f6d] text-white">
      <Check size={11} strokeWidth={3} aria-hidden="true" />
    </span>
  );
}

function FeatureText({ feature }: { feature: string }) {
  if (feature === "Unlimited storage with fair use") {
    return (
      <span>
        Unlimited storage
        <span className="block text-[12px] font-medium leading-4 text-[#64748b]">
          within fair use
        </span>
      </span>
    );
  }

  return (
    <span>
      {feature}

      {feature === "Multiple warehouses" ? (
        <span className="ml-2 rounded-full bg-[#d9f5e8] px-2.5 py-0.5 text-[10px] font-extrabold text-[#007f6d]">
          Future
        </span>
      ) : null}
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
      className={`relative flex min-h-125 flex-col rounded-3xl border px-6 py-6 shadow-[0_18px_55px_rgba(15,23,42,0.06)] ${
        plan.popular
          ? "border-[#007f6d] bg-linear-to-b from-[#f5fffc] to-white shadow-[0_22px_60px_rgba(0,127,109,0.14)] ring-1 ring-[#007f6d]/20"
          : "border-[#dce7e5] bg-white"
      }`}
    >
      {plan.popular ? (
        <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-linear-to-r from-[#008f7a] to-[#006b5b] px-7 py-1 text-[10px] font-extrabold uppercase tracking-[0.12em] text-white shadow-lg shadow-[#007f6d]/20">
          Most popular
        </span>
      ) : null}

      <IconBadge icon={planIcons[plan.icon]} size="sm" className="mx-auto mb-3" />

      <h2 className="text-center text-[21px] font-extrabold tracking-[-0.02em] text-[#071827]">
        {plan.name}
      </h2>

      <p className="mx-auto mt-2 min-h-10 max-w-44 text-center text-[13px] font-medium leading-5 text-[#506070]">
        {plan.description}
      </p>

      <div className="mt-4 text-center">
        <div className="flex min-h-10 items-end justify-center gap-1.5">
          <span
            className={`font-extrabold tracking-tight text-[#007f6d] ${
              isCustom ? "text-[28px]" : "text-[32px]"
            }`}
          >
            {price}
          </span>

          {isCustom ? null : (
            <span className="pb-1.5 text-[13px] font-semibold text-[#506070]">
              / month
            </span>
          )}
        </div>

        {isCustom ? (
          <p className="mt-1.5 text-[13px] font-medium text-[#506070]">
            Tailored to your needs
          </p>
        ) : billingCycle === "yearly" ? (
          <p className="mt-1.5 text-[13px] font-medium text-[#506070]">
            Billed yearly
          </p>
        ) : null}
      </div>

      <div className="my-5 border-t border-[#e6eeec]" />

      <ul className="space-y-2.5 text-[13.5px] font-medium leading-5">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2.5 text-[#071827]">
            <CheckIcon />
            <FeatureText feature={feature} />
          </li>
        ))}
      </ul>

      <div className="mt-auto pt-7">
        <Link
          href={plan.href}
          className={`inline-flex h-10 w-full items-center justify-center rounded-lg text-[14px] font-extrabold transition ${
            plan.popular
              ? "bg-linear-to-r from-[#008f7a] to-[#006b5b] text-white shadow-[0_12px_24px_rgba(0,127,109,0.22)] hover:brightness-105"
              : "border border-[#007f6d] bg-white text-[#007f6d] hover:bg-[#e8f6f3]"
          }`}
        >
          {plan.cta}
        </Link>

        <p className="mt-3 text-center text-[12px] font-medium text-[#64748b]">
          {plan.note}
        </p>
      </div>
    </article>
  );
}

export function PricingCardsGrid() {
  const { billingCycle, currency } = useSitePreferences();

  return (
    <section className="mx-auto grid w-full max-w-304 grid-cols-1 items-stretch gap-6 px-6 md:grid-cols-2 xl:grid-cols-4 xl:px-0">
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