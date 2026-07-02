import type { Metadata } from "next";
import { ContactPageContent } from "@/components/contact/ContactPageContent";

export const metadata: Metadata = {
  title: "Contact | Facturance",
  description: "Contact the Facturance team.",
};

export default function ContactPage() {
  return <ContactPageContent />;
}
