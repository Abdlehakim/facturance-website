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
    <div className="bg-[radial-gradient(circle_at_top,_rgba(0,127,109,0.055),_transparent_28rem),linear-gradient(180deg,#ffffff_0%,#fbfdfd_100%)]">
      <PricingHero />
      <PricingCardsGrid />
      <PricingBenefits />
      <PricingFaq />
      <PricingCta />
    </div>
  );
}
