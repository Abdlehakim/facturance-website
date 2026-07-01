"use client";

import {
  createContext,
  useContext,
  useMemo,
  useState,
  type Dispatch,
  type ReactNode,
  type SetStateAction,
} from "react";
import type { BillingCycle, CurrencyCode } from "@/lib/currency";

export type LanguageCode = "en" | "fr" | "de" | "ar";

export const languageOptions: Array<{ code: LanguageCode; label: string }> = [
  { code: "en", label: "English" },
  { code: "fr", label: "Fran\u00e7ais" },
  { code: "de", label: "Deutsch" },
  { code: "ar", label: "\u0627\u0644\u0639\u0631\u0628\u064a\u0629" },
];

type SitePreferences = {
  billingCycle: BillingCycle;
  currency: CurrencyCode;
  language: LanguageCode;
  setBillingCycle: Dispatch<SetStateAction<BillingCycle>>;
  setCurrency: Dispatch<SetStateAction<CurrencyCode>>;
  setLanguage: Dispatch<SetStateAction<LanguageCode>>;
};

const SitePreferencesContext = createContext<SitePreferences | null>(null);

export function SitePreferencesProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [billingCycle, setBillingCycle] = useState<BillingCycle>("monthly");
  const [currency, setCurrency] = useState<CurrencyCode>("EUR");
  const [language, setLanguage] = useState<LanguageCode>("en");

  const value = useMemo(
    () => ({
      billingCycle,
      currency,
      language,
      setBillingCycle,
      setCurrency,
      setLanguage,
    }),
    [billingCycle, currency, language],
  );

  return (
    <SitePreferencesContext.Provider value={value}>
      {children}
    </SitePreferencesContext.Provider>
  );
}

export function useSitePreferences() {
  const context = useContext(SitePreferencesContext);

  if (!context) {
    throw new Error(
      "useSitePreferences must be used inside SitePreferencesProvider",
    );
  }

  return context;
}
