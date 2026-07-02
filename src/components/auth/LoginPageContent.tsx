"use client";

import Link from "next/link";
import { useTranslation } from "@/i18n/useTranslation";

export function LoginPageContent() {
  const { t } = useTranslation();

  return (
    <section className="bg-white py-20">
      <div className="mx-auto w-full max-w-md px-4 sm:px-6">
        <div className="rounded-lg border border-zinc-200 bg-surface-page p-6">
          <p className="text-sm font-semibold uppercase text-teal-700">
            {t.auth.login.badge}
          </p>
          <h1 className="mt-3 text-3xl font-semibold tracking-normal text-zinc-950">
            {t.auth.login.title}
          </h1>

          <p className="mt-3 text-sm leading-6 text-zinc-600">
            {t.auth.login.description}
          </p>

          <form className="mt-8 grid gap-5">
            <label className="grid gap-2 text-sm font-medium text-zinc-800">
              {t.auth.login.emailLabel}
              <input
                className="rounded-md border border-zinc-300 bg-white px-3 py-3 outline-none transition focus:border-teal-600"
                type="email"
                name="email"
                placeholder={t.auth.login.emailPlaceholder}
              />
            </label>
            <label className="grid gap-2 text-sm font-medium text-zinc-800">
              {t.auth.login.passwordLabel}
              <input
                className="rounded-md border border-zinc-300 bg-white px-3 py-3 outline-none transition focus:border-teal-600"
                type="password"
                name="password"
                placeholder={t.auth.login.passwordPlaceholder}
              />
            </label>
            <button className="btn btn-primary btn-md" type="button">
              {t.auth.login.button}
            </button>
          </form>

          <p className="mt-6 text-sm text-zinc-600">
            {t.auth.login.helperText}{" "}
            <Link href="/register" className="font-semibold text-teal-700">
              {t.auth.login.registerLink}
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
