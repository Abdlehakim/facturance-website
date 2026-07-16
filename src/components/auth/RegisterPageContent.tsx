"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import Link from "next/link";
import { Building2, Lock, Mail, Phone, User } from "lucide-react";
import { getPricingPlans } from "@/data/pricing-plans";
import { useTranslation } from "@/i18n/useTranslation";
import { API_BASE_URL } from "@/lib/api";
import {
  selectablePlanIds,
  type SelectablePlanId,
} from "@/lib/plans";
import { AuthTextField } from "./AuthTextField";
import { PhoneCountrySelect } from "./PhoneCountrySelect";
import {
  PlanSelect,
  type PlanSelectOption,
} from "./PlanSelect";
import {
  initialFormState,
  phoneCountryOptions,
  type ApiErrorResponse,
  type PhoneCountryOption,
  type RegisterFormState,
  type RegisterResponse,
} from "./registerData";

const DASHBOARD_BASE_URL =
  process.env.NEXT_PUBLIC_DASHBOARD_BASE_URL ?? "http://localhost:5173";

type RegisterPageContentProps = {
  initialPlan: SelectablePlanId;
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

function isSelectablePlanId(value: string): value is SelectablePlanId {
  return selectablePlanIds.includes(value as SelectablePlanId);
}

export function RegisterPageContent({
  initialPlan,
}: RegisterPageContentProps) {
  const { t, language } = useTranslation();
  const [selectedPlan, setSelectedPlan] =
    useState<SelectablePlanId>(initialPlan);
  const [formValues, setFormValues] =
    useState<RegisterFormState>(initialFormState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const selectablePlans: PlanSelectOption[] = getPricingPlans(language).flatMap(
    (plan) =>
      isSelectablePlanId(plan.id)
        ? [
            {
              id: plan.id,
              label: plan.name,
            },
          ]
        : [],
  );

  function handleFieldChange(field: keyof RegisterFormState) {
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

  function handlePlanSelect(planId: SelectablePlanId) {
    setSelectedPlan(planId);
    setErrorMessage(null);
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const requestBody = {
      fullName: formValues.fullName.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
      companyName: formValues.companyName.trim(),
      phoneCountry: formValues.phoneCountry,
      phoneCountryCode: formValues.phoneCountryCode,
      phoneNumber: formValues.phoneNumber.trim(),
      planId: selectedPlan,
    };

    if (
      !requestBody.fullName ||
      !requestBody.email ||
      !requestBody.password ||
      !requestBody.companyName ||
      !requestBody.phoneCountry ||
      !requestBody.phoneCountryCode ||
      !requestBody.phoneNumber
    ) {
      setErrorMessage(t.auth.register.error);
      return;
    }

    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const response = await fetch(`${API_BASE_URL}/auth/register`, {
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
            ? `${t.auth.register.error} ${apiErrorMessage}`
            : t.auth.register.error,
        );
        setIsSubmitting(false);
        return;
      }

      const registerResponse = responseBody as RegisterResponse;

      window.location.href = `${DASHBOARD_BASE_URL}/dashboard/onboarding#access_token=${encodeURIComponent(
        registerResponse.session.accessToken,
      )}`;
    } catch {
      setErrorMessage(t.auth.register.error);
      setIsSubmitting(false);
    }
  }

  return (
    <section className="flex min-h-[calc(100vh-72px)] items-center bg-white px-4 py-8 sm:px-6 sm:py-10">
      <div className="mx-auto w-full max-w-xl">
        <div className="rounded-2xl border border-zinc-200/80 bg-surface-page p-5 shadow-xl shadow-zinc-950/5 sm:p-6">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-teal-700">
            {t.auth.register.badge}
          </p>

          <h1 className="mt-3 max-w-md text-3xl font-semibold leading-tight tracking-tight text-zinc-950">
            {t.auth.register.title}
          </h1>

          <p className="mt-3 text-sm leading-6 text-zinc-600">
            {t.auth.register.description}
          </p>

          <div className="mt-6">
            <PlanSelect
              label={t.auth.register.selectedPlan}
              selectedPlan={selectedPlan}
              options={selectablePlans}
              disabled={isSubmitting}
              onSelect={handlePlanSelect}
            />
          </div>

          <form className="mt-6 grid gap-4" onSubmit={handleSubmit}>
            <div className="grid gap-4 sm:grid-cols-2">
              <AuthTextField
                label={t.auth.register.fullNameLabel}
                icon={User}
                type="text"
                name="fullName"
                placeholder={t.auth.register.fullNamePlaceholder}
                value={formValues.fullName}
                onChange={handleFieldChange("fullName")}
              />

              <AuthTextField
                label={t.auth.register.companyLabel}
                icon={Building2}
                type="text"
                name="companyName"
                placeholder={t.auth.register.companyPlaceholder}
                value={formValues.companyName}
                onChange={handleFieldChange("companyName")}
              />
            </div>

            <AuthTextField
              label={t.auth.register.emailLabel}
              icon={Mail}
              type="email"
              name="email"
              placeholder={t.auth.register.emailPlaceholder}
              value={formValues.email}
              onChange={handleFieldChange("email")}
            />

            <div className="grid gap-4 sm:grid-cols-[minmax(150px,180px)_minmax(0,1fr)]">
              <PhoneCountrySelect
                label={t.auth.register.phoneCountryLabel}
                placeholder={t.auth.register.phoneCountryPlaceholder}
                selectedCountry={formValues.phoneCountry}
                selectedCode={formValues.phoneCountryCode}
                options={phoneCountryOptions}
                onSelect={handlePhoneCountrySelect}
              />

              <AuthTextField
                label={t.auth.register.phoneNumberLabel}
                icon={Phone}
                type="tel"
                name="phoneNumber"
                placeholder={t.auth.register.phoneNumberPlaceholder}
                value={formValues.phoneNumber}
                onChange={handleFieldChange("phoneNumber")}
                inputMode="tel"
                autoComplete="tel"
              />
            </div>

            <AuthTextField
              label={t.auth.register.passwordLabel}
              icon={Lock}
              type="password"
              name="password"
              placeholder={t.auth.register.passwordPlaceholder}
              value={formValues.password}
              onChange={handleFieldChange("password")}
            />

            {errorMessage ? (
              <p
                className="rounded-sm border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
                role="alert"
              >
                {errorMessage}
              </p>
            ) : null}

            <button
              className="btn btn-primary btn-md h-11 w-full rounded-sm font-semibold shadow-lg shadow-teal-900/10 disabled:cursor-not-allowed disabled:opacity-70"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting
                ? t.auth.register.creatingAccount
                : t.auth.register.button}
            </button>
          </form>

          <p className="mt-5 text-center text-sm text-zinc-600">
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
