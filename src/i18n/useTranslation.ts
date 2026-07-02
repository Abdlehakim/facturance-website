"use client";

import { useSitePreferences } from "@/components/layout/site-preferences-provider";
import { translations } from "@/i18n/translations";

export function useTranslation() {
  const { language } = useSitePreferences();

  return {
    language,
    isRtl: language === "ar",
    t: translations[language],
  };
}
