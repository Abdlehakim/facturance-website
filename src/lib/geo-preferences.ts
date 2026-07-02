import type { LanguageCode } from "@/components/layout/site-preferences-provider";
import type { CurrencyCode } from "@/lib/currency";

export const GEO_COUNTRY_COOKIE = "facturance-geo-country";
export const GEO_LANGUAGE_COOKIE = "facturance-geo-language";
export const GEO_CURRENCY_COOKIE = "facturance-geo-currency";

export function isSupportedLanguage(
  value: string | null | undefined,
): value is LanguageCode {
  return value === "en" || value === "fr" || value === "de" || value === "ar";
}

export function isSupportedCurrency(
  value: string | null | undefined,
): value is CurrencyCode {
  return value === "EUR" || value === "TND" || value === "USD" || value === "GBP";
}

function normalizeCountryCode(countryCode: string | null | undefined) {
  return countryCode?.trim().toUpperCase() ?? "";
}

export function resolveCurrencyFromCountry(
  countryCode: string | null | undefined,
): CurrencyCode {
  const country = normalizeCountryCode(countryCode);

  if (country === "TN") return "TND";
  if (country === "US") return "USD";
  if (country === "GB" || country === "UK") return "GBP";

  const euroCountries = new Set([
    "AT",
    "BE",
    "CY",
    "EE",
    "FI",
    "FR",
    "DE",
    "GR",
    "HR",
    "IE",
    "IT",
    "LV",
    "LT",
    "LU",
    "MT",
    "NL",
    "PT",
    "SK",
    "SI",
    "ES",
  ]);

  if (euroCountries.has(country)) return "EUR";

  return "EUR";
}

export function resolveLanguageFromCountry(
  countryCode: string | null | undefined,
): LanguageCode {
  const country = normalizeCountryCode(countryCode);

  if (
    country === "TN" ||
    country === "FR" ||
    country === "BE" ||
    country === "LU" ||
    country === "MC"
  ) {
    return "fr";
  }

  if (country === "DE" || country === "AT") {
    return "de";
  }

  const arabicCountries = new Set([
    "AE",
    "BH",
    "DZ",
    "EG",
    "IQ",
    "JO",
    "KW",
    "LB",
    "LY",
    "MA",
    "OM",
    "PS",
    "QA",
    "SA",
    "SD",
    "SY",
    "YE",
  ]);

  if (arabicCountries.has(country)) return "ar";

  return "en";
}

export function resolveLanguageFromAcceptLanguage(
  acceptLanguage: string | null | undefined,
  fallbackCountry?: string | null,
): LanguageCode {
  const languageHeader = acceptLanguage?.toLowerCase() ?? "";

  const requestedLanguages = languageHeader
    .split(",")
    .map((part) => part.trim().split(";")[0]?.trim())
    .filter(Boolean);

  for (const locale of requestedLanguages) {
    const primary = locale.split("-")[0];

    if (primary === "en" || primary === "fr" || primary === "de" || primary === "ar") {
      return primary;
    }
  }

  return resolveLanguageFromCountry(fallbackCountry);
}
