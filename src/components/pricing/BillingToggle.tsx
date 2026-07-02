"use client";

import { Gift } from "lucide-react";
import type { BillingCycle } from "@/lib/currency";

type BillingToggleProps = {
  value: BillingCycle;
  onChange: (value: BillingCycle) => void;
};

export function BillingToggle({ value, onChange }: BillingToggleProps) {
  const isYearly = value === "yearly";

  return (
    <div className="mt-8 flex items-center justify-center">
      <div className="flex flex-wrap items-center justify-center gap-5 rounded-full border border-border-muted bg-white/80 px-5 py-3 shadow-[0_12px_35px_rgba(15,23,42,0.06)] backdrop-blur">
        <button
          type="button"
          onClick={() => onChange("monthly")}
          className={`text-body-sm font-bold transition ${
            !isYearly ? "text-text-strong" : "text-text-soft hover:text-text-strong"
          }`}
        >
          Pay monthly
        </button>

        <button
          type="button"
          aria-label="Toggle yearly billing"
          aria-pressed={isYearly}
          onClick={() => onChange(isYearly ? "monthly" : "yearly")}
          className="relative h-8 w-16 rounded-full bg-linear-to-r from-brand-gradient-from to-brand-gradient-to p-1 shadow-inner shadow-black/10 transition hover:brightness-105"
        >
          <span
            className={`block h-6 w-6 rounded-full bg-white shadow-[0_4px_12px_rgba(0,0,0,0.18)] transition-transform duration-200 ${
              isYearly ? "translate-x-8" : "translate-x-0"
            }`}
          />
        </button>

        <button
          type="button"
          onClick={() => onChange("yearly")}
          className={`text-body-sm font-bold transition ${
            isYearly ? "text-text-strong" : "text-text-soft hover:text-text-strong"
          }`}
        >
          Pay yearly
        </button>

        <span className="inline-flex items-center gap-1.5 rounded-full bg-accent-lime px-4 py-1.5 text-caption font-extrabold text-brand-primary">
          <Gift size={14} strokeWidth={2.4} aria-hidden="true" />
          Save up to 20%
        </span>
      </div>
    </div>
  );
}