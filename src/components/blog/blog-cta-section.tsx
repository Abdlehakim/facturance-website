"use client";

import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { useTranslation } from "@/i18n/useTranslation";

export function BlogCtaSection() {
  const { t } = useTranslation();

  return (
    <div className="mx-auto w-full max-w-304 px-6 py-20 xl:px-0">
      <div className="relative overflow-hidden rounded-4xl bg-linear-to-br from-brand-deep via-brand-forest to-brand-vivid p-8 text-white shadow-[0_30px_90px_rgba(0,63,54,0.26)] sm:p-12">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20px_20px,rgba(255,255,255,0.13)_1.2px,transparent_1.2px)] bg-size-[28px_28px] opacity-35" />

        <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/8 px-4 py-2 text-xs font-extrabold uppercase tracking-normal text-emerald-300">
              <Sparkles size={15} strokeWidth={2.7} />
              {t.blog.cta.badge}
            </div>

            <h2 className="mt-5 max-w-170 text-4xl font-extrabold leading-tight tracking-normal">
              {t.blog.cta.title}
            </h2>

            <p className="mt-4 max-w-150 text-base leading-8 text-white/78">
              {t.blog.cta.description}
            </p>
          </div>

          <Link
            href="/contact"
            className="btn btn-white btn-lg shrink-0"
          >
            {t.blog.cta.button}
            <ArrowRight size={20} strokeWidth={2.7} />
          </Link>
        </div>
      </div>
    </div>
  );
}
