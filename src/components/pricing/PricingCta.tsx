import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

const checks = ["No credit card required", "Setup in minutes"];

function DashboardMockup() {
  return (
    <div className="relative hidden h-full items-start justify-center overflow-visible pt-3 lg:flex">
      <div className="h-[104px] w-[300px] rounded-lg border border-white/30 bg-white p-3 text-[#071827] shadow-2xl">
        <div className="flex items-center justify-between border-b border-[#e6eeec] pb-2">
          <div>
            <p className="text-xs font-bold uppercase text-[#007f6d]">
              Dashboard
            </p>
            <p className="mt-0.5 text-base font-extrabold">42,860 EUR</p>
          </div>
          <span className="rounded-full bg-[#e8f6f3] px-3 py-1 text-xs font-bold text-[#007f6d]">
            Synced
          </span>
        </div>

        <div className="mt-2 grid grid-cols-[1fr_60px] gap-3">
          <div>
            <div className="grid grid-cols-2 gap-2">
              {["Invoices", "Stock"].map((item) => (
                <div key={item} className="rounded-md bg-[#f8fffd] p-2">
                  <p className="text-xs font-semibold text-[#506070]">
                    {item}
                  </p>
                  <div className="mt-1 h-1.5 rounded-full bg-[#dce7e5]">
                    <div className="h-1.5 w-2/3 rounded-full bg-[#007f6d]" />
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-2 flex h-7 items-end gap-2">
              {[36, 58, 44, 76, 64, 88].map((height, index) => (
                <span
                  key={index}
                  className="flex-1 rounded-t bg-gradient-to-t from-[#007f6d] to-[#8be0cf]"
                  style={{ height: `${height}%` }}
                />
              ))}
            </div>
          </div>

          <div className="grid place-items-center rounded-full border-[7px] border-[#e8f6f3] text-xs font-extrabold text-[#007f6d]">
            82%
          </div>
        </div>
      </div>

      <div className="absolute right-14 top-6 h-[96px] w-[62px] rounded-xl bg-white p-2 text-[#071827] shadow-2xl">
        <div className="mx-auto mb-2 h-1 w-6 rounded-full bg-[#dce7e5]" />
        <p className="text-xs font-bold text-[#007f6d]">Invoices</p>
        <div className="mt-2 space-y-2">
          {[1, 2, 3, 4].map((item) => (
            <div key={item}>
              <div className="h-1.5 rounded-full bg-[#dce7e5]" />
              <div className="mt-1 h-1.5 w-2/3 rounded-full bg-[#e8f6f3]" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function PricingCta() {
  return (
    <section className="mx-auto mt-[11px] mb-0 max-w-[1090px] px-6 xl:px-0">
      <div className="grid min-h-[210px] grid-cols-1 overflow-hidden rounded-2xl bg-gradient-to-r from-[#003f36] via-[#00594c] to-[#007f6d] text-white shadow-[0_25px_65px_rgba(0,63,54,0.25)] lg:h-[118px] lg:min-h-0 lg:grid-cols-2">
        <div className="px-7 py-5 lg:py-3">
          <h2 className="text-[20px] font-extrabold leading-6">
            Ready to simplify your business?
          </h2>
          <p className="mt-0.5 max-w-[320px] text-[12px] leading-[15px] text-white/85">
            Join thousands of businesses using Facturance
            <br />
            to manage invoices, inventory, and more.
          </p>

          <div className="mt-1 flex flex-wrap items-center gap-3 lg:flex-nowrap lg:gap-[42px]">
            <div className="flex gap-4">
              <Link
                href="/register"
                className="inline-flex h-8 w-[145px] items-center justify-center gap-3 rounded-lg bg-white text-[12px] font-bold text-[#007f6d]"
              >
                Start free
                <ArrowRight size={14} strokeWidth={2.4} aria-hidden="true" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex h-8 w-[145px] items-center justify-center rounded-lg border border-white/40 text-[12px] font-bold text-white"
              >
                Book a demo
              </Link>
            </div>

            <div className="shrink-0 space-y-1 text-[11px] text-white/90">
              {checks.map((check) => (
                <span key={check} className="flex items-center gap-2">
                  <Check size={12} strokeWidth={2.4} aria-hidden="true" />
                  {check}
                </span>
              ))}
            </div>
          </div>
        </div>

        <DashboardMockup />
      </div>
    </section>
  );
}
