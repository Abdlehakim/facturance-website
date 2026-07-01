import { CtaSection } from "@/components/home/cta-section";
import { HeroSection } from "@/components/home/hero-section";
import { PlatformSection } from "@/components/home/platform-section";
import { TrustBar } from "@/components/home/trust-bar";
import { WorkflowSection } from "@/components/home/workflow-section";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <PlatformSection />
      <WorkflowSection />
      <CtaSection />
    </>
  );
}
