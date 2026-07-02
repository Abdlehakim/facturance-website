import {
  CheckCircle2,
  Cloud,
  Database,
  FileText,
  Package,
  ReceiptText,
  ShieldCheck,
  Smartphone,
  Users,
} from "lucide-react";

const modules = [
  {
    icon: FileText,
    label: "Documents",
    title: "Invoices and quotes",
    description:
      "Create invoices, quotes, delivery notes, orders, and purchase documents.",
  },
  {
    icon: Package,
    label: "Inventory",
    title: "Inventory operations",
    description:
      "Track articles, stock movements, warehouses, purchases, and sales impact.",
  },
  {
    icon: ReceiptText,
    label: "Finance",
    title: "Payments and treasury",
    description:
      "Follow payments, customer balances, due amounts, and cash movement.",
  },
  {
    icon: Database,
    label: "Data",
    title: "Cloud business data",
    description:
      "Centralize company, user, invoice, audit, and sync data securely.",
  },
  {
    icon: Users,
    label: "Teams",
    title: "Team collaboration",
    description:
      "Invite users, assign roles, and separate company-level responsibilities.",
  },
  {
    icon: Smartphone,
    label: "Devices",
    title: "Web, desktop, and mobile",
    description:
      "Start with web, then extend to desktop sync and future mobile apps.",
  },
];

const foundationPoints = [
  "Cloud source of truth",
  "Offline desktop continuity",
  "Permission-first architecture",
];

export function PlatformSection() {
  return (
    <section className="relative select-none overflow-hidden bg-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20px_20px,rgba(0,127,109,0.055)_1.2px,transparent_1.2px)] bg-size-[28px_28px]" />
      <div className="absolute -right-44 top-0 h-80 w-80 rounded-full bg-teal-100/70 blur-3xl" />
      <div className="absolute -left-44 bottom-0 h-80 w-80 rounded-full bg-emerald-50 blur-3xl" />

      <div className="relative mx-auto flex min-h-[calc(100svh-104px)] w-full max-w-304 flex-col justify-center px-6 py-8 xl:px-0">
        <div className="grid gap-6 lg:grid-cols-[1fr_380px] lg:items-end">
          <div className="max-w-170">
            <p className="text-xs font-extrabold uppercase tracking-normal0.22em] text-brand-primary">
              Platform foundation
            </p>

            <h2 className="mt-4 max-w-165 text-section-title-md font-extrabold leading-[1.12] tracking-tight text-zinc-950 lg:text-display">
              Built for a serious multi-company ERP future.
            </h2>

            <p className="mt-5 max-w-150 text-base leading-8 text-zinc-600">
              Start with invoicing and grow toward cloud dashboards, desktop
              synchronization, inventory, payments, admin controls, and future
              mobile workflows.
            </p>
          </div>

          <div className="cursor-pointer rounded-3xl border border-border-brand-soft bg-surface-brand-muted p-4 shadow-[0_18px_45px_rgba(0,127,109,0.09)] transition hover:-translate-y-0.5 hover:shadow-[0_22px_55px_rgba(0,127,109,0.13)]">
            <div className="flex items-center gap-3">
              <span className="grid size-10 place-items-center rounded-2xl bg-brand-primary text-white shadow-lg shadow-teal-900/20">
                <Cloud size={19} strokeWidth={2.6} />
              </span>

              <div>
                <p className="text-badge font-extrabold uppercase tracking-normal text-brand-primary">
                  Growth-ready
                </p>

                <h3 className="text-sm font-extrabold leading-snug tracking-normal-0.01em] text-zinc-950">
                  One platform, many workflows
                </h3>
              </div>
            </div>

            <div className="mt-4 space-y-2.5">
              {foundationPoints.map((point) => (
                <div
                  key={point}
                  className="flex cursor-pointer items-center gap-3 rounded-2xl border border-border-brand-muted bg-white px-3.5 py-2.5 transition hover:border-border-brand-hover-soft hover:bg-surface-hover-bright"
                >
                  <CheckCircle2
                    size={16}
                    strokeWidth={2.7}
                    className="text-brand-primary"
                  />

                  <span className="text-xs font-bold text-zinc-700">
                    {point}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-7 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {modules.map((module) => {
            const Icon = module.icon;

            return (
              <article
                key={module.title}
                className="group relative cursor-pointer overflow-hidden rounded-3xl border border-zinc-200 bg-white p-4 shadow-[0_12px_35px_rgba(15,23,42,0.05)] transition duration-300 hover:-translate-y-1 hover:border-border-brand-hover-soft hover:shadow-[0_20px_55px_rgba(0,127,109,0.11)]"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-linear-to-r from-brand-primary via-accent-teal to-transparent opacity-0 transition group-hover:opacity-100" />

                <div className="flex items-start justify-between gap-4">
                  <span className="grid size-10 place-items-center rounded-2xl border border-zinc-200 bg-surface-muted text-brand-primary shadow-sm transition group-hover:border-brand-primary group-hover:bg-brand-primary group-hover:text-white">
                    <Icon size={18} strokeWidth={2.5} />
                  </span>

                  <span className="rounded-full bg-brand-muted px-3 py-1 text-badge-sm font-extrabold uppercase tracking-widest text-brand-primary">
                    {module.label}
                  </span>
                </div>

                <h3 className="mt-4 text-card-title font-extrabold leading-snug tracking-normal text-zinc-950">
                  {module.title}
                </h3>

                <p className="mt-2.5 text-sm leading-6 text-zinc-600">
                  {module.description}
                </p>
              </article>
            );
          })}
        </div>

        <div className="mt-7 grid cursor-pointer gap-4 rounded-3xl border border-zinc-200 bg-surface-dark p-4 text-white shadow-[0_18px_55px_rgba(15,23,42,0.16)] transition hover:-translate-y-0.5 hover:shadow-[0_22px_65px_rgba(15,23,42,0.22)] md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <p className="text-badge font-extrabold uppercase tracking-normal text-teal-200">
              Architecture direction
            </p>

            <h3 className="mt-2 text-panel-title font-extrabold leading-snug tracking-normal">
              From invoicing software to complete business platform.
            </h3>
          </div>

          <div className="flex flex-wrap gap-3">
            {[
              { icon: Database, title: "Cloud core" },
              { icon: ShieldCheck, title: "Secure access" },
              { icon: Smartphone, title: "Multi-device" },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="flex cursor-pointer items-center gap-2.5 rounded-2xl border border-white/10 bg-white/7 px-4 py-2.5 transition hover:bg-white/12"
                >
                  <Icon size={18} strokeWidth={2.5} className="text-teal-200" />

                  <p className="text-xs font-extrabold">{item.title}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}