import type { Metadata } from "next";
import { PricingBenefits } from "@/components/pricing/PricingBenefits";
import { PricingCardsGrid } from "@/components/pricing/PricingCard";
import { PricingCta } from "@/components/pricing/PricingCta";
import { PricingFaq } from "@/components/pricing/PricingFaq";
import { PricingHero } from "@/components/pricing/PricingHero";

export const metadata: Metadata = {
  title: "Pricing | Facturance",
  description: "Modern pricing plans for the Facturance platform.",
};

export default function PricingPage() {
  return (
    <div className="overflow-hidden bg-[radial-gradient(circle_at_top,rgba(0,127,109,0.08),transparent_32rem),linear-gradient(180deg,#ffffff_0%,#fbfdfd_48%,#f8fbfa_100%)]">
      <PricingHero />
      <PricingCardsGrid />
      <PricingBenefits />
      <PricingFaq />
      <PricingCta />
    </div>
  );
}