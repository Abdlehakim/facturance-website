import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Cloud } from "lucide-react";

import heroDeviceMockup from "../../../public/images/hero-device-mockup.png";

const stats = [
  { label: "Companies", value: "Multi" },
  { label: "Documents", value: "12+" },
  { label: "Mode", value: "Cloud +" },
];

const trustItems = ["No credit card required", "Setup in minutes"];

function HeroMockup({ priority = false }: { priority?: boolean }) {
  return (
    <div className="relative mx-auto w-full max-w-[520px] sm:max-w-[600px] md:max-w-[680px] lg:max-w-[760px] xl:max-w-[840px]">
      {/* soft accent glows behind the device */}
      <div className="pointer-events-none absolute inset-x-4 top-1/2 -z-10 h-[70%] -translate-y-1/2 rounded-full bg-teal-200/30 blur-3xl" />
      <div className="pointer-events-none absolute right-2 top-2 -z-10 h-2/5 w-2/5 rounded-full bg-emerald-100/80 blur-3xl" />

      <Image
        src={heroDeviceMockup}
        alt="Facturance dashboard preview"
        priority={priority}
        sizes="(max-width: 640px) 90vw, (max-width: 1024px) 70vw, 45vw"
        className="h-auto w-full object-contain drop-shadow-[0_28px_70px_rgba(15,23,42,0.18)]"
      />
    </div>
  );
}

export function HeroSection() {
  return (
    <section className="relative isolate select-none overflow-hidden bg-white">
      {/* decorative background */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20px_20px,rgba(0,127,109,0.08)_1.2px,transparent_1.2px)] bg-[length:28px_28px]" />
      <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-teal-100 blur-3xl sm:h-80 sm:w-80 lg:h-[30rem] lg:w-[30rem]" />
      <div className="pointer-events-none absolute -bottom-24 left-0 h-56 w-56 rounded-full bg-emerald-50 blur-3xl sm:h-72 sm:w-72 lg:h-[22rem] lg:w-[22rem]" />

      <div className="relative mx-auto grid w-full max-w-[76rem] items-center gap-10 px-5 py-12 sm:px-6 sm:py-16 md:py-20 lg:min-h-[calc(100svh-104px)] lg:grid-cols-2 lg:gap-10 lg:py-12 xl:px-0">
        {/* text column */}
        <div className="relative z-10 flex w-full min-w-0 flex-col items-center text-center lg:items-start lg:text-left">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#bde7df] bg-[#eefbf8] px-4 py-2 text-[11px] font-extrabold uppercase tracking-[0.14em] text-[#007f6d] shadow-sm sm:tracking-[0.18em]">
            <Cloud size={14} strokeWidth={2.5} />
            SaaS, desktop, and mobile ready
          </div>

          <h1 className="mt-5 max-w-[16ch] text-balance text-[clamp(2.25rem,9vw,2.625rem)] font-extrabold leading-[1.05] tracking-[-0.04em] text-zinc-950 sm:max-w-[18ch] sm:text-5xl md:text-[3.75rem] lg:text-5xl xl:text-[3.5rem]">
            Run your business from one clean finance platform.
          </h1>

          <p className="mt-4 max-w-[42ch] text-pretty text-[15px] font-medium leading-relaxed text-zinc-600 sm:mt-5 sm:text-base md:text-lg lg:max-w-[46ch]">
            Facturance helps teams manage invoices, companies, roles,
            inventory, payments, and offline desktop workflows with a modern
            cloud-ready foundation.
          </p>

          {/* buttons */}
          <div className="mt-7 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:justify-center sm:gap-4 lg:justify-start">
            <Link
              href="/register"
              className="inline-flex h-14 w-full items-center justify-center gap-3 rounded-2xl bg-[#007f6d] px-7 text-base font-extrabold text-white shadow-[0_16px_40px_rgba(0,127,109,0.27)] transition hover:-translate-y-0.5 hover:bg-[#006f60] sm:w-auto"
            >
              Create account
              <ArrowRight size={20} strokeWidth={2.7} />
            </Link>

            <Link
              href="/pricing"
              className="inline-flex h-14 w-full items-center justify-center rounded-2xl border border-zinc-300 bg-white px-7 text-base font-extrabold text-zinc-950 transition hover:-translate-y-0.5 hover:border-[#007f6d] hover:text-[#007f6d] sm:w-auto"
            >
              View pricing
            </Link>
          </div>

          {/* mockup — mobile/tablet only, sits between CTA and stats */}
          <div className="mt-9 w-full min-w-0 lg:hidden">
            <HeroMockup priority />
          </div>

          {/* stats */}
          <div className="mt-9 grid w-full max-w-[440px] grid-cols-3 gap-3 sm:max-w-[520px] lg:mt-10 lg:max-w-[500px]">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="min-w-0 rounded-2xl border border-zinc-200 bg-white/90 px-3 py-4 text-center shadow-sm transition hover:-translate-y-0.5 hover:border-[#8edbd0] lg:text-left"
              >
                <p className="text-xl font-extrabold tracking-tight text-zinc-950 sm:text-2xl">
                  {stat.value}
                </p>
                <p className="mt-1 truncate text-[10px] font-bold uppercase tracking-[0.1em] text-zinc-500 sm:text-[11px] sm:tracking-[0.13em]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          {/* trust items */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm font-bold text-zinc-600 lg:justify-start">
            {trustItems.map((item) => (
              <span key={item} className="inline-flex items-center gap-2">
                <CheckCircle2
                  size={17}
                  strokeWidth={2.5}
                  className="shrink-0 text-[#007f6d]"
                />
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* mockup — desktop only */}
        <div className="hidden min-w-0 lg:block">
          <HeroMockup priority />
        </div>
      </div>
    </section>
  );
}
