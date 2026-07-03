import type { SelectablePlanId } from "@/lib/plans";

export const selectedPlanLabels: Record<SelectablePlanId, string> = {
  starter: "Starter",
  professional: "Professional",
  business: "Business",
};

export const phoneCountryOptions = [
  { country: "Tunisia", code: "+216", shortCode: "TUN" },
  { country: "France", code: "+33", shortCode: "FRA" },
  { country: "Morocco", code: "+212", shortCode: "MAR" },
  { country: "Algeria", code: "+213", shortCode: "DZA" },
  { country: "Belgium", code: "+32", shortCode: "BEL" },
  { country: "Switzerland", code: "+41", shortCode: "CHE" },
  { country: "Canada", code: "+1", shortCode: "CAN" },
  { country: "Germany", code: "+49", shortCode: "DEU" },
  { country: "Italy", code: "+39", shortCode: "ITA" },
  { country: "Spain", code: "+34", shortCode: "ESP" },
  { country: "United Kingdom", code: "+44", shortCode: "GBR" },
  { country: "United States", code: "+1", shortCode: "USA" },
  { country: "United Arab Emirates", code: "+971", shortCode: "ARE" },
  { country: "Saudi Arabia", code: "+966", shortCode: "SAU" },
  { country: "Qatar", code: "+974", shortCode: "QAT" },
  { country: "Kuwait", code: "+965", shortCode: "KWT" },
  { country: "Bahrain", code: "+973", shortCode: "BHR" },
  { country: "Oman", code: "+968", shortCode: "OMN" },
  { country: "Egypt", code: "+20", shortCode: "EGY" },
  { country: "Jordan", code: "+962", shortCode: "JOR" },
] as const;

export type PhoneCountryOption = (typeof phoneCountryOptions)[number];

export type RegisterFormState = {
  fullName: string;
  companyName: string;
  email: string;
  phoneCountry: string;
  phoneCountryCode: string;
  phoneNumber: string;
  password: string;
};

export type RegisterResponse = {
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
    subscriptionStatus: "trialing" | "active";
  };
  subscription: {
    id: string;
    tenantId: string;
    planId: SelectablePlanId;
    status: "trialing" | "active";
    billingCycle: "monthly" | "yearly";
  };
  session: {
    accessToken: string;
    tokenType: "Bearer";
  };
  redirectTo: string;
};

export type ApiErrorResponse = {
  message?: string | string[];
};

export const initialFormState: RegisterFormState = {
  fullName: "",
  companyName: "",
  email: "",
  phoneCountry: "United States",
  phoneCountryCode: "+1",
  phoneNumber: "",
  password: "",
};