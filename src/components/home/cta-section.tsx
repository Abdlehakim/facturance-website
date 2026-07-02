"use client";

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
import { useTranslation } from "@/i18n/useTranslation";

import ctaDeviceMockup from "../../../public/images/cta-device-mockup.png";

const featureCards = [
  {
    icon: ShieldCheck,
  },
  {
    icon: Cloud,
  },
  {
    icon: Users,
  },
  {
    icon: Zap,
  },
];

function DeviceMockup({ alt, isRtl }: { alt: string; isRtl: boolean }) {
  return (
    <div
      className={`pointer-events-none absolute top-1/2 z-10 hidden aspect-16/10 -translate-y-1/2 overflow-visible lg:block lg:w-152 xl:w-2xl 2xl:w-176 ${
        isRtl ? "left-4 right-auto" : "right-4"
      }`}
    >
      <div
        className={`absolute top-12 z-0 size-80 rounded-full bg-emerald-300/15 blur-3xl ${
          isRtl ? "left-12" : "right-12"
        }`}
      />

      <div
        className={`absolute top-8 z-0 size-96 rounded-full border border-emerald-300/10 ${
          isRtl ? "left-10" : "right-10"
        }`}
      />

      <div
        className={`absolute top-24 z-0 size-64 rounded-full border border-emerald-300/10 ${
          isRtl ? "left-24" : "right-24"
        }`}
      />

      <Image
        src={ctaDeviceMockup}
        alt={alt}
        fill
        sizes="(min-width: 1536px) 44rem, (min-width: 1280px) 42rem, (min-width: 1024px) 38rem, 0px"
        style={{
          objectPosition: isRtl ? "left center" : "right center",
        }}
        className="z-10 object-contain"
        priority={false}
      />
    </div>
  );
}

function MobileDeviceMockup({ alt }: { alt: string }) {
  return (
    <div className="relative mt-8 overflow-hidden pb-1 sm:mt-10 lg:hidden">
      <div className="pointer-events-none absolute inset-x-10 top-1/2 h-64 -translate-y-1/2 rounded-full bg-emerald-300/15 blur-3xl" />

      <div className="relative mx-auto aspect-16/10 w-full max-w-md sm:max-w-xl md:max-w-2xl">
        <Image
          src={ctaDeviceMockup}
          alt={alt}
          fill
          sizes="(max-width: 640px) 88vw, (max-width: 768px) 36rem, (max-width: 1024px) 42rem, 0px"
          className="object-contain drop-shadow-[0_24px_55px_rgba(0,0,0,0.26)]"
        />
      </div>
    </div>
  );
}

export function CtaSection() {
  const { t, isRtl } = useTranslation();

  return (
    <section className="select-none overflow-hidden bg-white">
      <div className="mx-auto w-full max-w-304 px-4 py-12 sm:px-6 sm:py-14 lg:px-8 lg:py-16 xl:px-0">
        <div className="relative overflow-hidden rounded-3xl bg-linear-to-br from-brand-deep via-brand-forest to-brand-vivid text-white shadow-[0_28px_80px_rgba(0,63,54,0.28)] sm:rounded-[2.25rem] lg:min-h-128 lg:shadow-[0_38px_105px_rgba(0,63,54,0.32)]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20px_20px,rgba(255,255,255,0.13)_1.2px,transparent_1.2px)] bg-size-[28px_28px] opacity-35" />

          <div className="absolute -right-24 -top-24 size-72 rounded-full bg-teal-300/24 blur-3xl sm:size-96" />
          <div className="absolute bottom-0 right-0 h-72 w-lg rounded-full bg-emerald-300/12 blur-3xl sm:h-96 sm:w-180" />
          <div className="absolute -bottom-28 left-8 size-72 rounded-full bg-emerald-300/14 blur-3xl sm:left-36 sm:size-88" />

          <div className="relative px-5 py-8 sm:px-8 sm:py-10 lg:min-h-128 lg:px-16 lg:py-14 xl:px-18">
            <div
              className={`relative z-20 mx-auto max-w-136 text-center sm:mx-0 sm:text-start lg:max-w-124 ${
                isRtl ? "lg:me-auto lg:pe-8 lg:ps-0" : "lg:pe-8"
              }`}
            >
              <div className="inline-flex max-w-full cursor-pointer items-center gap-2 rounded-full border border-emerald-300/45 bg-white/8 px-3.5 py-2 text-badge-sm font-extrabold uppercase tracking-normal text-emerald-300 backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/12 sm:px-4 sm:text-xs">
                <Sparkles
                  size={15}
                  strokeWidth={2.7}
                  className="shrink-0"
                  aria-hidden="true"
                />
                <span className="truncate">{t.home.cta.badge}</span>
              </div>

              <h2 className="mt-5 text-balance text-section-title font-extrabold leading-tight tracking-normal sm:mt-6 sm:text-section-title-lg lg:text-section-title-xl">
                {t.home.cta.title}{" "}
                <span className="text-emerald-300">
                  {t.home.cta.highlight}
                </span>
              </h2>

              <p className="mx-auto mt-4 max-w-lg text-body-sm leading-7 text-white/80 sm:mx-0 sm:mt-5 sm:text-base">
                {t.home.cta.description}
              </p>

              <div className="mt-7 sm:mt-8">
                <Link
                  href="/contact"
                  className="btn btn-white btn-lg btn-full sm:w-auto"
                >
                  <span>{t.home.cta.button}</span>
                  <ArrowRight
                    size={20}
                    strokeWidth={2.8}
                    className={`shrink-0 ${isRtl ? "rotate-180" : ""}`}
                    aria-hidden="true"
                  />
                </Link>
              </div>

              <div className="mx-auto mt-7 h-px max-w-lg bg-white/18 sm:mx-0 sm:mt-8" />

              <div className="mt-5 grid gap-3 text-start text-xs font-bold text-white/86 sm:mt-6 sm:flex sm:flex-wrap sm:items-center sm:gap-y-3">
                {t.home.cta.checks.map((item, index) => (
                  <div key={item} className="flex items-center">
                    <span className="flex items-center gap-3">
                      <span className="grid size-6 shrink-0 place-items-center rounded-full border border-emerald-300/55 text-emerald-300">
                        <Check size={14} strokeWidth={3} aria-hidden="true" />
                      </span>
                      <span>{item}</span>
                    </span>

                    {index < t.home.cta.checks.length - 1 ? (
                      <span
                        className="mx-6 hidden h-7 w-px bg-white/18 sm:block"
                        aria-hidden="true"
                      />
                    ) : null}
                  </div>
                ))}
              </div>
            </div>

            <MobileDeviceMockup alt={t.home.cta.imageAlt} />
            <DeviceMockup alt={t.home.cta.imageAlt} isRtl={isRtl} />
          </div>
        </div>

        <div className="mx-auto mt-8 w-full sm:mt-10">
          <div className="grid overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-[0_20px_55px_rgba(15,23,42,0.06)] sm:grid-cols-2 lg:grid-cols-4 lg:rounded-[2.25rem] lg:shadow-[0_24px_70px_rgba(15,23,42,0.06)]">
            {featureCards.map((feature, index) => {
              const Icon = feature.icon;
              const content = t.home.cta.featureCards[index];

              return (
                <div
                  key={content.title}
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

                  <div className="min-w-0 text-start">
                    <h3 className="text-body font-extrabold leading-snug tracking-normal text-text-strong sm:text-body-lg">
                      {content.title}
                    </h3>

                    <p className="mt-2 max-w-72 text-sm leading-6 text-zinc-600">
                      {content.description}
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