"use client";

import { Gift } from "lucide-react";
import { useTranslation } from "@/i18n/useTranslation";
import type { BillingCycle } from "@/lib/currency";

type BillingToggleProps = {
  value: BillingCycle;
  onChange: (value: BillingCycle) => void;
};

export function BillingToggle({ value, onChange }: BillingToggleProps) {
  const { t } = useTranslation();
  const isYearly = value === "yearly";

  return (
    <div className="flex w-full justify-center sm:px-0">
      <div className="w-full max-w-[315px] rounded-2xl border border-border-muted bg-white/95 p-3 shadow-[0_16px_42px_rgba(15,23,42,0.07)] backdrop-blur sm:max-w-[390px] sm:rounded-3xl">
        <div className="grid grid-cols-[1fr_64px_1fr] items-center gap-2">
          <button
            type="button"
            onClick={() => onChange("monthly")}
            className={`flex h-10 items-center justify-center rounded-sm px-2 text-xs font-extrabold leading-4 transition sm:text-sm ${
              !isYearly
                ? "bg-brand-soft text-text-strong"
                : "text-text-soft hover:bg-surface-hover hover:text-text-strong"
            }`}
          >
            {t.pricing.payMonthly}
          </button>

          <button
            type="button"
            aria-label={t.pricing.billingToggleAria}
            aria-pressed={isYearly}
            onClick={() => onChange(isYearly ? "monthly" : "yearly")}
            className="relative h-8 w-16 rounded-full bg-linear-to-r from-brand-gradient-from to-brand-gradient-to p-1 shadow-[0_8px_18px_rgba(0,127,109,0.22)] transition hover:brightness-105"
          >
            <span
              className={`block h-6 w-6 rounded-full bg-white shadow-[0_4px_12px_rgba(0,0,0,0.2)] transition-transform duration-200 ${
                isYearly ? "translate-x-8" : "translate-x-0"
              }`}
            />
          </button>

          <button
            type="button"
            onClick={() => onChange("yearly")}
            className={`flex h-10 items-center justify-center rounded-sm px-2 text-xs font-extrabold leading-4 transition sm:text-sm ${
              isYearly
                ? "bg-brand-soft text-text-strong"
                : "text-text-soft hover:bg-surface-hover hover:text-text-strong"
            }`}
          >
            {t.pricing.payYearly}
          </button>
        </div>

        <div className="mt-2 flex justify-center">
          <span className="inline-flex items-center gap-1.5 rounded-sm bg-accent-lime px-3.5 py-1.5 text-[11px] font-extrabold leading-none text-brand-primary sm:text-caption">
            <Gift size={13} strokeWidth={2.4} aria-hidden="true" />
            {t.pricing.saveUpTo}
          </span>
        </div>
      </div>
    </div>
  );
}
