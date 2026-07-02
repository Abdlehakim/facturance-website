"use client";

import Link from "next/link";
import { useTranslation } from "@/i18n/useTranslation";

export function RegisterPageContent() {
  const { t } = useTranslation();

  return (
    <section className="bg-white py-20">
      <div className="mx-auto w-full max-w-md px-4 sm:px-6">
        <div className="rounded-lg border border-zinc-200 bg-surface-page p-6">
          <p className="text-sm font-semibold uppercase text-teal-700">
            {t.auth.register.badge}
          </p>
          <h1 className="mt-3 text-3xl font-semibold tracking-normal text-zinc-950">
            {t.auth.register.title}
          </h1>

          <p className="mt-3 text-sm leading-6 text-zinc-600">
            {t.auth.register.description}
          </p>

          <form className="mt-8 grid gap-5">
            <label className="grid gap-2 text-sm font-medium text-zinc-800">
              {t.auth.register.companyLabel}
              <input
                className="rounded-md border border-zinc-300 bg-white px-3 py-3 outline-none transition focus:border-teal-600"
                type="text"
                name="company"
                placeholder={t.auth.register.companyPlaceholder}
              />
            </label>
            <label className="grid gap-2 text-sm font-medium text-zinc-800">
              {t.auth.register.emailLabel}
              <input
                className="rounded-md border border-zinc-300 bg-white px-3 py-3 outline-none transition focus:border-teal-600"
                type="email"
                name="email"
                placeholder={t.auth.register.emailPlaceholder}
              />
            </label>
            <label className="grid gap-2 text-sm font-medium text-zinc-800">
              {t.auth.register.passwordLabel}
              <input
                className="rounded-md border border-zinc-300 bg-white px-3 py-3 outline-none transition focus:border-teal-600"
                type="password"
                name="password"
                placeholder={t.auth.register.passwordPlaceholder}
              />
            </label>
            <button className="btn btn-primary btn-md" type="button">
              {t.auth.register.button}
            </button>
          </form>

          <p className="mt-6 text-sm text-zinc-600">
            {t.auth.register.helperText}{" "}
            <Link href="/login" className="font-semibold text-teal-700">
              {t.auth.register.loginLink}
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
