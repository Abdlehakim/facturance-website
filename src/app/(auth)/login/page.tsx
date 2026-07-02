import type { Metadata } from "next";
import { LoginPageContent } from "@/components/auth/LoginPageContent";

export const metadata: Metadata = {
  title: "Login | Facturance",
  description: "Login to Facturance.",
};

export default function LoginPage() {
  return <LoginPageContent />;
}
