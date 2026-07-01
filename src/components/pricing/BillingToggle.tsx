"use client";

import type { BillingCycle } from "@/lib/currency";

type BillingToggleProps = {
  value: BillingCycle;
  onChange: (value: BillingCycle) => void;
};

export function BillingToggle({ value, onChange }: BillingToggleProps) {
  const isYearly = value === "yearly";

  return (
    <div className="mt-2 flex flex-wrap items-center justify-center gap-3">
      <button
        type="button"
        onClick={() => onChange("monthly")}
        className={`text-[13px] font-semibold ${
          !isYearly ? "text-[#007f6d]" : "text-[#506070]"
        }`}
      >
        Pay monthly
      </button>

      <button
        type="button"
        aria-label="Toggle yearly billing"
        aria-pressed={isYearly}
        onClick={() => onChange(isYearly ? "monthly" : "yearly")}
        className="relative h-[22px] w-11 rounded-full bg-[#007f6d] p-0.5"
      >
        <span
          className={`block h-[18px] w-[18px] rounded-full bg-white shadow-sm transition ${
            isYearly ? "translate-x-[21px]" : "translate-x-0"
          }`}
        />
      </button>

      <button
        type="button"
        onClick={() => onChange("yearly")}
        className={`text-[13px] font-semibold ${
          isYearly ? "text-[#007f6d]" : "text-[#506070]"
        }`}
      >
        Pay yearly
      </button>

      <span className="rounded-full bg-[#d9f5e8] px-3 py-1 text-[11px] font-semibold text-[#007f6d]">
        Save up to 20%
      </span>
    </div>
  );
}
