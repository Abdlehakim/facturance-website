import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Cloud } from "lucide-react";

import heroDeviceMockup from "../../../public/images/hero-device-mockup.png";

const stats = [
  { label: "Companies", value: "Multi" },
  { label: "Documents", value: "12+" },
  { label: "Mode", value: "Cloud +" },
];

function HeroImageMockup() {
  return (
    <div className="relative w-full max-w-220 justify-self-end lg:-mr-6 xl:-mr-10">
      <div className="absolute -inset-14 rounded-full bg-teal-200/35 blur-3xl" />
      <div className="absolute -right-8 top-8 h-84 w-84 rounded-full bg-emerald-100 blur-3xl" />
      <div className="absolute bottom-2 left-16 h-40 w-150 rounded-full bg-[#007f6d]/10 blur-2xl" />

      <div className="relative cursor-pointer transition duration-300 hover:-translate-y-1">
        <Image
          src={heroDeviceMockup}
          alt="Facturance dashboard preview"
          priority
          sizes="(max-width: 1024px) 100vw, 900px"
          className="h-auto w-full scale-120 object-contain drop-shadow-[0_38px_100px_rgba(15,23,42,0.2)]"
        />
      </div>
    </div>
  );
}

export function HeroSection() {
  return (
    <section className="relative select-none overflow-hidden bg-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20px_20px,rgba(0,127,109,0.08)_1.2px,transparent_1.2px)] bg-size-[28px_28px]" />
      <div className="absolute -right-32 -top-32 h-120 w-120 rounded-full bg-teal-100 blur-3xl" />
      <div className="absolute -bottom-32 left-0 h-88 w-88 rounded-full bg-emerald-50 blur-3xl" />

      <div className="relative mx-auto grid min-h-[calc(100svh-104px)] w-full max-w-304 items-center gap-8 px-6 py-8 lg:grid-cols-[0.84fr_1.16fr] xl:px-0">
        <div className="relative z-10">
          <div className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-[#bde7df] bg-[#eefbf8] px-4 py-2 text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#007f6d] shadow-sm transition hover:-translate-y-0.5 hover:border-[#8edbd0] hover:bg-white">
            <Cloud size={14} strokeWidth={2.5} />
            SaaS, desktop, and mobile ready
          </div>

          <h1 className="mt-5 max-w-135 text-[30px] font-extrabold leading-[1.04] tracking-[-0.03em] text-zinc-950 lg:text-[58px]">
            Run your business from one clean finance platform.
          </h1>

          <p className="mt-5 max-w-130 text-base font-medium leading-7 text-zinc-600">
            Facturance helps teams manage invoices, companies, roles,
            inventory, payments, and offline desktop workflows with a modern
            cloud-ready foundation.
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-4">
            <Link
              href="/register"
              className="inline-flex h-13 cursor-pointer items-center justify-center gap-3 rounded-2xl bg-[#007f6d] px-7 text-base font-extrabold text-white shadow-[0_16px_40px_rgba(0,127,109,0.27)] transition hover:-translate-y-0.5 hover:bg-[#006f60] hover:shadow-[0_20px_50px_rgba(0,127,109,0.33)]"
            >
              Create account
              <ArrowRight size={20} strokeWidth={2.7} />
            </Link>

            <Link
              href="/pricing"
              className="inline-flex h-13 cursor-pointer items-center justify-center rounded-2xl border border-zinc-300 bg-white px-7 text-base font-extrabold text-zinc-950 transition hover:-translate-y-0.5 hover:border-[#007f6d] hover:text-[#007f6d]"
            >
              View pricing
            </Link>
          </div>

          <div className="mt-7 grid max-w-120 grid-cols-3 gap-3">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="cursor-pointer rounded-2xl border border-zinc-200 bg-white/85 p-3.5 shadow-sm transition hover:-translate-y-0.5 hover:border-[#8edbd0] hover:shadow-[0_16px_40px_rgba(0,127,109,0.10)]"
              >
                <p className="text-xl font-extrabold tracking-tight text-zinc-950">
                  {stat.value}
                </p>

                <p className="mt-1 text-[10px] font-bold uppercase tracking-widest text-zinc-500">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-5 text-sm font-bold text-zinc-600">
            {["No credit card required", "Setup in minutes"].map((item) => (
              <span key={item} className="flex items-center gap-2">
                <CheckCircle2
                  size={17}
                  strokeWidth={2.5}
                  className="text-[#007f6d]"
                />
                {item}
              </span>
            ))}
          </div>
        </div>

        <HeroImageMockup />
      </div>
    </section>
  );
}