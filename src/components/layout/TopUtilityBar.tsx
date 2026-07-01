"use client";

import { useState } from "react";
import { BadgeEuro, ChevronDown, Gift, Globe2 } from "lucide-react";
import {
  languageOptions,
  useSitePreferences,
  type LanguageCode,
} from "@/components/layout/site-preferences-provider";
import { currencyOptions, type CurrencyCode } from "@/lib/currency";

type OpenMenu = "language" | "currency" | null;

export function TopUtilityBar() {
  const [openMenu, setOpenMenu] = useState<OpenMenu>(null);
  const { currency, language, setCurrency, setLanguage } = useSitePreferences();
  const selectedLanguage = languageOptions.find((item) => item.code === language);
  const selectedCurrency = currencyOptions.find((item) => item.code === currency);

  return (
    <div className="min-h-[34px] bg-gradient-to-r from-[#003f36] via-[#00594c] to-[#003f36] text-sm text-white/90 sm:h-[34px]">
      <div className="mx-auto flex min-h-[34px] w-full max-w-[1216px] flex-col gap-2 px-6 py-1 sm:flex-row sm:items-center sm:justify-between sm:py-0 xl:px-0">
        <p className="inline-flex items-center gap-2">
          <Gift
            size={16}
            strokeWidth={2}
            className="text-lime-300"
            aria-hidden="true"
          />
          Save up to <span className="font-semibold text-lime-300">20%</span>{" "}
          with annual billing
        </p>

        <div className="relative flex items-center gap-3">
          <div className="relative">
            <button
              type="button"
              aria-haspopup="menu"
              aria-expanded={openMenu === "language"}
              onClick={() =>
                setOpenMenu(openMenu === "language" ? null : "language")
              }
              className="inline-flex items-center gap-1 border-none bg-transparent text-sm text-white transition hover:text-lime-200"
            >
              <Globe2 size={14} strokeWidth={2} aria-hidden="true" />
              {selectedLanguage?.label ?? "English"}
              <ChevronDown size={12} strokeWidth={2} aria-hidden="true" />
            </button>
            {openMenu === "language" ? (
              <div className="absolute right-0 top-6 z-50 w-36 rounded-xl border border-[#dce7e5] bg-white p-1 text-[#071827] shadow-[0_18px_45px_rgba(15,23,42,0.12)]">
                {languageOptions.map((option) => (
                  <button
                    key={option.code}
                    type="button"
                    className="block w-full rounded-lg px-3 py-2 text-left text-sm hover:bg-[#e8f6f3]"
                    onClick={() => {
                      setLanguage(option.code as LanguageCode);
                      setOpenMenu(null);
                    }}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            ) : null}
          </div>

          <span className="h-4 w-px bg-white/30" aria-hidden="true" />

          <div className="relative">
            <button
              type="button"
              aria-haspopup="menu"
              aria-expanded={openMenu === "currency"}
              onClick={() =>
                setOpenMenu(openMenu === "currency" ? null : "currency")
              }
              className="inline-flex items-center gap-1 border-none bg-transparent text-sm text-white transition hover:text-lime-200"
            >
              <BadgeEuro size={14} strokeWidth={2} aria-hidden="true" />
              {selectedCurrency
                ? `${selectedCurrency.code} (${selectedCurrency.symbol})`
                : "EUR (\u20ac)"}
              <ChevronDown size={12} strokeWidth={2} aria-hidden="true" />
            </button>
            {openMenu === "currency" ? (
              <div className="absolute right-0 top-6 z-50 w-32 rounded-xl border border-[#dce7e5] bg-white p-1 text-[#071827] shadow-[0_18px_45px_rgba(15,23,42,0.12)]">
                {currencyOptions.map((option) => (
                  <button
                    key={option.code}
                    type="button"
                    className="block w-full rounded-lg px-3 py-2 text-left text-sm hover:bg-[#e8f6f3]"
                    onClick={() => {
                      setCurrency(option.code as CurrencyCode);
                      setOpenMenu(null);
                    }}
                  >
                    {option.code} ({option.symbol})
                  </button>
                ))}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
