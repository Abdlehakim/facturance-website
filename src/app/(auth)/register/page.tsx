import type { Metadata } from "next";
import { RegisterPageContent } from "@/components/auth/RegisterPageContent";
import { normalizeSelectedPlan } from "@/lib/plans";

export const metadata: Metadata = {
  title: "Register | Facturance",
  description: "Create a Facturance account.",
};

type RegisterPageProps = {
  searchParams: Promise<{
    plan?: string | string[];
  }>;
};

export default async function RegisterPage({
  searchParams,
}: RegisterPageProps) {
  const resolvedSearchParams = await searchParams;

  const requestedPlan = Array.isArray(resolvedSearchParams.plan)
    ? resolvedSearchParams.plan[0]
    : resolvedSearchParams.plan;

  const initialPlan = normalizeSelectedPlan(requestedPlan ?? null);

  return <RegisterPageContent initialPlan={initialPlan} />;
}
