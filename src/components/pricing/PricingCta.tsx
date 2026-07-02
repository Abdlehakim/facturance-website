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
          sizes="(min-width: 1280px) 720px, (min-width: 1024px) 58vw, 0px"
          className="object-contain object-bottom-right opacity-100 drop-shadow-[0_34px_70px_rgba(0,0,0,0.42)]"
        />
      </div>
    </div>
  );
}

export function PricingCta() {
  return (
    <section className="mx-auto mb-20 mt-16 w-full max-w-304 px-4 sm:mb-24 sm:mt-20 sm:px-6 lg:mb-28 lg:mt-24 xl:px-0">
      <div className="relative isolate overflow-hidden rounded-3xl bg-[linear-gradient(135deg,#003f36_0%,#006151_50%,#008977_100%)] text-white shadow-[0_28px_80px_rgba(0,63,54,0.28)] sm:rounded-4xl lg:shadow-[0_36px_100px_rgba(0,63,54,0.32)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20px_20px,rgba(255,255,255,0.14)_1.2px,transparent_1.2px)] bg-size-[28px_28px] opacity-40" />

        <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-emerald-300/12 blur-3xl sm:h-80 sm:w-80" />
        <div className="absolute right-10 top-8 h-80 w-80 rounded-full bg-teal-300/18 blur-3xl sm:h-96 sm:w-96" />
        <div className="absolute bottom-0 right-0 h-64 w-[34rem] rounded-full bg-emerald-300/12 blur-3xl sm:w-180" />

        <div className="relative z-10 px-5 py-10 sm:px-8 sm:py-12 lg:min-h-107.5 lg:px-16 lg:py-16">
          <div className="relative z-20 max-w-140 text-center sm:text-left">
            <h2 className="max-w-135 text-[clamp(2rem,8vw,2.75rem)] font-extrabold leading-[1.05] tracking-tight sm:text-display lg:text-section-title-md">
              Ready to simplify your business?
            </h2>

            <p className="mx-auto mt-5 max-w-140 text-base font-semibold leading-7 text-white/90 sm:mx-0 sm:mt-7 sm:text-card-title sm:leading-8">
              Join thousands of businesses using Facturance to manage invoices,
              inventory, and more.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:mt-11 sm:flex-row sm:items-center sm:gap-5">
              <Link
                href="/register"
                className="btn btn-white btn-lg w-full sm:min-w-55 sm:w-auto"
              >
                Start free
                <ArrowRight size={23} strokeWidth={2.7} aria-hidden="true" />
              </Link>

              <Link
                href="/contact"
                className="btn btn-outline btn-lg w-full sm:min-w-55 sm:w-auto"
              >
                Book a demo
              </Link>
            </div>

            <div className="mt-8 flex flex-col gap-4 text-left text-sm font-bold text-white/92 sm:mt-12 sm:flex-row sm:items-center sm:gap-10 sm:text-body">
              {checks.map((check) => (
                <span key={check} className="flex items-center gap-3">
                  <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-white/10">
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