import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

const checks = ["No credit card required", "Setup in minutes"];

function DashboardMockup() {
  return (
    <div className="pointer-events-none absolute bottom-0 right-0 hidden h-full w-[58%] lg:block">
      <div className="absolute bottom-10 right-16 h-72 w-130 rounded-full bg-black/30 blur-3xl" />
      <div className="absolute bottom-20 right-28 h-80 w-130 rounded-full bg-teal-300/20 blur-3xl" />

      <div
        className="absolute inset-0"
        style={{
          WebkitMaskImage:
            "linear-gradient(90deg, transparent 0%, black 18%, black 100%)",
          maskImage:
            "linear-gradient(90deg, transparent 0%, black 18%, black 100%)",
        }}
      >
        <Image
          src="/images/pricing-device-mockup-v4.png"
          alt="Facturance dashboard on laptop and phone"
          fill
          priority
          unoptimized
          sizes="720px"
          className="object-contain object-bottom-right opacity-100 drop-shadow-[0_34px_70px_rgba(0,0,0,0.42)]"
        />
      </div>
    </div>
  );
}

export function PricingCta() {
  return (
    <section className="mx-auto mb-28 mt-24 w-full max-w-304 px-5 sm:px-6 xl:px-0">
      <div className="relative isolate overflow-hidden rounded-4xl bg-[linear-gradient(135deg,#003f36_0%,#006151_50%,#008977_100%)] text-white shadow-[0_36px_100px_rgba(0,63,54,0.32)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20px_20px,rgba(255,255,255,0.14)_1.2px,transparent_1.2px)] bg-size-[28px_28px] opacity-40" />

        <div className="absolute -left-24 -top-24 h-80 w-80 rounded-full bg-emerald-300/12 blur-3xl" />
        <div className="absolute right-10 top-8 h-96 w-96 rounded-full bg-teal-300/18 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-64 w-180 rounded-full bg-emerald-300/12 blur-3xl" />

        <div className="relative z-10 min-h-107.5 px-7 py-12 sm:px-12 sm:py-14 lg:px-16 lg:py-16">
          <div className="relative z-20 max-w-140">
            <h2 className="max-w-135 text-section-title-md font-extrabold leading-[1.05] tracking-normal-0.055em] sm:text-display lg:text-section-title-md">
              Ready to simplify your business?
            </h2>

            <p className="mt-7 max-w-140 text-body-lg font-semibold leading-8 text-white/90 sm:text-card-title">
              Join thousands of businesses using Facturance to manage invoices,
              inventory, and more.
            </p>

            <div className="mt-11 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-5">
              <Link
                href="/register"
                className="btn btn-white btn-lg min-w-55"
              >
                Start free
                <ArrowRight size={23} strokeWidth={2.7} aria-hidden="true" />
              </Link>

              <Link
                href="/contact"
                className="btn btn-outline btn-lg min-w-55"
              >
                Book a demo
                <ArrowRight size={23} strokeWidth={2.7} aria-hidden="true" />
              </Link>
            </div>

            <div className="mt-12 flex flex-col gap-4 text-body font-bold text-white/92 sm:flex-row sm:items-center sm:gap-10">
              {checks.map((check) => (
                <span key={check} className="flex items-center gap-3">
                  <span className="flex size-6 items-center justify-center rounded-full bg-white/10">
                    <Check size={18} strokeWidth={3} aria-hidden="true" />
                  </span>
                  {check}
                </span>
              ))}
            </div>
          </div>

          <DashboardMockup />
        </div>
      </div>
    </section>
  );
}
