"use client";

import {
  useEffect,
  useRef,
  useState,
  type Dispatch,
  type RefObject,
  type SetStateAction,
} from "react";
import { createPortal } from "react-dom";
import { Check, ChevronDown, Gift, Globe, X } from "lucide-react";
import {
  languageOptions,
  useSitePreferences,
  type LanguageCode,
} from "@/components/layout/site-preferences-provider";
import { currencyOptions, type CurrencyCode } from "@/lib/currency";

type OpenMenu = "language" | "currency" | null;

type MobilePreferencesModalProps = {
  openMenu: OpenMenu;
  language: LanguageCode;
  currency: CurrencyCode;
  setLanguage: Dispatch<SetStateAction<LanguageCode>>;
  setCurrency: Dispatch<SetStateAction<CurrencyCode>>;
  onClose: () => void;
  modalRef: RefObject<HTMLDivElement | null>;
};

function MobilePreferencesModal({
  openMenu,
  language,
  currency,
  setLanguage,
  setCurrency,
  onClose,
  modalRef,
}: MobilePreferencesModalProps) {
  if (!openMenu || typeof document === "undefined") return null;

  const title =
    openMenu === "language" ? "Choose language" : "Choose currency";

  return createPortal(
    <div className="fixed inset-0 z-99999 sm:hidden">
      <button
        type="button"
        aria-label="Close preferences menu"
        className="absolute inset-0 h-full w-full bg-black/60 backdrop-blur-md"
        onClick={onClose}
      />

      <div className="absolute inset-0 overflow-y-auto px-4 pb-6 pt-24">
        <div
          ref={modalRef}
          role="dialog"
          aria-modal="true"
          aria-label={title}
          className="mx-auto w-full max-w-md rounded-[2rem] border border-white/20 bg-white/95 p-5 text-text-strong shadow-2xl backdrop-blur-md"
        >
          <div className="mx-auto mb-5 h-1.5 w-14 rounded-full bg-zinc-300" />

          <div className="mb-5 flex items-start justify-between gap-4">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-text-soft">
                Preferences
              </p>

              <h2 className="mt-1 text-2xl font-extrabold leading-tight text-text-strong">
                {title}
              </h2>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="grid size-11 shrink-0 place-items-center rounded-full bg-zinc-100 text-text-strong transition hover:bg-zinc-200"
              aria-label="Close"
            >
              <X size={22} strokeWidth={2.5} aria-hidden="true" />
            </button>
          </div>

          <div className="max-h-[55dvh] overflow-y-auto pr-1">
            <div className="grid gap-3">
              {openMenu === "language"
                ? languageOptions.map((option) => {
                    const isSelected = option.code === language;

                    return (
                      <button
                        key={option.code}
                        type="button"
                        role="menuitem"
                        className={`flex min-h-14 w-full items-center justify-between gap-3 rounded-2xl border px-4 text-left text-base font-bold transition ${
                          isSelected
                            ? "border-brand-primary/25 bg-brand-soft text-brand-primary"
                            : "border-border-soft bg-white text-text-strong hover:bg-surface-hover"
                        }`}
                        onClick={() => {
                          setLanguage(option.code as LanguageCode);
                          onClose();
                        }}
                      >
                        <span>{option.label}</span>

                        {isSelected ? (
                          <Check
                            size={20}
                            strokeWidth={2.7}
                            className="shrink-0"
                            aria-hidden="true"
                          />
                        ) : null}
                      </button>
                    );
                  })
                : currencyOptions.map((option) => {
                    const isSelected = option.code === currency;

                    return (
                      <button
                        key={option.code}
                        type="button"
                        role="menuitem"
                        className={`flex min-h-14 w-full items-center justify-between gap-3 rounded-2xl border px-4 text-left text-base font-bold transition ${
                          isSelected
                            ? "border-brand-primary/25 bg-brand-soft text-brand-primary"
                            : "border-border-soft bg-white text-text-strong hover:bg-surface-hover"
                        }`}
                        onClick={() => {
                          setCurrency(option.code as CurrencyCode);
                          onClose();
                        }}
                      >
                        <span>
                          {option.code} ({option.symbol})
                        </span>

                        {isSelected ? (
                          <Check
                            size={20}
                            strokeWidth={2.7}
                            className="shrink-0"
                            aria-hidden="true"
                          />
                        ) : null}
                      </button>
                    );
                  })}
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
}

export function TopUtilityBar() {
  const [openMenu, setOpenMenu] = useState<OpenMenu>(null);
  const barRef = useRef<HTMLDivElement | null>(null);
  const modalRef = useRef<HTMLDivElement | null>(null);

  const { currency, language, setCurrency, setLanguage } = useSitePreferences();

  const selectedLanguage = languageOptions.find(
    (item) => item.code === language,
  );

  const selectedCurrency = currencyOptions.find(
    (item) => item.code === currency,
  );

  useEffect(() => {
    function handlePointerDown(event: PointerEvent) {
      const target = event.target as Node;

      if (barRef.current?.contains(target)) return;
      if (modalRef.current?.contains(target)) return;

      setOpenMenu(null);
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

  useEffect(() => {
    if (!openMenu) return;
    if (typeof window === "undefined") return;

    const isMobile = window.matchMedia("(max-width: 639px)").matches;
    if (!isMobile) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [openMenu]);

  function toggleMenu(menu: Exclude<OpenMenu, null>) {
    setOpenMenu((current) => (current === menu ? null : menu));
  }

  return (
    <div
      ref={barRef}
      className="relative z-999 border-t border-white/10 bg-brand-dark text-white"
    >
      <div className="mx-auto flex min-h-10 w-full max-w-304 flex-col items-center justify-center gap-2 px-4 py-3 sm:h-10 sm:flex-row sm:justify-between sm:gap-4 sm:px-6 sm:py-0 xl:px-0">
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

        <div className="relative z-1000 flex h-9 w-full max-w-[320px] items-center justify-center gap-5 text-sm font-bold leading-none text-white sm:h-10 sm:w-auto sm:max-w-none sm:justify-end sm:gap-5 sm:text-button">
          <div className="relative flex h-full min-w-0 items-center">
            <button
              type="button"
              aria-haspopup="menu"
              aria-expanded={openMenu === "language"}
              aria-label="Select language"
              onClick={() => toggleMenu("language")}
              className="flex h-9 min-w-0 max-w-37.5 touch-manipulation items-center gap-2 rounded-md border-none bg-transparent px-1 font-bold leading-none text-white transition hover:text-lime-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-lime-200/80 sm:h-10 sm:max-w-none sm:px-0"
            >
              <Globe
                size={18}
                strokeWidth={2.3}
                className="shrink-0"
                aria-hidden="true"
              />

              <span className="truncate leading-none">
                {selectedLanguage?.label ?? "English"}
              </span>

              <ChevronDown
                size={15}
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

          <span className="h-6 w-px shrink-0 bg-white/30" aria-hidden="true" />

          <div className="relative flex h-full min-w-0 items-center">
            <button
              type="button"
              aria-haspopup="menu"
              aria-expanded={openMenu === "currency"}
              aria-label="Select currency"
              onClick={() => toggleMenu("currency")}
              className="flex h-9 min-w-0 max-w-35 touch-manipulation items-center gap-2 rounded-md border-none bg-transparent px-1 font-bold leading-none text-white transition hover:text-lime-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-lime-200/80 sm:h-10 sm:max-w-none sm:px-0"
            >
              <span className="truncate leading-none">
                {selectedCurrency
                  ? `${selectedCurrency.code} (${selectedCurrency.symbol})`
                  : "EUR (€)"}
              </span>

              <ChevronDown
                size={15}
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

      <MobilePreferencesModal
        openMenu={openMenu}
        language={language}
        currency={currency}
        setLanguage={setLanguage}
        setCurrency={setCurrency}
        onClose={() => setOpenMenu(null)}
        modalRef={modalRef}
      />
    </div>
  );
}