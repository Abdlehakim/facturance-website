import { NextRequest, NextResponse } from "next/server";
import {
  GEO_COUNTRY_COOKIE,
  GEO_CURRENCY_COOKIE,
  GEO_LANGUAGE_COOKIE,
  resolveCurrencyFromCountry,
  resolveLanguageFromAcceptLanguage,
} from "@/lib/geo-preferences";

function getCountryCode(request: NextRequest) {
  return (
    request.headers.get("x-vercel-ip-country") ||
    request.headers.get("cf-ipcountry") ||
    request.headers.get("x-country-code") ||
    ""
  ).toUpperCase();
}

export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  const countryCode = getCountryCode(request);
  const acceptLanguage = request.headers.get("accept-language");

  const language = resolveLanguageFromAcceptLanguage(acceptLanguage, countryCode);
  const currency = resolveCurrencyFromCountry(countryCode);

  const cookieOptions = {
    sameSite: "lax" as const,
    path: "/",
    maxAge: 60 * 60 * 24 * 30,
  };

  if (countryCode) {
    response.cookies.set(GEO_COUNTRY_COOKIE, countryCode, cookieOptions);
  }

  response.cookies.set(GEO_LANGUAGE_COOKIE, language, cookieOptions);
  response.cookies.set(GEO_CURRENCY_COOKIE, currency, cookieOptions);

  return response;
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)$).*)",
  ],
};
