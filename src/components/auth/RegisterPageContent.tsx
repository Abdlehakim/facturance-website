"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useTranslation } from "@/i18n/useTranslation";
import { API_BASE_URL } from "@/lib/api";
import {
  normalizeSelectedPlan,
  type SelectablePlanId,
} from "@/lib/plans";

const selectedPlanLabels: Record<SelectablePlanId, string> = {
  starter: "Starter",
  professional: "Professional",
  business: "Business",
};

type RegisterFormState = {
  fullName: string;
  companyName: string;
  email: string;
  password: string;
};

type RegisterResponse = {
  user: {
    id: string;
    email: string;
    fullName: string;
  };
  tenant: {
    id: string;
    companyName: string;
    ownerUserId: string;
    planId: SelectablePlanId;
    subscriptionStatus: "trialing";
  };
  subscription: {
    id: string;
    tenantId: string;
    planId: SelectablePlanId;
    status: "trialing";
    billingCycle: "monthly";
  };
  redirectTo: string;
};

type ApiErrorResponse = {
  message?: string | string[];
};

const initialFormState: RegisterFormState = {
  fullName: "",
  companyName: "",
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

export function RegisterPageContent() {
  const searchParams = useSearchParams();
  const { t } = useTranslation();
  const selectedPlan = normalizeSelectedPlan(searchParams.get("plan"));
  const [formValues, setFormValues] =
    useState<RegisterFormState>(initialFormState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [registerResponse, setRegisterResponse] =
    useState<RegisterResponse | null>(null);

  function handleFieldChange(field: keyof RegisterFormState) {
    return (event: ChangeEvent<HTMLInputElement>) => {
      setFormValues((currentValues) => ({
        ...currentValues,
        [field]: event.target.value,
      }));
      setErrorMessage(null);
      setRegisterResponse(null);
    };
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const requestBody = {
      fullName: formValues.fullName.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
      companyName: formValues.companyName.trim(),
      planId: selectedPlan,
    };

    if (
      !requestBody.fullName ||
      !requestBody.email ||
      !requestBody.password ||
      !requestBody.companyName
    ) {
      setErrorMessage(t.auth.register.error);
      setRegisterResponse(null);
      return;
    }

    setIsSubmitting(true);
    setErrorMessage(null);
    setRegisterResponse(null);

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
        return;
      }

      setRegisterResponse(responseBody as RegisterResponse);
    } catch {
      setErrorMessage(t.auth.register.error);
    } finally {
      setIsSubmitting(false);
    }
  }

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

          <div className="mt-5 rounded-md border border-teal-100 bg-teal-50 px-4 py-3 text-sm text-zinc-700">
            <span className="font-medium text-zinc-950">
              {t.auth.register.selectedPlan}:
            </span>{" "}
            {selectedPlanLabels[selectedPlan]}
          </div>

          <form className="mt-8 grid gap-5" onSubmit={handleSubmit}>
            <input type="hidden" name="planId" value={selectedPlan} readOnly />
            <label className="grid gap-2 text-sm font-medium text-zinc-800">
              {t.auth.register.fullNameLabel}
              <input
                className="rounded-md border border-zinc-300 bg-white px-3 py-3 outline-none transition focus:border-teal-600"
                type="text"
                name="fullName"
                placeholder={t.auth.register.fullNamePlaceholder}
                value={formValues.fullName}
                onChange={handleFieldChange("fullName")}
              />
            </label>
            <label className="grid gap-2 text-sm font-medium text-zinc-800">
              {t.auth.register.companyLabel}
              <input
                className="rounded-md border border-zinc-300 bg-white px-3 py-3 outline-none transition focus:border-teal-600"
                type="text"
                name="companyName"
                placeholder={t.auth.register.companyPlaceholder}
                value={formValues.companyName}
                onChange={handleFieldChange("companyName")}
              />
            </label>
            <label className="grid gap-2 text-sm font-medium text-zinc-800">
              {t.auth.register.emailLabel}
              <input
                className="rounded-md border border-zinc-300 bg-white px-3 py-3 outline-none transition focus:border-teal-600"
                type="email"
                name="email"
                placeholder={t.auth.register.emailPlaceholder}
                value={formValues.email}
                onChange={handleFieldChange("email")}
              />
            </label>
            <label className="grid gap-2 text-sm font-medium text-zinc-800">
              {t.auth.register.passwordLabel}
              <input
                className="rounded-md border border-zinc-300 bg-white px-3 py-3 outline-none transition focus:border-teal-600"
                type="password"
                name="password"
                placeholder={t.auth.register.passwordPlaceholder}
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

            {registerResponse ? (
              <div
                className="rounded-md border border-teal-200 bg-teal-50 px-4 py-3 text-sm text-zinc-700"
                role="status"
                aria-live="polite"
              >
                <p className="font-semibold text-teal-800">
                  {t.auth.register.success}
                </p>
                <p className="mt-2">
                  <span className="font-medium text-zinc-950">
                    {t.auth.register.companyLabel}:
                  </span>{" "}
                  {registerResponse.tenant.companyName}
                </p>
                <p className="mt-1">
                  <span className="font-medium text-zinc-950">
                    {t.auth.register.selectedPlan}:
                  </span>{" "}
                  {selectedPlanLabels[registerResponse.tenant.planId]}
                </p>
                <Link
                  href={registerResponse.redirectTo}
                  className="btn btn-primary btn-md mt-4"
                >
                  Continue to onboarding
                </Link>
              </div>
            ) : null}

            <button
              className="btn btn-primary btn-md disabled:cursor-not-allowed disabled:opacity-70"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting
                ? t.auth.register.creatingAccount
                : t.auth.register.button}
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
