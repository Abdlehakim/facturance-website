"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type Dispatch,
  type ReactNode,
  type SetStateAction,
} from "react";
import {
  currencyOptions,
  type BillingCycle,
  type CurrencyCode,
} from "@/lib/currency";
import {
  GEO_CURRENCY_COOKIE,
  GEO_LANGUAGE_COOKIE,
  isSupportedCurrency,
  isSupportedLanguage,
} from "@/lib/geo-preferences";

export type LanguageCode = "en" | "fr" | "de" | "ar";

export const languageOptions: Array<{ code: LanguageCode; label: string }> = [
  { code: "en", label: "English" },
  { code: "fr", label: "Fran\u00e7ais" },
  { code: "de", label: "Deutsch" },
  { code: "ar", label: "\u0627\u0644\u0639\u0631\u0628\u064a\u0629" },
];

const LANGUAGE_STORAGE_KEY = "facturance-language";
const CURRENCY_STORAGE_KEY = "facturance-currency";
const BILLING_CYCLE_STORAGE_KEY = "facturance-billing-cycle";

function isLanguageCode(value: string | null): value is LanguageCode {
  return languageOptions.some((option) => option.code === value);
}

function isBillingCycle(value: string | null): value is BillingCycle {
  return value === "monthly" || value === "yearly";
}

function isCurrencyCode(value: string | null): value is CurrencyCode {
  return currencyOptions.some((option) => option.code === value);
}

function getStoredPreference(key: string) {
  try {
    return window.localStorage.getItem(key);
  } catch {
    return null;
  }
}

function getCookiePreference(key: string) {
  if (typeof document === "undefined") return null;

  const cookie = document.cookie
    .split("; ")
    .find((item) => item.startsWith(`${key}=`));

  if (!cookie) return null;

  try {
    return decodeURIComponent(cookie.split("=").slice(1).join("="));
  } catch {
    return null;
  }
}

function setStoredPreference(key: string, value: string) {
  try {
    window.localStorage.setItem(key, value);
  } catch {
    // Storage can be unavailable in restricted browsing contexts.
  }
}

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
  const [hasLoadedPreferences, setHasLoadedPreferences] = useState(false);

  useEffect(() => {
    /* eslint-disable react-hooks/set-state-in-effect */
    const savedLanguage = getStoredPreference(LANGUAGE_STORAGE_KEY);
    const savedCurrency = getStoredPreference(CURRENCY_STORAGE_KEY);
    const savedBillingCycle = getStoredPreference(BILLING_CYCLE_STORAGE_KEY);

    const geoLanguage = getCookiePreference(GEO_LANGUAGE_COOKIE);
    const geoCurrency = getCookiePreference(GEO_CURRENCY_COOKIE);

    if (isLanguageCode(savedLanguage)) {
      setLanguage(savedLanguage);
    } else if (isSupportedLanguage(geoLanguage)) {
      setLanguage(geoLanguage);
    }

    if (isCurrencyCode(savedCurrency)) {
      setCurrency(savedCurrency);
    } else if (isSupportedCurrency(geoCurrency)) {
      setCurrency(geoCurrency);
    }

    if (isBillingCycle(savedBillingCycle)) {
      setBillingCycle(savedBillingCycle);
    }

    setHasLoadedPreferences(true);
    /* eslint-enable react-hooks/set-state-in-effect */
  }, []);

  useEffect(() => {
    if (!hasLoadedPreferences) return;

    setStoredPreference(LANGUAGE_STORAGE_KEY, language);
    document.documentElement.lang = language;
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
  }, [hasLoadedPreferences, language]);

  useEffect(() => {
    if (!hasLoadedPreferences) return;

    setStoredPreference(CURRENCY_STORAGE_KEY, currency);
  }, [currency, hasLoadedPreferences]);

  useEffect(() => {
    if (!hasLoadedPreferences) return;

    setStoredPreference(BILLING_CYCLE_STORAGE_KEY, billingCycle);
  }, [billingCycle, hasLoadedPreferences]);

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
