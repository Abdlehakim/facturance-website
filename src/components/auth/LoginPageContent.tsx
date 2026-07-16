"use client";

import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import Link from "next/link";
import { Lock, Phone } from "lucide-react";
import { useTranslation } from "@/i18n/useTranslation";
import { API_BASE_URL } from "@/lib/api";
import { AuthTextField } from "./AuthTextField";
import { PhoneCountrySelect } from "./PhoneCountrySelect";
import {
  phoneCountryOptions,
  type PhoneCountryOption,
} from "./registerData";

type LoginFormState = {
  phoneCountry: string;
  phoneCountryCode: string;
  phoneNumber: string;
  password: string;
};

type RememberedLoginPhone = {
  phoneCountry: string;
  phoneCountryCode: string;
  phoneNumber: string;
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
  phoneCountry: "United States",
  phoneCountryCode: "+1",
  phoneNumber: "",
  password: "",
};

const DASHBOARD_BASE_URL =
  process.env.NEXT_PUBLIC_DASHBOARD_BASE_URL ?? "http://localhost:5173";

const REMEMBERED_LOGIN_PHONE_STORAGE_KEY =
  "facturance.rememberedLoginPhone";

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

function parseRememberedLoginPhone(
  value: string | null,
): RememberedLoginPhone | null {
  if (!value) {
    return null;
  }

  try {
    const parsedValue = JSON.parse(value) as Partial<RememberedLoginPhone>;

    if (
      typeof parsedValue.phoneCountry === "string" &&
      typeof parsedValue.phoneCountryCode === "string" &&
      typeof parsedValue.phoneNumber === "string" &&
      parsedValue.phoneCountry &&
      parsedValue.phoneCountryCode
    ) {
      return {
        phoneCountry: parsedValue.phoneCountry,
        phoneCountryCode: parsedValue.phoneCountryCode,
        phoneNumber: parsedValue.phoneNumber,
      };
    }

    return null;
  } catch {
    return null;
  }
}

export function LoginPageContent() {
  const { t } = useTranslation();
  const [formValues, setFormValues] =
    useState<LoginFormState>(initialFormState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isRememberPhoneEnabled, setIsRememberPhoneEnabled] = useState(false);

  useEffect(() => {
    const rememberedPhone = parseRememberedLoginPhone(
      window.localStorage.getItem(REMEMBERED_LOGIN_PHONE_STORAGE_KEY),
    );

    if (!rememberedPhone) {
      return;
    }

    setFormValues((currentValues) => ({
      ...currentValues,
      phoneCountry: rememberedPhone.phoneCountry,
      phoneCountryCode: rememberedPhone.phoneCountryCode,
      phoneNumber: rememberedPhone.phoneNumber,
    }));
    setIsRememberPhoneEnabled(true);
  }, []);

  function handleFieldChange(field: keyof LoginFormState) {
    return (event: ChangeEvent<HTMLInputElement>) => {
      setFormValues((currentValues) => ({
        ...currentValues,
        [field]: event.target.value,
      }));
      setErrorMessage(null);
    };
  }

  function handlePhoneCountrySelect(option: PhoneCountryOption) {
    setFormValues((currentValues) => ({
      ...currentValues,
      phoneCountry: option.country,
      phoneCountryCode: option.code,
    }));
    setErrorMessage(null);
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const requestBody = {
      phoneCountry: formValues.phoneCountry,
      phoneCountryCode: formValues.phoneCountryCode,
      phoneNumber: formValues.phoneNumber.trim(),
      password: formValues.password,
    };

    if (
      !requestBody.phoneCountry ||
      !requestBody.phoneCountryCode ||
      !requestBody.phoneNumber ||
      !requestBody.password
    ) {
      setErrorMessage(t.auth.login.error);
      return;
    }

    setIsSubmitting(true);
    setErrorMessage(null);

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

      const loginResponse = responseBody as LoginResponse;

      if (isRememberPhoneEnabled) {
        window.localStorage.setItem(
          REMEMBERED_LOGIN_PHONE_STORAGE_KEY,
          JSON.stringify({
            phoneCountry: requestBody.phoneCountry,
            phoneCountryCode: requestBody.phoneCountryCode,
            phoneNumber: requestBody.phoneNumber,
          } satisfies RememberedLoginPhone),
        );
      } else {
        window.localStorage.removeItem(REMEMBERED_LOGIN_PHONE_STORAGE_KEY);
      }

      window.location.href = `${DASHBOARD_BASE_URL}/dashboard#access_token=${encodeURIComponent(
        loginResponse.session.accessToken,
      )}`;
    } catch {
      setErrorMessage(t.auth.login.error);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section className="flex min-h-[calc(100vh-72px)] items-center bg-white px-4 py-8 sm:px-6 sm:py-10">
      <div className="mx-auto w-full max-w-xl">
        <div className="rounded-2xl border border-zinc-200/80 bg-surface-page p-5 shadow-xl shadow-zinc-950/5 sm:p-6">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-teal-700">
            {t.auth.login.badge}
          </p>

          <h1 className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-zinc-950">
            {t.auth.login.title}
          </h1>

          <p className="mt-3 text-sm leading-6 text-zinc-600">
            {t.auth.login.description}
          </p>

          <form className="mt-6 grid gap-4" onSubmit={handleSubmit}>
            <div className="grid gap-4 sm:grid-cols-[minmax(150px,180px)_minmax(0,1fr)]">
              <PhoneCountrySelect
                label={t.auth.login.phoneCountryLabel}
                placeholder={t.auth.login.phoneCountryPlaceholder}
                selectedCountry={formValues.phoneCountry}
                selectedCode={formValues.phoneCountryCode}
                options={phoneCountryOptions}
                onSelect={handlePhoneCountrySelect}
              />

              <AuthTextField
                label={t.auth.login.phoneNumberLabel}
                icon={Phone}
                type="tel"
                name="phoneNumber"
                placeholder={t.auth.login.phoneNumberPlaceholder}
                value={formValues.phoneNumber}
                onChange={handleFieldChange("phoneNumber")}
                inputMode="tel"
                autoComplete="tel"
              />
            </div>

            <AuthTextField
              label={t.auth.login.passwordLabel}
              icon={Lock}
              type="password"
              name="password"
              placeholder={t.auth.login.passwordPlaceholder}
              value={formValues.password}
              onChange={handleFieldChange("password")}
            />

            <label className="flex items-center gap-3 text-sm font-medium text-zinc-700">
              <input
                className="h-4 w-4 rounded border-zinc-300 text-teal-700 focus:ring-teal-600"
                type="checkbox"
                checked={isRememberPhoneEnabled}
                onChange={(event) =>
                  setIsRememberPhoneEnabled(event.target.checked)
                }
              />
              <span>{t.auth.login.rememberPhoneLabel}</span>
            </label>

            {errorMessage ? (
              <p
                className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
                role="alert"
              >
                {errorMessage}
              </p>
            ) : null}

            <button
              className="btn btn-primary btn-md h-11 w-full rounded-xl font-semibold shadow-lg shadow-teal-900/10 disabled:cursor-not-allowed disabled:opacity-70"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? t.auth.login.signingIn : t.auth.login.button}
            </button>
          </form>

          <p className="mt-5 text-center text-sm text-zinc-600">
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
