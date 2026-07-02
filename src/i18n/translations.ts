import type { LanguageCode } from "@/components/layout/site-preferences-provider";
import type { TranslationDictionary } from "@/i18n/types";

import { en } from "@/i18n/en";
import { fr } from "@/i18n/fr";
import { de } from "@/i18n/de";
import { ar } from "@/i18n/ar";

export const translations = {
  en,
  fr,
  de,
  ar,
} satisfies Record<LanguageCode, TranslationDictionary>;
