export type CurrencyCode = "EUR" | "TND" | "USD" | "GBP";
export type BillingCycle = "monthly" | "yearly";
export type CurrencyPosition = "before" | "after";

export type CurrencyOption = {
  code: CurrencyCode;
  symbol: string;
  rate: number;
  position: CurrencyPosition;
};

export const currencyOptions: CurrencyOption[] = [
  { code: "EUR", symbol: "\u20ac", rate: 1, position: "before" },
  { code: "TND", symbol: "TND", rate: 3.4, position: "after" },
  { code: "USD", symbol: "$", rate: 1.08, position: "before" },
  { code: "GBP", symbol: "\u00a3", rate: 0.85, position: "before" },
];

export const yearlyDiscountRate = 0.2;

function getCurrency(currency: CurrencyCode) {
  return (
    currencyOptions.find((option) => option.code === currency) ??
    currencyOptions[0]
  );
}

export function formatPrice(amountEur: number, currency: CurrencyCode) {
  const option = getCurrency(currency);
  const amount = Math.round(amountEur * option.rate);

  if (option.position === "after") {
    return `${amount} ${option.symbol}`;
  }

  return `${option.symbol}${amount}`;
}

export function getBillingPrice(amountEur: number, billingCycle: BillingCycle) {
  if (billingCycle === "yearly") {
    return amountEur * (1 - yearlyDiscountRate);
  }

  return amountEur;
}
