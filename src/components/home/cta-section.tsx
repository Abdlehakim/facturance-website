import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  Cloud,
  ShieldCheck,
  Sparkles,
  Users,
  Zap,
} from "lucide-react";

import ctaDeviceMockup from "../../../public/images/cta-device-mockup.png";

const checks = [
  "No credit card required",
  "Setup in minutes",
  "Built to scale",
];

const featureCards = [
  {
    icon: ShieldCheck,
    title: "Secure by design",
    description: "Enterprise-grade security for your business data.",
  },
  {
    icon: Cloud,
    title: "Cloud & offline ready",
    description: "Work online or offline. We keep everything in sync.",
  },
  {
    icon: Users,
    title: "Built for growth",
    description: "From startups to large teams, Facturance grows with you.",
  },
  {
    icon: Zap,
    title: "Modern & fast",
    description: "A fast, reliable, and intuitive experience for your team.",
  },
];

function DeviceMockup() {
  return (
    <div className="pointer-events-none absolute bottom-0 right-0 hidden aspect-16/10 w-[min(58%,48rem)] lg:block xl:w-200">
      <div className="absolute right-[12%] top-[12%] h-[58%] w-[58%] rounded-full bg-emerald-300/18 blur-3xl" />
      <div className="absolute right-[10%] top-[8%] h-[68%] w-[68%] rounded-full border border-emerald-300/12" />
      <div className="absolute right-[24%] top-[22%] h-[48%] w-[48%] rounded-full border border-emerald-300/12" />

      <Image
        src={ctaDeviceMockup}
        alt="Facturance dashboard preview on desktop and mobile"
        fill
        priority
        sizes="(max-width: 1279px) 0px, 50vw"
        className="scale-[1.08] object-contain object-bottom-right drop-shadow-[0_38px_90px_rgba(0,0,0,0.36)] xl:scale-[1.14]"
      />
    </div>
  );
}

function MobileDeviceMockup() {
  return (
    <div className="relative mt-8 overflow-hidden p-3 sm:mt-10 sm:p-4 lg:hidden">
      <div className="pointer-events-none absolute inset-x-8 top-1/2 h-2/3 -translate-y-1/2 rounded-full bg-emerald-300/18 blur-3xl" />

      <div className="relative mx-auto aspect-16/10 w-full max-w-2xl">
        <Image
          src={ctaDeviceMockup}
          alt="Facturance dashboard preview on desktop and mobile"
          fill
          priority
          sizes="(max-width: 640px) 92vw, (max-width: 1024px) 82vw, 0px"
          className="object-contain drop-shadow-[0_24px_55px_rgba(0,0,0,0.28)]"
        />
      </div>
    </div>
  );
}

export function CtaSection() {
  return (
    <section className="select-none bg-white">
      <div className="mx-auto w-full max-w-304 px-4 py-12 sm:px-6 sm:py-14 lg:px-8 lg:py-16 xl:px-0">
        <div className="relative overflow-hidden rounded-4xl bg-linear-to-br from-brand-deep via-brand-forest to-brand-vivid text-white shadow-[0_28px_80px_rgba(0,63,54,0.28)] sm:rounded-[2.25rem] lg:min-h-128 lg:shadow-[0_38px_105px_rgba(0,63,54,0.32)]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20px_20px,rgba(255,255,255,0.13)_1.2px,transparent_1.2px)] bg-size-[28px_28px] opacity-35" />

          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-teal-300/24 blur-3xl sm:h-96 sm:w-96" />
          <div className="absolute bottom-0 right-0 h-72 w-lg rounded-full bg-emerald-300/12 blur-3xl sm:h-96 sm:w-180" />
          <div className="absolute -bottom-28 left-8 h-72 w-72 rounded-full bg-emerald-300/14 blur-3xl sm:left-36 sm:h-88 sm:w-88" />

          <div className="relative px-5 py-8 sm:px-8 sm:py-10 lg:min-h-128 lg:px-16 lg:py-14 xl:px-18">
            <div className="relative z-20 max-w-136 text-center sm:text-left lg:max-w-130">
              <div className="inline-flex max-w-full cursor-pointer items-center gap-2 rounded-full border border-emerald-300/45 bg-white/8 px-3.5 py-2 text-badge-sm font-extrabold uppercase tracking-normal text-emerald-300 backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/12 sm:px-4 sm:text-xs">
                <Sparkles
                  size={15}
                  strokeWidth={2.7}
                  className="shrink-0"
                  aria-hidden="true"
                />
                <span className="truncate">Ready for launch</span>
              </div>

              <h2 className="mt-5 text-balance text-section-title font-extrabold leading-[1.08] tracking-normal sm:mt-6 sm:text-section-title-lg lg:text-section-title-xl">
                Start shaping your finance platform with{" "}
                <span className="text-emerald-300">Facturance.</span>
              </h2>

              <p className="mx-auto mt-4 max-w-lg text-body-sm leading-7 text-white/80 sm:mx-0 sm:mt-5 sm:text-base">
                Launch with a premium public website now, then grow into
                dashboards, APIs, desktop sync, and mobile workflows with a
                stable foundation.
              </p>

              <div className="mt-7 sm:mt-8">
                <Link
                  href="/contact"
                  className="btn btn-outline btn-lg btn-full sm:w-auto"
                >
                  <span>Talk to us</span>
                  <ArrowRight
                    size={20}
                    strokeWidth={2.8}
                    className="shrink-0"
                    aria-hidden="true"
                  />
                </Link>
              </div>

              <div className="mx-auto mt-7 h-px max-w-lg bg-white/18 sm:mx-0 sm:mt-8" />

              <div className="mt-5 grid gap-3 text-left text-xs font-bold text-white/86 sm:mt-6 sm:flex sm:flex-wrap sm:items-center sm:gap-y-3">
                {checks.map((item, index) => (
                  <div key={item} className="flex items-center">
                    <span className="flex items-center gap-3">
                      <span className="grid size-6 shrink-0 place-items-center rounded-full border border-emerald-300/55 text-emerald-300">
                        <Check size={14} strokeWidth={3} aria-hidden="true" />
                      </span>
                      <span>{item}</span>
                    </span>

                    {index < checks.length - 1 ? (
                      <span
                        className="mx-6 hidden h-7 w-px bg-white/18 sm:block"
                        aria-hidden="true"
                      />
                    ) : null}
                  </div>
                ))}
              </div>
            </div>

            <MobileDeviceMockup />
            <DeviceMockup />
          </div>
        </div>

        <div className="mx-auto mt-8 w-full sm:mt-10">
          <div className="grid overflow-hidden rounded-4xl border border-zinc-200 bg-white shadow-[0_20px_55px_rgba(15,23,42,0.06)] sm:grid-cols-2 lg:grid-cols-4 lg:rounded-[2.25rem] lg:shadow-[0_24px_70px_rgba(15,23,42,0.06)]">
            {featureCards.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className="group relative grid cursor-pointer grid-cols-[auto_1fr] gap-4 p-5 transition hover:bg-surface-soft sm:p-6"
                >
                  {index > 0 ? (
                    <div
                      className="absolute left-6 right-6 top-0 h-px bg-zinc-200 sm:hidden"
                      aria-hidden="true"
                    />
                  ) : null}

                  {index > 1 ? (
                    <div
                      className="absolute left-6 right-6 top-0 hidden h-px bg-zinc-200 sm:block lg:hidden"
                      aria-hidden="true"
                    />
                  ) : null}

                  {index % 2 === 1 ? (
                    <div
                      className="absolute bottom-6 left-0 top-6 hidden w-px bg-zinc-200 sm:block lg:hidden"
                      aria-hidden="true"
                    />
                  ) : null}

                  {index > 0 ? (
                    <div
                      className="absolute left-0 top-6 hidden h-[calc(100%-48px)] w-px bg-zinc-200 lg:block"
                      aria-hidden="true"
                    />
                  ) : null}

                  <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-surface-brand text-brand-primary shadow-sm transition group-hover:scale-105 group-hover:bg-brand-primary group-hover:text-white sm:size-14">
                    <Icon size={25} strokeWidth={2.5} aria-hidden="true" />
                  </span>

                  <div className="min-w-0">
                    <h3 className="text-body font-extrabold leading-snug tracking-normal text-text-strong sm:text-body-lg">
                      {feature.title}
                    </h3>

                    <p className="mt-2 max-w-[18rem] text-sm leading-6 text-zinc-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
