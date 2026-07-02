import type { TranslationDictionary } from "@/i18n/types";

import { common } from "./common";
import { topBar, nav, footer } from "./layout";
import { home } from "./home";
import { pricing } from "./pricing";
import { contact } from "./contact";
import { blog } from "./blog";
import { auth } from "./auth";

export const ar = {
  common,
  topBar,
  nav,
  footer,
  home,
  pricing,
  contact,
  blog,
  auth,
} satisfies TranslationDictionary;
