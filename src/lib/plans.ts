export const selectablePlanIds = ["starter", "professional", "business"] as const;

export type SelectablePlanId = (typeof selectablePlanIds)[number];

export function normalizeSelectedPlan(value: string | null): SelectablePlanId {
  if (
    value === "starter" ||
    value === "professional" ||
    value === "business"
  ) {
    return value;
  }

  return "starter";
}
