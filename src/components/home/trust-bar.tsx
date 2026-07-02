"use client";

import { Building2, Globe2, MonitorDown, ShieldCheck } from "lucide-react";
import { useTranslation } from "@/i18n/useTranslation";

const highlights = [
  {
    icon: Building2,
  },
  {
    icon: ShieldCheck,
  },
  {
    icon: MonitorDown,
  },
  {
    icon: Globe2,
  },
];

export function TrustBar() {
  const { t } = useTranslation();

  return (
    <section className="border-y border-zinc-200 bg-surface-soft">
      <div className="mx-auto grid w-full max-w-304 gap-4 px-6 py-8 sm:grid-cols-2 lg:grid-cols-4 xl:px-0">
        {highlights.map((item, index) => {
          const Icon = item.icon;
          const content = t.home.trustBar.items[index];

          return (
            <div
              key={content.title}
              className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-zinc-900/5"
            >
              <span className="grid size-11 place-items-center rounded-2xl bg-brand-muted text-brand-primary">
                <Icon size={21} strokeWidth={2.5} />
              </span>

              <h3 className="mt-5 text-lg font-extrabold tracking-normal-0.03em] text-zinc-950">
                {content.title}
              </h3>

              <p className="mt-2 text-sm leading-6 text-zinc-600">
                {content.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
