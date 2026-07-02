import { Suspense } from "react";
import type { Metadata } from "next";
import { RegisterPageContent } from "@/components/auth/RegisterPageContent";

export const metadata: Metadata = {
  title: "Register | Facturance",
  description: "Create a Facturance account.",
};

export default function RegisterPage() {
  return (
    <Suspense fallback={null}>
      <RegisterPageContent />
    </Suspense>
  );
}
