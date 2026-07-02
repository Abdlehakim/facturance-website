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
    <div className="relative mx-auto w-full max-w-90 sm:max-w-140 md:max-w-170 lg:max-w-none">
      {/* soft accent glows behind the device */}
      <div className="pointer-events-none absolute inset-x-6 top-1/2 -z-10 h-[65%] -translate-y-1/2 rounded-full bg-teal-200/30 blur-2xl sm:blur-3xl" />
      <div className="pointer-events-none absolute right-4 top-4 -z-10 h-2/5 w-2/5 rounded-full bg-emerald-100/80 blur-2xl sm:blur-3xl" />

      <Image
        src={heroDeviceMockup}
        alt="Facturance dashboard preview"
        priority={priority}
        sizes="(max-width: 640px) 92vw, (max-width: 1024px) 78vw, 48vw"
        className="h-auto w-full object-contain drop-shadow-[0_20px_45px_rgba(15,23,42,0.16)] sm:drop-shadow-[0_28px_70px_rgba(15,23,42,0.18)]"
      />
    </div>
  );
}

export function HeroSection() {
  return (
    <section className="relative isolate select-none overflow-hidden bg-white">
      {/* decorative background */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20px_20px,rgba(0,127,109,0.08)_1.2px,transparent_1.2px)] bg-size-[28px_28px]" />
      <div className="pointer-events-none absolute -right-28 -top-28 h-64 w-64 rounded-full bg-teal-100 blur-3xl sm:h-80 sm:w-80 lg:h-120 lg:w-120" />
      <div className="pointer-events-none absolute -bottom-24 -left-16 h-56 w-56 rounded-full bg-emerald-50 blur-3xl sm:h-72 sm:w-72 lg:h-88 lg:w-88" />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-10 px-4 py-12 sm:px-6 sm:py-16 md:gap-12 md:py-20 lg:min-h-[calc(100svh-104px)] lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:gap-12 lg:px-8 lg:py-14 xl:gap-16 xl:px-0">
        {/* text column */}
        <div className="relative z-10 flex w-full min-w-0 flex-col items-center text-center lg:items-start lg:text-left">
          <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-border-brand bg-brand-muted px-3.5 py-2 text-center text-badge-sm font-extrabold uppercase tracking-[0.12em] text-brand-primary shadow-sm sm:px-4 sm:text-badge sm:tracking-[0.18em]">
            <Cloud size={14} strokeWidth={2.5} className="shrink-0" />
            <span className="truncate">SaaS, desktop, and mobile ready</span>
          </div>

          <h1 className="mt-5 max-w-[17ch] text-balance text-hero font-extrabold leading-[1.04] tracking-[-0.045em] text-zinc-950 sm:max-w-[18ch] sm:text-hero-sm md:max-w-[19ch] lg:max-w-[16ch] lg:text-hero-lg xl:text-hero-xl">
            Run your business from one clean finance platform.
          </h1>

          <p className="mt-4 max-w-2xl text-pretty text-body-sm font-medium leading-7 text-zinc-600 sm:mt-5 sm:text-base sm:leading-8 md:max-w-184 md:text-lg lg:max-w-[46ch]">
            Facturance helps teams manage invoices, companies, roles,
            inventory, payments, and offline desktop workflows with a modern
            cloud-ready foundation.
          </p>

          {/* buttons */}
          <div className="mt-7 flex w-full max-w-105 flex-col gap-3 sm:w-auto sm:max-w-none sm:flex-row sm:justify-center sm:gap-4 lg:justify-start">
            <Link
              href="/register"
              className="btn btn-primary btn-lg btn-full btn-icon font-extrabold shadow-[0_16px_40px_rgba(0,127,109,0.27)] hover:-translate-y-0.5 sm:w-auto"
            >
              Create account
              <ArrowRight size={20} strokeWidth={2.7} className="shrink-0" />
            </Link>

            <Link
              href="/pricing"
              className="btn btn-outline btn-lg btn-full font-extrabold sm:w-auto"
            >
              View pricing
            </Link>
          </div>

          {/* mockup — mobile/tablet only, sits between CTA and stats */}
          <div className="mt-9 w-full min-w-0 lg:hidden">
            <HeroMockup priority />
          </div>

          {/* stats */}
          <div className="mt-8 grid w-full max-w-105 grid-cols-3 gap-2 sm:mt-9 sm:max-w-130 sm:gap-3 lg:mt-10 lg:max-w-125">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="min-w-0 rounded-2xl border border-zinc-200 bg-white/90 px-2.5 py-3.5 text-center shadow-sm transition hover:-translate-y-0.5 hover:border-border-brand-hover sm:px-3 sm:py-4 lg:text-left"
              >
                <p className="text-lg font-extrabold tracking-tight text-zinc-950 sm:text-2xl">
                  {stat.value}
                </p>
                <p className="mt-1 truncate text-micro font-bold uppercase tracking-[0.08em] text-zinc-500 sm:text-badge sm:tracking-[0.13em]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          {/* trust items */}
          <div className="mt-6 flex w-full flex-col items-center justify-center gap-2 text-sm font-bold text-zinc-600 sm:w-auto sm:flex-row sm:flex-wrap sm:gap-x-5 sm:gap-y-2 lg:justify-start">
            {trustItems.map((item) => (
              <span key={item} className="inline-flex items-center gap-2">
                <CheckCircle2
                  size={17}
                  strokeWidth={2.5}
                  className="shrink-0 text-brand-primary"
                  aria-hidden="true"
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
