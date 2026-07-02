import {
  Globe,
  Headphones,
  RefreshCw,
  ShieldCheck,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";
import { IconBadge } from "@/components/ui/IconBadge";
import { pricingBenefits } from "@/data/pricing-plans";

const benefitIcons: LucideIcon[] = [
  ShieldCheck,
  Globe,
  RefreshCw,
  Headphones,
  TrendingUp,
];

export function PricingBenefits() {
  return (
    <section className="mx-auto mt-16 w-full max-w-304 px-6 xl:px-0">
      <div className="grid grid-cols-1 gap-0 overflow-hidden rounded-3xl border border-border-muted bg-white shadow-[0_18px_60px_rgba(15,23,42,0.06)] md:grid-cols-5">
        {pricingBenefits.map((benefit, index) => {
          const Icon = benefitIcons[index];

          return (
            <article
              key={benefit.title}
              className={`flex items-start gap-4 p-7 text-left ${
                index !== pricingBenefits.length - 1
                  ? "border-b border-border-muted md:border-b-0 md:border-r"
                  : ""
              }`}
            >
              <IconBadge icon={Icon} size="sm" className="shrink-0" />

              <div>
                <h2 className="text-body-sm font-extrabold text-text-strong">
                  {benefit.title}
                </h2>

                <p className="mt-2 text-caption-lg font-medium leading-5 text-text-muted">
                  {benefit.description}
                </p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}