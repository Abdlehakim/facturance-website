"use client";

import { useEffect, useState } from "react";
import { Check, ChevronDown, Gift, Globe } from "lucide-react";
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

  const selectedLanguage = languageOptions.find(
    (item) => item.code === language,
  );

  const selectedCurrency = currencyOptions.find(
    (item) => item.code === currency,
  );

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpenMenu(null);
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  function toggleMenu(menu: Exclude<OpenMenu, null>) {
    setOpenMenu((current) => (current === menu ? null : menu));
  }

  return (
    <div className="relative z-999 border-t border-white/10 bg-brand-dark text-white">
      <div className="mx-auto flex min-h-10 w-full max-w-304 flex-col items-center justify-center gap-2 px-4 py-2 sm:h-10 sm:flex-row sm:justify-between sm:gap-4 sm:px-6 sm:py-0 xl:px-0">
        <p className="flex max-w-full items-center justify-center gap-2 text-center text-xs font-bold leading-snug text-white sm:h-10 sm:justify-start sm:gap-3 sm:text-button sm:leading-none">
          <Gift
            size={16}
            strokeWidth={2.4}
            className="shrink-0 text-lime-300"
            aria-hidden="true"
          />

          <span>
            Save up to{" "}
            <span className="font-extrabold text-lime-300">20%</span> with
            annual billing
          </span>
        </p>

        <div className="relative z-1000 flex h-9 w-full max-w-[320px] items-center justify-center gap-3 text-xs font-bold leading-none text-white sm:h-10 sm:w-auto sm:max-w-none sm:justify-end sm:gap-5 sm:text-button">
          <div className="relative flex h-full min-w-0 items-center">
            <button
              type="button"
              aria-haspopup="menu"
              aria-expanded={openMenu === "language"}
              aria-label="Select language"
              onClick={() => toggleMenu("language")}
              className="flex h-9 min-w-0 max-w-37.5 touch-manipulation items-center gap-1.5 rounded-md border-none bg-transparent px-1 text-xs font-bold leading-none text-white transition hover:text-lime-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-lime-200/80 sm:h-10 sm:max-w-none sm:gap-2 sm:px-0 sm:text-button"
            >
              <Globe
                size={16}
                strokeWidth={2.3}
                className="shrink-0"
                aria-hidden="true"
              />

              <span className="truncate leading-none">
                {selectedLanguage?.label ?? "English"}
              </span>

              <ChevronDown
                size={14}
                strokeWidth={2.3}
                className={`shrink-0 transition ${
                  openMenu === "language" ? "rotate-180" : ""
                }`}
                aria-hidden="true"
              />
            </button>

            {openMenu === "language" ? (
              <div
                role="menu"
                className="absolute right-0 top-full z-1001 mt-2 hidden w-44 rounded-2xl border border-border-muted bg-white p-2 text-text-strong shadow-[0_22px_70px_rgba(15,23,42,0.18)] ring-1 ring-black/5 sm:block"
              >
                {languageOptions.map((option) => {
                  const isSelected = option.code === language;

                  return (
                    <button
                      key={option.code}
                      type="button"
                      role="menuitem"
                      className={`flex w-full items-center justify-between gap-3 rounded-xl px-3 py-2.5 text-left text-sm font-semibold transition ${
                        isSelected
                          ? "bg-brand-soft text-brand-primary"
                          : "text-text-strong hover:bg-surface-hover"
                      }`}
                      onClick={() => {
                        setLanguage(option.code as LanguageCode);
                        setOpenMenu(null);
                      }}
                    >
                      <span className="truncate">{option.label}</span>

                      {isSelected ? (
                        <Check
                          size={15}
                          strokeWidth={2.5}
                          className="shrink-0"
                          aria-hidden="true"
                        />
                      ) : null}
                    </button>
                  );
                })}
              </div>
            ) : null}
          </div>

          <span className="h-5 w-px shrink-0 bg-white/35" aria-hidden="true" />

          <div className="relative flex h-full min-w-0 items-center">
            <button
              type="button"
              aria-haspopup="menu"
              aria-expanded={openMenu === "currency"}
              aria-label="Select currency"
              onClick={() => toggleMenu("currency")}
              className="flex h-9 min-w-0 max-w-35 touch-manipulation items-center gap-1.5 rounded-md border-none bg-transparent px-1 text-xs font-bold leading-none text-white transition hover:text-lime-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-lime-200/80 sm:h-10 sm:max-w-none sm:gap-2 sm:px-0 sm:text-button"
            >
              <span className="truncate leading-none">
                {selectedCurrency
                  ? `${selectedCurrency.code} (${selectedCurrency.symbol})`
                  : "EUR (€)"}
              </span>

              <ChevronDown
                size={14}
                strokeWidth={2.3}
                className={`shrink-0 transition ${
                  openMenu === "currency" ? "rotate-180" : ""
                }`}
                aria-hidden="true"
              />
            </button>

            {openMenu === "currency" ? (
              <div
                role="menu"
                className="absolute right-0 top-full z-1001 mt-2 hidden w-44 rounded-2xl border border-border-muted bg-white p-2 text-text-strong shadow-[0_22px_70px_rgba(15,23,42,0.18)] ring-1 ring-black/5 sm:block"
              >
                {currencyOptions.map((option) => {
                  const isSelected = option.code === currency;

                  return (
                    <button
                      key={option.code}
                      type="button"
                      role="menuitem"
                      className={`flex w-full items-center justify-between gap-3 rounded-xl px-3 py-2.5 text-left text-sm font-semibold transition ${
                        isSelected
                          ? "bg-brand-soft text-brand-primary"
                          : "text-text-strong hover:bg-surface-hover"
                      }`}
                      onClick={() => {
                        setCurrency(option.code as CurrencyCode);
                        setOpenMenu(null);
                      }}
                    >
                      <span className="truncate">
                        {option.code} ({option.symbol})
                      </span>

                      {isSelected ? (
                        <Check
                          size={15}
                          strokeWidth={2.5}
                          className="shrink-0"
                          aria-hidden="true"
                        />
                      ) : null}
                    </button>
                  );
                })}
              </div>
            ) : null}
          </div>
        </div>
      </div>

      {openMenu === "language" ? (
        <div className="block border-t border-white/10 bg-white px-4 py-3 text-text-strong shadow-[0_18px_45px_rgba(15,23,42,0.14)] sm:hidden">
          <div className="mx-auto grid w-full max-w-sm gap-1">
            {languageOptions.map((option) => {
              const isSelected = option.code === language;

              return (
                <button
                  key={option.code}
                  type="button"
                  role="menuitem"
                  className={`flex min-h-11 w-full items-center justify-between gap-3 rounded-xl px-4 text-left text-sm font-semibold transition ${
                    isSelected
                      ? "bg-brand-soft text-brand-primary"
                      : "text-text-strong hover:bg-surface-hover"
                  }`}
                  onClick={() => {
                    setLanguage(option.code as LanguageCode);
                    setOpenMenu(null);
                  }}
                >
                  <span>{option.label}</span>

                  {isSelected ? (
                    <Check
                      size={15}
                      strokeWidth={2.5}
                      className="shrink-0"
                      aria-hidden="true"
                    />
                  ) : null}
                </button>
              );
            })}
          </div>
        </div>
      ) : null}

      {openMenu === "currency" ? (
        <div className="block border-t border-white/10 bg-white px-4 py-3 text-text-strong shadow-[0_18px_45px_rgba(15,23,42,0.14)] sm:hidden">
          <div className="mx-auto grid w-full max-w-sm gap-1">
            {currencyOptions.map((option) => {
              const isSelected = option.code === currency;

              return (
                <button
                  key={option.code}
                  type="button"
                  role="menuitem"
                  className={`flex min-h-11 w-full items-center justify-between gap-3 rounded-xl px-4 text-left text-sm font-semibold transition ${
                    isSelected
                      ? "bg-brand-soft text-brand-primary"
                      : "text-text-strong hover:bg-surface-hover"
                  }`}
                  onClick={() => {
                    setCurrency(option.code as CurrencyCode);
                    setOpenMenu(null);
                  }}
                >
                  <span>
                    {option.code} ({option.symbol})
                  </span>

                  {isSelected ? (
                    <Check
                      size={15}
                      strokeWidth={2.5}
                      className="shrink-0"
                      aria-hidden="true"
                    />
                  ) : null}
                </button>
              );
            })}
          </div>
        </div>
      ) : null}
    </div>
  );
}