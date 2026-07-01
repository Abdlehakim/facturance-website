"use client";

import { useEffect, useRef, useState } from "react";
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
  const menuRef = useRef<HTMLDivElement | null>(null);

  const { currency, language, setCurrency, setLanguage } = useSitePreferences();

  const selectedLanguage = languageOptions.find(
    (item) => item.code === language,
  );

  const selectedCurrency = currencyOptions.find(
    (item) => item.code === currency,
  );

  useEffect(() => {
    function handlePointerDown(event: PointerEvent) {
      if (!menuRef.current) return;

      if (!menuRef.current.contains(event.target as Node)) {
        setOpenMenu(null);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpenMenu(null);
      }
    }

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="h-10 border-t border-white/10 bg-[#005143] text-white">
      <div className="mx-auto flex h-10 w-full max-w-304 items-center justify-between px-6 xl:px-0">
        <p className="flex h-10 items-center gap-3 text-[14px] font-bold leading-none text-white">
          <Gift
            size={16}
            strokeWidth={2.4}
            className="shrink-0 text-lime-300"
            aria-hidden="true"
          />
          <span className="leading-none">
            Save up to{" "}
            <span className="font-extrabold text-lime-300">20%</span> with
            annual billing
          </span>
        </p>

        <div
          ref={menuRef}
          className="relative z-50 flex h-10 items-center gap-5 text-[14px] font-bold leading-none text-white"
        >
          <div className="relative flex h-10 items-center">
            <button
              type="button"
              aria-haspopup="menu"
              aria-expanded={openMenu === "language"}
              onClick={() =>
                setOpenMenu(openMenu === "language" ? null : "language")
              }
              className="flex h-10 items-center gap-2 border-none bg-transparent p-0 text-[14px] font-bold leading-none text-white transition hover:text-lime-200"
            >
              <Globe
                size={16}
                strokeWidth={2.3}
                className="shrink-0"
                aria-hidden="true"
              />

              <span className="leading-none">
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
              <div className="absolute right-0 top-11 w-44 rounded-2xl border border-[#dce7e5] bg-white p-2 text-[#071827] shadow-[0_22px_70px_rgba(15,23,42,0.18)] ring-1 ring-black/5">
                {languageOptions.map((option) => {
                  const isSelected = option.code === language;

                  return (
                    <button
                      key={option.code}
                      type="button"
                      className={`flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-left text-sm font-semibold transition ${
                        isSelected
                          ? "bg-[#e8f6f3] text-[#007f6d]"
                          : "text-[#071827] hover:bg-[#f6fbfa]"
                      }`}
                      onClick={() => {
                        setLanguage(option.code as LanguageCode);
                        setOpenMenu(null);
                      }}
                    >
                      <span>{option.label}</span>

                      {isSelected ? (
                        <Check size={15} strokeWidth={2.5} aria-hidden="true" />
                      ) : null}
                    </button>
                  );
                })}
              </div>
            ) : null}
          </div>

          <span className="h-5 w-px bg-white/35" aria-hidden="true" />

          <div className="relative flex h-10 items-center">
            <button
              type="button"
              aria-haspopup="menu"
              aria-expanded={openMenu === "currency"}
              onClick={() =>
                setOpenMenu(openMenu === "currency" ? null : "currency")
              }
              className="flex h-10 items-center gap-2 border-none bg-transparent p-0 text-[14px] font-bold leading-none text-white transition hover:text-lime-200"
            >
              <span className="leading-none">
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
              <div className="absolute right-0 top-11 w-44 rounded-2xl border border-[#dce7e5] bg-white p-2 text-[#071827] shadow-[0_22px_70px_rgba(15,23,42,0.18)] ring-1 ring-black/5">
                {currencyOptions.map((option) => {
                  const isSelected = option.code === currency;

                  return (
                    <button
                      key={option.code}
                      type="button"
                      className={`flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-left text-sm font-semibold transition ${
                        isSelected
                          ? "bg-[#e8f6f3] text-[#007f6d]"
                          : "text-[#071827] hover:bg-[#f6fbfa]"
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
                        <Check size={15} strokeWidth={2.5} aria-hidden="true" />
                      ) : null}
                    </button>
                  );
                })}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}