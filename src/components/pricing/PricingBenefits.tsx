import {
  Globe2,
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
  Globe2,
  RefreshCw,
  Headphones,
  TrendingUp,
];

export function PricingBenefits() {
  return (
    <section className="mx-auto mt-4 max-w-[1090px] px-6 xl:px-0">
      <div className="grid grid-cols-1 divide-y divide-[#dce7e5] rounded-2xl border border-[#dce7e5] bg-gradient-to-r from-white via-[#f8fffd] to-white shadow-[0_18px_45px_rgba(15,23,42,0.05)] md:grid-cols-5 md:divide-x md:divide-y-0">
        {pricingBenefits.map((benefit, index) => (
          <article
            key={benefit.title}
            className="flex items-center justify-center gap-3 p-5 text-left"
          >
            <IconBadge
              icon={benefitIcons[index]}
              size="sm"
              className="shrink-0"
            />
            <div>
              <h2 className="text-[11.5px] font-bold text-[#071827]">
                {benefit.title}
              </h2>
              <p className="mt-0.5 text-[10px] leading-[12px] text-[#506070]">
                {benefit.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
