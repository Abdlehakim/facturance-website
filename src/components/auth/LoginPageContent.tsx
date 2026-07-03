"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import Link from "next/link";
import { useTranslation } from "@/i18n/useTranslation";
import { API_BASE_URL } from "@/lib/api";

type LoginFormState = {
  email: string;
  password: string;
};

type LoginResponse = {
  user: {
    id: string;
    email: string;
    fullName: string;
  };
  session: {
    accessToken: string;
    tokenType: "Bearer";
  };
};

type ApiErrorResponse = {
  message?: string | string[];
};

const initialFormState: LoginFormState = {
  email: "",
  password: "",
};

function getApiErrorMessage(responseBody: unknown) {
  if (!responseBody || typeof responseBody !== "object") {
    return null;
  }

  const message = (responseBody as ApiErrorResponse).message;

  if (Array.isArray(message)) {
    return message.join(" ");
  }

  if (typeof message === "string") {
    return message;
  }

  return null;
}

export function LoginPageContent() {
  const { t } = useTranslation();
  const [formValues, setFormValues] =
    useState<LoginFormState>(initialFormState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [loginResponse, setLoginResponse] = useState<LoginResponse | null>(null);

  function handleFieldChange(field: keyof LoginFormState) {
    return (event: ChangeEvent<HTMLInputElement>) => {
      setFormValues((currentValues) => ({
        ...currentValues,
        [field]: event.target.value,
      }));
      setErrorMessage(null);
      setLoginResponse(null);
    };
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const requestBody = {
      email: formValues.email.trim(),
      password: formValues.password,
    };

    if (!requestBody.email || !requestBody.password) {
      setErrorMessage(t.auth.login.error);
      setLoginResponse(null);
      return;
    }

    setIsSubmitting(true);
    setErrorMessage(null);
    setLoginResponse(null);

    try {
      const response = await fetch(`${API_BASE_URL}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });

      const responseBody = (await response.json().catch(() => null)) as unknown;

      if (!response.ok) {
        const apiErrorMessage = getApiErrorMessage(responseBody);
        setErrorMessage(
          apiErrorMessage
            ? `${t.auth.login.error} ${apiErrorMessage}`
            : t.auth.login.error,
        );
        return;
      }

      setLoginResponse(responseBody as LoginResponse);
    } catch {
      setErrorMessage(t.auth.login.error);
    } finally {
      setIsSubmitting(false);
    }
  }

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

          <form className="mt-8 grid gap-5" onSubmit={handleSubmit}>
            <label className="grid gap-2 text-sm font-medium text-zinc-800">
              {t.auth.login.emailLabel}
              <input
                className="rounded-md border border-zinc-300 bg-white px-3 py-3 outline-none transition focus:border-teal-600"
                type="email"
                name="email"
                placeholder={t.auth.login.emailPlaceholder}
                value={formValues.email}
                onChange={handleFieldChange("email")}
              />
            </label>
            <label className="grid gap-2 text-sm font-medium text-zinc-800">
              {t.auth.login.passwordLabel}
              <input
                className="rounded-md border border-zinc-300 bg-white px-3 py-3 outline-none transition focus:border-teal-600"
                type="password"
                name="password"
                placeholder={t.auth.login.passwordPlaceholder}
                value={formValues.password}
                onChange={handleFieldChange("password")}
              />
            </label>

            {errorMessage ? (
              <p
                className="rounded-md border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
                role="alert"
              >
                {errorMessage}
              </p>
            ) : null}

            {loginResponse ? (
              <div
                className="rounded-md border border-teal-200 bg-teal-50 px-4 py-3 text-sm text-zinc-700"
                role="status"
                aria-live="polite"
              >
                <p className="font-semibold text-teal-800">
                  {t.auth.login.success}
                </p>
                <p className="mt-2">
                  <span className="font-medium text-zinc-950">
                    {t.auth.login.signedInAs}:
                  </span>{" "}
                  {loginResponse.user.fullName}
                </p>
                <p className="mt-1">
                  <span className="font-medium text-zinc-950">
                    {t.auth.login.tokenType}:
                  </span>{" "}
                  {loginResponse.session.tokenType}
                </p>
              </div>
            ) : null}

            <button
              className="btn btn-primary btn-md disabled:cursor-not-allowed disabled:opacity-70"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? t.auth.login.signingIn : t.auth.login.button}
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
