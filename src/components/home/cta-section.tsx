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

const checks = ["No credit card required", "Setup in minutes", "Built to scale"];

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
    <div className="pointer-events-none absolute bottom-4 right-4 hidden h-120 w-3xl lg:block">
      <div className="absolute right-14 top-10 h-108 w-108 rounded-full bg-emerald-300/18 blur-3xl" />
      <div className="absolute right-10 top-6 h-116 w-116 rounded-full border border-emerald-300/12" />
      <div className="absolute right-28 top-22 h-82 w-82 rounded-full border border-emerald-300/12" />

      <Image
        src={ctaDeviceMockup}
        alt="Facturance dashboard preview on desktop and mobile"
        fill
        priority
        sizes="768px"
        className="scale-[1.14] object-contain object-bottom-right drop-shadow-[0_38px_90px_rgba(0,0,0,0.36)]"
      />
    </div>
  );
}

export function CtaSection() {
  return (
    <section className="select-none bg-white">
      <div className="mx-auto w-full max-w-304 px-6 py-16 xl:px-0">
        <div className="relative min-h-130 overflow-hidden rounded-4xl bg-linear-to-br from-[#00342e] via-[#005f52] to-[#00917b] text-white shadow-[0_38px_105px_rgba(0,63,54,0.32)]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20px_20px,rgba(255,255,255,0.13)_1.2px,transparent_1.2px)] bg-size-[28px_28px] opacity-35" />

          <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-teal-300/24 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-96 w-180 rounded-full bg-emerald-300/12 blur-3xl" />
          <div className="absolute -bottom-28 left-36 h-90 w-90 rounded-full bg-emerald-300/14 blur-3xl" />

          <div className="relative flex min-h-130 items-center px-10 py-12 sm:px-14 lg:px-16">
            <div className="z-20 max-w-130">
              <div className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-emerald-300/45 bg-white/8 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.16em] text-emerald-300 backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/12">
                <Sparkles size={15} strokeWidth={2.7} />
                Ready for launch
              </div>

              <h2 className="mt-6 text-[34px] font-extrabold leading-[1.08] tracking-medium sm:text-[42px]">
                Start shaping your finance platform with{" "}
                <span className="text-emerald-300">Facturance.</span>
              </h2>

              <p className="mt-5 max-w-122 text-base leading-7 text-white/80">
                Launch with a premium public website now, then grow into
                dashboards, APIs, desktop sync, and mobile workflows with a
                stable foundation.
              </p>

              <div className="mt-8">
                <Link
                  href="/contact"
                  className="inline-flex h-14 cursor-pointer items-center justify-center gap-5 rounded-2xl bg-white px-7 text-base font-extrabold text-[#007f6d] shadow-xl shadow-black/10 transition hover:-translate-y-0.5 hover:shadow-2xl"
                >
                  Talk to us
                  <span className="grid size-10 place-items-center rounded-full bg-[#007f6d] text-white">
                    <ArrowRight size={20} strokeWidth={2.8} />
                  </span>
                </Link>
              </div>

              <div className="mt-8 h-px max-w-122 bg-white/18" />

              <div className="mt-6 flex flex-wrap items-center gap-y-3 text-xs font-bold text-white/86">
                {checks.map((item, index) => (
                  <div key={item} className="flex items-center">
                    <span className="flex items-center gap-3">
                      <span className="grid size-6 place-items-center rounded-full border border-emerald-300/55 text-emerald-300">
                        <Check size={14} strokeWidth={3} />
                      </span>
                      {item}
                    </span>

                    {index < checks.length - 1 ? (
                      <span className="mx-6 hidden h-7 w-px bg-white/18 sm:block" />
                    ) : null}
                  </div>
                ))}
              </div>
            </div>

            <DeviceMockup />
          </div>
        </div>

        <div className="mx-auto mt-10 w-full max-w-304">
          <div className="grid overflow-hidden rounded-4xl border border-zinc-200 bg-white shadow-[0_24px_70px_rgba(15,23,42,0.06)] md:grid-cols-2 lg:grid-cols-4">
            {featureCards.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className="group relative grid cursor-pointer grid-cols-[auto_1fr] gap-4 p-6 transition hover:bg-[#f7fbfa]"
                >
                  {index > 0 ? (
                    <div className="absolute left-0 top-6 hidden h-[calc(100%-48px)] w-px bg-zinc-200 lg:block" />
                  ) : null}

                  {index > 1 ? (
                    <div className="absolute left-6 right-6 top-0 hidden h-px bg-zinc-200 md:block lg:hidden" />
                  ) : null}

                  <span className="grid size-14 place-items-center rounded-2xl bg-[#eaf8f5] text-[#007f6d] shadow-sm transition group-hover:scale-105 group-hover:bg-[#007f6d] group-hover:text-white">
                    <Icon size={25} strokeWidth={2.5} />
                  </span>

                  <div>
                    <h3 className="text-[17px] font-extrabold leading-snug tracking-[-0.015em] text-[#071827]">
                      {feature.title}
                    </h3>

                    <p className="mt-2 max-w-52 text-sm leading-6 text-zinc-600">
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